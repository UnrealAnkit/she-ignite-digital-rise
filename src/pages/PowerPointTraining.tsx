import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, CheckCircle, Star, ArrowRight, Sparkles, Zap, Target, Video, Presentation, Palette, Lightbulb, Monitor, BookOpen, Heart } from "lucide-react";
import { motion } from "framer-motion";

const PowerPointTraining = () => {
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
    "Hands-on PowerPoint design session",
    "Brand-consistent template creation", 
    "Professional post design techniques",
    "Brochure and marketing material templates",
    "Real-time practice with guided instruction",
    "Digital templates and resources to take home"
  ];

  const benefits = [
    "No longer feel stuck or dependent on designers",
    "Discover how simple design boosts business identity",
    "Keep a uniform brand look across platforms",
    "Create professional marketing materials yourself"
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
            alt="Power in Your Point Training"
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center center',
              height: '100vh',
              width: '100%',
              maxWidth: '100vw'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center max-w-4xl mx-auto text-white" variants={fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              HANDS-ON TRAINING
              <Sparkles className="h-4 w-4" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              POWER IN YOUR POINT
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-red-400 mb-4" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
              Harness PowerPoint to Create Posts & Brochures That Speak for Your Brand
            </p>
            
            <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
              A comprehensive hands-on training to master PowerPoint for creating professional marketing materials,
              social media posts, and brand-consistent designs that elevate your business.
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
                <p className="font-semibold text-white">26th August 2025</p>
                <p className="text-sm text-white/80">Tuesday</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:border-red-300 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Video className="h-8 w-8 text-red-400 mb-3 mx-auto" />
                <p className="font-semibold text-white">Live on Zoom</p>
                <p className="text-sm text-white/80">Virtual Training</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:border-red-300 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Monitor className="h-8 w-8 text-red-400 mb-3 mx-auto" />
                <p className="font-semibold text-white">100% Hands-on</p>
                <p className="text-sm text-white/80">Laptop Required</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:border-red-300 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Users className="h-8 w-8 text-red-400 mb-3 mx-auto" />
                <p className="font-semibold text-white">For Entrepreneurs</p>
                <p className="text-sm text-white/80">Brand Builders</p>
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
                <a href="https://digitalstepup.kit.com/d00ef39749" target="_blank" rel="noopener noreferrer">
                  <Zap className="h-6 w-6 mr-3" />
                  Join Live Training
                  <ArrowRight className="h-6 w-6 ml-3" />
                </a>
              </Button>
            </motion.div>
            
            <p className="text-sm text-white/90 mt-4" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
              <strong>📅 Join our live Zoom session with Varshal Varkhedkar</strong>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Meet Your Trainer Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Meet Your <span className="text-red-600">Expert Trainer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from a design expert who specializes in creating professional
              marketing materials using PowerPoint.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-2xl mx-auto"
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center group"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-red-200 group-hover:border-red-300 transition-all duration-300">
                  <img 
                    src="/media/varshal-jpg.jpg" 
                    alt="Varshal Varkhedkar - PowerPoint Design Expert" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Design Expert
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Varshal Varkhedkar</h3>
              <p className="text-red-600 font-semibold mb-3">PowerPoint Design Specialist</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Expert PowerPoint trainer who has helped hundreds of entrepreneurs 
                create professional marketing materials and maintain brand consistency
                across all their business communications.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* What Your Training Includes */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Your <span className="text-red-600">Training Includes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get comprehensive hands-on training with practical templates and 
              resources you can use immediately for your business.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {trainingIncludes.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-red-200"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Key <span className="text-red-600">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform how you create marketing materials and build a consistent 
              brand presence across all platforms.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-red-200"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium text-lg leading-relaxed">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Requirements Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Training <span className="text-red-600">Requirements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ensure you have everything ready for the best learning experience.
            </p>
          </motion.div>

          <motion.div className="max-w-2xl mx-auto" variants={fadeInUp}>
            <Card className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Monitor className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Please login from laptop</h3>
                      <p className="text-gray-600">Required for hands-on practice</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Presentation className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Ensure you have PowerPoint</h3>
                      <p className="text-gray-600">Microsoft PowerPoint software required on your machine</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">100% hands-on program</h3>
                      <p className="text-gray-600">Interactive learning with real-time practice</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Previous Events Gallery */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              See Our <span className="text-red-600">Previous Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of women who have already transformed their businesses 
              through our workshops and training programs.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
            variants={staggerContainer}
          >
            {previousEventPhotos.map((photo, index) => (
              <motion.div 
                key={index}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <img
                  src={photo}
                  alt={`Previous event ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center" variants={fadeInUp}>
            <p className="text-lg text-gray-600 mb-8">
              <strong>Join our community of 500+ successful women entrepreneurs!</strong>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        className="py-20 bg-red-600 text-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInUp}
      >
        {/* Background effects */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center max-w-4xl mx-auto" variants={fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="h-4 w-4" />
              LIVE TRAINING WITH VARSHAL
              <Star className="h-4 w-4" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Master PowerPoint Design?
            </h2>
            
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Don't miss this opportunity to learn PowerPoint techniques that will 
              revolutionize how you create marketing materials for your brand.
            </p>

            <motion.div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  asChild 
                  size="xl" 
                  className="bg-white text-red-600 hover:bg-gray-100 px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl"
                >
                  <a href="https://digitalstepup.kit.com/d00ef39749" target="_blank" rel="noopener noreferrer">
                    <Heart className="h-6 w-6 mr-3" />
                    Join Live Training
                    <ArrowRight className="h-6 w-6 ml-3" />
                  </a>
                </Button>
              </motion.div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>1 hour intensive training</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Templates included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Hands-on practice</span>
                </div>
              </div>

              <p className="text-lg opacity-90">
                <strong>🔥 Transform your brand materials today with professional PowerPoint skills!</strong>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default PowerPointTraining;
