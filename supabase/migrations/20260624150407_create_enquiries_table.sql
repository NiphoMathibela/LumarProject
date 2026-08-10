/*
# Create enquiries table for Lumar Careers contact form

1. New Tables
- `enquiries`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) - Full name of the person enquiring
  - `email` (text, not null) - Email address for reply
  - `phone` (text) - Phone or WhatsApp number
  - `type` (text, not null) - Type of enquirer: candidate, employer, training_provider, other
  - `message` (text, not null) - The enquiry message
  - `created_at` (timestamptz, default now) - When the enquiry was submitted

2. Security
- Enable RLS on `enquiries`.
- Allow anonymous (public) inserts so anyone can submit the contact form.
- Allow anonymous reads for admin visibility (in a real app this would be restricted).
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  type text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries" ON enquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_enquiries" ON enquiries;
CREATE POLICY "anon_select_enquiries" ON enquiries FOR SELECT
TO anon, authenticated USING (true);
