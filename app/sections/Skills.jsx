import { Code, Database, Toolbox } from "lucide-react"
import SectionTitle from "../components/SectionTitle"

export default function Skills() {
  return (
    <section className="py-20 bg-linear-to-br from-slate-50 via-white to-slate-50" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Skills" />
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <SkillCard
            icon={<Code className="w-12 h-12" />}
            title="Frontend"
            items={["HTML", "CSS", "Tailwind", "React","Bootstrap","MaterialUI", "Next.js"]}
            gradient="from-blue-500 to-indigo-600"
          />
          <SkillCard
            icon={<Database className="w-12 h-12" />}
            title="Backend"
            items={["Node.js","Django", "Express.js","MySql" ,"MongoDB"]}
            gradient="from-emerald-500 to-teal-600"
          />
          <SkillCard
            icon={<Toolbox className="w-12 h-12" />}
            title="Tools"
            items={["Git", "GitHub", "Vercel"," Postman", "Netlify"]}
            gradient="from-purple-500 to-pink-600"
          />
        </div>
      </div>
    </section>
  )
}

function SkillCard({ icon, title, items, gradient }) {
  return (
    <div className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
      
      {/* Decorative top-right accent */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-linear-to-r from-white/20 to-transparent rounded-full blur-xl"></div>
      
      <div className="relative z-10">
        <div className={`p-4 rounded-xl bg-linear-to-r ${gradient} shadow-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <div className="text-white drop-shadow-md">{icon}</div>
        </div>
        
        <h3 className="text-2xl font-bold text-transparent  mb-4 bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text  group-hover:from-slate-900 group-hover:to-indigo-700 transition-all duration-300">
          {title}
        </h3>
        
        <ul className="space-y-3 mb-8">
          {items.map((item, index) => (
            <li key={item} className="flex items-center text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-200">
              <div className="w-2 h-2 bg-linar-to-r from-slate-400 to-slate-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
              {item}
            </li>
          ))}
        </ul>
        
        <div className="w-full h-1 bg-linear-to-r from-transparent via-white/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  )
}
