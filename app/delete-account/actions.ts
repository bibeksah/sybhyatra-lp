'use server';

import { supabase } from '@/lib/supabase/client';
import type { EligibilityCheck, DeactivationResult, AccountInfo } from '@/types/account-deletion';

export async function checkDeletionEligibility(userId: string): Promise<EligibilityCheck> {
  try {
    const { data, error } = await supabase.rpc('check_account_deletion_eligibility', {
      p_user_id: userId,
    });

    if (error) {
      console.error('Eligibility check error:', error);
      return {
        eligible: false,
        blockers: { activeRides: [], pendingPayments: [] }
      };
    }

    return {
      eligible: data.eligible,
      blockers: {
        activeRides: data.blockers.active_rides || [],
        pendingPayments: data.blockers.pending_payments || [],
      },
    };
  } catch (error) {
    console.error('Unexpected error during eligibility check:', error);
    return {
      eligible: false,
      blockers: { activeRides: [], pendingPayments: [] }
    };
  }
}

export async function deactivateAccount(userId: string): Promise<DeactivationResult> {
  try {
    const { data, error } = await supabase.rpc('deactivate_user_account', {
      p_user_id: userId,
      p_reason: 'User requested deletion via website',
      p_admin_id: null,
    });

    if (error) {
      console.error('Deactivation error:', error);
      return { success: false, error: error.message };
    }

    return data as DeactivationResult;
  } catch (error: any) {
    console.error('Unexpected error during deactivation:', error);
    return { success: false, error: error?.message || 'Deactivation failed' };
  }
}

export async function getAccountInfo(userId: string): Promise<AccountInfo | null> {
  try {
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (profileError || !profile) {
      console.error('Profile fetch error:', profileError);
      return null;
    }

    const { count: rideCount, error: rideError } = await supabase
      .from('rides')
      .select('*', { count: 'exact', head: true })
      .or(`user_id.eq.${userId},driver_id.eq.${userId}`)
      .eq('status', 'completed');

    if (rideError) {
      console.error('Ride count error:', rideError);
    }

    return {
      user_id: profile.id,
      email: profile.email,
      phone: profile.phone,
      full_name: profile.full_name,
      created_at: profile.created_at,
      deleted_at: profile.deleted_at,
      ride_count: rideCount || 0,
      is_driver_eligible: profile.is_driver_eligible || false,
    };
  } catch (error) {
    console.error('Unexpected error fetching account info:', error);
    return null;
  }
}
