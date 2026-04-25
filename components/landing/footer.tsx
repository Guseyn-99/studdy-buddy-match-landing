"use client"

import { Mail, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-blue-500 rounded-xl flex items-center justify-center font-extrabold text-lg text-white">
              SB
            </div>
            <span className="font-bold text-xl text-white">
              Studdy Buddy Match
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-violet-500 hover:border-violet-500"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/studdybuddymatch"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-violet-500 hover:border-violet-500"
              aria-label="Telegram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
            <a
              href="mailto:contact@studdybuddy.com"
              className="w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-violet-500 hover:border-violet-500"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>


      </div>
    </footer>
  )
}
