'use client';

import { LegalPageLayout } from '@/components/legal/LegalPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  en: {
    title: 'Terms of Service',
    lastUpdated: 'January 2026',
    tableOfContents: [
      { id: 'introduction', title: '1. Introduction and Acceptance' },
      { id: 'eligibility', title: '2. Eligibility and Registration' },
      { id: 'services', title: '3. Description of Services' },
      { id: 'user-obligations', title: '4. User Obligations and Conduct' },
      { id: 'fares', title: '5. Fares, Payments, and Charges' },
      { id: 'cancellation', title: '6. Cancellation Policy' },
      { id: 'driver-terms', title: '7. Driver-Partner Terms' },
      { id: 'intellectual-property', title: '8. Intellectual Property' },
      { id: 'privacy', title: '9. Privacy and Data Protection' },
      { id: 'disclaimers', title: '10. Disclaimers and Limitations' },
      { id: 'indemnification', title: '11. Indemnification' },
      { id: 'disputes', title: '12. Dispute Resolution' },
      { id: 'modifications', title: '13. Modifications to Terms' },
      { id: 'termination', title: '14. Termination' },
      { id: 'general', title: '15. General Provisions' },
      { id: 'contact', title: '16. Contact Information' },
      { id: 'acknowledgment', title: '17. Acknowledgment' },
    ],
    sections: {
      intro: {
        title: '1. Introduction and Acceptance of Terms',
        agreement: {
          title: '1.1 Agreement to Terms',
          content: 'By downloading, installing, accessing, or using the SubhYatra mobile application ("App") or any related services ("Services"), you ("User," "you," or "your") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.',
        },
        about: {
          title: '1.2 About SubhYatra',
          content: 'SubhYatra is a ride-hailing technology platform operated by Sankat Mochan Sajilo Yatra Pvt. Ltd. (Registration No. 368115/81/82), a company registered under the laws of Nepal ("Company," "we," "us," or "our"), with technology development and intellectual property owned by Nexalaris Tech Pvt. Ltd. (Registration No. 354796/81/82). Our platform connects passengers seeking transportation services with independent driver-partners who provide such services.',
        },
        compliance: {
          title: '1.3 Legal Compliance',
          content: 'These Terms are governed by and comply with:',
          laws: [
            'The Individual Privacy Act, 2075 (2018) of Nepal',
            'The Digital Privacy and Data Protection Act, 2082 (2025) of Nepal',
            'The Consumer Protection Act, 2075 (2018) of Nepal',
            'The Electronic Transaction Act, 2063 (2008) of Nepal',
            'The Motor Vehicles and Transport Management Act, 2049 (1993)',
            'Applicable provincial ride-hailing regulations',
          ],
        },
      },
      eligibility: {
        title: '2. Eligibility and Account Registration',
        requirements: {
          title: '2.1 Eligibility Requirements',
          content: 'To use our Services, you must:',
          items: [
            'Be at least 18 years of age',
            'Be legally capable of entering into binding contracts under Nepal law',
            'Not be prohibited from using the Services under applicable laws',
            'Possess a valid government-issued identification document',
          ],
        },
        creation: {
          title: '2.2 Account Creation',
          items: [
            'You must provide accurate, current, and complete information during registration',
            'You are responsible for maintaining the confidentiality of your account credentials',
            'You must immediately notify us of any unauthorized access to your account',
            'One person may only maintain one active User account',
          ],
        },
        verification: {
          title: '2.3 Account Verification',
          content: 'We may require verification of your identity and contact information through:',
          items: [
            'Email verification',
            'Phone number verification (when implemented)',
            'Government ID verification (for certain features)',
          ],
        },
      },
      services: {
        title: '3. Description of Services',
        platform: {
          title: '3.1 Platform Services',
          content: 'SubhYatra provides a technology platform that:',
          items: [
            'Connects passengers with independent driver-partners',
            'Facilitates ride booking and tracking',
            'Enables fare calculation and payment processing',
            'Provides communication between passengers and drivers',
          ],
        },
        transportation: {
          title: '3.2 Transportation Services',
          items: [
            'SubhYatra does not provide transportation services directly',
            'Transportation services are provided by independent driver-partners',
            'We act solely as an intermediary connecting passengers with drivers',
            'The contract for transportation is between the passenger and the driver',
          ],
        },
        types: {
          title: '3.3 Service Types',
          content: 'We offer the following ride categories:',
          city: 'City Rides: Within urban areas (Bike, Car Basic, Car Premium, SUV)',
          intercity: 'Intercity Rides: Between cities (Car Basic, Car Premium, SUV)',
        },
        availability: {
          title: '3.4 Service Availability',
          items: [
            'Services are currently available in Kathmandu Valley and select cities in Nepal',
            'Service availability may vary based on driver availability, weather, and other factors',
            'We do not guarantee availability of Services at all times',
          ],
        },
      },
      userObligations: {
        title: '4. User Obligations and Conduct',
        general: {
          title: '4.1 General Obligations',
          content: 'Users agree to:',
          items: [
            'Provide accurate information for all bookings',
            'Be present at the pickup location at the scheduled time',
            'Treat drivers with respect and courtesy',
            'Comply with all applicable laws during the ride',
            'Pay all fares and charges due',
          ],
        },
        prohibited: {
          title: '4.2 Prohibited Conduct',
          content: 'Users shall NOT:',
          items: [
            'Use the Services for any unlawful purpose',
            'Harass, threaten, or abuse drivers or other users',
            'Carry illegal substances, weapons, or hazardous materials',
            'Damage or vandalize any vehicle',
            'Make false bookings or provide false information',
            'Attempt to defraud the platform or drivers',
            'Interfere with the proper functioning of the App',
            'Use automated systems to access the Services',
            'Share account credentials with others',
          ],
        },
        safety: {
          title: '4.3 Safety Requirements',
          items: [
            'Passengers must wear seatbelts where provided',
            'Passengers must follow driver instructions regarding safety',
            'No smoking or consumption of alcohol/drugs in vehicles',
            'Children must be accompanied by adults',
          ],
        },
      },
      fares: {
        title: '5. Fares, Payments, and Charges',
        calculation: {
          title: '5.1 Fare Calculation',
          items: [
            'Fares are calculated based on distance, vehicle type, and ride type',
            'Fare estimates are provided before booking confirmation',
            'Final fares may vary based on actual route taken',
            'All fares are displayed in Nepalese Rupees (NPR)',
          ],
        },
        components: {
          title: '5.2 Fare Components',
          content: 'Fares may include:',
          items: [
            'Base fare',
            'Per-kilometer charges',
            'Applicable taxes (as required by law)',
            'Toll charges (where applicable)',
          ],
        },
        methods: {
          title: '5.3 Payment Methods',
          items: [
            'Cash Payment: Currently, all payments are made in cash directly to the driver',
            'Digital payment methods may be introduced in the future',
          ],
        },
        disputes: {
          title: '5.4 Fare Disputes',
          items: [
            'Fare disputes must be reported within 24 hours of ride completion',
            'We will investigate all disputes in good faith',
            'Adjustments will be made if errors are confirmed',
          ],
        },
        noRefunds: {
          title: '5.5 No Refunds Policy',
          items: [
            'Cash payments made directly to drivers cannot be refunded through the platform',
            'Disputes regarding cash payments should be reported for investigation',
          ],
        },
      },
      cancellation: {
        title: '6. Cancellation Policy',
        passenger: {
          title: '6.1 Passenger Cancellation',
          items: [
            'Passengers may cancel a ride at any time before the ride starts',
            'Cancellation charges may apply as per our Cancellation Policy',
            'Frequent cancellations may result in account restrictions',
          ],
        },
        driver: {
          title: '6.2 Driver Cancellation',
          items: [
            'Drivers may cancel under limited circumstances',
            'If a driver cancels, we will attempt to find an alternative driver',
            'Passengers will not be charged for driver-initiated cancellations',
          ],
        },
        noShow: {
          title: '6.3 No-Show',
          items: [
            'If a passenger is not present at the pickup location within the waiting time, the ride may be cancelled',
            'No-show fees may apply',
          ],
        },
        note: 'Please refer to our separate Cancellation Policy document for detailed terms.',
      },
      driverTerms: {
        title: '7. Driver-Partner Terms',
        contractor: {
          title: '7.1 Independent Contractor Status',
          items: [
            'Drivers are independent contractors, not employees of SubhYatra',
            'Drivers maintain their own vehicles and bear associated costs',
            'SubhYatra does not control the manner of transportation service delivery',
          ],
        },
        eligibility: {
          title: '7.2 Driver Eligibility',
          content: 'Drivers must:',
          items: [
            'Hold a valid driving license for at least one year',
            'Own or have authorized access to a compliant vehicle',
            'Pass background verification',
            'Maintain required vehicle documentation',
            'Meet minimum score requirements for continued operation',
          ],
        },
        commission: {
          title: '7.3 Platform Commission',
          items: [
            'SubhYatra charges a platform commission on each completed ride',
            'Standard commission rate: 15% of the gross fare',
            'Incentive rate for qualifying drivers: 13% of the gross fare',
          ],
        },
        agreement: {
          title: '7.4 Driver Agreement',
          content: 'All drivers must accept the separate Driver Agreement, which contains additional terms and conditions.',
        },
      },
      intellectualProperty: {
        title: '8. Intellectual Property',
        ownership: {
          title: '8.1 Ownership',
          items: [
            'The App, including all content, features, and functionality, is owned by SubhYatra Pvt. Ltd.',
            'All trademarks, logos, and service marks are our property',
            'These Terms do not grant any license to use our intellectual property',
          ],
        },
        userLicense: {
          title: '8.2 User License',
          items: [
            'We grant you a limited, non-exclusive, non-transferable license to use the App',
            'This license is for personal, non-commercial use only',
            'This license terminates upon termination of your account',
          ],
        },
        userContent: {
          title: '8.3 User Content',
          items: [
            'You retain ownership of content you submit through the App',
            'You grant us a license to use such content for providing Services',
            'You represent that you have rights to submit such content',
          ],
        },
      },
      privacy: {
        title: '9. Privacy and Data Protection',
        commitment: {
          title: '9.1 Privacy Commitment',
          content: 'Your privacy is important to us. Our collection, use, and protection of your personal data is governed by our Privacy Policy and complies with:',
          laws: [
            'The Individual Privacy Act, 2075 (2018)',
            'The Digital Privacy and Data Protection Act, 2082 (2025)',
          ],
        },
        collection: {
          title: '9.2 Data Collection',
          content: 'We collect data necessary to provide our Services, including:',
          items: [
            'Registration information (name, email, phone)',
            'Location data during rides',
            'Transaction history',
            'Device information',
          ],
        },
        usage: {
          title: '9.3 Data Usage',
          content: 'Your data is used to:',
          items: [
            'Provide and improve our Services',
            'Process transactions',
            'Ensure safety and security',
            'Comply with legal obligations',
          ],
        },
        security: {
          title: '9.4 Data Security',
          content: 'We implement appropriate technical and organizational measures to protect your data as required by Nepal\'s data protection laws.',
        },
        note: 'Please refer to our Privacy Policy for complete details.',
      },
      disclaimers: {
        title: '10. Disclaimers and Limitations of Liability',
        service: {
          title: '10.1 Service Disclaimer',
          items: [
            'Services are provided "AS IS" and "AS AVAILABLE"',
            'We do not guarantee uninterrupted or error-free service',
            'We are not responsible for the conduct of drivers or other users',
          ],
        },
        transportation: {
          title: '10.2 Transportation Disclaimer',
          items: [
            'SubhYatra is a technology platform, not a transportation provider',
            'We do not guarantee the quality, safety, or legality of transportation services',
            'Drivers are solely responsible for their transportation services',
          ],
        },
        limitation: {
          title: '10.3 Limitation of Liability',
          content: 'To the maximum extent permitted by Nepal law:',
          items: [
            'Our liability is limited to the amount paid for the specific service',
            'We are not liable for indirect, incidental, or consequential damages',
            'We are not liable for actions of drivers or other third parties',
          ],
        },
        forceMajeure: {
          title: '10.4 Force Majeure',
          content: 'We are not liable for failures due to circumstances beyond our control, including natural disasters, government actions, strikes, or technical failures.',
        },
      },
      indemnification: {
        title: '11. Indemnification',
        content: 'You agree to indemnify and hold harmless SubhYatra, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:',
        items: [
          'Your use of the Services',
          'Your violation of these Terms',
          'Your violation of any third-party rights',
          'Your violation of applicable laws',
        ],
      },
      disputes: {
        title: '12. Dispute Resolution',
        governingLaw: {
          title: '12.1 Governing Law',
          content: 'These Terms are governed by the laws of Nepal.',
        },
        informal: {
          title: '12.2 Informal Resolution',
          content: 'Before filing any formal claim, you agree to contact us to attempt informal resolution.',
        },
        jurisdiction: {
          title: '12.3 Jurisdiction',
          content: 'Any disputes shall be subject to the exclusive jurisdiction of the courts of Kathmandu, Nepal.',
        },
        consumerRights: {
          title: '12.4 Consumer Rights',
          content: 'Nothing in these Terms affects your statutory rights under the Consumer Protection Act, 2075.',
        },
      },
      modifications: {
        title: '13. Modifications to Terms',
        right: {
          title: '13.1 Right to Modify',
          content: 'We reserve the right to modify these Terms at any time.',
        },
        notification: {
          title: '13.2 Notification of Changes',
          items: [
            'Material changes will be notified through the App or email',
            'Continued use after changes constitutes acceptance',
          ],
        },
        recommendation: {
          title: '13.3 Review Recommendation',
          content: 'We encourage you to review these Terms periodically.',
        },
      },
      termination: {
        title: '14. Termination',
        byUser: {
          title: '14.1 Termination by User',
          content: 'You may terminate your account at any time by:',
          items: [
            'Contacting customer support',
            'Using account deletion features in the App',
          ],
        },
        byCompany: {
          title: '14.2 Termination by SubhYatra',
          content: 'We may suspend or terminate your account for:',
          items: [
            'Violation of these Terms',
            'Fraudulent or illegal activity',
            'Extended period of inactivity',
            'Any other reason at our sole discretion',
          ],
        },
        effect: {
          title: '14.3 Effect of Termination',
          items: [
            'Upon termination, your right to use the Services ceases',
            'Provisions that should survive termination will remain in effect',
            'Pending obligations must be fulfilled',
          ],
        },
      },
      general: {
        title: '15. General Provisions',
        entireAgreement: {
          title: '15.1 Entire Agreement',
          content: 'These Terms, together with the Privacy Policy and other incorporated documents, constitute the entire agreement between you and SubhYatra.',
        },
        severability: {
          title: '15.2 Severability',
          content: 'If any provision is found unenforceable, the remaining provisions remain in effect.',
        },
        waiver: {
          title: '15.3 Waiver',
          content: 'Failure to enforce any right does not constitute a waiver of that right.',
        },
        assignment: {
          title: '15.4 Assignment',
          content: 'You may not assign these Terms. We may assign our rights without restriction.',
        },
        language: {
          title: '15.5 Language',
          content: 'These Terms are provided in English. In case of translation, the English version prevails.',
        },
      },
      contact: {
        title: '16. Contact Information',
        intro: 'For questions about these Terms, please contact us:',
        operator: {
          title: 'Service Operator:',
          company: 'Sankat Mochan Sajilo Yatra Pvt. Ltd.',
          registration: 'Registration: 368115/81/82',
          address: 'Address: Chandrapur, Rauthad, Madhesh Province, Nepal',
          email: 'Email: support@subhyatranepal.com',
          phone: 'Phone: +977 9855042503',
          website: 'Website: https://subhyatranepal.com',
        },
        technology: {
          title: 'Technology Partner:',
          company: 'Nexalaris Tech Pvt. Ltd.',
          registration: 'Registration: 354796/81/82',
          address: 'Address: Beside TVS Showroom, Zero Mile, Janakpurdham, Madhesh Province, Nepal',
          email: 'Email: contact@nexalaris.com',
          phone: 'Phone: +977 9814846711',
        },
        consumer: {
          title: 'For consumer complaints, you may also contact:',
          items: [
            'Department of Commerce, Supplies and Consumer Protection',
            'Consumer Court (as per Consumer Protection Act, 2075)',
          ],
        },
      },
      acknowledgment: {
        title: '17. Acknowledgment',
        content: 'By using SubhYatra, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.',
      },
      compliance: 'These Terms of Service are compliant with Nepal\'s Individual Privacy Act 2075, Consumer Protection Act 2075, Electronic Transaction Act 2063, and applicable transportation regulations.',
    },
  },
  ne: {
    title: 'सेवाका सर्तहरू',
    lastUpdated: 'जनवरी २०२६',
    tableOfContents: [
      { id: 'introduction', title: '१. परिचय र स्वीकृति' },
      { id: 'eligibility', title: '२. योग्यता र दर्ता' },
      { id: 'services', title: '३. सेवाहरूको विवरण' },
      { id: 'user-obligations', title: '४. प्रयोगकर्ता दायित्व र आचरण' },
      { id: 'fares', title: '५. भाडा, भुक्तानी, र शुल्कहरू' },
      { id: 'cancellation', title: '६. रद्द नीति' },
      { id: 'driver-terms', title: '७. चालक-साझेदार सर्तहरू' },
      { id: 'intellectual-property', title: '८. बौद्धिक सम्पत्ति' },
      { id: 'privacy', title: '९. गोपनीयता र डेटा सुरक्षा' },
      { id: 'disclaimers', title: '१०. अस्वीकरण र सीमाहरू' },
      { id: 'indemnification', title: '११. क्षतिपूर्ति' },
      { id: 'disputes', title: '१२. विवाद समाधान' },
      { id: 'modifications', title: '१३. सर्तहरूमा परिमार्जन' },
      { id: 'termination', title: '१४. समाप्ति' },
      { id: 'general', title: '१५. सामान्य प्रावधानहरू' },
      { id: 'contact', title: '१६. सम्पर्क जानकारी' },
      { id: 'acknowledgment', title: '१७. स्वीकृति' },
    ],
    sections: {
      intro: {
        title: '१. परिचय र सर्तहरूको स्वीकृति',
        agreement: {
          title: '१.१ सर्तहरूमा सहमति',
          content: 'शुभयात्रा मोबाइल एप्लिकेसन ("एप") वा कुनै पनि सम्बन्धित सेवाहरू ("सेवाहरू") डाउनलोड, स्थापना, पहुँच, वा प्रयोग गरेर, तपाईं ("प्रयोगकर्ता," "तपाईं," वा "तपाईंको") यी सेवाका सर्तहरू ("सर्तहरू") द्वारा बाँधिन सहमत हुनुहुन्छ। यदि तपाईं यी सर्तहरूमा सहमत हुनुहुन्न भने, कृपया हाम्रा सेवाहरू प्रयोग नगर्नुहोस्।',
        },
        about: {
          title: '१.२ शुभयात्राको बारेमा',
          content: 'शुभयात्रा नेपालको कानून अन्तर्गत दर्ता भएको कम्पनी सङ्कट मोचन सजिलो यात्रा प्रा. लि. (दर्ता नं. ३६८११५/८१/८२) ("कम्पनी," "हामी," "हामीलाई," वा "हाम्रो") द्वारा सञ्चालित राइड-हेलिङ टेक्नोलोजी प्लेटफर्म हो, जसको टेक्नोलोजी विकास र बौद्धिक सम्पत्ति नेक्सालारिस टेक प्रा. लि. (दर्ता नं. ३५४७९६/८१/८२) को स्वामित्वमा छ। हाम्रो प्लेटफर्मले यातायात सेवा खोज्ने यात्रुहरूलाई यस्ता सेवाहरू प्रदान गर्ने स्वतन्त्र चालक-साझेदारहरूसँग जोड्छ।',
        },
        compliance: {
          title: '१.३ कानूनी अनुपालन',
          content: 'यी सर्तहरू निम्न अनुसार शासित र अनुपालन छन्:',
          laws: [
            'नेपालको व्यक्तिगत गोपनीयता ऐन, २०७५ (२०१८)',
            'नेपालको डिजिटल गोपनीयता तथा डेटा संरक्षण ऐन, २०८२ (२०२५)',
            'नेपालको उपभोक्ता संरक्षण ऐन, २०७५ (२०१८)',
            'नेपालको इलेक्ट्रोनिक कारोबार ऐन, २०६३ (२००८)',
            'सवारी साधन तथा यातायात व्यवस्था ऐन, २०४९ (१९९३)',
            'लागू प्रादेशिक राइड-हेलिङ नियमहरू',
          ],
        },
      },
      eligibility: {
        title: '२. योग्यता र खाता दर्ता',
        requirements: {
          title: '२.१ योग्यता आवश्यकताहरू',
          content: 'हाम्रा सेवाहरू प्रयोग गर्न, तपाईं:',
          items: [
            'कम्तीमा १८ वर्षको हुनुपर्छ',
            'नेपाल कानून अन्तर्गत बाध्यकारी सम्झौतामा प्रवेश गर्न कानूनी रूपमा सक्षम हुनुपर्छ',
            'लागू कानूनहरू अन्तर्गत सेवाहरू प्रयोग गर्नबाट प्रतिबन्धित हुनुहुँदैन',
            'वैध सरकारी-जारी परिचय पत्र हुनुपर्छ',
          ],
        },
        creation: {
          title: '२.२ खाता सिर्जना',
          items: [
            'दर्ताको क्रममा तपाईंले सही, हालको, र पूर्ण जानकारी प्रदान गर्नुपर्छ',
            'तपाईं आफ्नो खाता प्रमाणहरूको गोपनीयता कायम राख्न जिम्मेवार हुनुहुन्छ',
            'तपाईंको खातामा कुनै पनि अनधिकृत पहुँचको बारेमा तुरुन्तै हामीलाई सूचित गर्नुपर्छ',
            'एक व्यक्तिले एउटा मात्र सक्रिय प्रयोगकर्ता खाता राख्न सक्छ',
          ],
        },
        verification: {
          title: '२.३ खाता प्रमाणीकरण',
          content: 'हामी निम्न माध्यमबाट तपाईंको पहिचान र सम्पर्क जानकारीको प्रमाणीकरण आवश्यक पार्न सक्छौं:',
          items: [
            'इमेल प्रमाणीकरण',
            'फोन नम्बर प्रमाणीकरण (कार्यान्वयन भएपछि)',
            'सरकारी आईडी प्रमाणीकरण (केही सुविधाहरूको लागि)',
          ],
        },
      },
      services: {
        title: '३. सेवाहरूको विवरण',
        platform: {
          title: '३.१ प्लेटफर्म सेवाहरू',
          content: 'शुभयात्राले टेक्नोलोजी प्लेटफर्म प्रदान गर्दछ जसले:',
          items: [
            'यात्रुहरूलाई स्वतन्त्र चालक-साझेदारहरूसँग जोड्छ',
            'राइड बुकिङ र ट्र्याकिङ सुविधा दिन्छ',
            'भाडा गणना र भुक्तानी प्रशोधन सक्षम गर्दछ',
            'यात्रुहरू र चालकहरू बीच सञ्चार प्रदान गर्दछ',
          ],
        },
        transportation: {
          title: '३.२ यातायात सेवाहरू',
          items: [
            'शुभयात्राले सिधै यातायात सेवाहरू प्रदान गर्दैन',
            'यातायात सेवाहरू स्वतन्त्र चालक-साझेदारहरूद्वारा प्रदान गरिन्छ',
            'हामी केवल यात्रुहरूलाई चालकहरूसँग जोड्ने मध्यस्थकर्ताको रूपमा काम गर्छौं',
            'यातायातको करार यात्रु र चालक बीच हुन्छ',
          ],
        },
        types: {
          title: '३.३ सेवा प्रकारहरू',
          content: 'हामी निम्न राइड श्रेणीहरू प्रदान गर्छौं:',
          city: 'सिटी राइड: शहरी क्षेत्रहरू भित्र (बाइक, कार बेसिक, कार प्रिमियम, SUV)',
          intercity: 'इन्टरसिटी राइड: शहरहरू बीच (कार बेसिक, कार प्रिमियम, SUV)',
        },
        availability: {
          title: '३.४ सेवा उपलब्धता',
          items: [
            'सेवाहरू हाल काठमाडौं उपत्यका र नेपालका छनौट शहरहरूमा उपलब्ध छन्',
            'चालक उपलब्धता, मौसम, र अन्य कारकहरूको आधारमा सेवा उपलब्धता फरक हुन सक्छ',
            'हामी सधैं सेवाहरूको उपलब्धताको ग्यारेन्टी दिँदैनौं',
          ],
        },
      },
      userObligations: {
        title: '४. प्रयोगकर्ता दायित्व र आचरण',
        general: {
          title: '४.१ सामान्य दायित्वहरू',
          content: 'प्रयोगकर्ताहरू सहमत हुन्छन्:',
          items: [
            'सबै बुकिङको लागि सही जानकारी प्रदान गर्न',
            'निर्धारित समयमा पिकअप स्थानमा उपस्थित हुन',
            'चालकहरूलाई सम्मान र शिष्टताका साथ व्यवहार गर्न',
            'राइडको क्रममा सबै लागू कानूनहरूको पालना गर्न',
            'सबै भाडा र शुल्कहरू तिर्न',
          ],
        },
        prohibited: {
          title: '४.२ निषेधित आचरण',
          content: 'प्रयोगकर्ताहरूले गर्नुहुँदैन:',
          items: [
            'कुनै पनि गैरकानूनी उद्देश्यको लागि सेवाहरू प्रयोग गर्ने',
            'चालकहरू वा अन्य प्रयोगकर्ताहरूलाई उत्पीडन, धम्की, वा दुर्व्यवहार गर्ने',
            'अवैध पदार्थ, हतियार, वा खतरनाक सामग्री बोक्ने',
            'कुनै पनि गाडीलाई क्षति पुर्याउने वा भन्दालिज्म गर्ने',
            'झूटा बुकिङ गर्ने वा झूटा जानकारी प्रदान गर्ने',
            'प्लेटफर्म वा चालकहरूलाई ठगी गर्ने प्रयास गर्ने',
            'एपको उचित कार्यमा हस्तक्षेप गर्ने',
            'सेवाहरू पहुँच गर्न स्वचालित प्रणालीहरू प्रयोग गर्ने',
            'अरूसँग खाता प्रमाणहरू साझा गर्ने',
          ],
        },
        safety: {
          title: '४.३ सुरक्षा आवश्यकताहरू',
          items: [
            'यात्रुहरूले सिटबेल्ट लगाउनुपर्छ जहाँ उपलब्ध छ',
            'यात्रुहरूले सुरक्षा सम्बन्धी चालकको निर्देशनहरू पालना गर्नुपर्छ',
            'गाडीहरूमा धूम्रपान वा मदिरा/लागूपदार्थ सेवन निषेध',
            'बालबालिकाहरू वयस्कहरूसँगै हुनुपर्छ',
          ],
        },
      },
      fares: {
        title: '५. भाडा, भुक्तानी, र शुल्कहरू',
        calculation: {
          title: '५.१ भाडा गणना',
          items: [
            'भाडा दूरी, गाडी प्रकार, र राइड प्रकारको आधारमा गणना गरिन्छ',
            'बुकिङ पुष्टि गर्नु अघि भाडा अनुमान प्रदान गरिन्छ',
            'वास्तविक मार्गको आधारमा अन्तिम भाडा फरक हुन सक्छ',
            'सबै भाडाहरू नेपाली रुपैयाँ (NPR) मा देखाइन्छ',
          ],
        },
        components: {
          title: '५.२ भाडा घटकहरू',
          content: 'भाडामा समावेश हुन सक्छ:',
          items: [
            'आधार भाडा',
            'प्रति-किलोमिटर शुल्कहरू',
            'लागू करहरू (कानूनले आवश्यक पारे अनुसार)',
            'टोल शुल्कहरू (जहाँ लागू हुन्छ)',
          ],
        },
        methods: {
          title: '५.३ भुक्तानी विधिहरू',
          items: [
            'नगद भुक्तानी: हाल, सबै भुक्तानीहरू सिधै चालकलाई नगदमा गरिन्छ',
            'भविष्यमा डिजिटल भुक्तानी विधिहरू थपिन सक्छ',
          ],
        },
        disputes: {
          title: '५.४ भाडा विवादहरू',
          items: [
            'भाडा विवादहरू राइड पूरा भएको २४ घण्टा भित्र रिपोर्ट गर्नुपर्छ',
            'हामी सद्भावनामा सबै विवादहरूको अनुसन्धान गर्नेछौं',
            'त्रुटिहरू पुष्टि भएमा समायोजन गरिनेछ',
          ],
        },
        noRefunds: {
          title: '५.५ रिफन्ड नहुने नीति',
          items: [
            'चालकहरूलाई सिधै गरिएको नगद भुक्तानी प्लेटफर्म मार्फत फिर्ता हुन सक्दैन',
            'नगद भुक्तानी सम्बन्धी विवादहरू अनुसन्धानको लागि रिपोर्ट गर्नुपर्छ',
          ],
        },
      },
      cancellation: {
        title: '६. रद्द नीति',
        passenger: {
          title: '६.१ यात्रु रद्दीकरण',
          items: [
            'यात्रुहरूले राइड सुरु हुनु अघि जुनसुकै बेला रद्द गर्न सक्छन्',
            'हाम्रो रद्द नीति अनुसार रद्दीकरण शुल्कहरू लाग्न सक्छ',
            'बारम्बार रद्दीकरणले खाता प्रतिबन्धमा पर्न सक्छ',
          ],
        },
        driver: {
          title: '६.२ चालक रद्दीकरण',
          items: [
            'चालकहरूले सीमित परिस्थितिहरूमा रद्द गर्न सक्छन्',
            'यदि चालकले रद्द गर्छ भने, हामी वैकल्पिक चालक खोज्ने प्रयास गर्नेछौं',
            'चालक-शुरु रद्दीकरणको लागि यात्रुहरूलाई शुल्क लाग्दैन',
          ],
        },
        noShow: {
          title: '६.३ उपस्थित नहुने',
          items: [
            'यदि यात्रु प्रतीक्षा समय भित्र पिकअप स्थानमा उपस्थित हुँदैन भने, राइड रद्द हुन सक्छ',
            'उपस्थित नहुने शुल्कहरू लाग्न सक्छ',
          ],
        },
        note: 'कृपया विस्तृत सर्तहरूको लागि हाम्रो छुट्टै रद्द नीति कागजात हेर्नुहोस्।',
      },
      driverTerms: {
        title: '७. चालक-साझेदार सर्तहरू',
        contractor: {
          title: '७.१ स्वतन्त्र ठेकेदार स्थिति',
          items: [
            'चालकहरू स्वतन्त्र ठेकेदारहरू हुन्, शुभयात्राका कर्मचारीहरू होइनन्',
            'चालकहरूले आफ्नै गाडीहरू राख्छन् र सम्बन्धित लागतहरू वहन गर्छन्',
            'शुभयात्राले यातायात सेवा प्रदानको तरिका नियन्त्रण गर्दैन',
          ],
        },
        eligibility: {
          title: '७.२ चालक योग्यता',
          content: 'चालकहरूले:',
          items: [
            'कम्तीमा एक वर्षको लागि वैध चालक अनुमतिपत्र राख्नुपर्छ',
            'अनुपालन गाडीमा स्वामित्व वा अधिकृत पहुँच हुनुपर्छ',
            'पृष्ठभूमि प्रमाणीकरण पास गर्नुपर्छ',
            'आवश्यक गाडी कागजातहरू राख्नुपर्छ',
            'निरन्तर सञ्चालनको लागि न्यूनतम स्कोर आवश्यकताहरू पूरा गर्नुपर्छ',
          ],
        },
        commission: {
          title: '७.३ प्लेटफर्म कमिसन',
          items: [
            'शुभयात्राले प्रत्येक पूरा भएको राइडमा प्लेटफर्म कमिसन लिन्छ',
            'मानक कमिसन दर: कुल भाडाको १५%',
            'योग्य चालकहरूको लागि प्रोत्साहन दर: कुल भाडाको १३%',
          ],
        },
        agreement: {
          title: '७.४ चालक सम्झौता',
          content: 'सबै चालकहरूले छुट्टै चालक सम्झौता स्वीकार गर्नुपर्छ, जसमा थप सर्तहरू समावेश छन्।',
        },
      },
      intellectualProperty: {
        title: '८. बौद्धिक सम्पत्ति',
        ownership: {
          title: '८.१ स्वामित्व',
          items: [
            'एप, सबै सामग्री, सुविधाहरू, र कार्यक्षमता सहित, शुभयात्रा प्रा. लि. को स्वामित्वमा छ',
            'सबै ट्रेडमार्कहरू, लोगोहरू, र सेवा चिन्हहरू हाम्रो सम्पत्ति हुन्',
            'यी सर्तहरूले हाम्रो बौद्धिक सम्पत्ति प्रयोग गर्न कुनै इजाजत दिँदैनन्',
          ],
        },
        userLicense: {
          title: '८.२ प्रयोगकर्ता इजाजत',
          items: [
            'हामी तपाईंलाई एप प्रयोग गर्न सीमित, गैर-विशेष, हस्तान्तरण नहुने इजाजत दिन्छौं',
            'यो इजाजत व्यक्तिगत, गैर-व्यावसायिक प्रयोगको लागि मात्र हो',
            'यो इजाजत तपाईंको खाता समाप्त हुँदा समाप्त हुन्छ',
          ],
        },
        userContent: {
          title: '८.३ प्रयोगकर्ता सामग्री',
          items: [
            'तपाईंले एप मार्फत पेश गर्नुभएको सामग्रीको स्वामित्व तपाईंमा रहन्छ',
            'तपाईंले हामीलाई सेवाहरू प्रदान गर्न त्यस्तो सामग्री प्रयोग गर्न इजाजत दिनुहुन्छ',
            'तपाईं प्रतिनिधित्व गर्नुहुन्छ कि तपाईंसँग त्यस्तो सामग्री पेश गर्ने अधिकार छ',
          ],
        },
      },
      privacy: {
        title: '९. गोपनीयता र डेटा संरक्षण',
        commitment: {
          title: '९.१ गोपनीयता प्रतिबद्धता',
          content: 'तपाईंको गोपनीयता हाम्रो लागि महत्त्वपूर्ण छ। तपाईंको व्यक्तिगत डेटाको संकलन, प्रयोग, र संरक्षण हाम्रो गोपनीयता नीतिद्वारा शासित छ र निम्न अनुपालन गर्दछ:',
          laws: [
            'व्यक्तिगत गोपनीयता ऐन, २०७५ (२०१८)',
            'डिजिटल गोपनीयता तथा डेटा संरक्षण ऐन, २०८२ (२०२५)',
          ],
        },
        collection: {
          title: '९.२ डेटा संकलन',
          content: 'हामी हाम्रा सेवाहरू प्रदान गर्न आवश्यक डेटा संकलन गर्छौं, जसमा:',
          items: [
            'दर्ता जानकारी (नाम, इमेल, फोन)',
            'राइडको क्रममा स्थान डेटा',
            'कारोबार इतिहास',
            'उपकरण जानकारी',
          ],
        },
        usage: {
          title: '९.३ डेटा प्रयोग',
          content: 'तपाईंको डेटा प्रयोग गरिन्छ:',
          items: [
            'हाम्रा सेवाहरू प्रदान र सुधार गर्न',
            'कारोबारहरू प्रशोधन गर्न',
            'सुरक्षा सुनिश्चित गर्न',
            'कानूनी दायित्वहरूको पालना गर्न',
          ],
        },
        security: {
          title: '९.४ डेटा सुरक्षा',
          content: 'हामी नेपालको डेटा संरक्षण कानूनहरूले आवश्यक पारे अनुसार तपाईंको डेटा सुरक्षित गर्न उचित प्राविधिक र संगठनात्मक उपायहरू लागू गर्छौं।',
        },
        note: 'कृपया पूर्ण विवरणको लागि हाम्रो गोपनीयता नीति हेर्नुहोस्।',
      },
      disclaimers: {
        title: '१०. अस्वीकरण र दायित्वको सीमाहरू',
        service: {
          title: '१०.१ सेवा अस्वीकरण',
          items: [
            'सेवाहरू "जस्तो छ" र "जस्तो उपलब्ध छ" आधारमा प्रदान गरिन्छ',
            'हामी निरन्तर वा त्रुटि-रहित सेवाको ग्यारेन्टी दिँदैनौं',
            'हामी चालकहरू वा अन्य प्रयोगकर्ताहरूको आचरणको लागि जिम्मेवार छैनौं',
          ],
        },
        transportation: {
          title: '१०.२ यातायात अस्वीकरण',
          items: [
            'शुभयात्रा टेक्नोलोजी प्लेटफर्म हो, यातायात प्रदायक होइन',
            'हामी यातायात सेवाहरूको गुणस्तर, सुरक्षा, वा वैधताको ग्यारेन्टी दिँदैनौं',
            'चालकहरू आफ्नो यातायात सेवाहरूको लागि पूर्ण रूपमा जिम्मेवार छन्',
          ],
        },
        limitation: {
          title: '१०.३ दायित्वको सीमा',
          content: 'नेपाल कानूनले अनुमति दिएको अधिकतम हदसम्म:',
          items: [
            'हाम्रो दायित्व विशेष सेवाको लागि तिरिएको रकममा सीमित छ',
            'हामी अप्रत्यक्ष, आकस्मिक, वा परिणामात्मक क्षतिहरूको लागि उत्तरदायी छैनौं',
            'हामी चालकहरू वा अन्य तेस्रो पक्षहरूको कार्यको लागि उत्तरदायी छैनौं',
          ],
        },
        forceMajeure: {
          title: '१०.४ अप्रत्याशित घटना',
          content: 'हामी प्राकृतिक प्रकोप, सरकारी कार्य, हड्ताल, वा प्राविधिक विफलताहरू सहित हाम्रो नियन्त्रण बाहिरका परिस्थितिहरूको कारण विफलताहरूको लागि उत्तरदायी छैनौं।',
        },
      },
      indemnification: {
        title: '११. क्षतिपूर्ति',
        content: 'तपाईं शुभयात्रा, यसका अधिकारीहरू, निर्देशकहरू, कर्मचारीहरू, र एजेन्टहरूलाई निम्नबाट उत्पन्न हुने कुनै पनि दावी, क्षति, हानि, वा खर्चहरूबाट क्षतिपूर्ति दिन र हानिरहित राख्न सहमत हुनुहुन्छ:',
        items: [
          'तपाईंको सेवाहरूको प्रयोग',
          'यी सर्तहरूको तपाईंको उल्लङ्घन',
          'कुनै पनि तेस्रो-पक्ष अधिकारहरूको तपाईंको उल्लङ्घन',
          'लागू कानूनहरूको तपाईंको उल्लङ्घन',
        ],
      },
      disputes: {
        title: '१२. विवाद समाधान',
        governingLaw: {
          title: '१२.१ शासकीय कानून',
          content: 'यी सर्तहरू नेपालको कानूनद्वारा शासित छन्।',
        },
        informal: {
          title: '१२.२ अनौपचारिक समाधान',
          content: 'कुनै पनि औपचारिक दावी दायर गर्नु अघि, तपाईं अनौपचारिक समाधानको प्रयास गर्न हामीलाई सम्पर्क गर्न सहमत हुनुहुन्छ।',
        },
        jurisdiction: {
          title: '१२.३ क्षेत्राधिकार',
          content: 'कुनै पनि विवादहरू काठमाडौं, नेपालका अदालतहरूको विशेष क्षेत्राधिकारको अधीनमा हुनेछन्।',
        },
        consumerRights: {
          title: '१२.४ उपभोक्ता अधिकार',
          content: 'यी सर्तहरूमा केही पनि उपभोक्ता संरक्षण ऐन, २०७५ अन्तर्गतको तपाईंको वैधानिक अधिकारलाई असर गर्दैन।',
        },
      },
      modifications: {
        title: '१३. सर्तहरूमा परिमार्जन',
        right: {
          title: '१३.१ परिमार्जन गर्ने अधिकार',
          content: 'हामी जुनसुकै बेला यी सर्तहरू परिमार्जन गर्ने अधिकार सुरक्षित राख्छौं।',
        },
        notification: {
          title: '१३.२ परिवर्तनहरूको सूचना',
          items: [
            'महत्त्वपूर्ण परिवर्तनहरू एप वा इमेल मार्फत सूचित गरिनेछ',
            'परिवर्तनहरू पछि निरन्तर प्रयोगले स्वीकृति गठन गर्दछ',
          ],
        },
        recommendation: {
          title: '१३.३ समीक्षा सिफारिस',
          content: 'हामी तपाईंलाई यी सर्तहरू समय-समयमा समीक्षा गर्न प्रोत्साहित गर्छौं।',
        },
      },
      termination: {
        title: '१४. समाप्ति',
        byUser: {
          title: '१४.१ प्रयोगकर्ताद्वारा समाप्ति',
          content: 'तपाईं जुनसुकै बेला आफ्नो खाता समाप्त गर्न सक्नुहुन्छ:',
          items: [
            'ग्राहक समर्थनलाई सम्पर्क गरेर',
            'एपमा खाता मेटाउने सुविधाहरू प्रयोग गरेर',
          ],
        },
        byCompany: {
          title: '१४.२ शुभयात्राद्वारा समाप्ति',
          content: 'हामी तपाईंको खाता निलम्बन वा समाप्त गर्न सक्छौं:',
          items: [
            'यी सर्तहरूको उल्लङ्घन',
            'धोखाधडी वा गैरकानूनी गतिविधि',
            'लामो समयको निष्क्रियता',
            'हाम्रो एकल विवेकमा अन्य कुनै कारण',
          ],
        },
        effect: {
          title: '१४.३ समाप्तिको प्रभाव',
          items: [
            'समाप्तिमा, सेवाहरू प्रयोग गर्ने तपाईंको अधिकार समाप्त हुन्छ',
            'समाप्ति पछि बाँच्नुपर्ने प्रावधानहरू प्रभावमा रहनेछन्',
            'बाँकी दायित्वहरू पूरा गर्नुपर्छ',
          ],
        },
      },
      general: {
        title: '१५. सामान्य प्रावधानहरू',
        entireAgreement: {
          title: '१५.१ सम्पूर्ण सम्झौता',
          content: 'यी सर्तहरू, गोपनीयता नीति र अन्य समावेश कागजातहरूसँग मिलेर, तपाईं र शुभयात्रा बीचको सम्पूर्ण सम्झौता गठन गर्दछ।',
        },
        severability: {
          title: '१५.२ विभाज्यता',
          content: 'यदि कुनै प्रावधान अप्रवर्तनीय पाइयो भने, बाँकी प्रावधानहरू प्रभावमा रहनेछन्।',
        },
        waiver: {
          title: '१५.३ छूट',
          content: 'कुनै पनि अधिकार प्रवर्तन गर्न असफल हुँदा त्यो अधिकारको छूट गठन हुँदैन।',
        },
        assignment: {
          title: '१५.४ हस्तान्तरण',
          content: 'तपाईं यी सर्तहरू हस्तान्तरण गर्न सक्नुहुन्न। हामी प्रतिबन्ध बिना हाम्रो अधिकारहरू हस्तान्तरण गर्न सक्छौं।',
        },
        language: {
          title: '१५.५ भाषा',
          content: 'यी सर्तहरू अंग्रेजीमा प्रदान गरिएको छ। अनुवादको अवस्थामा, अंग्रेजी संस्करण प्रबल हुनेछ।',
        },
      },
      contact: {
        title: '१६. सम्पर्क जानकारी',
        intro: 'यी सर्तहरूको बारेमा प्रश्नहरूको लागि, कृपया हामीलाई सम्पर्क गर्नुहोस्:',
        operator: {
          title: 'सेवा सञ्चालक:',
          company: 'सङ्कट मोचन सजिलो यात्रा प्रा. लि.',
          registration: 'दर्ता: ३६८११५/८१/८२',
          address: 'ठेगाना: चन्द्रपुर, राउठट, मधेश प्रदेश, नेपाल',
          email: 'इमेल: support@subhyatranepal.com',
          phone: 'फोन: +977 9855042503',
          website: 'वेबसाइट: https://subhyatranepal.com',
        },
        technology: {
          title: 'टेक्नोलोजी साझेदार:',
          company: 'नेक्सालारिस टेक प्रा. लि.',
          registration: 'दर्ता: ३५४७९६/८१/८२',
          address: 'ठेगाना: TVS शोरूमको छेउमा, जिरो माइल, जनकपुरधाम, मधेश प्रदेश, नेपाल',
          email: 'इमेल: contact@nexalaris.com',
          phone: 'फोन: +977 9814846711',
        },
        consumer: {
          title: 'उपभोक्ता उजुरीहरूको लागि, तपाईं यहाँ पनि सम्पर्क गर्न सक्नुहुन्छ:',
          items: [
            'वाणिज्य, आपूर्ति र उपभोक्ता संरक्षण विभाग',
            'उपभोक्ता अदालत (उपभोक्ता संरक्षण ऐन, २०७५ अनुसार)',
          ],
        },
      },
      acknowledgment: {
        title: '१७. स्वीकृति',
        content: 'शुभयात्रा प्रयोग गरेर, तपाईं स्वीकार गर्नुहुन्छ कि तपाईंले यी सेवाका सर्तहरू पढ्नुभयो, बुझ्नुभयो, र पालना गर्न सहमत हुनुहुन्छ।',
      },
      compliance: 'यी सेवाका सर्तहरू नेपालको व्यक्तिगत गोपनीयता ऐन २०७५, उपभोक्ता संरक्षण ऐन २०७५, इलेक्ट्रोनिक कारोबार ऐन २०६३, र लागू यातायात नियमहरूको अनुपालनमा छन्।',
    },
  },
};

export default function TermsOfServicePage() {
  const { language } = useLanguage();
  const c = content[language];
  const s = c.sections;

  return (
    <LegalPageLayout
      title={c.title}
      lastUpdated={c.lastUpdated}
      tableOfContents={c.tableOfContents}
      language={language}
    >
      {/* Section 1: Introduction */}
      <section id="introduction" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.intro.title}</h2>

        <h3 className="text-xl font-semibold mb-3">{s.intro.agreement.title}</h3>
        <p className="text-gray-700 mb-6">{s.intro.agreement.content}</p>

        <h3 className="text-xl font-semibold mb-3">{s.intro.about.title}</h3>
        <p className="text-gray-700 mb-6">{s.intro.about.content}</p>

        <h3 className="text-xl font-semibold mb-3">{s.intro.compliance.title}</h3>
        <p className="text-gray-700 mb-3">{s.intro.compliance.content}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {s.intro.compliance.laws.map((law, i) => (
            <li key={i}>{law}</li>
          ))}
        </ul>
      </section>

      {/* Section 2: Eligibility */}
      <section id="eligibility" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.eligibility.title}</h2>

        <h3 className="text-xl font-semibold mb-3">{s.eligibility.requirements.title}</h3>
        <p className="text-gray-700 mb-3">{s.eligibility.requirements.content}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.eligibility.requirements.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.eligibility.creation.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.eligibility.creation.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.eligibility.verification.title}</h3>
        <p className="text-gray-700 mb-3">{s.eligibility.verification.content}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {s.eligibility.verification.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Section 3: Services */}
      <section id="services" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.services.title}</h2>

        <h3 className="text-xl font-semibold mb-3">{s.services.platform.title}</h3>
        <p className="text-gray-700 mb-3">{s.services.platform.content}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.services.platform.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.services.transportation.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.services.transportation.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.services.types.title}</h3>
        <p className="text-gray-700 mb-2">{s.services.types.content}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li><strong>{language === 'en' ? 'City Rides:' : 'सिटी राइड:'}</strong> {s.services.types.city.split(':')[1]}</li>
          <li><strong>{language === 'en' ? 'Intercity Rides:' : 'इन्टरसिटी राइड:'}</strong> {s.services.types.intercity.split(':')[1]}</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.services.availability.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {s.services.availability.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Section 4: User Obligations */}
      <section id="user-obligations" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.userObligations.title}</h2>

        <h3 className="text-xl font-semibold mb-3">{s.userObligations.general.title}</h3>
        <p className="text-gray-700 mb-3">{s.userObligations.general.content}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.userObligations.general.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.userObligations.prohibited.title}</h3>
        <p className="text-gray-700 mb-3">{s.userObligations.prohibited.content}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.userObligations.prohibited.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.userObligations.safety.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {s.userObligations.safety.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Section 5: Fares */}
      <section id="fares" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.fares.title}</h2>

        <h3 className="text-xl font-semibold mb-3">{s.fares.calculation.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.fares.calculation.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.fares.components.title}</h3>
        <p className="text-gray-700 mb-3">{s.fares.components.content}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.fares.components.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.fares.methods.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.fares.methods.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.fares.disputes.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.fares.disputes.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.fares.noRefunds.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {s.fares.noRefunds.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Section 6: Cancellation */}
      <section id="cancellation" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.cancellation.title}</h2>

        <h3 className="text-xl font-semibold mb-3">{s.cancellation.passenger.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.cancellation.passenger.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.cancellation.driver.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.cancellation.driver.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.cancellation.noShow.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          {s.cancellation.noShow.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <p className="text-gray-600 italic bg-slate-100 p-4 rounded-lg">{s.cancellation.note}</p>
      </section>

      {/* Section 7: Driver Terms */}
      <section id="driver-terms" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.driverTerms.title}</h2>

        <h3 className="text-xl font-semibold mb-3">{s.driverTerms.contractor.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.driverTerms.contractor.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.driverTerms.eligibility.title}</h3>
        <p className="text-gray-700 mb-3">{s.driverTerms.eligibility.content}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.driverTerms.eligibility.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.driverTerms.commission.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.driverTerms.commission.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.driverTerms.agreement.title}</h3>
        <p className="text-gray-700">{s.driverTerms.agreement.content}</p>
      </section>

      {/* Section 8: Intellectual Property */}
      <section id="intellectual-property" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.intellectualProperty.title}</h2>

        <h3 className="text-xl font-semibold mb-3">{s.intellectualProperty.ownership.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.intellectualProperty.ownership.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.intellectualProperty.userLicense.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.intellectualProperty.userLicense.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.intellectualProperty.userContent.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {s.intellectualProperty.userContent.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Section 9: Privacy */}
      <section id="privacy" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.privacy.title}</h2>

        <h3 className="text-xl font-semibold mb-3">{s.privacy.commitment.title}</h3>
        <p className="text-gray-700 mb-3">{s.privacy.commitment.content}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.privacy.commitment.laws.map((law, i) => (
            <li key={i}>{law}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.privacy.collection.title}</h3>
        <p className="text-gray-700 mb-3">{s.privacy.collection.content}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.privacy.collection.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.privacy.usage.title}</h3>
        <p className="text-gray-700 mb-3">{s.privacy.usage.content}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.privacy.usage.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.privacy.security.title}</h3>
        <p className="text-gray-700 mb-4">{s.privacy.security.content}</p>

        <p className="text-gray-600 italic bg-slate-100 p-4 rounded-lg">{s.privacy.note}</p>
      </section>

      {/* Section 10: Disclaimers */}
      <section id="disclaimers" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.disclaimers.title}</h2>

        <h3 className="text-xl font-semibold mb-3">{s.disclaimers.service.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.disclaimers.service.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.disclaimers.transportation.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.disclaimers.transportation.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.disclaimers.limitation.title}</h3>
        <p className="text-gray-700 mb-3">{s.disclaimers.limitation.content}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.disclaimers.limitation.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.disclaimers.forceMajeure.title}</h3>
        <p className="text-gray-700">{s.disclaimers.forceMajeure.content}</p>
      </section>

      {/* Section 11: Indemnification */}
      <section id="indemnification" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.indemnification.title}</h2>
        <p className="text-gray-700 mb-4">{s.indemnification.content}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {s.indemnification.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Section 12: Disputes */}
      <section id="disputes" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.disputes.title}</h2>

        <h3 className="text-xl font-semibold mb-3">{s.disputes.governingLaw.title}</h3>
        <p className="text-gray-700 mb-6">{s.disputes.governingLaw.content}</p>

        <h3 className="text-xl font-semibold mb-3">{s.disputes.informal.title}</h3>
        <p className="text-gray-700 mb-6">{s.disputes.informal.content}</p>

        <h3 className="text-xl font-semibold mb-3">{s.disputes.jurisdiction.title}</h3>
        <p className="text-gray-700 mb-6">{s.disputes.jurisdiction.content}</p>

        <h3 className="text-xl font-semibold mb-3">{s.disputes.consumerRights.title}</h3>
        <p className="text-gray-700">{s.disputes.consumerRights.content}</p>
      </section>

      {/* Section 13: Modifications */}
      <section id="modifications" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.modifications.title}</h2>

        <h3 className="text-xl font-semibold mb-3">{s.modifications.right.title}</h3>
        <p className="text-gray-700 mb-6">{s.modifications.right.content}</p>

        <h3 className="text-xl font-semibold mb-3">{s.modifications.notification.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.modifications.notification.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.modifications.recommendation.title}</h3>
        <p className="text-gray-700">{s.modifications.recommendation.content}</p>
      </section>

      {/* Section 14: Termination */}
      <section id="termination" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.termination.title}</h2>

        <h3 className="text-xl font-semibold mb-3">{s.termination.byUser.title}</h3>
        <p className="text-gray-700 mb-3">{s.termination.byUser.content}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.termination.byUser.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.termination.byCompany.title}</h3>
        <p className="text-gray-700 mb-3">{s.termination.byCompany.content}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          {s.termination.byCompany.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{s.termination.effect.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {s.termination.effect.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Section 15: General Provisions */}
      <section id="general" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.general.title}</h2>

        <h3 className="text-xl font-semibold mb-3">{s.general.entireAgreement.title}</h3>
        <p className="text-gray-700 mb-6">{s.general.entireAgreement.content}</p>

        <h3 className="text-xl font-semibold mb-3">{s.general.severability.title}</h3>
        <p className="text-gray-700 mb-6">{s.general.severability.content}</p>

        <h3 className="text-xl font-semibold mb-3">{s.general.waiver.title}</h3>
        <p className="text-gray-700 mb-6">{s.general.waiver.content}</p>

        <h3 className="text-xl font-semibold mb-3">{s.general.assignment.title}</h3>
        <p className="text-gray-700 mb-6">{s.general.assignment.content}</p>

        <h3 className="text-xl font-semibold mb-3">{s.general.language.title}</h3>
        <p className="text-gray-700">{s.general.language.content}</p>
      </section>

      {/* Section 16: Contact */}
      <section id="contact" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.contact.title}</h2>
        <p className="text-gray-700 mb-6">{s.contact.intro}</p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-brand-dark-blue mb-3">{s.contact.operator.title}</h3>
            <p className="font-medium">{s.contact.operator.company}</p>
            <p className="text-gray-700 text-sm">{s.contact.operator.registration}</p>
            <p className="text-gray-700 text-sm">{s.contact.operator.address}</p>
            <p className="text-gray-700 text-sm">{s.contact.operator.email}</p>
            <p className="text-gray-700 text-sm">{s.contact.operator.phone}</p>
            <p className="text-gray-700 text-sm">{s.contact.operator.website}</p>
          </div>

          <div className="bg-slate-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-brand-dark-blue mb-3">{s.contact.technology.title}</h3>
            <p className="font-medium">{s.contact.technology.company}</p>
            <p className="text-gray-700 text-sm">{s.contact.technology.registration}</p>
            <p className="text-gray-700 text-sm">{s.contact.technology.address}</p>
            <p className="text-gray-700 text-sm">{s.contact.technology.email}</p>
            <p className="text-gray-700 text-sm">{s.contact.technology.phone}</p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <p className="font-medium mb-2">{s.contact.consumer.title}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            {s.contact.consumer.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 17: Acknowledgment */}
      <section id="acknowledgment" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.acknowledgment.title}</h2>
        <p className="text-gray-700 mb-6">{s.acknowledgment.content}</p>

        <p className="text-sm text-gray-500 italic border-t pt-4">
          {s.compliance}
        </p>
      </section>
    </LegalPageLayout>
  );
}
