'use client';
import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    reset();
    setIsSubmitting(false);
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('contactTitle')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('contactDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">{t('getInTouch')}</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We're here to help you expand your business globally. Contact us for export opportunities and partnerships.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{t('address')}</h3>
                    <p className="text-gray-300">Levent Business Center<br />Istanbul, Turkey 34330</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{t('phone')}</h3>
                    <p className="text-gray-300">+90 212 XXX XX XX<br />+90 532 XXX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-300">info@qesmon.com<br />export@qesmon.com</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-4">{t('officeHours')}</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>{t('monday')} - {t('friday')}</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('saturday')}</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('sunday')}</span>
                    <span>Closed</span>
                    <span>{t('closed')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">{t('sendMessage')}</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('message')} *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors resize-none"
                    placeholder="Tell us about your export needs..."
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                  <span>{isSubmitting ? 'Sending...' : t('sendMessage')}</span>
                 <span>{isSubmitting ? t('sendingMessage') : t('sendMessage')}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;