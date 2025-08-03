import { createClient } from "@supabase/supabase-js"

// Create a single, shared Supabase client for use in the browser.
// This client uses the public API key and is safe to expose to users.
// By creating it in a separate module, we ensure it's a singleton and
// that environment variables are loaded correctly.
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
