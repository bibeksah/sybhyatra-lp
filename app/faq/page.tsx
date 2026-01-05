'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown, HelpCircle, Car, Users, Shield, CreditCard, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: React.ElementType;
  items: FAQItem[];
}

const content = {
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to common questions about SubhYatra',
    heroDescription: 'Can\'t find what you\'re looking for? Contact our support team for help.',
    categories: [
      {
        title: 'For Riders',
        icon: Users,
        items: [
          {
            question: 'How do I book a ride?',
            answer: 'Download the SubhYatra app, sign up with your phone number or email, enter your pickup and drop-off locations, choose your preferred vehicle type, and confirm your booking. A nearby driver will be assigned to you.',
          },
          {
            question: 'What vehicle types are available?',
            answer: 'We offer four vehicle types: Bike (for solo travelers), Car Basic (comfortable sedans), Car Premium (premium vehicles), and SUV (for groups or extra luggage). Choose based on your needs and budget.',
          },
          {
            question: 'How is the fare calculated?',
            answer: 'Fares are calculated based on distance, time, and vehicle type. The estimated fare is shown before you confirm your booking. There are no hidden fees - what you see is what you pay.',
          },
          {
            question: 'What payment methods are accepted?',
            answer: 'Currently, we accept cash payments. eSewa integration will be available soon for digital payments.',
          },
          {
            question: 'Can I cancel my ride?',
            answer: 'Yes, you can cancel a ride before the driver arrives at no charge. Cancellation after the driver has arrived may incur a fee, which will be clearly displayed in the app.',
          },
          {
            question: 'How do I contact my driver?',
            answer: 'Once a driver is assigned, you can contact them through the in-app call or message feature. Your personal phone number remains private.',
          },
          {
            question: 'Can I book intercity rides?',
            answer: 'Yes! SubhYatra supports intercity travel between major cities. Simply enter your destination and choose from available vehicle options. Only highly-rated drivers are eligible for intercity trips.',
          },
        ],
      },
      {
        title: 'For Drivers',
        icon: Car,
        items: [
          {
            question: 'How do I become a SubhYatra driver?',
            answer: 'Download the app, register as a driver, submit your documents (driving license, vehicle registration, insurance), complete the verification process, and start accepting rides once approved.',
          },
          {
            question: 'What are the requirements to drive?',
            answer: 'You must be at least 21 years old, have a valid driving license for at least 1 year, pass our background check, and have a vehicle that meets our standards (bikes max 5 years old, cars max 8 years old).',
          },
          {
            question: 'What commission does SubhYatra charge?',
            answer: 'Our standard commission is 15% of each fare. Platinum-tier drivers with perfect scores enjoy a reduced rate of 13%. This is one of the lowest commission rates in Nepal.',
          },
          {
            question: 'How does the driver scoring system work?',
            answer: 'Your score ranges from 0-100 and affects your ride allocation. You earn points by completing rides and accepting requests, and lose points for cancellations. Higher scores unlock benefits like priority dispatch and lower commission.',
          },
          {
            question: 'How do I receive my earnings?',
            answer: 'Currently, drivers collect fares directly from passengers in cash. The commission is tracked automatically, and settlement processes will be communicated separately.',
          },
          {
            question: 'Can I drive for both city and intercity rides?',
            answer: 'City rides are available to all active drivers. For intercity rides, you need a score of 80+, at least 30 completed rides, and must opt-in for intercity service in your settings.',
          },
        ],
      },
      {
        title: 'Account & Verification',
        icon: Shield,
        items: [
          {
            question: 'How do I create an account?',
            answer: 'Download the SubhYatra app and sign up using your phone number or email. You\'ll receive a verification code to confirm your account.',
          },
          {
            question: 'Is my personal information secure?',
            answer: 'Yes. We use industry-standard encryption to protect your data. Your personal information is never shared with third parties without your consent. Read our Privacy Policy for details.',
          },
          {
            question: 'How long does driver verification take?',
            answer: 'Document verification typically takes 1-3 business days. We\'ll notify you via the app and email once your account is approved.',
          },
          {
            question: 'Why was my account suspended?',
            answer: 'Accounts may be suspended for safety violations, fraudulent activity, low driver scores, or document issues. Check your email or app notifications for details, and contact support to appeal.',
          },
          {
            question: 'How do I update my profile information?',
            answer: 'Go to Settings in the app and select Edit Profile. You can update your photo, phone number, and other details. Some changes may require reverification.',
          },
        ],
      },
      {
        title: 'Payments & Pricing',
        icon: CreditCard,
        items: [
          {
            question: 'Are there any hidden fees?',
            answer: 'No. The fare shown before booking is the final amount you pay. Any applicable fees (like cancellation charges) are clearly displayed.',
          },
          {
            question: 'Do you have surge pricing?',
            answer: 'We believe in fair pricing. While fares may vary based on demand, we don\'t engage in excessive surge pricing that some other platforms are known for.',
          },
          {
            question: 'How do I get a receipt?',
            answer: 'A digital receipt is automatically generated after each completed ride. You can view and download receipts from your ride history in the app.',
          },
          {
            question: 'What if I was charged incorrectly?',
            answer: 'If you believe there was a fare error, report it through the app within 48 hours. Our team will review and make corrections if needed.',
          },
          {
            question: 'What are the cancellation fees?',
            answer: 'Cancellation before the driver starts moving is free. Cancellation after the driver starts toward pickup incurs a small fee to compensate the driver for their time and fuel.',
          },
        ],
      },
    ] as FAQCategory[],
    contactTitle: 'Still have questions?',
    contactDescription: 'Our support team is ready to help you with any other questions.',
    contactButton: 'Contact Support',
    driverAgreementNote: 'For detailed terms about driving with SubhYatra, please read our',
    driverAgreementLink: 'Driver Agreement',
  },
  ne: {
    title: 'बारम्बार सोधिने प्रश्नहरू',
    subtitle: 'शुभयात्राको बारेमा सामान्य प्रश्नहरूको जवाफ खोज्नुहोस्',
    heroDescription: 'जे खोज्दै हुनुहुन्छ भेट्टाउन सकिरहनुभएको छैन? मद्दतको लागि हाम्रो सहायता टोलीलाई सम्पर्क गर्नुहोस्।',
    categories: [
      {
        title: 'यात्रुहरूको लागि',
        icon: Users,
        items: [
          {
            question: 'म कसरी सवारी बुक गर्छु?',
            answer: 'शुभयात्रा एप डाउनलोड गर्नुहोस्, आफ्नो फोन नम्बर वा इमेलले साइन अप गर्नुहोस्, पिकअप र ड्रप-अफ स्थानहरू प्रविष्ट गर्नुहोस्, आफ्नो मनपर्ने सवारी प्रकार छान्नुहोस्, र बुकिङ पुष्टि गर्नुहोस्। नजिकको चालक तपाईंलाई तोकिनेछ।',
          },
          {
            question: 'कुन सवारी प्रकारहरू उपलब्ध छन्?',
            answer: 'हामी चार प्रकारका सवारी प्रदान गर्छौं: बाइक (एकल यात्रुहरूको लागि), कार बेसिक (आरामदायी सेडान), कार प्रिमियम (प्रिमियम सवारी), र SUV (समूह वा थप सामानको लागि)। आफ्नो आवश्यकता र बजेट अनुसार छान्नुहोस्।',
          },
          {
            question: 'भाडा कसरी गणना गरिन्छ?',
            answer: 'भाडा दूरी, समय, र सवारी प्रकारमा आधारित गणना गरिन्छ। अनुमानित भाडा बुकिङ पुष्टि गर्नु अघि देखाइन्छ। कुनै लुकेको शुल्क छैन - जे देख्नुहुन्छ त्यही तिर्नुहुन्छ।',
          },
          {
            question: 'कुन भुक्तानी विधिहरू स्वीकृत छन्?',
            answer: 'हाल, हामी नगद भुक्तानी स्वीकार गर्छौं। डिजिटल भुक्तानीको लागि eSewa एकीकरण चाँडै उपलब्ध हुनेछ।',
          },
          {
            question: 'के म मेरो सवारी रद्द गर्न सक्छु?',
            answer: 'हो, तपाईं चालक आइपुग्नु अघि कुनै शुल्क बिना सवारी रद्द गर्न सक्नुहुन्छ। चालक आइपुगेपछि रद्द गर्दा शुल्क लाग्न सक्छ, जुन एपमा स्पष्ट रूपमा देखाइनेछ।',
          },
          {
            question: 'म मेरो चालकलाई कसरी सम्पर्क गर्छु?',
            answer: 'एक पटक चालक तोकिएपछि, तपाईं इन-एप कल वा सन्देश सुविधा मार्फत उनीहरूलाई सम्पर्क गर्न सक्नुहुन्छ। तपाईंको व्यक्तिगत फोन नम्बर निजी रहन्छ।',
          },
          {
            question: 'के म अन्तरशहर सवारी बुक गर्न सक्छु?',
            answer: 'हो! शुभयात्राले प्रमुख शहरहरू बीच अन्तरशहर यात्रा समर्थन गर्दछ। बस आफ्नो गन्तव्य प्रविष्ट गर्नुहोस् र उपलब्ध सवारी विकल्पहरूबाट छान्नुहोस्। उच्च-रेटिङ भएका चालकहरू मात्र अन्तरशहर यात्राको लागि योग्य छन्।',
          },
        ],
      },
      {
        title: 'चालकहरूको लागि',
        icon: Car,
        items: [
          {
            question: 'म कसरी शुभयात्रा चालक बन्छु?',
            answer: 'एप डाउनलोड गर्नुहोस्, चालकको रूपमा दर्ता गर्नुहोस्, आफ्ना कागजातहरू (ड्राइभिङ लाइसेन्स, सवारी दर्ता, बीमा) पेश गर्नुहोस्, प्रमाणीकरण प्रक्रिया पूरा गर्नुहोस्, र स्वीकृत भएपछि सवारी स्वीकार गर्न सुरु गर्नुहोस्।',
          },
          {
            question: 'ड्राइभ गर्न के आवश्यकताहरू छन्?',
            answer: 'तपाईं कम्तिमा २१ वर्षको हुनुपर्छ, कम्तिमा १ वर्षको वैध ड्राइभिङ लाइसेन्स हुनुपर्छ, हाम्रो पृष्ठभूमि जाँच पास गर्नुपर्छ, र हाम्रो मापदण्ड पूरा गर्ने सवारी हुनुपर्छ (बाइक अधिकतम ५ वर्ष पुरानो, कार अधिकतम ८ वर्ष पुरानो)।',
          },
          {
            question: 'शुभयात्राले कति कमिसन लिन्छ?',
            answer: 'हाम्रो मानक कमिसन प्रत्येक भाडाको १५% हो। पूर्ण स्कोर भएका प्लाटिनम-टियर चालकहरूले १३% को कम दर पाउँछन्। यो नेपालमा सबैभन्दा कम कमिसन दरहरू मध्ये एक हो।',
          },
          {
            question: 'चालक स्कोरिङ प्रणाली कसरी काम गर्छ?',
            answer: 'तपाईंको स्कोर ०-१०० सम्म हुन्छ र तपाईंको सवारी आवंटनमा प्रभाव पार्छ। तपाईं सवारी पूरा गरेर र अनुरोधहरू स्वीकार गरेर अंक कमाउनुहुन्छ, र रद्दको लागि अंक गुमाउनुहुन्छ। उच्च स्कोरले प्राथमिकता डिस्प्याच र कम कमिसन जस्ता लाभहरू अनलक गर्दछ।',
          },
          {
            question: 'म मेरो आम्दानी कसरी प्राप्त गर्छु?',
            answer: 'हाल, चालकहरूले यात्रुहरूबाट सिधै नगद भाडा संकलन गर्छन्। कमिसन स्वचालित रूपमा ट्र्याक गरिन्छ, र सेटलमेन्ट प्रक्रियाहरू अलग रूपमा सञ्चार गरिनेछ।',
          },
          {
            question: 'के म शहर र अन्तरशहर दुवै सवारीको लागि ड्राइभ गर्न सक्छु?',
            answer: 'शहर सवारी सबै सक्रिय चालकहरूलाई उपलब्ध छ। अन्तरशहर सवारीको लागि, तपाईंलाई ८०+ स्कोर, कम्तिमा ३० पूरा गरिएका सवारी, र आफ्नो सेटिङमा अन्तरशहर सेवाको लागि अप्ट-इन गर्नुपर्छ।',
          },
        ],
      },
      {
        title: 'खाता र प्रमाणीकरण',
        icon: Shield,
        items: [
          {
            question: 'म कसरी खाता बनाउँछु?',
            answer: 'शुभयात्रा एप डाउनलोड गर्नुहोस् र आफ्नो फोन नम्बर वा इमेल प्रयोग गरेर साइन अप गर्नुहोस्। तपाईंले आफ्नो खाता पुष्टि गर्न प्रमाणीकरण कोड प्राप्त गर्नुहुनेछ।',
          },
          {
            question: 'के मेरो व्यक्तिगत जानकारी सुरक्षित छ?',
            answer: 'हो। हामी तपाईंको डाटा सुरक्षित गर्न उद्योग-मानक इन्क्रिप्सन प्रयोग गर्छौं। तपाईंको व्यक्तिगत जानकारी तपाईंको सहमति बिना तेस्रो पक्षसँग कहिल्यै साझा गरिँदैन। विवरणको लागि हाम्रो गोपनीयता नीति पढ्नुहोस्।',
          },
          {
            question: 'चालक प्रमाणीकरणमा कति समय लाग्छ?',
            answer: 'कागजात प्रमाणीकरण सामान्यतया १-३ व्यापार दिन लाग्छ। तपाईंको खाता स्वीकृत भएपछि हामी तपाईंलाई एप र इमेल मार्फत सूचित गर्नेछौं।',
          },
          {
            question: 'मेरो खाता किन निलम्बन भयो?',
            answer: 'सुरक्षा उल्लंघन, जालसाजी गतिविधि, कम चालक स्कोर, वा कागजात समस्याहरूको लागि खाताहरू निलम्बन हुन सक्छन्। विवरणको लागि आफ्नो इमेल वा एप सूचनाहरू जाँच गर्नुहोस्, र अपील गर्न सहायतालाई सम्पर्क गर्नुहोस्।',
          },
          {
            question: 'म मेरो प्रोफाइल जानकारी कसरी अपडेट गर्छु?',
            answer: 'एपमा सेटिङमा जानुहोस् र प्रोफाइल सम्पादन छान्नुहोस्। तपाईं आफ्नो फोटो, फोन नम्बर, र अन्य विवरणहरू अपडेट गर्न सक्नुहुन्छ। केही परिवर्तनहरूलाई पुन: प्रमाणीकरण आवश्यक हुन सक्छ।',
          },
        ],
      },
      {
        title: 'भुक्तानी र मूल्य निर्धारण',
        icon: CreditCard,
        items: [
          {
            question: 'के कुनै लुकेको शुल्कहरू छन्?',
            answer: 'छैन। बुकिङ अघि देखाइएको भाडा तपाईंले तिर्ने अन्तिम रकम हो। कुनै पनि लागू हुने शुल्कहरू (जस्तै रद्द शुल्क) स्पष्ट रूपमा देखाइन्छन्।',
          },
          {
            question: 'के तपाईंसँग सर्ज प्राइसिङ छ?',
            answer: 'हामी उचित मूल्य निर्धारणमा विश्वास गर्छौं। माग अनुसार भाडा फरक हुन सक्छ, तर हामी अन्य प्लेटफर्महरूले गर्ने जस्तो अत्यधिक सर्ज प्राइसिङ गर्दैनौं।',
          },
          {
            question: 'म कसरी रसिद प्राप्त गर्छु?',
            answer: 'प्रत्येक पूरा भएको सवारी पछि डिजिटल रसिद स्वचालित रूपमा उत्पन्न हुन्छ। तपाईं एपमा आफ्नो सवारी इतिहासबाट रसिदहरू हेर्न र डाउनलोड गर्न सक्नुहुन्छ।',
          },
          {
            question: 'यदि मलाई गलत रूपमा शुल्क लगाइयो भने?',
            answer: 'यदि तपाईंलाई भाडा त्रुटि भएको लाग्छ भने, ४८ घण्टा भित्र एप मार्फत रिपोर्ट गर्नुहोस्। हाम्रो टोलीले समीक्षा गर्नेछ र आवश्यक भएमा सुधार गर्नेछ।',
          },
          {
            question: 'रद्द शुल्कहरू के हुन्?',
            answer: 'चालकले हिँड्न सुरु गर्नु अघि रद्द गर्नु निःशुल्क छ। चालकले पिकअपतर्फ हिँड्न सुरु गरेपछि रद्द गर्दा चालकको समय र इन्धनको क्षतिपूर्तिको लागि सानो शुल्क लाग्छ।',
          },
        ],
      },
    ] as FAQCategory[],
    contactTitle: 'अझै प्रश्नहरू छन्?',
    contactDescription: 'हाम्रो सहायता टोली तपाईंलाई अन्य कुनै प्रश्नहरूमा मद्दत गर्न तयार छ।',
    contactButton: 'सहायता सम्पर्क गर्नुहोस्',
    driverAgreementNote: 'शुभयात्रासँग ड्राइभिङको बारेमा विस्तृत सर्तहरूको लागि, कृपया हाम्रो पढ्नुहोस्',
    driverAgreementLink: 'चालक सम्झौता',
  },
};

function FAQAccordion({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-brand-dark-blue pr-4">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-brand-gray flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 text-brand-gray text-sm leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const { language } = useLanguage();
  const c = content[language];

  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Hero Section */}
      <section className="bg-brand-dark-blue text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <HelpCircle className="w-12 h-12 mx-auto mb-4 text-brand-yellow" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{c.title}</h1>
            <p className="text-xl text-brand-yellow font-semibold mb-2">{c.subtitle}</p>
            <p className="text-gray-300">{c.heroDescription}</p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {c.categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Category Header */}
                <div className="bg-slate-50 px-6 py-4 flex items-center gap-3 border-b">
                  <div className="w-10 h-10 bg-brand-yellow/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <h2 className="text-xl font-bold text-brand-dark-blue">{category.title}</h2>
                </div>

                {/* FAQ Items */}
                <div className="px-6">
                  {category.items.map((item, itemIndex) => (
                    <FAQAccordion
                      key={itemIndex}
                      item={item}
                      isOpen={openItems[`${categoryIndex}-${itemIndex}`] || false}
                      onClick={() => toggleItem(categoryIndex, itemIndex)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Driver Agreement Note */}
          <div className="max-w-4xl mx-auto mt-8 text-center text-brand-gray">
            <p>
              {c.driverAgreementNote}{' '}
              <Link href="/driver-agreement" className="text-brand-yellow hover:underline font-medium">
                {c.driverAgreementLink}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-brand-yellow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-dark-blue mb-4">{c.contactTitle}</h2>
            <p className="text-brand-dark-blue/70 mb-8">{c.contactDescription}</p>
            <Button
              size="lg"
              className="bg-brand-dark-blue text-white hover:bg-brand-dark-blue/90 font-bold rounded-full"
              asChild
            >
              <Link href="/contact">
                {c.contactButton} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
