import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  Sparkles,
  TrendingUp,
  Award,
  Target,
  AlertTriangle
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { signIn, signUp, signOut, getCurrentUser, onAuthStateChange, User } from "@/lib/authService";

const OurCourses = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error("Error checking user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkUser();

    // Listen for auth state changes
    const { data: { subscription } } = onAuthStateChange((user) => {
      setUser(user);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await signIn(loginData.email, loginData.password);
      setSuccess("Login successful! You'll be notified when our courses launch.");
      setShowPopup(true);
      setLoginData({ email: "", password: "" });
    } catch (err: any) {
      setError(err.message || "Login failed. Please try again.");
      setShowPopup(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    console.log("Signup data:", signupData); // Debug log

    if (!signupData.name.trim()) {
      setError("Name is required.");
      setLoading(false);
      return;
    }

    if (!signupData.email) {
      setError("Email is required.");
      setLoading(false);
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    if (signupData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    try {
      await signUp(signupData.email, signupData.password, signupData.name);
      setSuccess("Account created successfully! Please check your email to verify your account. You'll be notified when our courses launch.");
      setShowPopup(true);
      setSignupData({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (err: any) {
      setError(err.message || "Signup failed. Please try again.");
      setShowPopup(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
      setSuccess("Logged out successfully.");
      setShowPopup(true);
    } catch (err: any) {
      setError(err.message || "Logout failed.");
      setShowPopup(true);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/media/IMG_0011.JPG"
            alt="Empowering Women Entrepreneurs"
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center center',
              height: '100vh',
              width: '100%',
              maxWidth: '100vw'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-foreground/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-2 sm:py-3 md:py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto text-background"
            style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
          >
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="p-4 bg-background/20 backdrop-blur-sm rounded-full"
              >
                <BookOpen className="h-12 w-12 text-background" />
              </motion.div>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-background"
            >
              Our Courses
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-background/90 mb-8"
            >
              Empowering women entrepreneurs with comprehensive digital skills
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-background/20 backdrop-blur-sm text-background rounded-full font-semibold mb-8"
            >
              <Sparkles className="h-5 w-5" />
              Coming Soon
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Login/Signup Section - Centered */}
      <section className="py-20 px-4 min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            {/* Stay Updated Section - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center mb-20"
            >
                {user ? (
                  <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="text-center pb-6">
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full shadow-lg">
                          <CheckCircle className="h-10 w-10 text-green-600" />
                        </div>
                      </div>
                      <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                        Welcome Back!
                      </CardTitle>
                      <p className="text-gray-600 mt-2">
                        You're all set to be notified when our courses launch.
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
                        <p className="text-sm text-green-700 mb-2 font-medium">Logged in as:</p>
                        <p className="font-semibold text-green-800">{user.email}</p>
                      </div>
                      <Button 
                        onClick={handleLogout} 
                        variant="outline" 
                        className="w-full h-12 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                      >
                        Sign Out
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                    <CardHeader className="text-center pb-6">
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full shadow-lg">
                          <Mail className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                        Stay Updated
                      </CardTitle>
                      <p className="text-gray-600 mt-2">
                        Login or create an account to be notified when our courses launch.
                      </p>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                      <Tabs defaultValue="login" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-xl">
                          <TabsTrigger 
                            value="login" 
                            className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-300"
                          >
                            Login
                          </TabsTrigger>
                          <TabsTrigger 
                            value="signup"
                            className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-300"
                          >
                            Sign Up
                          </TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="login" className="space-y-6 mt-6">
                          <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-3">
                              <Label htmlFor="login-email" className="text-sm font-semibold text-gray-700">
                                Email Address
                              </Label>
                              <Input
                                id="login-email"
                                type="email"
                                value={loginData.email}
                                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                placeholder="Enter your email"
                                required
                                className="h-12 border-2 border-gray-200 focus:border-primary focus:ring-0 rounded-xl transition-all duration-300"
                              />
                            </div>
                            <div className="space-y-3">
                              <Label htmlFor="login-password" className="text-sm font-semibold text-gray-700">
                                Password
                              </Label>
                              <div className="relative">
                                <Input
                                  id="login-password"
                                  type={showPassword ? "text" : "password"}
                                  value={loginData.password}
                                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                  placeholder="Enter your password"
                                  required
                                  className="h-12 border-2 border-gray-200 focus:border-primary focus:ring-0 rounded-xl pr-12 transition-all duration-300"
                                />
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-gray-100 rounded-lg"
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? (
                                    <EyeOff className="h-4 w-4 text-gray-500" />
                                  ) : (
                                    <Eye className="h-4 w-4 text-gray-500" />
                                  )}
                                </Button>
                              </div>
                            </div>
                            <Button 
                              type="submit" 
                              className="w-full h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]" 
                              disabled={loading}
                            >
                              {loading ? (
                                <div className="flex items-center gap-2">
                                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                  Signing in...
                                </div>
                              ) : (
                                "Sign In"
                              )}
                            </Button>
                          </form>
                        </TabsContent>
                        
                        <TabsContent value="signup" className="space-y-6 mt-6">
                          <form onSubmit={handleSignup} className="space-y-6">
                            <div className="space-y-3">
                              <Label htmlFor="signup-name" className="text-sm font-semibold text-gray-700">
                                Full Name
                              </Label>
                              <Input
                                id="signup-name"
                                type="text"
                                value={signupData.name}
                                onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                                placeholder="Enter your full name"
                                required
                                className="h-12 border-2 border-gray-200 focus:border-primary focus:ring-0 rounded-xl transition-all duration-300"
                              />
                            </div>
                            <div className="space-y-3">
                              <Label htmlFor="signup-email" className="text-sm font-semibold text-gray-700">
                                Email Address
                              </Label>
                              <Input
                                id="signup-email"
                                type="email"
                                value={signupData.email}
                                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                                placeholder="Enter your email address"
                                required
                                className="h-12 border-2 border-gray-200 focus:border-primary focus:ring-0 rounded-xl transition-all duration-300"
                              />
                            </div>
                            <div className="space-y-3">
                              <Label htmlFor="signup-password" className="text-sm font-semibold text-gray-700">
                                Password
                              </Label>
                              <div className="relative">
                                <Input
                                  id="signup-password"
                                  type={showSignupPassword ? "text" : "password"}
                                  value={signupData.password}
                                  onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                                  placeholder="Create a password"
                                  required
                                  className="h-12 border-2 border-gray-200 focus:border-primary focus:ring-0 rounded-xl pr-12 transition-all duration-300"
                                />
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-gray-100 rounded-lg"
                                  onClick={() => setShowSignupPassword(!showSignupPassword)}
                                >
                                  {showSignupPassword ? (
                                    <EyeOff className="h-4 w-4 text-gray-500" />
                                  ) : (
                                    <Eye className="h-4 w-4 text-gray-500" />
                                  )}
                                </Button>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <Label htmlFor="confirm-password" className="text-sm font-semibold text-gray-700">
                                Confirm Password
                              </Label>
                              <Input
                                id="confirm-password"
                                type="password"
                                value={signupData.confirmPassword}
                                onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                                placeholder="Confirm your password"
                                required
                                className="h-12 border-2 border-gray-200 focus:border-primary focus:ring-0 rounded-xl transition-all duration-300"
                              />
                            </div>
                            <Button 
                              type="submit" 
                              className="w-full h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]" 
                              disabled={loading}
                            >
                              {loading ? (
                                <div className="flex items-center gap-2">
                                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                  Creating account...
                                </div>
                              ) : (
                                "Create Account"
                              )}
                            </Button>
                          </form>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                )}
            </motion.div>

            {/* Get Ready Section - Below Login/Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl">
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">
                    Get Ready for Something Amazing
                  </h2>
                  
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 rounded-full font-semibold text-sm border border-orange-200">
                      <Clock className="h-4 w-4" />
                      Coming Soon • Under Development
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                    We're crafting comprehensive courses designed specifically for women entrepreneurs 
                    who want to master digital skills and grow their businesses online.
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {[
                      "Digital Marketing Mastery",
                      "Social Media Strategy", 
                      "E-commerce Fundamentals",
                      "AI Tools for Business",
                      "Personal Branding"
                    ].map((course, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-xl border border-gray-200/50 hover:shadow-md hover:scale-105 transition-all duration-300 group"
                      >
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                            {course}
                          </span>
                          <div className="text-xs text-orange-600 font-medium mt-1">
                            In Development
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              What You Can Expect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our courses will be designed with practical, real-world applications 
              to help you succeed in your entrepreneurial journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <TrendingUp className="h-6 w-6" />,
                title: "Growth-Focused",
                description: "Strategies that drive real business growth and revenue"
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Community-Driven",
                description: "Learn alongside other ambitious women entrepreneurs"
              },
              {
                icon: <Award className="h-6 w-6" />,
                title: "Expert-Led",
                description: "Courses taught by industry experts and successful entrepreneurs"
              },
              {
                icon: <Target className="h-6 w-6" />,
                title: "Action-Oriented",
                description: "Practical exercises and real-world applications"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/30 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Success/Error Popup */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {success ? (
                <>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Success
                </>
              ) : (
                <>
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  Error
                </>
              )}
            </DialogTitle>
            <DialogDescription className="text-left">
              {success || error}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => setShowPopup(false)} variant="outline">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OurCourses;
