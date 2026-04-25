"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 bg-[#0F0F1A]/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="Studdy Buddy Match" 
            width={120} 
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>

        <a
          href="#survey"
          className="px-6 py-2.5 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/30"
        >
          Пройти опрос
        </a>
      </div>
    </header>
  )
}
