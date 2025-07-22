interface SectionHeaderProps {
  title: string
  subtitle: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-mono tracking-wider text-zinc-200">{title}</h2>
      <p className="text-zinc-500 mt-1">{subtitle}</p>
    </div>
  )
}
