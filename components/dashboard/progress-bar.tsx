interface ProgressBarProps {
  value: number
  max: number
}

export function ProgressBar({ value, max }: ProgressBarProps) {
  const percentage = max > 0 ? (value / max) * 100 : 0
  return (
    <div className="w-full bg-zinc-700 rounded-full h-2.5">
      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
  )
}
