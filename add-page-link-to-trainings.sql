-- Add page_link column to trainings table
-- This allows trainings to have direct links to custom pages (like /powerpoint-training, /canva-ai-workshop, etc.)

ALTER TABLE trainings 
ADD COLUMN page_link TEXT;

-- Add a comment to document the column purpose
COMMENT ON COLUMN trainings.page_link IS 'Optional URL link to a custom training page (e.g., /powerpoint-training, /canva-ai-workshop)';
