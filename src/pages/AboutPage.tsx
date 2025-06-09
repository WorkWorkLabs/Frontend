import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Mail, ArrowRight } from 'lucide-react';
import HeroSection from '../components/common/HeroSection';

const AboutPage = () => {
  const { t } = useTranslation();

  const stats = [
    { value: '2,500+', label: 'Digital Nomads' },
    { value: '10+', label: 'Countries Covered' },
    { value: '500+', label: 'Job Opportunities' },
    { value: '50+', label: 'Partner Services' }
  ];

  const values = [
    {
      title: 'Community First',
      description: 'We believe in the power of community. Everything we build is designed to foster connections and collaboration.'
    },
    {
      title: 'Location Independence',
      description: 'We champion the freedom to work from anywhere, breaking down geographical barriers to opportunity.'
    },
    {
      title: 'Web3 Innovation',
      description: 'We embrace the decentralized future, supporting professionals who are building the next generation of the internet.'
    },
    {
      title: 'Continuous Learning',
      description: 'We promote lifelong learning and skill development as essential components of the digital nomad lifestyle.'
    }
  ];

  const team = [
    {
      name: 'Yanbo',
      role: 'Founder',
      image: require('../assets/燚波.png'),
      bio: '20 yo. digital nomad, former public chain and wallet developer relations.'
    }
  ];

  return (
    <>
      <HeroSection
        title={t('about.title')}
        subtitle="Connecting digital nomads globally through work, learning, and life services"
      />

      {/* Mission Section */}
      <section id="mission" className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('about.mission.title')}</h2>
              <p className="text-gray-600 text-lg mb-6">
                {t('about.mission.description')}. WorkWork was born from a simple idea: 
                to create a platform that serves the unique needs of digital nomads and Web3 professionals.
              </p>
              <p className="text-gray-600 mb-8">
                Our mission is to enable location-independent work and living by providing essential services and resources. 
                We believe that work should adapt to life, not the other way around. Through our job board, life services, 
                visa support, and learning resources, we aim to make the digital nomad lifestyle accessible to everyone.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl font-bold text-primary-600">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our mission"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at WorkWork.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind WorkWork dedicated to supporting the digital nomad community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <button className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                    Connect
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('about.contact.title')}</h2>
              <p className="text-lg text-gray-600">
                Have questions or suggestions? We'd love to hear from you!
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MessageCircle className="text-primary-600 mr-4 mt-1" size={20} />
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{t('about.contact.telegram')}</h4>
                        <p className="text-gray-600">
                          Join our main channel:
                          <a 
                            href="https://t.me/workworkweb3" 
                            className="text-primary-600 hover:text-primary-700 ml-1"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            @https://t.me/workworkweb3
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="text-primary-600 mr-4 mt-1" size={20} />
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{t('about.contact.email')}</h4>
                        <p className="text-gray-600">
                          General inquiries: 
                          <a 
                            href="mailto:contact@work-work.org" 
                            className="text-primary-600 hover:text-primary-700 ml-1"
                          >
                            contact@work-work.org
                          </a>
                        </p>
                        <p className="text-gray-600">
                          Partnership opportunities: 
                          <a 
                            href="mailto:partners@workwork.org" 
                            className="text-primary-600 hover:text-primary-700 ml-1"
                          >
                            partners@workwork.org
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Globe className="text-primary-600 mr-4 mt-1" size={20} />
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Headquarters</h4>
                        <p className="text-gray-600">
                          Digital-first company with team members across the globe.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white p-8">
                  <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-1">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full py-3 bg-white text-primary-800 font-medium rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-800"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest digital nomad opportunities, resources, and community updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="input-field sm:w-96"
              />
              <button className="btn-primary">Subscribe</button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;