import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Brain, 
  Globe, 
  ArrowRight, 
  Check,
  Star,
  X,
  ChevronRight
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'ai', name: 'AI Development' },
    { id: 'web', name: 'Web Development' }
  ];

  const services = [
    {
      id: 1,
      icon: <Code className="w-8 h-8" />,
      title: "Smart Contract Development",
      category: 'blockchain',
      shortDesc: "Secure and efficient smart contracts for your blockchain applications",
      fullDesc: "We develop robust, secure, and gas-optimized smart contracts using Solidity and other blockchain technologies. Our smart contracts are thoroughly tested and audited to ensure maximum security and efficiency.",
      features: ["Custom Smart Contracts", "Security Audits", "Gas Optimization", "Multi-chain Support"],
      technologies: ["Solidity", "Web3.js", "Hardhat", "OpenZeppelin"],
      rating: 5,
      clients: "25+"
    },
    {
      id: 2,
      icon: <Globe className="w-8 h-8" />,
      title: "DApp Development",
      category: 'blockchain',
      shortDesc: "Full-stack decentralized applications with modern user interfaces",
      fullDesc: "Build complete decentralized applications with intuitive user interfaces, smart contract integration, and seamless Web3 functionality. We create DApps that provide excellent user experience while maintaining decentralization.",
      features: ["Frontend Development", "Smart Contract Integration", "Web3 Wallet Connection", "IPFS Integration"],
      technologies: ["React", "Next.js", "Ethers.js", "IPFS"],
      rating: 5,
      clients: "20+"
    },
    {
      id: 3,
      icon: <Brain className="w-8 h-8" />,
      title: "Custom AI Models",
      category: 'ai',
      shortDesc: "Tailored artificial intelligence solutions for your specific needs",
      fullDesc: "Develop custom AI models tailored to your business requirements. From natural language processing to computer vision, we create AI solutions that solve real-world problems and drive business value.",
      features: ["Custom Model Training", "Data Processing", "Model Optimization", "API Integration"],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      rating: 5,
      clients: "30+"
    },
    {
      id: 4,
      icon: <Brain className="w-8 h-8" />,
      title: "AI Chatbots",
      category: 'ai',
      shortDesc: "Intelligent conversational AI for customer service and support",
      fullDesc: "Create intelligent chatbots that understand natural language and provide meaningful responses. Our chatbots can be integrated into websites, mobile apps, and messaging platforms to enhance customer experience.",
      features: ["Natural Language Processing", "Multi-platform Integration", "Learning Capabilities", "Analytics Dashboard"],
      technologies: ["Python", "Dialogflow", "OpenAI API", "Node.js"],
      rating: 5,
      clients: "35+"
    },
    {
      id: 5,
      icon: <Globe className="w-8 h-8" />,
      title: "Website Development",
      category: 'web',
      shortDesc: "Modern, responsive websites built with the latest technologies",
      fullDesc: "Create stunning, responsive websites that engage your audience and drive conversions. We use modern technologies and best practices to ensure your website is fast, secure, and user-friendly.",
      features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "CMS Integration"],
      technologies: ["React", "Next.js", "Node.js", "MongoDB"],
      rating: 5,
      clients: "50+"
    },
    {
      id: 6,
      icon: <Globe className="w-8 h-8" />,
      title: "E-commerce Solutions",
      category: 'web',
      shortDesc: "Complete e-commerce platforms with payment integration",
      fullDesc: "Build comprehensive e-commerce solutions with secure payment processing, inventory management, and user-friendly interfaces. Our e-commerce platforms are scalable and feature-rich.",
      features: ["Payment Gateway Integration", "Inventory Management", "Order Tracking", "Admin Dashboard"],
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      rating: 5,
      clients: "15+"
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We understand your requirements and create a detailed project plan with timelines and deliverables.",
      duration: "1-2 Days"
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Our team designs the system architecture and creates wireframes for optimal user experience.",
      duration: "3-5 Days"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using best practices with continuous testing and quality assurance.",
      duration: "2-6 Weeks"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing support, maintenance, and updates.",
      duration: "Ongoing"
    }
  ];

  const achievements = [
    { number: "100+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const openServiceModal = (serviceId: number) => {
    setActiveService(serviceId);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceModal = () => {
    setActiveService(null);
    document.body.style.overflow = 'unset';
  };

  const activeServiceData = services.find(service => service.id === activeService);

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Comprehensive blockchain, AI, and web development solutions tailored to transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {serviceCategories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden group ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/30 px-8 py-4 text-lg'
                    : 'bg-white text-gray-700 hover:text-blue-600 border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl px-8 py-4 text-lg'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="relative z-10">{category.name}</span>
                {/* Animated background for inactive buttons */}
                {selectedCategory !== category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                {/* Active button glow */}
                {selectedCategory === category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-lg"></div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {filteredServices.map((service, index) => (
                <AnimatedSection key={service.id} delay={index * 0.1}>
                  <motion.div
                    className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center text-white">
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center mb-2">
                          {[...Array(service.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-base text-gray-500">{service.clients} clients</p>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg flex-grow">{service.shortDesc}</p>
                    
                    <button
                      onClick={() => openServiceModal(service.id)}
                      className="w-full flex items-center justify-center text-blue-600 font-medium hover:text-white transition-all duration-300 py-4 border border-blue-200 rounded-2xl hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:shadow-xl group relative overflow-hidden text-lg mt-auto"
                    >
                      {/* Background animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-0 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10 flex items-center">
                        <span>Learn More</span>
                        <ChevronRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </button>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeService !== null && activeServiceData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeServiceModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-8 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                    {activeServiceData.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{activeServiceData.title}</h3>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        {[...Array(activeServiceData.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-2 text-gray-500">({activeServiceData.clients} clients)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeServiceModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {activeServiceData.fullDesc}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {activeServiceData.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeServiceData.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <button
                className="w-full relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex items-center space-x-3">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{process.description}</p>
                  <div className="text-blue-600 font-medium text-sm">{process.duration}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="text-center">
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold text-blue-600 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {achievement.number}
                  </motion.div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Transform your business with our expert blockchain, AI, and web development services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg flex items-center space-x-3 mx-auto shadow-lg hover:shadow-xl border border-blue-100 hover:border-blue-300 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex items-center space-x-3">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;