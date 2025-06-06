import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, Globe, MapPin, FileText, Calendar, DollarSign } from 'lucide-react';
import HeroSection from '../components/common/HeroSection';
import { useState } from 'react';
import { VisaInfo } from '../types';

const SAMPLE_VISAS: VisaInfo[] = [
  {
    id: '1',
    country: 'Portugal',
    type: 'Digital Nomad Visa',
    duration: '1 year (renewable)',
    requirements: ['Proof of remote work', 'Health insurance', 'Minimum income of €2,800/month'],
    processingTime: '30-60 days',
    cost: '€75'
  },
  {
    id: '2',
    country: 'Thailand',
    type: 'Long-Term Resident Visa',
    duration: '10 years',
    requirements: ['Minimum income of $80,000/year', 'Health insurance', 'Background check'],
    processingTime: '60-90 days',
    cost: 'THB 50,000'
  },
  {
    id: '3',
    country: 'Estonia',
    type: 'Digital Nomad Visa',
    duration: '1 year',
    requirements: ['Remote work proof', 'Minimum income of €3,504/month', 'Health insurance'],
    processingTime: '15-30 days',
    cost: '€100'
  },
  {
    id: '4',
    country: 'Spain',
    type: 'Non-Lucrative Visa',
    duration: '1 year (renewable)',
    requirements: ['Proof of funds', 'Health insurance', 'No work in Spain allowed'],
    processingTime: '30-60 days',
    cost: '€80'
  },
  {
    id: '5',
    country: 'Mexico',
    type: 'Temporary Resident Visa',
    duration: '1-4 years',
    requirements: ['Proof of income/savings', 'Application at Mexican consulate'],
    processingTime: '10-15 days',
    cost: '$36'
  }
];

const VisaPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  
  // Filter visas based on search term and country
  const filteredVisas = SAMPLE_VISAS.filter(visa => {
    const matchesSearch = 
      visa.country.toLowerCase().includes(searchTerm.toLowerCase()) || 
      visa.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCountry = selectedCountry === '' || visa.country === selectedCountry;
    
    return matchesSearch && matchesCountry;
  });

  const countries = [
    { value: '', label: 'All Countries' },
    ...Array.from(new Set(SAMPLE_VISAS.map(visa => visa.country)))
      .map(country => ({ value: country, label: country }))
  ];

  return (
    <>
      <HeroSection
        title={t('visa.title')}
        subtitle="Navigate visa requirements for digital nomads in countries worldwide"
      >
        <div className="max-w-xl mx-auto relative">
          <div className="flex">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search visa types, countries..."
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

      {/* Visa Matcher Tool */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('visa.matcher.title')}</h2>
                <p className="text-gray-600 mb-8">
                  {t('visa.matcher.description')} by answering a few questions about your situation.
                  Our tool will match you with the most suitable visa options.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Find Your Ideal Visa</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your nationality
                      </label>
                      <select className="input-field">
                        <option>Select your nationality</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Canada</option>
                        <option>Australia</option>
                        <option>Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Where do you want to go?
                      </label>
                      <select className="input-field">
                        <option>Select destination</option>
                        <option>Portugal</option>
                        <option>Thailand</option>
                        <option>Estonia</option>
                        <option>Spain</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Planned stay duration
                      </label>
                      <select className="input-field">
                        <option>Select duration</option>
                        <option>Less than 3 months</option>
                        <option>3-6 months</option>
                        <option>6-12 months</option>
                        <option>1-2 years</option>
                        <option>More than 2 years</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Employment status
                      </label>
                      <select className="input-field">
                        <option>Select status</option>
                        <option>Remote employee</option>
                        <option>Freelancer</option>
                        <option>Business owner</option>
                        <option>Retired/Passive income</option>
                      </select>
                    </div>
                  </div>
                  
                  <button className="btn-primary w-full mt-6">Find Matching Visas</button>
                </div>
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
                src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Visa application"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visa Database Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('visa.database.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('visa.database.description')}
            </p>
          </div>
          
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="w-full md:w-1/3">
              <select
                className="input-field"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                {countries.map(country => (
                  <option key={country.value} value={country.value}>{country.label}</option>
                ))}
              </select>
            </div>
            
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search visa types..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {filteredVisas.length > 0 ? (
              filteredVisas.map((visa, index) => (
                <motion.div
                  key={visa.id}
                  className="bg-white rounded-lg shadow overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div className="flex items-center mb-4 md:mb-0">
                        <div className="p-2 mr-3 bg-primary-100 rounded-lg">
                          <Globe className="text-primary-600" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{visa.type}</h3>
                          <div className="flex items-center text-gray-600">
                            <MapPin size={16} className="mr-1" />
                            <span>{visa.country}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-gray-600">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          <span>{visa.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <DollarSign size={16} className="mr-1" />
                          <span>{visa.cost}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-md font-medium mb-3 flex items-center">
                        <FileText size={16} className="mr-2 text-gray-500" />
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {visa.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-5 h-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3 mt-0.5">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-4 mt-4">
                      <h4 className="text-md font-medium mb-3 text-gray-900">Processing time</h4>
                      <p className="text-gray-700">{visa.processingTime}</p>
                    </div>
                    
                    <div className="mt-6">
                      <button className="btn-primary">View Full Details</button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <FileText className="text-gray-400" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">No Visas Found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search criteria to find what you're looking for.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCountry('');
                  }}
                  className="btn-outline"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Need Personal Visa Assistance?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our visa experts can provide personalized consultation to help you navigate complex visa requirements.
          </p>
          <button className="btn-primary bg-white text-primary-800 hover:bg-gray-100">
            Book a Consultation
          </button>
        </div>
      </section>
    </>
  );
};

export default VisaPage;