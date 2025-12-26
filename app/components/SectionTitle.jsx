"use client"
export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="relative mb-16 text-center md:text-left max-w-4xl mx-auto">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl blur-xl -z-10 animate-pulse"></div>
      
      {/* Decorative orbs */}
      <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-2xl opacity-30 animate-ping"></div>
      <div className="absolute -bottom-8 right-0 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="relative z-10">
        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-slate-500 font-medium mb-6 bg-gradient-to-r from-slate-400 via-slate-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-lg">
            {subtitle}
          </p>
        )}
        
        {/* Main Title with gradient text */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 bg-gradient-to-r from-slate-900 via-slate-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-2xl group">
          {title}
          
          {/* Animated highlight sweep */}
          <span className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-indigo-500/50 to-purple-500/30 -skew-x-12 blur-sm opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 -z-10"></span>
        </h2>
        
        {/* Multi-layered accent divider */}
        <div className="flex items-center justify-center md:justify-start gap-4">
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-full shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent -skew-x-12 transform -translate-x-full animate-slide"></div>
          </div>
          
          {/* Subtle glow orb */}
          <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-lg opacity-70"></div>
          
          <div className="w-12 h-1 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full shadow-sm"></div>
        </div>
        
        {/* Optional description */}
        {subtitle && (
          <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-light drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-slide {
          animation: slide 2s linear infinite;
        }
      `}</style>
    </div>
  )
}
