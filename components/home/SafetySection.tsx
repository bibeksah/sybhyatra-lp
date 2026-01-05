'use client';

import { Shield, MapPin, Phone, UserCheck, Star, Lock } from 'lucide-react';

interface SafetySectionProps {
  language: 'en' | 'ne';
}

const content = {
  en: {
    title: 'Your Safety is Our Priority',
    subtitle: 'We\'ve built multiple layers of safety features to ensure every ride is secure.',
    features: [
      {
        icon: MapPin,
        title: 'Real-Time GPS Tracking',
        description: 'Track your ride live and share your trip with trusted contacts.',
      },
      {
        icon: UserCheck,
        title: 'Verified Drivers',
        description: 'All drivers undergo thorough background checks and document verification.',
      },
      {
        icon: Phone,
        title: 'Emergency SOS',
        description: 'One-tap emergency button connects you to help instantly.',
      },
      {
        icon: Star,
        title: 'Rating System',
        description: 'Two-way ratings ensure accountability for both riders and drivers.',
      },
      {
        icon: Lock,
        title: 'Secure Payments',
        description: 'Your payment information is encrypted and protected.',
      },
      {
        icon: Shield,
        title: '24/7 Support',
        description: 'Our safety team is available around the clock for any concerns.',
      },
    ],
    trustBadges: [
      'Nepal Traffic Police Compliant',
      'Data Protection Standards',
      'Insured Rides',
    ],
  },
  ne: {
    title: 'तपाईंको सुरक्षा हाम्रो प्राथमिकता हो',
    subtitle: 'हरेक यात्रा सुरक्षित छ भनी सुनिश्चित गर्न हामीले सुरक्षा सुविधाहरूको धेरै तहहरू बनाएका छौं।',
    features: [
      {
        icon: MapPin,
        title: 'वास्तविक-समय GPS ट्र्याकिङ',
        description: 'आफ्नो यात्रा लाइभ ट्र्याक गर्नुहोस् र विश्वसनीय सम्पर्कहरूसँग साझा गर्नुहोस्।',
      },
      {
        icon: UserCheck,
        title: 'प्रमाणित चालकहरू',
        description: 'सबै चालकहरू पूर्ण पृष्ठभूमि जाँच र कागजात प्रमाणीकरणबाट गुज्रन्छन्।',
      },
      {
        icon: Phone,
        title: 'आपतकालीन SOS',
        description: 'एक-ट्याप आपतकालीन बटनले तपाईंलाई तुरुन्तै मद्दतसँग जोड्छ।',
      },
      {
        icon: Star,
        title: 'रेटिङ प्रणाली',
        description: 'दुई-तर्फी रेटिङले यात्रु र चालक दुवैको जवाफदेहिता सुनिश्चित गर्छ।',
      },
      {
        icon: Lock,
        title: 'सुरक्षित भुक्तानी',
        description: 'तपाईंको भुक्तानी जानकारी इन्क्रिप्टेड र सुरक्षित छ।',
      },
      {
        icon: Shield,
        title: '२४/७ सहायता',
        description: 'हाम्रो सुरक्षा टोली कुनै पनि चिन्ताको लागि चौबीसै घण्टा उपलब्ध छ।',
      },
    ],
    trustBadges: [
      'नेपाल ट्राफिक प्रहरी अनुरूप',
      'डाटा संरक्षण मापदण्ड',
      'बीमित यात्राहरू',
    ],
  },
};

export function SafetySection({ language }: SafetySectionProps) {
  const c = content[language];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🛡️ Safety First
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-blue mb-4">
            {c.title}
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        {/* Safety features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {c.features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark-blue mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {c.trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full"
            >
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-brand-dark-blue">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SafetySection;
