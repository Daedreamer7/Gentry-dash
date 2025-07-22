import { cabinetGuruData } from "@/lib/data"
import { InfoCard } from "@/components/dashboard/info-card"
import { SectionHeader } from "@/components/dashboard/section-header"
import { StatusBadge } from "@/components/dashboard/status-badge"
import { ProgressBar } from "@/components/dashboard/progress-bar"

export function DashboardOverview() {
  const { clientCompany, businessOnboarding, subscription } = cabinetGuruData
  const completedTasks = businessOnboarding.tasks.filter((t) => t.status === "completed").length
  const totalTasks = businessOnboarding.tasks.length

  return (
    <div>
      <SectionHeader title={clientCompany.companyName} subtitle="Client Business Overview" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <InfoCard title="COMPANY DETAILS" className="lg:col-span-2">
          <div className="space-y-3 text-sm text-zinc-300">
            <p>
              <span className="text-zinc-500 w-24 inline-block">Industry:</span> {clientCompany.industry}
            </p>
            <p>
              <span className="text-zinc-500 w-24 inline-block">Address:</span> {clientCompany.address}
            </p>
            <p>
              <span className="text-zinc-500 w-24 inline-block">UUID:</span>{" "}
              <span className="font-mono">{clientCompany.uuid}</span>
            </p>
          </div>
        </InfoCard>
        <InfoCard title="SUBSCRIPTION">
          <div className="space-y-2">
            <p className="text-lg font-bold text-zinc-100">{subscription.planName}</p>
            <StatusBadge status={subscription.status} />
            <p className="text-xs text-zinc-400 pt-2">
              Activates on {new Date(subscription.renewalDate).toLocaleDateString()}
            </p>
          </div>
        </InfoCard>
        <InfoCard title="ONBOARDING PROGRESS" className="lg:col-span-3">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <p className="text-zinc-300">
                {completedTasks} of {totalTasks} tasks completed
              </p>
              <p className="font-mono text-zinc-400">{((completedTasks / totalTasks) * 100).toFixed(0)}%</p>
            </div>
            <ProgressBar value={completedTasks} max={totalTasks} />
          </div>
        </InfoCard>
      </div>
    </div>
  )
}
