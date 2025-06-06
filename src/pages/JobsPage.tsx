import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, Briefcase, Users, ArrowUpRight, GraduationCap } from 'lucide-react';
import HeroSection from '../components/common/HeroSection';
import JobCard from '../components/common/JobCard';
import { Job } from '../types';

const SAMPLE_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Solidity Developer',
    company: 'EtherTech',
    location: 'Remote',
    category: 'development',
    description: 'Join our team to develop secure and efficient smart contracts for our DeFi platform.',
    requirements: ['Solidity', 'Ethereum', 'Web3.js', 'DeFi Experience'],
    salary: '$100K - $150K',
    isRemote: true,
    postedAt: new Date('2025-04-15'),
    logoUrl: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    title: 'UX/UI Designer for Web3 Applications',
    company: 'Blockchain Visuals',
    location: 'San Francisco, CA',
    category: 'design',
    description: 'Design intuitive and beautiful interfaces for blockchain applications that make Web3 accessible to everyone.',
    requirements: ['UI/UX', 'Figma', 'Web3 Experience', 'Design Systems'],
    salary: '$90K - $120K',
    isRemote: true,
    postedAt: new Date('2025-04-10')
  },
  {
    id: '3',
    title: 'Crypto Marketing Specialist',
    company: 'Token Growth',
    location: 'Singapore',
    category: 'marketing',
    description: 'Lead marketing campaigns for crypto projects, focusing on community growth and token adoption.',
    requirements: ['Crypto Marketing', 'Community Management', 'Content Creation', 'Analytics'],
    salary: '$80K - $110K',
    isRemote: true,
    postedAt: new Date('2025-04-05')
  },
  {
    id: '4',
    title: 'Blockchain Protocol Engineer',
    company: 'ChainScale',
    location: 'Berlin, Germany',
    category: 'development',
    description: 'Work on cutting-edge Layer 2 scaling solutions for Ethereum and other blockchains.',
    requirements: ['Rust', 'Blockchain', 'Cryptography', 'Distributed Systems'],
    salary: '$120K - $180K',
    isRemote: false,
    postedAt: new Date('2025-03-30'),
    logoUrl: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '5',
    title: 'NFT Project Manager',
    company: 'ArtChain',
    location: 'Remote',
    category: 'other',
    description: 'Oversee the development and launch of NFT collections, working with artists and blockchain developers.',
    requirements: ['Project Management', 'NFTs', 'Art Direction', 'Blockchain Basics'],
    salary: '$85K - $115K',
    isRemote: true,
    postedAt: new Date('2025-03-25')
  },
];

const JobsPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [remoteOnly, setRemoteOnly] = useState(false);

  // Filter jobs based on search term, category, and remote preference
  const filteredJobs = SAMPLE_JOBS.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || job.category === selectedCategory;
    
    const matchesRemote = !remoteOnly || job.isRemote;
    
    return matchesSearch && matchesCategory && matchesRemote;
  });

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'development', label: t('jobs.categories.development') },
    { value: 'design', label: t('jobs.categories.design') },
    { value: 'marketing', label: t('jobs.categories.marketing') },
    { value: 'web3', label: t('jobs.categories.web3') },
    { value: 'other', label: t('jobs.categories.other') }
  ];

  const jobServices = [
    {
      icon: Users,
      title: t('jobs.services.consultation'),
      description: 'One-on-one career guidance with industry experts',
      link: '/services/career-consultation'
    },
    {
      icon: GraduationCap,
      title: t('jobs.services.upskilling'),
      description: 'Specialized courses to enhance your Web3 skills',
      link: '/learn/courses'
    },
    {
      icon: Briefcase,
      title: t('jobs.services.referrals'),
      description: 'Get referred to top Web3 companies through our network',
      link: '/services/referrals'
    },
    {
      icon: ArrowUpRight,
      title: t('jobs.services.community'),
      description: 'Join events, hackathons, and networking opportunities',
      link: '/resources/community'
    }
  ];

  return (
    <>
      <HeroSection
        title={t('jobs.title')}
        subtitle="Discover the best remote and Web3 opportunities around the world"
      >
        <div className="max-w-xl mx-auto relative">
          <div className="flex">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder={t('jobs.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full rounded-l-md bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
            </div>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 rounded-r-md flex items-center justify-center transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>
      </HeroSection>

      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow p-6 sticky top-20">
                <div className="flex items-center mb-6">
                  <Filter size={18} className="text-primary-600 mr-2" />
                  <h3 className="text-lg font-semibold">{t('jobs.filters.category')}</h3>
                </div>
                
                <div className="space-y-3 mb-8">
                  {categories.map((category) => (
                    <label key={category.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category.value}
                        checked={selectedCategory === category.value}
                        onChange={() => setSelectedCategory(category.value)}
                        className="text-primary-600 focus:ring-primary-500 h-4 w-4"
                      />
                      <span className="ml-2 text-gray-700">{category.label}</span>
                    </label>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={remoteOnly}
                      onChange={() => setRemoteOnly(!remoteOnly)}
                      className="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded"
                    />
                    <span className="ml-2 text-gray-700">{t('jobs.filters.remote')}</span>
                  </label>
                </div>
              </div>
            </div>
            
            {/* Job Listings */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
                </h2>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Sort by: </span>
                  <select className="ml-2 bg-white border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-1 focus:ring-primary-500">
                    <option>Most Recent</option>
                    <option>Relevant</option>
                    <option>Salary: High to Low</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-6">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, index) => (
                    <JobCard key={job.id} job={job} index={index} />
                  ))
                ) : (
                  <div className="bg-white rounded-lg shadow p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <Briefcase className="text-gray-400" size={24} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No Jobs Found</h3>
                    <p className="text-gray-600 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
                    <button 
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('');
                        setRemoteOnly(false);
                      }}
                      className="btn-outline"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Career Development Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond job listings, we offer resources to help you advance your career in Web3 and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jobServices.map((service, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                    <service.icon className="text-primary-600" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.link} className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                  Learn more
                  <ArrowUpRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Post a Job CTA */}
      <section className="py-12 bg-primary-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Have a position to fill?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Post your job opening on WorkWork and reach thousands of skilled Web3 professionals and digital nomads.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    Free job postings
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    Reach 2,500+ digital nomads
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    Web3 talent pool
                  </li>
                </ul>
                <button className="btn-primary">Post a Job</button>
              </div>
              <div className="lg:col-span-2 bg-primary-600 p-8 lg:p-0 flex items-center justify-center">
                <div className="hidden lg:block w-full h-full">
                  <img 
                    src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Remote work team" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobsPage;