import React from 'react';
import { Card, Tag, Typography } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

interface DestinationCardProps {
  name: string;
  city: string;
  tags: string[];
  description: string;
  location: string;
  link?: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  name,
  city,
  tags,
  description,
  location,
  link
}) => {
  return (
    <Card 
      className="h-full hover:shadow-lg transition-shadow duration-300"
      bordered={false}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <Title level={4} className="mb-2">{name}</Title>
          <div className="flex items-center text-gray-500 mb-2">
            <EnvironmentOutlined className="mr-1" />
            <span>{city}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <Tag key={index} color="blue">{tag}</Tag>
            ))}
          </div>
        </div>
        
        <Paragraph className="flex-grow text-gray-600 mb-4">
          {description}
        </Paragraph>
        
        <div className="mt-auto">
          <Paragraph className="text-gray-500 text-sm mb-2">
            <EnvironmentOutlined className="mr-1" />
            {location}
          </Paragraph>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              了解更多
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default DestinationCard; 