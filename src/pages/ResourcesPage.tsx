import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, FileText, Users, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/common/HeroSection';
import ResourceCard from '../components/common/ResourceCard';
import { Resource } from '../types';
import { useState } from 'react';

const SAMPLE_RESOURCES: Resource[] = [
  {
    id: '1',
    title: 'The Ultimate Digital Nomad Tax Guide',
    description: 'Navigate the complex world of international taxation as a digital nomad with our comprehensive guide.',
    author: 'Tax Nomads',
    type: 'Guide',
    link: '#',
    createdAt: new Date('2025-04-01')
  },
  {
    id: '2',
    title: 'Top 10 Co-living Spaces for Web3 Professionals',
    description: 'Discover the best co-living spaces around the world that cater to Web3 professionals and crypto enthusiasts.',
    author: 'Nomad Living',
    type: 'Article',
    link: '#',
    createdAt: new Date('2025-03-25')
  },
  {
    id: '3',
    title: 'Setting Up a Mobile Crypto Mining Operation',
    description: 'Learn how to set up and maintain a portable crypto mining operation as you travel the world.',
    author: 'Crypto Wanderer',
    type: 'Video',
    link: '#',
    createdAt: new Date('2025-03-20')
  },
  {
    id: '4',
    title: 'Visa Calculator for Nomads',
    description: 'Calculate your legal stay duration across multiple countries with this handy visa calculator tool.',
    author: 'Visa Tracker',
    type: 'Tool',
    link: '#',
    createdAt: new Date('2025-03-15')
  },
  {
    id: '5',
    title: 'Digital Nomad Packing List for 2025',
    description: 'The ultimate packing guide for digital nomads with a focus on minimalism and productivity.',
    author: 'Minimal Nomad',
    type: 'Guide',
    link: '#',
    createdAt: new Date('2025-03-10')
  },
  {
    id: '6',
    title: 'Securing Your Crypto While Traveling',
    description: 'Essential security practices for protecting your crypto assets and private keys while on the move.',
    author: 'Crypto Security Pro',
    type: 'Article',
    link: '#',
    createdAt: new Date('2025-03-05')
  }
];

const ResourcesPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  
  // Filter resources based on search term and type
  const filteredResources = SAMPLE_RESOURCES.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === '' || resource.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  const resourceTypes = [
    { value: '', label: 'All Types' },
    { value: 'Guide', label: 'Guides' },
    { value: 'Article', label: 'Articles' },
    { value: 'Video', label: 'Videos' },
    { value: 'Tool', label: 'Tools' }
  ];

  const popularTopics = [
    'Visa Requirements',
    'Remote Work',
    'Web3 Jobs',
    'Crypto Payments',
    'Co-living',
    'Tax Planning',
    'Travel Insurance',
    'Community Building'
  ];

  return (
    <>
      <HeroSection
        title={t('resources.title')}
        subtitle="Community-created resources and guides for the digital nomad lifestyle"
      >
        <div className="max-w-xl mx-auto relative">
          <div className="flex">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search resources..."
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

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow p-6 sticky top-20">
                {/* Resource Types */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Resource Type</h3>
                  <div className="space-y-2">
                    {resourceTypes.map((type) => (
                      <label key={type.value} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="resourceType"
                          value={type.value}
                          checked={selectedType === type.value}
                          onChange={() => setSelectedType(type.value)}
                          className="text-primary-600 focus:ring-primary-500 h-4 w-4"
                        />
                        <span className="ml-2 text-gray-700">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Popular Topics */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Popular Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTopics.map((topic, index) => (
                      <button
                        key={index}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-md transition-colors"
                        onClick={() => setSearchTerm(topic)}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Resource List */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredResources.length} {filteredResources.length === 1 ? 'Resource' : 'Resources'} Found
                </h2>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Sort by: </span>
                  <select className="ml-2 bg-white border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-1 focus:ring-primary-500">
                    <option>Most Recent</option>
                    <option>Most Popular</option>
                    <option>A-Z</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.length > 0 ? (
                  filteredResources.map((resource, index) => (
                    <ResourceCard key={resource.id} resource={resource} index={index} />
                  ))
                ) : (
                  <div className="bg-white rounded-lg shadow p-8 text-center col-span-2">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <FileText className="text-gray-400" size={24} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No Resources Found</h3>
                    <p className="text-gray-600 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
                    <button 
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedType('');
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

      {/* Community Forum Section */}
      <section className="py-16 bg-white">
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
                src="https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Community forum"
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
                <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('resources.forum.title')}</h2>
                <p className="text-gray-600 mb-8">
                  {t('resources.forum.description')} with our global community of digital nomads. 
                  Get advice, share tips, and connect with like-minded professionals.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Popular Forum Topics</h3>
                  
                  <div className="space-y-4">
                    {['Visa Experiences', 'Remote Work Tools', 'City Recommendations', 'Crypto Taxation'].map((topic, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Users className="text-primary-600 mr-3" size={18} />
                          <div>
                            <p className="font-medium text-gray-900">{topic}</p>
                            <p className="text-sm text-gray-500">Last active: 2 hours ago</p>
                          </div>
                        </div>
                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">{50 + idx * 10}+ posts</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link to="/forum" className="btn-primary inline-flex items-center">
                  <span>Visit the Forum</span>
                  <ArrowUpRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Share Your Knowledge</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Have insights, guides, or tools that could help fellow digital nomads? Contribute to our resource center and help the community.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    Earn recognition in the community
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    Help others on their journey
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    Build your personal brand
                  </li>
                </ul>
                <button className="btn-primary">Submit a Resource</button>
              </div>
              <div className="lg:col-span-2 bg-primary-600 p-8 lg:p-0 flex items-center justify-center">
                <div className="hidden lg:block w-full h-full">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Collaborative work" 
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

export default ResourcesPage;