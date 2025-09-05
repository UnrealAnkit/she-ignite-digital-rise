-- Update database schema to better support past events and trainings
-- Run this in your Supabase SQL Editor

-- Add indexes for better performance on date-based queries
CREATE INDEX IF NOT EXISTS idx_events_date_status ON public.events(event_date, status);
CREATE INDEX IF NOT EXISTS idx_trainings_start_date_status ON public.trainings(start_date, status);

-- Add a function to automatically update event status based on date
CREATE OR REPLACE FUNCTION update_event_status_by_date()
RETURNS TRIGGER AS $$
BEGIN
    -- If event date is in the past and status is 'published', change to 'ended'
    IF NEW.event_date < CURRENT_DATE AND NEW.status = 'published' THEN
        NEW.status := 'ended';
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add a function to automatically update training status based on date
CREATE OR REPLACE FUNCTION update_training_status_by_date()
RETURNS TRIGGER AS $$
BEGIN
    -- If training start date is in the past and status is 'published', change to 'completed'
    IF NEW.start_date < CURRENT_DATE AND NEW.status = 'published' THEN
        NEW.status := 'completed';
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers to automatically update status based on dates
DROP TRIGGER IF EXISTS trigger_update_event_status ON public.events;
CREATE TRIGGER trigger_update_event_status
    BEFORE INSERT OR UPDATE ON public.events
    FOR EACH ROW
    EXECUTE FUNCTION update_event_status_by_date();

DROP TRIGGER IF EXISTS trigger_update_training_status ON public.trainings;
CREATE TRIGGER trigger_update_training_status
    BEFORE INSERT OR UPDATE ON public.trainings
    FOR EACH ROW
    EXECUTE FUNCTION update_training_status_by_date();

-- Update existing events that should be marked as 'ended'
UPDATE public.events 
SET status = 'ended' 
WHERE event_date < CURRENT_DATE 
  AND status = 'published';

-- Update existing trainings that should be marked as 'completed'
UPDATE public.trainings 
SET status = 'completed' 
WHERE start_date < CURRENT_DATE 
  AND status = 'published';

-- Add a view for upcoming events (for easier querying)
CREATE OR REPLACE VIEW upcoming_events AS
SELECT * FROM public.events
WHERE status = 'published' 
  AND event_date >= CURRENT_DATE
ORDER BY event_date ASC;

-- Add a view for past events (for easier querying)
CREATE OR REPLACE VIEW past_events AS
SELECT * FROM public.events
WHERE (status = 'published' OR status = 'ended') 
  AND event_date < CURRENT_DATE
ORDER BY event_date DESC;

-- Add a view for upcoming trainings (for easier querying)
CREATE OR REPLACE VIEW upcoming_trainings AS
SELECT * FROM public.trainings
WHERE status = 'published' 
  AND start_date >= CURRENT_DATE
ORDER BY start_date ASC;

-- Add a view for past trainings (for easier querying)
CREATE OR REPLACE VIEW past_trainings AS
SELECT * FROM public.trainings
WHERE (status = 'published' OR status = 'completed') 
  AND start_date < CURRENT_DATE
ORDER BY start_date DESC;

-- Grant permissions on views
GRANT SELECT ON upcoming_events TO public;
GRANT SELECT ON past_events TO public;
GRANT SELECT ON upcoming_trainings TO public;
GRANT SELECT ON past_trainings TO public;

-- Create a function to get event statistics
CREATE OR REPLACE FUNCTION get_event_stats()
RETURNS TABLE (
    total_events bigint,
    upcoming_events bigint,
    past_events bigint,
    published_events bigint,
    draft_events bigint
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        COUNT(*) as total_events,
        COUNT(*) FILTER (WHERE status = 'published' AND event_date >= CURRENT_DATE) as upcoming_events,
        COUNT(*) FILTER (WHERE (status = 'published' OR status = 'ended') AND event_date < CURRENT_DATE) as past_events,
        COUNT(*) FILTER (WHERE status = 'published') as published_events,
        COUNT(*) FILTER (WHERE status = 'draft') as draft_events
    FROM public.events;
END;
$$ LANGUAGE plpgsql;

-- Create a function to get training statistics
CREATE OR REPLACE FUNCTION get_training_stats()
RETURNS TABLE (
    total_trainings bigint,
    upcoming_trainings bigint,
    past_trainings bigint,
    published_trainings bigint,
    draft_trainings bigint
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        COUNT(*) as total_trainings,
        COUNT(*) FILTER (WHERE status = 'published' AND start_date >= CURRENT_DATE) as upcoming_trainings,
        COUNT(*) FILTER (WHERE (status = 'published' OR status = 'completed') AND start_date < CURRENT_DATE) as past_trainings,
        COUNT(*) FILTER (WHERE status = 'published') as published_trainings,
        COUNT(*) FILTER (WHERE status = 'draft') as draft_trainings
    FROM public.trainings;
END;
$$ LANGUAGE plpgsql;

-- Grant permissions on functions
GRANT EXECUTE ON FUNCTION get_event_stats() TO public;
GRANT EXECUTE ON FUNCTION get_training_stats() TO public;

-- Verify the updates
SELECT 'Database schema updated successfully for past events support' as message;

-- Show current statistics
SELECT 'Current Event Statistics:' as info;
SELECT * FROM get_event_stats();

SELECT 'Current Training Statistics:' as info;
SELECT * FROM get_training_stats();
