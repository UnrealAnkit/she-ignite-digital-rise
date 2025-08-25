import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Mic, Award, CheckCircle, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EmpowerHer2024 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/media/empowerher 2024.jpg"
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
                 24
               </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                A Transformative Experience Awaits!
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                Step into a day designed to empower you as a truly successful woman entrepreneur.
              </p>
              
              {/* Event Details */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="h-5 w-5 text-red-400" />
                  <span className="font-medium">Sadanand Regency, Pune</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5 text-red-400" />
                  <span className="font-medium">18th Dec, 24</span>
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

      {/* Event Success Story Section */}
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
                EmpowerHER 24 – Full-Day Flagship Growth Event
              </h2>
              <p className="text-xl text-gray-700">
                Fast forward to our next big milestone: EmpowerHER 24.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  If the launch was a spark, this event was a blazing fire.
                  Held as a full-day conference, EmpowerHER 24 attracted <strong>250+ women entrepreneurs</strong>, showing our year-on-year growth and the demand for platforms like ours.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Keynote speakers who set the stage with bold visions for women in business.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Panel discussions that dug deep into challenges women face and how MarTech can transform their business journeys.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Interactive workshops & hands-on sessions that gave practical, ready-to-implement takeaways on AI, marketing, and digital tools.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Networking zones where collaborations were born, partnerships were sparked, and women found their business "tribes."</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-6 text-white">
                  <p className="text-lg font-semibold leading-relaxed text-center">
                    👉 The verdict from participants, partners, and even the media was unanimous: EmpowerHER 24 was a blockbuster hit.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img 
                  src="/media/empowerher 2024.jpg" 
                  alt="EmpowerHER 24 Event" 
                  className="w-full rounded-xl shadow-2xl mb-6"
                />
                <div className="flex justify-center">
                  <img 
                    src="/media/Logo.png" 
                    alt="SHE Leads India" 
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details and Registration Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
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
                    EmpowerHER 24 is a lot more than just a workshop; it is an experience crafted to support and uplift your business journey. Our goal is simple yet powerful: to connect you with like-minded women, boost your confidence, and provide the tools to help you succeed.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Whether you are here to learn, network, or simply get inspired, this event is about you and your potential.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    We guarantee you- this exposure could be a step toward growth, recognition, and potential partnerships.
                  </p>
                </div>
              </motion.div>

              {/* Right Column - Event Details and CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="h-7 w-7 text-red-600" />
                  <span className="text-gray-700 text-xl font-medium">18th December, 24</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-7 w-7 text-red-600" />
                  <span className="text-gray-700 text-xl font-medium">10:30 AM onwards</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-7 w-7 text-red-600 mt-1" />
                  <span className="text-gray-700 text-xl font-medium">Sadanand Regency, 9/2, National Highway 4, Patil Nagar, Balewadi, Pune, Maharashtra 411045.</span>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 text-xl w-full md:w-auto"
                >
                  Event Completed
                </Button>

                {/* Logo and Event Title */}
                <div className="flex flex-col items-center gap-2 mt-8">
                  <img 
                    src="/media/Logo.png" 
                    alt="SHE Leads India" 
                    className="h-24 w-auto object-contain"
                  />
                  <div className="text-black font-bold text-2xl">
                    EmpowerHER 24
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Partners Section */}
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
              <h2 className="text-4xl font-bold text-red-600 mb-4">
                Our Community Partners
              </h2>
              <p className="text-lg text-gray-700">
                Stronger Together: Collaborating with like-minded organizations for a better tomorrow.
              </p>
            </motion.div>
            
            <div className="text-center space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Community Partners</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                  >
                    <img 
                      src="/media/deAsra + YU logo.avif" 
                      alt="deAsra + YU" 
                      className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
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
                      src="/media/just for enterprenuers.avif" 
                      alt="J4E - Just For Entrepreneurs" 
                      className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
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
                      src="/media/Pune Business Club - Logo  ORG_edited.avif" 
                      alt="Pune Business Club" 
                      className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
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
                      src="/media/STREE FOUNDATION LOGO.avif" 
                      alt="Stree Foundation" 
                      className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Other Partners</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h4 className="font-medium text-gray-700 mb-4">Media Partner</h4>
                    <div className="flex justify-center">
                      <img 
                        src="/media/startupNews.fyi.avif" 
                        alt="StartupNews.fyi" 
                        className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h4 className="font-medium text-gray-700 mb-4">Technology Partner</h4>
                    <div className="flex justify-center">
                      <img 
                        src="/media/Mfable logo.avif" 
                        alt="Mfable" 
                        className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is EmpowerHER 24 Section */}
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
                What is EmpowerHER 24?
              </h2>
              <p className="text-lg text-gray-700">
                Know more about the event here
              </p>
              <p className="text-xl text-gray-800 font-medium mt-4">
                Your journey towards Growth, Connection, and Empowerment starts from here.
              </p>
              <p className="text-lg text-gray-700 mt-2">
                This is not your typical workshop. EmpowerHER 24 is about giving you practical tools, real insights, and a network that can genuinely change the way you approach your business.
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
                  src="/media/empowerher 2024.jpg" 
                  alt="Women networking" 
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold text-red-600 mb-3">
                  Not just Networking But Building Relationships
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Imagine a day where every conversation is meaningful, where you are surrounded by women with a shared vision. You will meet mentors, collaborators, and potential business allies who can help you grow. This is not just networking; it is about building relationships that last.
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
                  Our speakers are not just inspiring — they are relatable, and they have been where you are. From Sahithi Divi's journey in social impact to Harpeerth Suri's lessons in resilience, you will learn strategies that you can actually apply. These sessions are about real-world advice and solutions.
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
                  Bring your business ideas to life with practical strategies and tools! Our hands-on sessions simplify business planning and growth. The Business Model Canvas workshop, for example, helps you map out key areas of your business to see the big picture and discover ways to enhance your approach.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
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
                EmpowerHER 24: Crafting a Vision for Tomorrow's Success
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Get ready to ignite your passion, elevate your skills, and join the team with trailblazing women entrepreneurs!
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                This is your moment to connect, innovate, and lead the charge into a brighter, bolder future. Do participate and unleash on the energy, excitement, and endless possibilities! This Team combination will help you, guide you and support you in all possible ways. Embark into the journey of possibilities.
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
                  <span className="text-white font-bold text-xl">01</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Unprecedented Networking</h3>
                <p className="text-gray-700 leading-relaxed">Meet, Network and build meaningful connections with fellow entrepreneurs, industry leaders, and potential investors.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">02</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Sessions</h3>
                <p className="text-gray-700 leading-relaxed">Learn from trailblazing women who have mastered the art of business growth and tech innovation, offering you powerful insights to accelerate your entrepreneurial journey.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">03</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hands-On Workshops</h3>
                <p className="text-gray-700 leading-relaxed">Join hands-on sessions packed with practical strategies you can immediately apply to drive your business forward.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">04</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Insights</h3>
                <p className="text-gray-700 leading-relaxed">Engage in thought-provoking discussions with top leaders in Agriculture, Social Impact, FMCG, and Manufacturing sectors.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">05</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Inspiring Speakers</h3>
                <p className="text-gray-700 leading-relaxed">Discover women who've overcome challenges, seized opportunities, and built multi-crore businesses. Let their journeys inspire you to break barriers and achieve your dreams.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">06</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Boosted Brand Visibility</h3>
                <p className="text-gray-700 leading-relaxed">Increase visibility among a high-impact audience that is passionate about supporting women-led initiatives.</p>
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
                  "Don't miss the opportunity to be part of India's largest gathering of women entrepreneurs and tech leaders. EmpowerHER 24 is where innovation meets empowerment!"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Agenda Section */}
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
                AGENDA
              </h2>
              <p className="text-xl text-gray-700">
                Event Schedule: EmpowerHER 24
              </p>
            </motion.div>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                    9:00 AM – 10:00 AM
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Open Networking and Breakfast</h3>
                    <p className="text-gray-700">The event commenced with an energizing networking breakfast where 250+ women entrepreneurs connected over authentic conversations. The morning buzz was infectious as attendees from diverse industries shared their entrepreneurial stories, challenges, and victories while enjoying a wholesome breakfast spread. This informal setting broke the ice perfectly, setting the stage for meaningful connections that would last throughout the day.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                    10:00 AM – 10:30 AM
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Opening Ceremony</h3>
                    <p className="text-gray-700">The official inauguration marked the beginning of an extraordinary journey. Nikita Vora, Founder of SHELeadsIndia, delivered a powerful welcome address that resonated with every woman in the audience. She shared the compelling vision behind EmpowerHER 24 - to create a platform where women don't just learn, but scale, automate, and lead. The ceremony included a beautiful lamp lighting ceremony and an inspiring video montage showcasing the journey of women entrepreneurs, setting an emotional and motivational tone for the entire day.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                    10:30 AM – 11:30 AM
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Keynote Address by Sahithi Divi</h3>
                    <p className="text-gray-700">Sahithi Divi, Forbes India 30 Under 30 honoree and social impact expert, delivered a soul-stirring keynote that left the audience captivated. She shared her remarkable journey from Hult Business School to becoming a leading voice in social entrepreneurship. Her address focused on "Building Businesses with Purpose" where she revealed how women entrepreneurs can create sustainable impact while scaling their ventures. The session was packed with real-world examples, practical frameworks, and her personal struggles and triumphs that resonated deeply with every attendee.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                    11:30 AM – 12:30 PM
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Corporate Panel Discussion</h3>
                    <p className="text-gray-700">This high-energy panel brought together three powerhouse women from leading corporations - Anibha Athalye (AI Manager, Google Cloud), Kanchan Sonik (Program Manager, Tech Mahindra), and Deepti Khutal (VP International Operations, INVIDI). The discussion titled "AI & Tech Revolution: How Women Leaders Are Shaping Tomorrow" was moderated expertly and covered crucial topics like breaking the glass ceiling in tech, leveraging AI for business growth, and building inclusive corporate cultures. The audience was treated to insider insights, career pivoting strategies, and actionable advice on climbing the corporate ladder while maintaining authenticity.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                    1:00 PM – 2:00 PM
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Lunch & Networking</h3>
                    <p className="text-gray-700">The lunch break transformed into an extended networking powerhouse! Attendees savored a delectable spread of local Pune delicacies while the conversations from the morning sessions continued to flourish. Tables became informal boardrooms where partnerships were discussed, collaborations were planned, and mentor-mentee relationships were formed. The energy was palpable as women shared contact details, exchanged business cards, and made plans for future ventures. Many attendees later mentioned this as one of the most valuable parts of their day.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                    2:00 PM – 3:30 PM
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Entrepreneurial Panel Discussion</h3>
                    <p className="text-gray-700">The afternoon panel "From Startup to Scale-up: Real Stories, Real Struggles" featured successful women entrepreneurs including Nancy Katyal, Nandita Khaire, Smita Yedekar, and Aparna Tandale. This brutally honest session dived deep into the unsexy side of entrepreneurship - the failures, the financial struggles, the family pressures, and the moments of self-doubt. But it was equally inspiring as these women shared their breakthrough moments, their pivot strategies, and the systems they built to scale their businesses. The audience was particularly engaged during the Q&A, with practical questions about funding, team building, and market expansion being addressed with refreshing candor.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                    3:30 PM - 4:15 PM
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Masterclass by Harpreeth Suri</h3>
                    <p className="text-gray-700">Harpreeth Suri, the award-winning "Mom Influencer of the Year" by NDTV, delivered a game-changing masterclass on "Building Your Personal Brand in the Digital Age." As a TEDx speaker and digital content creator, she shared the exact strategies that helped her build a massive following of 619k+ on Instagram. The session was incredibly practical, covering content creation frameworks, audience engagement tactics, brand collaboration strategies, and monetization methods. Attendees walked away with a 90-day personal branding action plan and exclusive access to her content creation templates. The session was so engaging that it ran over time due to the incredible Q&A session!</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                    4:15 PM - 5:00 PM
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Hi-Tea & Wellness Break</h3>
                    <p className="text-gray-700">This refreshing break featured an elegant hi-tea setup with artisanal teas, fresh pastries, and healthy snacks. But it was more than just refreshments - it included a surprise 15-minute guided meditation session led by Dr. Sania Siddiqui, focusing on mental wellness for entrepreneurs. The combination of mindful breathing, networking conversations, and delicious treats provided the perfect rejuvenation needed before the final high-energy sessions. Many attendees described this as an unexpected highlight that helped them center themselves and absorb the learnings from the day.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                    5:00 PM - 6:30 PM
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Grand Networking Mixer</h3>
                    <p className="text-gray-700">The evening culminated in an electrifying networking mixer that was part celebration, part business expo. The venue was transformed with vibrant décor, ambient lighting, and dedicated networking zones for different industries. Attendees participated in structured networking activities including "Speed Networking" rounds, "Collaboration Matchmaking" sessions, and "Pitch Your Idea in 60 Seconds" challenges. The energy was infectious as business cards flew, WhatsApp groups were formed, and several on-the-spot collaborations were announced. Live music added to the festive atmosphere while the photo booth captured memories of new friendships and business partnerships being forged.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                    6:30 PM Onwards
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Closing Ceremony & Future Vision</h3>
                    <p className="text-gray-700">The event concluded with an emotional closing ceremony that celebrated the incredible day's journey. Nikita Vora delivered a heartfelt vote of thanks, acknowledging every speaker, partner, and participant who made EmpowerHER 24 a resounding success. The ceremony included a beautiful presentation showcasing the day's highlights, candid moments, and powerful testimonials from attendees. The evening ended with the announcement of EmpowerHER25 and a collective pledge from all 250+ women to continue supporting each other's entrepreneurial journeys. As the final group photo was taken, there wasn't a dry eye in the house - it was truly the end of an extraordinary day that would be remembered for years to come.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-xl font-semibold text-red-600">
                EmpowerHER 24 - A day that changed lives, sparked partnerships, and ignited dreams!
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Event Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Event Gallery
              </h2>
              <p className="text-xl text-gray-700">
                Capturing the memorable moments from EmpowerHER 24
              </p>
            </motion.div>
            
            {/* Photo Gallery */}
            <div className="space-y-8">
              {/* First Row - Full width grid (5 photos) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-5 gap-4"
              >
                <div className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="/media/DSC02339.JPG" 
                    alt="EmpowerHER 24 Event" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="/media/DSC02336.JPG" 
                    alt="EmpowerHER 24 Event" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="/media/DSC02328.JPG" 
                    alt="EmpowerHER 24 Event" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="/media/DSC02301.JPG" 
                    alt="EmpowerHER 24 Event" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="/media/DSC02323.JPG" 
                    alt="EmpowerHER 24 Event" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>

              {/* Second Row - Centered grid starting from 3rd position (3 photos) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-5 gap-4"
              >
                <div className="md:col-start-2 aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="/media/DSC02283.JPG" 
                    alt="EmpowerHER 24 Event" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="/media/DSC02257.JPG" 
                    alt="EmpowerHER 24 Event" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="/media/DSC02240.JPG" 
                    alt="EmpowerHER 24 Event" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>

              {/* Third Row - Full width grid (4 photos) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                <div className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="/media/DSC02206.JPG" 
                    alt="EmpowerHER 24 Event" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="/media/DSC02198.JPG" 
                    alt="EmpowerHER 24 Event" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="/media/DSC02130 (1).JPG" 
                    alt="EmpowerHER 24 Event" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="/media/DSC02058.JPG" 
                    alt="EmpowerHER 24 Event" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We're For Section */}
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
                Why Us
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Here's how to lock in your ticket
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                EmpowerHER 24 is your cosmic destination if you identify as:
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
                  <p className="text-gray-700 leading-relaxed">A pioneering woman entrepreneur and eagerly to elevate your business to new heights.</p>
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
                  <p className="text-gray-700 leading-relaxed">A forward-thinking professional exploring the transformative role of technology in innovation and leadership.</p>
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
                  <p className="text-gray-700 leading-relaxed">An aspiring entrepreneur seeking wisdom and insights from distinguished leaders across diverse industries.</p>
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
                  <p className="text-gray-700 leading-relaxed">A networker at heart looking to connect with inspiring women leaders, mentors, and sponsors who can fuel your growth.</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Whether you are just launching your entrepreneurial journey or you're a seasoned businesswoman ready to expand your horizons, this event will provide you with the tools, inspiration, and connections essential for your success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
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
                Inspiring Voices: Our Keynote Speakers
              </h2>
              <p className="text-xl text-gray-700">
                Prepare to be inspired by the powerful voices of our keynote speakers
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
                <div className="relative overflow-hidden rounded-xl h-80 mb-6">
                  <img 
                    src="/sahiti divi.avif" 
                    alt="Sahithi Divi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sahithi Divi</h3>
                <p className="text-red-600 font-semibold mb-3">Social Impact Expert</p>
                <p className="text-gray-700 leading-relaxed text-sm">Hult alumna and Forbes India 30 Under 30 honoree for NGO and Social Entrepreneurship, she also holds the prestigious REX Karmaveer Chakra Global Fellowship and Award.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative overflow-hidden rounded-xl h-80 mb-6">
                  <img 
                    src="/harpreeth suri.avif" 
                    alt="Harpreeth Suri" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Harpreeth Suri</h3>
                <p className="text-red-600 font-semibold mb-3">Digital Content Creator</p>
                <p className="text-gray-700 leading-relaxed text-sm">A digital content creator, TEDx Speaker, Advisor to Mompreneurs, Mentor to Beauty Pageants, Awarded "Mom Influencer Of the Year" by NDTV recently.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative overflow-hidden rounded-xl h-80 mb-6">
                  <img 
                    src="/dr sania siddique.avif" 
                    alt="Dr. Sania Siddiqui" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Sania Siddiqui</h3>
                <p className="text-red-600 font-semibold mb-3">Menstrual Health Activist</p>
                <p className="text-gray-700 leading-relaxed text-sm">A Guinness World Record holder and award-winning activist, she has impacted over one lakh women through her workshops, training hundreds of volunteers along the way.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative overflow-hidden rounded-xl h-80 mb-6">
                  <img 
                    src="/Nancy Katyal 1.avif" 
                    alt="Nancy Katyal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nancy Katyal</h3>
                <p className="text-red-600 font-semibold mb-3">Author, Speaker, Communication & Leadership Coach</p>
                <p className="text-gray-700 leading-relaxed text-sm">Nancy, a renowned corporate leader, facilitator and keynote speaker, visiting professor at top B-schools like IIM and MIT. She's also a LIMCA and GUINNESS record holder and has won multiple awards.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative overflow-hidden rounded-xl h-80 mb-6">
                  <img 
                    src="/Nandita-Khaire-Profile.avif" 
                    alt="Nandita Khaire" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nandita Khaire</h3>
                <p className="text-red-600 font-semibold mb-3">Branding and Marketing Strategist</p>
                <p className="text-gray-700 leading-relaxed text-sm">Nandita Khaire, a branding and marketing consultant with 25+ years of experience, helps MSMEs build valuable brands across diverse industries. Co-Chair of MCCIA's Women Entrepreneurship Committee and a member of TiE Pune Chapter.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative overflow-hidden rounded-xl h-80 mb-6">
                  <img 
                    src="/Smita Yedekar .avif" 
                    alt="Smita Yedekar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smita Yedekar</h3>
                <p className="text-red-600 font-semibold mb-3">Serial Entrepreneur</p>
                <p className="text-gray-700 leading-relaxed text-sm">She is a mentor to startups and has worked as an Independent Director and member of Advisory Boards. Smita is a Charter Member at TiE Pune and Mentor at DSCI – National CoE Accelerator. She is the Chair for Nurture 13 accelerator program of TiE Pune.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative overflow-hidden rounded-xl h-80 mb-6">
                  <img 
                    src="/Aparna_tandale .avif" 
                    alt="Aparna Tandale" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Aparna Tandale</h3>
                <p className="text-red-600 font-semibold mb-3">Actress and Social Media Influencer</p>
                <p className="text-gray-700 leading-relaxed text-sm">Aparna is an actress from Pune, Mumbai with 6 years of experience in theater, Youtube and Marathi TV. Known for her role as "Kaamwali Bai", she has 619k+ insta followers and has worked with brands like Samsung, Love Beauty and Planet and Jio Mart.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Panel Section */}
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
                Empowering Insights: Corporate Panel Members
              </h2>
              <p className="text-xl text-gray-700">
                Celebrating the voices of powerful women driving change in corporate leadership
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
                <div className="relative overflow-hidden rounded-xl h-80 mb-6">
                  <img 
                    src="/aniba athalye.avif" 
                    alt="Anibha Athalye" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Anibha Athalye</h3>
                <p className="text-red-600 font-semibold mb-3">AI Manager, Google Cloud</p>
                <p className="text-gray-700 leading-relaxed text-sm">Anibha brings over 20 years of tech expertise. Specializing in AI and advanced analytics, she has implemented transformative solutions across finance, healthcare, and retail. Currently, she guides clients in adopting and operationalizing Generative AI to unlock its full potential.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative overflow-hidden rounded-xl h-80 mb-6">
                  <img 
                    src="/kanchan sonik.avif" 
                    alt="Kanchan Sonik" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kanchan Sonik</h3>
                <p className="text-red-600 font-semibold mb-3">Program Manager, Tech Mahindra</p>
                <p className="text-gray-700 leading-relaxed text-sm">Kanchan Sonik, a dynamic Program & Test Manager at Tech Mahindra, is an MBA graduate, PhD scholar, and seasoned Toastmaster with 18 years of corporate experience. A passionate trainer, award-winning leader, and traveler, she thrives on ambition, energy, and the power of networking.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative overflow-hidden rounded-xl h-80 mb-6">
                  <img 
                    src="/deepti khutal.avif" 
                    alt="Deepti Khutal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Deepti Khutal</h3>
                <p className="text-red-600 font-semibold mb-3">VP, International Operations, INVIDI</p>
                <p className="text-gray-700 leading-relaxed text-sm">Deepti has 20+ years of experience driving digital transformation in telecom and media across India, Europe, and the Middle East. Known for her expertise in data-driven advertising strategies, she previously led APAC transformations at Ooyala. Deepti holds a master's in Engineering from IET, DAVV, Indore.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="/media/Logo.png" 
                alt="SHE Leads India" 
                className="h-16 w-auto mx-auto mb-6"
              />
              <h2 className="text-3xl font-bold mb-4">
                Empower, Inspire, and Grow Together
              </h2>
              <p className="text-xl mb-8">
                Welcome to a day dedicated to women entrepreneurs! Join a community of like-minded women for an enriching experience packed with inspiration, insights, and opportunities to scale your business.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Call: +91 8806661434</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Email: event@sheleadsindia.in</span>
                </div>
              </div>

              <Link 
                to="/empowerher25"
                className="inline-block bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg rounded-lg transition-colors duration-300"
              >
                Join EmpowerHER 25 →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmpowerHer2024;
