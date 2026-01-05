'use client';

import { LegalPageLayout } from '@/components/legal/LegalPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  en: {
    title: 'Cancellation Policy',
    lastUpdated: 'January 2025',
    tableOfContents: [
      { id: 'overview', title: 'Overview' },
      { id: 'passenger-cancellation', title: 'Passenger Cancellation' },
      { id: 'driver-cancellation', title: 'Driver Cancellation' },
      { id: 'no-show', title: 'No-Show Policy' },
      { id: 'system-cancellation', title: 'System Cancellation' },
      { id: 'intercity', title: 'Intercity Ride Cancellation' },
      { id: 'disputes', title: 'Dispute Resolution' },
      { id: 'fair-use', title: 'Fair Use Policy' },
      { id: 'refunds', title: 'Refund Policy' },
      { id: 'emergency', title: 'Emergency Situations' },
      { id: 'contact', title: 'Contact Information' },
    ],
  },
  ne: {
    title: 'रद्द नीति',
    lastUpdated: 'जनवरी २०२५',
    tableOfContents: [
      { id: 'overview', title: 'अवलोकन' },
      { id: 'passenger-cancellation', title: 'यात्रु रद्दीकरण' },
      { id: 'driver-cancellation', title: 'चालक रद्दीकरण' },
      { id: 'no-show', title: 'नो-शो नीति' },
      { id: 'system-cancellation', title: 'प्रणाली रद्दीकरण' },
      { id: 'intercity', title: 'अन्तर-शहर यात्रा रद्दीकरण' },
      { id: 'disputes', title: 'विवाद समाधान' },
      { id: 'fair-use', title: 'उचित प्रयोग नीति' },
      { id: 'refunds', title: 'फिर्ता नीति' },
      { id: 'emergency', title: 'आपतकालीन परिस्थितिहरू' },
      { id: 'contact', title: 'सम्पर्क जानकारी' },
    ],
  },
};

export default function CancellationPolicyPage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <LegalPageLayout
      title={c.title}
      lastUpdated={c.lastUpdated}
      tableOfContents={c.tableOfContents}
      language={language}
    >
      {/* Overview */}
      <section id="overview" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? '1. Overview' : '१. अवलोकन'}
        </h2>
        <p className="text-gray-700 mb-4">
          {language === 'en'
            ? 'This Cancellation Policy outlines the terms and conditions for cancelling ride requests on the SubhYatra platform. This policy applies to both passengers and driver-partners and is designed to ensure fairness for all parties while maintaining service quality.'
            : 'यो रद्द नीतिले शुभयात्रा प्लेटफर्ममा यात्रा अनुरोधहरू रद्द गर्ने सर्तहरू र शर्तहरू रूपरेखा गर्दछ। यो नीति यात्रुहरू र चालक-साझेदारहरू दुवैमा लागू हुन्छ र सेवा गुणस्तर कायम राख्दै सबै पक्षहरूको लागि निष्पक्षता सुनिश्चित गर्न डिजाइन गरिएको हो।'}
        </p>
      </section>

      {/* Passenger Cancellation */}
      <section id="passenger-cancellation" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? '2. Passenger Cancellation' : '२. यात्रु रद्दीकरण'}
        </h2>

        <h3 className="text-xl font-semibold mb-3">
          {language === 'en' ? '2.1 Free Cancellation Window' : '२.१ निःशुल्क रद्दीकरण समय'}
        </h3>
        <p className="mb-4">
          {language === 'en'
            ? 'Passengers may cancel a ride without penalty under the following conditions:'
            : 'यात्रुहरूले निम्न अवस्थाहरूमा दण्ड बिना यात्रा रद्द गर्न सक्छन्:'}
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-brand-dark-blue text-white">
                <th className="border border-gray-300 p-3 text-left">
                  {language === 'en' ? 'Ride Type' : 'यात्रा प्रकार'}
                </th>
                <th className="border border-gray-300 p-3 text-left">
                  {language === 'en' ? 'Free Cancellation Period' : 'निःशुल्क रद्दीकरण अवधि'}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3">
                  {language === 'en' ? 'City Rides' : 'शहरी यात्राहरू'}
                </td>
                <td className="border border-gray-300 p-3">
                  {language === 'en'
                    ? 'Within 2 minutes of booking confirmation'
                    : 'बुकिङ पुष्टि भएको २ मिनेट भित्र'}
                </td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-gray-300 p-3">
                  {language === 'en' ? 'Intercity Rides' : 'अन्तर-शहर यात्राहरू'}
                </td>
                <td className="border border-gray-300 p-3">
                  {language === 'en'
                    ? 'Within 5 minutes of booking confirmation'
                    : 'बुकिङ पुष्टि भएको ५ मिनेट भित्र'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-3">
          {language === 'en' ? '2.2 Cancellation After Free Window' : '२.२ निःशुल्क समय पछि रद्दीकरण'}
        </h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-brand-dark-blue text-white">
                <th className="border border-gray-300 p-3 text-left">
                  {language === 'en' ? 'Cancellation Timing' : 'रद्दीकरण समय'}
                </th>
                <th className="border border-gray-300 p-3 text-left">
                  {language === 'en' ? 'Consequence' : 'परिणाम'}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3">
                  {language === 'en' ? 'Before driver starts moving' : 'चालक सर्न थाल्नु अघि'}
                </td>
                <td className="border border-gray-300 p-3">
                  {language === 'en'
                    ? 'Warning recorded; 3rd occurrence in 24 hours may result in temporary restriction'
                    : 'चेतावनी रेकर्ड गरियो; २४ घण्टामा तेस्रो घटनाले अस्थायी प्रतिबन्ध हुन सक्छ'}
                </td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-gray-300 p-3">
                  {language === 'en' ? 'After driver starts moving' : 'चालक सर्न थालेपछि'}
                </td>
                <td className="border border-gray-300 p-3">
                  {language === 'en'
                    ? 'Cancellation fee may apply in future updates'
                    : 'भविष्यको अपडेटहरूमा रद्दीकरण शुल्क लाग्न सक्छ'}
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3">
                  {language === 'en' ? 'After driver arrives at pickup' : 'चालक पिकअपमा पुगेपछि'}
                </td>
                <td className="border border-gray-300 p-3">
                  {language === 'en' ? 'No-show rules apply (see Section 4)' : 'नो-शो नियमहरू लागू हुन्छन् (खण्ड ४ हेर्नुहोस्)'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-3">
          {language === 'en' ? '2.3 Valid Reasons for Cancellation' : '२.३ रद्दीकरणको वैध कारणहरू'}
        </h3>
        <p className="mb-2">
          {language === 'en'
            ? 'The following are considered valid reasons for cancellation (no penalty):'
            : 'निम्न रद्दीकरणको वैध कारणहरू मानिन्छन् (कुनै दण्ड छैन):'}
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>{language === 'en' ? 'Driver is significantly delayed beyond estimated arrival' : 'चालक अनुमानित आगमन भन्दा धेरै ढिलो भयो'}</li>
          <li>{language === 'en' ? 'Driver is not heading toward your pickup location' : 'चालक तपाईंको पिकअप स्थानतिर जाँदैन'}</li>
          <li>{language === 'en' ? 'Emergency situation (medical, safety, etc.)' : 'आपतकालीन परिस्थिति (चिकित्सा, सुरक्षा, आदि)'}</li>
          <li>{language === 'en' ? 'Driver requests cancellation' : 'चालकले रद्दीकरण अनुरोध गर्छ'}</li>
          <li>{language === 'en' ? 'Wrong pickup location entered (if corrected immediately)' : 'गलत पिकअप स्थान प्रविष्ट गरियो (यदि तुरुन्तै सच्याइयो भने)'}</li>
          <li>{language === 'en' ? "Driver's vehicle doesn't match the assigned vehicle" : 'चालकको गाडी तोकिएको गाडीसँग मेल खाँदैन'}</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">
          {language === 'en' ? '2.4 Passenger Cancellation Limits' : '२.४ यात्रु रद्दीकरण सीमाहरू'}
        </h3>
        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
          <ul className="space-y-2 text-gray-700">
            <li><strong>{language === 'en' ? 'Daily Limit:' : 'दैनिक सीमा:'}</strong> {language === 'en' ? 'Maximum 3 cancellations per day after free window' : 'निःशुल्क समय पछि प्रति दिन अधिकतम ३ रद्दीकरण'}</li>
            <li><strong>{language === 'en' ? 'Weekly Review:' : 'साप्ताहिक समीक्षा:'}</strong> {language === 'en' ? 'Accounts with excessive cancellations will be reviewed' : 'अत्यधिक रद्दीकरण भएका खाताहरू समीक्षा गरिनेछ'}</li>
            <li><strong>{language === 'en' ? 'Temporary Restriction:' : 'अस्थायी प्रतिबन्ध:'}</strong> {language === 'en' ? 'Repeated abusive cancellations may result in 24-48 hour booking restriction' : 'बारम्बार दुरुपयोगी रद्दीकरणले २४-४८ घण्टा बुकिङ प्रतिबन्ध हुन सक्छ'}</li>
          </ul>
        </div>
      </section>

      {/* Driver Cancellation */}
      <section id="driver-cancellation" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? '3. Driver Cancellation' : '३. चालक रद्दीकरण'}
        </h2>

        <p className="mb-4">
          {language === 'en'
            ? 'Drivers are expected to complete rides they accept. Cancellations are permitted only under specific circumstances.'
            : 'चालकहरूले स्वीकार गरेका यात्राहरू पूरा गर्ने अपेक्षा गरिन्छ। विशेष परिस्थितिहरूमा मात्र रद्दीकरण अनुमति दिइन्छ।'}
        </p>

        <h3 className="text-xl font-semibold mb-3">
          {language === 'en' ? '3.1 Acceptable Reasons' : '३.१ स्वीकार्य कारणहरू'}
        </h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-brand-dark-blue text-white">
                <th className="border border-gray-300 p-3 text-left">{language === 'en' ? 'Reason' : 'कारण'}</th>
                <th className="border border-gray-300 p-3 text-left">{language === 'en' ? 'Score Impact' : 'स्कोर प्रभाव'}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3">{language === 'en' ? 'Passenger no-show (after waiting period)' : 'यात्रु नो-शो (प्रतीक्षा अवधि पछि)'}</td>
                <td className="border border-gray-300 p-3 text-green-600">{language === 'en' ? 'No penalty' : 'कुनै दण्ड छैन'}</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-gray-300 p-3">{language === 'en' ? 'Safety concern' : 'सुरक्षा चिन्ता'}</td>
                <td className="border border-gray-300 p-3 text-green-600">{language === 'en' ? 'No penalty' : 'कुनै दण्ड छैन'}</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3">{language === 'en' ? 'Vehicle breakdown' : 'गाडी बिग्रियो'}</td>
                <td className="border border-gray-300 p-3 text-red-600">-2.0</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-gray-300 p-3">{language === 'en' ? 'Emergency' : 'आपतकालीन'}</td>
                <td className="border border-gray-300 p-3 text-green-600">{language === 'en' ? 'No penalty' : 'कुनै दण्ड छैन'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-3">
          {language === 'en' ? '3.2 Unacceptable Reasons' : '३.२ अस्वीकार्य कारणहरू'}
        </h3>
        <div className="bg-red-50 p-4 rounded-lg mb-6">
          <p className="font-semibold text-red-700 mb-2">{language === 'en' ? 'The following are NOT valid reasons and will incur penalties:' : 'निम्न वैध कारणहरू होइनन् र दण्ड लाग्नेछ:'}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>{language === 'en' ? 'Destination is undesirable' : 'गन्तव्य अवांछनीय छ'}</li>
            <li>{language === 'en' ? 'Fare is too low' : 'भाडा धेरै कम छ'}</li>
            <li>{language === 'en' ? 'Traffic conditions' : 'ट्राफिक अवस्थाहरू'}</li>
            <li>{language === 'en' ? "Passenger's appearance, gender, or perceived background" : 'यात्रुको उपस्थिति, लिङ्ग, वा कथित पृष्ठभूमि'}</li>
            <li>{language === 'en' ? 'Wanting a different ride type' : 'फरक यात्रा प्रकार चाहने'}</li>
            <li>{language === 'en' ? 'Personal errands' : 'व्यक्तिगत कामहरू'}</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-3">
          {language === 'en' ? '3.3 Driver Cancellation Penalties' : '३.३ चालक रद्दीकरण दण्डहरू'}
        </h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-brand-dark-blue text-white">
                <th className="border border-gray-300 p-3 text-left">{language === 'en' ? 'Cancellation Timing' : 'रद्दीकरण समय'}</th>
                <th className="border border-gray-300 p-3 text-left">{language === 'en' ? 'Score Impact' : 'स्कोर प्रभाव'}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3">{language === 'en' ? 'Before moving toward pickup' : 'पिकअपतिर सर्नु अघि'}</td>
                <td className="border border-gray-300 p-3 text-red-600">-2.0 {language === 'en' ? 'points' : 'अंक'}</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-gray-300 p-3">{language === 'en' ? 'After moving toward pickup' : 'पिकअपतिर सरेपछि'}</td>
                <td className="border border-gray-300 p-3 text-red-600">-4.0 {language === 'en' ? 'points' : 'अंक'}</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3">{language === 'en' ? 'Intercity ride cancellation' : 'अन्तर-शहर यात्रा रद्दीकरण'}</td>
                <td className="border border-gray-300 p-3 text-red-600">-6.0 {language === 'en' ? 'points' : 'अंक'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* No-Show Policy */}
      <section id="no-show" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? '4. No-Show Policy' : '४. नो-शो नीति'}
        </h2>

        <h3 className="text-xl font-semibold mb-3">
          {language === 'en' ? '4.1 Passenger No-Show' : '४.१ यात्रु नो-शो'}
        </h3>
        <p className="mb-4">
          {language === 'en'
            ? 'A passenger is considered a "no-show" when they fail to appear at the pickup location within the designated waiting time.'
            : 'यात्रु "नो-शो" मानिन्छ जब तिनीहरू तोकिएको प्रतीक्षा समय भित्र पिकअप स्थानमा उपस्थित हुन असफल हुन्छन्।'}
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-brand-dark-blue text-white">
                <th className="border border-gray-300 p-3 text-left">{language === 'en' ? 'Ride Type' : 'यात्रा प्रकार'}</th>
                <th className="border border-gray-300 p-3 text-left">{language === 'en' ? 'Waiting Time' : 'प्रतीक्षा समय'}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3">{language === 'en' ? 'City Rides' : 'शहरी यात्राहरू'}</td>
                <td className="border border-gray-300 p-3">{language === 'en' ? '5 minutes after driver arrival' : 'चालक आगमन पछि ५ मिनेट'}</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-gray-300 p-3">{language === 'en' ? 'Intercity Rides' : 'अन्तर-शहर यात्राहरू'}</td>
                <td className="border border-gray-300 p-3">{language === 'en' ? '10 minutes after driver arrival' : 'चालक आगमन पछि १० मिनेट'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-3">
          {language === 'en' ? '4.2 No-Show Procedure for Drivers' : '४.२ चालकहरूको लागि नो-शो प्रक्रिया'}
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
          <li>{language === 'en' ? 'Arrive at the exact pickup location' : 'सटीक पिकअप स्थानमा आइपुग्नुहोस्'}</li>
          <li>{language === 'en' ? 'Start the waiting timer in the app' : 'एपमा प्रतीक्षा टाइमर सुरु गर्नुहोस्'}</li>
          <li>{language === 'en' ? 'Attempt to contact the passenger (call/message)' : 'यात्रुलाई सम्पर्क गर्ने प्रयास गर्नुहोस् (कल/सन्देश)'}</li>
          <li>{language === 'en' ? 'Wait for the full waiting period' : 'पूर्ण प्रतीक्षा अवधिको लागि पर्खनुहोस्'}</li>
          <li>{language === 'en' ? 'If passenger doesn\'t appear, mark as "No Show"' : 'यदि यात्रु देखिँदैन भने, "नो शो" चिन्ह लगाउनुहोस्'}</li>
          <li>{language === 'en' ? 'Document with photo if possible' : 'सम्भव भए फोटोसहित कागजात गर्नुहोस्'}</li>
        </ol>

        <h3 className="text-xl font-semibold mb-3">
          {language === 'en' ? '4.3 Driver No-Show' : '४.३ चालक नो-शो'}
        </h3>
        <p className="text-gray-700 mb-4">
          {language === 'en'
            ? 'If a driver accepts a ride but fails to arrive or cancels without valid reason:'
            : 'यदि चालकले यात्रा स्वीकार गर्छ तर आइपुग्न असफल हुन्छ वा वैध कारण बिना रद्द गर्छ:'}
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>{language === 'en' ? 'Driver Score penalty: -6.0 points' : 'चालक स्कोर दण्ड: -६.० अंक'}</li>
          <li>{language === 'en' ? 'Passenger will be offered a new driver' : 'यात्रुलाई नयाँ चालक प्रस्ताव गरिनेछ'}</li>
          <li>{language === 'en' ? 'Repeated incidents lead to account review' : 'बारम्बार घटनाहरूले खाता समीक्षा निम्त्याउँछ'}</li>
        </ul>
      </section>

      {/* System Cancellation */}
      <section id="system-cancellation" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? '5. Ride Cancellation by SubhYatra' : '५. शुभयात्राद्वारा यात्रा रद्दीकरण'}
        </h2>
        <p className="mb-4">
          {language === 'en'
            ? 'SubhYatra may cancel a ride in the following circumstances:'
            : 'शुभयात्राले निम्न परिस्थितिहरूमा यात्रा रद्द गर्न सक्छ:'}
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>{language === 'en' ? 'No driver available after multiple dispatch attempts' : 'धेरै डिस्प्याच प्रयासहरू पछि कुनै चालक उपलब्ध छैन'}</li>
          <li>{language === 'en' ? 'Technical issues preventing ride completion' : 'यात्रा पूरा हुन रोक्ने प्राविधिक समस्याहरू'}</li>
          <li>{language === 'en' ? 'Safety concerns identified' : 'सुरक्षा चिन्ताहरू पहिचान गरियो'}</li>
          <li>{language === 'en' ? 'Fraud detection triggered' : 'धोखाधडी पत्ता लागेको'}</li>
          <li>{language === 'en' ? 'Payment issues (for future digital payments)' : 'भुक्तानी समस्याहरू (भविष्यको डिजिटल भुक्तानीको लागि)'}</li>
        </ul>
        <p className="text-gray-600 italic">
          {language === 'en'
            ? 'When SubhYatra cancels a ride, passengers will be notified immediately and no penalties apply to either party.'
            : 'जब शुभयात्राले यात्रा रद्द गर्छ, यात्रुहरूलाई तुरुन्तै सूचित गरिनेछ र कुनै पक्षलाई दण्ड लागू हुँदैन।'}
        </p>
      </section>

      {/* Intercity Ride Cancellation */}
      <section id="intercity" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? '6. Intercity Ride Cancellation' : '६. अन्तर-शहर यात्रा रद्दीकरण'}
        </h2>
        <p className="mb-4">
          {language === 'en'
            ? 'Intercity rides require stricter cancellation policies due to longer distances, greater commitment from drivers, and potential scheduling impacts.'
            : 'अन्तर-शहर यात्राहरूलाई लामो दूरीहरू, चालकहरूबाट ठूलो प्रतिबद्धता, र सम्भावित तालिका प्रभावहरूको कारण कडा रद्दीकरण नीतिहरू आवश्यक पर्दछ।'}
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-brand-dark-blue text-white">
                <th className="border border-gray-300 p-3 text-left">{language === 'en' ? 'Timing' : 'समय'}</th>
                <th className="border border-gray-300 p-3 text-left">{language === 'en' ? 'Policy' : 'नीति'}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3">{language === 'en' ? 'Within 5 minutes of booking' : 'बुकिङको ५ मिनेट भित्र'}</td>
                <td className="border border-gray-300 p-3">{language === 'en' ? 'Free cancellation' : 'निःशुल्क रद्दीकरण'}</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-gray-300 p-3">{language === 'en' ? 'Before driver departs' : 'चालक प्रस्थान गर्नु अघि'}</td>
                <td className="border border-gray-300 p-3">{language === 'en' ? 'Warning recorded; affects account standing' : 'चेतावनी रेकर्ड; खाता स्थितिलाई असर गर्छ'}</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3">{language === 'en' ? 'After driver departs' : 'चालक प्रस्थान गरेपछि'}</td>
                <td className="border border-gray-300 p-3">{language === 'en' ? 'Serious violation; may affect future intercity booking ability' : 'गम्भीर उल्लङ्घन; भविष्यको अन्तर-शहर बुकिङ क्षमतालाई असर गर्न सक्छ'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section id="disputes" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? '7. Dispute Resolution' : '७. विवाद समाधान'}
        </h2>
        <p className="mb-4">
          {language === 'en'
            ? 'If you believe a cancellation was recorded unfairly:'
            : 'यदि तपाईंलाई लाग्छ कि रद्दीकरण गलत तरिकाले रेकर्ड गरिएको थियो:'}
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>{language === 'en' ? 'Report within 24 hours via the app or email' : 'एप वा इमेल मार्फत २४ घण्टा भित्र रिपोर्ट गर्नुहोस्'}</li>
          <li>{language === 'en' ? 'Provide details: Ride ID, time, circumstances' : 'विवरणहरू प्रदान गर्नुहोस्: राइड ID, समय, परिस्थितिहरू'}</li>
          <li>{language === 'en' ? 'Include evidence: Screenshots, photos if available' : 'प्रमाण समावेश गर्नुहोस्: स्क्रिनसटहरू, उपलब्ध भए फोटोहरू'}</li>
          <li>{language === 'en' ? 'Wait for review: We investigate within 48-72 hours' : 'समीक्षाको लागि पर्खनुहोस्: हामी ४८-७२ घण्टा भित्र अनुसन्धान गर्छौं'}</li>
        </ol>
        <p className="text-gray-700">
          {language === 'en' ? 'Contact: support@subhyatranepal.com' : 'सम्पर्क: support@subhyatranepal.com'}
        </p>
      </section>

      {/* Fair Use Policy */}
      <section id="fair-use" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? '8. Fair Use Policy' : '८. उचित प्रयोग नीति'}
        </h2>
        <p className="mb-4">
          {language === 'en'
            ? 'We monitor for patterns indicating abuse:'
            : 'हामी दुरुपयोग संकेत गर्ने ढाँचाहरूको निगरानी गर्छौं:'}
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>{language === 'en' ? 'Serial cancellations to "fish" for preferred drivers' : 'मनपर्ने चालकहरूको लागि "मछली मार्न" क्रमिक रद्दीकरणहरू'}</li>
          <li>{language === 'en' ? 'Cancellations targeting specific demographics' : 'विशेष जनसांख्यिकीहरूलाई लक्षित गर्ने रद्दीकरणहरू'}</li>
          <li>{language === 'en' ? 'Coordinated cancellation behavior' : 'समन्वित रद्दीकरण व्यवहार'}</li>
          <li>{language === 'en' ? 'Manipulation of cancellation timing' : 'रद्दीकरण समयको हेरफेर'}</li>
        </ul>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-brand-dark-blue text-white">
                <th className="border border-gray-300 p-3 text-left">{language === 'en' ? 'Offense Level' : 'अपराध स्तर'}</th>
                <th className="border border-gray-300 p-3 text-left">{language === 'en' ? 'Consequence' : 'परिणाम'}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3">{language === 'en' ? 'First warning' : 'पहिलो चेतावनी'}</td>
                <td className="border border-gray-300 p-3">{language === 'en' ? 'Notification and reminder of policy' : 'सूचना र नीतिको स्मरण'}</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-gray-300 p-3">{language === 'en' ? 'Second warning' : 'दोस्रो चेतावनी'}</td>
                <td className="border border-gray-300 p-3">{language === 'en' ? '24-hour booking restriction' : '२४-घण्टा बुकिङ प्रतिबन्ध'}</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3">{language === 'en' ? 'Third offense' : 'तेस्रो अपराध'}</td>
                <td className="border border-gray-300 p-3">{language === 'en' ? '7-day restriction + account review' : '७-दिन प्रतिबन्ध + खाता समीक्षा'}</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-gray-300 p-3">{language === 'en' ? 'Continued abuse' : 'निरन्तर दुरुपयोग'}</td>
                <td className="border border-gray-300 p-3">{language === 'en' ? 'Permanent account suspension' : 'स्थायी खाता निलम्बन'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Refund Policy */}
      <section id="refunds" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? '9. Refund Policy' : '९. फिर्ता नीति'}
        </h2>
        <h3 className="text-xl font-semibold mb-3">
          {language === 'en' ? '9.1 Current Payment Method (Cash)' : '९.१ हालको भुक्तानी विधि (नगद)'}
        </h3>
        <p className="text-gray-700 mb-4">
          {language === 'en'
            ? 'Since all payments are currently made in cash, no refunds are processed through the app. Cash is only collected upon ride completion. Cancelled rides involve no payment exchange.'
            : 'सबै भुक्तानीहरू हाल नगदमा गरिने भएकोले, एप मार्फत कुनै फिर्ता प्रशोधन गरिँदैन। नगद यात्रा पूरा भएपछि मात्र संकलन गरिन्छ। रद्द भएका यात्राहरूमा कुनै भुक्तानी आदानप्रदान हुँदैन।'}
        </p>

        <h3 className="text-xl font-semibold mb-3">
          {language === 'en' ? '9.2 Future Digital Payments' : '९.२ भविष्यको डिजिटल भुक्तानीहरू'}
        </h3>
        <p className="text-gray-700">
          {language === 'en'
            ? 'When digital payments are implemented, refunds for cancellations will be processed automatically within 5-7 business days to the original payment method.'
            : 'जब डिजिटल भुक्तानीहरू लागू गरिन्छ, रद्दीकरणको लागि फिर्ताहरू ५-७ कार्य दिन भित्र मूल भुक्तानी विधिमा स्वचालित रूपमा प्रशोधन गरिनेछ।'}
        </p>
      </section>

      {/* Emergency Situations */}
      <section id="emergency" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? '10. Emergency Situations' : '१०. आपतकालीन परिस्थितिहरू'}
        </h2>
        <p className="mb-4">
          {language === 'en'
            ? 'In genuine emergencies, safety always comes first. Cancel the ride and ensure personal safety. Report the emergency through the app. No penalties for documented emergencies.'
            : 'वास्तविक आपतकालीन परिस्थितिहरूमा, सुरक्षा सधैं पहिलो हुन्छ। यात्रा रद्द गर्नुहोस् र व्यक्तिगत सुरक्षा सुनिश्चित गर्नुहोस्। एप मार्फत आपतकालीन रिपोर्ट गर्नुहोस्। दस्तावेज गरिएका आपतकालीन परिस्थितिहरूको लागि कुनै दण्ड छैन।'}
        </p>
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="font-semibold text-red-700 mb-2">{language === 'en' ? 'Emergency Contacts:' : 'आपतकालीन सम्पर्कहरू:'}</p>
          <ul className="space-y-1 text-gray-700">
            <li>{language === 'en' ? 'Police: 100' : 'प्रहरी: १००'}</li>
            <li>{language === 'en' ? 'Fire: 101' : 'दमकल: १०१'}</li>
            <li>{language === 'en' ? 'Ambulance: 102' : 'एम्बुलेन्स: १०२'}</li>
            <li>{language === 'en' ? 'SubhYatra Emergency: SOS feature in app' : 'शुभयात्रा आपतकालीन: एपमा SOS सुविधा'}</li>
          </ul>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? '11. Contact Information' : '११. सम्पर्क जानकारी'}
        </h2>
        <p className="mb-4">
          {language === 'en'
            ? 'For questions about this Cancellation Policy:'
            : 'यस रद्द नीतिको बारेमा प्रश्नहरूको लागि:'}
        </p>
        <div className="bg-slate-100 p-6 rounded-lg">
          <p className="font-semibold text-brand-dark-blue mb-2">
            {language === 'en' ? 'Sankat Mochan Sajilo Yatra Pvt. Ltd.' : 'सङ्कट मोचन सजिलो यात्रा प्रा. लि.'}
          </p>
          <p className="text-gray-700">{language === 'en' ? 'Registration:' : 'दर्ता:'} 368115/81/82</p>
          <p className="text-gray-700">
            {language === 'en' ? 'Email:' : 'इमेल:'}{' '}
            <a href="mailto:support@subhyatranepal.com" className="text-brand-yellow hover:underline">
              support@subhyatranepal.com
            </a>
          </p>
          <p className="text-gray-700">
            {language === 'en' ? 'Phone:' : 'फोन:'}{' '}
            <a href="tel:+9779855042503" className="text-brand-yellow hover:underline">
              +977 9855042503
            </a>
          </p>
          <p className="text-gray-700">
            {language === 'en' ? 'Website:' : 'वेबसाइट:'}{' '}
            <a href="https://subhyatranepal.com" className="text-brand-yellow hover:underline">
              https://subhyatranepal.com
            </a>
          </p>
          <p className="text-gray-700 mt-4">
            <strong>{language === 'en' ? 'Technology Partner:' : 'टेक्नोलोजी साझेदार:'}</strong> Nexalaris Tech Pvt. Ltd.
          </p>
        </div>
      </section>

      {/* Legal Compliance */}
      <section className="mb-8">
        <p className="text-gray-600 italic text-sm">
          {language === 'en'
            ? 'This Cancellation Policy complies with Consumer Protection Act, 2075 (2018) of Nepal, Electronic Transaction Act, 2063 (2008) of Nepal, and fair business practices requirements.'
            : 'यो रद्द नीति नेपालको उपभोक्ता संरक्षण ऐन, २०७५ (२०१८), नेपालको इलेक्ट्रोनिक कारोबार ऐन, २०६३ (२००८), र उचित व्यापार अभ्यास आवश्यकताहरूको पालना गर्दछ।'}
        </p>
      </section>
    </LegalPageLayout>
  );
}
