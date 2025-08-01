"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../../contexts/LanguageContext';
import { ArrowLeft, Package, Truck, Globe, Award, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface PageProps {
  params: Promise<{
    sector: string;
  }>;
}

const ProductDetail: React.FC<PageProps> = ({ params }) => {
  const { sector } = React.use(params);
  const { t } = useLanguage();

  const productData: Record<string, any> = {
    generator: {
      title: t('generator'),
      exportValue: '$2.0M',
      description: 'High-quality generators and energy solutions for industrial and commercial use worldwide.',
      detailedDescription: 'Our generator division specializes in manufacturing and exporting premium diesel, gas, and hybrid generators ranging from 10kVA to 3000kVA. We serve industries including construction, healthcare, telecommunications, and emergency services across 50+ countries.',
      images: [
        'https://images.pexels.com/photos/2539462/pexels-photo-2539462.jpeg',
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg'
      ],
      containerImages: [
        'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg',
        'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg'
      ],
      specifications: [
        'Power Range: 10kVA - 3000kVA',
        'Fuel Types: Diesel, Gas, Hybrid',
        'Certifications: CE, ISO 9001, EPA',
        'Warranty: 2-5 years international',
        'Service: 24/7 global support'
      ],
      features: [
        'Advanced control systems',
        'Low emission technology',
        'Remote monitoring capability',
        'Weatherproof enclosures',
        'Automatic transfer switches'
      ]
    },
    electrical: {
      title: t('electrical'),
      exportValue: '$1.0M',
      description: 'Complete range of electrical equipment and components for various industries.',
      detailedDescription: 'We export comprehensive electrical solutions including switchgear, transformers, cables, and control panels. Our products meet international standards and serve power distribution, industrial automation, and renewable energy sectors.',
      images: [
        'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg',
        'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg'
      ],
      containerImages: [
        'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
        'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg'
      ],
      specifications: [
        'Voltage Range: 220V - 35kV',
        'Standards: IEC, IEEE, ANSI',
        'Applications: Industrial, Commercial',
        'Certifications: CE, UL, CSA',
        'Custom Solutions Available'
      ],
      features: [
        'Smart grid compatibility',
        'Energy efficient designs',
        'Modular construction',
        'Digital monitoring',
        'Maintenance-free operation'
      ]
    },
    construction: {
      title: t('construction'),
      exportValue: '$1.5M',
      description: 'Premium construction materials and building solutions for global projects.',
      detailedDescription: 'Our construction materials division exports high-quality cement, steel, insulation materials, and prefabricated building components. We support major infrastructure projects, residential developments, and commercial constructions worldwide.',
      images: [
        'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
        'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg'
      ],
      containerImages: [
        'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
        'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg'
      ],
      specifications: [
        'Materials: Steel, Cement, Insulation',
        'Standards: ASTM, EN, JIS',
        'Applications: Infrastructure, Residential',
        'Packaging: Bulk, Containerized',
        'Delivery: Global logistics network'
      ],
      features: [
        'Sustainable materials',
        'Fire resistant properties',
        'Thermal insulation',
        'Seismic resistance',
        'Long-term durability'
      ]
    },
    textile: {
      title: t('textile'),
      exportValue: '$3.0M',
      description: 'Fashion-forward textiles and high-quality apparel for international markets.',
      detailedDescription: 'Leading textile exporter specializing in cotton fabrics, denim, knitwear, and ready-to-wear garments. We serve fashion brands, retailers, and wholesalers across Europe, America, and Asia with sustainable and innovative textile solutions.',
      images: [
        'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg',
        'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg'
      ],
      containerImages: [
        'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
        'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg'
      ],
      specifications: [
        'Materials: Cotton, Polyester, Blends',
        'Products: Fabrics, Garments, Home Textiles',
        'Certifications: OEKO-TEX, GOTS',
        'MOQ: Flexible quantities',
        'Lead Time: 30-60 days'
      ],
      features: [
        'Sustainable production',
        'Custom designs available',
        'Quality control systems',
        'Fast fashion capability',
        'Private label services'
      ]
    },
    food: {
      title: t('food'),
      exportValue: '$2.5M',
      description: 'Premium food products and beverages meeting international quality standards.',
      detailedDescription: 'We export premium Turkish food products including dried fruits, nuts, spices, olive oil, and traditional delicacies. Our products are certified organic and halal, serving gourmet markets, restaurants, and retail chains globally.',
      images: [
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg'
      ],
      containerImages: [
        'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
        'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg'
      ],
      specifications: [
        'Products: Dried Fruits, Nuts, Spices',
        'Certifications: Organic, Halal, FDA',
        'Packaging: Retail, Bulk, Private Label',
        'Shelf Life: 12-24 months',
        'Storage: Ambient, Refrigerated'
      ],
      features: [
        'Premium quality sourcing',
        'Traditional processing methods',
        'Sustainable farming practices',
        'Traceability systems',
        'Custom packaging options'
      ]
    },
    automotive: {
      title: t('automotive'),
      exportValue: '$1.8M',
      description: 'Reliable automotive parts and components for major vehicle manufacturers.',
      detailedDescription: 'Specialized in manufacturing and exporting automotive components including brake systems, engine parts, electrical components, and aftermarket accessories. We supply OEM manufacturers and aftermarket distributors worldwide.',
      images: [
        'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
        'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg'
      ],
      containerImages: [
        'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
        'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg'
      ],
      specifications: [
        'Parts: Brake, Engine, Electrical',
        'Standards: ISO/TS 16949, QS-9000',
        'Applications: Passenger, Commercial',
        'Materials: Steel, Aluminum, Composite',
        'Testing: Rigorous quality control'
      ],
      features: [
        'OEM quality standards',
        'Advanced manufacturing',
        'Just-in-time delivery',
        'Technical support',
        'Competitive pricing'
      ]
    },
    machinery: {
      title: t('machinery'),
      exportValue: '$2.2M',
      description: 'Advanced machinery and equipment for manufacturing and industrial applications.',
      detailedDescription: 'We export industrial machinery including CNC machines, textile equipment, food processing machinery, and packaging systems. Our products serve manufacturing industries across automotive, textile, food, and packaging sectors.',
      images: [
        'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg'
      ],
      containerImages: [
        'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
        'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg'
      ],
      specifications: [
        'Types: CNC, Textile, Food Processing',
        'Automation: Fully automated systems',
        'Capacity: Small to large scale',
        'Installation: Global service network',
        'Training: Operator training included'
      ],
      features: [
        'Industry 4.0 ready',
        'Energy efficient operation',
        'Modular design',
        'Remote diagnostics',
        'Comprehensive warranty'
      ]
    },
    chemical: {
      title: t('chemical'),
      exportValue: '$1.3M',
      description: 'Specialized chemical products and solutions for various industrial sectors.',
      detailedDescription: 'Our chemical division exports industrial chemicals, specialty chemicals, and chemical intermediates. We serve pharmaceutical, cosmetic, textile, and manufacturing industries with high-purity chemicals and custom formulations.',
      images: [
        'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
        'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg'
      ],
      containerImages: [
        'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
        'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg'
      ],
      specifications: [
        'Types: Industrial, Specialty, Intermediates',
        'Purity: 95-99.9%',
        'Packaging: Drums, IBCs, Bulk',
        'Certifications: ISO, REACH, GMP',
        'Applications: Multi-industry'
      ],
      features: [
        'High purity standards',
        'Custom formulations',
        'Technical documentation',
        'Safe handling protocols',
        'Regulatory compliance'
      ]
    },
    plastic: {
      title: t('plastic'),
      exportValue: '$900K',
      description: 'Innovative plastic products and sustainable packaging solutions.',
      detailedDescription: 'We manufacture and export plastic products including packaging materials, industrial components, and consumer goods. Our focus on sustainable materials and recycling makes us a preferred partner for environmentally conscious businesses.',
      images: [
        'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg',
        'https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg'
      ],
      containerImages: [
        'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
        'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg'
      ],
      specifications: [
        'Materials: PE, PP, PET, Biodegradable',
        'Products: Packaging, Components',
        'Applications: Food, Industrial, Consumer',
        'Customization: Colors, Sizes, Shapes',
        'Sustainability: Recycled content available'
      ],
      features: [
        'Eco-friendly options',
        'Food grade materials',
        'Custom molding services',
        'Barrier properties',
        'Cost-effective solutions'
      ]
    },
    metal: {
      title: t('metal'),
      exportValue: '$1.6M',
      description: 'Precision metal processing and fabrication services for global clients.',
      detailedDescription: 'Our metal processing division offers precision machining, fabrication, and finishing services. We work with steel, aluminum, and specialty alloys to produce components for aerospace, automotive, and industrial applications.',
      images: [
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
        'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg'
      ],
      containerImages: [
        'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
        'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg'
      ],
      specifications: [
        'Materials: Steel, Aluminum, Alloys',
        'Processes: Machining, Welding, Forming',
        'Tolerance: ±0.01mm precision',
        'Finishing: Coating, Plating, Anodizing',
        'Quality: ISO 9001 certified'
      ],
      features: [
        'Precision manufacturing',
        'Advanced CNC equipment',
        'Quality assurance',
        'Fast turnaround',
        'Competitive pricing'
      ]
    }
  };

  const product = productData[sector || ''];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
          <Link href="/products" className="text-blue-400 hover:text-blue-300">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>{t('backToProducts')}</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h1
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {product.title}
                </motion.h1>
                
                <motion.div
                  className="flex items-center space-x-4 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 rounded-lg">
                    <span className="text-white font-bold text-lg">{product.exportValue}</span>
                  </div>
                  <div className="text-gray-400">{t('annualExport')}</div>
                </motion.div>

                <motion.p
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {product.detailedDescription}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
                    <Globe className="h-5 w-5 text-blue-400" />
                    <span className="text-white">{t('globalExport')}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span className="text-white">{t('isoCertified')}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
                    <Star className="h-5 w-5 text-green-400" />
                    <span className="text-white">{t('premiumQuality')}</span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Images Gallery */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('productGallery')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {product.images.map((image: string, index: number) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold">{t('productView')} {index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.h3
            className="text-2xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('containerLoading')}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.containerImages.map((image: string, index: number) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={image}
                  alt={`Container loading ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-2">
                    <Truck className="h-5 w-5 text-white" />
                    <span className="text-white font-semibold">
                      {index === 0 ? t('containerLoadingText') : t('readyForExport')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications & Features */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Package className="h-6 w-6 mr-3 text-blue-400" />
                {t('technicalSpecs')}
              </h3>
              <div className="space-y-4">
                {product.specifications.map((spec: string, index: number) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gray-800 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{spec}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Star className="h-6 w-6 mr-3 text-yellow-400" />
                {t('keyFeatures')}
              </h3>
              <div className="space-y-4">
                {product.features.map((feature: string, index: number) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gray-800 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('interestedIn')} {product.title}?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us for detailed quotations, technical specifications, and export arrangements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                {t('requestQuote')}
              </Link>
              <button className="px-8 py-4 bg-gray-600 text-white font-bold rounded-xl hover:bg-gray-500 transition-all duration-300">
                {t('downloadCatalog')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;