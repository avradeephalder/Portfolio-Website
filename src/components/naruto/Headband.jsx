import { cn } from "../../lib/utils"

export function Headband({ className, village = "leaf" }) {
  const symbols = {
    leaf: "🍃",
    sand: "⏳",
    cloud: "☁️",
    mist: "🌫️",
    stone: "🪨",
  }

  return (
    <div
      className={cn(
        "bg-secondary text-secondary-foreground px-6 py-2 rounded-sm border-2 border-foreground/20",
        className
      )}
    >
      <span className="text-2xl">{symbols[village]}</span>
    </div>
  )
}
