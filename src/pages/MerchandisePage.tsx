import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Truck, Shield, Heart } from 'lucide-react';
import HeroSection from '../components/common/HeroSection';
import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'WorkWork Digital Nomad Backpack',
    price: 129,
    originalPrice: 159,
    rating: 4.8,
    reviews: 234,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Bags',
    description: 'Premium travel backpack designed specifically for digital nomads with laptop compartment and organization pockets.',
    features: ['Laptop compartment up to 17"', 'USB charging port', 'Water-resistant', 'TSA-friendly design'],
    inStock: true,
    isBestseller: true
  },
  {
    id: '2',
    name: 'WorkWork Logo T-Shirt',
    price: 29,
    rating: 4.6,
    reviews: 156,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Apparel',
    description: 'Comfortable cotton t-shirt with the WorkWork logo. Perfect for representing the digital nomad community.',
    features: ['100% organic cotton', 'Unisex design', 'Multiple colors available', 'Eco-friendly printing'],
    inStock: true,
    isNew: true
  },
  {
    id: '3',
    name: 'Portable Laptop Stand',
    price: 45,
    rating: 4.7,
    reviews: 89,
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Tech',
    description: 'Lightweight and adjustable laptop stand for better ergonomics while working remotely.',
    features: ['Adjustable height', 'Foldable design', 'Heat dissipation', 'Compatible with all laptops'],
    inStock: true
  },
  {
    id: '4',
    name: 'Digital Nomad Notebook',
    price: 19,
    rating: 4.5,
    reviews: 67,
    image: 'https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Stationery',
    description: 'Premium notebook with travel planning templates and productivity layouts for digital nomads.',
    features: ['180 pages', 'Travel planning sections', 'Goal tracking pages', 'Durable cover'],
    inStock: true
  },
  {
    id: '5',
    name: 'WorkWork Hoodie',
    price: 59,
    originalPrice: 79,
    rating: 4.9,
    reviews: 198,
    image: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Apparel',
    description: 'Cozy hoodie perfect for those chilly co-working spaces and late-night coding sessions.',
    features: ['Premium fleece lining', 'Kangaroo pocket', 'Adjustable hood', 'Machine washable'],
    inStock: true,
    isBestseller: true
  },
  {
    id: '6',
    name: 'Travel Cable Organizer',
    price: 25,
    rating: 4.4,
    reviews: 112,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Tech',
    description: 'Keep your cables organized and tangle-free with this compact travel organizer.',
    features: ['Multiple compartments', 'Elastic straps', 'Compact design', 'Durable material'],
    inStock: false
  }
];

const MerchandisePage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { value: '', label: 'All Products' },
    { value: 'Bags', label: 'Bags & Backpacks' },
    { value: 'Apparel', label: 'Apparel' },
    { value: 'Tech', label: 'Tech Accessories' },
    { value: 'Stationery', label: 'Stationery' }
  ];

  const filteredProducts = SAMPLE_PRODUCTS.filter(product => {
    return selectedCategory === '' || product.category === selectedCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default:
        return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
    }
  });

  const ProductCard = ({ product, index }: { product: Product; index: number }) => (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">
            New
          </span>
        )}
        {product.isBestseller && (
          <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-xs font-medium rounded">
            Bestseller
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart size={16} className="text-gray-600 hover:text-red-500" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">{product.category}</span>
          <div className="flex items-center">
            <Star size={14} className="text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
            <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary-700 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
            )}
          </div>
          
          <button 
            className={`btn-primary py-2 px-4 text-sm flex items-center ${
              !product.inStock ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!product.inStock}
          >
            <ShoppingCart size={16} className="mr-1" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <HeroSection
        title="WorkWork Store"
        subtitle="Premium gear and merchandise for digital nomads and Web3 professionals"
      />

      {/* Featured Products Banner */}
      <section className="py-12 bg-primary-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">New Collection</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Discover our latest products designed specifically for the digital nomad lifestyle.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <Truck className="text-primary-600 mr-3" size={20} />
                    Free worldwide shipping on orders over $100
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Shield className="text-primary-600 mr-3" size={20} />
                    30-day money-back guarantee
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Star className="text-primary-600 mr-3" size={20} />
                    Rated 4.8/5 by our community
                  </li>
                </ul>
                <button className="btn-primary">Shop New Arrivals</button>
              </div>
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-8 lg:p-0 flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Featured product" 
                  className="w-full h-full object-cover lg:object-contain max-w-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow p-6 sticky top-20">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Categories</h3>
                <div className="space-y-2 mb-8">
                  {categories.map((category) => (
                    <label key={category.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category.value}
                        checked={selectedCategory === category.value}
                        onChange={() => setSelectedCategory(category.value)}
                        className="text-primary-600 focus:ring-primary-500 h-4 w-4"
                      />
                      <span className="ml-2 text-gray-700">{category.label}</span>
                    </label>
                  ))}
                </div>
                
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded" />
                    <span className="ml-2 text-gray-700">Under $25</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded" />
                    <span className="ml-2 text-gray-700">$25 - $50</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded" />
                    <span className="ml-2 text-gray-700">$50 - $100</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded" />
                    <span className="ml-2 text-gray-700">Over $100</span>
                  </label>
                </div>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {sortedProducts.length} Products
                </h2>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Sort by: </span>
                  <select 
                    className="ml-2 bg-white border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose WorkWork Products?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every product is carefully selected and designed with the digital nomad lifestyle in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Quality Guaranteed',
                description: 'All products are tested by our community of digital nomads for durability and functionality.'
              },
              {
                icon: Truck,
                title: 'Global Shipping',
                description: 'We ship worldwide with tracking and insurance. Free shipping on orders over $100.'
              },
              {
                icon: Heart,
                title: 'Community Approved',
                description: 'Products recommended and reviewed by thousands of digital nomads in our community.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <feature.icon className="text-primary-600" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on New Products</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Be the first to know about new product launches, exclusive discounts, and special offers for our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md text-gray-900 flex-grow focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="btn-primary bg-white text-primary-800 hover:bg-gray-100 px-6">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MerchandisePage;