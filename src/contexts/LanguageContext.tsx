"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'tr' | 'en' | 'es' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    // Navigation
    home: 'Ana Sayfa',
    about: 'Hakkımızda',
    products: 'Ürünler',
    contact: 'İletişim',
    
    // Hero Section
    heroTitle: 'Dünya Pazarlarında Güvenilir İhracat Ortağınız',
    heroSubtitle: '25 yılı aşkın deneyimimizle, kaliteli Türk ürünlerini dünya pazarlarına ulaştırıyoruz.',
    getStarted: 'Başlayın',
    learnMore: 'Daha Fazla Bilgi',
    
    // Stats
    countriesServed: 'Ülke',
    yearsExperience: 'Yıl Deneyim',
    totalExport: 'Toplam İhracat',
    
    // Sectors
    sectors: 'İhracat Sektörlerimiz',
    sectorsSubtitle: 'Çeşitli sektörlerde uzmanlaşmış, kaliteli ürünlerle global pazarlara hizmet veriyoruz.',
    
    // Sector names
    generator: 'Jeneratör ve Enerji',
    electrical: 'Elektrik Malzemeleri',
    construction: 'İnşaat Malzemeleri',
    textile: 'Tekstil ve Giyim',
    food: 'Gıda ve İçecek',
    automotive: 'Otomotiv Yedek Parça',
    machinery: 'Makine ve Ekipman',
    chemical: 'Kimyasal Ürünler',
    plastic: 'Plastik ve Ambalaj',
    metal: 'Metal İşleme',
    
    // About
    aboutTitle: 'Güvenilir İhracat Ortağınız',
    aboutDescription: '1998 yılından beri faaliyet gösteren firmamız, Türk mallarının dünya pazarlarında tanıtılması ve satışa sunulması konusunda uzmanlaşmıştır.',
    
    // Contact
    contactTitle: 'İletişime Geçin',
    contactDescription: 'İhracat ihtiyaçlarınız için bizimle iletişime geçin. Uzman ekibimiz size en iyi çözümü sunmak için hazır.',
    name: 'Ad Soyad',
    email: 'E-posta',
    message: 'Mesaj',
    sendMessage: 'Mesaj Gönder',
    
    // Footer
    rights: 'Tüm hakları saklıdır.',
    
    // Products Detail
    backToProducts: 'Ürünlere Dön',
    productGallery: 'Ürün Galerisi',
    containerLoading: 'Konteyner Yükleme ve Nakliye',
    technicalSpecs: 'Teknik Özellikler',
    keyFeatures: 'Temel Özellikler',
    interestedIn: 'İlgileniyorsunuz',
    requestQuote: 'Teklif İsteyin',
    downloadCatalog: 'Kataloğa Git',
    
    // Common terms
    annualExport: 'Yıllık İhracat',
    globalExport: 'Küresel İhracat',
    isoCertified: 'ISO Sertifikalı',
    premiumQuality: 'Premium Kalite',
    productView: 'Ürün Görünümü',
    containerLoadingText: 'Konteyner Yükleme',
    readyForExport: 'İhracata Hazır',
    growthRate: 'Büyüme Oranı',
    language: 'Dil',
    officeHours: 'Çalışma Saatleri',
    monday: 'Pazartesi',
    friday: 'Cuma',
    saturday: 'Cumartesi',
    sunday: 'Pazar',
    closed: 'Kapalı',
    address: 'Adres',
    phone: 'Telefon',
    quickLinks: 'Hızlı Bağlantılar',
    exportStats: 'İhracat İstatistikleri',
    ourJourney: 'Yolculuğumuz',
    keyMilestones: 'Önemli Kilometre Taşları',
    companyFounded: 'Şirket Kuruldu',
    europeanExpansion: 'Avrupa Genişlemesi',
    middleEastMarkets: 'Orta Doğu Pazarları',
    americasEntry: 'Amerika Girişi',
    globalLeader: 'Küresel Lider',
    getInTouch: 'İletişime Geçin',
    sendingMessage: 'Gönderiliyor...',
    messageSent: 'Mesaj başarıyla gönderildi!',
    readyToExpand: 'Küresel Erişiminizi Genişletmeye Hazır mısınız?',
    partnerWithUs: 'Yeni pazarlara erişmek ve ihracat işinizi güvenle büyütmek için bizimle ortaklık yapın.',
    
    // Sliders
    exportCountries: 'İhracat Yaptığımız Ülkeler',
    exportCountriesDesc: 'Dünya genelinde 50+ ülkeye kaliteli ürünler ihraç ediyoruz',
    happyCustomers: 'Mutlu Müşterilerimiz',
    happyCustomersDesc: 'Müşteri memnuniyeti bizim önceliğimizdir',
    customerTestimonials: 'Müşteri Yorumları',
    customerTestimonialsDesc: 'Müşterilerimizin bizim hakkımızdaki düşünceleri',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    products: 'Products',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Your Reliable Export Partner in Global Markets',
    heroSubtitle: 'With over 25 years of experience, we deliver quality Turkish products to global markets.',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Stats
    countriesServed: 'Countries',
    yearsExperience: 'Years Experience',
    totalExport: 'Total Export',
    
    // Sectors
    sectors: 'Our Export Sectors',
    sectorsSubtitle: 'Specialized in various sectors, serving global markets with quality products.',
    
    // Sector names
    generator: 'Generator & Energy',
    electrical: 'Electrical Equipment',
    construction: 'Construction Materials',
    textile: 'Textile & Apparel',
    food: 'Food & Beverage',
    automotive: 'Automotive Parts',
    machinery: 'Machinery & Equipment',
    chemical: 'Chemical Products',
    plastic: 'Plastic & Packaging',
    metal: 'Metal Processing',
    
    // About
    aboutTitle: 'Your Trusted Export Partner',
    aboutDescription: 'Operating since 1998, our company specializes in promoting and selling Turkish goods in global markets.',
    
    // Contact
    contactTitle: 'Get In Touch',
    contactDescription: 'Contact us for your export needs. Our expert team is ready to provide you with the best solutions.',
    name: 'Full Name',
    email: 'Email',
    message: 'Message',
    sendMessage: 'Send Message',
    
    // Footer
    rights: 'All rights reserved.',
    
    // Products Detail
    backToProducts: 'Back to Products',
    productGallery: 'Product Gallery',
    containerLoading: 'Container Loading & Shipping',
    technicalSpecs: 'Technical Specifications',
    keyFeatures: 'Key Features',
    interestedIn: 'Interested in',
    requestQuote: 'Request Quote',
    downloadCatalog: 'Go to Catalog',
    
    // Common terms
    annualExport: 'Annual Export',
    globalExport: 'Global Export',
    isoCertified: 'ISO Certified',
    premiumQuality: 'Premium Quality',
    productView: 'Product View',
    containerLoadingText: 'Container Loading',
    readyForExport: 'Ready for Export',
    growthRate: 'Growth Rate',
    language: 'Language',
    officeHours: 'Office Hours',
    monday: 'Monday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    closed: 'Closed',
    address: 'Address',
    phone: 'Phone',
    quickLinks: 'Quick Links',
    exportStats: 'Export Stats',
    ourJourney: 'Our Journey',
    keyMilestones: 'Key milestones in our export journey',
    companyFounded: 'Company Founded',
    europeanExpansion: 'European Expansion',
    middleEastMarkets: 'Middle East Markets',
    americasEntry: 'Americas Entry',
    globalLeader: 'Global Leader',
    getInTouch: 'Get in Touch',
    sendingMessage: 'Sending...',
    messageSent: 'Message sent successfully!',
    readyToExpand: 'Ready to Expand Your Global Reach?',
    partnerWithUs: 'Partner with us to access new markets and grow your export business with confidence.',
    
    // Sliders
    exportCountries: 'Countries We Export To',
    exportCountriesDesc: 'We export quality products to 50+ countries worldwide',
    happyCustomers: 'Happy Customers',
    happyCustomersDesc: 'Customer satisfaction is our priority',
    customerTestimonials: 'Customer Testimonials',
    customerTestimonialsDesc: 'What our customers say about us',
  },
  es: {
    // Navigation
    home: 'Inicio',
    about: 'Sobre Nosotros',
    products: 'Productos',
    contact: 'Contacto',
    
    // Hero Section
    heroTitle: 'Su Socio Confiable de Exportación en Mercados Globales',
    heroSubtitle: 'Con más de 25 años de experiencia, entregamos productos turcos de calidad a mercados globales.',
    getStarted: 'Comenzar',
    learnMore: 'Saber Más',
    
    // Stats
    countriesServed: 'Países',
    yearsExperience: 'Años de Experiencia',
    totalExport: 'Exportación Total',
    
    // Sectors
    sectors: 'Nuestros Sectores de Exportación',
    sectorsSubtitle: 'Especializados en varios sectores, sirviendo mercados globales con productos de calidad.',
    
    // Sector names
    generator: 'Generador y Energía',
    electrical: 'Equipos Eléctricos',
    construction: 'Materiales de Construcción',
    textile: 'Textil y Confección',
    food: 'Alimentos y Bebidas',
    automotive: 'Piezas Automotrices',
    machinery: 'Maquinaria y Equipos',
    chemical: 'Productos Químicos',
    plastic: 'Plástico y Embalaje',
    metal: 'Procesamiento de Metales',
    
    // About
    aboutTitle: 'Su Socio de Exportación de Confianza',
    aboutDescription: 'Operando desde 1998, nuestra empresa se especializa en promover y vender productos turcos en mercados globales.',
    
    // Contact
    contactTitle: 'Ponte en Contacto',
    contactDescription: 'Contáctanos para tus necesidades de exportación. Nuestro equipo experto está listo para brindarte las mejores soluciones.',
    name: 'Nombre Completo',
    email: 'Correo Electrónico',
    message: 'Mensaje',
    sendMessage: 'Enviar Mensaje',
    
    // Footer
    rights: 'Todos los derechos reservados.',
    
    // Products Detail
    backToProducts: 'Volver a Productos',
    productGallery: 'Galería de Productos',
    containerLoading: 'Carga de Contenedores y Envío',
    technicalSpecs: 'Especificaciones Técnicas',
    keyFeatures: 'Características Clave',
    interestedIn: 'Interesado en',
    requestQuote: 'Solicitar Cotización',
    downloadCatalog: 'Ir al Catálogo',
    
    // Common terms
    annualExport: 'Exportación Anual',
    globalExport: 'Exportación Global',
    isoCertified: 'Certificado ISO',
    premiumQuality: 'Calidad Premium',
    productView: 'Vista del Producto',
    containerLoadingText: 'Carga de Contenedores',
    readyForExport: 'Listo para Exportar',
    growthRate: 'Tasa de Crecimiento',
    language: 'Idioma',
    officeHours: 'Horario de Oficina',
    monday: 'Lunes',
    friday: 'Viernes',
    saturday: 'Sábado',
    sunday: 'Domingo',
    closed: 'Cerrado',
    address: 'Dirección',
    phone: 'Teléfono',
    quickLinks: 'Enlaces Rápidos',
    exportStats: 'Estadísticas de Exportación',
    ourJourney: 'Nuestro Viaje',
    keyMilestones: 'Hitos clave en nuestro viaje de exportación',
    companyFounded: 'Empresa Fundada',
    europeanExpansion: 'Expansión Europea',
    middleEastMarkets: 'Mercados de Oriente Medio',
    americasEntry: 'Entrada a las Américas',
    globalLeader: 'Líder Global',
    getInTouch: 'Ponte en Contacto',
    sendingMessage: 'Enviando...',
    messageSent: '¡Mensaje enviado exitosamente!',
    readyToExpand: '¿Listo para Expandir tu Alcance Global?',
    partnerWithUs: 'Asóciate con nosotros para acceder a nuevos mercados y hacer crecer tu negocio de exportación con confianza.',
    
    // Sliders
    exportCountries: 'Países a los que Exportamos',
    exportCountriesDesc: 'Exportamos productos de calidad a más de 50 países en todo el mundo',
    happyCustomers: 'Clientes Satisfechos',
    happyCustomersDesc: 'La satisfacción del cliente es nuestra prioridad',
    customerTestimonials: 'Testimonios de Clientes',
    customerTestimonialsDesc: 'Lo que nuestros clientes dicen sobre nosotros',
  },
  it: {
    // Navigation
    home: 'Home',
    about: 'Chi Siamo',
    products: 'Prodotti',
    contact: 'Contatti',
    
    // Hero Section
    heroTitle: 'Il Vostro Partner Affidabile per l\'Export nei Mercati Globali',
    heroSubtitle: 'Con oltre 25 anni di esperienza, consegniamo prodotti turchi di qualità ai mercati globali.',
    getStarted: 'Inizia',
    learnMore: 'Scopri di Più',
    
    // Stats
    countriesServed: 'Paesi',
    yearsExperience: 'Anni di Esperienza',
    totalExport: 'Export Totale',
    
    // Sectors
    sectors: 'I Nostri Settori di Esportazione',
    sectorsSubtitle: 'Specializzati in vari settori, serviamo mercati globali con prodotti di qualità.',
    
    // Sector names
    generator: 'Generatori ed Energia',
    electrical: 'Apparecchiature Elettriche',
    construction: 'Materiali da Costruzione',
    textile: 'Tessile e Abbigliamento',
    food: 'Cibo e Bevande',
    automotive: 'Parti Automobilistiche',
    machinery: 'Macchinari e Attrezzature',
    chemical: 'Prodotti Chimici',
    plastic: 'Plastica e Imballaggi',
    metal: 'Lavorazione Metalli',
    
    // About
    aboutTitle: 'Il Vostro Partner di Export di Fiducia',
    aboutDescription: 'Operando dal 1998, la nostra azienda è specializzata nella promozione e vendita di prodotti turchi nei mercati globali.',
    
    // Contact
    contactTitle: 'Mettiti in Contatto',
    contactDescription: 'Contattaci per le tue esigenze di esportazione. Il nostro team esperto è pronto a fornirti le migliori soluzioni.',
    name: 'Nome Completo',
    email: 'Email',
    message: 'Messaggio',
    sendMessage: 'Invia Messaggio',
    
    // Footer
    rights: 'Tutti i diritti riservati.',
    
    // Products Detail
    backToProducts: 'Torna ai Prodotti',
    productGallery: 'Galleria Prodotti',
    containerLoading: 'Caricamento Container e Spedizione',
    technicalSpecs: 'Specifiche Tecniche',
    keyFeatures: 'Caratteristiche Principali',
    interestedIn: 'Interessato a',
    requestQuote: 'Richiedi Preventivo',
    downloadCatalog: 'Vai al Catalogo',
    
    // Common terms
    annualExport: 'Esportazione Annuale',
    globalExport: 'Esportazione Globale',
    isoCertified: 'Certificato ISO',
    premiumQuality: 'Qualità Premium',
    productView: 'Vista Prodotto',
    containerLoadingText: 'Caricamento Container',
    readyForExport: 'Pronto per l\'Esportazione',
    growthRate: 'Tasso di Crescita',
    language: 'Lingua',
    officeHours: 'Orari di Ufficio',
    monday: 'Lunedì',
    friday: 'Venerdì',
    saturday: 'Sabato',
    sunday: 'Domenica',
    closed: 'Chiuso',
    address: 'Indirizzo',
    phone: 'Telefono',
    quickLinks: 'Link Rapidi',
    exportStats: 'Statistiche Export',
    ourJourney: 'Il Nostro Viaggio',
    keyMilestones: 'Tappe fondamentali del nostro viaggio nell\'export',
    companyFounded: 'Azienda Fondata',
    europeanExpansion: 'Espansione Europea',
    middleEastMarkets: 'Mercati Medio Orientali',
    americasEntry: 'Ingresso nelle Americhe',
    globalLeader: 'Leader Globale',
    getInTouch: 'Mettiti in Contatto',
    sendingMessage: 'Invio in corso...',
    messageSent: 'Messaggio inviato con successo!',
    readyToExpand: 'Pronto ad Espandere la Tua Portata Globale?',
    partnerWithUs: 'Collabora con noi per accedere a nuovi mercati e far crescere la tua attività di esportazione con fiducia.',
    
    // Sliders
    exportCountries: 'Paesi in cui Esportiamo',
    exportCountriesDesc: 'Esportiamo prodotti di qualità in oltre 50 paesi nel mondo',
    happyCustomers: 'Clienti Soddisfatti',
    happyCustomersDesc: 'La soddisfazione del cliente è la nostra priorità',
    customerTestimonials: 'Testimonianze Clienti',
    customerTestimonialsDesc: 'Cosa dicono i nostri clienti di noi',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};