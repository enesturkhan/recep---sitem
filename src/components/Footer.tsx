'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Ana grid yapısını düzelt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <img 
                    src="/images/qesmon.png" 
                    alt="Qesmon Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  QESMON
                </span>
                <span className="block text-[10px] sm:text-xs text-gray-400">
                  İTHALAT İHRACAT LTD. ŞTİ
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              {t('aboutDescription')}
            </p>
          </div>

          {/* Diğer kolonları düzenle */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-semibold">{t('quickLinks')}</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">{t('home')}</Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">{t('about')}</Link>
              <Link href="/products" className="block text-gray-400 hover:text-white transition-colors">{t('products')}</Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">{t('contact')}</Link>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-semibold">{t('contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400 text-sm">Istanbul, Turkey</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400 text-sm">+90 212 XXX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400 text-sm">info@qesmon.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-semibold">{t('exportStats')}</h3>
            <div className="space-y-3">
              <div>
                <span className="text-2xl font-bold text-blue-400">50+</span>
                <span className="block text-gray-400 text-sm">{t('countriesServed')}</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-green-400">25+</span>
                <span className="block text-gray-400 text-sm">{t('yearsExperience')}</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-yellow-400">$18M+</span>
                <span className="block text-gray-400 text-sm">{t('totalExport')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Qesmon Export Company. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;