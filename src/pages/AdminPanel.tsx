import { useEffect, useState } from "react";
import { fetchBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost, BlogPost } from "@/lib/blogService";
import { fetchEvents, createEvent, updateEvent, deleteEvent, Event, fetchRegistrationsWithEvents, RegistrationWithEvent } from "@/lib/eventService";
import { fetchTrainings, createTraining, updateTraining, deleteTraining, Training, fetchTrainingRegistrationsWithTrainings, TrainingRegistrationWithTraining } from "@/lib/trainingService";
import { getCurrentUser, signOut, onAuthStateChange, User } from "@/lib/authService";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AdminLogin from "@/components/AdminLogin";
import { LogOut, Plus, Edit, Trash2, Users, Calendar, FileText, Settings, BookOpen, Eye, Save, X, Search, Filter, BarChart3, TrendingUp, Clock, MapPin, User as UserIcon, Mail, Phone, CheckCircle, AlertCircle, Star } from "lucide-react";
import ImageUpload from "@/components/ImageUpload";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";

const emptyBlogForm = {
  title: "",
  excerpt: "",
  content: "",
  category: "Digital Marketing",
  author: "",
  read_time: "5 min read",
  featured: false,
  image_url: "",
  tags: [] as string[],
  published_at: new Date().toISOString(),
};

const emptyEventForm = {
  title: "",
  description: "",
  event_date: "",
  event_time: "",
  location: "",
  image_url: "",
  registration_enabled: true,
  max_attendees: 100,
  price: 0,
  currency: "USD",
  payment_link: "",
  status: "draft" as const,
  registration_fields: ["name", "email", "phone"],
  thank_you_message: "Thank you for registering! We'll send you more details soon.",
};

const emptyTrainingForm = {
  title: "",
  description: "",
  start_date: "",
  start_time: "",
  end_date: "",
  end_time: "",
  location: "",
  image_url: "",
  level: "Beginner" as const,
  duration: "",
  max_participants: 50,
  price: 0,
  currency: "USD",
  payment_link: "",
  status: "draft" as const,
  topics: [] as string[],
  requirements: [] as string[],
  instructor: "",
  instructor_bio: "",
  registration_enabled: true,
  registration_fields: ["name", "email", "phone"],
  certificate_provided: false,
  materials_included: [] as string[],
};

const categories = [
  "Digital Marketing",
  "AI & Technology", 
  "Business Growth",
  "Success Stories",
  "Leadership",
  "Finance",
  "Networking",
  "Personal Development"
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AdminPanel() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  
  // Blog state
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [postsLoading, setPostsLoading] = useState(true);
  const [blogForm, setBlogForm] = useState<any>(emptyBlogForm);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  
  // Event state
  const [events, setEvents] = useState<Event[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [eventForm, setEventForm] = useState<any>(emptyEventForm);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [registrations, setRegistrations] = useState<RegistrationWithEvent[]>([]);
  const [registrationsLoading, setRegistrationsLoading] = useState(true);
  
  // Training state
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [trainingsLoading, setTrainingsLoading] = useState(true);
  const [trainingForm, setTrainingForm] = useState<any>(emptyTrainingForm);
  const [editingTrainingId, setEditingTrainingId] = useState<string | null>(null);
  const [trainingRegistrations, setTrainingRegistrations] = useState<TrainingRegistrationWithTraining[]>([]);
  const [trainingRegistrationsLoading, setTrainingRegistrationsLoading] = useState(true);
  
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Check initial auth state
    getCurrentUser().then((user) => {
      setUser(user);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadPosts = () => {
    setPostsLoading(true);
    fetchBlogPosts()
      .then((data) => {
        setPosts(data || []);
        setPostsLoading(false);
      })
      .catch((err) => {
        console.error("Error loading posts:", err);
        setError("Failed to load posts");
        setPostsLoading(false);
      });
  };

  const loadEvents = () => {
    setEventsLoading(true);
    fetchEvents()
      .then((data) => {
        setEvents(data);
        setEventsLoading(false);
      })
      .catch(() => {
        setError("Failed to load events");
        setEventsLoading(false);
      });
  };

  const loadTrainings = () => {
    setTrainingsLoading(true);
    fetchTrainings()
      .then((data) => {
        setTrainings(data);
        setTrainingsLoading(false);
      })
      .catch(() => {
        setError("Failed to load trainings");
        setTrainingsLoading(false);
      });
  };

  const loadRegistrations = (eventId?: string) => {
    setRegistrationsLoading(true);
    fetchRegistrationsWithEvents(eventId)
      .then((data) => {
        setRegistrations(data || []);
        setRegistrationsLoading(false);
      })
      .catch((err) => {
        console.error("Error loading registrations:", err);
        setRegistrations([]);
        setRegistrationsLoading(false);
      });
  };

  const loadTrainingRegistrations = (trainingId?: string) => {
    setTrainingRegistrationsLoading(true);
    fetchTrainingRegistrationsWithTrainings(trainingId)
      .then((data) => {
        setTrainingRegistrations(data || []);
        setTrainingRegistrationsLoading(false);
      })
      .catch((err) => {
        console.error("Error loading training registrations:", err);
        setTrainingRegistrations([]);
        setTrainingRegistrationsLoading(false);
      });
  };

  useEffect(() => {
    if (user) {
      loadPosts();
      loadEvents();
      loadTrainings();
      loadRegistrations();
      loadTrainingRegistrations();

      // Set up real-time subscriptions for registrations
      const eventRegistrationsSubscription = supabase
        .channel('event-registrations')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'registrations'
          },
          (payload) => {
            console.log('Event registration change:', payload);
            // Reload registrations when there's a change
            loadRegistrations();
          }
        )
        .subscribe();

      const trainingRegistrationsSubscription = supabase
        .channel('training-registrations')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'training_registrations'
          },
          (payload) => {
            console.log('Training registration change:', payload);
            // Reload training registrations when there's a change
            loadTrainingRegistrations();
          }
        )
        .subscribe();

      // Cleanup subscriptions on unmount
      return () => {
        eventRegistrationsSubscription.unsubscribe();
        trainingRegistrationsSubscription.unsubscribe();
      };
    }
  }, [user]);

  const handleBlogChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setBlogForm((f: any) => ({
      ...f,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEventChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setEventForm((f: any) => ({
      ...f,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTrainingChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setTrainingForm((f: any) => ({
      ...f,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBlogTagsChange = (e: any) => {
    setBlogForm((f: any) => ({ ...f, tags: e.target.value.split(",").map((t: string) => t.trim()) }));
  };

  const handleEventFieldsChange = (e: any) => {
    setEventForm((f: any) => ({ ...f, registration_fields: e.target.value.split(",").map((t: string) => t.trim()) }));
  };

  const handleTrainingTopicsChange = (e: any) => {
    setTrainingForm((f: any) => ({ ...f, topics: e.target.value.split(",").map((t: string) => t.trim()) }));
  };

  const handleTrainingFieldsChange = (e: any) => {
    setTrainingForm((f: any) => ({ ...f, registration_fields: e.target.value.split(",").map((t: string) => t.trim()) }));
  };

  const handleTrainingMaterialsChange = (e: any) => {
    setTrainingForm((f: any) => ({ ...f, materials_included: e.target.value.split(",").map((t: string) => t.trim()) }));
  };

  const handleEditBlog = (post: BlogPost) => {
    setEditingBlogId(post.id);
    setBlogForm({ 
      ...post, 
      tags: post.tags || [],
      published_at: post.published_at || new Date().toISOString(),
      image_url: post.image_url || "",
      featured: Boolean(post.featured)
    });
    setActiveTab("blogs");
  };

  const handleEditEvent = (event: Event) => {
    setEditingEventId(event.id);
    setEventForm({ ...event, registration_fields: event.registration_fields || [] });
    setActiveTab("events");
  };

  const handleEditTraining = (training: Training) => {
    setEditingTrainingId(training.id);
    setTrainingForm({ 
      ...training, 
      topics: training.topics || [],
      requirements: training.requirements || [],
      registration_fields: training.registration_fields || [],
      materials_included: training.materials_included || []
    });
    setActiveTab("trainings");
  };

  const handleDeleteBlog = async (id: string) => {
    if (!window.confirm("Delete this blog post?")) return;
    await deleteBlogPost(id);
    loadPosts();
  };

  const handleDeleteEvent = async (id: string) => {
    if (!window.confirm("Delete this event?")) return;
    await deleteEvent(id);
    loadEvents();
  };

  const handleDeleteTraining = async (id: string) => {
    if (!window.confirm("Delete this training?")) return;
    await deleteTraining(id);
    loadTrainings();
  };

  const handleBlogSubmit = async (e: any) => {
    e.preventDefault();
    setSaving(true);
    try {
      // Process the form data to ensure it matches the frontend format
      const processedForm = {
        ...blogForm,
        tags: Array.isArray(blogForm.tags) ? blogForm.tags : [],
        published_at: blogForm.published_at || new Date().toISOString(),
        featured: Boolean(blogForm.featured),
        image_url: blogForm.image_url || "",
      };
      
      if (editingBlogId) {
        await updateBlogPost(editingBlogId, processedForm);
      } else {
        await createBlogPost(processedForm);
      }
      setBlogForm(emptyBlogForm);
      setEditingBlogId(null);
      loadPosts();
      alert("Blog post saved successfully!");
    } catch (err) {
      console.error("Error saving blog post:", err);
      alert("Error saving blog post");
    }
    setSaving(false);
  };

  const handleEventSubmit = async (e: any) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingEventId) {
        await updateEvent(editingEventId, eventForm);
      } else {
        await createEvent(eventForm);
      }
      setEventForm(emptyEventForm);
      setEditingEventId(null);
      loadEvents();
    } catch (err) {
      alert("Error saving event");
    }
    setSaving(false);
  };

  const handleTrainingSubmit = async (e: any) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      console.log('Submitting training form:', trainingForm);
      
      // Validate required fields
      if (!trainingForm.title || !trainingForm.instructor || !trainingForm.start_date) {
        alert("Please fill in all required fields (Title, Instructor, Start Date)");
        setSaving(false);
        return;
      }
      
      // Validate date format
      if (!trainingForm.start_date || trainingForm.start_date.trim() === '') {
        alert("Please provide a valid start date");
        setSaving(false);
        return;
      }
      
      // Ensure arrays are properly formatted and handle empty dates
      const processedForm = {
        ...trainingForm,
        topics: Array.isArray(trainingForm.topics) ? trainingForm.topics : [],
        requirements: Array.isArray(trainingForm.requirements) ? trainingForm.requirements : [],
        registration_fields: Array.isArray(trainingForm.registration_fields) ? trainingForm.registration_fields : [],
        materials_included: Array.isArray(trainingForm.materials_included) ? trainingForm.materials_included : [],
        // Handle empty date fields - set to null instead of empty string
        end_date: trainingForm.end_date && trainingForm.end_date.trim() !== '' ? trainingForm.end_date : null,
        end_time: trainingForm.end_time && trainingForm.end_time.trim() !== '' ? trainingForm.end_time : null,
        instructor_bio: trainingForm.instructor_bio && trainingForm.instructor_bio.trim() !== '' ? trainingForm.instructor_bio : null
      };
      
      console.log('Processed training form:', processedForm);
      
      if (editingTrainingId) {
        await updateTraining(editingTrainingId, processedForm);
      } else {
        await createTraining(processedForm);
      }
      
      setTrainingForm(emptyTrainingForm);
      setEditingTrainingId(null);
      loadTrainings();
      alert("Training saved successfully!");
    } catch (err: any) {
      console.error("Error saving training:", err);
      alert(`Error saving training: ${err.message || 'Unknown error'}`);
    }
    setSaving(false);
  };

  const handleCancelBlog = () => {
    setBlogForm(emptyBlogForm);
    setEditingBlogId(null);
  };

  const handleCancelEvent = () => {
    setEventForm(emptyEventForm);
    setEditingEventId(null);
  };

  const handleCancelTraining = () => {
    setTrainingForm(emptyTrainingForm);
    setEditingTrainingId(null);
  };

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const getStats = () => {
    const publishedEvents = events.filter(e => e.status === 'published').length;
    const publishedTrainings = trainings.filter(t => t.status === 'published').length;
    const totalRegistrations = registrations.length + trainingRegistrations.length;
    const featuredPosts = posts.filter(p => p.featured).length;

    return {
      totalPosts: posts.length,
      featuredPosts,
      publishedEvents,
      publishedTrainings,
      totalRegistrations
    };
  };

  const stats = getStats();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 font-medium">Loading admin panel...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AdminLogin onLogin={() => {}} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Settings className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                <UserIcon className="h-3 w-3 mr-1" />
                {user.email}
              </Badge>
            </div>
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="text-gray-600 hover:text-gray-900 border-gray-300 hover:border-gray-400"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Enhanced Tab Navigation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <TabsList className="grid w-full grid-cols-6 bg-white shadow-sm border border-gray-200 p-1 rounded-xl">
              <TabsTrigger 
                value="dashboard" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-all duration-300 font-medium"
              >
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </TabsTrigger>
              <TabsTrigger 
                value="blogs" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-all duration-300 font-medium"
              >
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Blogs</span>
              </TabsTrigger>
              <TabsTrigger 
                value="events" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-all duration-300 font-medium"
              >
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Events</span>
              </TabsTrigger>
              <TabsTrigger 
                value="trainings" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-all duration-300 font-medium"
              >
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Training</span>
              </TabsTrigger>
              <TabsTrigger 
                value="registrations" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-all duration-300 font-medium"
              >
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Registrations</span>
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-all duration-300 font-medium"
              >
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Settings</span>
              </TabsTrigger>
            </TabsList>
          </motion.div>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6 mt-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100 text-sm font-medium">Total Blog Posts</p>
                        <p className="text-3xl font-bold">{stats.totalPosts}</p>
                        <p className="text-blue-100 text-xs">{stats.featuredPosts} featured</p>
                      </div>
                      <FileText className="h-8 w-8 text-blue-200" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-100 text-sm font-medium">Published Events</p>
                        <p className="text-3xl font-bold">{stats.publishedEvents}</p>
                        <p className="text-green-100 text-xs">Active events</p>
                      </div>
                      <Calendar className="h-8 w-8 text-green-200" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-purple-100 text-sm font-medium">Published Trainings</p>
                        <p className="text-3xl font-bold">{stats.publishedTrainings}</p>
                        <p className="text-purple-100 text-xs">Active courses</p>
                      </div>
                      <BookOpen className="h-8 w-8 text-purple-200" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-orange-100 text-sm font-medium">Total Registrations</p>
                        <p className="text-3xl font-bold">{stats.totalRegistrations}</p>
                        <p className="text-orange-100 text-xs">All events & trainings</p>
                      </div>
                      <Users className="h-8 w-8 text-orange-200" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-white shadow-sm border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <Button
                      onClick={() => setActiveTab("blogs")}
                      className="h-20 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <div className="text-center">
                        <Plus className="h-6 w-6 mx-auto mb-2" />
                        <span className="font-medium">New Blog Post</span>
                      </div>
                    </Button>
                    <Button
                      onClick={() => setActiveTab("events")}
                      className="h-20 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <div className="text-center">
                        <Plus className="h-6 w-6 mx-auto mb-2" />
                        <span className="font-medium">New Event</span>
                      </div>
                    </Button>
                    <Button
                      onClick={() => setActiveTab("trainings")}
                      className="h-20 bg-primary hover:bg-primary/90 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <div className="text-center">
                        <Plus className="h-6 w-6 mx-auto mb-2" />
                        <span className="font-medium">New Training</span>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Enhanced Blog Tab */}
          <TabsContent value="blogs" className="space-y-6 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Card className="bg-white shadow-sm border border-gray-200">
                <CardHeader className="bg-gray-50 border-b border-gray-200">
                  <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
                    <Plus className="h-5 w-5 text-primary" />
                    {editingBlogId ? "Edit Blog Post" : "Create New Blog Post"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleBlogSubmit} className="grid gap-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Title *</label>
                        <input 
                          name="title" 
                          value={blogForm.title} 
                          onChange={handleBlogChange} 
                          placeholder="Enter blog title" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Author *</label>
                        <input 
                          name="author" 
                          value={blogForm.author} 
                          onChange={handleBlogChange} 
                          placeholder="Author name" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Excerpt *</label>
                      <input 
                        name="excerpt" 
                        value={blogForm.excerpt} 
                        onChange={handleBlogChange} 
                        placeholder="Brief description of the blog post" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Content *</label>
                      <textarea 
                        name="content" 
                        value={blogForm.content} 
                        onChange={handleBlogChange} 
                        placeholder="Write your blog content here (Markdown supported)" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 min-h-[200px] text-gray-900" 
                        required 
                      />
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Category</label>
                        <select 
                          name="category" 
                          value={blogForm.category} 
                          onChange={handleBlogChange} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900"
                        >
                          {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Read Time</label>
                        <input 
                          name="read_time" 
                          value={blogForm.read_time} 
                          onChange={handleBlogChange} 
                          placeholder="e.g., 5 min read" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Tags</label>
                        <input 
                          name="tags" 
                          value={blogForm.tags.join(", ")} 
                          onChange={handleBlogTagsChange} 
                          placeholder="tag1, tag2, tag3" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Blog Image</label>
                      <ImageUpload
                        value={blogForm.image_url}
                        onChange={(url) => setBlogForm((f: any) => ({ ...f, image_url: url }))}
                        folder="blog"
                        displayMode="full"
                      />
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Publish Date</label>
                        <input 
                          type="datetime-local" 
                          name="published_at" 
                          value={blogForm.published_at ? new Date(blogForm.published_at).toISOString().slice(0, 16) : ''} 
                          onChange={handleBlogChange} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Featured Post</label>
                        <div className="flex items-center gap-3 pt-3">
                          <input 
                            type="checkbox" 
                            name="featured" 
                            checked={blogForm.featured} 
                            onChange={handleBlogChange}
                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                          />
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <Star className="h-4 w-4" />
                            Mark as Featured Post
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <Button 
                        type="submit" 
                        disabled={saving}
                        className="bg-primary hover:bg-primary/90 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 px-6 py-3"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        {saving ? "Saving..." : editingBlogId ? "Update Post" : "Create Post"}
                      </Button>
                      {editingBlogId && (
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={handleCancelBlog}
                          className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200 px-6 py-3"
                        >
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Blog Posts List */}
              <Card className="bg-white shadow-sm border border-gray-200">
                <CardHeader className="bg-gray-50 border-b border-gray-200">
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-900">
                      <FileText className="h-5 w-5 text-primary" />
                      All Blog Posts ({posts.length})
                    </span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {posts.filter(p => p.featured).length} Featured
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {postsLoading ? (
                    <div className="text-center py-8">
                      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-gray-600 font-medium">Loading posts...</p>
                    </div>
                  ) : error ? (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  ) : (
                    <div className="grid gap-4">
                      {posts.map((post, index) => (
                        <motion.div
                          key={post.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 bg-white"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-semibold text-lg text-gray-900">{post.title}</h3>
                                {post.featured && (
                                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                                    <Star className="h-3 w-3 mr-1" />
                                    Featured
                                  </Badge>
                                )}
                                <Badge variant="outline" className="border-gray-300 text-gray-700">{post.category}</Badge>
                              </div>
                              <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
                              <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <UserIcon className="h-3 w-3" />
                                  {post.author}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {post.read_time}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {new Date(post.published_at).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant="outline" 
                                onClick={() => handleEditBlog(post)}
                                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                onClick={() => handleDeleteBlog(post.id)}
                                className="border-red-300 text-red-700 hover:bg-red-50 hover:text-red-900 transition-all duration-200"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Enhanced Events Tab */}
          <TabsContent value="events" className="space-y-6 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Card className="bg-white shadow-sm border border-gray-200">
                <CardHeader className="bg-gray-50 border-b border-gray-200">
                  <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
                    <Plus className="h-5 w-5 text-primary" />
                    {editingEventId ? "Edit Event" : "Create New Event"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleEventSubmit} className="grid gap-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Event Title *</label>
                        <input 
                          name="title" 
                          value={eventForm.title} 
                          onChange={handleEventChange} 
                          placeholder="Enter event title" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Location *</label>
                        <input 
                          name="location" 
                          value={eventForm.location} 
                          onChange={handleEventChange} 
                          placeholder="Event location" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Description *</label>
                      <textarea 
                        name="description" 
                        value={eventForm.description} 
                        onChange={handleEventChange} 
                        placeholder="Event description" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 min-h-[120px] text-gray-900" 
                        required 
                      />
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Event Date *</label>
                        <input 
                          name="event_date" 
                          type="date" 
                          value={eventForm.event_date} 
                          onChange={handleEventChange} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Event Time *</label>
                        <input 
                          name="event_time" 
                          type="time" 
                          value={eventForm.event_time} 
                          onChange={handleEventChange} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Event Image</label>
                      <ImageUpload
                        value={eventForm.image_url}
                        onChange={(url) => setEventForm((f: any) => ({ ...f, image_url: url }))}
                        folder="events"
                        displayMode="full"
                      />
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Max Attendees</label>
                        <input 
                          name="max_attendees" 
                          type="number" 
                          value={eventForm.max_attendees} 
                          onChange={handleEventChange} 
                          placeholder="100" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Price</label>
                        <input 
                          name="price" 
                          type="number" 
                          step="0.01" 
                          value={eventForm.price} 
                          onChange={handleEventChange} 
                          placeholder="0.00" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Currency</label>
                        <select 
                          name="currency" 
                          value={eventForm.currency} 
                          onChange={handleEventChange} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900"
                        >
                          <option value="USD">USD</option>
                          <option value="INR">INR</option>
                          <option value="EUR">EUR</option>
                          <option value="GBP">GBP</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Payment Link</label>
                      <input 
                        name="payment_link" 
                        type="url" 
                        value={eventForm.payment_link} 
                        onChange={handleEventChange} 
                        placeholder="https://rzp.io/rzp/your-payment-link" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                      />
                      <p className="text-xs text-gray-500">Enter the payment gateway link (e.g., Razorpay, Stripe, etc.)</p>
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Status</label>
                        <select 
                          name="status" 
                          value={eventForm.status} 
                          onChange={handleEventChange} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900"
                        >
                          <option value="draft">Draft</option>
                          <option value="published">Published</option>
                          <option value="ended">Ended</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Registration Fields</label>
                        <input 
                          name="registration_fields" 
                          value={eventForm.registration_fields.join(", ")} 
                          onChange={handleEventFieldsChange} 
                          placeholder="name, email, phone" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Thank You Message</label>
                      <textarea 
                        name="thank_you_message" 
                        value={eventForm.thank_you_message} 
                        onChange={handleEventChange} 
                        placeholder="Thank you message after registration" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 min-h-[120px] text-gray-900" 
                      />
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        name="registration_enabled" 
                        checked={eventForm.registration_enabled} 
                        onChange={handleEventChange}
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Enable Registration
                      </label>
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <Button 
                        type="submit" 
                        disabled={saving}
                        className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 px-6 py-3"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        {saving ? "Saving..." : editingEventId ? "Update Event" : "Create Event"}
                      </Button>
                      {editingEventId && (
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={handleCancelEvent}
                          className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200 px-6 py-3"
                        >
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Events List */}
              <Card className="bg-white shadow-sm border border-gray-200">
                <CardHeader className="bg-gray-50 border-b border-gray-200">
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-900">
                      <Calendar className="h-5 w-5 text-primary" />
                      All Events ({events.length})
                    </span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                      {events.filter(e => e.status === 'published').length} Published
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {eventsLoading ? (
                    <div className="text-center py-8">
                      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-gray-600 font-medium">Loading events...</p>
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {events.map((event, index) => (
                        <motion.div
                          key={event.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 bg-white"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-semibold text-lg text-gray-900">{event.title}</h3>
                                <Badge className={`${
                                  event.status === 'published' ? 'bg-green-100 text-green-800' :
                                  event.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-gray-100 text-gray-800'
                                }`}>
                                  {event.status}
                                </Badge>
                                {event.registration_enabled && (
                                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                                    <Users className="h-3 w-3 mr-1" />
                                    Registration Open
                                  </Badge>
                                )}
                              </div>
                              <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                              <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {event.event_date}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {event.event_time}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {event.location}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant="outline" 
                                onClick={() => handleEditEvent(event)}
                                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                onClick={() => handleDeleteEvent(event.id)}
                                className="border-red-300 text-red-700 hover:bg-red-50 hover:text-red-900 transition-all duration-200"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Enhanced Training Tab */}
          <TabsContent value="trainings" className="space-y-6 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Card className="bg-white shadow-sm border border-gray-200">
                <CardHeader className="bg-gray-50 border-b border-gray-200">
                  <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
                    <Plus className="h-5 w-5 text-primary" />
                    {editingTrainingId ? "Edit Training" : "Create New Training"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleTrainingSubmit} className="grid gap-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Training Title *</label>
                        <input 
                          name="title" 
                          value={trainingForm.title} 
                          onChange={handleTrainingChange} 
                          placeholder="Enter training title" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Instructor *</label>
                        <input 
                          name="instructor" 
                          value={trainingForm.instructor} 
                          onChange={handleTrainingChange} 
                          placeholder="Instructor name" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Description *</label>
                      <textarea 
                        name="description" 
                        value={trainingForm.description} 
                        onChange={handleTrainingChange} 
                        placeholder="Training description" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 min-h-[120px] text-gray-900" 
                        required 
                      />
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-4">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Start Date *</label>
                        <input 
                          name="start_date" 
                          type="date" 
                          value={trainingForm.start_date} 
                          onChange={handleTrainingChange} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Start Time *</label>
                        <input 
                          name="start_time" 
                          type="time" 
                          value={trainingForm.start_time} 
                          onChange={handleTrainingChange} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Duration *</label>
                        <input 
                          name="duration" 
                          value={trainingForm.duration} 
                          onChange={handleTrainingChange} 
                          placeholder="e.g., 2 hours" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Level</label>
                        <select 
                          name="level" 
                          value={trainingForm.level} 
                          onChange={handleTrainingChange} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900"
                        >
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Location *</label>
                      <input 
                        name="location" 
                        value={trainingForm.location} 
                        onChange={handleTrainingChange} 
                        placeholder="Training location" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Training Image</label>
                      <ImageUpload
                        value={trainingForm.image_url}
                        onChange={(url) => setTrainingForm((f: any) => ({ ...f, image_url: url }))}
                        folder="trainings"
                        displayMode="full"
                      />
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Topics (comma separated)</label>
                        <input 
                          name="topics" 
                          value={trainingForm.topics.join(", ")} 
                          onChange={handleTrainingTopicsChange} 
                          placeholder="topic1, topic2, topic3" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Materials Included</label>
                        <input 
                          name="materials_included" 
                          value={trainingForm.materials_included.join(", ")} 
                          onChange={handleTrainingMaterialsChange} 
                          placeholder="material1, material2" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                        />
                      </div>
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-4">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Max Participants</label>
                        <input 
                          name="max_participants" 
                          type="number" 
                          value={trainingForm.max_participants} 
                          onChange={handleTrainingChange} 
                          placeholder="50" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Price</label>
                        <input 
                          name="price" 
                          type="number" 
                          step="0.01" 
                          value={trainingForm.price} 
                          onChange={handleTrainingChange} 
                          placeholder="0.00" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Currency</label>
                        <select 
                          name="currency" 
                          value={trainingForm.currency} 
                          onChange={handleTrainingChange} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900"
                        >
                          <option value="USD">USD</option>
                          <option value="INR">INR</option>
                          <option value="EUR">EUR</option>
                          <option value="GBP">GBP</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Status</label>
                        <select 
                          name="status" 
                          value={trainingForm.status} 
                          onChange={handleTrainingChange} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900"
                        >
                          <option value="draft">Draft</option>
                          <option value="published">Published</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Payment Link</label>
                      <input 
                        name="payment_link" 
                        type="url" 
                        value={trainingForm.payment_link} 
                        onChange={handleTrainingChange} 
                        placeholder="https://rzp.io/rzp/your-payment-link" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-gray-900" 
                      />
                      <p className="text-xs text-gray-500">Enter the payment gateway link (e.g., Razorpay, Stripe, etc.)</p>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox" 
                          name="registration_enabled" 
                          checked={trainingForm.registration_enabled} 
                          onChange={handleTrainingChange}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Enable Registration
                        </label>
                      </div>
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox" 
                          name="certificate_provided" 
                          checked={trainingForm.certificate_provided} 
                          onChange={handleTrainingChange}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Certificate Provided
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <Button 
                        type="submit" 
                        disabled={saving}
                        className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 px-6 py-3"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        {saving ? "Saving..." : editingTrainingId ? "Update Training" : "Create Training"}
                      </Button>
                      {editingTrainingId && (
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={handleCancelTraining}
                          className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200 px-6 py-3"
                        >
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Training List */}
              <Card className="bg-white shadow-sm border border-gray-200">
                <CardHeader className="bg-gray-50 border-b border-gray-200">
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-900">
                      <BookOpen className="h-5 w-5 text-primary" />
                      All Training Sessions ({trainings.length})
                    </span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {trainings.filter(t => t.status === 'published').length} Published
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {trainingsLoading ? (
                    <div className="text-center py-8">
                      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-gray-600 font-medium">Loading training sessions...</p>
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {trainings.map((training, index) => (
                        <motion.div
                          key={training.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 bg-white"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-semibold text-lg text-gray-900">{training.title}</h3>
                                <Badge className={`${
                                  training.status === 'published' ? 'bg-green-100 text-green-800' :
                                  training.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                                  training.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                                  'bg-gray-100 text-gray-800'
                                }`}>
                                  {training.status}
                                </Badge>
                                <Badge variant="outline" className="text-primary border-primary/30">
                                  {training.level}
                                </Badge>
                                {training.certificate_provided && (
                                  <Badge variant="outline" className="text-green-600 border-green-200">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Certificate
                                  </Badge>
                                )}
                              </div>
                              <p className="text-gray-600 text-sm mb-2">{training.description}</p>
                              <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <UserIcon className="h-3 w-3" />
                                  {training.instructor}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {training.start_date}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {training.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {training.location}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant="outline" 
                                onClick={() => handleEditTraining(training)}
                                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                onClick={() => handleDeleteTraining(training.id)}
                                className="border-red-300 text-red-700 hover:bg-red-50 hover:text-red-900 transition-all duration-200"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="registrations" className="space-y-6 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Event Registrations */}
              <Card className="bg-white shadow-sm border border-gray-200">
                <CardHeader className="bg-gray-50 border-b border-gray-200">
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-900">
                      <Calendar className="h-5 w-5 text-primary" />
                      Event Registrations
                    </span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                      {registrations.length} Total
                    </Badge>
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => loadRegistrations()}
                      disabled={registrationsLoading}
                    >
                      🔄 Refresh
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  {registrationsLoading ? (
                    <div className="text-center py-8">
                      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-gray-600 font-medium">Loading event registrations...</p>
                    </div>
                  ) : registrations.length === 0 ? (
                    <div className="text-center py-8">
                      <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">No event registrations yet.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {registrations.map((registration, index) => (
                        <motion.div
                          key={registration.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 bg-white"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-semibold text-lg text-gray-900">
                                  {registration.event_title || `Event ID: ${registration.event_id}`}
                                </h3>
                                <Badge className={`${
                                  registration.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                  registration.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                                }`}>
                                  {registration.status}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                  <span className="font-medium text-gray-600">Name:</span>
                                  <p className="text-gray-900">{registration.registration_data?.name || 'N/A'}</p>
                                </div>
                                <div>
                                  <span className="font-medium text-gray-600">Email:</span>
                                  <p className="text-gray-900">{registration.registration_data?.email || 'N/A'}</p>
                                </div>
                                <div>
                                  <span className="font-medium text-gray-600">Phone:</span>
                                  <p className="text-gray-900">{registration.registration_data?.phone || 'N/A'}</p>
                                </div>
                                <div>
                                  <span className="font-medium text-gray-600">Registered:</span>
                                  <p className="text-gray-900">{new Date(registration.created_at).toLocaleDateString()}</p>
                                </div>
                              </div>
                              {registration.event_date && (
                                <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {registration.event_date}
                                  </span>
                                  {registration.event_time && (
                                    <span className="flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      {registration.event_time}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => {
                                  const newStatus = registration.status === 'confirmed' ? 'pending' : 'confirmed';
                                  // You can implement status update functionality here
                                }}
                                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                              >
                                {registration.status === 'confirmed' ? 'Unconfirm' : 'Confirm'}
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Training Registrations */}
              <Card className="bg-white shadow-sm border border-gray-200">
                <CardHeader className="bg-gray-50 border-b border-gray-200">
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-900">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Training Registrations
                    </span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {trainingRegistrations.length} Total
                    </Badge>
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => loadTrainingRegistrations()}
                      disabled={trainingRegistrationsLoading}
                    >
                      🔄 Refresh
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  {trainingRegistrationsLoading ? (
                    <div className="text-center py-8">
                      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-gray-600 font-medium">Loading training registrations...</p>
                    </div>
                  ) : trainingRegistrations.length === 0 ? (
                    <div className="text-center py-8">
                      <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">No training registrations yet.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {trainingRegistrations.map((registration, index) => (
                        <motion.div
                          key={registration.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 bg-white"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-semibold text-lg text-gray-900">
                                  {registration.training_title || `Training ID: ${registration.training_id}`}
                                </h3>
                                <Badge className={`${
                                  registration.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                  registration.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                                }`}>
                                  {registration.status}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                  <span className="font-medium text-gray-600">Name:</span>
                                  <p className="text-gray-900">{registration.registration_data?.name || 'N/A'}</p>
                                </div>
                                <div>
                                  <span className="font-medium text-gray-600">Email:</span>
                                  <p className="text-gray-900">{registration.registration_data?.email || 'N/A'}</p>
                                </div>
                                <div>
                                  <span className="font-medium text-gray-600">Phone:</span>
                                  <p className="text-gray-900">{registration.registration_data?.phone || 'N/A'}</p>
                                </div>
                                <div>
                                  <span className="font-medium text-gray-600">Registered:</span>
                                  <p className="text-gray-900">{new Date(registration.created_at).toLocaleDateString()}</p>
                                </div>
                              </div>
                              {registration.training_start_date && (
                                <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {registration.training_start_date}
                                  </span>
                                  {registration.training_start_time && (
                                    <span className="flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      {registration.training_start_time}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => {
                                  const newStatus = registration.status === 'confirmed' ? 'pending' : 'confirmed';
                                  // You can implement status update functionality here
                                }}
                                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                              >
                                {registration.status === 'confirmed' ? 'Unconfirm' : 'Confirm'}
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Card className="bg-white shadow-sm border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Settings className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Settings panel coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
} 