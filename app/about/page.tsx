'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Shield, Heart, Zap, Target, ArrowRight } from 'lucide-react';

const content = {
  en: {
    title: 'About SubhYatra',
    subtitle: 'Built in Nepal, for Nepal',
    heroDescription: 'SubhYatra is more than just a ride-hailing app. It\'s a movement to transform transportation in Nepal, built by Nepalis who understand our roads, our people, and our needs.',
    storyTitle: 'Our Story',
    storyContent: `SubhYatra was born from a simple observation: Nepal deserves a ride-hailing platform that truly understands its unique challenges and opportunities.

Our founders experienced firsthand the frustrations of unreliable transportation - waiting endlessly for rides, unpredictable pricing, and safety concerns. They envisioned a platform that would combine the best of modern technology with deep local knowledge.

The name "SubhYatra" (शुभयात्रा) means "Auspicious Journey" in Nepali - reflecting our belief that every ride should be safe, fair, and pleasant. We're not just building an app; we're building trust, one ride at a time.`,
    missionTitle: 'Our Mission',
    missionContent: 'To make safe, affordable, and reliable transportation accessible to every Nepali, while empowering local drivers to earn a dignified livelihood.',
    visionTitle: 'Our Vision',
    visionContent: 'To become Nepal\'s most trusted mobility platform, connecting communities and driving economic growth across the nation.',
    valuesTitle: 'Our Values',
    values: [
      {
        icon: Shield,
        title: 'Safety First',
        description: 'Every decision we make prioritizes the safety of our riders and drivers.',
      },
      {
        icon: Heart,
        title: 'Community Focus',
        description: 'We\'re building for our communities, supporting local drivers and serving local needs.',
      },
      {
        icon: Zap,
        title: 'Innovation',
        description: 'Using smart technology to solve real problems faced by Nepali commuters.',
      },
      {
        icon: Target,
        title: 'Transparency',
        description: 'Fair pricing, clear policies, and honest communication in everything we do.',
      },
    ],
    teamTitle: 'The Team Behind SubhYatra',
    teamDescription: 'SubhYatra is operated by Sankat Mochan Sajilo Yatra Pvt. Ltd., with cutting-edge technology developed by our partners at Nexalaris Tech Pvt. Ltd. Together, we bring deep expertise in transportation, technology, and local market understanding.',
    operatorTitle: 'Service Operator',
    operatorName: 'Sankat Mochan Sajilo Yatra Pvt. Ltd.',
    operatorReg: 'Registration No. 368115/81/82',
    techPartnerTitle: 'Technology Partner',
    techPartnerName: 'Nexalaris Tech Pvt. Ltd.',
    techPartnerReg: 'Registration No. 354796/81/82',
    whyNepalTitle: 'Why We\'re Different',
    whyNepalContent: 'Unlike global platforms, SubhYatra is built from the ground up for Nepal. We understand the narrow gallis of Kathmandu, the winding roads of the hills, and the unique needs of Nepali commuters. Our pricing is fair, our drivers are local, and our commitment is unwavering.',
    ctaTitle: 'Join the Journey',
    ctaDescription: 'Be part of Nepal\'s transportation revolution. Whether you\'re a rider looking for reliable transport or a driver seeking fair opportunities, SubhYatra is for you.',
    joinWaitlist: 'Join the Waitlist',
    driveWithUs: 'Drive With Us',
  },
  ne: {
    title: 'शुभयात्राको बारेमा',
    subtitle: 'नेपालमा निर्मित, नेपालको लागि',
    heroDescription: 'शुभयात्रा केवल राइड-हेलिङ एप मात्र होइन। यो नेपालमा यातायातलाई रूपान्तरण गर्ने आन्दोलन हो, नेपालीहरूले बनाएको जसले हाम्रो सडक, हाम्रो मानिस र हाम्रो आवश्यकता बुझ्छन्।',
    storyTitle: 'हाम्रो कथा',
    storyContent: `शुभयात्राको जन्म एउटा सरल अवलोकनबाट भयो: नेपालले साँच्चै यसको अद्वितीय चुनौती र अवसरहरू बुझ्ने राइड-हेलिङ प्लेटफर्म पाउनु पर्छ।

हाम्रा संस्थापकहरूले अविश्वसनीय यातायातको निराशा प्रत्यक्ष अनुभव गरे - सवारीको लागि अनन्त प्रतीक्षा, अप्रत्याशित मूल्य निर्धारण, र सुरक्षा चिन्ताहरू। उनीहरूले एउटा प्लेटफर्मको कल्पना गरे जसले आधुनिक प्रविधिको उत्कृष्टता र गहिरो स्थानीय ज्ञानलाई संयोजन गर्नेछ।

"शुभयात्रा" नामको अर्थ नेपालीमा "शुभ यात्रा" हो - यसले हाम्रो विश्वासलाई प्रतिबिम्बित गर्दछ कि हरेक यात्रा सुरक्षित, उचित र सुखद हुनुपर्छ। हामी केवल एप बनाउँदैनौं; हामी विश्वास निर्माण गर्दैछौं, एक-एक यात्रा गर्दै।`,
    missionTitle: 'हाम्रो लक्ष्य',
    missionContent: 'हरेक नेपालीलाई सुरक्षित, किफायती र भरपर्दो यातायात उपलब्ध गराउनु, जबकि स्थानीय चालकहरूलाई सम्मानजनक जीविकोपार्जन गर्न सशक्त बनाउनु।',
    visionTitle: 'हाम्रो दृष्टिकोण',
    visionContent: 'नेपालको सबैभन्दा विश्वसनीय गतिशीलता प्लेटफर्म बन्नु, समुदायहरूलाई जोड्दै र राष्ट्रभर आर्थिक वृद्धि गर्दै।',
    valuesTitle: 'हाम्रा मूल्यहरू',
    values: [
      {
        icon: Shield,
        title: 'सुरक्षा पहिला',
        description: 'हामीले गर्ने हरेक निर्णयले हाम्रा यात्रु र चालकहरूको सुरक्षालाई प्राथमिकता दिन्छ।',
      },
      {
        icon: Heart,
        title: 'समुदाय केन्द्रित',
        description: 'हामी हाम्रा समुदायहरूको लागि निर्माण गर्दैछौं, स्थानीय चालकहरूलाई समर्थन गर्दै र स्थानीय आवश्यकताहरू पूरा गर्दै।',
      },
      {
        icon: Zap,
        title: 'नवीनता',
        description: 'नेपाली यात्रुहरूले सामना गर्ने वास्तविक समस्याहरू समाधान गर्न स्मार्ट प्रविधिको प्रयोग।',
      },
      {
        icon: Target,
        title: 'पारदर्शिता',
        description: 'उचित मूल्य निर्धारण, स्पष्ट नीतिहरू, र हरेक कुरामा इमानदार सञ्चार।',
      },
    ],
    teamTitle: 'शुभयात्रा पछाडिको टोली',
    teamDescription: 'शुभयात्रा सङ्कट मोचन सजिलो यात्रा प्रा. लि. द्वारा सञ्चालित छ, Nexalaris Tech Pvt. Ltd. मा हाम्रा साझेदारहरूद्वारा विकसित अत्याधुनिक प्रविधिसहित। सँगै, हामी यातायात, प्रविधि, र स्थानीय बजार बुझाइमा गहिरो विशेषज्ञता ल्याउँछौं।',
    operatorTitle: 'सेवा सञ्चालक',
    operatorName: 'सङ्कट मोचन सजिलो यात्रा प्रा. लि.',
    operatorReg: 'दर्ता नं. ३६८११५/८१/८२',
    techPartnerTitle: 'प्रविधि साझेदार',
    techPartnerName: 'Nexalaris Tech Pvt. Ltd.',
    techPartnerReg: 'दर्ता नं. ३५४७९६/८१/८२',
    whyNepalTitle: 'हामी किन फरक छौं',
    whyNepalContent: 'विश्वव्यापी प्लेटफर्महरूसँग फरक, शुभयात्रा नेपालको लागि शुरुदेखि नै निर्मित छ। हामी काठमाडौंको साँघुरो गल्लीहरू, पहाडका घुमाउरो सडकहरू, र नेपाली यात्रुहरूको अद्वितीय आवश्यकताहरू बुझ्दछौं। हाम्रो मूल्य निर्धारण उचित छ, हाम्रा चालकहरू स्थानीय छन्, र हाम्रो प्रतिबद्धता अटल छ।',
    ctaTitle: 'यात्रामा सामेल हुनुहोस्',
    ctaDescription: 'नेपालको यातायात क्रान्तिको हिस्सा बन्नुहोस्। तपाईं भरपर्दो यातायात खोज्ने यात्रु हुनुहुन्छ वा उचित अवसर खोज्ने चालक, शुभयात्रा तपाईंको लागि हो।',
    joinWaitlist: 'प्रतीक्षा सूचीमा सामेल हुनुहोस्',
    driveWithUs: 'हामीसँग ड्राइभ गर्नुहोस्',
  },
};

export default function AboutPage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Hero Section */}
      <section className="bg-brand-dark-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-brand-yellow/20 text-brand-yellow px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {c.subtitle}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{c.title}</h1>
            <p className="text-lg md:text-xl text-gray-300">{c.heroDescription}</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">{c.storyTitle}</h2>
            <div className="prose prose-lg text-brand-gray whitespace-pre-line">
              {c.storyContent}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-brand-dark-blue" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark-blue mb-4">{c.missionTitle}</h3>
              <p className="text-brand-gray">{c.missionContent}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-brand-dark-blue rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-brand-yellow" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark-blue mb-4">{c.visionTitle}</h3>
              <p className="text-brand-gray">{c.visionContent}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark-blue text-center mb-12">{c.valuesTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {c.values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-brand-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-brand-yellow" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark-blue mb-2">{value.title}</h3>
                <p className="text-brand-gray text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-16 md:py-24 bg-brand-dark-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{c.whyNepalTitle}</h2>
            <p className="text-lg text-gray-300">{c.whyNepalContent}</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-dark-blue text-center mb-6">{c.teamTitle}</h2>
            <p className="text-brand-gray text-center mb-12">{c.teamDescription}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-brand-dark-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark-blue">{c.operatorTitle}</h4>
                  </div>
                </div>
                <p className="font-semibold text-brand-dark-blue">{c.operatorName}</p>
                <p className="text-sm text-brand-gray">{c.operatorReg}</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-dark-blue rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark-blue">{c.techPartnerTitle}</h4>
                  </div>
                </div>
                <p className="font-semibold text-brand-dark-blue">{c.techPartnerName}</p>
                <p className="text-sm text-brand-gray">{c.techPartnerReg}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
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
                <Link href="/drive">{c.driveWithUs}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
