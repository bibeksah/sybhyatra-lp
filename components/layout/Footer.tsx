'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ne';
}

const content = {
  en: {
    tagline: 'Your Ride, Your Way. The Nepali Way.',
    company: 'Company',
    aboutUs: 'About Us',
    careers: 'Careers',
    contact: 'Contact',
    riders: 'For Riders',
    howItWorks: 'How It Works',
    safety: 'Safety',
    faq: 'FAQ',
    drivers: 'For Drivers',
    becomeDriver: 'Become a Driver',
    driverFaq: 'Driver FAQ',
    earnings: 'Earnings',
    legal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    driverAgreement: 'Driver Agreement',
    cancellationPolicy: 'Cancellation Policy',
    contactUs: 'Contact Us',
    followUs: 'Follow Us',
    copyright: 'All Rights Reserved.',
    madeWithLove: 'Made with love in Nepal',
    poweredBy: 'Powered by',
  },
  ne: {
    tagline: 'तपाईंको सवारी, तपाईंको तरिका। नेपाली तरिका।',
    company: 'कम्पनी',
    aboutUs: 'हाम्रो बारेमा',
    careers: 'क्यारियर',
    contact: 'सम्पर्क',
    riders: 'यात्रुहरूको लागि',
    howItWorks: 'यो कसरी काम गर्छ',
    safety: 'सुरक्षा',
    faq: 'बारम्बार सोधिने प्रश्नहरू',
    drivers: 'चालकहरूको लागि',
    becomeDriver: 'चालक बन्नुहोस्',
    driverFaq: 'चालक FAQ',
    earnings: 'आम्दानी',
    legal: 'कानूनी',
    privacyPolicy: 'गोपनीयता नीति',
    termsOfService: 'सेवाका सर्तहरू',
    driverAgreement: 'चालक सम्झौता',
    cancellationPolicy: 'रद्द नीति',
    contactUs: 'हामीलाई सम्पर्क गर्नुहोस्',
    followUs: 'हामीलाई फलो गर्नुहोस्',
    copyright: 'सबै अधिकार सुरक्षित।',
    madeWithLove: 'नेपालमा मायाले बनाइएको',
    poweredBy: 'द्वारा संचालित',
  },
};

export function Footer({ language }: FooterProps) {
  const c = content[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.svg"
                alt="SubhYatra Logo"
                width={40}
                height={40}
                className="bg-brand-yellow rounded-full p-1"
              />
              <span className="text-xl font-bold text-white">SubhYatra</span>
            </Link>
            <p className="text-sm mb-6 max-w-xs">{c.tagline}</p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:support@subhyatranepal.com"
                className="flex items-center gap-2 text-sm hover:text-brand-yellow transition-colors"
              >
                <Mail size={16} />
                support@subhyatranepal.com
              </a>
              <a
                href="tel:+9779855042503"
                className="flex items-center gap-2 text-sm hover:text-brand-yellow transition-colors"
              >
                <Phone size={16} />
                +977-9855042503
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/share/1Pm49zVepf/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://x.com/SubhYatraNepal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/SubhYatraNepal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">
              {c.company}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-brand-yellow transition-colors">
                  {c.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-yellow transition-colors">
                  {c.contact}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-brand-yellow transition-colors">
                  {c.faq}
                </Link>
              </li>
            </ul>
          </div>

          {/* Riders Links */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">
              {c.riders}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/ride" className="hover:text-brand-yellow transition-colors">
                  {c.howItWorks}
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-brand-yellow transition-colors">
                  {c.safety}
                </Link>
              </li>
            </ul>

            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm mt-8">
              {c.drivers}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/drive" className="hover:text-brand-yellow transition-colors">
                  {c.becomeDriver}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">
              {c.legal}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-brand-yellow transition-colors">
                  {c.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-yellow transition-colors">
                  {c.termsOfService}
                </Link>
              </li>
              <li>
                <Link href="/driver-agreement" className="hover:text-brand-yellow transition-colors">
                  {c.driverAgreement}
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="hover:text-brand-yellow transition-colors">
                  {c.cancellationPolicy}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              &copy; {currentYear} SubhYatra - Sankat Mochan Sajilo Yatra Pvt. Ltd. {c.copyright}
            </p>
            <div className="flex items-center gap-2">
              <span>{c.poweredBy}</span>
              <a
                href="https://nexalaris.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image src="/nexalaris-logo.svg" alt="Nexalaris Tech Logo" width={100} height={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
