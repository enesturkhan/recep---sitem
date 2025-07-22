'use client';
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Award, Globe, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Operating in over 50 countries worldwide with established distribution networks.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'ISO certified processes ensuring the highest quality standards in all our exports.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with deep knowledge of international trade regulations.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focus',
      description: 'Continuous expansion and innovation to meet evolving market demands.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('aboutTitle')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('aboutDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-gradient-to-r from-gray-600 to-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('ourJourney')}
            </h2>
            <p className="text-xl text-gray-300">
              {t('keyMilestones')}
            </p>
          </div>

          <div className="space-y-8">
            {[
              { year: '1998', title: t('companyFounded'), description: 'Started operations with focus on Turkish product exports' },
              { year: '2005', title: t('europeanExpansion'), description: 'Expanded operations to European markets' },
              { year: '2012', title: t('middleEastMarkets'), description: 'Established strong presence in Middle Eastern countries' },
              { year: '2018', title: t('americasEntry'), description: 'Entered North and South American markets' },
              { year: '2024', title: t('globalLeader'), description: 'Recognized as leading Turkish export company' }
            ].map((milestone, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="w-24 text-right">
                  <span className="text-2xl font-bold text-gray-400">{milestone.year}</span>
                </div>
                <div className="w-4 h-4 bg-gray-500 rounded-full" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;