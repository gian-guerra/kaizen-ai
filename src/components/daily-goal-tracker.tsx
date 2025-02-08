import { Circle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DailyGoalTrackerProps {
  title: string
  current: number
  goal: number
  unit: string
}

export function DailyGoalTracker({ title, current, goal, unit }: DailyGoalTrackerProps) {
  const percentage = Math.min((current / goal) * 100, 100)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Circle className={`h-4 w-4 fill-current ${percentage === 100 ? "text-green-500" : "text-gray-300"}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {current} {unit}
        </div>
        <p className="text-xs text-muted-foreground">
          Goal: {goal} {unit}
        </p>
        <div className="mt-4 h-2 w-full bg-gray-200 dark:bg-gray-700">
          <div className="h-2 bg-green-500" style={{ width: `${percentage}%` }} />
        </div>
      </CardContent>
    </Card>
  )
}

