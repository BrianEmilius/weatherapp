import { Ubuntu } from "next/font/google"

import './globals.css'
import Toolbar from "@/components/toolbar"

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "700"], display: "swap" })

export const metadata = {
  title: 'Weather App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"min-h-[100vh] bg-no-repeat flex flex-col justify-between " + ubuntu.className} style={{backgroundImage: "url(/background.svg)"}}>
        <main className="p-4">
          {children}
        </main>
        <Toolbar />
      </body>
    </html>
  )
}
