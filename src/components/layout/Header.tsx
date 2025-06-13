import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Language } from '../../types';
import { changeLanguage } from '../../i18n';
import workworkLogo from '../../assets/workwork.jpg';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const changeLanguageHandler = (lang: Language) => {
    changeLanguage(lang);
    setIsLanguageOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/jobs', label: t('nav.jobs') },
    { path: '/destinations', label: t('nav.destinations') },
    { path: '/services', label: t('nav.services') },
    { path: '/visa', label: t('nav.visa') },
    { path: '/learn', label: t('nav.learn') },
    { path: '/resources', label: t('nav.resources') },
    { path: '/merchandise', label: t('nav.merchandise') },
    { path: '/about', label: t('nav.about') },
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
    { code: 'es', label: 'Español' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={workworkLogo} alt="WorkWork Logo" className="h-8 w-8" />
          <span className="font-bold text-xl text-primary-800">
            Work<span className="text-secondary-600">Work</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${
                isActive(link.path) ? 'nav-link-active' : 'nav-link'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <Globe size={18} />
              <ChevronDown size={16} />
            </button>

            {isLanguageOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden z-10"
              >
                <div className="py-1">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguageHandler(language.code as Language)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      {language.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <button className="btn-primary">{t('cta.getStarted')}</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container-custom py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    isActive(link.path) ? 'nav-link-active' : 'nav-link'
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="space-y-4 pt-4 border-t border-gray-100">
              {/* Language Options */}
              <div className="flex flex-col space-y-2">
                <p className="text-sm font-medium text-gray-500">Language</p>
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => changeLanguageHandler(language.code as Language)}
                    className="text-left text-gray-700 hover:text-primary-600"
                  >
                    {language.label}
                  </button>
                ))}
              </div>

              <button className="btn-primary w-full">{t('cta.getStarted')}</button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;