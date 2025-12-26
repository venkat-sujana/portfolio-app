import "./globals.css"

export const metadata = {
  title: "Venkataiah Embeti | Portfolio",
  description: "Lecturer & Full Stack Developer Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-800">
        {children}
      </body>
    </html>
  )
}
