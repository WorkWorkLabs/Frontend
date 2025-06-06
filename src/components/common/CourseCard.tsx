import { Clock, BarChart, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
  index: number;
}

const getLevelColor = (level: Course['level']) => {
  switch (level) {
    case 'Beginner':
      return 'bg-green-100 text-green-800';
    case 'Intermediate':
      return 'bg-blue-100 text-blue-800';
    case 'Advanced':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const CourseCard = ({ course, index }: CourseCardProps) => {
  const levelColor = getLevelColor(course.level);

  return (
    <motion.div
      className="card overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="h-40 overflow-hidden">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${levelColor}`}>
            {course.level}
          </span>
          <span className="text-sm text-gray-500 flex items-center">
            <Clock size={14} className="mr-1" />
            {course.duration}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-700 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{course.provider}</p>
        <p className="text-gray-700 mb-4 line-clamp-3">{course.description}</p>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500 flex items-center">
            <BarChart size={14} className="mr-1" />
            {course.category}
          </span>
          
          <button className="btn-primary py-1 px-3 text-sm flex items-center">
            <span>Enroll</span>
            <ExternalLink size={14} className="ml-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;