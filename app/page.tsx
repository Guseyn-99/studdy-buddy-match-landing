"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { AboutSection } from "@/components/landing/about-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { AudienceSection } from "@/components/landing/audience-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { SurveySection } from "@/components/landing/survey-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-500/15 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />
      </div>

      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProblemSection />
        <SolutionSection />
        <AudienceSection />
        <FeaturesSection />
        <SurveySection />
      </main>
      <Footer />
    </div>
  )
}
