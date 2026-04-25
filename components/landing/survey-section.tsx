"use client"

import { ArrowRight } from "lucide-react"

export function SurveySection() {
  return (
    <section id="survey" className="py-24">
      <div className="container mx-auto px-6">
        <div
          className="max-w-2xl mx-auto p-16 bg-gradient-to-br from-violet-500 to-blue-500 rounded-[2rem] text-center relative overflow-hidden"
          data-aos="zoom-in"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] animate-pulse" />
          
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative z-10">
            Помоги нам стать лучше!
          </h2>
          <p className="text-lg opacity-90 mb-8 relative z-10">
            Пройди короткий опрос и помоги создать идеальный сервис для студентов
          </p>
          
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-white text-violet-600 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/30 relative z-10"
          >
            Пройти опрос
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
