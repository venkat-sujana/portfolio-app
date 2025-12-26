import SectionTitle from "../components/SectionTitle"

const projects = [
  { 
    name: "OSRA App", 
    tech: "Next.js, MongoDB", 
    desc: "Student Result & Attendance System",
    gradient: "from-blue-500 to-indigo-600",
    icon: "📊"
  },
  { 
    name: "Question Paper Generator", 
    tech: "React, Tailwind", 
    desc: "Auto paper generation tool",
    gradient: "from-emerald-500 to-teal-600",
    icon: "📄"
  },
  { 
    name: "Smart Education Portal", 
    tech: "Next.js", 
    desc: "Digital learning platform",
    gradient: "from-purple-500 to-pink-600",
    icon: "🎓"
  },
]

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Projects" />
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} {...project} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ name, tech, desc, gradient, icon, delay = 0 }) {
  return (
    <div 
      className="group relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:scale-[1.03] overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Dynamic gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      {/* Top accent orb */}
      <div className={`absolute -top-4 -right-4 w-24 h-24 ${gradient} rounded-full blur-2xl opacity-30 group-hover:opacity-50 -z-10`}></div>
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon header */}
        <div className={`w-16 h-16 ${gradient} rounded-2xl flex items-center justify-center text-2xl shadow-xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
          <span>{icon}</span>
        </div>
        
        {/* Project title */}
        <h3 className="text-2xl font-bold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-500 line-clamp-2">
          {name}
        </h3>
        
        {/* Description */}
        <p className="text-slate-600 leading-relaxed mb-6 flex-1 group-hover:text-slate-800 transition-colors duration-300 line-clamp-3">
          {desc}
        </p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.split(', ').map((tag) => (
            <span 
              key={tag}
              className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${gradient} text-white shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Bottom glow accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mx-2 rounded-t-full"></div>
      </div>
    </div>
  )
}
