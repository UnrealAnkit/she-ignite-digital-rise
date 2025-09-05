-- Create sample past events and trainings for testing
-- Run this in your Supabase SQL Editor

-- Insert sample past events
INSERT INTO public.events (
    title,
    description,
    event_date,
    event_time,
    location,
    image_url,
    registration_enabled,
    max_attendees,
    price,
    currency,
    status,
    registration_fields,
    thank_you_message,
    page_link,
    payment_link
) VALUES 
(
    'SHELeads Digital Marketing Masterclass 2024',
    'An intensive workshop covering advanced digital marketing strategies, social media optimization, and content creation techniques for women entrepreneurs.',
    '2024-01-15',
    '10:00:00',
    'Online - Zoom',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    false,
    75,
    49.99,
    'USD',
    'ended',
    '["name", "email", "phone", "business_name", "experience_level"]',
    'Thank you for attending the SHELeads Digital Marketing Masterclass! Access to recordings and materials will be sent via email.',
    'https://sheleadsindia.com/digital-marketing-masterclass',
    'https://payments.sheleadsindia.com/digital-marketing-masterclass'
),
(
    'Women in Tech Networking Event 2024',
    'A networking event bringing together women in technology, featuring panel discussions, mentorship opportunities, and startup showcases.',
    '2024-02-20',
    '18:00:00',
    'Tech Hub Mumbai',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
    false,
    120,
    0.00,
    'USD',
    'ended',
    '["name", "email", "phone", "company", "role", "interests"]',
    'Thank you for joining our Women in Tech Networking Event! We look forward to seeing you at future events.',
    'https://sheleadsindia.com/women-in-tech-networking',
    ''
),
(
    'AI for Business Growth Workshop',
    'Learn how to leverage artificial intelligence tools and strategies to scale your business operations and improve customer engagement.',
    '2024-03-10',
    '14:00:00',
    'Online - Zoom',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    false,
    50,
    79.99,
    'USD',
    'ended',
    '["name", "email", "phone", "business_type", "current_ai_usage"]',
    'Thank you for attending the AI for Business Growth Workshop! Workshop materials and AI tool recommendations will be shared via email.',
    'https://sheleadsindia.com/ai-business-growth-workshop',
    'https://payments.sheleadsindia.com/ai-workshop'
);

-- Insert sample past trainings
INSERT INTO public.trainings (
    title,
    description,
    start_date,
    start_time,
    end_date,
    end_time,
    location,
    image_url,
    level,
    duration,
    max_participants,
    price,
    currency,
    status,
    topics,
    requirements,
    instructor,
    instructor_bio,
    registration_enabled,
    registration_fields,
    certificate_provided,
    materials_included,
    page_link,
    payment_link
) VALUES 
(
    'Complete Email Marketing Course',
    'Master email marketing from basics to advanced strategies. Learn list building, automation, segmentation, and analytics to grow your business.',
    '2024-01-08',
    '10:00:00',
    '2024-01-12',
    '16:00:00',
    'Online - Zoom',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
    'Beginner',
    '5 days',
    30,
    199.99,
    'USD',
    'completed',
    '["Email Marketing Basics", "List Building", "Automation", "Segmentation", "Analytics", "A/B Testing"]',
    '["Basic computer skills", "Email account", "Business or personal project to work on"]',
    'Sarah Johnson',
    'Sarah is a certified email marketing specialist with 8+ years of experience helping businesses grow through strategic email campaigns. She has worked with over 500+ companies.',
    false,
    '["name", "email", "phone", "business_name", "current_email_tools"]',
    true,
    '["Email Templates", "Automation Workflows", "Analytics Dashboard", "Best Practices Guide"]',
    'https://sheleadsindia.com/email-marketing-course',
    'https://payments.sheleadsindia.com/email-marketing-course'
),
(
    'Social Media Strategy Bootcamp',
    'Intensive 3-day bootcamp covering social media strategy, content creation, community management, and paid advertising across all major platforms.',
    '2024-02-05',
    '09:00:00',
    '2024-02-07',
    '17:00:00',
    'Online - Zoom',
    'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
    'Intermediate',
    '3 days',
    25,
    299.99,
    'USD',
    'completed',
    '["Strategy Development", "Content Creation", "Community Management", "Paid Advertising", "Analytics", "Influencer Marketing"]',
    '["Basic social media knowledge", "Active social media accounts", "Business or personal brand"]',
    'Maria Rodriguez',
    'Maria is a social media strategist and influencer with 10+ years of experience. She has helped 200+ businesses build their social media presence and grow their following.',
    false,
    '["name", "email", "phone", "business_name", "social_media_platforms", "goals"]',
    true,
    '["Strategy Templates", "Content Calendar", "Analytics Tools", "Advertising Guides"]',
    'https://sheleadsindia.com/social-media-bootcamp',
    'https://payments.sheleadsindia.com/social-media-bootcamp'
),
(
    'E-commerce Growth Masterclass',
    'Learn advanced e-commerce strategies including conversion optimization, customer retention, inventory management, and scaling operations.',
    '2024-03-15',
    '10:00:00',
    '2024-03-17',
    '16:00:00',
    'Online - Zoom',
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    'Advanced',
    '3 days',
    20,
    399.99,
    'USD',
    'completed',
    '["Conversion Optimization", "Customer Retention", "Inventory Management", "Scaling Operations", "Analytics", "Customer Service"]',
    '["Existing e-commerce business", "Basic understanding of online selling", "Access to business analytics"]',
    'Dr. Priya Sharma',
    'Dr. Priya Sharma is an e-commerce expert and business consultant with 12+ years of experience. She has helped 100+ online businesses scale from startup to 7-figure revenue.',
    false,
    '["name", "email", "phone", "business_name", "current_revenue", "platform_used"]',
    true,
    '["Growth Strategies", "Analytics Templates", "Customer Journey Maps", "Scaling Checklist"]',
    'https://sheleadsindia.com/ecommerce-masterclass',
    'https://payments.sheleadsindia.com/ecommerce-masterclass'
);

-- Verify the insertions
SELECT 'Sample past events and trainings created successfully' as message
WHERE EXISTS (
  SELECT 1 FROM public.events WHERE status = 'ended'
) AND EXISTS (
  SELECT 1 FROM public.trainings WHERE status = 'completed'
);

-- Show count of past events and trainings
SELECT 
  (SELECT COUNT(*) FROM public.events WHERE status = 'ended') as past_events_count,
  (SELECT COUNT(*) FROM public.trainings WHERE status = 'completed') as past_trainings_count;
