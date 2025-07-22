import type React from "react"
import { cn } from "@/lib/utils"

interface InfoCardProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function InfoCard({ title, children, className }: InfoCardProps) {
  return (
    <div className={cn("bg-zinc-900/50 border border-zinc-800 rounded-lg", className)}>
      <h3 className="font-mono text-sm tracking-[0.2em] text-zinc-400 p-6 border-b border-zinc-800">{title}</h3>
      <div className="p-6">{children}</div>
    </div>
  )
}
