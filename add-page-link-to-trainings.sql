-- Add missing columns to trainings table
-- This allows admins to specify custom detailed page URLs and payment links for each training

-- Add the page_link column
ALTER TABLE trainings ADD COLUMN IF NOT EXISTS page_link TEXT;

-- Add the payment_link column
ALTER TABLE trainings ADD COLUMN IF NOT EXISTS payment_link TEXT;

-- Add comments to document the purpose
COMMENT ON COLUMN trainings.page_link IS 'URL to the detailed training page (e.g., /email-marketing-ai-training, /canva-ai-workshop)';
COMMENT ON COLUMN trainings.payment_link IS 'URL to payment gateway (e.g., Razorpay, Stripe payment link)';

-- Create indexes for better performance when querying by these fields
CREATE INDEX IF NOT EXISTS idx_trainings_page_link ON trainings(page_link) WHERE page_link IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_trainings_payment_link ON trainings(payment_link) WHERE payment_link IS NOT NULL;

-- Update existing trainings to have empty values if they don't have these fields
UPDATE trainings SET page_link = '' WHERE page_link IS NULL;
UPDATE trainings SET payment_link = '' WHERE payment_link IS NULL;






