import SectionTitle from "../components/SectionTitle"

export default function Experience() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle title="Experience" />
        <div className="mt-6 border-l-2 pl-6">
          <p className="font-semibold">Lecturer</p>
          <p className="text-sm text-slate-600">
            Teaching vocational & technical subjects with real-world projects.
          </p>
        </div>
      </div>
    </section>
  )
}
