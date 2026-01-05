'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

const content = {
  en: {
    title: 'Driver-Partner Agreement',
    subtitle: 'SubhYatra - Ride-Hailing Platform',
    effectiveDate: 'Effective Date: Upon Launch',
    lastUpdated: 'Last Updated: January 2026',
    sections: [
      {
        id: 'introduction',
        title: 'Driver-Partner Service Agreement',
        content: `This Driver-Partner Service Agreement ("Agreement") is entered into between:

**Sankat Mochan Sajilo Yatra Pvt. Ltd.** (Registration No. 368115/81/82) ("Company," "SubhYatra," "we," "us," or "our"), a company registered under the laws of Nepal, operating the SubhYatra ride-hailing platform with technology developed by Nexalaris Tech Pvt. Ltd. (Registration No. 354796/81/82)

AND

**The Driver-Partner** ("Driver," "you," or "your"), an individual who has registered to provide transportation services through the SubhYatra platform.`
      },
      {
        id: 'definitions',
        title: '1. Definitions',
        content: `**"App"** means the SubhYatra mobile application through which Services are accessed.

**"Commission"** means the percentage of each Fare retained by SubhYatra as service fee.

**"Driver Score"** means the performance rating assigned to you based on the scoring criteria.

**"Fare"** means the total amount charged to a passenger for a ride.

**"Platform"** means the SubhYatra technology infrastructure including the App and backend systems.

**"Ride"** means a transportation service provided to a passenger through the Platform.

**"Services"** means the technology services provided by SubhYatra to facilitate ride connections.

**"Vehicle"** means the motor vehicle registered by you for providing transportation services.`
      },
      {
        id: 'relationship',
        title: '2. Nature of Relationship',
        content: `### 2.1 Independent Contractor Status

- You are an independent contractor, NOT an employee of SubhYatra
- This Agreement does not create an employer-employee relationship
- You are free to determine your working hours and availability
- You may provide services to other platforms simultaneously
- SubhYatra does not direct or control the manner of your transportation services

### 2.2 No Employment Benefits

As an independent contractor, you:
- Are not entitled to employment benefits (insurance, leave, etc.)
- Are responsible for your own taxes and social security contributions
- Bear all costs associated with operating your vehicle
- Make independent business decisions regarding your services

### 2.3 Platform as Intermediary

- SubhYatra is a technology platform connecting passengers with drivers
- The transportation contract is directly between you and the passenger
- SubhYatra facilitates but does not provide transportation services`
      },
      {
        id: 'eligibility',
        title: '3. Eligibility Requirements',
        content: `### 3.1 Driver Requirements

To register as a Driver-Partner, you must:
- Be at least 21 years of age
- Hold a valid driving license for at least one (1) year
- Have no criminal record for serious offenses
- Pass SubhYatra's background verification process
- Be physically and mentally fit to operate a vehicle
- Not be prohibited from driving under Nepal law

### 3.2 Vehicle Requirements

Your vehicle must:
- Be registered in Nepal with valid registration documents
- Have valid insurance (comprehensive recommended)
- Pass vehicle fitness inspection (Bluebook valid)
- Be in good mechanical condition
- Meet SubhYatra's vehicle age requirements:
  - **Bikes**: Maximum 5 years old
  - **Cars**: Maximum 8 years old
- Be clean and well-maintained

### 3.3 Documentation Required

You must provide and maintain valid:
- Citizenship certificate or national ID
- Driving license (appropriate category)
- Vehicle registration certificate (Bluebook)
- Vehicle insurance certificate
- Pollution Under Control (PUC) certificate
- Recent passport-size photograph
- Any other documents required by provincial regulations

### 3.4 Ongoing Compliance

You must maintain all eligibility requirements throughout your partnership with SubhYatra.`
      },
      {
        id: 'registration',
        title: '4. Registration and Approval',
        content: `### 4.1 Application Process

1. Download the SubhYatra App and register
2. Submit required documents for verification
3. Complete profile with accurate information
4. Await verification and approval

### 4.2 Verification

SubhYatra will verify:
- Identity documents
- Driving license validity
- Vehicle documents
- Background check (where legally permitted)

### 4.3 Approval

- Approval is at SubhYatra's sole discretion
- Not all applicants will be approved
- Approval may be conditional or provisional
- SubhYatra may request additional documents

### 4.4 Account Activation

Upon approval:
- Your driver account will be activated
- You will receive onboarding information
- You may begin accepting ride requests`
      },
      {
        id: 'obligations',
        title: '5. Driver Obligations',
        content: `### 5.1 Service Standards

You agree to:
- Provide safe, professional transportation services
- Maintain a courteous and respectful demeanor
- Follow optimal routes unless passenger requests otherwise
- Keep your vehicle clean and presentable
- Ensure passenger comfort during rides
- Comply with all traffic laws and regulations

### 5.2 Availability and Acceptance

- You control when you go online and accept rides
- Ride requests are offered, not mandated
- Consistent decline or ignore patterns affect your Driver Score
- You must honor accepted ride requests

### 5.3 Safety Requirements

You must:
- Never drive under the influence of alcohol or drugs
- Not use mobile phones while driving (except hands-free navigation)
- Ensure passengers wear seatbelts (where applicable)
- Follow safe driving practices at all times
- Report any accidents or safety incidents immediately

### 5.4 Prohibited Conduct

You shall NOT:
- Discriminate against passengers based on any protected characteristic
- Harass, threaten, or abuse passengers
- Solicit passengers outside the Platform
- Manipulate GPS or location data
- Accept cash payments different from app-displayed fare
- Cancel rides after arriving at pickup without valid reason
- Engage in any illegal activity during rides
- Share passenger personal information with third parties
- Make unauthorized stops during rides
- Request passengers to cancel rides

### 5.5 Vehicle Maintenance

You are responsible for:
- Regular vehicle maintenance and servicing
- Ensuring vehicle is roadworthy at all times
- Fuel, repairs, and associated costs
- Vehicle cleanliness and hygiene`
      },
      {
        id: 'commission',
        title: '6. Commission and Earnings',
        content: `### 6.1 Fare Structure

- Fares are calculated by SubhYatra based on distance and vehicle type
- Fare rates are published in the App and may be updated
- You agree to charge passengers only the fare shown in the App

### 6.2 Commission Rates

| Category | Commission Rate |
|----------|-----------------|
| Standard Rate | 15% of gross fare |
| Incentive Rate (for qualifying drivers) | 13% of gross fare |

### 6.3 Incentive Eligibility

To qualify for reduced 13% commission:
- Maintain a perfect Driver Score (100) for 7 consecutive days
- Complete minimum weekly rides (Bike: 15, Car: 8)
- Have no unresolved issues or complaints

### 6.4 Earnings Calculation

Your earnings per ride = Gross Fare - Platform Commission

### 6.5 Cash Collection

- Currently, all fares are collected in cash from passengers
- You must collect the exact fare shown in the App
- You must mark cash as collected in the App after receiving payment
- Discrepancies will be investigated

### 6.6 Reconciliation

- SubhYatra tracks all earnings through the Platform
- Commission amounts are recorded per ride
- Reconciliation and settlement processes will be communicated separately`
      },
      {
        id: 'scoring',
        title: '7. Driver Scoring System',
        content: `### 7.1 Purpose

The Driver Score system ensures service quality and fair ride allocation.

### 7.2 Score Range

- Score range: 0 to 100
- Initial score for new drivers: 75
- Score precision: 0.5 points

### 7.3 Score Impacts

| Action | Score Change |
|--------|--------------|
| Accept ride request | +0.5 |
| Decline ride request | -0.5 |
| Ignore ride request (timeout) | -1.0 |
| Complete city ride | +1.0 |
| Complete intercity ride | +1.5 |
| Cancel before moving to pickup | -2.0 |
| Cancel after moving to pickup | -4.0 |
| Passenger no-show (your fault) | -6.0 |
| Cancel intercity ride | -6.0 |
| GPS manipulation detected | -10.0 |

### 7.4 Driver Tiers

| Tier | Score Range | Benefits |
|------|-------------|----------|
| Platinum | 90-100 | Priority dispatch, incentive commission |
| Gold | 75-89 | Standard benefits |
| Silver | 60-74 | Reduced ride allocation |
| Restricted | Below 60 | Account review, possible suspension |

### 7.5 Intercity Eligibility

To accept intercity rides, you must:
- Have a Driver Score of 80 or above
- Have completed at least 30 rides
- Have opted-in for intercity service
- Meet vehicle requirements for intercity travel

### 7.6 Score Recovery

- Consistent good performance increases your score
- Score is evaluated daily
- Weekly performance reviews may affect tier status`
      },
      {
        id: 'dispatch',
        title: '8. Dispatch and Ride Allocation',
        content: `### 8.1 Dispatch System

SubhYatra uses an automated dispatch system to allocate rides based on:
- Proximity to pickup location (45% weight)
- Acceptance rate (25% weight)
- Idle time (15% weight)
- Passenger rating (10% weight)

### 8.2 Ride Request Timeout

- City rides: 15-20 seconds to respond
- Intercity rides: 30-45 seconds to respond
- No response = automatic decline (affects score)

### 8.3 Ride Locking

- Once you accept a ride, it is locked to you
- Double-acceptance is prevented by the system
- Accepting commits you to completing the ride

### 8.4 No Guaranteed Rides

- SubhYatra does not guarantee any minimum number of rides
- Ride availability depends on passenger demand
- You compete with other drivers for ride allocations`
      },
      {
        id: 'cancellation',
        title: '9. Cancellation Policy',
        content: `### 9.1 Driver-Initiated Cancellation

You may cancel a ride only for legitimate reasons:
- Safety concerns
- Passenger no-show after waiting period
- Passenger misconduct
- Emergency situations
- Vehicle breakdown

### 9.2 Cancellation Penalties

- Cancellations negatively impact your Driver Score
- Excessive cancellations may result in temporary deactivation
- Pattern of cancellations will be investigated

### 9.3 No-Show Procedure

If passenger doesn't arrive:
1. Wait at pickup location for designated time
2. Attempt to contact passenger through App
3. If no response, mark as no-show in App
4. Document the situation if possible`
      },
      {
        id: 'insurance',
        title: '10. Insurance and Liability',
        content: `### 10.1 Your Insurance Obligations

You must maintain:
- Valid vehicle insurance as required by Nepal law
- Comprehensive insurance is strongly recommended
- Insurance covering third-party liability

### 10.2 Liability Allocation

- You are liable for accidents caused by your negligence
- You are responsible for passenger safety during rides
- SubhYatra is not liable for your driving actions
- SubhYatra is not liable for vehicle-related incidents

### 10.3 Indemnification

You agree to indemnify SubhYatra against claims arising from:
- Your transportation services
- Accidents or injuries during your rides
- Your violation of laws or this Agreement
- Damage to passenger property

### 10.4 SubhYatra's Limited Liability

SubhYatra's liability is limited to:
- Platform functionality issues
- Errors in fare calculation (will be corrected)
- App malfunctions directly attributable to SubhYatra`
      },
      {
        id: 'confidentiality',
        title: '11. Confidentiality and Data',
        content: `### 11.1 Passenger Information

- Passenger data is confidential
- You may only use passenger contact for ride-related communication
- You must not store or share passenger information
- Post-ride contact with passengers is prohibited

### 11.2 Your Data

- SubhYatra collects data as described in the Privacy Policy
- Location tracking is required during online hours
- Ride data is used for quality and dispute resolution

### 11.3 Non-Disclosure

You agree not to disclose:
- SubhYatra's business information
- Fare algorithms or commission structures to competitors
- Any proprietary Platform information`
      },
      {
        id: 'suspension',
        title: '12. Suspension and Deactivation',
        content: `### 12.1 Grounds for Suspension

SubhYatra may suspend your account for:
- Violation of this Agreement
- Driver Score falling below 60
- Passenger complaints or safety concerns
- Fraudulent activity
- Document expiry
- Investigation of serious incidents

### 12.2 Grounds for Permanent Deactivation

Your account may be permanently deactivated for:
- Serious safety violations
- Criminal activity
- Repeated violations after warnings
- Fraud or manipulation
- Violence or threats against passengers
- Drug or alcohol use while driving
- GPS spoofing or manipulation

### 12.3 Suspension Process

1. Notification of suspension and reason
2. Opportunity to respond (for non-safety issues)
3. Investigation if applicable
4. Decision communicated within reasonable time

### 12.4 Appeal Process

- You may appeal deactivation decisions
- Appeals must be submitted within 14 days
- Appeals are reviewed by SubhYatra management
- Decision on appeal is final`
      },
      {
        id: 'termination',
        title: '13. Termination',
        content: `### 13.1 Termination by Driver

You may terminate this Agreement at any time by:
- Deactivating your driver account
- Providing written notice to SubhYatra
- Ceasing to use the Platform

### 13.2 Termination by SubhYatra

SubhYatra may terminate this Agreement:
- For cause (violation of terms)
- Without cause with 30 days' notice
- Immediately for serious violations

### 13.3 Effect of Termination

Upon termination:
- Your access to the Platform will be revoked
- Pending earnings will be settled per normal process
- Confidentiality obligations continue
- You must cease using SubhYatra branding

### 13.4 No Termination Compensation

No compensation is payable upon termination except earned amounts.`
      },
      {
        id: 'disputes',
        title: '14. Dispute Resolution',
        content: `### 14.1 Informal Resolution

Disputes should first be raised with SubhYatra support for informal resolution.

### 14.2 Governing Law

This Agreement is governed by the laws of Nepal.

### 14.3 Jurisdiction

Disputes shall be subject to the exclusive jurisdiction of courts in Kathmandu, Nepal.

### 14.4 Mediation

Parties agree to attempt mediation before litigation for disputes over NPR 100,000.`
      },
      {
        id: 'compliance',
        title: '15. Compliance with Regulations',
        content: `### 15.1 Transportation Laws

You must comply with:
- Motor Vehicles and Transport Management Act, 2049
- Applicable provincial ride-hailing regulations
- Traffic rules and regulations
- Any future regulations applicable to ride-sharing

### 15.2 Tax Obligations

You are responsible for:
- Registering for taxes if required
- Filing tax returns
- Paying applicable taxes on your earnings
- Maintaining financial records

### 15.3 Regulatory Changes

- SubhYatra will communicate relevant regulatory changes
- You must comply with new requirements within specified timeframes
- Failure to comply may result in account restrictions`
      },
      {
        id: 'modifications',
        title: '16. Modifications to Agreement',
        content: `### 16.1 Right to Modify

SubhYatra reserves the right to modify this Agreement.

### 16.2 Notification

- Material changes will be notified via App or email
- Changes effective upon notification or specified date
- Continued use constitutes acceptance

### 16.3 Disagreement with Changes

If you disagree with changes:
- You may terminate your account
- Previous terms do not apply after change effective date`
      },
      {
        id: 'general',
        title: '17. General Provisions',
        content: `### 17.1 Entire Agreement

This Agreement, together with the Terms of Service and Privacy Policy, constitutes the entire agreement.

### 17.2 Severability

If any provision is unenforceable, remaining provisions remain in effect.

### 17.3 No Waiver

Failure to enforce any provision does not constitute waiver.

### 17.4 Assignment

You may not assign this Agreement. SubhYatra may assign freely.

### 17.5 Language

This Agreement is in English. English version prevails in case of translation conflicts.

### 17.6 Notices

Notices will be sent to the email/phone registered in your account.`
      },
      {
        id: 'contact',
        title: '18. Contact Information',
        content: `**Service Operator:**
Sankat Mochan Sajilo Yatra Pvt. Ltd.
- Registration: 368115/81/82
- Driver Support: drivers@subhyatranepal.com
- General Support: support@subhyatranepal.com
- Phone: +977 9855042503
- Address: Chandrapur, Rauthad, Madhesh Province, Nepal
- Website: https://subhyatranepal.com

**Technology Partner:**
Nexalaris Tech Pvt. Ltd.
- Email: contact@nexalaris.com
- Phone: +977 9814846711`
      },
      {
        id: 'acceptance',
        title: '19. Acceptance',
        content: `By registering as a Driver-Partner on SubhYatra, you acknowledge that you have read, understood, and agree to be bound by this Driver-Partner Agreement.

**Electronic Acceptance:**
Clicking "I Accept" or "Register as Driver" constitutes your electronic signature and acceptance of this Agreement, which is legally binding under Nepal's Electronic Transaction Act, 2063.

---

*This Agreement complies with Nepal's Motor Vehicles and Transport Management Act 2049, Individual Privacy Act 2075, Electronic Transaction Act 2063, and applicable provincial ride-hailing regulations.*`
      }
    ]
  },
  ne: {
    title: 'चालक-साझेदार सम्झौता',
    subtitle: 'शुभयात्रा - राइड-हेलिंग प्लेटफर्म',
    effectiveDate: 'प्रभावी मिति: लन्च हुँदा',
    lastUpdated: 'अन्तिम अपडेट: जनवरी २०२६',
    sections: [
      {
        id: 'introduction',
        title: 'चालक-साझेदार सेवा सम्झौता',
        content: `यो चालक-साझेदार सेवा सम्झौता ("सम्झौता") बीचमा प्रवेश गरिएको छ:

**सङ्कट मोचन सजिलो यात्रा प्रा. लि.** (दर्ता नं. ३६८११५/८१/८२) ("कम्पनी," "शुभयात्रा," "हामी," "हामीलाई," वा "हाम्रो"), नेपालको कानून अन्तर्गत दर्ता भएको कम्पनी, नेक्सालारिस टेक प्रा. लि. (दर्ता नं. ३५४७९६/८१/८२) द्वारा विकसित प्रविधिको साथ शुभयात्रा राइड-हेलिंग प्लेटफर्म सञ्चालन गर्दै

र

**चालक-साझेदार** ("चालक," "तपाईं," वा "तपाईंको"), शुभयात्रा प्लेटफर्म मार्फत यातायात सेवाहरू प्रदान गर्न दर्ता गरेको व्यक्ति।`
      },
      {
        id: 'definitions',
        title: '१. परिभाषाहरू',
        content: `**"एप"** भन्नाले शुभयात्रा मोबाइल एप्लिकेसन हो जसको माध्यमबाट सेवाहरू पहुँच गरिन्छ।

**"कमिशन"** भन्नाले सेवा शुल्कको रूपमा शुभयात्राले राखेको प्रत्येक भाडाको प्रतिशत हो।

**"चालक स्कोर"** भन्नाले स्कोरिंग मापदण्डको आधारमा तपाईंलाई तोकिएको कार्यसम्पादन रेटिंग हो।

**"भाडा"** भन्नाले एक यात्राको लागि यात्रुबाट लिइएको कुल रकम हो।

**"प्लेटफर्म"** भन्नाले एप र ब्याकेन्ड प्रणालीहरू सहित शुभयात्रा प्रविधि पूर्वाधार हो।

**"यात्रा"** भन्नाले प्लेटफर्म मार्फत यात्रुलाई प्रदान गरिएको यातायात सेवा हो।

**"सेवाहरू"** भन्नाले यात्रा जडानहरू सुविधा दिन शुभयात्राले प्रदान गरेका प्रविधि सेवाहरू हो।

**"सवारी"** भन्नाले यातायात सेवाहरू प्रदान गर्नको लागि तपाईंले दर्ता गरेको मोटर सवारी हो।`
      },
      {
        id: 'relationship',
        title: '२. सम्बन्धको प्रकृति',
        content: `### २.१ स्वतन्त्र ठेकेदार स्थिति

- तपाईं एक स्वतन्त्र ठेकेदार हुनुहुन्छ, शुभयात्राको कर्मचारी होइन
- यो सम्झौताले रोजगारदाता-कर्मचारी सम्बन्ध सिर्जना गर्दैन
- तपाईं आफ्नो काम गर्ने समय र उपलब्धता निर्धारण गर्न स्वतन्त्र हुनुहुन्छ
- तपाईं एकै समयमा अन्य प्लेटफर्महरूमा सेवा प्रदान गर्न सक्नुहुन्छ
- शुभयात्राले तपाईंको यातायात सेवाहरूको तरिका निर्देशन वा नियन्त्रण गर्दैन

### २.२ कुनै रोजगारी लाभहरू छैनन्

स्वतन्त्र ठेकेदारको रूपमा, तपाईं:
- रोजगारी लाभहरू (बीमा, बिदा, आदि) को हकदार हुनुहुन्न
- आफ्नो कर र सामाजिक सुरक्षा योगदानहरूको लागि जिम्मेवार हुनुहुन्छ
- तपाईंको सवारी सञ्चालनसँग सम्बन्धित सबै खर्चहरू वहन गर्नुहुन्छ
- तपाईंको सेवाहरू सम्बन्धी स्वतन्त्र व्यापार निर्णयहरू गर्नुहुन्छ

### २.३ मध्यस्थकर्ताको रूपमा प्लेटफर्म

- शुभयात्रा यात्रुहरूलाई चालकहरूसँग जोड्ने प्रविधि प्लेटफर्म हो
- यातायात सम्झौता तपाईं र यात्रु बीच सीधै हुन्छ
- शुभयात्राले सुविधा दिन्छ तर यातायात सेवाहरू प्रदान गर्दैन`
      },
      {
        id: 'eligibility',
        title: '३. योग्यता आवश्यकताहरू',
        content: `### ३.१ चालक आवश्यकताहरू

चालक-साझेदारको रूपमा दर्ता गर्न, तपाईं:
- कम्तिमा २१ वर्षको उमेर पुगेको हुनुपर्छ
- कम्तिमा एक (१) वर्षको लागि वैध सवारी चालक अनुमतिपत्र राख्नुपर्छ
- गम्भीर अपराधहरूको लागि कुनै आपराधिक रेकर्ड नहुनुपर्छ
- शुभयात्राको पृष्ठभूमि प्रमाणीकरण प्रक्रिया पास गर्नुपर्छ
- सवारी चलाउन शारीरिक र मानसिक रूपमा फिट हुनुपर्छ
- नेपाल कानून अन्तर्गत सवारी चलाउनबाट प्रतिबन्धित नहुनुपर्छ

### ३.२ सवारी आवश्यकताहरू

तपाईंको सवारी:
- वैध दर्ता कागजातहरू सहित नेपालमा दर्ता भएको हुनुपर्छ
- वैध बीमा हुनुपर्छ (व्यापक सिफारिस गरिएको)
- सवारी फिटनेस निरीक्षण पास गर्नुपर्छ (ब्लुबुक वैध)
- राम्रो मेकानिकल अवस्थामा हुनुपर्छ
- शुभयात्राको सवारी उमेर आवश्यकताहरू पूरा गर्नुपर्छ:
  - **बाइक**: अधिकतम ५ वर्ष पुरानो
  - **कार**: अधिकतम ८ वर्ष पुरानो
- सफा र राम्रोसँग मर्मत गरिएको हुनुपर्छ

### ३.३ आवश्यक कागजातहरू

तपाईंले प्रदान गर्नुपर्छ र वैध राख्नुपर्छ:
- नागरिकता प्रमाणपत्र वा राष्ट्रिय परिचयपत्र
- सवारी चालक अनुमतिपत्र (उपयुक्त श्रेणी)
- सवारी दर्ता प्रमाणपत्र (ब्लुबुक)
- सवारी बीमा प्रमाणपत्र
- प्रदूषण नियन्त्रण (PUC) प्रमाणपत्र
- हालको पासपोर्ट साइज फोटो
- प्रादेशिक नियमहरूले आवश्यक पारेका अन्य कागजातहरू

### ३.४ निरन्तर अनुपालन

तपाईंले शुभयात्रासँगको साझेदारी भर सबै योग्यता आवश्यकताहरू कायम राख्नुपर्छ।`
      },
      {
        id: 'registration',
        title: '४. दर्ता र स्वीकृति',
        content: `### ४.१ आवेदन प्रक्रिया

१. शुभयात्रा एप डाउनलोड गर्नुहोस् र दर्ता गर्नुहोस्
२. प्रमाणीकरणको लागि आवश्यक कागजातहरू पेश गर्नुहोस्
३. सही जानकारीको साथ प्रोफाइल पूरा गर्नुहोस्
४. प्रमाणीकरण र स्वीकृतिको प्रतीक्षा गर्नुहोस्

### ४.२ प्रमाणीकरण

शुभयात्राले प्रमाणित गर्नेछ:
- पहिचान कागजातहरू
- सवारी चालक अनुमतिपत्र वैधता
- सवारी कागजातहरू
- पृष्ठभूमि जाँच (कानूनी रूपमा अनुमति दिइएको ठाउँमा)

### ४.३ स्वीकृति

- स्वीकृति शुभयात्राको एकल विवेकमा छ
- सबै आवेदकहरू स्वीकृत हुनेछैनन्
- स्वीकृति सशर्त वा अस्थायी हुन सक्छ
- शुभयात्राले थप कागजातहरू अनुरोध गर्न सक्छ

### ४.४ खाता सक्रियता

स्वीकृति पछि:
- तपाईंको चालक खाता सक्रिय गरिनेछ
- तपाईंले अनबोर्डिङ जानकारी प्राप्त गर्नुहुनेछ
- तपाईं यात्रा अनुरोधहरू स्वीकार गर्न सुरु गर्न सक्नुहुन्छ`
      },
      {
        id: 'obligations',
        title: '५. चालक दायित्वहरू',
        content: `### ५.१ सेवा मापदण्डहरू

तपाईं सहमत हुनुहुन्छ:
- सुरक्षित, व्यावसायिक यातायात सेवाहरू प्रदान गर्न
- शिष्ट र आदरपूर्ण व्यवहार कायम राख्न
- यात्रुले अनुरोध नगरेसम्म इष्टतम मार्गहरू पछ्याउन
- तपाईंको सवारी सफा र प्रस्तुत योग्य राख्न
- यात्राहरूमा यात्रु आरामको सुनिश्चितता गर्न
- सबै ट्राफिक कानून र नियमहरूको पालना गर्न

### ५.२ उपलब्धता र स्वीकृति

- तपाईं कहिले अनलाइन जानुहुन्छ र यात्राहरू स्वीकार गर्नुहुन्छ भन्ने तपाईं नियन्त्रण गर्नुहुन्छ
- यात्रा अनुरोधहरू प्रस्ताव गरिन्छन्, अनिवार्य गरिएको होइन
- निरन्तर अस्वीकार वा बेवास्ता गर्ने ढाँचाहरूले तपाईंको चालक स्कोरलाई असर गर्छ
- तपाईंले स्वीकार गरिएका यात्रा अनुरोधहरू पालना गर्नुपर्छ

### ५.३ सुरक्षा आवश्यकताहरू

तपाईंले:
- मदिरा वा लागूपदार्थको प्रभावमा कहिल्यै सवारी चलाउनु हुँदैन
- सवारी चलाउँदा मोबाइल फोन प्रयोग गर्नु हुँदैन (ह्यान्ड्स-फ्री नेभिगेसन बाहेक)
- यात्रुहरूले सिटबेल्ट लगाउने सुनिश्चित गर्नुपर्छ (लागू हुने ठाउँमा)
- सधैं सुरक्षित सवारी चलाउने अभ्यासहरू पालना गर्नुपर्छ
- कुनै पनि दुर्घटना वा सुरक्षा घटनाहरू तुरुन्तै रिपोर्ट गर्नुपर्छ

### ५.४ निषेधित आचरण

तपाईंले गर्नु हुँदैन:
- कुनै पनि संरक्षित विशेषताको आधारमा यात्रुहरू विरुद्ध भेदभाव
- यात्रुहरूलाई हैरान, धम्की, वा दुर्व्यवहार
- प्लेटफर्म बाहिर यात्रुहरू माग्ने
- GPS वा स्थान डाटा हेरफेर
- एप-प्रदर्शित भाडा भन्दा फरक नगद भुक्तानी स्वीकार
- वैध कारण बिना पिकअपमा पुगेपछि यात्राहरू रद्द गर्ने
- यात्राहरूमा कुनै पनि गैरकानूनी गतिविधिमा संलग्न हुने
- यात्रु व्यक्तिगत जानकारी तेस्रो पक्षहरूसँग साझा गर्ने
- यात्राहरूमा अनधिकृत स्टपहरू गर्ने
- यात्रुहरूलाई यात्राहरू रद्द गर्न अनुरोध गर्ने

### ५.५ सवारी मर्मतसम्भार

तपाईं जिम्मेवार हुनुहुन्छ:
- नियमित सवारी मर्मतसम्भार र सर्भिसिंगको लागि
- सवारी सधैं सडकयोग्य छ भन्ने सुनिश्चित गर्न
- इन्धन, मर्मत, र सम्बन्धित खर्चहरू
- सवारी सरसफाई र स्वच्छता`
      },
      {
        id: 'commission',
        title: '६. कमिशन र आम्दानी',
        content: `### ६.१ भाडा संरचना

- भाडाहरू शुभयात्राले दूरी र सवारी प्रकारको आधारमा गणना गर्छ
- भाडा दरहरू एपमा प्रकाशित छन् र अपडेट हुन सक्छन्
- तपाईं यात्रुहरूबाट एपमा देखाइएको भाडा मात्र लिन सहमत हुनुहुन्छ

### ६.२ कमिशन दरहरू

| श्रेणी | कमिशन दर |
|--------|----------|
| मानक दर | कुल भाडाको १५% |
| प्रोत्साहन दर (योग्य चालकहरूको लागि) | कुल भाडाको १३% |

### ६.३ प्रोत्साहन योग्यता

घटाइएको १३% कमिशनको लागि योग्य हुन:
- लगातार ७ दिन पूर्ण चालक स्कोर (१००) कायम राख्नुहोस्
- न्यूनतम साप्ताहिक यात्राहरू पूरा गर्नुहोस् (बाइक: १५, कार: ८)
- कुनै समाधान नभएका समस्याहरू वा गुनासोहरू नहोस्

### ६.४ आम्दानी गणना

तपाईंको प्रति यात्रा आम्दानी = कुल भाडा - प्लेटफर्म कमिशन

### ६.५ नगद सङ्कलन

- हाल, सबै भाडाहरू यात्रुहरूबाट नगदमा सङ्कलन गरिन्छ
- तपाईंले एपमा देखाइएको सही भाडा सङ्कलन गर्नुपर्छ
- भुक्तानी प्राप्त गरेपछि तपाईंले एपमा नगद सङ्कलन भएको चिन्ह लगाउनुपर्छ
- विसंगतिहरूको अनुसन्धान गरिनेछ

### ६.६ मिलान

- शुभयात्राले प्लेटफर्म मार्फत सबै आम्दानीहरू ट्र्याक गर्छ
- कमिशन रकमहरू प्रति यात्रा रेकर्ड गरिन्छ
- मिलान र सेटलमेन्ट प्रक्रियाहरू छुट्टै सञ्चार गरिनेछ`
      },
      {
        id: 'scoring',
        title: '७. चालक स्कोरिंग प्रणाली',
        content: `### ७.१ उद्देश्य

चालक स्कोर प्रणालीले सेवा गुणस्तर र निष्पक्ष यात्रा आवंटन सुनिश्चित गर्छ।

### ७.२ स्कोर दायरा

- स्कोर दायरा: ० देखि १००
- नयाँ चालकहरूको लागि प्रारम्भिक स्कोर: ७५
- स्कोर सटीकता: ०.५ अंक

### ७.३ स्कोर प्रभावहरू

| कार्य | स्कोर परिवर्तन |
|-------|---------------|
| यात्रा अनुरोध स्वीकार | +०.५ |
| यात्रा अनुरोध अस्वीकार | -०.५ |
| यात्रा अनुरोध बेवास्ता (टाइमआउट) | -१.० |
| शहर यात्रा पूरा | +१.० |
| अन्तरशहर यात्रा पूरा | +१.५ |
| पिकअपमा जानु अघि रद्द | -२.० |
| पिकअपमा गएपछि रद्द | -४.० |
| यात्रु नो-शो (तपाईंको गल्ती) | -६.० |
| अन्तरशहर यात्रा रद्द | -६.० |
| GPS हेरफेर पत्ता लागेको | -१०.० |

### ७.४ चालक स्तरहरू

| स्तर | स्कोर दायरा | फाइदाहरू |
|------|-------------|----------|
| प्लेटिनम | ९०-१०० | प्राथमिकता डिस्प्याच, प्रोत्साहन कमिशन |
| गोल्ड | ७५-८९ | मानक फाइदाहरू |
| सिल्भर | ६०-७४ | घटाइएको यात्रा आवंटन |
| प्रतिबन्धित | ६० भन्दा कम | खाता समीक्षा, सम्भावित निलम्बन |

### ७.५ अन्तरशहर योग्यता

अन्तरशहर यात्राहरू स्वीकार गर्न, तपाईंले:
- ८० वा माथि चालक स्कोर हुनुपर्छ
- कम्तिमा ३० यात्राहरू पूरा गरेको हुनुपर्छ
- अन्तरशहर सेवाको लागि अप्ट-इन गरेको हुनुपर्छ
- अन्तरशहर यात्राको लागि सवारी आवश्यकताहरू पूरा गर्नुपर्छ

### ७.६ स्कोर रिकभरी

- निरन्तर राम्रो कार्यसम्पादनले तपाईंको स्कोर बढाउँछ
- स्कोर दैनिक मूल्यांकन गरिन्छ
- साप्ताहिक कार्यसम्पादन समीक्षाहरूले स्तर स्थितिलाई असर गर्न सक्छ`
      },
      {
        id: 'dispatch',
        title: '८. डिस्प्याच र यात्रा आवंटन',
        content: `### ८.१ डिस्प्याच प्रणाली

शुभयात्राले निम्नको आधारमा यात्राहरू आवंटन गर्न स्वचालित डिस्प्याच प्रणाली प्रयोग गर्छ:
- पिकअप स्थानसँग निकटता (४५% भार)
- स्वीकृति दर (२५% भार)
- निष्क्रिय समय (१५% भार)
- यात्रु रेटिंग (१०% भार)

### ८.२ यात्रा अनुरोध टाइमआउट

- शहर यात्राहरू: प्रतिक्रिया दिन १५-२० सेकेन्ड
- अन्तरशहर यात्राहरू: प्रतिक्रिया दिन ३०-४५ सेकेन्ड
- कुनै प्रतिक्रिया छैन = स्वचालित अस्वीकृति (स्कोरलाई असर गर्छ)

### ८.३ यात्रा लकिंग

- तपाईंले यात्रा स्वीकार गरेपछि, यो तपाईंमा लक हुन्छ
- डबल-स्वीकृति प्रणालीद्वारा रोकिएको छ
- स्वीकार गर्नाले तपाईंलाई यात्रा पूरा गर्न प्रतिबद्ध गर्छ

### ८.४ ग्यारेन्टी गरिएको यात्रा छैन

- शुभयात्राले कुनै न्यूनतम संख्याको यात्राहरूको ग्यारेन्टी दिँदैन
- यात्रा उपलब्धता यात्रु माग मा निर्भर गर्छ
- तपाईं यात्रा आवंटनको लागि अन्य चालकहरूसँग प्रतिस्पर्धा गर्नुहुन्छ`
      },
      {
        id: 'cancellation',
        title: '९. रद्द नीति',
        content: `### ९.१ चालक-प्रारम्भित रद्द

तपाईं वैध कारणहरूको लागि मात्र यात्रा रद्द गर्न सक्नुहुन्छ:
- सुरक्षा चिन्ताहरू
- प्रतीक्षा अवधि पछि यात्रु नो-शो
- यात्रु दुर्व्यवहार
- आपतकालीन परिस्थितिहरू
- सवारी बिग्रनु

### ९.२ रद्द दण्डहरू

- रद्दहरूले तपाईंको चालक स्कोरलाई नकारात्मक असर गर्छ
- अत्यधिक रद्दहरूले अस्थायी निष्क्रियता हुन सक्छ
- रद्दको ढाँचाको अनुसन्धान गरिनेछ

### ९.३ नो-शो प्रक्रिया

यदि यात्रु आइपुगेन भने:
१. तोकिएको समयको लागि पिकअप स्थानमा पर्खनुहोस्
२. एप मार्फत यात्रुलाई सम्पर्क गर्न प्रयास गर्नुहोस्
३. कुनै प्रतिक्रिया छैन भने, एपमा नो-शो चिन्ह लगाउनुहोस्
४. सम्भव भएमा परिस्थिति दस्तावेज गर्नुहोस्`
      },
      {
        id: 'insurance',
        title: '१०. बीमा र दायित्व',
        content: `### १०.१ तपाईंको बीमा दायित्वहरू

तपाईंले कायम राख्नुपर्छ:
- नेपाल कानूनले आवश्यक पारे अनुसार वैध सवारी बीमा
- व्यापक बीमा कडा रूपमा सिफारिस गरिएको छ
- तेस्रो-पक्ष दायित्व कभर गर्ने बीमा

### १०.२ दायित्व आवंटन

- तपाईंको लापरवाहीले भएका दुर्घटनाहरूको लागि तपाईं उत्तरदायी हुनुहुन्छ
- तपाईं यात्राहरूमा यात्रु सुरक्षाको लागि जिम्मेवार हुनुहुन्छ
- शुभयात्रा तपाईंको सवारी चलाउने कार्यहरूको लागि उत्तरदायी छैन
- शुभयात्रा सवारी-सम्बन्धित घटनाहरूको लागि उत्तरदायी छैन

### १०.३ क्षतिपूर्ति

तपाईं निम्नबाट उत्पन्न हुने दाबीहरू विरुद्ध शुभयात्रालाई क्षतिपूर्ति गर्न सहमत हुनुहुन्छ:
- तपाईंको यातायात सेवाहरू
- तपाईंको यात्राहरूमा दुर्घटनाहरू वा चोटपटकहरू
- कानून वा यो सम्झौताको तपाईंको उल्लंघन
- यात्रु सम्पत्तिमा क्षति

### १०.४ शुभयात्राको सीमित दायित्व

शुभयात्राको दायित्व सीमित छ:
- प्लेटफर्म कार्यक्षमता समस्याहरू
- भाडा गणनामा त्रुटिहरू (सच्याइनेछ)
- शुभयात्रालाई सीधै श्रेय दिइने एप खराबीहरू`
      },
      {
        id: 'confidentiality',
        title: '११. गोपनीयता र डाटा',
        content: `### ११.१ यात्रु जानकारी

- यात्रु डाटा गोप्य छ
- तपाईं यात्रु सम्पर्क यात्रा-सम्बन्धित सञ्चारको लागि मात्र प्रयोग गर्न सक्नुहुन्छ
- तपाईंले यात्रु जानकारी भण्डारण वा साझा गर्नु हुँदैन
- यात्रा-पछिको यात्रुसँग सम्पर्क निषेध छ

### ११.२ तपाईंको डाटा

- शुभयात्राले गोपनीयता नीतिमा वर्णन गरिए अनुसार डाटा सङ्कलन गर्छ
- अनलाइन घण्टाहरूमा स्थान ट्र्याकिंग आवश्यक छ
- यात्रा डाटा गुणस्तर र विवाद समाधानको लागि प्रयोग गरिन्छ

### ११.३ गैर-प्रकटीकरण

तपाईं खुलासा नगर्न सहमत हुनुहुन्छ:
- शुभयात्राको व्यापार जानकारी
- प्रतिस्पर्धीहरूलाई भाडा एल्गोरिदम वा कमिशन संरचनाहरू
- कुनै पनि स्वामित्व प्लेटफर्म जानकारी`
      },
      {
        id: 'suspension',
        title: '१२. निलम्बन र निष्क्रियता',
        content: `### १२.१ निलम्बनको आधार

शुभयात्राले तपाईंको खाता निलम्बन गर्न सक्छ:
- यो सम्झौताको उल्लंघन
- चालक स्कोर ६० भन्दा तल खसेमा
- यात्रु गुनासोहरू वा सुरक्षा चिन्ताहरू
- धोखाधडी गतिविधि
- कागजात म्याद सकिएमा
- गम्भीर घटनाहरूको अनुसन्धान

### १२.२ स्थायी निष्क्रियताको आधार

तपाईंको खाता स्थायी रूपमा निष्क्रिय गर्न सकिन्छ:
- गम्भीर सुरक्षा उल्लंघनहरू
- आपराधिक गतिविधि
- चेतावनी पछि दोहोरिने उल्लंघनहरू
- धोखाधडी वा हेरफेर
- यात्रुहरू विरुद्ध हिंसा वा धम्की
- सवारी चलाउँदा लागूपदार्थ वा मदिरा प्रयोग
- GPS स्पूफिंग वा हेरफेर

### १२.३ निलम्बन प्रक्रिया

१. निलम्बन र कारणको सूचना
२. प्रतिक्रिया दिने अवसर (गैर-सुरक्षा मुद्दाहरूको लागि)
३. लागू भएमा अनुसन्धान
४. उचित समयमा निर्णय सञ्चार गरियो

### १२.४ अपील प्रक्रिया

- तपाईं निष्क्रियता निर्णयहरू अपील गर्न सक्नुहुन्छ
- अपीलहरू १४ दिन भित्र पेश गर्नुपर्छ
- अपीलहरू शुभयात्रा व्यवस्थापनद्वारा समीक्षा गरिन्छ
- अपीलमा निर्णय अन्तिम हो`
      },
      {
        id: 'termination',
        title: '१३. समाप्ति',
        content: `### १३.१ चालकद्वारा समाप्ति

तपाईं जुनसुकै समय यो सम्झौता समाप्त गर्न सक्नुहुन्छ:
- तपाईंको चालक खाता निष्क्रिय गरेर
- शुभयात्रालाई लिखित सूचना प्रदान गरेर
- प्लेटफर्म प्रयोग गर्न बन्द गरेर

### १३.२ शुभयात्राद्वारा समाप्ति

शुभयात्राले यो सम्झौता समाप्त गर्न सक्छ:
- कारणको लागि (सर्तहरूको उल्लंघन)
- ३० दिनको सूचनासँग कारण बिना
- गम्भीर उल्लंघनहरूको लागि तुरुन्तै

### १३.३ समाप्तिको प्रभाव

समाप्ति पछि:
- प्लेटफर्ममा तपाईंको पहुँच रद्द गरिनेछ
- बाँकी आम्दानीहरू सामान्य प्रक्रिया अनुसार सेटल गरिनेछ
- गोपनीयता दायित्वहरू जारी रहन्छ
- तपाईंले शुभयात्रा ब्र्यान्डिंग प्रयोग गर्न बन्द गर्नुपर्छ

### १३.४ कुनै समाप्ति क्षतिपूर्ति छैन

कमाइएको रकम बाहेक समाप्तिमा कुनै क्षतिपूर्ति भुक्तानीयोग्य छैन।`
      },
      {
        id: 'disputes',
        title: '१४. विवाद समाधान',
        content: `### १४.१ अनौपचारिक समाधान

विवादहरू पहिले अनौपचारिक समाधानको लागि शुभयात्रा सहायतासँग उठाउनुपर्छ।

### १४.२ शासन कानून

यो सम्झौता नेपालको कानूनद्वारा शासित छ।

### १४.३ अधिकारक्षेत्र

विवादहरू काठमाडौं, नेपालका अदालतहरूको विशेष अधिकारक्षेत्र अन्तर्गत पर्नेछन्।

### १४.४ मध्यस्थता

पक्षहरू रु. १,००,००० भन्दा बढीको विवादहरूको लागि मुद्दा अघि मध्यस्थता प्रयास गर्न सहमत छन्।`
      },
      {
        id: 'compliance',
        title: '१५. नियमहरूको अनुपालन',
        content: `### १५.१ यातायात कानूनहरू

तपाईंले पालना गर्नुपर्छ:
- सवारी साधन तथा यातायात व्यवस्था ऐन, २०४९
- लागू प्रादेशिक राइड-हेलिंग नियमहरू
- ट्राफिक नियम र विनियमहरू
- राइड-शेयरिंगमा लागू हुने कुनै पनि भविष्यका नियमहरू

### १५.२ कर दायित्वहरू

तपाईं जिम्मेवार हुनुहुन्छ:
- आवश्यक भएमा करको लागि दर्ता गर्न
- कर विवरणी दाखिला गर्न
- तपाईंको आम्दानीमा लागू करहरू तिर्न
- वित्तीय अभिलेखहरू राख्न

### १५.३ नियामक परिवर्तनहरू

- शुभयात्राले सान्दर्भिक नियामक परिवर्तनहरू सञ्चार गर्नेछ
- तपाईंले तोकिएको समयसीमा भित्र नयाँ आवश्यकताहरूको पालना गर्नुपर्छ
- पालना गर्न असफल हुँदा खाता प्रतिबन्धहरू हुन सक्छ`
      },
      {
        id: 'modifications',
        title: '१६. सम्झौतामा परिमार्जनहरू',
        content: `### १६.१ परिमार्जन गर्ने अधिकार

शुभयात्राले यो सम्झौता परिमार्जन गर्ने अधिकार राख्छ।

### १६.२ सूचना

- भौतिक परिवर्तनहरू एप वा इमेल मार्फत सूचित गरिनेछ
- परिवर्तनहरू सूचना वा तोकिएको मितिमा प्रभावकारी
- निरन्तर प्रयोगले स्वीकृति गठन गर्छ

### १६.३ परिवर्तनहरूसँग असहमति

यदि तपाईं परिवर्तनहरूसँग असहमत हुनुहुन्छ भने:
- तपाईं आफ्नो खाता समाप्त गर्न सक्नुहुन्छ
- परिवर्तन प्रभावकारी मिति पछि अघिल्ला सर्तहरू लागू हुँदैनन्`
      },
      {
        id: 'general',
        title: '१७. सामान्य प्रावधानहरू',
        content: `### १७.१ सम्पूर्ण सम्झौता

यो सम्झौता, सेवाका सर्तहरू र गोपनीयता नीतिसँगै, सम्पूर्ण सम्झौता गठन गर्छ।

### १७.२ विभाज्यता

यदि कुनै प्रावधान लागू गर्न नसकिने छ भने, बाँकी प्रावधानहरू प्रभावमा रहन्छन्।

### १७.३ कुनै छूट छैन

कुनै पनि प्रावधान लागू गर्न असफल हुनाले छूट गठन गर्दैन।

### १७.४ निर्धारण

तपाईं यो सम्झौता निर्धारण गर्न सक्नुहुन्न। शुभयात्राले स्वतन्त्र रूपमा निर्धारण गर्न सक्छ।

### १७.५ भाषा

यो सम्झौता अंग्रेजीमा छ। अनुवाद द्वन्द्वको अवस्थामा अंग्रेजी संस्करण प्रबल हुन्छ।

### १७.६ सूचनाहरू

सूचनाहरू तपाईंको खातामा दर्ता गरिएको इमेल/फोनमा पठाइनेछ।`
      },
      {
        id: 'contact',
        title: '१८. सम्पर्क जानकारी',
        content: `**सेवा सञ्चालक:**
सङ्कट मोचन सजिलो यात्रा प्रा. लि.
- दर्ता: ३६८११५/८१/८२
- चालक सहायता: drivers@subhyatranepal.com
- सामान्य सहायता: support@subhyatranepal.com
- फोन: +९७७ ९८५५०४२५०३
- ठेगाना: चन्द्रपुर, रौताहट, मधेश प्रदेश, नेपाल
- वेबसाइट: https://subhyatranepal.com

**प्रविधि साझेदार:**
नेक्सालारिस टेक प्रा. लि.
- इमेल: contact@nexalaris.com
- फोन: +९७७ ९८१४८४६७११`
      },
      {
        id: 'acceptance',
        title: '१९. स्वीकृति',
        content: `शुभयात्रामा चालक-साझेदारको रूपमा दर्ता गरेर, तपाईं स्वीकार गर्नुहुन्छ कि तपाईंले यो चालक-साझेदार सम्झौता पढ्नुभएको छ, बुझ्नुभएको छ, र यसबाट बाध्य हुन सहमत हुनुहुन्छ।

**इलेक्ट्रोनिक स्वीकृति:**
"म स्वीकार गर्छु" वा "चालकको रूपमा दर्ता गर्नुहोस्" क्लिक गर्नाले तपाईंको इलेक्ट्रोनिक हस्ताक्षर र यो सम्झौताको स्वीकृति गठन गर्छ, जुन नेपालको इलेक्ट्रोनिक कारोबार ऐन, २०६३ अन्तर्गत कानूनी रूपमा बाध्यकारी छ।

---

*यो सम्झौता नेपालको सवारी साधन तथा यातायात व्यवस्था ऐन २०४९, व्यक्तिगत गोपनीयता ऐन २०७५, इलेक्ट्रोनिक कारोबार ऐन २०६३, र लागू प्रादेशिक राइड-हेलिंग नियमहरूको अनुपालन गर्छ।*`
      }
    ]
  }
};

export default function DriverAgreementPage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <LegalPageLayout
      title={c.title}
      subtitle={c.subtitle}
      effectiveDate={c.effectiveDate}
      lastUpdated={c.lastUpdated}
      sections={c.sections}
      language={language}
    />
  );
}
