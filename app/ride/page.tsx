'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  Smartphone,
  MapPin,
  Car,
  UserCheck,
  Navigation,
  CreditCard,
  Bike,
  ArrowRight,
  Shield,
  Clock,
  Wallet
} from 'lucide-react';

const content = {
  en: {
    title: 'How SubhYatra Works',
    subtitle: 'Your ride is just a few taps away',
    heroDescription: 'Getting a ride with SubhYatra is simple, safe, and affordable. Here\'s how it works.',
    stepsTitle: 'Book Your Ride in 6 Easy Steps',
    steps: [
      {
        icon: Smartphone,
        number: '1',
        title: 'Download & Sign Up',
        description: 'Download the SubhYatra app from Google Play Store and create your account with your phone number or email.',
      },
      {
        icon: MapPin,
        number: '2',
        title: 'Enter Your Destination',
        description: 'Enter where you want to go. Our app will show you the estimated fare and available vehicle options.',
      },
      {
        icon: Car,
        number: '3',
        title: 'Choose Your Vehicle',
        description: 'Select from Bike, Car Basic, Car Premium, or SUV based on your needs, budget, and number of passengers.',
      },
      {
        icon: UserCheck,
        number: '4',
        title: 'Get Matched',
        description: 'We\'ll match you with a nearby verified driver. You\'ll see their name, photo, vehicle details, and rating.',
      },
      {
        icon: Navigation,
        number: '5',
        title: 'Track Your Ride',
        description: 'Track your driver in real-time as they arrive. Share your trip with friends and family for added safety.',
      },
      {
        icon: CreditCard,
        number: '6',
        title: 'Pay & Rate',
        description: 'Pay with cash or eSewa at the end of your trip. Rate your driver to help maintain service quality.',
      },
    ],
    vehiclesTitle: 'Choose Your Perfect Ride',
    vehiclesSubtitle: 'We offer multiple vehicle options to suit every need',
    vehicles: [
      {
        type: 'Bike',
        icon: Bike,
        description: 'Quick and affordable for solo travelers',
        capacity: '1 passenger',
        best: 'Short city trips',
        priceIndicator: '₹',
      },
      {
        type: 'Car Basic',
        icon: Car,
        description: 'Comfortable sedans for everyday travel',
        capacity: '4 passengers',
        best: 'Daily commute',
        priceIndicator: '₹₹',
      },
      {
        type: 'Car Premium',
        icon: Car,
        description: 'Premium vehicles for a superior experience',
        capacity: '4 passengers',
        best: 'Business & special occasions',
        priceIndicator: '₹₹₹',
      },
      {
        type: 'SUV',
        icon: Car,
        description: 'Spacious vehicles for groups or luggage',
        capacity: '6 passengers',
        best: 'Groups & intercity',
        priceIndicator: '₹₹₹₹',
      },
    ],
    pricingTitle: 'Transparent Pricing',
    pricingDescription: 'No hidden fees. What you see is what you pay.',
    pricingFeatures: [
      'Fare calculated by distance and time',
      'Upfront price shown before booking',
      'No surge pricing manipulation',
      'Cancellation fees clearly displayed',
    ],
    cityIntercityTitle: 'City & Intercity Rides',
    cityTitle: 'City Rides',
    cityDescription: 'Navigate through Kathmandu\'s busy streets with ease. Our drivers know every galli and shortcut.',
    intercityTitle: 'Intercity Rides',
    intercityDescription: 'Travel between cities safely with experienced drivers. Perfect for Pokhara, Chitwan, and more.',
    safetyTitle: 'Your Safety Matters',
    safetyFeatures: [
      {
        icon: Shield,
        title: 'Verified Drivers',
        description: 'All drivers are background-checked and verified',
      },
      {
        icon: Navigation,
        title: 'Live Tracking',
        description: 'Track your ride and share with loved ones',
      },
      {
        icon: Clock,
        title: '24/7 Support',
        description: 'Our team is always ready to help',
      },
    ],
    ctaTitle: 'Ready to Ride?',
    ctaDescription: 'Join the waitlist and be among the first to experience SubhYatra.',
    joinWaitlist: 'Join the Waitlist',
  },
  ne: {
    title: 'शुभयात्रा कसरी काम गर्छ',
    subtitle: 'तपाईंको सवारी केही ट्यापमात्र टाढा छ',
    heroDescription: 'शुभयात्रासँग सवारी लिनु सरल, सुरक्षित र किफायती छ। यो कसरी काम गर्छ यहाँ छ।',
    stepsTitle: '६ सजिलो चरणमा आफ्नो सवारी बुक गर्नुहोस्',
    steps: [
      {
        icon: Smartphone,
        number: '१',
        title: 'डाउनलोड र साइन अप गर्नुहोस्',
        description: 'Google Play Store बाट शुभयात्रा एप डाउनलोड गर्नुहोस् र आफ्नो फोन नम्बर वा इमेलले खाता बनाउनुहोस्।',
      },
      {
        icon: MapPin,
        number: '२',
        title: 'आफ्नो गन्तव्य प्रविष्ट गर्नुहोस्',
        description: 'तपाईं कहाँ जान चाहनुहुन्छ प्रविष्ट गर्नुहोस्। हाम्रो एपले अनुमानित भाडा र उपलब्ध सवारी विकल्पहरू देखाउनेछ।',
      },
      {
        icon: Car,
        number: '३',
        title: 'आफ्नो सवारी छान्नुहोस्',
        description: 'तपाईंको आवश्यकता, बजेट, र यात्रु संख्या अनुसार बाइक, कार बेसिक, कार प्रिमियम, वा SUV छान्नुहोस्।',
      },
      {
        icon: UserCheck,
        number: '४',
        title: 'जोडिनुहोस्',
        description: 'हामी तपाईंलाई नजिकको प्रमाणित चालकसँग जोड्नेछौं। तपाईंले उनीहरूको नाम, फोटो, सवारी विवरण, र रेटिङ देख्नुहुनेछ।',
      },
      {
        icon: Navigation,
        number: '५',
        title: 'आफ्नो सवारी ट्र्याक गर्नुहोस्',
        description: 'तपाईंको चालक आइपुग्दा वास्तविक-समयमा ट्र्याक गर्नुहोस्। थप सुरक्षाको लागि साथी र परिवारसँग साझा गर्नुहोस्।',
      },
      {
        icon: CreditCard,
        number: '६',
        title: 'भुक्तानी र रेटिङ गर्नुहोस्',
        description: 'यात्राको अन्त्यमा नगद वा eSewa ले भुक्तानी गर्नुहोस्। सेवाको गुणस्तर कायम राख्न चालकलाई रेटिङ दिनुहोस्।',
      },
    ],
    vehiclesTitle: 'आफ्नो उपयुक्त सवारी छान्नुहोस्',
    vehiclesSubtitle: 'हामी हरेक आवश्यकता अनुसार धेरै सवारी विकल्पहरू प्रदान गर्दछौं',
    vehicles: [
      {
        type: 'बाइक',
        icon: Bike,
        description: 'एकल यात्रुहरूको लागि छिटो र किफायती',
        capacity: '१ यात्रु',
        best: 'छोटो शहर यात्रा',
        priceIndicator: '₹',
      },
      {
        type: 'कार बेसिक',
        icon: Car,
        description: 'दैनिक यात्राको लागि आरामदायी सेडान',
        capacity: '४ यात्रु',
        best: 'दैनिक आवागमन',
        priceIndicator: '₹₹',
      },
      {
        type: 'कार प्रिमियम',
        icon: Car,
        description: 'उत्कृष्ट अनुभवको लागि प्रिमियम सवारी',
        capacity: '४ यात्रु',
        best: 'व्यापार र विशेष अवसर',
        priceIndicator: '₹₹₹',
      },
      {
        type: 'SUV',
        icon: Car,
        description: 'समूह वा सामानको लागि ठूलो सवारी',
        capacity: '६ यात्रु',
        best: 'समूह र अन्तरशहर',
        priceIndicator: '₹₹₹₹',
      },
    ],
    pricingTitle: 'पारदर्शी मूल्य निर्धारण',
    pricingDescription: 'कुनै लुकेको शुल्क छैन। जे देख्नुहुन्छ त्यही तिर्नुहुन्छ।',
    pricingFeatures: [
      'दूरी र समय अनुसार भाडा गणना',
      'बुकिङ अघि अग्रिम मूल्य देखाइएको',
      'कुनै सर्ज प्राइसिङ हेरफेर छैन',
      'रद्द शुल्क स्पष्ट रूपमा देखाइएको',
    ],
    cityIntercityTitle: 'शहर र अन्तरशहर सवारी',
    cityTitle: 'शहर सवारी',
    cityDescription: 'काठमाडौंको व्यस्त सडकहरूमा सजिलै यात्रा गर्नुहोस्। हाम्रा चालकहरूले हरेक गल्ली र सर्टकट जान्दछन्।',
    intercityTitle: 'अन्तरशहर सवारी',
    intercityDescription: 'अनुभवी चालकहरूसँग शहरहरू बीच सुरक्षित यात्रा गर्नुहोस्। पोखरा, चितवन, र थप।',
    safetyTitle: 'तपाईंको सुरक्षा महत्त्वपूर्ण छ',
    safetyFeatures: [
      {
        icon: Shield,
        title: 'प्रमाणित चालकहरू',
        description: 'सबै चालकहरू पृष्ठभूमि जाँच र प्रमाणित छन्',
      },
      {
        icon: Navigation,
        title: 'लाइभ ट्र्याकिङ',
        description: 'आफ्नो सवारी ट्र्याक गर्नुहोस् र प्रियजनहरूसँग साझा गर्नुहोस्',
      },
      {
        icon: Clock,
        title: '२४/७ सहायता',
        description: 'हाम्रो टोली सधैं मद्दत गर्न तयार छ',
      },
    ],
    ctaTitle: 'सवारी गर्न तयार?',
    ctaDescription: 'प्रतीक्षा सूचीमा सामेल हुनुहोस् र शुभयात्रा अनुभव गर्ने पहिलो बन्नुहोस्।',
    joinWaitlist: 'प्रतीक्षा सूचीमा सामेल हुनुहोस्',
  },
};

export default function RidePage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Hero Section */}
      <section className="bg-brand-dark-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{c.title}</h1>
            <p className="text-xl text-brand-yellow font-semibold mb-4">{c.subtitle}</p>
            <p className="text-lg text-gray-300">{c.heroDescription}</p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark-blue text-center mb-16">{c.stepsTitle}</h2>

          <div className="max-w-4xl mx-auto">
            {c.steps.map((step, index) => (
              <div key={index} className="flex gap-6 mb-12 last:mb-0">
                {/* Icon & Line */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0 relative">
                    <step.icon className="w-8 h-8 text-brand-dark-blue" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-brand-dark-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </span>
                  </div>
                  {index < c.steps.length - 1 && (
                    <div className="w-0.5 h-full bg-brand-yellow/30 mt-4 min-h-[60px]" />
                  )}
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-brand-dark-blue mb-2">{step.title}</h3>
                  <p className="text-brand-gray">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark-blue mb-4">{c.vehiclesTitle}</h2>
            <p className="text-brand-gray">{c.vehiclesSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {c.vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-4">
                  <vehicle.icon className="w-6 h-6 text-brand-yellow" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark-blue mb-2">{vehicle.type}</h3>
                <p className="text-sm text-brand-gray mb-4">{vehicle.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Capacity:</span>
                    <span className="font-medium text-brand-dark-blue">{vehicle.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best for:</span>
                    <span className="font-medium text-brand-dark-blue">{vehicle.best}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Price:</span>
                    <span className="font-medium text-brand-yellow">{vehicle.priceIndicator}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-brand-dark-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Wallet className="w-12 h-12 text-brand-yellow mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">{c.pricingTitle}</h2>
            <p className="text-gray-300 mb-8">{c.pricingDescription}</p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {c.pricingFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                  <svg className="w-5 h-5 text-brand-yellow flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* City & Intercity */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark-blue text-center mb-12">{c.cityIntercityTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-brand-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark-blue mb-3">{c.cityTitle}</h3>
              <p className="text-brand-gray">{c.cityDescription}</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-brand-dark-blue rounded-xl flex items-center justify-center mb-4">
                <Navigation className="w-6 h-6 text-brand-yellow" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark-blue mb-3">{c.intercityTitle}</h3>
              <p className="text-brand-gray">{c.intercityDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark-blue text-center mb-12">{c.safetyTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {c.safetyFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark-blue mb-2">{feature.title}</h3>
                <p className="text-brand-gray text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-yellow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-dark-blue mb-4">{c.ctaTitle}</h2>
            <p className="text-brand-dark-blue/80 mb-8">{c.ctaDescription}</p>
            <Button
              size="lg"
              className="bg-brand-dark-blue text-white hover:bg-brand-dark-blue/90 font-bold rounded-full"
              asChild
            >
              <Link href="/#waitlist-form">
                {c.joinWaitlist} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
