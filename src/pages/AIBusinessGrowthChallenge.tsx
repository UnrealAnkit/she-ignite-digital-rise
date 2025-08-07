import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, DollarSign, Clock, CheckCircle, Star, ArrowRight, Play, Sparkles, Zap, Target, Award, Coffee, Heart, Users as UsersIcon, BookOpen, Lightbulb, Phone, Video, Brain, TrendingUp, Rocket, Shield, Gift, Trophy, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const AIBusinessGrowthChallenge = () => {
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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
                 {/* Background Image */}
         <div className="absolute inset-0">
           <img 
             src="/media/IMG_0011.JPG" 
             alt="AI Business Growth Challenge Background" 
             className="w-full h-full object-cover"
             style={{
               objectPosition: 'center center',
               height: '100vh',
               width: '100%',
               maxWidth: '100vw'
             }}
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
         </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.div variants={staggerContainer}>
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg"
              variants={fadeInUp}
            >
              <Brain className="h-4 w-4" />
              EXCLUSIVE 7-DAY CHALLENGE
              <Brain className="h-4 w-4" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              7-Day AI + Business Growth Challenge
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-red-400 mb-4" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
              Transform Your Business with AI & Smart Tools
            </p>
            
            <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
              A comprehensive 7-day challenge designed exclusively for women entrepreneurs 
              to leverage AI tools and smart automation for business growth.
            </p>

            {/* Key Event Details */}
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
              variants={staggerContainer}
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:border-red-300 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Calendar className="h-8 w-8 text-red-400 mb-3 mx-auto" />
                <p className="font-semibold text-white">11th August 2025</p>
                <p className="text-sm text-white/80">Monday Start</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:border-red-300 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Clock className="h-8 w-8 text-red-400 mb-3 mx-auto" />
                <p className="font-semibold text-white">7 Days</p>
                <p className="text-sm text-white/80">Daily Challenges</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:border-red-300 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Users className="h-8 w-8 text-red-400 mb-3 mx-auto" />
                <p className="font-semibold text-white">Led by Rachna</p>
                <p className="text-sm text-white/80">SHELeadsIndia</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:border-red-300 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="w-8 h-8 text-red-400 mb-3 mx-auto flex items-center justify-center">
                  <span className="text-2xl font-bold">₹</span>
                </div>
                <p className="font-semibold text-white">₹1500/-</p>
                <p className="text-sm text-white/80">Complete Program</p>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                asChild 
                size="xl" 
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-2xl text-xl font-semibold shadow-2xl"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Rocket className="h-6 w-6 mr-3" />
                  Join the Challenge Now
                  <ArrowRight className="h-6 w-6 ml-3" />
                </a>
              </Button>
            </motion.div>
            
            <p className="text-sm text-white/90 mt-4" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
              <strong>⚡ Limited spots available. Join 50+ women entrepreneurs!</strong>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Meet Your Leader Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Meet Your Challenge Leader
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from an expert who has helped hundreds of women entrepreneurs 
              transform their businesses with AI and smart tools.
            </p>
          </motion.div>

          <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center md:text-left">
                                         <div className="w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 rounded-full overflow-hidden shadow-2xl mb-6">
                       <img 
                         src="/media/rachna ma'am.jpg" 
                         alt="Rachna - Challenge Leader" 
                         className="w-full h-full object-cover"
                       />
                     </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Rachna</h3>
                    <p className="text-lg text-red-600 font-semibold mb-4">AI Business Growth Expert | SHELeadsIndia</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-red-600" />
                        <span className="text-gray-700">10+ years in business growth & AI implementation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-red-600" />
                        <span className="text-gray-700">Helped 500+ women entrepreneurs scale their businesses</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Brain className="h-5 w-5 text-red-600" />
                        <span className="text-gray-700">Certified AI tools specialist & automation expert</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Trophy className="h-5 w-5 text-red-600" />
                        <span className="text-gray-700">Multiple business growth awards & recognition</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      "I'm passionate about helping women entrepreneurs leverage the power of AI and smart tools 
                      to grow their businesses efficiently. This 7-day challenge will give you practical, 
                      actionable strategies you can implement immediately."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* What You'll Learn Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What You'll Learn in 7 Days
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each day brings new insights, tools, and strategies to transform your business growth.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                day: "Day 1",
                title: "AI Foundation & Business Assessment",
                icon: Brain,
                description: "Understand AI basics and assess your current business processes for automation opportunities."
              },
              {
                day: "Day 2", 
                title: "Content Creation with AI",
                icon: BookOpen,
                description: "Learn to create engaging content faster using AI tools for social media and marketing."
              },
              {
                day: "Day 3",
                title: "Customer Service Automation",
                icon: Users,
                description: "Automate customer interactions and improve response times with smart tools."
              },
              {
                day: "Day 4",
                title: "Sales & Lead Generation",
                icon: TrendingUp,
                description: "Use AI to identify prospects and automate your sales process for better results."
              },
              {
                day: "Day 5",
                title: "Data Analysis & Insights",
                icon: Target,
                description: "Learn to analyze business data and make informed decisions using AI insights."
              },
              {
                day: "Day 6",
                title: "Process Automation",
                icon: Zap,
                description: "Automate repetitive tasks and workflows to save time and reduce errors."
              },
              {
                day: "Day 7",
                title: "Growth Strategy & Implementation",
                icon: Rocket,
                description: "Create your personalized AI-powered growth strategy and implementation plan."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <Badge className="bg-red-600 text-white">{item.day}</Badge>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* What's Included Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What's Included in Your Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed in your AI business growth journey.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                icon: CalendarDays,
                title: "7 Daily Live Sessions",
                description: "Interactive sessions with Rachna covering each day's topic and Q&A"
              },
              {
                icon: BookOpen,
                title: "Resource Library",
                description: "Access to AI tools, templates, and step-by-step guides"
              },
              {
                icon: Users,
                title: "Community Support",
                description: "Join our WhatsApp group for daily motivation and peer support"
              },
              {
                icon: Shield,
                title: "Lifetime Access",
                description: "Keep all materials and recordings for future reference"
              },
              {
                icon: Gift,
                title: "Bonus Tools",
                description: "Free access to premium AI tools and software during the challenge"
              },
              {
                icon: Trophy,
                title: "Certificate",
                description: "Completion certificate to showcase your AI business skills"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Investment in Your Business Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your business with AI tools and smart automation strategies.
            </p>
          </motion.div>

          <motion.div className="max-w-2xl mx-auto" variants={fadeInUp}>
            <Card className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">7-Day AI + Business Growth Challenge</h3>
                  <div className="text-6xl font-bold text-red-600 mb-2">₹1500</div>
                  <p className="text-gray-600">Complete Program</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">7 daily live training sessions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">AI tools and software access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Resource library and templates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Community support group</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Lifetime access to materials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Completion certificate</span>
                  </div>
                </div>

                <Button 
                  asChild 
                  size="xl" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Rocket className="h-6 w-6 mr-3" />
                    Join the Challenge Now
                    <ArrowRight className="h-6 w-6 ml-3" />
                  </a>
                </Button>

                <p className="text-sm text-gray-500 text-center mt-4">
                  ⚡ Limited spots available. Join 50+ women entrepreneurs!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about the 7-Day AI + Business Growth Challenge.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto space-y-6"
            variants={staggerContainer}
          >
            {[
              {
                question: "Do I need technical skills to join this challenge?",
                answer: "No technical skills required! This challenge is designed for beginners. We'll teach you everything from scratch and provide step-by-step guidance."
              },
              {
                question: "What if I miss a live session?",
                answer: "All sessions will be recorded and available in your resource library. You can watch them at your convenience and still participate in the community."
              },
              {
                question: "What AI tools will we learn?",
                answer: "We'll cover popular AI tools for content creation, customer service, data analysis, and process automation. All tools will be accessible during the challenge."
              },
              {
                question: "Is this only for online businesses?",
                answer: "No! The strategies and tools we'll cover work for all types of businesses - online, offline, service-based, product-based, and hybrid models."
              },
              {
                question: "What support will I get during the challenge?",
                answer: "You'll have access to our WhatsApp community group, daily Q&A sessions, and direct support from Rachna and the SHELeadsIndia team."
              },
              {
                question: "Can I implement these strategies immediately?",
                answer: "Absolutely! Each day focuses on practical, actionable strategies you can implement right away. You'll see results within the 7-day period."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Join 50+ women entrepreneurs who are already committed to growing their businesses with AI and smart tools.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                asChild 
                size="xl" 
                className="bg-white text-red-600 hover:bg-gray-100 px-12 py-6 rounded-2xl text-xl font-semibold shadow-2xl"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Rocket className="h-6 w-6 mr-3" />
                  Secure Your Spot Now
                  <ArrowRight className="h-6 w-6 ml-3" />
                </a>
              </Button>
            </motion.div>

            <p className="text-sm text-red-100 mt-6">
              <strong>⚡ Challenge starts Monday, 11th August 2025. Don't miss out!</strong>
            </p>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default AIBusinessGrowthChallenge; 