import type React from "react"
import { CheckCircle, Loader, Circle, ChevronRight, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  status: string
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusMap: { [key: string]: { text: string; icon: React.ElementType; color: string } } = {
    completed: { text: "Completed", icon: CheckCircle, color: "text-green-400" },
    in_progress: { text: "In Progress", icon: Loader, color: "text-blue-400 animate-spin" },
    not_started: { text: "Not Started", icon: Circle, color: "text-zinc-500" },
    active: { text: "Active", icon: CheckCircle, color: "text-green-400" },
    sent: { text: "Sent", icon: ChevronRight, color: "text-yellow-400" },
    Accepted: { text: "Accepted", icon: CheckCircle, color: "text-green-400" },
    pending: { text: "Pending", icon: AlertCircle, color: "text-orange-400" },
  }
  const {
    text,
    icon: Icon,
    color,
  } = statusMap[status.toLowerCase()] || { text: status, icon: Circle, color: "text-zinc-400" }
  return (
    <span className={cn("flex items-center text-sm font-mono", color)}>
      <Icon className="w-4 h-4 mr-2" />
      {text}
    </span>
  )
}
