-- Supabase Setup for Our Courses Authentication
-- Run these queries in your Supabase SQL Editor

-- 1. Enable Row Level Security (RLS) for auth.users table
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- 2. Create a profiles table to store additional user information
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  course_notifications BOOLEAN DEFAULT TRUE
);

-- 3. Enable RLS on profiles table
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 4. Create policies for profiles table
-- Users can view their own profile
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Users can insert their own profile
CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- 5. Create a function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. Create trigger for new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 7. Create a course_notifications table to track who wants to be notified
CREATE TABLE IF NOT EXISTS public.course_notifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  notified BOOLEAN DEFAULT FALSE,
  notification_sent_at TIMESTAMP WITH TIME ZONE
);

-- 8. Enable RLS on course_notifications table
ALTER TABLE public.course_notifications ENABLE ROW LEVEL SECURITY;

-- 9. Create policies for course_notifications table
-- Users can view their own notifications
CREATE POLICY "Users can view own notifications" ON public.course_notifications
  FOR SELECT USING (auth.uid() = user_id);

-- Users can insert their own notifications
CREATE POLICY "Users can insert own notifications" ON public.course_notifications
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 10. Create a function to add course notification when user signs up
CREATE OR REPLACE FUNCTION public.add_course_notification()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.course_notifications (user_id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 11. Create trigger to add course notification on user signup
DROP TRIGGER IF EXISTS on_user_signup_add_notification ON auth.users;
CREATE TRIGGER on_user_signup_add_notification
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.add_course_notification();

-- 12. Create a function to get user profile with course notification status
CREATE OR REPLACE FUNCTION public.get_user_profile(user_uuid UUID)
RETURNS TABLE (
  id UUID,
  email TEXT,
  full_name TEXT,
  course_notifications BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    p.id,
    p.email,
    p.full_name,
    p.course_notifications,
    p.created_at
  FROM public.profiles p
  WHERE p.id = user_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 13. Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.profiles TO anon, authenticated;
GRANT ALL ON public.course_notifications TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_user_profile(UUID) TO anon, authenticated;

-- 14. Create an index for better performance
CREATE INDEX IF NOT EXISTS idx_course_notifications_user_id ON public.course_notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_course_notifications_email ON public.course_notifications(email);

-- 15. Optional: Create a view for admin to see all course notification requests
CREATE OR REPLACE VIEW public.course_notification_requests AS
SELECT 
  cn.id,
  cn.email,
  cn.created_at,
  cn.notified,
  cn.notification_sent_at,
  p.full_name
FROM public.course_notifications cn
LEFT JOIN public.profiles p ON cn.user_id = p.id
ORDER BY cn.created_at DESC;

-- Grant access to the view
GRANT SELECT ON public.course_notification_requests TO authenticated;

-- 16. Create a function to mark notifications as sent (for admin use)
CREATE OR REPLACE FUNCTION public.mark_notifications_sent()
RETURNS INTEGER AS $$
DECLARE
  updated_count INTEGER;
BEGIN
  UPDATE public.course_notifications 
  SET notified = TRUE, notification_sent_at = NOW()
  WHERE notified = FALSE;
  
  GET DIAGNOSTICS updated_count = ROW_COUNT;
  RETURN updated_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission to authenticated users (you can restrict this to admin only)
GRANT EXECUTE ON FUNCTION public.mark_notifications_sent() TO authenticated;






