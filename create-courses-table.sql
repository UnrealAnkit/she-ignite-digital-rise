-- Create courses table for Our Courses page
-- Run this in your Supabase SQL Editor

-- Create the courses table
CREATE TABLE IF NOT EXISTS public.courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  focus_area TEXT, -- e.g., 'Growth-Focused', 'Community-Driven', 'Expert-Led', 'Action-Oriented'
  icon_name TEXT, -- e.g., 'TrendingUp', 'Users', 'Award', 'Target' (for lucide-react icons)
  is_active BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

-- Create policies for the courses table
-- Allow everyone to view active courses
CREATE POLICY "Allow public to view active courses" ON public.courses
  FOR SELECT USING (is_active = true);

-- Allow authenticated users to view all courses
CREATE POLICY "Allow authenticated users to view all courses" ON public.courses
  FOR SELECT USING (auth.role() = 'authenticated');

-- Allow authenticated users to manage courses (you can restrict this to admin users later)
CREATE POLICY "Allow authenticated users to manage courses" ON public.courses
  FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');

-- Insert initial course data based on your "What You Can Expect" section
INSERT INTO public.courses (title, description, focus_area, icon_name, is_active)
VALUES
  ('Digital Marketing Mastery', 'Master the art of digital marketing with proven strategies and tools', 'Growth-Focused', 'TrendingUp', true),
  ('Social Media Strategy', 'Build and execute winning social media campaigns', 'Community-Driven', 'Users', true),
  ('E-commerce Fundamentals', 'Learn the essentials of online business and e-commerce', 'Action-Oriented', 'Target', true),
  ('AI Tools for Business', 'Leverage artificial intelligence to grow your business', 'Expert-Led', 'Award', true),
  ('Personal Branding', 'Build a powerful personal brand that attracts opportunities', 'Growth-Focused', 'Star', true)
ON CONFLICT (id) DO NOTHING;

-- Create an index for better performance
CREATE INDEX IF NOT EXISTS idx_courses_active ON public.courses(is_active);
CREATE INDEX IF NOT EXISTS idx_courses_focus_area ON public.courses(focus_area);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.courses TO anon, authenticated;


