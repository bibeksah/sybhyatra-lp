-- Modify the 'email' column in the 'waitlist' table to allow NULL values.
-- This is necessary to allow entries where only a phone number is provided.
-- The existing CHECK constraint already ensures that either email or phone must have a value.
ALTER TABLE public.waitlist
ALTER COLUMN email DROP NOT NULL;
