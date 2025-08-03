-- Add a phone column to the waitlist table
ALTER TABLE public.waitlist
ADD COLUMN phone TEXT,
ADD CONSTRAINT waitlist_phone_key UNIQUE (phone);

-- Add a check constraint to ensure that a row has either an email or a phone, but not both.
-- This maintains data integrity.
ALTER TABLE public.waitlist
ADD CONSTRAINT check_email_or_phone CHECK (
    (email IS NOT NULL AND phone IS NULL) OR
    (email IS NULL AND phone IS NOT NULL)
);
