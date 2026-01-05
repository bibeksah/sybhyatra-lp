'use client';

import Image from 'next/image';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DownloadSectionProps {
  language: 'en' | 'ne';
}

const content = {
  en: {
    title: 'Download the SubhYatra App',
    subtitle: 'Available on Android. iOS coming soon.',
    comingSoon: 'Coming Soon',
    getNotified: 'Get Notified at Launch',
    features: [
      'Book rides in seconds',
      'Track your driver in real-time',
      'Safe and secure payments',
      'Switch between rider & driver mode',
    ],
  },
  ne: {
    title: 'शुभयात्रा एप डाउनलोड गर्नुहोस्',
    subtitle: 'एन्ड्रोइडमा उपलब्ध। iOS चाँडै आउँदैछ।',
    comingSoon: 'चाँडै आउँदैछ',
    getNotified: 'लन्चमा सूचना पाउनुहोस्',
    features: [
      'सेकेन्डमा सवारी बुक गर्नुहोस्',
      'आफ्नो चालकलाई वास्तविक-समयमा ट्र्याक गर्नुहोस्',
      'सुरक्षित भुक्तानी',
      'यात्रु र चालक मोड बीच स्विच गर्नुहोस्',
    ],
  },
};

export function DownloadSection({ language }: DownloadSectionProps) {
  const c = content[language];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-blue mb-4">
              {c.title}
            </h2>
            <p className="text-lg text-brand-gray mb-8">
              {c.subtitle}
            </p>

            {/* Feature list */}
            <ul className="space-y-3 mb-8">
              {c.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-brand-dark-blue">
                  <span className="w-6 h-6 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-brand-dark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Google Play badge with Coming Soon overlay */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="relative group cursor-pointer">
                {/* Google Play badge placeholder */}
                <div className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 opacity-60">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l12.05 8.5c.55.39.55 1.21 0 1.6L4.6 21.3c-.66.5-1.6.03-1.6-.8zM17.95 12l-3.8 2.65L7 19.4V4.6l7.15 4.75 3.8 2.65z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </div>
                {/* Coming Soon overlay */}
                <div className="absolute inset-0 bg-brand-dark-blue/90 rounded-xl flex items-center justify-center">
                  <span className="text-brand-yellow font-bold text-sm uppercase tracking-wider">
                    {c.comingSoon}
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="border-brand-dark-blue text-brand-dark-blue hover:bg-brand-dark-blue hover:text-white font-semibold rounded-full"
                asChild
              >
                <a href="#waitlist-form" className="flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  {c.getNotified}
                </a>
              </Button>
            </div>
          </div>

          {/* App mockup */}
          <div className="relative flex justify-center">
            <div className="relative w-[280px] h-[560px] md:w-[300px] md:h-[600px]">
              {/* Phone frame */}
              <div className="absolute inset-0 bg-brand-dark-blue rounded-[3rem] shadow-2xl" />
              <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/Hero.webp"
                  alt="SubhYatra App"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-brand-dark-blue rounded-full" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-yellow/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-brand-dark-blue/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadSection;
