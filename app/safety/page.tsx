'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  Shield,
  MapPin,
  Phone,
  UserCheck,
  Star,
  Lock,
  AlertTriangle,
  Eye,
  Users,
  FileCheck,
  ArrowRight
} from 'lucide-react';

const content = {
  en: {
    title: 'Safety at SubhYatra',
    subtitle: 'Your safety is our top priority',
    heroDescription: 'We\'ve built comprehensive safety features into every aspect of SubhYatra to ensure every ride is safe and secure.',
    riderSafetyTitle: 'For Riders',
    riderFeatures: [
      {
        icon: MapPin,
        title: 'Real-Time GPS Tracking',
        description: 'Track your ride live from pickup to drop-off. Your exact location is always known.',
      },
      {
        icon: Users,
        title: 'Share Your Trip',
        description: 'Share your live trip status with friends and family so they can track your journey.',
      },
      {
        icon: Phone,
        title: 'Emergency SOS',
        description: 'One-tap emergency button alerts our safety team and shares your location with emergency contacts.',
      },
      {
        icon: UserCheck,
        title: 'Verified Drivers',
        description: 'All drivers go through background verification, document checks, and identity verification.',
      },
      {
        icon: Star,
        title: 'Driver Ratings',
        description: 'See your driver\'s rating before you ride. Low-rated drivers are removed from the platform.',
      },
      {
        icon: Eye,
        title: 'Ride Details',
        description: 'See your driver\'s name, photo, vehicle details, and license plate before they arrive.',
      },
    ],
    driverSafetyTitle: 'For Drivers',
    driverFeatures: [
      {
        icon: Star,
        title: 'Passenger Ratings',
        description: 'Rate passengers after each ride. Problem passengers are flagged or removed.',
      },
      {
        icon: Phone,
        title: 'Driver SOS',
        description: 'Emergency button available for drivers to alert our safety team if needed.',
      },
      {
        icon: Lock,
        title: 'Secure Payments',
        description: 'All earnings are tracked securely. No need to carry large amounts of cash.',
      },
      {
        icon: Shield,
        title: '24/7 Support',
        description: 'Our driver support team is available around the clock for any safety concerns.',
      },
    ],
    verificationTitle: 'Our Verification Process',
    verificationSteps: [
      {
        title: 'Identity Verification',
        description: 'Drivers must provide valid citizenship certificate and government-issued ID.',
      },
      {
        title: 'License Verification',
        description: 'We verify driving license validity and ensure it\'s appropriate for the vehicle class.',
      },
      {
        title: 'Vehicle Inspection',
        description: 'All vehicles must meet our safety standards and have valid registration and insurance.',
      },
      {
        title: 'Background Check',
        description: 'We conduct background checks to ensure drivers have no serious criminal history.',
      },
    ],
    guidelinesTitle: 'Safety Guidelines',
    riderGuidelines: {
      title: 'For Riders',
      items: [
        'Always verify driver and vehicle details before entering',
        'Share your trip with a trusted contact',
        'Sit in the back seat when riding alone',
        'Trust your instincts - cancel if something feels wrong',
        'Keep your belongings with you',
        'Use the in-app contact to communicate with drivers',
      ],
    },
    driverGuidelines: {
      title: 'For Drivers',
      items: [
        'Never drive under the influence of alcohol or drugs',
        'Always verify passenger identity',
        'Follow traffic rules and speed limits',
        'Keep your phone mounted, not in hand while driving',
        'Report suspicious activity immediately',
        'Maintain your vehicle in safe condition',
      ],
    },
    reportTitle: 'Report a Safety Issue',
    reportDescription: 'If you experience any safety concerns during your ride, please report it immediately:',
    reportMethods: [
      {
        method: 'In-App',
        description: 'Use the "Report Issue" button in your ride history',
      },
      {
        method: 'Email',
        description: 'safety@subhyatranepal.com',
      },
      {
        method: 'Phone',
        description: '+977 9855042503',
      },
    ],
    emergencyTitle: 'In Case of Emergency',
    emergencyDescription: 'If you\'re in immediate danger, please contact local emergency services first:',
    emergencyContacts: [
      { name: 'Nepal Police', number: '100' },
      { name: 'Ambulance', number: '102' },
      { name: 'Traffic Police', number: '103' },
    ],
    ctaTitle: 'Ride with Confidence',
    ctaDescription: 'Join SubhYatra and experience safe, reliable rides in Nepal.',
    joinWaitlist: 'Join the Waitlist',
  },
  ne: {
    title: 'शुभयात्रामा सुरक्षा',
    subtitle: 'तपाईंको सुरक्षा हाम्रो शीर्ष प्राथमिकता हो',
    heroDescription: 'हामीले शुभयात्राको हरेक पक्षमा व्यापक सुरक्षा सुविधाहरू निर्माण गरेका छौं ताकि हरेक यात्रा सुरक्षित र सुरक्षित होस्।',
    riderSafetyTitle: 'यात्रुहरूको लागि',
    riderFeatures: [
      {
        icon: MapPin,
        title: 'वास्तविक-समय GPS ट्र्याकिङ',
        description: 'पिकअप देखि ड्रप-अफ सम्म आफ्नो सवारी लाइभ ट्र्याक गर्नुहोस्। तपाईंको सही स्थान सधैं थाहा हुन्छ।',
      },
      {
        icon: Users,
        title: 'आफ्नो यात्रा साझा गर्नुहोस्',
        description: 'साथी र परिवारसँग आफ्नो लाइभ यात्रा स्थिति साझा गर्नुहोस् ताकि उनीहरूले तपाईंको यात्रा ट्र्याक गर्न सकून्।',
      },
      {
        icon: Phone,
        title: 'आपतकालीन SOS',
        description: 'एक-ट्याप आपतकालीन बटनले हाम्रो सुरक्षा टोलीलाई सतर्क गराउँछ र आपतकालीन सम्पर्कहरूसँग तपाईंको स्थान साझा गर्छ।',
      },
      {
        icon: UserCheck,
        title: 'प्रमाणित चालकहरू',
        description: 'सबै चालकहरू पृष्ठभूमि प्रमाणीकरण, कागजात जाँच, र पहिचान प्रमाणीकरणबाट गुज्रन्छन्।',
      },
      {
        icon: Star,
        title: 'चालक रेटिङ',
        description: 'सवारी गर्नु अघि आफ्नो चालकको रेटिङ हेर्नुहोस्। कम रेटिङ भएका चालकहरू प्लेटफर्मबाट हटाइन्छन्।',
      },
      {
        icon: Eye,
        title: 'सवारी विवरण',
        description: 'उनीहरू आउनु अघि आफ्नो चालकको नाम, फोटो, सवारी विवरण, र नम्बर प्लेट हेर्नुहोस्।',
      },
    ],
    driverSafetyTitle: 'चालकहरूको लागि',
    driverFeatures: [
      {
        icon: Star,
        title: 'यात्रु रेटिङ',
        description: 'हरेक यात्रा पछि यात्रुहरूलाई रेटिङ दिनुहोस्। समस्या भएका यात्रुहरू फ्ल्याग वा हटाइन्छन्।',
      },
      {
        icon: Phone,
        title: 'चालक SOS',
        description: 'आवश्यक परेमा हाम्रो सुरक्षा टोलीलाई सतर्क गराउन चालकहरूको लागि आपतकालीन बटन उपलब्ध।',
      },
      {
        icon: Lock,
        title: 'सुरक्षित भुक्तानी',
        description: 'सबै आम्दानी सुरक्षित रूपमा ट्र्याक गरिन्छ। ठूलो रकम नगद बोक्नु पर्दैन।',
      },
      {
        icon: Shield,
        title: '२४/७ सहायता',
        description: 'हाम्रो चालक सहायता टोली कुनै पनि सुरक्षा चिन्ताको लागि चौबीसै घण्टा उपलब्ध छ।',
      },
    ],
    verificationTitle: 'हाम्रो प्रमाणीकरण प्रक्रिया',
    verificationSteps: [
      {
        title: 'पहिचान प्रमाणीकरण',
        description: 'चालकहरूले वैध नागरिकता प्रमाणपत्र र सरकारी परिचयपत्र प्रदान गर्नुपर्छ।',
      },
      {
        title: 'लाइसेन्स प्रमाणीकरण',
        description: 'हामी ड्राइभिङ लाइसेन्सको वैधता प्रमाणित गर्छौं र यो सवारी वर्गको लागि उपयुक्त छ भनी सुनिश्चित गर्छौं।',
      },
      {
        title: 'सवारी निरीक्षण',
        description: 'सबै सवारीहरूले हाम्रो सुरक्षा मापदण्डहरू पूरा गर्नुपर्छ र वैध दर्ता र बीमा हुनुपर्छ।',
      },
      {
        title: 'पृष्ठभूमि जाँच',
        description: 'चालकहरूसँग कुनै गम्भीर आपराधिक इतिहास छैन भनी सुनिश्चित गर्न हामी पृष्ठभूमि जाँच गर्छौं।',
      },
    ],
    guidelinesTitle: 'सुरक्षा दिशानिर्देशहरू',
    riderGuidelines: {
      title: 'यात्रुहरूको लागि',
      items: [
        'चढ्नु अघि सधैं चालक र सवारी विवरण प्रमाणित गर्नुहोस्',
        'विश्वसनीय सम्पर्कसँग आफ्नो यात्रा साझा गर्नुहोस्',
        'एक्लै यात्रा गर्दा पछाडिको सीटमा बस्नुहोस्',
        'आफ्नो सहज ज्ञानमा विश्वास गर्नुहोस् - केही गलत लागेमा रद्द गर्नुहोस्',
        'आफ्नो सामान आफूसँग राख्नुहोस्',
        'चालकहरूसँग सञ्चार गर्न इन-एप सम्पर्क प्रयोग गर्नुहोस्',
      ],
    },
    driverGuidelines: {
      title: 'चालकहरूको लागि',
      items: [
        'मदिरा वा लागुऔषधको प्रभावमा कहिल्यै ड्राइभ नगर्नुहोस्',
        'सधैं यात्रु पहिचान प्रमाणित गर्नुहोस्',
        'ट्राफिक नियम र गति सीमा पालना गर्नुहोस्',
        'ड्राइभ गर्दा फोन माउन्ट गरेर राख्नुहोस्, हातमा होइन',
        'शंकास्पद गतिविधि तुरुन्तै रिपोर्ट गर्नुहोस्',
        'आफ्नो सवारी सुरक्षित अवस्थामा राख्नुहोस्',
      ],
    },
    reportTitle: 'सुरक्षा समस्या रिपोर्ट गर्नुहोस्',
    reportDescription: 'यदि तपाईंले यात्राको समयमा कुनै सुरक्षा चिन्ता अनुभव गर्नुहुन्छ भने, कृपया तुरुन्तै रिपोर्ट गर्नुहोस्:',
    reportMethods: [
      {
        method: 'इन-एप',
        description: 'आफ्नो यात्रा इतिहासमा "समस्या रिपोर्ट गर्नुहोस्" बटन प्रयोग गर्नुहोस्',
      },
      {
        method: 'इमेल',
        description: 'safety@subhyatranepal.com',
      },
      {
        method: 'फोन',
        description: '+९७७ ९८५५०४२५०३',
      },
    ],
    emergencyTitle: 'आपतकालमा',
    emergencyDescription: 'यदि तपाईं तत्काल खतरामा हुनुहुन्छ भने, कृपया पहिले स्थानीय आपतकालीन सेवाहरूलाई सम्पर्क गर्नुहोस्:',
    emergencyContacts: [
      { name: 'नेपाल प्रहरी', number: '१००' },
      { name: 'एम्बुलेन्स', number: '१०२' },
      { name: 'ट्राफिक प्रहरी', number: '१०३' },
    ],
    ctaTitle: 'विश्वासका साथ यात्रा गर्नुहोस्',
    ctaDescription: 'शुभयात्रामा सामेल हुनुहोस् र नेपालमा सुरक्षित, भरपर्दो यात्राको अनुभव गर्नुहोस्।',
    joinWaitlist: 'प्रतीक्षा सूचीमा सामेल हुनुहोस्',
  },
};

export default function SafetyPage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{c.title}</h1>
            <p className="text-xl text-green-100 font-semibold mb-4">{c.subtitle}</p>
            <p className="text-lg text-green-100/80">{c.heroDescription}</p>
          </div>
        </div>
      </section>

      {/* Rider Safety Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark-blue text-center mb-12">{c.riderSafetyTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {c.riderFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark-blue mb-2">{feature.title}</h3>
                <p className="text-brand-gray text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Safety Features */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark-blue text-center mb-12">{c.driverSafetyTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {c.driverFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark-blue mb-2">{feature.title}</h3>
                <p className="text-brand-gray text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-16 md:py-24 bg-brand-dark-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{c.verificationTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {c.verificationSteps.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4 text-lg font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark-blue text-center mb-12">{c.guidelinesTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Rider Guidelines */}
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-brand-dark-blue mb-4">{c.riderGuidelines.title}</h3>
              <ul className="space-y-3">
                {c.riderGuidelines.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-brand-gray">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Driver Guidelines */}
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-brand-dark-blue mb-4">{c.driverGuidelines.title}</h3>
              <ul className="space-y-3">
                {c.driverGuidelines.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-brand-gray">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Report & Emergency */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Report Issue */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <AlertTriangle className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-brand-dark-blue mb-2">{c.reportTitle}</h3>
              <p className="text-brand-gray text-sm mb-4">{c.reportDescription}</p>
              <ul className="space-y-3">
                {c.reportMethods.map((method, index) => (
                  <li key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="font-medium text-brand-dark-blue">{method.method}</span>
                    <span className="text-brand-gray text-sm">{method.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <Phone className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-brand-dark-blue mb-2">{c.emergencyTitle}</h3>
              <p className="text-brand-gray text-sm mb-4">{c.emergencyDescription}</p>
              <ul className="space-y-3">
                {c.emergencyContacts.map((contact, index) => (
                  <li key={index} className="flex justify-between items-center py-2 bg-white rounded-lg px-4">
                    <span className="font-medium text-brand-dark-blue">{contact.name}</span>
                    <a href={`tel:${contact.number}`} className="text-red-600 font-bold text-lg">{contact.number}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{c.ctaTitle}</h2>
            <p className="text-green-100 mb-8">{c.ctaDescription}</p>
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 font-bold rounded-full"
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
