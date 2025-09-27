# Our Courses - Supabase Setup Guide

## Overview
This guide will help you set up Supabase authentication for the "Our Courses" page, including user registration, login, and course notification tracking.

## Prerequisites
- Supabase project created
- Supabase client configured in your app

## Setup Steps

### 1. Run SQL Queries
Execute the SQL queries from `supabase-courses-setup.sql` in your Supabase SQL Editor:

```bash
# Copy the contents of supabase-courses-setup.sql and run in Supabase SQL Editor
```

### 2. Configure Supabase Auth Settings

In your Supabase Dashboard:

1. Go to **Authentication** > **Settings**
2. Configure the following:
   - **Site URL**: `http://localhost:8080` (for development)
   - **Redirect URLs**: Add `http://localhost:8080/our-courses`
   - **Email Templates**: Customize as needed

### 3. Enable Email Authentication

1. Go to **Authentication** > **Providers**
2. Enable **Email** provider
3. Configure email settings:
   - **Enable email confirmations**: ON
   - **Enable email change confirmations**: ON

### 4. Test the Setup

1. Navigate to `/our-courses` on your website
2. Try signing up with a test email
3. Check your email for confirmation link
4. Verify the user appears in Supabase Auth and profiles table

## Database Tables Created

### `profiles`
- Stores additional user information
- Linked to auth.users via foreign key
- Includes course notification preferences

### `course_notifications`
- Tracks users who want course launch notifications
- Automatically populated when users sign up
- Can be used to send bulk notifications later

## Functions Created

### `handle_new_user()`
- Automatically creates profile when user signs up
- Triggered on auth.users INSERT

### `add_course_notification()`
- Adds user to course notification list
- Triggered on auth.users INSERT

### `get_user_profile(user_uuid)`
- Retrieves user profile with notification status
- Can be used in your app to check user preferences

## Troubleshooting

### Email Field Not Showing
If the email field is not visible in the signup form:

1. Check browser console for errors
2. Verify all UI components are imported correctly
3. Clear browser cache and reload
4. Check if there are any CSS conflicts

### Authentication Issues
1. Verify Supabase client configuration
2. Check API keys in environment variables
3. Ensure RLS policies are correctly set up
4. Check Supabase logs for errors

### Database Issues
1. Verify all tables are created successfully
2. Check RLS policies are enabled
3. Ensure triggers are working correctly
4. Test with Supabase SQL Editor

## Usage in Your App

### Check User Authentication Status
```typescript
import { getCurrentUser } from '@/lib/authService';

const user = await getCurrentUser();
if (user) {
  // User is logged in
  console.log('User email:', user.email);
}
```

### Get Course Notification Status
```sql
SELECT * FROM public.get_user_profile('user-uuid-here');
```

### Send Course Launch Notifications
```sql
-- Mark all pending notifications as sent
SELECT public.mark_notifications_sent();

-- Get list of users to notify
SELECT * FROM public.course_notification_requests WHERE notified = FALSE;
```

## Security Notes

- All tables have Row Level Security (RLS) enabled
- Users can only access their own data
- Admin functions are secured with SECURITY DEFINER
- Email addresses are validated through Supabase Auth

## Next Steps

1. Customize email templates in Supabase
2. Set up email service (SendGrid, etc.) for production
3. Create admin dashboard to manage course notifications
4. Implement course launch notification system
5. Add user profile management features


