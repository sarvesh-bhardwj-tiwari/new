import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Heart, Lightbulb } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const About: React.FC = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Pushing the boundaries of blockchain and AI technology to create cutting-edge solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working closely with our clients to understand their needs and deliver exceptional results."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Maintaining the highest standards of quality in every project we undertake."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Impact",
      description: "Creating solutions that make a meaningful difference in businesses and communities."
    }
  ];

  const team = [
    {
      name: "Sarvesh Tiwari",
      role: "Co-Founder & Director",
      description: "Visionary leader with expertise in blockchain technology and business strategy.",
      image: "https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Blockchain Strategy", "Business Development", "Team Leadership"]
    },
    {
      name: "Awani Pandey",
      role: "Co-Founder & Director",
      description: "Technical expert specializing in AI development and system architecture.",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["AI Development", "System Architecture", "Technical Strategy"]
    },
    {
      name: "Vaibhav Pandey",
      role: "Chief Financial Officer",
      description: "Financial strategist ensuring sustainable growth and operational excellence.",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Financial Planning", "Operations", "Risk Management"]
    }
  ];

  const milestones = [
    { 
      year: "2022", 
      title: "Company Founded", 
      description: "BlockOnMate was established with a vision to revolutionize blockchain and AI development"
    },
    { 
      year: "2023", 
      title: "First Major Project", 
      description: "Successfully delivered our first enterprise blockchain solution"
    },
    { 
      year: "2024", 
      title: "AI Division Launch", 
      description: "Expanded our services to include comprehensive AI development solutions"
    },
    { 
      year: "2025", 
      title: "Market Leadership", 
      description: "Established as a leading blockchain and AI development company in India"
    }
  ];

  const achievements = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "3+", label: "Years of Excellence" },
    { number: "24/7", label: "Support Available" }
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
              About BlockOnMate
            </h1>
            <p className="text-xl md:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              We are passionate innovators dedicated to transforming businesses through cutting-edge blockchain and AI technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl">
                <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mb-8">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  To empower businesses with innovative blockchain and AI solutions that drive growth, 
                  enhance efficiency, and create sustainable competitive advantages in the digital economy.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl">
                <div className="w-20 h-20 bg-purple-600 rounded-3xl flex items-center justify-center mb-8">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  To become the leading technology partner for businesses seeking to leverage blockchain 
                  and AI technologies, fostering innovation and digital transformation across industries.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
              Our Values
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The core principles that guide our work and define our commitment to excellence.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  className="bg-white p-10 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mb-8 mx-auto text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{value.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
              Our Leadership Team
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Meet the visionary leaders driving BlockOnMate's success and innovation.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  className="bg-white p-10 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative w-40 h-40 mx-auto mb-8 group">
                    {/* Glowing background circle */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${
                      index === 0 ? 'from-blue-500 to-cyan-500' :
                      index === 1 ? 'from-purple-500 to-pink-500' :
                      'from-green-500 to-teal-500'
                    } opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-pulse`}></div>
                    
                    {/* Outer glowing ring */}
                    <div className={`absolute -inset-2 rounded-full bg-gradient-to-r ${
                      index === 0 ? 'from-blue-400 to-cyan-400' :
                      index === 1 ? 'from-purple-400 to-pink-400' :
                      'from-green-400 to-teal-400'
                    } opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500`}></div>
                    
                    {/* Image container with border */}
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className={`relative z-10 w-full h-full object-cover rounded-full border-4 ${
                        index === 0 ? 'border-blue-200 group-hover:border-blue-300' :
                        index === 1 ? 'border-purple-200 group-hover:border-purple-300' :
                        'border-green-200 group-hover:border-green-300'
                      } transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                    />
                    
                    {/* Inner highlight ring */}
                    <div className={`absolute inset-1 rounded-full border-2 ${
                      index === 0 ? 'border-blue-300/50' :
                      index === 1 ? 'border-purple-300/50' :
                      'border-green-300/50'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-6 text-xl">{member.role}</p>
                  <p className="text-gray-600 text-base leading-relaxed mb-8">{member.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Key milestones that have shaped BlockOnMate's growth and success.
            </p>
          </AnimatedSection>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimatedSection key={index} delay={index * 0.2}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold border-4 border-white shadow-lg">
                      {index + 1}
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Numbers that reflect our commitment to excellence and client satisfaction.
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
    </div>
  );
};

export default About;