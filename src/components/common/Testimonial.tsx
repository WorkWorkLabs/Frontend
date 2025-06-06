import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  imageUrl: string;
  delay?: number;
}

const Testimonial = ({ quote, author, role, imageUrl, delay = 0 }: TestimonialProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-4">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 11L8 17H5L7 11V7H10V11ZM18 11L16 17H13L15 11V7H18V11Z" fill="#0D9488" opacity="0.5"/>
          <path d="M3 7H10V11L8 17H5L7 11V7H3ZM11 7H18V11L16 17H13L15 11V7H11Z" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <p className="text-gray-700 flex-grow mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <img 
          src={imageUrl} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-secondary-300"
        />
        <div>
          <h4 className="font-bold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;