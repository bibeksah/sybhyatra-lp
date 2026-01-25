"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bot, Users, ShieldCheck, Map, ArrowRight } from "lucide-react"
import { joinWaitlist, getWaitlistCount } from "./actions"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { StructuredData } from "@/components/structured-data"
import { useLanguage } from "@/contexts/LanguageContext"
import { HowItWorks, ForRiders, ForDrivers, SafetySection, DownloadSection } from "@/components/home"

// --- Content Dictionary with "Made for Nepal" theme ---
const content = {
  en: {
    madeInNepal: "Made in Nepal, for Nepal",
    comingSoon: "Coming Soon",
    headline: "Your Ride, Your Way. The Nepali Way.",
    subheadline:
      "Proudly built in Nepal, SubhYatra understands our roads and our people. Join the waitlist for a truly local ride-booking experience.",
    joinWaitlist: "Join the Waitlist",
    waitlistCount: "Nepalis are on the waitlist",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    featuresTitle: "Built for Our Community",
    features: [
      {
        icon: Map,
        title: "Understands Nepali Roads",
        description:
          "From bustling city streets to winding gallis, our navigation is optimized for Nepal's unique terrain.",
      },
      {
        icon: Bot,
        title: "AI-Powered Matching",
        description:
          "Our smart algorithm connects you with the perfect ride in seconds, ensuring efficiency and reliability.",
      },
      {
        icon: Users,
        title: "Dual Mode Functionality",
        description: "Effortlessly switch between being a passenger and a driver, empowering our local community.",
      },
      {
        icon: ShieldCheck,
        title: "Advanced Safety Features",
        description:
          "Your safety is our priority. We offer real-time tracking, emergency contacts, and verified local drivers.",
      },
    ],
    waitlistFormTitle: "Be a Part of the Journey!",
    waitlistFormSubtitle: "Enter your email or phone to get notified the moment we launch and support a homegrown app.",
    emailPlaceholder: "Enter your email or phone number",
    getNotified: "Get Notified",
    privacyDisclaimer: "We respect your privacy. No spam, unsubscribe anytime.",
    successMessage: "✅ धन्यवाद! You're on the list. We'll be in touch soon.",
    errorMessage: "⚠️ Please enter a valid email or phone number.",
    footerContact: "Contact Us",
    footerRights: "All Rights Reserved.",
    footerMadeWithLove: "Made with ❤️ in Nepal",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
  },
  ne: {
    madeInNepal: "नेपालमा निर्मित, नेपालको लागि",
    comingSoon: "चाँडै आउँदैछ",
    headline: "तपाईंको सवारी, तपाईंको तरिका। नेपाली तरिका।",
    subheadline:
      "गर्वका साथ नेपालमा निर्मित, शुभयात्राले हाम्रा सडक र हाम्रा मानिसहरूलाई बुझ्दछ। साँच्चै स्थानीय राइड-बुकिङ अनुभवको लागि प्रतीक्षा सूचीमा सामेल हुनुहोस्।",
    joinWaitlist: "प्रतीक्षा सूचीमा सामेल हुनुहोस्",
    waitlistCount: "नेपालीहरू प्रतीक्षा सूचीमा छन्",
    days: "दिन",
    hours: "घण्टा",
    minutes: "मिनेट",
    seconds: "सेकेन्ड",
    featuresTitle: "हाम्रो समुदायको लागि निर्मित",
    features: [
      {
        icon: Map,
        title: "नेपाली सडकहरू बुझ्दछ",
        description: "व्यस्त शहरका सडकदेखि घुमाउरो गल्लीसम्म, हाम्रो नेभिगेसन नेपालको अद्वितीय भू-भागको लागि अनुकूलित छ।",
      },
      {
        icon: Bot,
        title: "एआई-संचालित म्याचिङ",
        description: "हाम्रो स्मार्ट एल्गोरिदमले तपाईंलाई सेकेन्डमा उत्तम सवारीसँग जोड्छ, दक्षता र विश्वसनीयता सुनिश्चित गर्दछ।",
      },
      {
        icon: Users,
        title: "दोहोरो मोड कार्यक्षमता",
        description: "सहजै यात्रु र चालक बीच स्विच गर्नुहोस्, हाम्रो स्थानीय समुदायलाई सशक्त बनाउँदै।",
      },
      {
        icon: ShieldCheck,
        title: "उन्नत सुरक्षा सुविधाहरू",
        description:
          "तपाईंको सुरक्षा हाम्रो प्राथमिकता हो। हामी वास्तविक-समय ट्र्याकिङ, आपतकालीन सम्पर्कहरू, र प्रमाणित स्थानीय चालकहरू प्रस्ताव गर्दछौं।",
      },
    ],
    waitlistFormTitle: "यात्राको हिस्सा बन्नुहोस्!",
    waitlistFormSubtitle: "हामीले लन्च गर्ने बित्तिकै सूचना प्राप्त गर्न र स्वदेशी एपलाई समर्थन गर्न आफ्नो इमेल वा फोन प्रविष्ट गर्नुहोस्।",
    emailPlaceholder: "आफ्नो इमेल वा फोन नम्बर प्रविष्ट गर्नुहोस्",
    getNotified: "सूचना पाउनुहोस्",
    privacyDisclaimer: "हामी तपाईंको गोपनीयताको सम्मान गर्छौं। कुनै स्प्याम छैन, जुनसुकै बेला सदस्यता रद्द गर्नुहोस्।",
    successMessage: "✅ धन्यवाद! तपाईं सूचीमा हुनुहुन्छ। हामी चाँडै सम्पर्कमा रहनेछौं।",
    errorMessage: "⚠️ कृपया एक मान्य इमेल वा फोन नम्बर प्रविष्ट गर्नुहोस्।",
    footerContact: "हामीलाई सम्पर्क गर्नुहोस",
    footerRights: "सबै अधिकार सुरक्षित।",
    footerMadeWithLove: "नेपालमा ❤️ ले बनेको",
    terms: "सेवाका सर्तहरु",
    privacy: "गोपनीयता नीति",
  },
}

// --- Helper Components (same as before) ---
const CountdownCard = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center text-center w-20">
    <div className="relative w-full h-24 flex items-center justify-center">
      <div className="absolute inset-0 bg-white/10 rounded-xl"></div>
      <span className="text-5xl font-bold text-white tracking-wider tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="mt-3 text-sm font-semibold text-brand-yellow/80 uppercase tracking-widest">{label}</span>
  </div>
)

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
}: { icon: React.ElementType; title: string; description: string; className?: string }) => {
  const [ref, isInView] = useInView({ once: true, threshold: 0.2 })
  return (
    <div
      ref={ref}
      className={cn(
        "bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2",
        "opacity-0 translate-y-8",
        isInView && "opacity-100 translate-y-0",
        className,
      )}
    >
      <div className="flex justify-center items-center mb-5">
        <div className="bg-brand-yellow p-4 rounded-full shadow-md">
          <Icon className="h-8 w-8 text-brand-dark-blue" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-brand-dark-blue mb-3 text-center">{title}</h3>
      <p className="text-brand-gray text-center leading-relaxed">{description}</p>
    </div>
  )
}

export default function SubhYatraLandingPage() {
  const { language } = useLanguage()
  const [timeLeft, setTimeLeft] = useState<Record<string, number>>({})
  // Initialize with the base count for a good initial paint
  const [waitlistCount, setWaitlistCount] = useState(5182)
  const [contact, setContact] = useState("")
  const [formState, setFormState] = useState<{ status: "idle" | "loading" | "success" | "error"; message: string }>({
    status: "idle",
    message: "",
  })

  const c = content[language]

  const fetchWaitlistCount = async () => {
    const result = await getWaitlistCount()
    if (result.success && typeof result.count === "number") {
      setWaitlistCount(result.count)
    }
  }

  useEffect(() => {
    const launchDate = new Date("2026-02-10T00:00:00").getTime()
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate - now
      setTimeLeft(
        distance < 0
          ? { days: 0, hours: 0, minutes: 0, seconds: 0 }
          : {
              days: Math.floor(distance / (1000 * 60 * 60 * 24)),
              hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
              minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
              seconds: Math.floor((distance % (1000 * 60)) / 1000),
            },
      )
    }, 1000)

    // Fetch the initial waitlist count when the component mounts
    fetchWaitlistCount()

    return () => clearInterval(timer)
  }, [])


  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ status: "loading", message: "" })
    const result = await joinWaitlist(contact)
    if (result.success) {
      setFormState({ status: "success", message: result.message })
      setContact("")
      // Refetch the count to include the new user
      fetchWaitlistCount()
      setTimeout(() => setFormState({ status: "idle", message: "" }), 5000)
    } else {
      setFormState({ status: "error", message: result.message || c.errorMessage })
      setTimeout(() => setFormState({ status: "idle", message: "" }), 5000)
    }
  }

  return (
    <div className="bg-slate-50 text-brand-dark-blue font-sans antialiased">
      <StructuredData />
        <section className="relative bg-brand-dark-blue pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url('/hero-image.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-blue via-brand-dark-blue/80 to-transparent"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left animate-fade-in-up">
                <div className="inline-block bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {c.madeInNepal}
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-text-reveal bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {c.headline}
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">{c.subheadline}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Button
                    size="lg"
                    className="bg-brand-yellow text-brand-dark-blue hover:bg-white font-bold text-lg px-8 py-6 rounded-full shadow-lg animate-pulse-subtle"
                    asChild
                  >
                    <a href="#waitlist-form">
                      {c.joinWaitlist} <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 font-semibold">
                  <Users className="w-5 h-5 text-brand-yellow" />
                  <span className="font-bold text-white text-lg animate-number-flip" key={waitlistCount}>
                    {waitlistCount.toLocaleString()}
                  </span>
                  <span>{c.waitlistCount}</span>
                </div>
              </div>
              <div className="relative flex justify-center animate-fade-in-up [animation-delay:0.2s]">
                <div className="relative w-[280px] h-[420px] md:w-[320px] md:h-[480px] transition-transform duration-300 hover:scale-105 group">
                  <div className="absolute -inset-2 bg-white/10 rounded-3xl transform -rotate-6 group-hover:rotate-[-8deg] transition-transform duration-300"></div>
                  <Image
                    src="/Hero.webp"
                    alt="SubhYatra App Mockup"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl shadow-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            <div className="mt-20 md:mt-28">
              <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
                <CountdownCard value={timeLeft.days || 0} label={c.days} />
                <CountdownCard value={timeLeft.hours || 0} label={c.hours} />
                <CountdownCard value={timeLeft.minutes || 0} label={c.minutes} />
                <CountdownCard value={timeLeft.seconds || 0} label={c.seconds} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-blue">{c.featuresTitle}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {c.features.map((feature, index) => (
                <FeatureCard key={index} {...feature} className={`transition-delay-[${index * 100}ms]`} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorks language={language} />

        {/* For Riders Section */}
        <ForRiders language={language} />

        {/* For Drivers Section */}
        <ForDrivers language={language} />

        {/* Safety Section */}
        <SafetySection language={language} />

        {/* Download Section */}
        <DownloadSection language={language} />

        <section id="waitlist-form" className="py-20 md:py-28 bg-brand-dark-blue text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-yellow mb-4">{c.waitlistFormTitle}</h2>
              <p className="text-lg text-gray-300 mb-8">{c.waitlistFormSubtitle}</p>
              <form onSubmit={handleFormSubmit} className="relative">
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <Input
                    type="text"
                    placeholder={c.emailPlaceholder}
                    className="flex-grow text-lg p-6 bg-white/90 text-brand-dark-blue placeholder:text-gray-500 rounded-full border-2 border-transparent focus:border-brand-yellow focus:ring-brand-yellow"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                    disabled={formState.status === "loading" || formState.status === "success"}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-brand-yellow text-brand-dark-blue hover:bg-white font-bold text-lg p-6 rounded-full shadow-md transition-transform hover:scale-105"
                    disabled={formState.status === "loading" || formState.status === "success"}
                  >
                    {formState.status === "loading" ? "Submitting..." : c.getNotified}
                  </Button>
                </div>
                <p className="text-sm text-gray-400 mt-4">{c.privacyDisclaimer}</p>
                {formState.status !== "idle" && (
                  <p
                    className={cn(
                      "mt-4 font-semibold",
                      formState.status === "success" && "text-green-400",
                      formState.status === "error" && "text-red-400",
                    )}
                  >
                    {formState.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
    </div>
  )
}
