'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface SectionItem {
  id: string;
  title: string;
  content: string;
}

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  effectiveDate?: string;
  lastUpdated: string;
  tableOfContents?: TableOfContentsItem[];
  sections?: SectionItem[];
  children?: ReactNode;
  language: 'en' | 'ne';
}

const content = {
  en: {
    lastUpdated: 'Last Updated',
    tableOfContents: 'Table of Contents',
    home: 'Home',
    legal: 'Legal',
  },
  ne: {
    lastUpdated: 'अन्तिम अपडेट',
    tableOfContents: 'विषयसूची',
    home: 'गृहपृष्ठ',
    legal: 'कानूनी',
  },
};

// Helper function to render markdown-style content
function renderContent(text: string) {
  // Split by newlines and process each line
  const lines = text.split('\n');
  const elements: React.ReactElement[] = [];
  let currentList: string[] = [];
  let listType: 'ul' | 'ol' | null = null;
  let inTable = false;
  let tableRows: string[][] = [];

  const flushList = () => {
    if (currentList.length > 0 && listType) {
      const ListComponent = listType === 'ol' ? 'ol' : 'ul';
      elements.push(
        <ListComponent key={elements.length} className={listType === 'ol' ? 'list-decimal' : 'list-disc'}>
          {currentList.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatText(item) }} />
          ))}
        </ListComponent>
      );
      currentList = [];
      listType = null;
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      elements.push(
        <div key={elements.length} className="overflow-x-auto my-4">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                {tableRows[0]?.map((cell, i) => (
                  <th key={i} className="border border-gray-200 px-4 py-2 text-left font-semibold">
                    {cell.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.slice(2).map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border border-gray-200 px-4 py-2">
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  const formatText = (text: string) => {
    // Bold
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    return text;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Skip empty lines but flush lists
    if (!trimmedLine) {
      flushList();
      flushTable();
      continue;
    }

    // Table detection
    if (trimmedLine.startsWith('|') && trimmedLine.endsWith('|')) {
      flushList();
      inTable = true;
      const cells = trimmedLine.split('|').slice(1, -1);
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Headers
    if (trimmedLine.startsWith('### ')) {
      flushList();
      elements.push(
        <h4 key={elements.length} className="text-lg font-bold mt-6 mb-3 text-brand-dark-blue">
          {trimmedLine.substring(4)}
        </h4>
      );
      continue;
    }

    // Numbered list items
    if (/^\d+\.\s/.test(trimmedLine)) {
      if (listType !== 'ol') {
        flushList();
        listType = 'ol';
      }
      currentList.push(trimmedLine.replace(/^\d+\.\s/, ''));
      continue;
    }

    // Bullet list items
    if (trimmedLine.startsWith('- ')) {
      if (listType !== 'ul') {
        flushList();
        listType = 'ul';
      }
      currentList.push(trimmedLine.substring(2));
      continue;
    }

    // Regular paragraph
    flushList();
    elements.push(
      <p key={elements.length} className="mb-4" dangerouslySetInnerHTML={{ __html: formatText(trimmedLine) }} />
    );
  }

  flushList();
  flushTable();

  return elements;
}

export function LegalPageLayout({
  title,
  subtitle,
  effectiveDate,
  lastUpdated,
  tableOfContents,
  sections,
  children,
  language,
}: LegalPageLayoutProps) {
  const c = content[language];

  // Generate table of contents from sections if not provided
  const toc = tableOfContents || (sections ? sections.map(s => ({ id: s.id, title: s.title })) : []);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-brand-yellow transition-colors">
            {c.home}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-brand-dark-blue font-medium">{title}</span>
        </nav>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Table of Contents */}
          {toc && toc.length > 0 && (
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-xl shadow-sm p-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
                <h3 className="font-bold text-brand-dark-blue mb-4">{c.tableOfContents}</h3>
                <nav className="space-y-2">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-brand-yellow transition-colors py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          {/* Main Content */}
          <main className={toc && toc.length > 0 ? 'lg:col-span-3' : 'lg:col-span-4'}>
            <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12">
              {/* Header */}
              <header className="mb-8 pb-8 border-b border-gray-200">
                <h1 className="text-3xl md:text-4xl font-bold text-brand-dark-blue mb-2">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-lg text-brand-gray mb-2">{subtitle}</p>
                )}
                {effectiveDate && (
                  <p className="text-gray-500 text-sm">{effectiveDate}</p>
                )}
                <p className="text-gray-500">
                  {c.lastUpdated}: <span className="font-medium">{lastUpdated}</span>
                </p>
              </header>

              {/* Content */}
              <article className="prose prose-lg max-w-none prose-headings:text-brand-dark-blue prose-headings:font-bold prose-a:text-brand-yellow prose-a:no-underline hover:prose-a:underline prose-li:marker:text-brand-yellow">
                {sections ? (
                  // Render sections array
                  sections.map((section) => (
                    <section key={section.id} id={section.id} className="mb-10 scroll-mt-32">
                      <h2 className="text-2xl font-bold text-brand-dark-blue mb-4 pb-2 border-b border-gray-100">
                        {section.title}
                      </h2>
                      <div className="space-y-4">
                        {renderContent(section.content)}
                      </div>
                    </section>
                  ))
                ) : (
                  // Render children
                  children
                )}
              </article>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LegalPageLayout;
