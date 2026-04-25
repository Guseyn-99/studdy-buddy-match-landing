"use client"

import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSfd-XYeswRUIy95D0O0RK4J37BI45FtDCZ45nu95yFWbOs-qw/viewform"

  return (
    <section className="min-h-screen flex items-center justify-center text-center pt-20 relative px-6">
      <div className="max-w-4xl" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          <span className="block bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
            Не пропускай дедлайны.
          </span>
          <span className="block bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
            Найди учебного напарника
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Сервис подбора учебных партнёров на основе совместимости стилей обучения, расписания и целей
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/40 inline-flex items-center gap-2"
          >
            Пройти опрос
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-white/5 border border-white/15 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 backdrop-blur-md"
          >
            Пройти анкету
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/30 mx-auto" />
        </div>
      </div>
    </section>
  )
}
