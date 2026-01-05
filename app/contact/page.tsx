'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Mail,
  Phone,
  Clock,
  MessageSquare,
  Send,
  Facebook,
  Twitter,
  Instagram,
  HelpCircle
} from 'lucide-react';

const content = {
  en: {
    title: 'Contact Us',
    subtitle: 'We\'re here to help',
    heroDescription: 'Have questions, feedback, or need support? We\'d love to hear from you.',
    contactInfoTitle: 'Get in Touch',
    contactMethods: [
      {
        icon: Mail,
        title: 'Email Us',
        primary: 'support@subhyatranepal.com',
        secondary: 'For general inquiries and support',
      },
      {
        icon: Phone,
        title: 'Call Us',
        primary: '+977 9855042503',
        secondary: 'Available during business hours',
      },
      {
        icon: Clock,
        title: 'Business Hours',
        primary: 'Sun - Fri: 7:00 AM - 8:00 PM',
        secondary: 'Saturday: 9:00 AM - 5:00 PM',
      },
    ],
    formTitle: 'Send us a Message',
    formDescription: 'Fill out the form below and we\'ll get back to you as soon as possible.',
    form: {
      name: 'Your Name',
      namePlaceholder: 'Enter your full name',
      email: 'Email Address',
      emailPlaceholder: 'Enter your email',
      phone: 'Phone Number (Optional)',
      phonePlaceholder: '+977 98XXXXXXXX',
      subject: 'Subject',
      subjectPlaceholder: 'What is this about?',
      message: 'Message',
      messagePlaceholder: 'Tell us how we can help you...',
      submit: 'Send Message',
      submitting: 'Sending...',
      success: 'Thank you! Your message has been sent. We\'ll get back to you soon.',
      error: 'Sorry, there was an error. Please try again or email us directly.',
    },
    subjectOptions: [
      'General Inquiry',
      'Rider Support',
      'Driver Support',
      'Partnership Inquiry',
      'Media & Press',
      'Feedback',
      'Other',
    ],
    socialTitle: 'Follow Us',
    socialDescription: 'Stay connected with SubhYatra on social media for updates and news.',
    faqTitle: 'Frequently Asked Questions',
    faqDescription: 'Find quick answers to common questions.',
    faqLink: 'Visit FAQ Page',
    departmentsTitle: 'Contact by Department',
    departments: [
      {
        name: 'General Support',
        email: 'support@subhyatranepal.com',
      },
      {
        name: 'Driver Support',
        email: 'drivers@subhyatranepal.com',
      },
      {
        name: 'Privacy & Data',
        email: 'privacy@subhyatranepal.com',
      },
      {
        name: 'Partnerships',
        email: 'partners@subhyatranepal.com',
      },
    ],
  },
  ne: {
    title: 'हामीलाई सम्पर्क गर्नुहोस्',
    subtitle: 'हामी यहाँ मद्दत गर्न छौं',
    heroDescription: 'प्रश्नहरू, प्रतिक्रिया, वा सहायता चाहिन्छ? हामी तपाईंबाट सुन्न चाहान्छौं।',
    contactInfoTitle: 'सम्पर्कमा रहनुहोस्',
    contactMethods: [
      {
        icon: Mail,
        title: 'इमेल गर्नुहोस्',
        primary: 'support@subhyatranepal.com',
        secondary: 'सामान्य सोधपुछ र सहायताको लागि',
      },
      {
        icon: Phone,
        title: 'फोन गर्नुहोस्',
        primary: '+९७७ ९८५५०४२५०३',
        secondary: 'व्यापार समयमा उपलब्ध',
      },
      {
        icon: Clock,
        title: 'व्यापार समय',
        primary: 'आइत - शुक्र: बिहान ७:०० - राति ८:००',
        secondary: 'शनिबार: बिहान ९:०० - साँझ ५:००',
      },
    ],
    formTitle: 'हामीलाई सन्देश पठाउनुहोस्',
    formDescription: 'तलको फारम भर्नुहोस् र हामी सकेसम्म चाँडो तपाईंलाई जवाफ दिनेछौं।',
    form: {
      name: 'तपाईंको नाम',
      namePlaceholder: 'आफ्नो पूरा नाम प्रविष्ट गर्नुहोस्',
      email: 'इमेल ठेगाना',
      emailPlaceholder: 'आफ्नो इमेल प्रविष्ट गर्नुहोस्',
      phone: 'फोन नम्बर (वैकल्पिक)',
      phonePlaceholder: '+९७७ ९८XXXXXXXX',
      subject: 'विषय',
      subjectPlaceholder: 'यो के बारेमा हो?',
      message: 'सन्देश',
      messagePlaceholder: 'हामी तपाईंलाई कसरी मद्दत गर्न सक्छौं भन्नुहोस्...',
      submit: 'सन्देश पठाउनुहोस्',
      submitting: 'पठाउँदै...',
      success: 'धन्यवाद! तपाईंको सन्देश पठाइएको छ। हामी चाँडै तपाईंलाई जवाफ दिनेछौं।',
      error: 'माफ गर्नुहोस्, त्रुटि भयो। कृपया पुन: प्रयास गर्नुहोस् वा हामीलाई सिधै इमेल गर्नुहोस्।',
    },
    subjectOptions: [
      'सामान्य सोधपुछ',
      'यात्रु सहायता',
      'चालक सहायता',
      'साझेदारी सोधपुछ',
      'मिडिया र प्रेस',
      'प्रतिक्रिया',
      'अन्य',
    ],
    socialTitle: 'हामीलाई फलो गर्नुहोस्',
    socialDescription: 'अपडेट र समाचारहरूको लागि सामाजिक सञ्जालमा शुभयात्रासँग जोडिएर रहनुहोस्।',
    faqTitle: 'बारम्बार सोधिने प्रश्नहरू',
    faqDescription: 'सामान्य प्रश्नहरूको छिटो जवाफ खोज्नुहोस्।',
    faqLink: 'FAQ पृष्ठ हेर्नुहोस्',
    departmentsTitle: 'विभाग अनुसार सम्पर्क',
    departments: [
      {
        name: 'सामान्य सहायता',
        email: 'support@subhyatranepal.com',
      },
      {
        name: 'चालक सहायता',
        email: 'drivers@subhyatranepal.com',
      },
      {
        name: 'गोपनीयता र डाटा',
        email: 'privacy@subhyatranepal.com',
      },
      {
        name: 'साझेदारी',
        email: 'partners@subhyatranepal.com',
      },
    ],
  },
};

export default function ContactPage() {
  const { language } = useLanguage();
  const c = content[language];

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    // Simulate form submission
    // In production, this would send to an API endpoint
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Hero Section */}
      <section className="bg-brand-dark-blue text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 text-brand-yellow" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{c.title}</h1>
            <p className="text-xl text-brand-yellow font-semibold mb-2">{c.subtitle}</p>
            <p className="text-gray-300">{c.heroDescription}</p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {c.contactMethods.map((method, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-14 h-14 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-7 h-7 text-brand-yellow" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark-blue mb-1">{method.title}</h3>
                <p className="font-semibold text-brand-dark-blue">{method.primary}</p>
                <p className="text-sm text-brand-gray">{method.secondary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark-blue mb-2">{c.formTitle}</h2>
              <p className="text-brand-gray mb-6">{c.formDescription}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark-blue mb-1">
                      {c.form.name} *
                    </label>
                    <Input
                      type="text"
                      placeholder={c.form.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      disabled={formState === 'submitting'}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark-blue mb-1">
                      {c.form.email} *
                    </label>
                    <Input
                      type="email"
                      placeholder={c.form.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={formState === 'submitting'}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark-blue mb-1">
                      {c.form.phone}
                    </label>
                    <Input
                      type="tel"
                      placeholder={c.form.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      disabled={formState === 'submitting'}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark-blue mb-1">
                      {c.form.subject} *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      disabled={formState === 'submitting'}
                      className="w-full h-10 px-3 rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                    >
                      <option value="">{c.form.subjectPlaceholder}</option>
                      {c.subjectOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-dark-blue mb-1">
                    {c.form.message} *
                  </label>
                  <textarea
                    placeholder={c.form.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    disabled={formState === 'submitting'}
                    rows={5}
                    className="w-full px-3 py-2 rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow resize-none"
                  />
                </div>

                {formState === 'success' && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm">
                    {c.form.success}
                  </div>
                )}

                {formState === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
                    {c.form.error}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-brand-yellow text-brand-dark-blue hover:bg-brand-yellow/90 font-bold rounded-full"
                  disabled={formState === 'submitting'}
                >
                  {formState === 'submitting' ? c.form.submitting : c.form.submit}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Departments */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-brand-dark-blue mb-4">{c.departmentsTitle}</h3>
                <ul className="space-y-4">
                  {c.departments.map((dept, index) => (
                    <li key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-brand-dark-blue">{dept.name}</span>
                      <a href={`mailto:${dept.email}`} className="text-brand-yellow hover:underline text-sm">
                        {dept.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-brand-dark-blue mb-2">{c.socialTitle}</h3>
                <p className="text-brand-gray text-sm mb-4">{c.socialDescription}</p>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com/subhyatra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark-blue transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com/subhyatra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark-blue transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com/subhyatra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark-blue transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-brand-dark-blue text-white p-6 rounded-xl">
                <HelpCircle className="w-10 h-10 text-brand-yellow mb-4" />
                <h3 className="text-xl font-bold mb-2">{c.faqTitle}</h3>
                <p className="text-gray-300 text-sm mb-4">{c.faqDescription}</p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-brand-dark-blue rounded-full"
                  asChild
                >
                  <a href="/faq">{c.faqLink}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
