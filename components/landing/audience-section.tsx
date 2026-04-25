"use client"

import { GraduationCap, Rocket, BookOpen, Users } from "lucide-react"

const audiences = [
  {
    icon: GraduationCap,
    title: "Студенты 1-2 курса",
    description: "Адаптация к университету, поиск единомышленников и формирование учебных привычек",
  },
  {
    icon: Rocket,
    title: "Старшекурсники",
    description: "Подготовка к экзаменам, курсовые и дипломные проекты с поддержкой напарника",
  },
  {
    icon: BookOpen,
    title: "Преподаватели",
    description: "Возможность рекомендовать сервис студентам для повышения их вовлечённости",
  },
  {
    icon: Users,
    title: "Учебные группы",
    description: "Создание эффективных мини-групп для совместного освоения сложных дисциплин",
  },
]

export function AudienceSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-5 bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Для кого этот сервис?
        </h2>
        <p
          className="text-lg text-white/70 text-center max-w-xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Studdy Buddy Match подходит для разных категорий пользователей
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl transition-all duration-400 hover:-translate-y-2 hover:border-violet-500 relative overflow-hidden group flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
              <div className="w-12 h-12 min-w-[48px] bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                <audience.icon className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{audience.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
