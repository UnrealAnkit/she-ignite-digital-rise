import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, DollarSign, Clock, CheckCircle, Star, ArrowRight, Play, Sparkles, Zap, Target, Award, Coffee, Heart, Users as UsersIcon, BookOpen, Lightbulb, Mail, TrendingUp, MessageSquare, BarChart } from "lucide-react";
import { motion } from "framer-motion";

const EmailMarketingAITraining = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const trainingIncludes = [
    "AI-powered email content creation techniques",
    "Email automation and sequence building", 
    "Personalization strategies using AI tools",
    "Subject line optimization with AI",
    "Analytics and performance tracking",
    "Ready-to-use email templates and workflows"
  ];

  const whyAttend = [
    "Master AI tools for email marketing automation",
    "Learn to write compelling email content faster",
    "Build email sequences that convert prospects into customers", 
    "Understand email analytics and optimization strategies"
  ];

  const previousEventPhotos = [
    "/media/DSC02058.JPG",
    "/media/DSC02132.JPG", 
    "/media/DSC02153.JPG",
    "/media/DSC02211.JPG",
    "/media/IMG_0013.JPG",
    "/media/IMG_0137.JPG",
    "/media/networking.JPG",
    "/media/Mentoring.JPG"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/media/IMG_0011.JPG"
            alt="Email Marketing AI Training"
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center center',
              height: '100vh',
              width: '100%',
              maxWidth: '100vw'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center max-w-4xl mx-auto text-white" variants={fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              TUESDAY TRAINING
              <Sparkles className="h-4 w-4" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              EMAIL MARKETING USING AI
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-red-400 mb-4" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
              Automate. Personalize. Convert.
            </p>
            
            <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
              Master the art of AI-powered email marketing to grow your business, 
              nurture relationships, and drive conversions like never before.
            </p>

            {/* Key Event Details */}
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
              variants={staggerContainer}
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:border-red-300 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Calendar className="h-8 w-8 text-red-400 mb-3 mx-auto" />
                <p className="font-semibold text-white">Every Tuesday</p>
                <p className="text-sm text-white/80">Weekly Training</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:border-red-300 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <MapPin className="h-8 w-8 text-red-400 mb-3 mx-auto" />
                <p className="font-semibold text-white">Online</p>
                <p className="text-sm text-white/80">Join from anywhere</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:border-red-300 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Clock className="h-8 w-8 text-red-400 mb-3 mx-auto" />
                <p className="font-semibold text-white">2 Hours</p>
                <p className="text-sm text-white/80">Focused Learning</p>
              </motion.div>
              

            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex justify-center"
              variants={fadeInUp}
            >
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => window.open('https://rebrand.ly/sheleadsindiatraining', '_blank')}
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Trainer Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Your <span className="text-red-600">Expert Trainer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from an industry expert who has mastered the art of AI-powered email marketing
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            <Card className="overflow-hidden shadow-xl border-0 bg-white">
              <CardContent className="p-0">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-red-500 to-red-600 p-8 text-white">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
                        <img
                          src="/media/founder-nikita.webp"
                          alt="Nikita Vora"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Nikita Vora</h3>
                      <p className="text-red-100 mb-4">Email Marketing AI Expert</p>
                      <button 
                        className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                        onClick={() => window.open('https://www.linkedin.com/in/nikitavora/', '_blank')}
                      >
                        View LinkedIn Profile
                      </button>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                          <Award className="h-5 w-5 text-red-600 mr-2" />
                          Expertise
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Nikita Vora is a renowned digital marketing strategist specializing in AI-powered email marketing. 
                          With extensive experience in automation, personalization, and conversion optimization, she has helped 
                          numerous businesses scale their email marketing efforts using cutting-edge AI tools.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                          <Target className="h-5 w-5 text-red-600 mr-2" />
                          What You'll Learn
                        </h4>
                        <ul className="text-gray-700 space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            AI-powered email content creation and optimization
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            Advanced automation and segmentation strategies
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            Performance tracking and analytics mastery
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* What's Included Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What's <span className="text-red-600">Included</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to master AI-powered email marketing
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {trainingIncludes.map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <CheckCircle className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium leading-relaxed">{item}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Attend Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why <span className="text-red-600">Attend</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your email marketing strategy with AI
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            {whyAttend.map((reason, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <Star className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <p className="text-gray-800 text-lg leading-relaxed">{reason}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Training Highlights */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Training <span className="text-red-600">Highlights</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Content Creation</h3>
              <p className="text-gray-600">Learn to create compelling email content using AI tools</p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Automation</h3>
              <p className="text-gray-600">Set up email sequences that work on autopilot</p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600">Improve open rates and conversions with AI insights</p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics</h3>
              <p className="text-gray-600">Track and measure your email marketing success</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Registration CTA */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Join Nikita Vora every Tuesday and master the art of AI-powered email marketing
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => window.open('https://rebrand.ly/sheleadsindiatraining', '_blank')}
              >
                Secure Your Spot
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-full"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                <span>Ask Questions</span>
              </Button>
            </motion.div>

            <div className="mt-8 text-red-100">
              <p className="text-lg">
                💡 Limited seats available • 🎯 Beginner-friendly • 🚀 Immediate implementation
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Previous Events Gallery */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Previous <span className="text-red-600">Training Sessions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the engagement and learning from our previous sessions
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerContainer}
          >
            {previousEventPhotos.map((photo, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={photo}
                  alt={`Previous training session ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default EmailMarketingAITraining;
