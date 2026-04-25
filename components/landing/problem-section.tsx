"use client"

const problems = [
  "Сложно найти мотивацию учиться в одиночку",
  "Постоянно откладываешь важные задачи",
  "Не с кем обсудить сложный материал",
  "Чувствуешь изоляцию и отсутствие поддержки",
]

export function ProblemSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
              Знакомо? <br />
              <span className="text-white/60">Ты не одинок</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Многие студенты сталкиваются с одними и теми же трудностями. 
              Учёба в одиночку может быть демотивирующей и неэффективной.
            </p>
            <ul className="space-y-4">
              {problems.map((problem) => (
                <li
                  key={problem}
                  className="flex items-start gap-4 text-white/70"
                >
                  <span className="text-red-400 font-bold text-xl shrink-0">
                    ✗
                  </span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl text-center"
            data-aos="fade-left"
          >
            <div className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
              73%
            </div>
            <p className="text-xl text-white/70">
              студентов испытывают трудности с мотивацией при самостоятельном обучении
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
