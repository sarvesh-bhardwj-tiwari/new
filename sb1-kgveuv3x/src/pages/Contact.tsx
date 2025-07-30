import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Linkedin,
  Twitter,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["hello@blockonmate.com", "support@blockonmate.com"],
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["JMD Mega Polish, Gurugram", "Sector 48, Haryana, India"],
      description: "Come say hello at our office"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"],
      description: "We're here to help during business hours"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex blockchain or AI projects may take 2-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer comprehensive support packages including maintenance, updates, bug fixes, and technical assistance. Our support team is available 24/7 for critical issues."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in blockchain technologies (Ethereum, Solidity), AI/ML (Python, TensorFlow), and modern web development (React, Node.js, Next.js). We stay updated with the latest industry trends."
    },
    {
      question: "Can you work with existing systems?",
      answer: "Absolutely! We're experienced in integrating with existing systems and can help modernize your current infrastructure while maintaining compatibility with your existing workflows."
    }
  ];

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
              Get In Touch
            </h1>
            <p className="text-xl md:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-4xl font-bold text-gray-900 mb-10">
                  Send us a message
                </h2>
                
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-green-700 font-medium">Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="company" className="block text-base font-medium text-gray-700 mb-3">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-base font-medium text-gray-700 mb-3">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                      >
                        <option value="">Select a service</option>
                        <option value="blockchain">Blockchain Development</option>
                        <option value="ai">AI Development</option>
                        <option value="web">Web Development</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-lg"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 rounded-2xl font-semibold text-xl flex items-center justify-center space-x-3 hover:shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group"
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center space-x-3">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        <span>Send Message</span>
                      </>
                    )}
                    </div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>
            
            {/* Contact Information */}
            <AnimatedSection delay={0.3}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-8">
                    Let's start a conversation
                  </h2>
                  <p className="text-gray-600 text-xl leading-relaxed mb-10">
                    We're here to help you transform your ideas into reality. Whether you need blockchain solutions, 
                    AI development, or web applications, our team is ready to discuss your project.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                      whileHover={{ y: -2 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 text-white">
                        {info.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                      <div className="space-y-2 mb-3">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-blue-600 font-medium text-base">{detail}</p>
                        ))}
                      </div>
                      <p className="text-gray-500 text-base">{info.description}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-10 rounded-3xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    Follow Us
                  </h3>
                  <div className="flex justify-center space-x-6">
                    {[
                      { icon: <Twitter className="w-5 h-5" />, name: "Twitter" },
                      { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn" },
                      { icon: <MessageCircle className="w-5 h-5" />, name: "WhatsApp" }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our services and processes.
            </p>
          </AnimatedSection>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                  whileHover={{ y: -2 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection delay={0.6}>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6 text-lg">Still have questions?</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-3 mx-auto shadow-lg hover:shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden group"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5" />
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;