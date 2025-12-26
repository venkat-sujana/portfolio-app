"use client"
export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 opacity-95"></div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 py-12">
        <div className="text-center">
          {/* Main content with glassmorphism card */}
          <div className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 px-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/20">
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
              {/* Copyright */}
              <div className="text-white/90 font-semibold text-xl md:text-2xl bg-gradient-to-r from-white via-slate-100 to-indigo-100 bg-clip-text text-transparent drop-shadow-lg">
                © {new Date().getFullYear()} Venkataiah Embeti
              </div>
              
              {/* Quote with accent */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl blur-sm opacity-50"></div>
                <p className="text-lg font-light italic text-white/95 drop-shadow-md bg-gradient-to-r from-white/50 to-slate-200 bg-clip-text text-transparent px-4 py-2">
                  "Learning never stops"
                </p>
              </div>
            </div>
            
            {/* Subtle divider */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-8"></div>
            
            {/* Tech stack badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium text-white/90 border border-white/30 hover:bg-white/30 transition-all duration-300">
                Next.js 16+
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium text-white/90 border border-white/30 hover:bg-white/30 transition-all duration-300">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium text-white/90 border border-white/30 hover:bg-white/30 transition-all duration-300">
                Vercel
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
