'use client';

import { Wallet, Clock, TrendingUp, Award, FileCheck, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ForDriversProps {
  language: 'en' | 'ne';
}

const content = {
  en: {
    title: 'For Drivers',
    subtitle: 'Drive with SubhYatra and earn on your schedule',
    earningsTitle: 'Earn More, Your Way',
    earningsDescription: 'Keep 85-87% of every fare. High-performing drivers with perfect scores enjoy reduced commission rates.',
    benefits: [
      {
        icon: Wallet,
        title: 'Low Commission',
        description: '15% standard rate, 13% for top performers',
      },
      {
        icon: Clock,
        title: 'Flexible Hours',
        description: 'Work when you want, as much as you want',
      },
      {
        icon: TrendingUp,
        title: 'Bonus Incentives',
        description: 'Earn more during peak hours and special events',
      },
      {
        icon: Award,
        title: 'Driver Rewards',
        description: 'Platinum tier drivers get priority dispatch',
      },
    ],
    requirements: {
      title: 'Requirements',
      items: [
        'Valid driving license (1+ year)',
        'Age 21 or above',
        'Clean background check',
        'Vehicle documents in order',
        'Smartphone with data plan',
      ],
    },
    vehicleReqs: {
      title: 'Vehicle Standards',
      items: [
        'Bikes: Max 5 years old',
        'Cars: Max 8 years old',
        'Valid insurance & registration',
        'Good mechanical condition',
      ],
    },
    cta: 'Register as Driver',
    ctaNote: 'Driver registration opens at launch',
  },
  ne: {
    title: 'चालकहरूको लागि',
    subtitle: 'शुभयात्रासँग ड्राइभ गर्नुहोस् र आफ्नो तालिकामा कमाउनुहोस्',
    earningsTitle: 'बढी कमाउनुहोस्, आफ्नो तरिकाले',
    earningsDescription: 'प्रत्येक भाडाको 85-87% राख्नुहोस्। उत्कृष्ट स्कोर भएका चालकहरूले कम कमिसन दर पाउँछन्।',
    benefits: [
      {
        icon: Wallet,
        title: 'कम कमिसन',
        description: '15% मानक दर, उत्कृष्ट प्रदर्शनकर्ताको लागि 13%',
      },
      {
        icon: Clock,
        title: 'लचिलो समय',
        description: 'जहिले चाहानुहुन्छ, जति चाहानुहुन्छ काम गर्नुहोस्',
      },
      {
        icon: TrendingUp,
        title: 'बोनस प्रोत्साहन',
        description: 'पिक समय र विशेष कार्यक्रमहरूमा बढी कमाउनुहोस्',
      },
      {
        icon: Award,
        title: 'चालक पुरस्कार',
        description: 'प्लाटिनम टियर चालकहरूले प्राथमिकता डिस्प्याच पाउँछन्',
      },
    ],
    requirements: {
      title: 'आवश्यकताहरू',
      items: [
        'वैध ड्राइभिङ लाइसेन्स (१+ वर्ष)',
        '२१ वर्ष वा माथि उमेर',
        'स्वच्छ पृष्ठभूमि जाँच',
        'सवारी कागजातहरू मिलेको',
        'डाटा प्लान सहित स्मार्टफोन',
      ],
    },
    vehicleReqs: {
      title: 'सवारी मापदण्ड',
      items: [
        'बाइक: अधिकतम ५ वर्ष पुरानो',
        'कार: अधिकतम ८ वर्ष पुरानो',
        'वैध बीमा र दर्ता',
        'राम्रो मेकानिकल अवस्था',
      ],
    },
    cta: 'चालकको रूपमा दर्ता गर्नुहोस्',
    ctaNote: 'चालक दर्ता लन्चमा खुल्छ',
  },
};

export function ForDrivers({ language }: ForDriversProps) {
  const c = content[language];

  return (
    <section className="py-20 md:py-28 bg-brand-dark-blue text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-yellow/20 text-brand-yellow px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🏍️ {c.title}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {c.subtitle}
          </h2>
        </div>

        {/* Earnings highlight */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-brand-yellow rounded-xl flex items-center justify-center flex-shrink-0">
              <Wallet className="w-7 h-7 text-brand-dark-blue" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-yellow">{c.earningsTitle}</h3>
            </div>
          </div>
          <p className="text-gray-300 text-lg">{c.earningsDescription}</p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {c.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-brand-yellow" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Requirements section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="w-6 h-6 text-brand-yellow" />
              <h3 className="text-xl font-bold text-white">{c.requirements.title}</h3>
            </div>
            <ul className="space-y-3">
              {c.requirements.items.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Car className="w-6 h-6 text-brand-yellow" />
              <h3 className="text-xl font-bold text-white">{c.vehicleReqs.title}</h3>
            </div>
            <ul className="space-y-3">
              {c.vehicleReqs.items.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-brand-yellow text-brand-dark-blue hover:bg-white font-bold text-lg px-8 py-6 rounded-full shadow-lg"
            asChild
          >
            <a href="#waitlist-form">{c.cta}</a>
          </Button>
          <p className="text-gray-400 text-sm mt-4">{c.ctaNote}</p>
        </div>
      </div>
    </section>
  );
}

export default ForDrivers;
