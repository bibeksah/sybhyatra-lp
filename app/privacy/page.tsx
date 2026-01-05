'use client';

import { LegalPageLayout } from '@/components/legal/LegalPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'January 2026',
    tableOfContents: [
      { id: 'introduction', title: '1. Introduction' },
      { id: 'information-collection', title: '2. Information We Collect' },
      { id: 'purpose', title: '3. Purpose of Data Collection' },
      { id: 'consent', title: '4. Consent' },
      { id: 'data-storage', title: '5. Data Storage and Security' },
      { id: 'data-retention', title: '6. Data Retention' },
      { id: 'data-sharing', title: '7. Data Sharing and Disclosure' },
      { id: 'your-rights', title: '8. Your Rights' },
      { id: 'location-data', title: '9. Location Data' },
      { id: 'cookies', title: '10. Cookies and Tracking' },
      { id: 'children-privacy', title: "11. Children's Privacy" },
      { id: 'international-transfers', title: '12. International Data Transfers' },
      { id: 'changes', title: '13. Changes to This Policy' },
      { id: 'dpo', title: '14. Data Protection Officer' },
      { id: 'contact', title: '15. Contact Us' },
      { id: 'acknowledgment', title: '16. Acknowledgment' },
    ],
    sections: {
      intro: {
        title: '1. Introduction',
        commitment: {
          title: '1.1 Commitment to Privacy',
          content:
            'Sankat Mochan Sajilo Yatra Pvt. Ltd. (Registration No. 368115/81/82), operating the SubhYatra platform ("SubhYatra," "we," "us," or "our"), is committed to protecting your privacy and ensuring the security of your personal information. The SubhYatra application is developed by Nexalaris Tech Pvt. Ltd. (Technology Partner). This Privacy Policy explains how we collect, use, store, share, and protect your personal data when you use our mobile application and services.',
        },
        legalFramework: {
          title: '1.2 Legal Framework',
          content: 'This Privacy Policy is designed to comply with:',
          items: [
            'Individual Privacy Act, 2075 (2018) - Nepal\'s primary privacy legislation',
            'Individual Privacy Regulation, 2077 (2020) - Implementation rules',
            'Digital Privacy and Data Protection Act, 2082 (2025) - New comprehensive data protection law',
            'Electronic Transaction Act, 2063 (2008) - Digital transaction regulations',
            'Consumer Protection Act, 2075 (2018) - Consumer rights protection',
          ],
        },
        dataController: {
          title: '1.3 Data Controller',
          content: 'Sankat Mochan Sajilo Yatra Pvt. Ltd. is the data controller responsible for your personal data.',
          details: {
            company: 'Sankat Mochan Sajilo Yatra Pvt. Ltd.',
            registration: '368115/81/82',
            address: 'Chandrapur, Rauthad, Madhesh Province, Nepal',
            email: 'privacy@subhyatranepal.com | sankatmochan1992@gmail.com',
            phone: '+977 9808877530',
            website: 'https://subhyatranepal.com',
          },
          techPartner: {
            title: 'Technology Partner (IP Owner):',
            company: 'Nexalaris Tech Pvt. Ltd.',
            registration: '354796/81/82',
            email: 'contact@nexalaris.com',
          },
        },
      },
      informationCollection: {
        title: '2. Information We Collect',
        directInfo: {
          title: '2.1 Information You Provide Directly',
          subsections: [
            {
              title: 'Account Registration Information',
              items: ['Full name', 'Email address', 'Phone number', 'Profile photograph (optional)', 'Password (encrypted)'],
            },
            {
              title: 'Identity Verification Information',
              items: ['Government-issued ID (for drivers)', 'Driving license details (for drivers)', 'Vehicle registration documents (for drivers)'],
            },
            {
              title: 'Transaction Information',
              items: ['Ride history', 'Payment records', 'Fare details'],
            },
            {
              title: 'Communication Information',
              items: ['Customer support inquiries', 'Feedback and reviews', 'In-app messages'],
            },
          ],
        },
        autoInfo: {
          title: '2.2 Information Collected Automatically',
          subsections: [
            {
              title: 'Location Data',
              items: [
                'Real-time GPS location during active rides (passengers and drivers)',
                'Background location for drivers when online/available',
                'Pickup and drop-off locations',
                'Route information',
              ],
            },
            {
              title: 'Device Information',
              items: ['Device type and model', 'Operating system version', 'Unique device identifiers', 'Mobile network information', 'IP address'],
            },
            {
              title: 'Usage Information',
              items: ['App usage patterns', 'Feature interactions', 'Session duration', 'Crash reports and diagnostics'],
            },
          ],
        },
        thirdPartyInfo: {
          title: '2.3 Information from Third Parties',
          subsections: [
            {
              title: 'Maps and Navigation Services',
              items: ['Route calculations from Google Maps', 'Traffic information', 'Estimated travel times'],
            },
            {
              title: 'Payment Processors (Future)',
              items: ['Transaction confirmations', 'Payment verification status'],
            },
          ],
        },
      },
      purpose: {
        title: '3. Purpose of Data Collection',
        primary: {
          title: '3.1 Primary Purposes',
          content: 'As required under Section 4 of the Individual Privacy Act, 2075, we collect your data for the following specified purposes:',
          table: [
            { purpose: 'Account creation and management', data: 'Name, email, phone', basis: 'Contract performance' },
            { purpose: 'Providing ride services', data: 'Location, ride details', basis: 'Contract performance' },
            { purpose: 'Fare calculation and billing', data: 'Location, distance, time', basis: 'Contract performance' },
            { purpose: 'Safety and security', data: 'Location, ride history, ID', basis: 'Legitimate interest' },
            { purpose: 'Customer support', data: 'Communications, account data', basis: 'Contract performance' },
            { purpose: 'Service improvement', data: 'Usage data, feedback', basis: 'Legitimate interest' },
            { purpose: 'Legal compliance', data: 'All relevant data', basis: 'Legal obligation' },
          ],
        },
        secondary: {
          title: '3.2 Secondary Purposes',
          content: 'With your consent, we may use data for:',
          items: ['Personalized recommendations', 'Marketing communications', 'Analytics and research (anonymized)'],
        },
        unauthorized: {
          title: '3.3 No Unauthorized Use',
          content:
            "We will NOT use your personal data for any purpose not disclosed in this Policy without obtaining your explicit consent, as required by Nepal's privacy laws.",
        },
      },
      consent: {
        title: '4. Consent',
        obtaining: {
          title: '4.1 Obtaining Consent',
          content: 'In compliance with the Individual Privacy Act, 2075:',
          items: [
            'We obtain your consent before collecting personal information',
            'Consent is obtained through clear affirmative action (accepting this Policy)',
            'You are informed of the purpose of collection at the time of consent',
          ],
        },
        types: {
          title: '4.2 Types of Consent',
          items: [
            'Express Consent: Required for sensitive data and location tracking',
            'Implied Consent: For data necessary to provide requested services',
          ],
        },
        withdrawing: {
          title: '4.3 Withdrawing Consent',
          content: 'You may withdraw consent at any time by:',
          items: ['Adjusting app permissions', 'Contacting us at privacy@subhyatranepal.com', 'Deleting your account'],
          note: 'Note: Withdrawing consent may limit your ability to use certain features.',
        },
      },
      dataStorage: {
        title: '5. Data Storage and Security',
        localization: {
          title: '5.1 Data Localization',
          content: 'In compliance with the Digital Privacy and Data Protection Act, 2082:',
          items: [
            'User data is primarily stored on servers in the Asia-Pacific region',
            'Sensitive personal data may be stored on servers within Nepal or in compliant jurisdictions',
            'We ensure adequate data protection for any cross-border transfers',
          ],
        },
        security: {
          title: '5.2 Security Measures',
          content: 'We implement robust security measures including:',
          technical: {
            title: 'Technical Measures:',
            items: [
              'End-to-end encryption for sensitive data',
              'Secure HTTPS connections',
              'Database encryption at rest',
              'Regular security audits and penetration testing',
              'Access controls and authentication',
              'Secure API communications',
            ],
          },
          organizational: {
            title: 'Organizational Measures:',
            items: ['Employee data protection training', 'Access limited to authorized personnel only', 'Confidentiality agreements', 'Incident response procedures'],
          },
        },
        breach: {
          title: '5.3 Data Breach Notification',
          content: 'In compliance with the Digital Privacy and Data Protection Act, 2082:',
          items: [
            'We will notify the Data Protection Authority within 72 hours of discovering a breach',
            'Affected individuals will be notified promptly if the breach poses high risk',
            'We maintain records of all data breaches and responses',
          ],
        },
      },
      dataRetention: {
        title: '6. Data Retention',
        periods: {
          title: '6.1 Retention Periods',
          table: [
            { dataType: 'Account information', period: 'Duration of account + 2 years', reason: 'Service provision and legal requirements' },
            { dataType: 'Ride history', period: '5 years', reason: 'Legal compliance, dispute resolution' },
            { dataType: 'Location traces', period: '30 days', reason: 'Safety and dispute resolution' },
            { dataType: 'Transaction records', period: '5 years', reason: 'Financial and tax regulations' },
            { dataType: 'Support communications', period: '3 years', reason: 'Quality assurance, dispute resolution' },
            { dataType: 'Audit logs', period: '5 years', reason: 'Security and compliance' },
          ],
        },
        principles: {
          title: '6.2 Retention Principles',
          items: [
            'Data is retained only as long as necessary for stated purposes',
            'Anonymized data may be retained longer for analytics',
            'Legal requirements may mandate longer retention',
          ],
        },
        deletion: {
          title: '6.3 Data Deletion',
          content: 'Upon account deletion or retention period expiry:',
          items: ['Personal data is securely deleted or anonymized', 'Backup data is purged within 90 days', 'Legal hold data is retained as required'],
        },
      },
      dataSharing: {
        title: '7. Data Sharing and Disclosure',
        serviceProviders: {
          title: '7.1 Sharing with Service Providers',
          content: 'We share data with trusted service providers who assist us:',
          table: [
            { provider: 'Cloud hosting (Supabase)', data: 'All service data', purpose: 'Data storage and processing' },
            { provider: 'Maps provider (Google)', data: 'Location data', purpose: 'Navigation and routing' },
            { provider: 'Push notifications (Firebase)', data: 'Device tokens', purpose: 'Notifications delivery' },
            { provider: 'Analytics', data: 'Anonymized usage data', purpose: 'Service improvement' },
          ],
          note: 'All service providers are contractually bound to protect your data.',
        },
        betweenUsers: {
          title: '7.2 Sharing Between Users',
          items: [
            'Passengers see: Driver name, photo, vehicle details, rating, live location during ride',
            'Drivers see: Passenger name, pickup/drop location, contact option',
          ],
        },
        safety: {
          title: '7.3 Sharing for Safety',
          content: 'We may share data with:',
          items: [
            'Emergency services when safety is at risk',
            'Law enforcement pursuant to valid legal process',
            'Emergency contacts (when SOS feature is activated)',
          ],
        },
        legal: {
          title: '7.4 Legal Disclosure',
          content: 'We may disclose data when required by:',
          items: ['Court orders', 'Government authority requests', 'Legal proceedings', 'Protection of rights and safety'],
        },
        noSale: {
          title: '7.5 No Sale of Data',
          content: 'We do NOT sell your personal data to third parties for marketing purposes.',
        },
      },
      yourRights: {
        title: '8. Your Rights',
        nepalLaw: {
          title: '8.1 Rights Under Nepal Law',
          content: 'Under the Individual Privacy Act, 2075 and Digital Privacy and Data Protection Act, 2082, you have the right to:',
          rights: [
            { name: 'Right to Access', description: 'Request a copy of your personal data we hold and understand how your data is being used' },
            { name: 'Right to Correction', description: 'Request correction of inaccurate data and update incomplete information' },
            { name: 'Right to Deletion', description: 'Request deletion of your personal data, subject to legal retention requirements' },
            { name: 'Right to Object', description: 'Object to processing for certain purposes and opt-out of marketing communications' },
            { name: 'Right to Data Portability', description: 'Receive your data in a structured, commonly used format and transfer your data to another service' },
            { name: 'Right to Withdraw Consent', description: 'Withdraw previously given consent, without affecting lawfulness of prior processing' },
          ],
        },
        exercise: {
          title: '8.2 Exercising Your Rights',
          content: 'To exercise your rights:',
          items: ['Email us at privacy@subhyatranepal.com', 'Use in-app privacy settings', 'Contact customer support'],
          note: 'We will respond to requests within 30 days as required by law.',
        },
        complain: {
          title: '8.3 Right to Complain',
          content: 'If you believe your privacy rights have been violated, you may:',
          items: [
            'Contact us first for resolution',
            'File a complaint with the Data Protection Authority of Nepal',
            'Seek compensation through the District Court (Section 31, Individual Privacy Act)',
          ],
        },
      },
      locationData: {
        title: '9. Location Data',
        why: {
          title: '9.1 Why We Collect Location Data',
          content: 'Location data is essential for:',
          items: [
            'Connecting you with nearby drivers',
            'Providing accurate fare estimates',
            'Enabling real-time ride tracking',
            'Ensuring safety during rides',
            'Improving service coverage',
          ],
        },
        practices: {
          title: '9.2 Location Collection Practices',
          table: [
            { userType: 'Passengers', when: 'During ride booking and active rides', purpose: 'Service provision' },
            { userType: 'Drivers (foreground)', when: 'When online and during rides', purpose: 'Service provision' },
            { userType: 'Drivers (background)', when: 'When availability is ON', purpose: 'Driver matching' },
          ],
        },
        permissions: {
          title: '9.3 Location Permissions',
          items: [
            'You control location permissions through your device settings',
            'Denying location permission will prevent core app functionality',
            'Background location for drivers is required for matching',
          ],
        },
        retention: {
          title: '9.4 Location Data Retention',
          items: [
            'Real-time location: Not stored after ride completion',
            'Ride route data: Stored for 30 days',
            'Pickup/drop locations: Stored with ride history (5 years)',
          ],
        },
      },
      cookies: {
        title: '10. Cookies and Tracking',
        mobileApp: {
          title: '10.1 Mobile App Tracking',
          content: 'Our mobile app may use:',
          items: ['Firebase Analytics for usage statistics', 'Crash reporting tools', 'Performance monitoring'],
        },
        website: {
          title: '10.2 Website Cookies',
          content: 'Our website (subhyatranepal.com) uses:',
          items: ['Essential cookies for functionality', 'Analytics cookies (with consent)'],
        },
        managing: {
          title: '10.3 Managing Preferences',
          content: 'You can manage tracking through:',
          items: ['App settings', 'Device advertising settings', 'Browser cookie settings'],
        },
      },
      childrenPrivacy: {
        title: "11. Children's Privacy",
        restriction: {
          title: '11.1 Age Restriction',
          items: [
            'Our Services are not intended for individuals under 18 years',
            'We do not knowingly collect data from minors',
            'Minors may only use Services under adult supervision',
          ],
        },
        parental: {
          title: '11.2 Parental Rights',
          content: 'If you believe we have collected data from a minor:',
          items: ['Contact us immediately at privacy@subhyatranepal.com', 'We will promptly delete such data'],
        },
      },
      internationalTransfers: {
        title: '12. International Data Transfers',
        mechanisms: {
          title: '12.1 Transfer Mechanisms',
          content: 'When data is transferred outside Nepal:',
          items: [
            'We ensure adequate protection measures',
            "Transfers comply with Nepal's data protection requirements",
            'Service providers are bound by data protection agreements',
          ],
        },
        servers: {
          title: '12.2 Server Locations',
          items: ['Primary servers: Asia-Pacific region', 'Backup servers: Secure cloud infrastructure', 'CDN: Global distribution for performance'],
        },
      },
      changes: {
        title: '13. Changes to This Policy',
        updates: {
          title: '13.1 Policy Updates',
          content: 'We may update this Privacy Policy to reflect:',
          items: ['Changes in our practices', 'New features or services', 'Legal or regulatory requirements'],
        },
        notification: {
          title: '13.2 Notification of Changes',
          items: [
            'Material changes will be notified via email or in-app notification',
            'Updated Policy will be posted on our website and app',
            'Continued use constitutes acceptance of changes',
          ],
        },
        history: {
          title: '13.3 Review History',
          items: ['Version 1.0: January 2026 (Initial release)'],
        },
      },
      dpo: {
        title: '14. Data Protection Officer',
        appointment: {
          title: '14.1 DPO Appointment',
          content: 'In compliance with the Digital Privacy and Data Protection Act, 2082, we have appointed a Data Protection Officer.',
        },
        contact: {
          title: '14.2 DPO Contact',
          email: 'dpo@subhyatranepal.com',
          purpose: 'For privacy-related inquiries and complaints',
        },
      },
      contact: {
        title: '15. Contact Us',
        privacy: {
          title: '15.1 Privacy Inquiries',
          content: 'For questions about this Privacy Policy or your personal data:',
          dataController: {
            title: 'Data Controller (Service Operator):',
            company: 'Sankat Mochan Sajilo Yatra Pvt. Ltd.',
            registration: '368115/81/82',
            privacyEmail: 'privacy@subhyatranepal.com',
            dpoEmail: 'dpo@subhyatranepal.com',
            supportEmail: 'support@subhyatranepal.com',
            phone: '+977 9808877530',
            address: 'Chandrapur, Rauthad, Madhesh Province, Nepal',
            website: 'https://subhyatranepal.com',
          },
          techPartner: {
            title: 'Technology Partner:',
            company: 'Nexalaris Tech Pvt. Ltd.',
            email: 'contact@nexalaris.com',
            phone: '+977 9814846711',
          },
        },
        responseTime: {
          title: '15.2 Response Time',
          content: 'We aim to respond to all privacy-related inquiries within 30 days.',
        },
        regulatory: {
          title: '15.3 Regulatory Authority',
          content: 'Data Protection Authority of Nepal (Contact details to be updated when Authority is established)',
        },
      },
      acknowledgment: {
        title: '16. Acknowledgment',
        content:
          "By using SubhYatra's services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein.",
      },
      compliance: {
        content:
          "This Privacy Policy complies with Nepal's Individual Privacy Act 2075, Individual Privacy Regulation 2077, Digital Privacy and Data Protection Act 2082, Electronic Transaction Act 2063, and Consumer Protection Act 2075.",
      },
    },
  },
  ne: {
    title: 'गोपनीयता नीति',
    lastUpdated: 'जनवरी २०२६',
    tableOfContents: [
      { id: 'introduction', title: '१. परिचय' },
      { id: 'information-collection', title: '२. हामीले संकलन गर्ने जानकारी' },
      { id: 'purpose', title: '३. डाटा संकलनको उद्देश्य' },
      { id: 'consent', title: '४. सहमति' },
      { id: 'data-storage', title: '५. डाटा भण्डारण र सुरक्षा' },
      { id: 'data-retention', title: '६. डाटा संरक्षण' },
      { id: 'data-sharing', title: '७. डाटा साझेदारी र खुलासा' },
      { id: 'your-rights', title: '८. तपाईंको अधिकार' },
      { id: 'location-data', title: '९. स्थान डाटा' },
      { id: 'cookies', title: '१०. कुकीज र ट्र्याकिङ' },
      { id: 'children-privacy', title: '११. बालबालिकाको गोपनीयता' },
      { id: 'international-transfers', title: '१२. अन्तर्राष्ट्रिय डाटा स्थानान्तरण' },
      { id: 'changes', title: '१३. यस नीतिमा परिवर्तनहरू' },
      { id: 'dpo', title: '१४. डाटा संरक्षण अधिकारी' },
      { id: 'contact', title: '१५. हामीलाई सम्पर्क गर्नुहोस्' },
      { id: 'acknowledgment', title: '१६. स्वीकृति' },
    ],
    sections: {
      intro: {
        title: '१. परिचय',
        commitment: {
          title: '१.१ गोपनीयता प्रति प्रतिबद्धता',
          content:
            'सङ्कट मोचन सजिलो यात्रा प्रा. लि. (दर्ता नं. ३६८११५/८१/८२), शुभयात्रा प्लेटफर्म सञ्चालन गर्दै ("शुभयात्रा," "हामी," "हामीलाई," वा "हाम्रो"), तपाईंको गोपनीयता सुरक्षित गर्न र तपाईंको व्यक्तिगत जानकारीको सुरक्षा सुनिश्चित गर्न प्रतिबद्ध छ। शुभयात्रा एप्लिकेसन Nexalaris Tech Pvt. Ltd. (प्रविधि साझेदार) द्वारा विकसित गरिएको हो। यो गोपनीयता नीतिले तपाईंले हाम्रो मोबाइल एप्लिकेसन र सेवाहरू प्रयोग गर्दा हामी कसरी तपाईंको व्यक्तिगत डाटा संकलन, प्रयोग, भण्डारण, साझा र सुरक्षित गर्छौं भनेर व्याख्या गर्दछ।',
        },
        legalFramework: {
          title: '१.२ कानूनी ढाँचा',
          content: 'यो गोपनीयता नीति निम्न कानूनहरूको अनुपालनमा बनाइएको हो:',
          items: [
            'व्यक्तिगत गोपनीयता ऐन, २०७५ - नेपालको प्राथमिक गोपनीयता कानून',
            'व्यक्तिगत गोपनीयता नियमावली, २०७७ - कार्यान्वयन नियमहरू',
            'डिजिटल गोपनीयता तथा डाटा संरक्षण ऐन, २०८२ - नयाँ व्यापक डाटा संरक्षण कानून',
            'विद्युतीय कारोबार ऐन, २०६३ - डिजिटल कारोबार नियमहरू',
            'उपभोक्ता संरक्षण ऐन, २०७५ - उपभोक्ता अधिकार संरक्षण',
          ],
        },
        dataController: {
          title: '१.३ डाटा नियन्त्रक',
          content: 'सङ्कट मोचन सजिलो यात्रा प्रा. लि. तपाईंको व्यक्तिगत डाटाको जिम्मेवार डाटा नियन्त्रक हो।',
          details: {
            company: 'सङ्कट मोचन सजिलो यात्रा प्रा. लि.',
            registration: '३६८११५/८१/८२',
            address: 'चन्द्रपुर, रौताहट, मधेश प्रदेश, नेपाल',
            email: 'privacy@subhyatranepal.com | sankatmochan1992@gmail.com',
            phone: '+९७७ ९८०८८७७५३०',
            website: 'https://subhyatranepal.com',
          },
          techPartner: {
            title: 'प्रविधि साझेदार (आईपी मालिक):',
            company: 'Nexalaris Tech Pvt. Ltd.',
            registration: '३५४७९६/८१/८२',
            email: 'contact@nexalaris.com',
          },
        },
      },
      informationCollection: {
        title: '२. हामीले संकलन गर्ने जानकारी',
        directInfo: {
          title: '२.१ तपाईंले सिधै प्रदान गर्ने जानकारी',
          subsections: [
            {
              title: 'खाता दर्ता जानकारी',
              items: ['पूरा नाम', 'इमेल ठेगाना', 'फोन नम्बर', 'प्रोफाइल फोटो (वैकल्पिक)', 'पासवर्ड (इन्क्रिप्टेड)'],
            },
            {
              title: 'पहिचान प्रमाणीकरण जानकारी',
              items: ['सरकारी पहिचान पत्र (चालकहरूको लागि)', 'चालक अनुमतिपत्र विवरण (चालकहरूको लागि)', 'सवारी दर्ता कागजात (चालकहरूको लागि)'],
            },
            {
              title: 'कारोबार जानकारी',
              items: ['यात्रा इतिहास', 'भुक्तानी रेकर्डहरू', 'भाडा विवरण'],
            },
            {
              title: 'सञ्चार जानकारी',
              items: ['ग्राहक सहायता सोधपुछहरू', 'प्रतिक्रिया र समीक्षाहरू', 'इन-एप सन्देशहरू'],
            },
          ],
        },
        autoInfo: {
          title: '२.२ स्वचालित रूपमा संकलित जानकारी',
          subsections: [
            {
              title: 'स्थान डाटा',
              items: [
                'सक्रिय यात्राको समयमा वास्तविक-समय GPS स्थान (यात्रुहरू र चालकहरू)',
                'अनलाइन/उपलब्ध हुँदा चालकहरूको पृष्ठभूमि स्थान',
                'पिकअप र ड्रप-अफ स्थानहरू',
                'मार्ग जानकारी',
              ],
            },
            {
              title: 'उपकरण जानकारी',
              items: ['उपकरणको प्रकार र मोडेल', 'अपरेटिङ सिस्टम संस्करण', 'अद्वितीय उपकरण पहिचानकर्ताहरू', 'मोबाइल नेटवर्क जानकारी', 'IP ठेगाना'],
            },
            {
              title: 'प्रयोग जानकारी',
              items: ['एप प्रयोग ढाँचाहरू', 'सुविधा अन्तरक्रियाहरू', 'सत्र अवधि', 'क्र्यास रिपोर्ट र निदान'],
            },
          ],
        },
        thirdPartyInfo: {
          title: '२.३ तेस्रो पक्षबाट जानकारी',
          subsections: [
            {
              title: 'नक्सा र नेभिगेसन सेवाहरू',
              items: ['Google Maps बाट मार्ग गणना', 'ट्राफिक जानकारी', 'अनुमानित यात्रा समय'],
            },
            {
              title: 'भुक्तानी प्रोसेसरहरू (भविष्य)',
              items: ['कारोबार पुष्टिकरण', 'भुक्तानी प्रमाणीकरण स्थिति'],
            },
          ],
        },
      },
      purpose: {
        title: '३. डाटा संकलनको उद्देश्य',
        primary: {
          title: '३.१ प्राथमिक उद्देश्यहरू',
          content: 'व्यक्तिगत गोपनीयता ऐन, २०७५ को धारा ४ अनुसार, हामी निम्न निर्दिष्ट उद्देश्यहरूको लागि तपाईंको डाटा संकलन गर्छौं:',
          table: [
            { purpose: 'खाता सिर्जना र व्यवस्थापन', data: 'नाम, इमेल, फोन', basis: 'करार प्रदर्शन' },
            { purpose: 'यात्रा सेवाहरू प्रदान गर्ने', data: 'स्थान, यात्रा विवरण', basis: 'करार प्रदर्शन' },
            { purpose: 'भाडा गणना र बिलिङ', data: 'स्थान, दूरी, समय', basis: 'करार प्रदर्शन' },
            { purpose: 'सुरक्षा', data: 'स्थान, यात्रा इतिहास, पहिचान', basis: 'वैध हित' },
            { purpose: 'ग्राहक सहायता', data: 'सञ्चार, खाता डाटा', basis: 'करार प्रदर्शन' },
            { purpose: 'सेवा सुधार', data: 'प्रयोग डाटा, प्रतिक्रिया', basis: 'वैध हित' },
            { purpose: 'कानूनी अनुपालन', data: 'सबै सान्दर्भिक डाटा', basis: 'कानूनी दायित्व' },
          ],
        },
        secondary: {
          title: '३.२ माध्यमिक उद्देश्यहरू',
          content: 'तपाईंको सहमतिले, हामी डाटा निम्नको लागि प्रयोग गर्न सक्छौं:',
          items: ['व्यक्तिगत सिफारिसहरू', 'मार्केटिङ सञ्चारहरू', 'विश्लेषण र अनुसन्धान (अज्ञात)'],
        },
        unauthorized: {
          title: '३.३ अनाधिकृत प्रयोग छैन',
          content:
            'नेपालको गोपनीयता कानून अनुसार, हामी यस नीतिमा खुलासा नगरिएको कुनै पनि उद्देश्यको लागि तपाईंको स्पष्ट सहमति बिना तपाईंको व्यक्तिगत डाटा प्रयोग गर्दैनौं।',
        },
      },
      consent: {
        title: '४. सहमति',
        obtaining: {
          title: '४.१ सहमति प्राप्त गर्ने',
          content: 'व्यक्तिगत गोपनीयता ऐन, २०७५ को अनुपालनमा:',
          items: [
            'हामी व्यक्तिगत जानकारी संकलन गर्नु अघि तपाईंको सहमति प्राप्त गर्छौं',
            'सहमति स्पष्ट सकारात्मक कार्य (यो नीति स्वीकार गर्ने) मार्फत प्राप्त गरिन्छ',
            'सहमतिको समयमा तपाईंलाई संकलनको उद्देश्यको बारेमा जानकारी दिइन्छ',
          ],
        },
        types: {
          title: '४.२ सहमतिका प्रकारहरू',
          items: ['स्पष्ट सहमति: संवेदनशील डाटा र स्थान ट्र्याकिङको लागि आवश्यक', 'अन्तर्निहित सहमति: अनुरोध गरिएका सेवाहरू प्रदान गर्न आवश्यक डाटाको लागि'],
        },
        withdrawing: {
          title: '४.३ सहमति फिर्ता लिने',
          content: 'तपाईं जुनसुकै समय सहमति फिर्ता लिन सक्नुहुन्छ:',
          items: ['एप अनुमतिहरू समायोजन गरेर', 'privacy@subhyatranepal.com मा सम्पर्क गरेर', 'तपाईंको खाता मेटाएर'],
          note: 'नोट: सहमति फिर्ता लिँदा केही सुविधाहरू प्रयोग गर्ने तपाईंको क्षमता सीमित हुन सक्छ।',
        },
      },
      dataStorage: {
        title: '५. डाटा भण्डारण र सुरक्षा',
        localization: {
          title: '५.१ डाटा स्थानीयकरण',
          content: 'डिजिटल गोपनीयता तथा डाटा संरक्षण ऐन, २०८२ को अनुपालनमा:',
          items: [
            'प्रयोगकर्ता डाटा मुख्यतया एशिया-प्यासिफिक क्षेत्रको सर्भरमा भण्डारण गरिन्छ',
            'संवेदनशील व्यक्तिगत डाटा नेपाल भित्र वा अनुपालन क्षेत्राधिकारमा भण्डारण गर्न सकिन्छ',
            'हामी कुनै पनि सीमापार स्थानान्तरणको लागि पर्याप्त डाटा संरक्षण सुनिश्चित गर्छौं',
          ],
        },
        security: {
          title: '५.२ सुरक्षा उपायहरू',
          content: 'हामी बलियो सुरक्षा उपायहरू लागू गर्छौं जसमा समावेश छन्:',
          technical: {
            title: 'प्राविधिक उपायहरू:',
            items: [
              'संवेदनशील डाटाको लागि एन्ड-टु-एन्ड इन्क्रिप्सन',
              'सुरक्षित HTTPS जडानहरू',
              'विश्राममा डाटाबेस इन्क्रिप्सन',
              'नियमित सुरक्षा अडिट र पेनिट्रेसन परीक्षण',
              'पहुँच नियन्त्रण र प्रमाणीकरण',
              'सुरक्षित API सञ्चार',
            ],
          },
          organizational: {
            title: 'संगठनात्मक उपायहरू:',
            items: ['कर्मचारी डाटा संरक्षण तालिम', 'अधिकृत कर्मचारीहरूमा मात्र पहुँच सीमित', 'गोपनीयता सम्झौताहरू', 'घटना प्रतिक्रिया प्रक्रियाहरू'],
          },
        },
        breach: {
          title: '५.३ डाटा उल्लङ्घन सूचना',
          content: 'डिजिटल गोपनीयता तथा डाटा संरक्षण ऐन, २०८२ को अनुपालनमा:',
          items: [
            'हामी उल्लङ्घन पत्ता लागेको ७२ घण्टा भित्र डाटा संरक्षण प्राधिकरणलाई सूचित गर्नेछौं',
            'उल्लङ्घनले उच्च जोखिम निम्त्याउँछ भने प्रभावित व्यक्तिहरूलाई तुरुन्त सूचित गरिनेछ',
            'हामी सबै डाटा उल्लङ्घन र प्रतिक्रियाहरूको रेकर्ड राख्छौं',
          ],
        },
      },
      dataRetention: {
        title: '६. डाटा संरक्षण',
        periods: {
          title: '६.१ संरक्षण अवधि',
          table: [
            { dataType: 'खाता जानकारी', period: 'खाताको अवधि + २ वर्ष', reason: 'सेवा प्रावधान र कानूनी आवश्यकताहरू' },
            { dataType: 'यात्रा इतिहास', period: '५ वर्ष', reason: 'कानूनी अनुपालन, विवाद समाधान' },
            { dataType: 'स्थान ट्रेसहरू', period: '३० दिन', reason: 'सुरक्षा र विवाद समाधान' },
            { dataType: 'कारोबार रेकर्डहरू', period: '५ वर्ष', reason: 'वित्तीय र कर नियमहरू' },
            { dataType: 'सहायता सञ्चारहरू', period: '३ वर्ष', reason: 'गुणस्तर सुनिश्चितता, विवाद समाधान' },
            { dataType: 'अडिट लगहरू', period: '५ वर्ष', reason: 'सुरक्षा र अनुपालन' },
          ],
        },
        principles: {
          title: '६.२ संरक्षण सिद्धान्तहरू',
          items: [
            'डाटा भनिएका उद्देश्यहरूको लागि आवश्यक भएसम्म मात्र राखिन्छ',
            'अज्ञात डाटा विश्लेषणको लागि लामो समयसम्म राख्न सकिन्छ',
            'कानूनी आवश्यकताहरूले लामो संरक्षण अनिवार्य गर्न सक्छन्',
          ],
        },
        deletion: {
          title: '६.३ डाटा मेटाउने',
          content: 'खाता मेटाउने वा संरक्षण अवधि समाप्त भएपछि:',
          items: ['व्यक्तिगत डाटा सुरक्षित रूपमा मेटाइन्छ वा अज्ञात बनाइन्छ', 'ब्याकअप डाटा ९० दिन भित्र पर्ज गरिन्छ', 'कानूनी होल्ड डाटा आवश्यकता अनुसार राखिन्छ'],
        },
      },
      dataSharing: {
        title: '७. डाटा साझेदारी र खुलासा',
        serviceProviders: {
          title: '७.१ सेवा प्रदायकहरूसँग साझेदारी',
          content: 'हामी हामीलाई सहयोग गर्ने विश्वसनीय सेवा प्रदायकहरूसँग डाटा साझा गर्छौं:',
          table: [
            { provider: 'क्लाउड होस्टिङ (Supabase)', data: 'सबै सेवा डाटा', purpose: 'डाटा भण्डारण र प्रशोधन' },
            { provider: 'नक्सा प्रदायक (Google)', data: 'स्थान डाटा', purpose: 'नेभिगेसन र राउटिङ' },
            { provider: 'पुश सूचनाहरू (Firebase)', data: 'उपकरण टोकनहरू', purpose: 'सूचना डेलिभरी' },
            { provider: 'विश्लेषण', data: 'अज्ञात प्रयोग डाटा', purpose: 'सेवा सुधार' },
          ],
          note: 'सबै सेवा प्रदायकहरू तपाईंको डाटा सुरक्षित गर्न करारबद्ध छन्।',
        },
        betweenUsers: {
          title: '७.२ प्रयोगकर्ताहरूबीच साझेदारी',
          items: [
            'यात्रुहरूले देख्छन्: चालकको नाम, फोटो, सवारी विवरण, मूल्याङ्कन, यात्राको समयमा लाइभ स्थान',
            'चालकहरूले देख्छन्: यात्रुको नाम, पिकअप/ड्रप स्थान, सम्पर्क विकल्प',
          ],
        },
        safety: {
          title: '७.३ सुरक्षाको लागि साझेदारी',
          content: 'हामी निम्नसँग डाटा साझा गर्न सक्छौं:',
          items: [
            'सुरक्षा जोखिममा हुँदा आपतकालीन सेवाहरू',
            'वैध कानूनी प्रक्रिया अनुसार कानून प्रवर्तन',
            'आपतकालीन सम्पर्कहरू (SOS सुविधा सक्रिय हुँदा)',
          ],
        },
        legal: {
          title: '७.४ कानूनी खुलासा',
          content: 'हामी निम्न द्वारा आवश्यक हुँदा डाटा खुलासा गर्न सक्छौं:',
          items: ['अदालतको आदेश', 'सरकारी अधिकारी अनुरोध', 'कानूनी कारबाही', 'अधिकार र सुरक्षाको संरक्षण'],
        },
        noSale: {
          title: '७.५ डाटा बिक्री छैन',
          content: 'हामी तपाईंको व्यक्तिगत डाटा मार्केटिङ उद्देश्यका लागि तेस्रो पक्षलाई बिक्री गर्दैनौं।',
        },
      },
      yourRights: {
        title: '८. तपाईंको अधिकार',
        nepalLaw: {
          title: '८.१ नेपाल कानून अन्तर्गत अधिकारहरू',
          content: 'व्यक्तिगत गोपनीयता ऐन, २०७५ र डिजिटल गोपनीयता तथा डाटा संरक्षण ऐन, २०८२ अन्तर्गत, तपाईंलाई निम्न अधिकारहरू छन्:',
          rights: [
            { name: 'पहुँचको अधिकार', description: 'हामीले राखेको तपाईंको व्यक्तिगत डाटाको प्रतिलिपि अनुरोध गर्नुहोस् र तपाईंको डाटा कसरी प्रयोग भइरहेको छ बुझ्नुहोस्' },
            { name: 'सुधारको अधिकार', description: 'गलत डाटा सुधार र अपूर्ण जानकारी अपडेट गर्न अनुरोध गर्नुहोस्' },
            { name: 'मेटाउने अधिकार', description: 'तपाईंको व्यक्तिगत डाटा मेटाउन अनुरोध गर्नुहोस्, कानूनी संरक्षण आवश्यकताहरूको अधीनमा' },
            { name: 'आपत्ति गर्ने अधिकार', description: 'केही उद्देश्यहरूको लागि प्रशोधनमा आपत्ति जनाउनुहोस् र मार्केटिङ सञ्चारबाट अप्ट-आउट गर्नुहोस्' },
            { name: 'डाटा पोर्टेबिलिटीको अधिकार', description: 'तपाईंको डाटा संरचित, सामान्यतया प्रयोग हुने ढाँचामा प्राप्त गर्नुहोस् र तपाईंको डाटा अर्को सेवामा स्थानान्तरण गर्नुहोस्' },
            { name: 'सहमति फिर्ता लिने अधिकार', description: 'पहिले दिइएको सहमति फिर्ता लिनुहोस्, पहिलेको प्रशोधनको वैधतालाई असर नगरी' },
          ],
        },
        exercise: {
          title: '८.२ तपाईंको अधिकार प्रयोग गर्ने',
          content: 'तपाईंको अधिकार प्रयोग गर्न:',
          items: ['privacy@subhyatranepal.com मा इमेल गर्नुहोस्', 'इन-एप गोपनीयता सेटिङहरू प्रयोग गर्नुहोस्', 'ग्राहक सहायतालाई सम्पर्क गर्नुहोस्'],
          note: 'कानून अनुसार हामी ३० दिन भित्र अनुरोधहरूको जवाफ दिनेछौं।',
        },
        complain: {
          title: '८.३ गुनासो गर्ने अधिकार',
          content: 'यदि तपाईंलाई लाग्छ कि तपाईंको गोपनीयता अधिकारहरू उल्लङ्घन भएको छ भने, तपाईं:',
          items: [
            'समाधानको लागि पहिले हामीलाई सम्पर्क गर्नुहोस्',
            'नेपालको डाटा संरक्षण प्राधिकरणमा गुनासो दर्ता गर्नुहोस्',
            'जिल्ला अदालत मार्फत क्षतिपूर्ति खोज्नुहोस् (व्यक्तिगत गोपनीयता ऐनको धारा ३१)',
          ],
        },
      },
      locationData: {
        title: '९. स्थान डाटा',
        why: {
          title: '९.१ हामी किन स्थान डाटा संकलन गर्छौं',
          content: 'स्थान डाटा निम्नको लागि आवश्यक छ:',
          items: [
            'तपाईंलाई नजिकका चालकहरूसँग जोड्ने',
            'सही भाडा अनुमान प्रदान गर्ने',
            'वास्तविक-समय यात्रा ट्र्याकिङ सक्षम गर्ने',
            'यात्राको समयमा सुरक्षा सुनिश्चित गर्ने',
            'सेवा कभरेज सुधार गर्ने',
          ],
        },
        practices: {
          title: '९.२ स्थान संकलन अभ्यासहरू',
          table: [
            { userType: 'यात्रुहरू', when: 'यात्रा बुकिङ र सक्रिय यात्राको समयमा', purpose: 'सेवा प्रावधान' },
            { userType: 'चालकहरू (फोरग्राउन्ड)', when: 'अनलाइन र यात्राको समयमा', purpose: 'सेवा प्रावधान' },
            { userType: 'चालकहरू (ब्याकग्राउन्ड)', when: 'उपलब्धता ON हुँदा', purpose: 'चालक म्याचिङ' },
          ],
        },
        permissions: {
          title: '९.३ स्थान अनुमतिहरू',
          items: [
            'तपाईं आफ्नो उपकरण सेटिङहरू मार्फत स्थान अनुमतिहरू नियन्त्रण गर्नुहुन्छ',
            'स्थान अनुमति अस्वीकार गर्दा मुख्य एप कार्यक्षमता रोकिनेछ',
            'चालकहरूको लागि ब्याकग्राउन्ड स्थान म्याचिङको लागि आवश्यक छ',
          ],
        },
        retention: {
          title: '९.४ स्थान डाटा संरक्षण',
          items: [
            'वास्तविक-समय स्थान: यात्रा पूरा भएपछि भण्डारण गरिँदैन',
            'यात्रा मार्ग डाटा: ३० दिनसम्म भण्डारण गरिन्छ',
            'पिकअप/ड्रप स्थानहरू: यात्रा इतिहाससँग भण्डारण गरिन्छ (५ वर्ष)',
          ],
        },
      },
      cookies: {
        title: '१०. कुकीज र ट्र्याकिङ',
        mobileApp: {
          title: '१०.१ मोबाइल एप ट्र्याकिङ',
          content: 'हाम्रो मोबाइल एपले प्रयोग गर्न सक्छ:',
          items: ['प्रयोग तथ्याङ्कको लागि Firebase Analytics', 'क्र्यास रिपोर्टिङ उपकरणहरू', 'प्रदर्शन निगरानी'],
        },
        website: {
          title: '१०.२ वेबसाइट कुकीज',
          content: 'हाम्रो वेबसाइट (subhyatranepal.com) ले प्रयोग गर्दछ:',
          items: ['कार्यक्षमताको लागि आवश्यक कुकीज', 'विश्लेषण कुकीज (सहमतिले)'],
        },
        managing: {
          title: '१०.३ प्राथमिकताहरू व्यवस्थापन गर्ने',
          content: 'तपाईं ट्र्याकिङ व्यवस्थापन गर्न सक्नुहुन्छ:',
          items: ['एप सेटिङहरू मार्फत', 'उपकरण विज्ञापन सेटिङहरू', 'ब्राउजर कुकी सेटिङहरू'],
        },
      },
      childrenPrivacy: {
        title: '११. बालबालिकाको गोपनीयता',
        restriction: {
          title: '११.१ उमेर प्रतिबन्ध',
          items: [
            'हाम्रो सेवाहरू १८ वर्षमुनिका व्यक्तिहरूको लागि होइन',
            'हामी जानी-बुझी नाबालिगहरूबाट डाटा संकलन गर्दैनौं',
            'नाबालिगहरूले वयस्कको निरीक्षणमा मात्र सेवाहरू प्रयोग गर्न सक्छन्',
          ],
        },
        parental: {
          title: '११.२ अभिभावकीय अधिकार',
          content: 'यदि तपाईंलाई लाग्छ कि हामीले नाबालिगबाट डाटा संकलन गरेका छौं:',
          items: ['तुरुन्त privacy@subhyatranepal.com मा सम्पर्क गर्नुहोस्', 'हामी त्यस्तो डाटा तुरुन्त मेट्नेछौं'],
        },
      },
      internationalTransfers: {
        title: '१२. अन्तर्राष्ट्रिय डाटा स्थानान्तरण',
        mechanisms: {
          title: '१२.१ स्थानान्तरण संयन्त्रहरू',
          content: 'जब डाटा नेपाल बाहिर स्थानान्तरण गरिन्छ:',
          items: [
            'हामी पर्याप्त संरक्षण उपायहरू सुनिश्चित गर्छौं',
            'स्थानान्तरणहरू नेपालको डाटा संरक्षण आवश्यकताहरूको अनुपालन गर्दछन्',
            'सेवा प्रदायकहरू डाटा संरक्षण सम्झौताहरूमा बाध्य छन्',
          ],
        },
        servers: {
          title: '१२.२ सर्भर स्थानहरू',
          items: ['प्राथमिक सर्भरहरू: एशिया-प्यासिफिक क्षेत्र', 'ब्याकअप सर्भरहरू: सुरक्षित क्लाउड पूर्वाधार', 'CDN: प्रदर्शनको लागि विश्वव्यापी वितरण'],
        },
      },
      changes: {
        title: '१३. यस नीतिमा परिवर्तनहरू',
        updates: {
          title: '१३.१ नीति अपडेटहरू',
          content: 'हामी यो गोपनीयता नीति अपडेट गर्न सक्छौं प्रतिबिम्बित गर्न:',
          items: ['हाम्रो अभ्यासमा परिवर्तनहरू', 'नयाँ सुविधाहरू वा सेवाहरू', 'कानूनी वा नियामक आवश्यकताहरू'],
        },
        notification: {
          title: '१३.२ परिवर्तनको सूचना',
          items: [
            'भौतिक परिवर्तनहरू इमेल वा इन-एप सूचना मार्फत सूचित गरिनेछ',
            'अपडेट गरिएको नीति हाम्रो वेबसाइट र एपमा पोस्ट गरिनेछ',
            'निरन्तर प्रयोगले परिवर्तनहरूको स्वीकृति गठन गर्दछ',
          ],
        },
        history: {
          title: '१३.३ समीक्षा इतिहास',
          items: ['संस्करण १.०: जनवरी २०२६ (प्रारम्भिक रिलीज)'],
        },
      },
      dpo: {
        title: '१४. डाटा संरक्षण अधिकारी',
        appointment: {
          title: '१४.१ DPO नियुक्ति',
          content: 'डिजिटल गोपनीयता तथा डाटा संरक्षण ऐन, २०८२ को अनुपालनमा, हामीले डाटा संरक्षण अधिकारी नियुक्त गरेका छौं।',
        },
        contact: {
          title: '१४.२ DPO सम्पर्क',
          email: 'dpo@subhyatranepal.com',
          purpose: 'गोपनीयता-सम्बन्धित सोधपुछ र गुनासोहरूको लागि',
        },
      },
      contact: {
        title: '१५. हामीलाई सम्पर्क गर्नुहोस्',
        privacy: {
          title: '१५.१ गोपनीयता सोधपुछहरू',
          content: 'यस गोपनीयता नीति वा तपाईंको व्यक्तिगत डाटाको बारेमा प्रश्नहरूको लागि:',
          dataController: {
            title: 'डाटा नियन्त्रक (सेवा सञ्चालक):',
            company: 'सङ्कट मोचन सजिलो यात्रा प्रा. लि.',
            registration: '३६८११५/८१/८२',
            privacyEmail: 'privacy@subhyatranepal.com',
            dpoEmail: 'dpo@subhyatranepal.com',
            supportEmail: 'support@subhyatranepal.com',
            phone: '+९७७ ९८०८८७७५३०',
            address: 'चन्द्रपुर, रौताहट, मधेश प्रदेश, नेपाल',
            website: 'https://subhyatranepal.com',
          },
          techPartner: {
            title: 'प्रविधि साझेदार:',
            company: 'Nexalaris Tech Pvt. Ltd.',
            email: 'contact@nexalaris.com',
            phone: '+९७७ ९८१४८४६७११',
          },
        },
        responseTime: {
          title: '१५.२ प्रतिक्रिया समय',
          content: 'हामी सबै गोपनीयता-सम्बन्धित सोधपुछहरूको जवाफ ३० दिन भित्र दिने लक्ष्य राख्छौं।',
        },
        regulatory: {
          title: '१५.३ नियामक प्राधिकरण',
          content: 'नेपालको डाटा संरक्षण प्राधिकरण (प्राधिकरण स्थापना हुँदा सम्पर्क विवरण अपडेट गरिनेछ)',
        },
      },
      acknowledgment: {
        title: '१६. स्वीकृति',
        content:
          'शुभयात्राको सेवाहरू प्रयोग गरेर, तपाईं यस गोपनीयता नीति पढेको र बुझेको र यसमा वर्णन गरिए अनुसार तपाईंको जानकारीको संकलन, प्रयोग र खुलासामा सहमति जनाउनुहुन्छ।',
      },
      compliance: {
        content:
          'यो गोपनीयता नीति नेपालको व्यक्तिगत गोपनीयता ऐन २०७५, व्यक्तिगत गोपनीयता नियमावली २०७७, डिजिटल गोपनीयता तथा डाटा संरक्षण ऐन २०८२, विद्युतीय कारोबार ऐन २०६३, र उपभोक्ता संरक्षण ऐन २०७५ को अनुपालन गर्दछ।',
      },
    },
  },
};

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const c = content[language];
  const s = c.sections;

  return (
    <LegalPageLayout title={c.title} lastUpdated={c.lastUpdated} tableOfContents={c.tableOfContents} language={language}>
      {/* Section 1: Introduction */}
      <section id="introduction" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.intro.title}</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.intro.commitment.title}</h3>
          <p className="text-gray-700">{s.intro.commitment.content}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.intro.legalFramework.title}</h3>
          <p className="mb-3">{s.intro.legalFramework.content}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.intro.legalFramework.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.intro.dataController.title}</h3>
          <p className="mb-4">{s.intro.dataController.content}</p>
          <div className="bg-slate-100 p-4 rounded-lg mb-4">
            <p className="font-semibold text-brand-dark-blue">{s.intro.dataController.details.company}</p>
            <p className="text-gray-700 text-sm">
              {language === 'en' ? 'Registration' : 'दर्ता'}: {s.intro.dataController.details.registration}
            </p>
            <p className="text-gray-700 text-sm">
              {language === 'en' ? 'Address' : 'ठेगाना'}: {s.intro.dataController.details.address}
            </p>
            <p className="text-gray-700 text-sm">
              {language === 'en' ? 'Email' : 'इमेल'}: {s.intro.dataController.details.email}
            </p>
            <p className="text-gray-700 text-sm">
              {language === 'en' ? 'Phone' : 'फोन'}: {s.intro.dataController.details.phone}
            </p>
            <p className="text-gray-700 text-sm">
              {language === 'en' ? 'Website' : 'वेबसाइट'}:{' '}
              <a href={s.intro.dataController.details.website} className="text-brand-yellow hover:underline">
                {s.intro.dataController.details.website}
              </a>
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg">
            <p className="font-semibold text-brand-dark-blue text-sm">{s.intro.dataController.techPartner.title}</p>
            <p className="text-gray-700 text-sm">{s.intro.dataController.techPartner.company}</p>
            <p className="text-gray-700 text-sm">
              {language === 'en' ? 'Registration' : 'दर्ता'}: {s.intro.dataController.techPartner.registration}
            </p>
            <p className="text-gray-700 text-sm">
              {language === 'en' ? 'Email' : 'इमेल'}: {s.intro.dataController.techPartner.email}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Information Collection */}
      <section id="information-collection" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.informationCollection.title}</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">{s.informationCollection.directInfo.title}</h3>
          {s.informationCollection.directInfo.subsections.map((sub, idx) => (
            <div key={idx} className="mb-4">
              <h4 className="font-semibold text-brand-dark-blue mb-2">{sub.title}</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {sub.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">{s.informationCollection.autoInfo.title}</h3>
          {s.informationCollection.autoInfo.subsections.map((sub, idx) => (
            <div key={idx} className="mb-4">
              <h4 className="font-semibold text-brand-dark-blue mb-2">{sub.title}</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {sub.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">{s.informationCollection.thirdPartyInfo.title}</h3>
          {s.informationCollection.thirdPartyInfo.subsections.map((sub, idx) => (
            <div key={idx} className="mb-4">
              <h4 className="font-semibold text-brand-dark-blue mb-2">{sub.title}</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {sub.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Purpose */}
      <section id="purpose" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.purpose.title}</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.purpose.primary.title}</h3>
          <p className="mb-4">{s.purpose.primary.content}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-dark-blue text-white">
                  <th className="p-3 text-left">{language === 'en' ? 'Purpose' : 'उद्देश्य'}</th>
                  <th className="p-3 text-left">{language === 'en' ? 'Data Used' : 'प्रयोग डाटा'}</th>
                  <th className="p-3 text-left">{language === 'en' ? 'Legal Basis' : 'कानूनी आधार'}</th>
                </tr>
              </thead>
              <tbody>
                {s.purpose.primary.table.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="p-3 border-b">{row.purpose}</td>
                    <td className="p-3 border-b">{row.data}</td>
                    <td className="p-3 border-b">{row.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.purpose.secondary.title}</h3>
          <p className="mb-3">{s.purpose.secondary.content}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.purpose.secondary.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.purpose.unauthorized.title}</h3>
          <p className="text-gray-700">{s.purpose.unauthorized.content}</p>
        </div>
      </section>

      {/* Section 4: Consent */}
      <section id="consent" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.consent.title}</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.consent.obtaining.title}</h3>
          <p className="mb-3">{s.consent.obtaining.content}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.consent.obtaining.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.consent.types.title}</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.consent.types.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.consent.withdrawing.title}</h3>
          <p className="mb-3">{s.consent.withdrawing.content}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
            {s.consent.withdrawing.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-amber-600 text-sm italic">{s.consent.withdrawing.note}</p>
        </div>
      </section>

      {/* Section 5: Data Storage */}
      <section id="data-storage" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.dataStorage.title}</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.dataStorage.localization.title}</h3>
          <p className="mb-3">{s.dataStorage.localization.content}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.dataStorage.localization.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.dataStorage.security.title}</h3>
          <p className="mb-4">{s.dataStorage.security.content}</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold text-brand-dark-blue mb-2">{s.dataStorage.security.technical.title}</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {s.dataStorage.security.technical.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold text-brand-dark-blue mb-2">{s.dataStorage.security.organizational.title}</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {s.dataStorage.security.organizational.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.dataStorage.breach.title}</h3>
          <p className="mb-3">{s.dataStorage.breach.content}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.dataStorage.breach.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 6: Data Retention */}
      <section id="data-retention" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.dataRetention.title}</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.dataRetention.periods.title}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-dark-blue text-white">
                  <th className="p-3 text-left">{language === 'en' ? 'Data Type' : 'डाटा प्रकार'}</th>
                  <th className="p-3 text-left">{language === 'en' ? 'Retention Period' : 'संरक्षण अवधि'}</th>
                  <th className="p-3 text-left">{language === 'en' ? 'Reason' : 'कारण'}</th>
                </tr>
              </thead>
              <tbody>
                {s.dataRetention.periods.table.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="p-3 border-b">{row.dataType}</td>
                    <td className="p-3 border-b">{row.period}</td>
                    <td className="p-3 border-b">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.dataRetention.principles.title}</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.dataRetention.principles.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.dataRetention.deletion.title}</h3>
          <p className="mb-3">{s.dataRetention.deletion.content}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.dataRetention.deletion.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 7: Data Sharing */}
      <section id="data-sharing" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.dataSharing.title}</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.dataSharing.serviceProviders.title}</h3>
          <p className="mb-4">{s.dataSharing.serviceProviders.content}</p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-dark-blue text-white">
                  <th className="p-3 text-left">{language === 'en' ? 'Provider Type' : 'प्रदायक प्रकार'}</th>
                  <th className="p-3 text-left">{language === 'en' ? 'Data Shared' : 'साझा डाटा'}</th>
                  <th className="p-3 text-left">{language === 'en' ? 'Purpose' : 'उद्देश्य'}</th>
                </tr>
              </thead>
              <tbody>
                {s.dataSharing.serviceProviders.table.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="p-3 border-b">{row.provider}</td>
                    <td className="p-3 border-b">{row.data}</td>
                    <td className="p-3 border-b">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm italic">{s.dataSharing.serviceProviders.note}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.dataSharing.betweenUsers.title}</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.dataSharing.betweenUsers.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.dataSharing.safety.title}</h3>
          <p className="mb-3">{s.dataSharing.safety.content}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.dataSharing.safety.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.dataSharing.legal.title}</h3>
          <p className="mb-3">{s.dataSharing.legal.content}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.dataSharing.legal.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.dataSharing.noSale.title}</h3>
          <p className="text-gray-700 font-medium">{s.dataSharing.noSale.content}</p>
        </div>
      </section>

      {/* Section 8: Your Rights */}
      <section id="your-rights" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.yourRights.title}</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.yourRights.nepalLaw.title}</h3>
          <p className="mb-4">{s.yourRights.nepalLaw.content}</p>
          <div className="space-y-4">
            {s.yourRights.nepalLaw.rights.map((right, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-semibold text-brand-dark-blue mb-1">{right.name}</h4>
                <p className="text-gray-700 text-sm">{right.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.yourRights.exercise.title}</h3>
          <p className="mb-3">{s.yourRights.exercise.content}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
            {s.yourRights.exercise.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-brand-dark-blue font-medium text-sm">{s.yourRights.exercise.note}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.yourRights.complain.title}</h3>
          <p className="mb-3">{s.yourRights.complain.content}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.yourRights.complain.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 9: Location Data */}
      <section id="location-data" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.locationData.title}</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.locationData.why.title}</h3>
          <p className="mb-3">{s.locationData.why.content}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.locationData.why.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.locationData.practices.title}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-dark-blue text-white">
                  <th className="p-3 text-left">{language === 'en' ? 'User Type' : 'प्रयोगकर्ता प्रकार'}</th>
                  <th className="p-3 text-left">{language === 'en' ? 'When Collected' : 'कहिले संकलन'}</th>
                  <th className="p-3 text-left">{language === 'en' ? 'Purpose' : 'उद्देश्य'}</th>
                </tr>
              </thead>
              <tbody>
                {s.locationData.practices.table.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="p-3 border-b">{row.userType}</td>
                    <td className="p-3 border-b">{row.when}</td>
                    <td className="p-3 border-b">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.locationData.permissions.title}</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.locationData.permissions.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.locationData.retention.title}</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.locationData.retention.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 10: Cookies */}
      <section id="cookies" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.cookies.title}</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.cookies.mobileApp.title}</h3>
          <p className="mb-3">{s.cookies.mobileApp.content}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.cookies.mobileApp.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.cookies.website.title}</h3>
          <p className="mb-3">{s.cookies.website.content}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.cookies.website.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.cookies.managing.title}</h3>
          <p className="mb-3">{s.cookies.managing.content}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.cookies.managing.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 11: Children's Privacy */}
      <section id="children-privacy" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.childrenPrivacy.title}</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.childrenPrivacy.restriction.title}</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.childrenPrivacy.restriction.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.childrenPrivacy.parental.title}</h3>
          <p className="mb-3">{s.childrenPrivacy.parental.content}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.childrenPrivacy.parental.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 12: International Transfers */}
      <section id="international-transfers" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.internationalTransfers.title}</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.internationalTransfers.mechanisms.title}</h3>
          <p className="mb-3">{s.internationalTransfers.mechanisms.content}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.internationalTransfers.mechanisms.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.internationalTransfers.servers.title}</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.internationalTransfers.servers.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 13: Changes */}
      <section id="changes" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.changes.title}</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.changes.updates.title}</h3>
          <p className="mb-3">{s.changes.updates.content}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.changes.updates.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.changes.notification.title}</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.changes.notification.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.changes.history.title}</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {s.changes.history.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 14: DPO */}
      <section id="dpo" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.dpo.title}</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.dpo.appointment.title}</h3>
          <p className="text-gray-700">{s.dpo.appointment.content}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.dpo.contact.title}</h3>
          <div className="bg-slate-100 p-4 rounded-lg">
            <p className="text-gray-700">
              {language === 'en' ? 'Email' : 'इमेल'}:{' '}
              <a href={`mailto:${s.dpo.contact.email}`} className="text-brand-yellow hover:underline font-medium">
                {s.dpo.contact.email}
              </a>
            </p>
            <p className="text-gray-600 text-sm mt-1">{s.dpo.contact.purpose}</p>
          </div>
        </div>
      </section>

      {/* Section 15: Contact */}
      <section id="contact" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{s.contact.title}</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.contact.privacy.title}</h3>
          <p className="mb-4">{s.contact.privacy.content}</p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-slate-100 p-4 rounded-lg">
              <h4 className="font-semibold text-brand-dark-blue mb-2">{s.contact.privacy.dataController.title}</h4>
              <p className="text-gray-700 font-medium">{s.contact.privacy.dataController.company}</p>
              <p className="text-gray-600 text-sm">
                {language === 'en' ? 'Registration' : 'दर्ता'}: {s.contact.privacy.dataController.registration}
              </p>
              <p className="text-gray-600 text-sm">
                Privacy:{' '}
                <a href={`mailto:${s.contact.privacy.dataController.privacyEmail}`} className="text-brand-yellow hover:underline">
                  {s.contact.privacy.dataController.privacyEmail}
                </a>
              </p>
              <p className="text-gray-600 text-sm">
                DPO:{' '}
                <a href={`mailto:${s.contact.privacy.dataController.dpoEmail}`} className="text-brand-yellow hover:underline">
                  {s.contact.privacy.dataController.dpoEmail}
                </a>
              </p>
              <p className="text-gray-600 text-sm">
                Support:{' '}
                <a href={`mailto:${s.contact.privacy.dataController.supportEmail}`} className="text-brand-yellow hover:underline">
                  {s.contact.privacy.dataController.supportEmail}
                </a>
              </p>
              <p className="text-gray-600 text-sm">
                {language === 'en' ? 'Phone' : 'फोन'}: {s.contact.privacy.dataController.phone}
              </p>
              <p className="text-gray-600 text-sm">
                {language === 'en' ? 'Address' : 'ठेगाना'}: {s.contact.privacy.dataController.address}
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold text-brand-dark-blue mb-2">{s.contact.privacy.techPartner.title}</h4>
              <p className="text-gray-700 font-medium">{s.contact.privacy.techPartner.company}</p>
              <p className="text-gray-600 text-sm">
                {language === 'en' ? 'Email' : 'इमेल'}:{' '}
                <a href={`mailto:${s.contact.privacy.techPartner.email}`} className="text-brand-yellow hover:underline">
                  {s.contact.privacy.techPartner.email}
                </a>
              </p>
              <p className="text-gray-600 text-sm">
                {language === 'en' ? 'Phone' : 'फोन'}: {s.contact.privacy.techPartner.phone}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.contact.responseTime.title}</h3>
          <p className="text-gray-700">{s.contact.responseTime.content}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{s.contact.regulatory.title}</h3>
          <p className="text-gray-700">{s.contact.regulatory.content}</p>
        </div>
      </section>

      {/* Section 16: Acknowledgment */}
      <section id="acknowledgment" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{s.acknowledgment.title}</h2>
        <p className="text-gray-700">{s.acknowledgment.content}</p>
      </section>

      {/* Compliance Footer */}
      <div className="border-t pt-6 mt-8">
        <p className="text-gray-600 text-sm italic">{s.compliance.content}</p>
      </div>
    </LegalPageLayout>
  );
}
