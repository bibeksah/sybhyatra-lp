'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import { checkDeletionEligibility, deactivateAccount, getAccountInfo } from './actions';
import type { AccountInfo, EligibilityCheck } from '@/types/account-deletion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

type Step = 'login' | 'overview' | 'eligibility' | 'confirmation' | 'success';

export default function DeleteAccountPage() {
  const [step, setStep] = useState<Step>('login');
  const [user, setUser] = useState<User | null>(null);
  const [accountInfo, setAccountInfo] = useState<AccountInfo | null>(null);
  const [eligibility, setEligibility] = useState<EligibilityCheck | null>(null);
  const [confirmText, setConfirmText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getUser().then(({ data, error }) => {
      if (data.user && !error) {
        setUser(data.user);
        setStep('overview');
      }
    });
  }, []);

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setError('');

    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    setUser(data.user);
    setStep('overview');
    setLoading(false);
  };

  const loadAccountInfo = async () => {
    if (!user) return;

    setLoading(true);
    const info = await getAccountInfo(user.id);
    setAccountInfo(info);
    setLoading(false);
  };

  const checkEligibility = async () => {
    if (!user) return;

    setLoading(true);
    const result = await checkDeletionEligibility(user.id);
    setEligibility(result);

    if (result.eligible) {
      setStep('confirmation');
    } else {
      setStep('eligibility');
    }
    setLoading(false);
  };

  const handleDeactivate = async () => {
    if (!user || confirmText !== 'DELETE') return;

    setLoading(true);
    const result = await deactivateAccount(user.id);

    if (result.success) {
      setStep('success');
      // Auto logout after 3 seconds
      setTimeout(async () => {
        await supabase.auth.signOut();
        window.location.href = '/';
      }, 3000);
    } else {
      setError(result.error || 'Deactivation failed');
    }
    setLoading(false);
  };

  // Step 1: Login Form
  if (step === 'login') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Delete Your Account</h1>
            <p className="text-gray-600">Please log in to continue with account deletion.</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              handleLogin(
                formData.get('email') as string,
                formData.get('password') as string
              );
            }}
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <Input
                type="password"
                name="password"
                required
                placeholder="Enter your password"
                className="w-full"
              />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FFD400] hover:bg-[#FFD400]/90 text-[#162B4D] font-medium"
            >
              {loading ? 'Logging in...' : 'Continue'}
            </Button>
          </form>

          <p className="mt-6 text-sm text-gray-600 text-center">
            <a href="/" className="text-[#FFD400] hover:text-[#FFD400]/80 font-medium">
              Return to homepage
            </a>
          </p>
        </div>
      </div>
    );
  }

  // Step 2: Account Overview
  if (step === 'overview') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Account Deletion Request</h1>

          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-800 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-blue-800 text-sm">
                <strong>Before you proceed:</strong> Make sure you have completed all active rides
                and settled any pending payments.
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="text-gray-900">{user?.email}</p>
            </div>

            {accountInfo && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <p className="text-gray-900">{accountInfo.phone || 'Not provided'}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Account Created</label>
                  <p className="text-gray-900">
                    {new Date(accountInfo.created_at).toLocaleDateString()}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Total Rides</label>
                  <p className="text-gray-900">{accountInfo.ride_count}</p>
                </div>
              </>
            )}
          </div>

          <div className="flex gap-4">
            <Button
              onClick={() => {
                loadAccountInfo();
                checkEligibility();
              }}
              disabled={loading}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white"
            >
              {loading ? 'Checking...' : 'Continue with Deletion'}
            </Button>

            <Button
              onClick={async () => {
                await supabase.auth.signOut();
                window.location.href = '/';
              }}
              variant="outline"
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Eligibility Check (Blocked)
  if (step === 'eligibility' && eligibility && !eligibility.eligible) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <XCircle className="w-8 h-8 text-red-600" />
            <h1 className="text-2xl font-bold text-red-600">Account Deletion Blocked</h1>
          </div>

          <p className="text-gray-700 mb-6">
            Your account cannot be deleted at this time because you have:
          </p>

          {eligibility.blockers.activeRides && eligibility.blockers.activeRides.length > 0 && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <h3 className="font-semibold text-red-800 mb-2">
                Active Rides ({eligibility.blockers.activeRides.length})
              </h3>
              <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                {eligibility.blockers.activeRides.map((ride: any) => (
                  <li key={ride.id}>
                    Ride #{ride.id.substring(0, 8)} - Status: {ride.status}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {eligibility.blockers.pendingPayments &&
            eligibility.blockers.pendingPayments.length > 0 && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                <h3 className="font-semibold text-red-800 mb-2">
                  Pending Payments ({eligibility.blockers.pendingPayments.length})
                </h3>
                <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                  {eligibility.blockers.pendingPayments.map((payment: any) => (
                    <li key={payment.ride_id}>
                      Ride #{payment.ride_id.substring(0, 8)} - Amount: NPR {payment.amount}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          <p className="text-gray-600 mb-6">
            Please complete all rides and settle pending payments before attempting to delete your
            account.
          </p>

          <Button
            onClick={async () => {
              await supabase.auth.signOut();
              window.location.href = '/';
            }}
            className="w-full bg-[#162B4D] hover:bg-[#162B4D]/90 text-white"
          >
            Return to Homepage
          </Button>
        </div>
      </div>
    );
  }

  // Step 4: Confirmation (Type DELETE)
  if (step === 'confirmation') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Confirm Account Deletion</h1>

          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              This action will:
            </h3>
            <ul className="list-disc list-inside text-sm text-red-700 space-y-1 ml-7">
              <li>Deactivate your SubhYatra account</li>
              <li>Hide your profile from other users</li>
              <li>Prevent you from booking or accepting rides</li>
              <li>Remove your saved locations and payment methods</li>
              <li>Clear your ride history from the app</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
            <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Good news:
            </h3>
            <p className="text-sm text-blue-700 ml-7">
              You can reactivate your account anytime by simply logging back in within 90 days.
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type <span className="font-mono bg-gray-100 px-2 py-1 rounded">DELETE</span> to
              confirm:
            </label>
            <Input
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value.toUpperCase())}
              placeholder="DELETE"
              className="w-full"
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              {error}
            </div>
          )}

          <div className="flex gap-4">
            <Button
              onClick={handleDeactivate}
              disabled={loading || confirmText !== 'DELETE'}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white"
            >
              {loading ? 'Deactivating...' : 'Delete My Account'}
            </Button>

            <Button onClick={() => setStep('overview')} variant="outline" className="flex-1">
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Step 5: Success
  if (step === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-4">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">Account Deactivated</h1>

          <p className="text-gray-600 mb-6">
            Your SubhYatra account has been successfully deactivated. You can reactivate it anytime
            by logging back in within 90 days.
          </p>

          <p className="text-sm text-gray-500">Redirecting to homepage in 3 seconds...</p>
        </div>
      </div>
    );
  }

  return null;
}
