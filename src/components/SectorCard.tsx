import React from 'react';
import Link from 'next/link';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface SectorCardProps {
  icon: LucideIcon;
  title: string;
  sector: string;
  exportValue: string;
  description: string;
  gradient: string;
  image: string;
}

const SectorCard: React.FC<SectorCardProps> = ({ icon: Icon, title, sector, exportValue, description, gradient, image }) => {
  const { t } = useLanguage();
  
  return (
    <Link href={`/products/${sector}`} className="block group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-gray-300">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Icon and Export Value Overlay */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${gradient} shadow-lg`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="text-right bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2">
            <div className="text-xl font-bold text-white">{exportValue}</div>
            <div className="text-xs text-gray-200">{t('annualExport')}</div>
          </div>
        </div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gray-200 transition-colors">
            {title}
          </h3>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 bg-gray-900">
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        <div className="pt-4 border-t border-gray-700">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">{t('growthRate')}</span>
            <div className="flex items-center space-x-2">
              <div className="w-16 bg-gray-700 rounded-full h-2">
                <div className={`h-2 rounded-full bg-gradient-to-r ${gradient} transform transition-all duration-700 group-hover:w-full`} style={{width: '75%'}} />
              </div>
              <span className="text-xs font-medium text-green-400">+15%</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SectorCard;