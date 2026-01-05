'use client';

import { MapPin, Car, CreditCard } from 'lucide-react';

interface HowItWorksProps {
  language: 'en' | 'ne';
}

const content = {
  en: {
    title: 'How SubhYatra Works',
    subtitle: 'Getting a ride has never been easier. Three simple steps to your destination.',
    steps: [
      {
        icon: MapPin,
        step: '1',
        title: 'Set Your Location',
        description: 'Enter your pickup and drop-off location. Our app finds the best route for you.',
      },
      {
        icon: Car,
        step: '2',
        title: 'Choose Your Ride',
        description: 'Select from Bike, Car Basic, Car Premium, or SUV based on your needs and budget.',
      },
      {
        icon: CreditCard,
        step: '3',
        title: 'Pay & Go',
        description: 'Pay easily with cash or eSewa. Rate your driver and help us maintain quality.',
      },
    ],
  },
  ne: {
    title: 'शुभयात्रा कसरी काम गर्छ',
    subtitle: 'सवारी लिन कहिल्यै यति सजिलो थिएन। तपाईंको गन्तव्यमा पुग्न तीन सरल चरणहरू।',
    steps: [
      {
        icon: MapPin,
        step: '१',
        title: 'आफ्नो स्थान सेट गर्नुहोस्',
        description: 'आफ्नो पिकअप र ड्रप-अफ स्थान प्रविष्ट गर्नुहोस्। हाम्रो एपले तपाईंको लागि उत्तम मार्ग खोज्छ।',
      },
      {
        icon: Car,
        step: '२',
        title: 'आफ्नो सवारी छान्नुहोस्',
        description: 'तपाईंको आवश्यकता र बजेट अनुसार बाइक, कार बेसिक, कार प्रिमियम, वा SUV छान्नुहोस्।',
      },
      {
        icon: CreditCard,
        step: '३',
        title: 'भुक्तानी गर्नुहोस् र जानुहोस्',
        description: 'नगद वा eSewa बाट सजिलै भुक्तानी गर्नुहोस्। आफ्ना चालकलाई रेटिङ दिनुहोस्।',
      },
    ],
  },
};

export function HowItWorks({ language }: HowItWorksProps) {
  const c = content[language];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-blue mb-4">
            {c.title}
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-brand-yellow via-brand-yellow to-brand-yellow opacity-30" />

          {c.steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center group">
                {/* Step number circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <step.icon className="w-10 h-10 text-brand-dark-blue" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-dark-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-brand-dark-blue mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-gray leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector for mobile */}
              {index < c.steps.length - 1 && (
                <div className="md:hidden flex justify-center my-6">
                  <div className="w-0.5 h-8 bg-brand-yellow opacity-50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
