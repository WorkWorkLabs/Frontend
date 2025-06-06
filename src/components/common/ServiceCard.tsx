import { DivideIcon as LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  index?: number;
}

const ServiceCard = ({ icon: Icon, title, description, link, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
      className="card group"
    >
      <Link to={link} className="block p-6">
        <div className="p-3 mb-4 bg-primary-100 rounded-lg inline-flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
          <Icon className="text-primary-600" size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;