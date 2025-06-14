import React from 'react';
import { Row, Col, Input, Select } from 'antd';
import DestinationCard from './DestinationCard';
import { destinations } from '../../data/destinations';

const { Search } = Input;

const DestinationList: React.FC = () => {
  const [searchText, setSearchText] = React.useState('');
  const [selectedCity, setSelectedCity] = React.useState<string | null>(null);
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null);

  const cities = Array.from(new Set(destinations.map(d => d.city)));
  const tags = Array.from(new Set(destinations.flatMap(d => d.tags)));

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchText.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchText.toLowerCase());
    const matchesCity = !selectedCity || destination.city === selectedCity;
    const matchesTag = !selectedTag || destination.tags.includes(selectedTag);
    
    return matchesSearch && matchesCity && matchesTag;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">数字游民目的地</h2>
        <p className="text-gray-600 mb-8">
          探索适合数字游民工作和生活的目的地，找到属于你的理想空间。
        </p>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <Search
            placeholder="搜索目的地"
            allowClear
            onChange={e => setSearchText(e.target.value)}
            className="w-full md:w-64"
          />
          <Select
            placeholder="选择城市"
            allowClear
            onChange={value => setSelectedCity(value)}
            className="w-full md:w-48"
          >
            {cities.map(city => (
              <Select.Option key={city} value={city}>{city}</Select.Option>
            ))}
          </Select>
          <Select
            placeholder="选择标签"
            allowClear
            onChange={value => setSelectedTag(value)}
            className="w-full md:w-48"
          >
            {tags.map(tag => (
              <Select.Option key={tag} value={tag}>{tag}</Select.Option>
            ))}
          </Select>
        </div>
      </div>

      <Row gutter={[24, 24]}>
        {filteredDestinations.map((destination, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <DestinationCard {...destination} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DestinationList; 