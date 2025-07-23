'use client';

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SectorCard from '../../components/SectorCard';
import { Zap, Lightbulb, Building, Shirt, Coffee, Car, Settings, FlaskRound as Flask, Package, Wrench } from 'lucide-react';

const Products: React.FC = () => {
  const { t } = useLanguage();

  const sectors = [
    {
      icon: Zap,
      sector: 'generator',
      title: t('generator'),
      exportValue: '$2.0M',
      description: 'High-quality generators and energy solutions for industrial and commercial use.',
      gradient: 'from-yellow-400 to-orange-500',
      image: 'https://images.pexels.com/photos/2539462/pexels-photo-2539462.jpeg'
    },
    {
      icon: Lightbulb,
      sector: 'electrical',
      title: t('electrical'),
      exportValue: '$1.0M',
      description: 'Complete range of electrical equipment and components for various industries.',
      gradient: 'from-blue-400 to-blue-600',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg'
    },
    {
      icon: Building,
      sector: 'construction',
      title: t('construction'),
      exportValue: '$1.5M',
      description: 'Premium construction materials and building solutions for global projects.',
      gradient: 'from-gray-400 to-gray-600',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg'
    },
    {
      icon: Shirt,
      sector: 'textile',
      title: t('textile'),
      exportValue: '$3.0M',
      description: 'Fashion-forward textiles and high-quality apparel for international markets.',
      gradient: 'from-purple-400 to-pink-500',
      image: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg'
    },
    {
      icon: Coffee,
      sector: 'food',
      title: t('food'),
      exportValue: '$2.5M',
      description: 'Premium food products and beverages meeting international quality standards.',
      gradient: 'from-green-400 to-emerald-500',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
    },
    {
      icon: Car,
      sector: 'automotive',
      title: t('automotive'),
      exportValue: '$1.8M',
      description: 'Reliable automotive parts and components for major vehicle manufacturers.',
      gradient: 'from-red-400 to-red-600',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg'
    },
    {
      icon: Settings,
      sector: 'machinery',
      title: t('machinery'),
      exportValue: '$2.2M',
      description: 'Advanced machinery and equipment for manufacturing and industrial applications.',
      gradient: 'from-indigo-400 to-purple-500',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg'
    },
    {
      icon: Flask,
      sector: 'chemical',
      title: t('chemical'),
      exportValue: '$1.3M',
      description: 'Specialized chemical products and solutions for various industrial sectors.',
      gradient: 'from-teal-400 to-cyan-500',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg'
    },
    {
      icon: Package,
      sector: 'plastic',
      title: t('plastic'),
      exportValue: '$900K',
      description: 'Innovative plastic products and sustainable packaging solutions.',
      gradient: 'from-lime-400 to-green-500',
      image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg'
    },
    {
      icon: Wrench,
      sector: 'metal',
      title: t('metal'),
      exportValue: '$1.6M',
      description: 'Precision metal processing and fabrication services for global clients.',
      gradient: 'from-slate-400 to-zinc-500',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('products')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('sectorsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <SectorCard {...sector} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;