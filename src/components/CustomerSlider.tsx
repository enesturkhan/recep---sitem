"use client"
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SliderProps {
  type: 'countries' | 'customers' | 'testimonials';
}

const CustomerSlider: React.FC<SliderProps> = ({ type }) => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const countriesData = [
    {
      name: 'Germany',
      flag: '🇩🇪',
      image: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg',
      exports: '$2.5M'
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
      exports: '$1.8M'
    },
    {
      name: 'France',
      flag: '🇫🇷',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
      exports: '$2.1M'
    },
    {
      name: 'Italy',
      flag: '🇮🇹',
      image: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg',
      exports: '$1.6M'
    },
    {
      name: 'Spain',
      flag: '🇪🇸',
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
      exports: '$1.4M'
    },
    {
      name: 'Netherlands',
      flag: '🇳🇱',
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
      exports: '$1.2M'
    }
  ];

  const customersData = [
    {
      name: 'Ahmed Hassan',
      company: 'Middle East Trading Co.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      product: 'Generator Systems',
      country: '🇦🇪 UAE'
    },
    {
      name: 'Maria Rodriguez',
      company: 'European Imports Ltd.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
      product: 'Textile Products',
      country: '🇪🇸 Spain'
    },
    {
      name: 'John Smith',
      company: 'Global Manufacturing Inc.',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      product: 'Machinery Equipment',
      country: '🇺🇸 USA'
    },
    {
      name: 'Chen Wei',
      company: 'Asia Pacific Trading',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
      product: 'Chemical Products',
      country: '🇨🇳 China'
    },
    {
      name: 'Giuseppe Rossi',
      company: 'Mediterranean Imports',
      image: 'https://images.pexels.com/photos/1043472/pexels-photo-1043472.jpeg',
      product: 'Food Products',
      country: '🇮🇹 Italy'
    }
  ];

  const testimonialsData = [
    {
      name: 'Sarah Johnson',
      company: 'Global Tech Solutions',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      rating: 5,
      text: 'Exceptional quality and reliable delivery. Qesmon has been our trusted partner for over 3 years.',
      country: '🇬🇧 UK'
    },
    {
      name: 'Mohammed Al-Rashid',
      company: 'Emirates Industrial Group',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      rating: 5,
      text: 'Outstanding service and premium quality products. Their generators have never failed us.',
      country: '🇦🇪 UAE'
    },
    {
      name: 'Elena Petrov',
      company: 'Eastern European Trading',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
      rating: 5,
      text: 'Professional team, competitive prices, and excellent after-sales support. Highly recommended!',
      country: '🇷🇺 Russia'
    },
    {
      name: 'Carlos Martinez',
      company: 'Latin America Imports',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      rating: 5,
      text: ' Qesmon understands our market needs perfectly. Their textile products are top quality.',
      country: '🇲🇽 Mexico'
    }
  ];

  const getData = () => {
    switch (type) {
      case 'countries': return countriesData;
      case 'customers': return customersData;
      case 'testimonials': return testimonialsData;
      default: return [];
    }
  };

  const data = getData();
  const itemsPerView = React.useCallback(() => {
    if (type === 'testimonials') return 1;
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  }, [type]);

  const [viewItems, setViewItems] = useState(itemsPerView());
  const maxIndex = Math.max(0, data.length - viewItems);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  useEffect(() => {
    const handleResize = () => {
      setViewItems(itemsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const getTitle = () => {
    switch (type) {
      case 'countries': return t('exportCountries');
      case 'customers': return t('happyCustomers');
      case 'testimonials': return t('customerTestimonials');
      default: return '';
    }
  };

  const getDescription = () => {
    switch (type) {
      case 'countries': return t('exportCountriesDesc');
      case 'customers': return t('happyCustomersDesc');
      case 'testimonials': return t('customerTestimonialsDesc');
      default: return '';
    }
  };

  interface CountryItem {
    name: string;
    flag: string;
    image: string;
    exports: string;
  }

  const renderCountryCard = (item: CountryItem, index: number) => (
    <motion.div
      key={index}
      className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4 text-3xl">{item.flag}</div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white">{item.name}</h3>
          <p className="text-green-400 font-semibold">{item.exports}</p>
        </div>
      </div>
    </motion.div>
  );

  interface CustomerItem {
    name: string;
    company: string;
    image: string;
    product: string;
    country: string;
  }

  const renderCustomerCard = (item: CustomerItem, index: number) => (
    <motion.div
      key={index}
      className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-600"
        />
        <div>
          <h3 className="text-lg font-bold text-white">{item.name}</h3>
          <p className="text-gray-400 text-sm">{item.company}</p>
          <p className="text-blue-400 text-sm">{item.country}</p>
        </div>
      </div>
      <div className="bg-gray-700 rounded-lg p-3">
        <p className="text-gray-300 text-sm">Product: {item.product}</p>
      </div>
    </motion.div>
  );

  interface TestimonialItem {
    name: string;
    company: string;
    image: string;
    rating: number;
    text: string;
    country: string;
  }

  const renderTestimonialCard = (item: TestimonialItem, index: number) => (
    <motion.div
      key={index}
      className="bg-gray-800 rounded-2xl p-8 shadow-xl max-w-4xl mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center mb-6">
        <Quote className="h-12 w-12 text-gray-600" />
      </div>
      <p className="text-xl text-gray-300 text-center mb-8 leading-relaxed italic">
        "{item.text}"
      </p>
      <div className="flex items-center justify-center space-x-1 mb-6">
        {[...Array(item.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <div className="flex items-center justify-center space-x-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-600"
        />
        <div className="text-center">
          <h3 className="text-lg font-bold text-white">{item.name}</h3>
          <p className="text-gray-400 text-sm">{item.company}</p>
          <p className="text-blue-400 text-sm">{item.country}</p>
        </div>
      </div>
    </motion.div>
  );

  const renderCard = (
    item: CountryItem | CustomerItem | TestimonialItem,
    index: number
  ) => {
    switch (type) {
      case 'countries': return renderCountryCard(item as CountryItem, index);
      case 'customers': return renderCustomerCard(item as CustomerItem, index);
      case 'testimonials': return renderTestimonialCard(item as TestimonialItem, index);
      default: return null;
    }
  };

  return (
    <section className="py-8 md:py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            {getTitle()}
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
            {getDescription()}
          </p>
        </motion.div>

        <div className="relative px-8 md:px-12">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700 text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700 text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          </button>

          {/* Slider Content */}
          <div className="overflow-hidden rounded-xl md:rounded-2xl">
            {type === 'testimonials' ? (
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  {renderCard(data[currentIndex], currentIndex)}
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="relative">
                <motion.div
                  className="flex"
                  animate={{
                    x: `-${currentIndex * (100 / viewItems)}%`,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  {data.map((item, index) => (
                    <motion.div
                      key={index}
                      className={`flex-shrink-0 px-2 md:px-4 ${
                        viewItems === 1 ? 'w-full' : viewItems === 2 ? 'w-1/2' : 'w-1/3'
                      }`}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {renderCard(item, index)}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSlider;