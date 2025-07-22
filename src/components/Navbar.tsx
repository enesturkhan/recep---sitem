'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'tr' as Language, name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
    { code: 'it' as Language, name: 'Italiano', flag: '🇮🇹' },
  ];

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('products'), href: '/products' },
    { name: t('contact'), href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 relative">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-700 hover:border-blue-500 transition-all duration-300">
                <img 
                  src="/images/qesmon.png" 
                  alt="Qesmon Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                QESMON
              </span>
              <span className="block text-[9px] sm:text-[11px] md:text-xs text-gray-400">
                İTHALAT İHRACAT LTD. ŞTİ
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'bg-blue-500/10 text-blue-400 shadow-sm'
                    : 'text-gray-400 hover:text-blue-400 hover:bg-blue-500/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className="flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
              >
                <Globe className="h-4 w-4" />
                <span>{languages.find(lang => lang.code === language)?.flag}</span>
              </button>
              
              {showLanguages && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLanguages(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 hover:bg-blue-500/10 transition-colors ${
                        language === lang.code ? 'bg-blue-500/10 text-blue-400' : 'text-gray-300 hover:text-blue-400'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobil menü düzenlemesi */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-4 md:hidden">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Language Selector */}
                <div className="pt-2 border-t border-gray-700">
                  <div className="px-3 py-2 text-sm font-medium text-gray-400">{t('language')}</div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-base font-medium flex items-center space-x-3 rounded-lg transition-all duration-300 ${
                        language === lang.code ? 'bg-gray-800 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;