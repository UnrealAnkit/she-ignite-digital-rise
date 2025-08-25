import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Mic, Award, CheckCircle, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SHELeadsIndiaLaunch = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: "url('/media/Launch of sheleads india.jpg')"
        }}
      >
        {/* Minimal overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-white drop-shadow-2xl">SHE</span>
                <span className="text-red-500 drop-shadow-2xl">Leads</span>
                <span className="text-white drop-shadow-2xl">India</span>
              </h1>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-4 drop-shadow-2xl">
                Launch Event
              </h2>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 drop-shadow-2xl">
                Where It All Began
              </h3>
              
              <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl leading-relaxed drop-shadow-xl">
                18th December 2023 wasn't just another date—it was the day SHELeadsIndia was officially born.
              </p>
              
              {/* Event Details */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-lg">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">MCCIA, Pune</span>
                </div>
                <div className="bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-lg">
                  <Calendar className="h-5 w-5" />
                  <span className="font-semibold">18th Dec, 2023</span>
                </div>
                <div className="bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-lg">
                  <Users className="h-5 w-5" />
                  <span className="font-semibold">150+ Women Entrepreneurs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Launch Story Section */}
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
                The Birth of a Movement
              </h2>
              <p className="text-xl text-gray-700">
                At the prestigious MCCIA, Pune, we welcomed 150+ women entrepreneurs from across the city to witness and participate in a one-of-a-kind launch event.
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
                  The atmosphere was electric. The stage was lit up with voices that mattered, and every corner of the venue buzzed with the energy of ambitious women ready to transform their entrepreneurial dreams into reality.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  This wasn't just another business event - it was the official inauguration of a platform designed specifically for women entrepreneurs who were tired of navigating their business journeys alone.
                </p>

                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-6 text-white">
                  <p className="text-lg font-semibold leading-relaxed text-center">
                    👉 The launch was more than an event. It was the start of a movement—and yes, it was a big hit.
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
                  src="/media/Launch of sheleads india.jpg" 
                  alt="SHELeadsIndia Launch Event" 
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

      {/* Event Highlights Section */}
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
                Event Highlights
              </h2>
              <p className="text-lg text-gray-700">
                Every session sparked conversations, every speaker touched hearts
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Keynote Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-red-600 rounded-full p-3">
                    <Mic className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Keynote Address</h3>
                </div>
                <h4 className="text-xl font-semibold text-red-600 mb-3">Siji Vergance</h4>
                <p className="text-gray-600 mb-4">National Trainer</p>
                <p className="text-gray-700 leading-relaxed">
                  A powerful keynote that left the audience thinking bigger and aiming higher. Siji's inspiring words set the perfect tone for the launch, challenging every woman in the room to break barriers and pursue their entrepreneurial dreams with renewed vigor.
                </p>
              </motion.div>

              {/* Panel Discussion Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-red-600 rounded-full p-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Panel Discussion</h3>
                </div>
                <div className="space-y-3 mb-4">
                  <p className="text-red-600 font-semibold">• Sonia Agarwal - Founder of PULA</p>
                  <p className="text-red-600 font-semibold">• Shraddha Trivedi - Entrepreneur</p>
                  <p className="text-red-600 font-semibold">• Priya Parekh - Artist & Social Activist</p>
                  <p className="text-red-600 font-semibold">• Shraddha Subramanium - Business Leader</p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  A dynamic discussion that brought raw experiences, practical advice, and pure inspiration. The panelists shared their authentic journeys, failures, victories, and the lessons learned along the way.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      {/* Journey Forward Section */}
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
                From Launch to Leadership
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                What started as a single event has grown into a thriving ecosystem for women entrepreneurs
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">December 2023</h3>
                <h4 className="text-xl font-semibold text-red-600 mb-3">The Beginning</h4>
                <p className="text-gray-700 leading-relaxed">
                  SHELeadsIndia launched with 150+ women entrepreneurs at MCCIA Pune. A single day that sparked a movement and created a community of ambitious women ready to transform their businesses.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">December 2024</h3>
                <h4 className="text-xl font-semibold text-red-600 mb-3">The Growth</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  EmpowerHER24 attracted 250+ women entrepreneurs, showing remarkable year-on-year growth and establishing SHELeadsIndia as the go-to platform for women-led business growth.
                </p>
                <Link 
                  to="/empowerher2024"
                  className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
                >
                  View EmpowerHER 2024
                  <ArrowRight className="h-4 w-4" />
                </Link>
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
                <h3 className="text-2xl font-bold mb-4">December 2025</h3>
                <h4 className="text-xl font-semibold mb-4">The Future</h4>
                <p className="text-lg leading-relaxed mb-6">
                  Join us for EmpowerHER 25 - our biggest event yet, designed to take women entrepreneurs to the next level with advanced strategies, AI tools, and global networking opportunities.
                </p>
                <Link 
                  to="/empowerher25"
                  className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Join EmpowerHER 25
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MCCIA Recognition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Hosted at MCCIA Pune
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                The prestigious Mahratta Chamber of Commerce, Industries and Agriculture provided the perfect venue for this historic launch
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  "The choice of MCCIA as our launch venue was deliberate. We wanted to establish SHELeadsIndia within the respected business community of Pune, and MCCIA's legacy of supporting entrepreneurship aligned perfectly with our mission to empower women entrepreneurs."
                </p>
                <p className="text-red-600 font-semibold mt-4">- Nikita Vora, Founder, SHELeadsIndia</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SHELeadsIndiaLaunch;
