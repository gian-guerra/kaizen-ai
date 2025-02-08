import Link from "next/link"
import { Home, Brain, Goal, Dumbbell, Utensils, Moon } from "lucide-react"

const menuItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Goals", icon: Goal, href: "/goals"},
  { name: "Meditation", icon: Brain, href: "/meditation" },
  { name: "Workouts", icon: Dumbbell, href: "/workouts" },
  { name: "Nutrition", icon: Utensils, href: "/nutrition" },
  { name: "Sleep", icon: Moon, href: "/sleep" },
]

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col bg-gray-100 dark:bg-gray-800">
      <nav className="flex-1 space-y-2 px-2 py-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <item.icon className="h-6 w-6" />
            <span className="ml-3">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

