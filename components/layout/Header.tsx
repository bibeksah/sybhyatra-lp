'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface HeaderProps {
  language: 'en' | 'ne';
  onLanguageChange: (lang: 'en' | 'ne') => void;
}

const content = {
  en: {
    ride: 'Ride',
    drive: 'Drive',
    safety: 'Safety',
    about: 'About',
    contact: 'Contact',
    joinWaitlist: 'Join Waitlist',
  },
  ne: {
    ride: 'यात्रा',
    drive: 'ड्राइभ',
    safety: 'सुरक्षा',
    about: 'हाम्रो बारेमा',
    contact: 'सम्पर्क',
    joinWaitlist: 'प्रतीक्षा सूची',
  },
};

const navLinks = [
  { href: '/ride', key: 'ride' as const },
  { href: '/drive', key: 'drive' as const },
  { href: '/safety', key: 'safety' as const },
  { href: '/about', key: 'about' as const },
  { href: '/contact', key: 'contact' as const },
];

export function Header({ language, onLanguageChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const c = content[language];

  // Use scrolled styles on non-home pages or when scrolled
  const useScrolledStyles = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        useScrolledStyles || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.svg" alt="SubhYatra Logo" width={40} height={40} />
            <span
              className={cn(
                'text-2xl font-bold transition-colors',
                useScrolledStyles || isMobileMenuOpen ? 'text-brand-dark-blue' : 'text-white'
              )}
            >
              SubhYatra
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-medium transition-colors hover:text-brand-yellow',
                  useScrolledStyles ? 'text-brand-dark-blue' : 'text-white'
                )}
              >
                {c[link.key]}
              </Link>
            ))}
          </nav>

          {/* Right Side: Language Toggle + CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center space-x-2 bg-black/10 p-1.5 rounded-full">
              <Label
                htmlFor="language-toggle-desktop"
                className={cn(
                  'text-sm cursor-pointer transition-colors px-1',
                  language === 'en' ? 'font-bold' : '',
                  useScrolledStyles ? 'text-brand-dark-blue' : 'text-white'
                )}
              >
                EN
              </Label>
              <Switch
                id="language-toggle-desktop"
                checked={language === 'ne'}
                onCheckedChange={(checked) => onLanguageChange(checked ? 'ne' : 'en')}
                aria-label="Toggle language"
              />
              <Label
                htmlFor="language-toggle-desktop"
                className={cn(
                  'text-sm cursor-pointer transition-colors px-1',
                  language === 'ne' ? 'font-bold' : '',
                  useScrolledStyles ? 'text-brand-dark-blue' : 'text-white'
                )}
              >
                NE
              </Label>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="bg-brand-yellow text-brand-dark-blue hover:bg-white font-bold rounded-full px-6"
            >
              <a href="/#waitlist-form">{c.joinWaitlist}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn('w-6 h-6', useScrolledStyles || isMobileMenuOpen ? 'text-brand-dark-blue' : 'text-white')} />
            ) : (
              <Menu className={cn('w-6 h-6', useScrolledStyles ? 'text-brand-dark-blue' : 'text-white')} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-brand-dark-blue font-medium hover:text-brand-yellow px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {c[link.key]}
                </Link>
              ))}

              {/* Mobile Language Toggle */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-gray-100 mt-2 pt-4">
                <span className="text-brand-dark-blue font-medium">Language</span>
                <div className="flex items-center space-x-2">
                  <Label
                    htmlFor="language-toggle-mobile"
                    className={cn(
                      'text-sm cursor-pointer text-brand-dark-blue',
                      language === 'en' ? 'font-bold' : ''
                    )}
                  >
                    EN
                  </Label>
                  <Switch
                    id="language-toggle-mobile"
                    checked={language === 'ne'}
                    onCheckedChange={(checked) => onLanguageChange(checked ? 'ne' : 'en')}
                    aria-label="Toggle language"
                  />
                  <Label
                    htmlFor="language-toggle-mobile"
                    className={cn(
                      'text-sm cursor-pointer text-brand-dark-blue',
                      language === 'ne' ? 'font-bold' : ''
                    )}
                  >
                    NE
                  </Label>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="px-4 pt-2">
                <Button
                  asChild
                  className="w-full bg-brand-yellow text-brand-dark-blue hover:bg-brand-dark-blue hover:text-white font-bold rounded-full"
                >
                  <a href="/#waitlist-form" onClick={() => setIsMobileMenuOpen(false)}>
                    {c.joinWaitlist}
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
