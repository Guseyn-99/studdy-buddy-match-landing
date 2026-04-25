"use client"

export function SurveySection() {
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSfd-XYeswRUIy95D0O0RK4J37BI45FtDCZ45nu95yFWbOs-qw/viewform"

  return (
    <section id="survey" className="py-24 text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Готов начать?
        </h2>

        <p className="text-lg text-white/70 mb-10">
          Пройди короткий опрос и мы подберём тебе идеального учебного напарника
        </p>

        <a
          href={formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/40 inline-flex items-center gap-2"
        >
          Пройти опрос
        </a>
      </div>
    </section>
  )
}
