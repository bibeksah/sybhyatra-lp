'use client';

import { Clock, Shield, Wallet, MapPin, Star, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ForRidersProps {
  language: 'en' | 'ne';
}

const content = {
  en: {
    title: 'For Riders',
    subtitle: 'Experience the future of ride-hailing in Nepal',
    benefits: [
      {
        icon: Clock,
        title: 'Quick Pickup',
        description: 'Get matched with nearby drivers in seconds. No more waiting.',
      },
      {
        icon: Wallet,
        title: 'Fair Pricing',
        description: 'Transparent fares with no hidden charges. Pay what you see.',
      },
      {
        icon: Shield,
        title: 'Safe Rides',
        description: 'Verified drivers, real-time tracking, and emergency features.',
      },
      {
        icon: MapPin,
        title: 'City & Intercity',
        description: 'Travel within Kathmandu or across Nepal with ease.',
      },
      {
        icon: Star,
        title: 'Rate & Review',
        description: 'Your feedback helps maintain quality service for everyone.',
      },
      {
        icon: Phone,
        title: '24/7 Support',
        description: 'Our support team is always ready to help you.',
      },
    ],
    cta: 'Join Waitlist',
    vehicleTypes: 'Choose from Bike, Car Basic, Car Premium, or SUV',
  },
  ne: {
    title: 'यात्रुहरूको लागि',
    subtitle: 'नेपालमा राइड-हेलिङको भविष्य अनुभव गर्नुहोस्',
    benefits: [
      {
        icon: Clock,
        title: 'छिटो पिकअप',
        description: 'सेकेन्डमा नजिकका चालकसँग जोडिनुहोस्। अब कुर्नु पर्दैन।',
      },
      {
        icon: Wallet,
        title: 'उचित मूल्य',
        description: 'कुनै लुकेको शुल्क बिना पारदर्शी भाडा। जे देख्नुहुन्छ त्यही तिर्नुहोस्।',
      },
      {
        icon: Shield,
        title: 'सुरक्षित यात्रा',
        description: 'प्रमाणित चालकहरू, वास्तविक-समय ट्र्याकिङ, र आपतकालीन सुविधाहरू।',
      },
      {
        icon: MapPin,
        title: 'शहर र अन्तरशहर',
        description: 'काठमाडौं भित्र वा नेपाल भरि सजिलै यात्रा गर्नुहोस्।',
      },
      {
        icon: Star,
        title: 'रेट र समीक्षा',
        description: 'तपाईंको प्रतिक्रियाले सबैको लागि गुणस्तरीय सेवा कायम राख्न मद्दत गर्छ।',
      },
      {
        icon: Phone,
        title: '२४/७ सहायता',
        description: 'हाम्रो सहायता टोली तपाईंलाई मद्दत गर्न सधैं तयार छ।',
      },
    ],
    cta: 'प्रतीक्षा सूचीमा सामेल हुनुहोस्',
    vehicleTypes: 'बाइक, कार बेसिक, कार प्रिमियम, वा SUV बाट छान्नुहोस्',
  },
};

export function ForRiders({ language }: ForRidersProps) {
  const c = content[language];

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-yellow/10 text-brand-dark-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🚗 {c.title}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-blue mb-4">
            {c.subtitle}
          </h2>
          <p className="text-brand-gray">{c.vehicleTypes}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {c.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-brand-yellow" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark-blue mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-brand-dark-blue text-white hover:bg-brand-dark-blue/90 font-bold text-lg px-8 py-6 rounded-full shadow-lg"
            asChild
          >
            <a href="#waitlist-form">{c.cta}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ForRiders;
