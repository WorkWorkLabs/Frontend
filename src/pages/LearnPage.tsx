import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Route, MessageSquare, ArrowUpRight } from 'lucide-react';
import HeroSection from '../components/common/HeroSection';
import CourseCard from '../components/common/CourseCard';
import { Course } from '../types';

const SAMPLE_COURSES: Course[] = [
  {
    id: '1',
    title: 'Solidity Smart Contract Development',
    provider: 'Web3 Academy',
    description: 'Learn to build secure and efficient smart contracts on Ethereum and other EVM-compatible blockchains.',
    duration: '8 weeks',
    level: 'Intermediate',
    category: 'Development',
    imageUrl: 'https://images.pexels.com/photos/8919570/pexels-photo-8919570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    title: 'Digital Nomad Productivity Systems',
    provider: 'Remote Life School',
    description: 'Master the art of staying productive while traveling the world as a digital nomad.',
    duration: '4 weeks',
    level: 'Beginner',
    category: 'Lifestyle',
    imageUrl: 'https://images.pexels.com/photos/4064835/pexels-photo-4064835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    title: 'Web3 UX Design Principles',
    provider: 'Blockchain Design Institute',
    description: 'Design intuitive and accessible interfaces for decentralized applications and Web3 platforms.',
    duration: '6 weeks',
    level: 'Intermediate',
    category: 'Design',
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    title: 'DeFi Fundamentals',
    provider: 'Finance DAO',
    description: 'Comprehensive introduction to decentralized finance protocols, mechanisms, and opportunities.',
    duration: '5 weeks',
    level: 'Beginner',
    category: 'Finance',
    imageUrl: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '5',
    title: 'Advanced Smart Contract Security',
    provider: 'Web3 Academy',
    description: 'Learn to audit and secure smart contracts against common vulnerabilities and exploits.',
    duration: '10 weeks',
    level: 'Advanced',
    category: 'Security',
    imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '6',
    title: 'Remote Team Management',
    provider: 'Digital Leadership Institute',
    description: 'Strategies and tools for effectively managing distributed teams across time zones.',
    duration: '6 weeks',
    level: 'Intermediate',
    category: 'Management',
    imageUrl: 'https://images.pexels.com/photos/3153207/pexels-photo-3153207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const LearnPage = () => {
  const { t } = useTranslation();

  const learningPaths = [
    {
      title: 'Web3 Developer',
      description: 'Become a skilled blockchain developer with expertise in smart contracts and decentralized applications.',
      duration: '6 months',
      level: 'Intermediate to Advanced',
      courses: 8
    },
    {
      title: 'Digital Nomad Essentials',
      description: 'Master the fundamental skills and knowledge needed for successful location-independent living.',
      duration: '3 months',
      level: 'Beginner to Intermediate',
      courses: 5
    },
    {
      title: 'Blockchain Business Fundamentals',
      description: 'Learn how to leverage blockchain technology for business innovation and growth.',
      duration: '4 months',
      level: 'Beginner to Intermediate',
      courses: 6
    }
  ];

  const studyGroups = [
    {
      title: 'Solidity Developers',
      members: 348,
      activity: 'Very Active',
      link: 'https://t.me/workwork_solidity'
    },
    {
      title: 'Digital Nomad Beginners',
      members: 512,
      activity: 'Very Active',
      link: 'https://t.me/workwork_nomad_beginners'
    },
    {
      title: 'DeFi Explorers',
      members: 276,
      activity: 'Active',
      link: 'https://t.me/workwork_defi'
    },
    {
      title: 'Web3 Design',
      members: 189,
      activity: 'Moderate',
      link: 'https://t.me/workwork_web3_design'
    }
  ];

  return (
    <>
      <HeroSection
        title={t('learn.title')}
        subtitle="Develop the skills you need for your digital nomad journey"
      >
        <div className="max-w-xl mx-auto relative">
          <div className="flex">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search courses, skills, topics..."
                className="pl-10 pr-4 py-3 w-full rounded-l-md bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
            </div>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 rounded-r-md flex items-center justify-center transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>
      </HeroSection>

      {/* Recommended Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('learn.courses.title')}</h2>
              <p className="text-gray-600 max-w-2xl">
                {t('learn.courses.description')}
              </p>
            </div>
            <Link to="/learn/courses" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center mt-4 md:mt-0">
              View all courses
              <ArrowUpRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAMPLE_COURSES.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('learn.paths.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('learn.paths.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={index}
                className="card p-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-primary-600"></div>
                <div className="pl-2">
                  <div className="flex items-center mb-4">
                    <Route className="text-primary-600 mr-2" size={24} />
                    <h3 className="text-xl font-semibold text-gray-900">{path.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{path.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium text-gray-900">{path.duration}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500">Courses</p>
                      <p className="font-medium text-gray-900">{path.courses} courses</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded col-span-2">
                      <p className="text-sm text-gray-500">Level</p>
                      <p className="font-medium text-gray-900">{path.level}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Community-driven</span>
                    <button className="btn-outline py-1 px-4 text-sm">View Path</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/learn/paths" className="btn-primary">
              Explore All Learning Paths
            </Link>
          </div>
        </div>
      </section>

      {/* Study Groups */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('learn.groups.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('learn.groups.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyGroups.map((group, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="text-primary-600 mr-2" size={20} />
                    <h3 className="font-semibold text-gray-900">{group.title}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Members:</span>
                      <span className="font-medium text-gray-900">{group.members}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Activity:</span>
                      <span className="font-medium text-gray-900">{group.activity}</span>
                    </div>
                  </div>
                  
                  <a
                    href={group.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="btn-primary w-full py-2 text-center text-sm flex items-center justify-center"
                  >
                    Join on Telegram
                    <ArrowUpRight size={14} className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Learning Path CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white rounded-xl overflow-hidden shadow-lg">
            <div className="p-8 md:p-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-4">Create Your Personal Learning Path</h2>
                <p className="text-lg text-white/90 mb-8">
                  Get a customized learning journey based on your career goals, current skills, and available time. 
                  Our community experts will help you craft the perfect roadmap for your professional development.
                </p>
                <button className="btn-primary bg-white text-primary-800 hover:bg-gray-100">
                  Get Your Custom Path
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearnPage;