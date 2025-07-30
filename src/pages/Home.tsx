import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Shield, 
  Zap, 
  Globe, 
  Brain, 
  Code2, 
  Rocket,
  ArrowRight,
  Play,
  TrendingUp,
  Clock,
  Target
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Home: React.FC = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Blockchain Development",
      description: "Smart contracts, DApps, and Web3 solutions that revolutionize how businesses operate.",
      features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Crypto Wallets"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Development",
      description: "Intelligent automation and machine learning solutions that drive business growth.",
      features: ["Custom AI Models", "Chatbots", "Data Analytics", "Computer Vision"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, scalable web applications built with cutting-edge technologies.",
      features: ["Responsive Design", "E-commerce", "CMS Development", "API Integration"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Delivered", icon: <Target className="w-6 h-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "98%", label: "Success Rate", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechStart Solutions",
      content: "BlockOnMate transformed our business with their blockchain solution. The results exceeded our expectations and the team was incredibly professional.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      company: "TechStart"
    },
    {
      name: "Priya Sharma",
      role: "Founder, AI Innovations",
      content: "Their AI development expertise helped us create intelligent solutions that exceeded our expectations. Highly recommended for any AI project.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400",
      company: "AI Innovations"
    },
    {
      name: "Amit Patel",
      role: "CTO, Digital Ventures",
      content: "BlockOnMate's web development team created a stunning website that perfectly represents our brand and drives conversions.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg?auto=compress&cs=tinysrgb&w=400",
      company: "Digital Ventures"
    }
  ];

  const technologies = [
    { name: "Blockchain", icon: "⛓️", color: "bg-blue-100 text-blue-600" },
    { name: "AI/ML", icon: "🤖", color: "bg-purple-100 text-purple-600" },
    { name: "React", icon: "⚛️", color: "bg-cyan-100 text-cyan-600" },
    { name: "Node.js", icon: "🟢", color: "bg-green-100 text-green-600" },
    { name: "Python", icon: "🐍", color: "bg-yellow-100 text-yellow-600" },
    { name: "Solidity", icon: "💎", color: "bg-indigo-100 text-indigo-600" }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 bg-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Blockchain Network Animation */}
          <motion.div
            className="absolute top-16 sm:top-20 left-2 sm:left-4 md:left-10 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-blue-500 rounded-full opacity-40 sm:opacity-60"
            animate={{
              x: [0, 50, 100, 50, 0],
              y: [0, -25, 0, 25, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-24 sm:top-32 md:top-40 right-2 sm:right-4 md:right-20 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-purple-500 rounded-full opacity-30 sm:opacity-50"
            animate={{
              x: [0, -40, -80, -40, 0],
              y: [0, 30, 0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-16 sm:bottom-20 md:bottom-32 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full opacity-50 sm:opacity-70"
            animate={{
              x: [0, 60, 0, -60, 0],
              y: [0, -40, -80, -40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* AI Neural Network Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-3 sm:opacity-5 md:opacity-10" viewBox="0 0 1200 800">
            <motion.path
              d="M100,400 Q300,200 500,400 T900,400"
              stroke="url(#gradient1)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M200,300 Q400,500 600,300 T1000,300"
              stroke="url(#gradient2)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Floating Blockchain Blocks */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-10 sm:opacity-20"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg opacity-20 sm:opacity-30"
            animate={{
              rotate: [360, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 sm:space-y-12"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full shadow-lg"
            >
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-600" />
              <span className="text-blue-700 font-medium text-sm sm:text-base">Trusted by 50+ Companies</span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
            >
              <span className="text-gray-900">Future-Ready</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Tech Solutions
              </span>
            </motion.h1>
            
            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 leading-relaxed max-w-5xl mx-auto px-4 sm:px-6"
            >
              Transform your business with cutting-edge blockchain and AI solutions that drive innovation and accelerate growth.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-4 sm:pt-6 md:pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl sm:rounded-2xl md:rounded-3xl font-bold text-base sm:text-lg md:text-xl shadow-2xl hover:shadow-4xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Animated background layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-3xl bg-white/10 opacity-0 group-hover:opacity-100 animate-pulse"></div>
              </motion.button>
            </motion.div>
            
            {/* Social Proof Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 md:flex md:flex-wrap md:justify-center md:gap-12 lg:gap-16 pt-6 sm:pt-8 md:pt-12 lg:pt-16 max-w-4xl mx-auto"
            >
              {[
                { number: "100+", label: "Projects Delivered", icon: <Target className="w-6 h-6" /> },
                { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
                { number: "98%", label: "Success Rate", icon: <Award className="w-6 h-6" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base md:text-lg leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Technology Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="pt-8 sm:pt-12 md:pt-16 lg:pt-20"
            >
              <p className="text-gray-500 text-sm sm:text-base font-medium mb-4 sm:mb-6 md:mb-8 lg:mb-12 uppercase tracking-wider">
                Powered by cutting-edge technologies
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-wrap md:justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-md sm:max-w-xl md:max-w-none mx-auto">
                {[
                  { name: "Blockchain", icon: "⛓️", color: "from-blue-500 to-cyan-500" },
                  { name: "AI/ML", icon: "🤖", color: "from-purple-500 to-pink-500" },
                  { name: "Web3", icon: "🌐", color: "from-green-500 to-teal-500" },
                  { name: "Smart Contracts", icon: "📜", color: "from-orange-500 to-red-500" }
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`bg-gradient-to-r ${tech.color} p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer min-h-[80px] sm:min-h-[90px] md:min-h-[100px] lg:min-h-[120px] flex flex-col justify-center`}
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">{tech.icon}</div>
                    <div className="text-sm sm:text-base font-semibold leading-tight">{tech.name}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16 sm:mb-20 md:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-gray-900">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-4 sm:px-6">
              Comprehensive technology solutions designed to accelerate your digital transformation journey.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  className="group bg-white p-8 sm:p-10 rounded-3xl sm:rounded-4xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full"
                  whileHover={{ y: -10 }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${service.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3 sm:space-y-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 sm:mr-4 flex-shrink-0" />
                          <span className="text-base font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Proven <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <motion.div 
                  className="text-center bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white">
                    {stat.icon}
                  </div>
                  <motion.div 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900">
              Client <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              Real results from real clients who trusted us with their digital transformation.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group h-full"
                  whileHover={{ y: -10 }}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex mb-4 sm:mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-gray-700 mb-6 sm:mb-8 italic leading-relaxed text-sm sm:text-base md:text-lg">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover mr-3 sm:mr-4 ring-2 sm:ring-4 ring-white shadow-lg"
                        />
                        <div>
                          <div className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">{testimonial.name}</div>
                          <div className="text-blue-600 font-medium text-xs sm:text-sm">{testimonial.role}</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 bg-gray-50 px-2 sm:px-3 py-1 rounded-full">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto px-2 sm:px-4">
              Join 50+ companies that have already transformed their operations with our cutting-edge solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-blue-600 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg flex items-center space-x-2 sm:space-x-3 shadow-2xl hover:shadow-4xl border border-blue-100 hover:border-blue-300 transition-all duration-300 group w-full sm:w-auto max-w-xs sm:max-w-none relative overflow-hidden"
              >
                {/* Subtle background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex items-center space-x-2 sm:space-x-3">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:border-white/40 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg flex items-center space-x-2 sm:space-x-3 hover:bg-white/20 transition-all duration-300 w-full sm:w-auto max-w-xs sm:max-w-none relative overflow-hidden group"
              >
                {/* Glass morphism enhancement */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex items-center space-x-2 sm:space-x-3">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Watch Demo</span>
                </div>
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;