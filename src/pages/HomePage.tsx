import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase as BriefcaseBusiness, Plane, Import as Passport, GraduationCap, Users, ArrowRight } from 'lucide-react';
import ServiceCard from '../components/common/ServiceCard';
import Testimonial from '../components/common/Testimonial';
import HeroSection from '../components/common/HeroSection';

const HomePage = () => {
  const { t } = useTranslation();

  const services = [
    { 
      icon: BriefcaseBusiness, 
      title: t('home.services.jobs.title'), 
      description: t('home.services.jobs.description'),
      link: '/jobs'
    },
    { 
      icon: Plane, 
      title: t('home.services.life.title'), 
      description: t('home.services.life.description'),
      link: '/services'
    },
    { 
      icon: Passport, 
      title: t('home.services.visa.title'), 
      description: t('home.services.visa.description'),
      link: '/visa'
    },
    { 
      icon: GraduationCap, 
      title: t('home.services.learn.title'), 
      description: t('home.services.learn.description'),
      link: '/learn'
    }
  ];

  const testimonials = [
    {
      quote: "WorkWork has been essential for my digital nomad journey, helping me find Web3 jobs while navigating visa requirements across Asia.",
      author: "Sarah Chen",
      role: "Blockchain Developer",
      imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The learning paths and community support have accelerated my career transition into Web3. The visa matcher tool saved me countless hours of research.",
      author: "Miguel Rodriguez",
      role: "Smart Contract Developer",
      imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "As someone constantly on the move, I appreciate their payment solutions and dining recommendations. It's truly a one-stop platform for digital nomads.",
      author: "Aisha Patel",
      role: "UX Designer",
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
      >
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/jobs" className="btn-primary">
            {t('cta.browseJobs')}
          </Link>
          <Link to="/services" className="btn-outline bg-white/10 border-white/30 text-white hover:bg-white/20">
            {t('cta.exploreServices')}
          </Link>
          <a 
            href="https://t.me/WorkWorkWeb3/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-outline bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            {t('home.community.joinButton')}
          </a>
        </div>
        <p className="mt-8 text-white/80 font-medium">{t('home.hero.stats')}</p>
      </HeroSection>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">{t('home.services.title')}</h2>
            <div className="w-20 h-1 bg-secondary-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-gray-900 mb-6">Find Your Dream Web3 Job</h2>
                <p className="text-gray-600 mb-8">
                  Our job board connects you with the best remote opportunities in the Web3 space. 
                  From development to design, find the perfect position that matches your skills and lifestyle.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Free job postings', 'Web3 focus', 'Remote-first', 'Community-driven'].map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/jobs" className="btn-primary inline-flex items-center">
                  <span>Browse Jobs</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital nomad working"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Our Community Says</h2>
            <div className="w-20 h-1 bg-secondary-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                imageUrl={testimonial.imageUrl}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital nomad community"
                className="w-full h-auto"
              />
            </motion.div>
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-gray-900 mb-6">{t('home.community.title')}</h2>
                <p className="text-gray-600 mb-8">
                  {t('home.community.description')}. Join our global network of digital nomads, participate in events, 
                  share experiences, and get real-time advice for your nomadic journey.
                </p>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Users className="text-primary-600 mr-2" size={20} />
                    <h4 className="font-semibold text-gray-900">Join Our Telegram Channels</h4>
                  </div>
                  <ul className="space-y-3">
                    {['WorkWork Global', 'WorkWork Jobs', 'WorkWork Learning', 'City Guides'].map((channel, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-secondary-500 mr-2"></span>
                        <a href="#" className="text-primary-600 hover:underline">{channel}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Digital Nomad Journey?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of 2,500+ digital nomads and Web3 professionals today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/jobs" className="btn-primary bg-white text-primary-800 hover:bg-gray-100">
              {t('cta.browseJobs')}
            </Link>
            <Link to="/about" className="btn-outline border-white/40 hover:bg-white/10">
              {t('cta.learnMore')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;