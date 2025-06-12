import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle?: string | ReactNode;
  children?: ReactNode;
  backgroundImage?: string;
  gradient?: boolean;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  children,
  backgroundImage,
  gradient = true
}: HeroSectionProps) => {
  return (
    <section 
      className={`py-20 md:py-24 relative overflow-hidden ${gradient ? 'bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white' : ''}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      {/* Overlay for background images */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black opacity-60"></div>
      )}

      {/* Abstract decoration */}
      {gradient && (
        <>
          <div className="absolute top-20 right-10 w-60 h-60 rounded-full bg-secondary-500 opacity-10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-primary-300 opacity-10 blur-3xl animate-pulse-slow"></div>
        </>
      )}

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="mb-4 font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.div 
              className="text-lg md:text-xl opacity-90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subtitle}
            </motion.div>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;