'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  Wallet,
  Clock,
  TrendingUp,
  Award,
  Shield,
  Smartphone,
  FileCheck,
  Car,
  ArrowRight,
  CheckCircle,
  Users
} from 'lucide-react';

const content = {
  en: {
    title: 'Drive With SubhYatra',
    subtitle: 'Earn on your own terms',
    heroDescription: 'Join Nepal\'s newest ride-hailing platform. Keep more of what you earn with our driver-friendly commission rates.',
    earningsTitle: 'Maximize Your Earnings',
    earningsSubtitle: 'We believe drivers should keep more of what they earn',
    earningsHighlight: '85-87%',
    earningsNote: 'of every fare goes to you',
    commissionTitle: 'Low Commission Rates',
    commissionRates: [
      {
        rate: '15%',
        title: 'Standard Rate',
        description: 'For all active drivers',
      },
      {
        rate: '13%',
        title: 'Platinum Rate',
        description: 'For drivers with perfect scores',
      },
    ],
    benefitsTitle: 'Why Drive with SubhYatra?',
    benefits: [
      {
        icon: Wallet,
        title: 'Competitive Earnings',
        description: 'Lowest commission in Nepal. Keep more of every fare you earn.',
      },
      {
        icon: Clock,
        title: 'Flexible Schedule',
        description: 'Work when you want. No minimum hours. Be your own boss.',
      },
      {
        icon: TrendingUp,
        title: 'Incentives & Bonuses',
        description: 'Earn extra during peak hours and through weekly bonuses.',
      },
      {
        icon: Award,
        title: 'Driver Rewards',
        description: 'Platinum drivers get priority dispatch and reduced commission.',
      },
      {
        icon: Shield,
        title: 'Safety Features',
        description: 'SOS button, trip sharing, and 24/7 support for your safety.',
      },
      {
        icon: Smartphone,
        title: 'Easy-to-Use App',
        description: 'Simple interface with navigation, earnings tracking, and more.',
      },
    ],
    requirementsTitle: 'Requirements to Drive',
    driverReqs: {
      title: 'Driver Requirements',
      items: [
        'Age 21 years or above',
        'Valid driving license (1+ year)',
        'Clean background check',
        'Smartphone with data plan',
        'Basic smartphone knowledge',
      ],
    },
    vehicleReqs: {
      title: 'Vehicle Requirements',
      items: [
        'Bikes: Maximum 5 years old',
        'Cars: Maximum 8 years old',
        'Valid registration (Bluebook)',
        'Valid insurance certificate',
        'Good mechanical condition',
        'Clean and well-maintained',
      ],
    },
    documentsTitle: 'Documents Needed',
    documents: [
      'Citizenship certificate or national ID',
      'Driving license (appropriate category)',
      'Vehicle registration certificate',
      'Vehicle insurance certificate',
      'PUC certificate',
      'Recent passport-size photograph',
    ],
    scoringTitle: 'Driver Scoring System',
    scoringDescription: 'Your performance is measured through our fair scoring system. Higher scores mean better earnings and more ride requests.',
    tiers: [
      {
        name: 'Platinum',
        score: '90-100',
        benefits: 'Priority dispatch, 13% commission, premium badge',
        color: 'bg-gradient-to-r from-gray-300 to-gray-400',
      },
      {
        name: 'Gold',
        score: '75-89',
        benefits: 'Standard benefits, good ride allocation',
        color: 'bg-gradient-to-r from-yellow-400 to-yellow-500',
      },
      {
        name: 'Silver',
        score: '60-74',
        benefits: 'Reduced ride allocation, improvement needed',
        color: 'bg-gradient-to-r from-gray-400 to-gray-500',
      },
    ],
    howToJoinTitle: 'How to Join',
    howToJoinSteps: [
      {
        number: '1',
        title: 'Download the App',
        description: 'Get SubhYatra from Google Play Store when we launch',
      },
      {
        number: '2',
        title: 'Register as Driver',
        description: 'Fill in your details and upload required documents',
      },
      {
        number: '3',
        title: 'Verification',
        description: 'We\'ll verify your documents and background',
      },
      {
        number: '4',
        title: 'Start Earning',
        description: 'Once approved, go online and start accepting rides',
      },
    ],
    ctaTitle: 'Ready to Start Earning?',
    ctaDescription: 'Join the waitlist now and be among the first drivers when we launch.',
    joinWaitlist: 'Join Driver Waitlist',
    learnMore: 'Read Driver Agreement',
  },
  ne: {
    title: 'शुभयात्रासँग ड्राइभ गर्नुहोस्',
    subtitle: 'आफ्नै सर्तमा कमाउनुहोस्',
    heroDescription: 'नेपालको नयाँ राइड-हेलिङ प्लेटफर्ममा सामेल हुनुहोस्। हाम्रो चालक-मैत्री कमिसन दरहरूसँग तपाईंले कमाएको बढी राख्नुहोस्।',
    earningsTitle: 'आफ्नो आम्दानी अधिकतम बनाउनुहोस्',
    earningsSubtitle: 'हामी विश्वास गर्छौं चालकहरूले आफूले कमाएको बढी राख्नुपर्छ',
    earningsHighlight: '८५-८७%',
    earningsNote: 'हरेक भाडाको तपाईंलाई जान्छ',
    commissionTitle: 'कम कमिसन दर',
    commissionRates: [
      {
        rate: '१५%',
        title: 'मानक दर',
        description: 'सबै सक्रिय चालकहरूको लागि',
      },
      {
        rate: '१३%',
        title: 'प्लाटिनम दर',
        description: 'पूर्ण स्कोर भएका चालकहरूको लागि',
      },
    ],
    benefitsTitle: 'शुभयात्रासँग किन ड्राइभ गर्ने?',
    benefits: [
      {
        icon: Wallet,
        title: 'प्रतिस्पर्धी आम्दानी',
        description: 'नेपालमा सबैभन्दा कम कमिसन। तपाईंले कमाउनुभएको हरेक भाडाबाट बढी राख्नुहोस्।',
      },
      {
        icon: Clock,
        title: 'लचिलो समय तालिका',
        description: 'जहिले चाहानुहुन्छ काम गर्नुहोस्। न्यूनतम घण्टा छैन। आफ्नै मालिक बन्नुहोस्।',
      },
      {
        icon: TrendingUp,
        title: 'प्रोत्साहन र बोनस',
        description: 'पिक समयमा र साप्ताहिक बोनसहरू मार्फत थप कमाउनुहोस्।',
      },
      {
        icon: Award,
        title: 'चालक पुरस्कार',
        description: 'प्लाटिनम चालकहरूले प्राथमिकता डिस्प्याच र कम कमिसन पाउँछन्।',
      },
      {
        icon: Shield,
        title: 'सुरक्षा सुविधाहरू',
        description: 'तपाईंको सुरक्षाको लागि SOS बटन, यात्रा साझेदारी, र २४/७ सहायता।',
      },
      {
        icon: Smartphone,
        title: 'प्रयोग गर्न सजिलो एप',
        description: 'नेभिगेसन, आम्दानी ट्र्याकिङ, र थप सहित सरल इन्टरफेस।',
      },
    ],
    requirementsTitle: 'ड्राइभ गर्न आवश्यकताहरू',
    driverReqs: {
      title: 'चालक आवश्यकताहरू',
      items: [
        '२१ वर्ष वा माथिको उमेर',
        'वैध ड्राइभिङ लाइसेन्स (१+ वर्ष)',
        'स्वच्छ पृष्ठभूमि जाँच',
        'डाटा प्लान सहित स्मार्टफोन',
        'आधारभूत स्मार्टफोन ज्ञान',
      ],
    },
    vehicleReqs: {
      title: 'सवारी आवश्यकताहरू',
      items: [
        'बाइक: अधिकतम ५ वर्ष पुरानो',
        'कार: अधिकतम ८ वर्ष पुरानो',
        'वैध दर्ता (ब्लुबुक)',
        'वैध बीमा प्रमाणपत्र',
        'राम्रो मेकानिकल अवस्था',
        'सफा र राम्रोसँग मर्मत गरिएको',
      ],
    },
    documentsTitle: 'आवश्यक कागजातहरू',
    documents: [
      'नागरिकता प्रमाणपत्र वा राष्ट्रिय परिचयपत्र',
      'ड्राइभिङ लाइसेन्स (उपयुक्त वर्ग)',
      'सवारी दर्ता प्रमाणपत्र',
      'सवारी बीमा प्रमाणपत्र',
      'PUC प्रमाणपत्र',
      'हालको पासपोर्ट साइज फोटो',
    ],
    scoringTitle: 'चालक स्कोरिङ प्रणाली',
    scoringDescription: 'तपाईंको प्रदर्शन हाम्रो उचित स्कोरिङ प्रणाली मार्फत मापन गरिन्छ। उच्च स्कोरको अर्थ राम्रो आम्दानी र बढी सवारी अनुरोधहरू।',
    tiers: [
      {
        name: 'प्लाटिनम',
        score: '९०-१००',
        benefits: 'प्राथमिकता डिस्प्याच, १३% कमिसन, प्रिमियम ब्याज',
        color: 'bg-gradient-to-r from-gray-300 to-gray-400',
      },
      {
        name: 'गोल्ड',
        score: '७५-८९',
        benefits: 'मानक लाभहरू, राम्रो सवारी आवंटन',
        color: 'bg-gradient-to-r from-yellow-400 to-yellow-500',
      },
      {
        name: 'सिल्भर',
        score: '६०-७४',
        benefits: 'कम सवारी आवंटन, सुधार आवश्यक',
        color: 'bg-gradient-to-r from-gray-400 to-gray-500',
      },
    ],
    howToJoinTitle: 'कसरी सामेल हुने',
    howToJoinSteps: [
      {
        number: '१',
        title: 'एप डाउनलोड गर्नुहोस्',
        description: 'हामी लन्च गर्दा Google Play Store बाट शुभयात्रा प्राप्त गर्नुहोस्',
      },
      {
        number: '२',
        title: 'चालकको रूपमा दर्ता गर्नुहोस्',
        description: 'आफ्नो विवरण भर्नुहोस् र आवश्यक कागजातहरू अपलोड गर्नुहोस्',
      },
      {
        number: '३',
        title: 'प्रमाणीकरण',
        description: 'हामी तपाईंको कागजातहरू र पृष्ठभूमि प्रमाणित गर्नेछौं',
      },
      {
        number: '४',
        title: 'कमाउन सुरु गर्नुहोस्',
        description: 'स्वीकृत भएपछि, अनलाइन जानुहोस् र सवारी स्वीकार गर्न सुरु गर्नुहोस्',
      },
    ],
    ctaTitle: 'कमाउन सुरु गर्न तयार?',
    ctaDescription: 'अहिले प्रतीक्षा सूचीमा सामेल हुनुहोस् र हामी लन्च गर्दा पहिलो चालकहरूमा हुनुहोस्।',
    joinWaitlist: 'चालक प्रतीक्षा सूचीमा सामेल हुनुहोस्',
    learnMore: 'चालक सम्झौता पढ्नुहोस्',
  },
};

export default function DrivePage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Hero Section */}
      <section className="bg-brand-dark-blue text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{c.title}</h1>
            <p className="text-xl text-brand-yellow font-semibold mb-4">{c.subtitle}</p>
            <p className="text-lg text-gray-300">{c.heroDescription}</p>
          </div>
        </div>
      </section>

      {/* Earnings Highlight */}
      <section className="py-16 md:py-24 bg-brand-yellow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-dark-blue mb-2">{c.earningsTitle}</h2>
            <p className="text-brand-dark-blue/70 mb-8">{c.earningsSubtitle}</p>
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-8xl font-bold text-brand-dark-blue">{c.earningsHighlight}</span>
              <span className="text-xl text-brand-dark-blue/70 mt-2">{c.earningsNote}</span>
            </div>

            {/* Commission Rates */}
            <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
              {c.commissionRates.map((rate, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <span className="text-4xl font-bold text-brand-dark-blue">{rate.rate}</span>
                  <h3 className="text-lg font-bold text-brand-dark-blue mt-2">{rate.title}</h3>
                  <p className="text-brand-gray text-sm">{rate.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark-blue text-center mb-12">{c.benefitsTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {c.benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-brand-yellow" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark-blue mb-2">{benefit.title}</h3>
                <p className="text-brand-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark-blue text-center mb-12">{c.requirementsTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Driver Requirements */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-brand-yellow" />
                <h3 className="text-xl font-bold text-brand-dark-blue">{c.driverReqs.title}</h3>
              </div>
              <ul className="space-y-3">
                {c.driverReqs.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-brand-gray">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vehicle Requirements */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-6 h-6 text-brand-yellow" />
                <h3 className="text-xl font-bold text-brand-dark-blue">{c.vehicleReqs.title}</h3>
              </div>
              <ul className="space-y-3">
                {c.vehicleReqs.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-brand-gray">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Documents */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-6 h-6 text-brand-yellow" />
                <h3 className="text-xl font-bold text-brand-dark-blue">{c.documentsTitle}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {c.documents.map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 text-brand-gray">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {doc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring System */}
      <section className="py-16 md:py-24 bg-brand-dark-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{c.scoringTitle}</h2>
              <p className="text-gray-300">{c.scoringDescription}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {c.tiers.map((tier, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                  <div className={`w-16 h-16 ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Award className="w-8 h-8 text-brand-dark-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                  <span className="text-brand-yellow font-semibold">{tier.score}</span>
                  <p className="text-gray-400 text-sm mt-2">{tier.benefits}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark-blue text-center mb-12">{c.howToJoinTitle}</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {c.howToJoinSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-14 h-14 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-brand-dark-blue">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-brand-dark-blue mb-2">{step.title}</h3>
                <p className="text-brand-gray text-sm">{step.description}</p>
                {index < c.howToJoinSteps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-0.5 bg-brand-yellow/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-dark-blue mb-4">{c.ctaTitle}</h2>
            <p className="text-brand-gray mb-8">{c.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-yellow text-brand-dark-blue hover:bg-brand-yellow/90 font-bold rounded-full"
                asChild
              >
                <Link href="/#waitlist-form">
                  {c.joinWaitlist} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-dark-blue text-brand-dark-blue hover:bg-brand-dark-blue hover:text-white font-bold rounded-full"
                asChild
              >
                <Link href="/driver-agreement">{c.learnMore}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
