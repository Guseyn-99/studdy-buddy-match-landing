"use client"

import { Check } from "lucide-react"

const solutions = [
  "Подбор напарника по совместимости стилей обучения",
  "Синхронизация расписания для совместных занятий",
  "Взаимная мотивация и контроль дедлайнов",
  "Обмен материалами и совместное решение задач",
]

export function SolutionSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-500/5 to-transparent">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className="bg-gradient-to-br from-violet-500 to-blue-500 rounded-3xl p-16 text-center relative overflow-hidden order-2 lg:order-1"
            data-aos="fade-right"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 relative z-10">
              <Check className="w-14 h-14 text-white" />
            </div>
            <p className="text-2xl font-bold relative z-10">
              Учиться вместе — эффективнее
            </p>
          </div>

          <div className="order-1 lg:order-2" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
              Наше решение
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Studdy Buddy Match использует умный алгоритм для подбора 
              идеального учебного партнёра, который поможет вам достичь 
              ваших академических целей.
            </p>
            <ul className="space-y-4">
              {solutions.map((solution) => (
                <li
                  key={solution}
                  className="flex items-start gap-4 text-white/70"
                >
                  <span className="text-emerald-400 font-bold text-xl shrink-0">
                    ✓
                  </span>
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
