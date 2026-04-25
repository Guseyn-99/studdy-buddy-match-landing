"use client"

import { Brain, Calendar, Bell, MessageSquare, BarChart3, Shield } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Умный подбор",
    description: "Алгоритм анализирует стили обучения, интересы и цели для идеального мэтча",
  },
  {
    icon: Calendar,
    title: "Синхронизация расписания",
    description: "Автоматический поиск пересечений в расписании для совместных занятий",
  },
  {
    icon: Bell,
    title: "Напоминания о дедлайнах",
    description: "Совместный контроль сроков — ваш напарник тоже получит уведомление",
  },
  {
    icon: MessageSquare,
    title: "Встроенный чат",
    description: "Общайтесь с напарником прямо в приложении без лишних мессенджеров",
  },
  {
    icon: BarChart3,
    title: "Трекинг прогресса",
    description: "Отслеживайте свои достижения и мотивируйте друг друга статистикой",
  },
  {
    icon: Shield,
    title: "Приватность",
    description: "Полный контроль над тем, какую информацию о себе вы показываете",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-5 bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Ключевые возможности
        </h2>
        <p
          className="text-lg text-white/70 text-center max-w-xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Всё необходимое для эффективной совместной учёбы
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl flex gap-5 transition-all duration-300 hover:translate-x-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="w-14 h-14 min-w-[56px] bg-gradient-to-br from-violet-500 to-blue-500 rounded-xl flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
