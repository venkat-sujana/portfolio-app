"use client"
import { motion } from "framer-motion"
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-white to-indigo-50">
      {/* Layered gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5"></div>
      <div className="absolute inset-0 bg-linear-to-br from-emerald-400/3 to-teal-400/3 blur-xl"></div>
      
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-linear-to-br from-blue-400/20 to-indigo-500/20 rounded-3xl rotate-12 animate-float1"></div>
      <div className="absolute -top-24 right-20 w-24 h-24 bg-linear-to-br from-emerald-400/20 to-teal-500/20 rounded-2xl -rotate-6 animate-float2"></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg--to-br from-purple-400/20 to-pink-500/20 rounded-full animate-pulse delay-1000"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Hero avatar with glassmorphism */}
        <motion.div
          initial={{ scale: 0.8, rotate: 10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-12 relative group overflow-hidden rounded-3xl shadow-2xl"
        >
          <div className="absolute inset-0 bg-linear-to-br from-slate-100/50 to-indigo-100/50 backdrop-blur-xl border border-white/50 rounded-3xl group-hover:scale-110 transition-all duration-500"></div>
          <div className="absolute inset-2 bg-linear-to-br from-white via-slate-50 to-indigo-50 rounded-2xl shadow-xl flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-linear-to-br from-orange-500 via-red-500 to-orange-600 rounded-2xl shadow-2xl flex items-center justify-center text-3xl md:text-4xl lg:text-5xl font-black drop-shadow-xl animate-pulse-slow">
              VE
            </div>
          </div>
        </motion.div>

        {/* Name with animated gradient text */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 bg-linear-to-r from-slate-900 via-slate-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-2xl relative overflow-hidden"
        >
          Venkataiah Embeti
          <div className="absolute inset-0 bg-linear-to-r from-blue-400/30 via-indigo-500/40 to-purple-500/30 -skew-x-6 blur-sm opacity-60 animate-shimmer -z-10"></div>
        </motion.h1>

        {/* Profession badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex items-center px-6 py-3 mb-8 bg-white/70 backdrop-blur-xl border border-slate-200/50 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white/90 transition-all duration-400 font-semibold text-xl md:text-2xl text-slate-800 drop-shadow-lg"
        >
          <div className="w-2 h-2 bg-linear-to-b from-emerald-500 to-teal-500 rounded-full mr-3 animate-ping"></div>
          Lecturer & Full Stack Developer
        </motion.div>

        {/* Description with highlight */}
        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light drop-shadow-md"
        >
          Passionate about building <span className="bg-linear-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent font-semibold px-1 rounded-lg shadow-md">educational</span> and admin web applications using modern technologies.
        </motion.p>

        {/* Glassmorphism CTA buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <motion.a 
            href="#projects"
            className="group relative px-10 py-5 lg:px-12 lg:py-6 bg-linear-to-r from-blue-500 via-indigo-600 to-purple-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] hover:from-blue-600 hover:via-indigo-700 hover:to-purple-700 transition-all duration-500 font-semibold text-lg lg:text-xl overflow-hidden backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-white/20 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </motion.a>
          
          <motion.a 
            href="#contact"
            className="group px-10 py-5 lg:px-12 lg:py-6 bg-white/80  border-2 border-slate-200/50 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white hover:border-slate-300 hover:scale-[1.02] transition-all duration-500 font-semibold text-lg lg:text-xl text-slate-800 hover:text-slate-900 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me →
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-slate-300/50 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-4 bg-linear-to-b from-slate-600 to-transparent rounded-full animate-bounce-slow"></div>
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(15deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-12px) rotate(-9deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float1 { animation: float1 7s ease-in-out infinite; }
        .animate-float2 { animation: float2 8s ease-in-out infinite reverse; }
        .animate-pulse-slow { animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-bounce-slow { animation: bounce 2s infinite; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  )
}
