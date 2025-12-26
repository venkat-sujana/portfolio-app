"use client"
import { useState } from "react"
import SectionTitle from "../components/SectionTitle"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  return (
    <section className="py-20 bg-slate-100" id="contact">
      <div className="max-w-xl mx-auto px-6">
        <SectionTitle title="Contact Me" />

        <form className="space-y-4 mt-6">
          <input className="w-full p-3 rounded" placeholder="Name" />
          <input className="w-full p-3 rounded" placeholder="Email" />
          <textarea className="w-full p-3 rounded" placeholder="Message" />
          <button className="w-full bg-primary text-white py-3 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
