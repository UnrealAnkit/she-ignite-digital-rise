import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedCounter from "@/components/AnimatedCounter";
import JourneyModal from "@/components/JourneyModal";

// Using direct path to media folder image

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const headlineWords = ["Transform", "Your"];
  const highlightWords = ["Business", "Dreams"];
  const finalWords = ["Into", "Digital", "Success"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 1.4 }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 1.8 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/media/IMG_0011.JPG"
          alt="Empowering Women Entrepreneurs"
          className="w-full h-full object-cover"
          style={{
            objectPosition: isMobile ? 'center 15%' : 'center center',
            height: '100vh',
            width: '100%',
            maxWidth: '100vw'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-foreground/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-2 sm:py-3 md:py-4">
        <div className="max-w-3xl text-background mt-4 sm:mt-6 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
          {/* Location Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
                          className="inline-flex items-center gap-2 backdrop-blur-sm text-background px-4 py-2 rounded-full mb-3"
              style={{ backgroundColor: 'rgba(230, 0, 35, 0.2)' }}
          >
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Pune • Nagpur • Nashik</span>
          </motion.div>

          {/* Main Headline with Staggered Animation */}
          <motion.h1 
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="block mb-2" variants={wordVariants}>
              <span className="text-background/90"># She doesn't need permission.</span>
            </motion.div>
            <motion.div className="block text-xl md:text-2xl lg:text-3xl mb-3" variants={wordVariants}>
              <span className="text-primary font-bold">She just needs digital power.</span>
            </motion.div>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-base md:text-lg mb-5 text-background/90 leading-relaxed"
            variants={subheadingVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="block mb-3">
              <strong>SHELeadsIndia helps women grow with <span className="text-primary">AI, marketing, and community</span> — not just survive online, but shine.</strong>
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 mb-3"
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(230, 0, 35, 0.4)"
              }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                variant="hero" 
                size="xl" 
                className="group w-full sm:w-auto"
                onClick={() => setIsModalOpen(true)}
              >
                Start Your Journey
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

          </motion.div>

          {/* Stats */}
          <motion.div 
            className="flex flex-wrap gap-6 mt-4 pt-4"
            ref={sectionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            <div className="text-center">
              <div className="text-lg text-background/90">
                <span>10,000+ Women. </span>
                <span>1 Vision. </span>
                <span className="font-bold text-primary">Digital India, Led by Her.</span>
              </div>
            </div>
          </motion.div>
          
          {/* Stylized separator */}
  
        </div>
      </div>

      {/* Journey Modal */}
      <JourneyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;