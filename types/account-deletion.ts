export interface EligibilityCheck {
  eligible: boolean;
  blockers: {
    activeRides: Array<{ id: string; status: string; user_id?: string; driver_id?: string }>;
    pendingPayments: Array<{ ride_id: string; amount: number; status: string }>;
  };
}

export interface DeactivationResult {
  success: boolean;
  error?: string;
  deactivated_at?: string;
}

export interface AccountInfo {
  user_id: string;
  email: string;
  phone: string | null;
  full_name: string | null;
  created_at: string;
  deleted_at: string | null;
  ride_count: number;
  is_driver_eligible: boolean;
}
