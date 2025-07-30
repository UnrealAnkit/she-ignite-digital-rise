import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Mic, Award, CheckCircle, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EmpowerHer2025 = () => {
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
                Welcome to EmpowerHER
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                2025
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                A Transformative Experience Awaits!
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                A one-day masterclass on Marketing & AI, for women entrepreneurs ready to grow smarter and faster.
              </p>
              
              {/* Event Details */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="h-5 w-5 text-red-400" />
                  <span className="font-medium">Pune</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5 text-red-400" />
                  <span className="font-medium">18th Dec, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Clock className="h-5 w-5 text-red-400" />
                  <span className="font-medium">10 AM – 6 PM</span>
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
                  Step into a day designed to empower you as a truly successful woman entrepreneur.
                </h2>

                
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    EmpowerHER25 is a full-day masterclass experience for women-led SMEs and solopreneurs to learn the real, practical side of Marketing & AI without the overwhelm.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Hosted by SHELeadsIndia, this event brings together 200+ women entrepreneurs in one room to learn, apply, and grow their businesses with real tools and real stories.
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
                    <span className="text-gray-700 text-xl font-medium">18th December, 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-7 w-7 text-red-600" />
                    <span className="text-gray-700 text-xl font-medium">10:30 AM onwards</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-7 w-7 text-red-600" />
                    <span className="text-gray-700 text-xl font-medium">Pune, Maharashtra</span>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 text-xl"
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
                    EmpowerHER 2025
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Speak Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-red-600 mb-4">
                Why Speak at EmpowerHER25?
              </h2>
              <p className="text-lg text-gray-700">
                Know more about the opportunities here
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* First Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img 
                  src="/media/IMG_0011.JPG" 
                  alt="Women networking" 
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold text-red-600 mb-3">
                  Not just Networking But Building Relationships
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Position yourself as a leader in front of a curated audience of women founders. Connect with like-minded entrepreneurs and build meaningful relationships that last beyond the event.
                </p>
              </motion.div>

              {/* Second Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img 
                  src="/media/IMG_0013.JPG" 
                  alt="Audience listening" 
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold text-red-600 mb-3">
                  Learning from Practical Women, Real Stories
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Gain visibility across our growing digital channels (LinkedIn, WhatsApp, Insta). Share your expertise and reach thousands of women entrepreneurs through our established platforms.
                </p>
              </motion.div>

              {/* Third Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img 
                  src="/media/IMG_0137.JPG" 
                  alt="Interactive workshop" 
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold text-red-600 mb-3">
                  Practical Insights and Actionable Skills
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Network with fellow experts, founders, and influencers. Receive a speaker kit, professional photos, and media coverage. Most of all — make a difference by helping women unlock real growth.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We're Looking For Section */}
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
                Who We're Looking For
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                We're curating a lineup of speakers who are:
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Join us in creating a space where women don't just learn… They scale, automate, and lead. 
                We're looking for speakers who can inspire, educate, and empower our community of women entrepreneurs 
                with practical insights and actionable strategies.
              </p>
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Strong Story & Expertise</h3>
                  <p className="text-gray-700 leading-relaxed">Women entrepreneurs or professionals with a strong story and clear expertise. Share your journey, challenges, and victories to inspire others on their entrepreneurial path.</p>
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Impact Over Jargon</h3>
                  <p className="text-gray-700 leading-relaxed">Focused on impact over jargon. Deliver practical, actionable content that women entrepreneurs can immediately implement in their businesses.</p>
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Strategies & Stories</h3>
                  <p className="text-gray-700 leading-relaxed">Ready to share real strategies, honest failures, and practical frameworks. Connect with the audience through authentic experiences and proven methodologies.</p>
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Comfortable Formats</h3>
                  <p className="text-gray-700 leading-relaxed">Comfortable with formats like keynotes, masterclasses, or panels. Adapt your expertise to engage and inspire diverse audiences effectively.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Opportunities Section */}
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
                Speaker Opportunities
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                You can contribute in any of the following ways:
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Choose the format that best showcases your expertise and connects with our audience of women entrepreneurs. 
                Each opportunity offers unique ways to share your knowledge and inspire others.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Keynote Speaker</h3>
                <p className="text-gray-700 leading-relaxed text-lg">Inspire the audience with your business journey, big lessons, or mindset shifts. Share your story and motivate women entrepreneurs to reach new heights.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Masterclass Trainer</h3>
                <p className="text-gray-700 leading-relaxed text-lg">Deliver a focused, practical session on marketing, sales, content, branding, or AI. Teach actionable skills that women can implement immediately.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Panel Guest</h3>
                <p className="text-gray-700 leading-relaxed text-lg">Join a moderated conversation sharing your personal take on growing online. Engage in dynamic discussions with fellow experts and entrepreneurs.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mentorship Circle Host</h3>
                <p className="text-gray-700 leading-relaxed text-lg">Guide a small table of 6–8 women through a focused breakout session. Provide personalized guidance and create meaningful connections.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* As a Speaker Section */}
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
                As a Speaker, You'll Walk Away With:
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Join us and gain valuable benefits that extend beyond the event
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mic className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Featured Speaking Slot</h3>
                <p className="text-gray-700 leading-relaxed">A featured speaking slot to share your story, strategy, or session with our engaged audience of women entrepreneurs.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Content</h3>
                <p className="text-gray-700 leading-relaxed">Stunning, high-quality photos and content reels for your own brand and marketing materials.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Visibility</h3>
                <p className="text-gray-700 leading-relaxed">Visibility across SHELeadsIndia's growing digital platforms reaching thousands of women entrepreneurs.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recognition</h3>
                <p className="text-gray-700 leading-relaxed">A certificate of contribution and gratitude from our community recognizing your valuable contribution.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Meaningful Connections</h3>
                <p className="text-gray-700 leading-relaxed">Real connections with fellow speakers, mentors, and founders that can lead to lasting partnerships.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Real Impact</h3>
                <p className="text-gray-700 leading-relaxed">And most of all, the fulfilment of sparking real change in women-led businesses across India.</p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white">
                <p className="text-xl font-semibold leading-relaxed">
                  "Because when you share what you've learned, you don't just teach, you empower."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About SHELeadsIndia Section */}
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
                About SHELeadsIndia
              </h2>
              <p className="text-xl text-gray-700">
                Empowering women entrepreneurs through practical learning and growth
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  SHELeadsIndia is a learning and growth platform for women entrepreneurs, focused on digital marketing, AI tools, and smart systems that drive business growth.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We're not about motivation. We're about implementation through masterclasses, challenges, events, and local chapters across India.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded by Nikita Vora, a digital marketing consultant and trainer with over a decade of experience, SHELeadsIndia is built to solve the one problem most women in business face:
                </p>
                
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-6 text-white">
                  <p className="text-lg font-semibold leading-relaxed text-center">
                    "I know I'm good at what I do, but how do I grow consistently and smartly?"
                  </p>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  This platform is our answer. Join us in creating a space where women don't just learn… They scale, automate, and lead.
                </p>
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
                    src="/media/founder-nikita.webp" 
                    alt="Nikita Vora - Founder of SHELeadsIndia" 
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-red-600 text-white px-6 py-3 rounded-full">
                    <p className="font-semibold">Nikita Vora</p>
                    <p className="text-sm opacity-90">Founder & CEO</p>
                  </div>
                </div>
              </motion.div>
            </div>
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
                Everything you need to know about EmpowerHER 2025
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
                    <p className="text-lg text-gray-700">18th December, 2025</p>
                    <p className="text-gray-600">10:30 AM onwards</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600 rounded-full p-3 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                    <p className="text-lg text-gray-700">Pune, Maharashtra</p>
                    <p className="text-gray-600">Venue details will be shared upon registration</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600 rounded-full p-3 flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Audience</h3>
                    <p className="text-lg text-gray-700">200+ women entrepreneurs</p>
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
                    <p className="font-semibold">200+ Women</p>
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

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/media/IMG_0011.JPG" 
            alt="Women entrepreneurs background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-600 bg-opacity-85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-8">
                Ready to Make a Difference?
              </h2>
              <p className="text-2xl text-white mb-12 leading-relaxed">
                Join us in empowering the next generation of women entrepreneurs
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Apply to Speak
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmpowerHer2025; 