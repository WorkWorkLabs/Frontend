import { CalendarDays, MapPin, Building, ExternalLink } from 'lucide-react';
import { Job } from '../../types';
import { motion } from 'framer-motion';

interface JobCardProps {
  job: Job;
  index: number;
}

const JobCard = ({ job, index }: JobCardProps) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  return (
    <motion.div 
      className="card p-6 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="mr-4">
            {job.logoUrl ? (
              <img
                src={job.logoUrl}
                alt={`${job.company} logo`}
                className="w-12 h-12 rounded-md object-contain"
              />
            ) : (
              <div className="w-12 h-12 bg-primary-100 rounded-md flex items-center justify-center">
                <Building className="text-primary-600" size={24} />
              </div>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">{job.title}</h3>
            <p className="text-gray-600 text-sm">{job.company}</p>
          </div>
        </div>
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${job.isRemote ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
          {job.isRemote ? 'Remote' : 'On-site'}
        </span>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-700 line-clamp-2">{job.description}</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {job.requirements.slice(0, 3).map((req, idx) => (
          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
            {req}
          </span>
        ))}
        {job.requirements.length > 3 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
            +{job.requirements.length - 3} more
          </span>
        )}
      </div>
      
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <div className="flex space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <MapPin size={16} className="mr-1" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays size={16} className="mr-1" />
            <span>{formatDate(job.postedAt)}</span>
          </div>
        </div>
        
        <button className="btn-outline py-1 px-3 text-sm flex items-center">
          <span>View</span>
          <ExternalLink size={14} className="ml-1" />
        </button>
      </div>
    </motion.div>
  );
};

export default JobCard;