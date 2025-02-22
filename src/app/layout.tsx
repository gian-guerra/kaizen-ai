import "@/app/globals.css"
import AuthHandler from "@/components/auth-handler"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Wellness Dashboard",
  description: "Track your daily wellness activities and progress",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthHandler />
        {children}
      </body>
    </html>
  )
}

