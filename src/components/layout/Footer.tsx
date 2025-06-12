import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Language } from '../../types';
import { changeLanguage } from '../../i18n';
import workworkLogo from '../../assets/workwork.jpg';

const Footer = () => {
  const { t } = useTranslation();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const changeLanguageHandler = (lang: Language) => {
    changeLanguage(lang);
    setIsLanguageOpen(false);
  };

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
    { code: 'es', label: 'Español' },
  ];

  const footerLinks = [
    {
      title: t('nav.jobs'),
      links: [
        { label: t('jobs.categories.development'), path: '/jobs?category=development' },
        { label: t('jobs.categories.design'), path: '/jobs?category=design' },
        { label: t('jobs.categories.marketing'), path: '/jobs?category=marketing' },
        { label: t('jobs.categories.web3'), path: '/jobs?category=web3' },
      ],
    },
    {
      title: t('nav.services'),
      links: [
        { label: t('services.payment.title'), path: '/services#payment' },
        { label: t('services.dining.title'), path: '/services#dining' },
        { label: t('services.travel.title'), path: '/services#travel' },
        { label: t('services.accommodation.title'), path: '/services#accommodation' },
      ],
    },
    {
      title: t('nav.learn'),
      links: [
        { label: t('learn.courses.title'), path: '/learn/courses' },
        { label: t('learn.paths.title'), path: '/learn/paths' },
        { label: t('learn.groups.title'), path: '/learn/groups' },
        { label: t('nav.merchandise'), path: '/merchandise' },
      ],
    },
    {
      title: t('nav.about'),
      links: [
        { label: t('about.mission.title'), path: '/about#mission' },
        { label: t('about.contact.title'), path: '/about#contact' },
        { label: t('footer.links.terms'), path: '/terms' },
        { label: t('footer.links.privacy'), path: '/privacy' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src={workworkLogo} alt="WorkWork Logo" className="h-8 w-8 filter invert" />
              <span className="font-bold text-xl">
                Work<span className="text-secondary-400">Work</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a 
                href="https://t.me/workwork" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="mailto:hello@workwork.xyz" 
                className="hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="hover:text-white transition-colors flex items-center"
                >
                  <Globe size={20} />
                  <ChevronDown size={16} />
                </button>
                
                {isLanguageOpen && (
                  <div className="absolute bottom-full mb-2 left-0 bg-gray-800 rounded-md shadow-lg overflow-hidden z-10 w-32">
                    <div className="py-1">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => changeLanguageHandler(language.code as Language)}
                          className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          {language.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm">
              {t('footer.links.terms')}
            </Link>
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm">
              {t('footer.links.privacy')}
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-white text-sm">
              {t('footer.links.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;