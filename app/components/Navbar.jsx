"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Main gradient background with glassmorphism */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-800/95 to-indigo-900/95 backdrop-blur-xl"></div>
      
      {/* Subtle animated border glow */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 via-transparent to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      
      <nav className="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo with gradient text */}
        <Link 
          href="/" 
          className="group relative text-2xl font-black bg-linear-to-r from-white via-slate-100 to-indigo-100 bg-clip-text text-transparent drop-shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Venkataiah Embeti
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-indigo-500 rounded-full group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2 lg:gap-8">
          {navLinks.map((link, index) => (
            <NavLink 
              key={link.name} 
              {...link}
              delay={index * 50}
            />
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <div className="relative z-10">
            {open ? <X size={24} className="text-white drop-shadow-md" /> : <Menu size={24} className="text-white drop-shadow-md" />}
          </div>
          {/* Button glow */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-400/50 to-indigo-500/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </nav>

      {/* Mobile Menu - Glass panel slide */}
      {open && (
        <div className="md:hidden relative overflow-hidden">
          <div className="bg-white/5 backdrop-blur-2xl border-t border-white/20 shadow-2xl">
            <ul className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-xl font-semibold text-white/95 hover:text-white transition-all duration-300 py-3 px-4 rounded-2xl hover:bg-white/20 hover:translate-x-2 group relative overflow-hidden"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute inset-0 bg-linear-to-r from-blue-400/30 to-indigo-500/30 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ name, href, delay = 0 }) {
  return (
    <a
      href={href}
      className="group relative text-sm lg:text-base font-semibold px-4 py-2 rounded-xl text-white/90 hover:text-white transition-all duration-500 overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="relative z-10">{name}</span>
      
      {/* Glass pill background */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-100 group-hover:scale-110"></div>
      
      {/* Gradient sweep effect */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-400/50 via-indigo-500/50 to-purple-500/50 -skew-x-12 transform translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700"></div>
      
      {/* Bottom underline */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></div>
    </a>
  )
}
