import { Calendar, User, Tag } from 'lucide-react';
import { Resource } from '../../types';
import { motion } from 'framer-motion';

interface ResourceCardProps {
  resource: Resource;
  index: number;
}

const getTypeColor = (type: Resource['type']) => {
  switch (type) {
    case 'Guide':
      return 'bg-blue-100 text-blue-800';
    case 'Article':
      return 'bg-green-100 text-green-800';
    case 'Video':
      return 'bg-red-100 text-red-800';
    case 'Tool':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  }).format(date);
};

const ResourceCard = ({ resource, index }: ResourceCardProps) => {
  const typeColor = getTypeColor(resource.type);

  return (
    <motion.div 
      className="card p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-700 transition-colors">
          <a href={resource.link} target="_blank" rel="noopener noreferrer">
            {resource.title}
          </a>
        </h3>
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${typeColor}`}>
          {resource.type}
        </span>
      </div>
      
      <p className="text-gray-700 mb-4">{resource.description}</p>
      
      <div className="flex flex-wrap justify-between text-sm text-gray-500">
        <div className="flex items-center mb-2">
          <User size={16} className="mr-1" />
          <span>{resource.author}</span>
        </div>
        <div className="flex items-center mb-2">
          <Calendar size={16} className="mr-1" />
          <span>{formatDate(resource.createdAt)}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ResourceCard;