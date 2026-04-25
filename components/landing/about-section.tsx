"use client"

import { Lightbulb, Users, Target } from "lucide-react"

const aboutCards = [
  {
    icon: Lightbulb,
    title: "Что это?",
    description:
      "Инновационный сервис для подбора учебных партнёров, который анализирует ваш стиль обучения и находит идеально совместимых напарников.",
  },
  {
    icon: Users,
    title: "Для кого?",
    description:
      "Для студентов всех курсов, которые хотят повысить свою продуктивность, найти поддержку и учиться эффективнее вместе.",
  },
  {
    icon: Target,
    title: "Какую задачу решает?",
    description:
      "Помогает справиться с прокрастинацией, найти мотивацию и построить систему взаимной поддержки в учёбе.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="pt-32 pb-24 bg-gradient-to-b from-transparent to-violet-500/5">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-5 bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          О проекте
        </h2>
        <p
          className="text-lg text-white/70 text-center max-w-xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Узнайте, как Studdy Buddy Match может изменить вашу учёбу
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <div
              key={card.title}
              className="p-10 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500/20 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <card.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-white/70 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
