import SectionTitle from "../components/SectionTitle";


export default function About() {
  return (
    <section className="py-20 bg-slate-100" id="about">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <SectionTitle title="About Me" />
          <p className="mt-4">
            I am a Lecturer and Full Stack Developer specialized in building scalable educational platforms and admin dashboards.
          </p>
        </div>

        <div className="space-y-4">
          {["Next.js", "ReactJs", "Tailwind CSS","Bootstarp","MaterialUI", "MongoDB","My Sql","Node.js","Express.js","Phython(Django ) ","NextAuth"].map(skill => (
            <div key={skill} className="bg-white p-4 rounded shadow">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
