import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import HeroSection from '../components/common/HeroSection';
import { CreditCard, UtensilsCrossed, Plane, Building, ShoppingBag, ArrowUpRight } from 'lucide-react';

const ServicesPage = () => {
  const { t } = useTranslation();

  const serviceCategories = [
    {
      id: 'payment',
      icon: CreditCard,
      title: t('services.payment.title'),
      description: t('services.payment.description'),
      features: [
        'Multiple payment providers integrated',
        'Crypto payment options',
        'U-Card for digital nomads',
        'Secure international transfers'
      ],
      image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'dining',
      icon: UtensilsCrossed,
      title: t('services.dining.title'),
      description: t('services.dining.description'),
      features: [
        'Partner restaurants worldwide',
        'Exclusive nomad discounts',
        'Coworking café directory',
        'Community dinner events'
      ],
      image: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'travel',
      icon: Plane,
      title: t('services.travel.title'),
      description: t('services.travel.description'),
      features: [
        'Transport deals and discounts',
        'City-specific travel guides',
        'Community travel tips',
        'Group travel opportunities'
      ],
      image: 'https://images.pexels.com/photos/2607862/pexels-photo-2607862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'accommodation',
      icon: Building,
      title: t('services.accommodation.title'),
      description: t('services.accommodation.description'),
      features: [
        'Digital nomad housing network',
        'Verified co-living spaces',
        'Short and long-term options',
        'Community housing reviews'
      ],
      image: 'https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'merchandise',
      icon: ShoppingBag,
      title: t('services.merchandise.title'),
      description: t('services.merchandise.description'),
      features: [
        'Digital nomad gear',
        'WorkWork branded products',
        'Tech essentials for nomads',
        'Sustainable travel items'
      ],
      image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <>
      <HeroSection
        title={t('services.title')}
        subtitle="Everything you need for your digital nomad lifestyle"
      />

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="space-y-20">
            {serviceCategories.map((category, index) => (
              <div 
                key={category.id}
                id={category.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 mr-3 bg-primary-100 rounded-lg">
                      <category.icon className="text-primary-600" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-5 h-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="btn-primary inline-flex items-center">
                    <span>Learn More</span>
                    <ArrowUpRight size={16} className="ml-2" />
                  </button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`order-first ${index % 2 !== 0 ? 'lg:order-first' : 'lg:order-last'}`}
                >
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Global Partners</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with businesses worldwide to provide the best services for digital nomads.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex justify-center"
              >
                <div className="h-16 w-40 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400 font-semibold">Partner {index + 1}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Become a Service Partner</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Join our network of service providers and reach thousands of digital nomads around the world.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    Reach an international audience
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    Tailored exposure to digital nomads
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    Flexible partnership models
                  </li>
                </ul>
                <button className="btn-primary">Become a Partner</button>
              </div>
              <div className="lg:col-span-2 bg-primary-600 p-8 lg:p-0 flex items-center justify-center">
                <div className="hidden lg:block w-full h-full">
                  <img 
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Business partners" 
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

export default ServicesPage;