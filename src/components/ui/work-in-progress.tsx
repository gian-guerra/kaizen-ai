'use client'

import { Construction } from "lucide-react"
import { Button } from "@/components/ui/button"

import { ForwardRefExoticComponent } from "react"
import { useRouter } from "next/navigation"

interface WorkInProgressPageProps {
  title: string
}

export function WorkInProgressPage({ title }: WorkInProgressPageProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <Construction className="w-24 h-24 text-yellow-500 mb-8" />
      <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        We're working hard to bring you amazing features. Check back soon!
      </p>
      <div className="flex space-x-4">
        <Button variant="outline" onClick={() => router.back()}>
          Go Back
        </Button>
        <Button>Get Notified</Button>
      </div>
    </div>
  )
}

