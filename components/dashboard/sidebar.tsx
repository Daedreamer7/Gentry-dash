"use client"
import { Users, ClipboardCheck, FileText, CreditCard, LayoutDashboard, Briefcase, Presentation } from "lucide-react"
import { cn } from "@/lib/utils"
import { SignatureBlock } from "./signature-block"

interface SidebarProps {
  activeView: string
  setActiveView: (view: string) => void
}

export function Sidebar({ activeView, setActiveView }: SidebarProps) {
  const menuItems = [
    { id: "overview", label: "Dashboard", icon: LayoutDashboard },
    { id: "presentation", label: "Presentation Kit", icon: Presentation },
    { id: "deliverables", label: "Deliverables", icon: FileText },
    { id: "onboarding", label: "Onboarding", icon: ClipboardCheck },
    { id: "team", label: "Team", icon: Users },
    { id: "subscription", label: "Subscription", icon: CreditCard },
  ]

  return (
    <aside className="w-full md:w-72 bg-black/20 p-6 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col shrink-0">
      <div className="flex items-center space-x-3 mb-8">
        <Briefcase className="w-8 h-8 text-zinc-200" />
        <h1 className="font-mono text-xl tracking-[0.2em] text-zinc-200">C O N C E P T S</h1>
      </div>
      <nav className="flex flex-col space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={cn(
              "flex items-center space-x-3 p-3 rounded-lg text-left text-sm transition-colors",
              activeView === item.id ? "bg-zinc-800 text-white" : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white",
            )}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto hidden md:block pt-8">
        <SignatureBlock />
      </div>
    </aside>
  )
}
