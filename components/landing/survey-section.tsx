"use client"

export function SurveySection() {
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSfd-XYeswRUIy95D0O0RK4J37BI45FtDCZ45nu95yFWbOs-qw/viewform"

  return (
    <section id="survey" className="py-24 text-center px-6">
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-violet-500 to-blue-500 p-10 rounded-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          Помоги нам стать лучше!
        </h2>

        <p className="text-lg text-white/80 mb-10">
          Пройди короткий опрос и помоги создать идеальный сервис для студентов
        </p>

        <a
          href={formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-white text-violet-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
        >
          Пройти опрос →
        </a>
      </div>
    </section>
  )
}
