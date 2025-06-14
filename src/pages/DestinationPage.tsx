import React from 'react';
import { useTranslation } from 'react-i18next';
import DestinationList from '../components/destinations/DestinationList';

const DestinationPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('destinations.title', '数字游民目的地')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {t('destinations.description', '探索适合数字游民工作和生活的目的地，找到属于你的理想空间。我们收集了全国各地的数字游民友好空间，包括联合办公、社区空间、文化场所等。')}
          </p>
        </div>
      </div>

      <DestinationList />
    </div>
  );
};

export default DestinationPage; 