import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import ServicesPage from './pages/ServicesPage';
import VisaPage from './pages/VisaPage';
import LearnPage from './pages/LearnPage';
import ResourcesPage from './pages/ResourcesPage';
import MerchandisePage from './pages/MerchandisePage';
import AboutPage from './pages/AboutPage';
import DestinationPage from './pages/DestinationPage';
import './i18n';

function App() {
  const location = useLocation();

  // Update title based on current route
  useEffect(() => {
    const pageTitles: Record<string, string> = {
      '/': 'WorkWork | Digital Nomad & Web3 Professional Hub',
      '/jobs': 'Jobs | WorkWork',
      '/services': 'Life Services | WorkWork',
      '/visa': 'Visa Services | WorkWork',
      '/learn': 'Learning Center | WorkWork',
      '/resources': 'Resources | WorkWork',
      '/merchandise': 'Store | WorkWork',
      '/about': 'About Us | WorkWork',
      '/destinations': 'Destinations | WorkWork',
    };
    
    document.title = pageTitles[location.pathname] || pageTitles['/'];
  }, [location.pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/visa" element={<VisaPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/merchandise" element={<MerchandisePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/destinations" element={<DestinationPage />} />
      </Routes>
    </Layout>
  );
}

export default App;