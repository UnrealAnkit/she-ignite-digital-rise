import { supabase } from './supabaseClient';

export interface Course {
  id: string;
  title: string;
  description: string;
  focus_area: string;
  icon_name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export async function getActiveCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching courses:', error);
    throw new Error('Failed to fetch courses');
  }

  return data || [];
}

export async function getAllCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching courses:', error);
    throw new Error('Failed to fetch courses');
  }

  return data || [];
}

export async function createCourse(course: Omit<Course, 'id' | 'created_at' | 'updated_at'>): Promise<Course> {
  const { data, error } = await supabase
    .from('courses')
    .insert([course])
    .select()
    .single();

  if (error) {
    console.error('Error creating course:', error);
    throw new Error('Failed to create course');
  }

  return data;
}

export async function updateCourse(id: string, updates: Partial<Course>): Promise<Course> {
  const { data, error } = await supabase
    .from('courses')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating course:', error);
    throw new Error('Failed to update course');
  }

  return data;
}

export async function deleteCourse(id: string): Promise<void> {
  const { error } = await supabase
    .from('courses')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting course:', error);
    throw new Error('Failed to delete course');
  }
}
