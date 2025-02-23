import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { DailyGoalTracker } from "@/components/daily-goal-tracker"

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4">
          <h1 className="mb-4 text-2xl font-bold">Today's Progress</h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <DailyGoalTracker title="Meditation" current={15} goal={20} unit="min" />
            <DailyGoalTracker title="Workout" current={45} goal={60} unit="min" />
            <DailyGoalTracker title="Steps" current={7500} goal={10000} unit="steps" />
            <DailyGoalTracker title="Water" current={6} goal={8} unit="glasses" />
          </div>
        </main>
      </div>
    </div>
  )
}

