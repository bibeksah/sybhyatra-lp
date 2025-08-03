import { createClient } from "@supabase/supabase-js"

// The Supabase Admin client uses the SERVICE_ROLE_KEY for elevated privileges.
// It should only be used in a secure server-side environment.
// NEVER expose this key on the client-side.
export const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
