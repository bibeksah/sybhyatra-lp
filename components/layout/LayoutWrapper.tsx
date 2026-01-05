'use client';

import { ReactNode } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { Header } from './Header';
import { Footer } from './Footer';

function LayoutContent({ children }: { children: ReactNode }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header language={language} onLanguageChange={setLanguage} />
      <main className="flex-1">{children}</main>
      <Footer language={language} />
    </div>
  );
}

export function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <LayoutContent>{children}</LayoutContent>
    </LanguageProvider>
  );
}

export default LayoutWrapper;
