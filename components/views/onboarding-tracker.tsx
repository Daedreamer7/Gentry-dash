import { cabinetGuruData } from "@/lib/data"
import { InfoCard } from "@/components/dashboard/info-card"
import { SectionHeader } from "@/components/dashboard/section-header"
import { StatusBadge } from "@/components/dashboard/status-badge"

export function OnboardingTracker() {
  const { tasks } = cabinetGuruData.businessOnboarding
  return (
    <div>
      <SectionHeader title="Business Onboarding" subtitle="Live tracking of all business setup milestones." />
      <InfoCard title="SETUP TASKS">
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.taskName}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 bg-zinc-800/50 rounded-md"
            >
              <p className="text-zinc-200">{task.taskName}</p>
              <div className="mt-2 sm:mt-0">
                <StatusBadge status={task.status} />
              </div>
            </div>
          ))}
        </div>
      </InfoCard>
    </div>
  )
}
