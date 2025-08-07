-- Add page_link column to events table
-- Run this in your Supabase SQL Editor

-- Add page_link column to events table
ALTER TABLE public.events 
ADD COLUMN IF NOT EXISTS page_link TEXT;

-- Update existing events to have empty page_link if not set
UPDATE public.events 
SET page_link = '' 
WHERE page_link IS NULL;

-- Verify the changes
SELECT 'Page link column added successfully to events table' as message
WHERE EXISTS (
  SELECT 1 FROM information_schema.columns 
  WHERE table_name = 'events' AND column_name = 'page_link'
);

-- Show the updated table structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_schema = 'public' 
  AND table_name = 'events'
  AND column_name = 'page_link'
ORDER BY ordinal_position; 