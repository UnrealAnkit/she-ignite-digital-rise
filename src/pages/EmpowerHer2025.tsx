import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Mic, Award, CheckCircle, ArrowRight, Star } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SecureSpotButton = ({ className = "" }) => {
  const buttonControls = useAnimation();

  useEffect(() => {
    const animateButton = async () => {
      while (true) {
        await buttonControls.start({
          x: [0, -10, 10, -10, 10, 0],
          transition: { duration: 1.5, ease: "easeInOut" }
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    };
    animateButton();
  }, []);

  return (
    <div className={`text-center ${className}`}>
      <motion.div
        animate={buttonControls}
        className="inline-block"
      >
        <Button 
          size="lg" 
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-full"
          onClick={() => window.open('https://rzp.io/rzp/HcUdgXV', '_blank')}
        >
          👉 Secure Your Spot Now 👈
        </Button>
      </motion.div>
      <div className="mt-4 text-red-600 text-lg font-semibold">
        <span className="text-red-600">Almost Full</span> - Only 2 Seats Left
      </div>
    </div>
  );
};

const EmpowerHer25 = () => {
  const buttonControls = useAnimation();

  useEffect(() => {
    const animateButton = async () => {
      while (true) {
        await buttonControls.start({
          x: [0, -10, 10, -10, 10, 0],
          transition: { duration: 1.5, ease: "easeInOut" }
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    };
    animateButton();
  }, []);

  return (
    <div className="min-h-screen bg-white">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                EmpowerHER25 – India's Flagship MarTech & AI Summit for Women Entrepreneurs
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                A Transformative Experience Awaits!
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                Join 300+ women entrepreneurs for a full-day masterclass on MarTech & AI for Business Growth.
              </p>
              
              {/* Payment CTA in Hero */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                <motion.div
                  animate={buttonControls}
                  className="inline-block"
                >
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-full"
                    onClick={() => window.open('https://rzp.io/rzp/HcUdgXV', '_blank')}
                  >
                    👉 Secure Your Spot Now 👈
                  </Button>
                </motion.div>
                <div className="mt-4 text-lg font-semibold">
                  <span className="text-red-600">Almost Full</span> <span className="text-red-600">- Only 2 Seats Left</span>
                </div>
              </motion.div>
              
              {/* Event Details */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="h-5 w-5 text-red-400" />
                  <span className="font-medium">Orchid, Pune</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5 text-red-400" />
                  <span className="font-medium">18th December 2025</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Clock className="h-5 w-5 text-red-400" />
                  <span className="font-medium">10:30 AM onwards</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Details and Registration Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 leading-tight">
                  🌟 Why EmpowerHER25?
                </h2>

                
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    EmpowerHER25 isn't just another conference—it's the stage where India's most ambitious women entrepreneurs meet innovation, technology, and growth. With 300+ founders, leaders, investors, and change-makers under one roof, this is where business conversations turn into collaborations, and ideas turn into impact.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    This year, the spotlight is on MarTech + AI for Business Growth, bringing you insights, strategies, and tools you can implement right away.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    No fluff. No jargon. Only action, learning, and inspiration.
                  </p>
                </div>
              </motion.div>

              {/* Right Column - Event Details and CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-between items-center"
              >
                {/* Event Details and Register Button */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-7 w-7 text-red-600" />
                    <span className="text-gray-700 text-xl font-medium">18th December 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-7 w-7 text-red-600" />
                    <span className="text-gray-700 text-xl font-medium">10:30 AM onwards</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-7 w-7 text-red-600" />
                    <span className="text-gray-700 text-xl font-medium">Orchid, Pune</span>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 text-xl"
                    onClick={() => window.open('https://rzp.io/rzp/HcUdgXV', '_blank')}
                  >
                    Register Now
                  </Button>
                </div>

                {/* Logo and Event Title */}
                <div className="flex flex-col items-end gap-2">
                  <img 
                    src="/media/Logo.png" 
                    alt="SHE Leads India" 
                    className="h-24 w-auto object-contain"
                  />
                  <div className="text-black font-bold text-2xl">
                    EmpowerHER25
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                🎯 Learn from India's Top Business Minds
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Speaker Card 1 */}
              <div className="bg-[#1a1a1a] rounded-xl overflow-hidden text-center p-6">
                <div className="w-48 h-48 mx-auto mb-4 bg-black rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Revealing Soon</h3>
                <p className="text-red-600 mb-2">MarTech Expert</p>
                <p className="text-gray-400 text-sm">
                  Industry leader with proven track record in digital transformation
                </p>
              </div>

              {/* Speaker Card 2 */}
              <div className="bg-[#1a1a1a] rounded-xl overflow-hidden text-center p-6">
                <div className="w-48 h-48 mx-auto mb-4 bg-black rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Revealing Soon</h3>
                <p className="text-red-600 mb-2">AI Strategy Expert</p>
                <p className="text-gray-400 text-sm">
                  Pioneering AI implementation in business growth
                </p>
              </div>
            </div>
            
            <SecureSpotButton className="mt-12" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-white max-w-2xl mx-auto">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Mic className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Speaker Details Revealing Soon</h3>
                <p className="text-xl leading-relaxed">
                  We're curating an exceptional lineup of industry leaders, successful entrepreneurs, and MarTech & AI experts. Stay tuned for exciting speaker announcements!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Knowledge Partner Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                🎓 Knowledge Partner
              </h2>
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
                <div className="flex items-center justify-center mb-6">
                  <img 
                    src="/media/symbio sis logo.png" 
                    alt="Symbiosis Centre for Entrepreneurship and Innovation" 
                    className="h-24 w-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">Symbiosis Centre for Entrepreneurship and Innovation (SCEI)</h3>
                <p className="text-lg leading-relaxed">
                  We are proud to have Symbiosis Centre for Entrepreneurship and Innovation (SCEI) as our official Knowledge Partner.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Their collaboration brings academic depth, startup expertise, and innovation insights to the EmpowerHER25 experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                💡 What to Expect
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mic className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation classes</h3>
                <p className="text-gray-700">Learn from industry leaders and successful entrepreneurs</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1-1</h3>
                <p className="text-gray-700">From across India, all focused on growth and innovation</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Networking</h3>
                <p className="text-gray-700">Interactive sessions and networking lounges</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">MarTech & AI Tools Showcase</h3>
                <p className="text-gray-700">Exclusive demonstration of cutting-edge business tools</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Investor & Collaborator Connections</h3>
                <p className="text-gray-700">Opportunities to connect with investors, sponsors & collaborators</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Media Coverage</h3>
                <p className="text-gray-700">96+ media outlets expected for maximum visibility</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Shouldn't Miss This Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                🚀 Why You Shouldn't Miss This
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                EmpowerHER25 is more than an event—it's an ecosystem.
              </p>
              <div className="mb-8">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://rzp.io/rzp/HcUdgXV', '_blank')}
                >
                  💳 Book Your Ticket
                </Button>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="bg-red-600 rounded-full p-3 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Get actionable strategies to scale your business with MarTech & AI</h3>
                  <p className="text-gray-700 leading-relaxed">Learn practical, implementable strategies from industry experts who have built successful businesses using these tools.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="bg-red-600 rounded-full p-3 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Build real networks with industry leaders & investors</h3>
                  <p className="text-gray-700 leading-relaxed">Connect with like-minded entrepreneurs, potential investors, and industry leaders who can help accelerate your growth.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="bg-red-600 rounded-full p-3 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Gain visibility & media coverage (96+ outlets expected)</h3>
                  <p className="text-gray-700 leading-relaxed">Get featured in leading media outlets and build your personal brand as a thought leader in your industry.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="bg-red-600 rounded-full p-3 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Walk away with collaborations & opportunities to grow faster</h3>
                  <p className="text-gray-700 leading-relaxed">Leave with concrete partnerships, collaborations, and opportunities that can transform your business trajectory.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      {/* To Partner With Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                🤝 To Partner With Us For This Event
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Join us in empowering women entrepreneurs across India
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 text-center border border-red-200"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Title Sponsor</h3>
                <p className="text-gray-700 leading-relaxed">Maximum visibility and brand association with India's premier women entrepreneurship event.</p>
                <ul className="text-sm text-gray-600 mt-4 space-y-1">
                  <li>• Logo placement on all materials</li>
                  <li>• Speaking opportunity</li>
                  <li>• Booth space</li>
                  <li>• Digital promotion</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 text-center border border-red-200"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Co-Sponsor</h3>
                <p className="text-gray-700 leading-relaxed">Strong brand presence and networking opportunities with 300+ women entrepreneurs.</p>
                <ul className="text-sm text-gray-600 mt-4 space-y-1">
                  <li>• Logo on event materials</li>
                  <li>• Booth space</li>
                  <li>• Social media mentions</li>
                  <li>• Networking access</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 text-center border border-red-200"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Associate Partner</h3>
                <p className="text-gray-700 leading-relaxed">Support the movement while gaining valuable brand exposure and connections.</p>
                <ul className="text-sm text-gray-600 mt-4 space-y-1">
                  <li>• Logo on website</li>
                  <li>• Social media recognition</li>
                  <li>• Event attendance</li>
                  <li>• Community access</li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h3>
                <p className="text-lg mb-6">
                  Join hands with SHELeadsIndia to create meaningful impact in the women entrepreneurship ecosystem.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('mailto:partnerships@sheleadsindia.in?subject=Partnership Inquiry - EmpowerHER25', '_blank')}
                >
                  📧 Contact Us for Partnership
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Previous Event Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Our Journey So Far
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Building on the success of our previous events
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col h-full"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    SHELeadsIndia Launch - December 2023
                  </h3>
                  <p className="text-lg text-white/90 mb-6 flex-grow">
                    Where it all began! At MCCIA Pune, 150+ women entrepreneurs witnessed the birth of SHELeadsIndia. 
                    An electric atmosphere with powerful keynotes and inspiring panel discussions that sparked a movement.
                  </p>
                  <Link 
                    to="/sheleadsindia-launch"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-red-600 font-semibold px-6 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl mt-auto"
                  >
                    View Our Launch Story
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col h-full"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    EmpowerHER 24 - A Blockbuster Success!
                  </h3>
                  <p className="text-lg text-white/90 mb-6 flex-grow">
                    Our flagship event attracted 250+ women entrepreneurs, featuring keynote speakers, 
                    panel discussions, interactive workshops, and networking zones. The energy was unstoppable, 
                    and women left not only inspired but armed with strategies to apply immediately.
                  </p>
                  <Link 
                    to="/empowerher24"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-red-600 font-semibold px-6 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl mt-auto"
                  >
                    View Last Year's Event
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Media Coverage Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Media Coverage
              </h2>
              <p className="text-xl text-gray-700">
                Recognized and featured by leading media outlets
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <img 
                  src="/media/times of india logo.jpeg" 
                  alt="Times of India" 
                  className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <img 
                  src="/media/Hindustan Times.png" 
                  alt="Hindustan Times" 
                  className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <img 
                  src="/media/ians wire service  logo.png" 
                  alt="IANS" 
                  className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <img 
                  src="/media/united news of india.jpg" 
                  alt="UNI" 
                  className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <img 
                  src="/media/dainik bhaskar logo.jpeg" 
                  alt="Dainik Bhaskar" 
                  className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <img 
                  src="/media/business-wire-logo-png.png" 
                  alt="Business Wire" 
                  className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <p className="text-gray-600 italic mb-6">
                "SHELeadsIndia continues to gain recognition as a leading platform for women entrepreneurs, 
                with extensive coverage highlighting our impact on the entrepreneurial ecosystem."
              </p>
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://rzp.io/rzp/HcUdgXV', '_blank')}
              >
                📰 Join the Media Coverage - Register Now
              </Button>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Event Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Event Details
              </h2>
              <p className="text-xl text-gray-700">
                Everything you need to know about EmpowerHER25
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 rounded-full p-3 flex-shrink-0">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Date & Time</h3>
                    <p className="text-lg text-gray-700">18th December 2025</p>
                    <p className="text-gray-600">10:30 AM onwards</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600 rounded-full p-3 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                    <p className="text-lg text-gray-700">Orchid, Pune</p>
                    <p className="text-gray-600">Premium venue in the heart of Pune</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600 rounded-full p-3 flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Audience</h3>
                    <p className="text-lg text-gray-700">300+ women entrepreneurs</p>
                    <p className="text-gray-600">Curated audience of growth-focused founders</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600 rounded-full p-3 flex-shrink-0">
                    <Mic className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Time Commitment</h3>
                    <p className="text-lg text-gray-700">45-60 minutes</p>
                    <p className="text-gray-600">Including prep, presence & session</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600 rounded-full p-3 flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Format</h3>
                    <p className="text-lg text-gray-700">In-person, professionally facilitated</p>
                    <p className="text-gray-600">Informal yet structured environment</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  <img 
                    src="/media/IMG_0011.JPG" 
                    alt="Women entrepreneurs networking" 
                    className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl mb-6"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-6 py-3 rounded-full">
                    <p className="font-semibold">300+ Women</p>
                    <p className="text-sm opacity-90">Entrepreneurs</p>
                  </div>
                </div>
                <div className="mt-8">
                  <img 
                    src="/media/IMG_0013.JPG" 
                    alt="Professional event setting" 
                    className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Don't let 2025 be another year of 'almost'.
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                Join us and transform your business with proven strategies that work.
              </p>
              
              <SecureSpotButton className="mb-12" />
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Call: +91 8806661434</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Email: event@sheleadsindia.in</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-green-500">₹999</span>
              <span className="text-gray-400 line-through">₹9999</span>
              <span className="text-red-600 font-semibold">Almost Full - Only 2 Seats Left</span>
            </div>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-6 text-2xl rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[200px]"
              onClick={() => window.open('https://rzp.io/rzp/HcUdgXV', '_blank')}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpowerHer25; 