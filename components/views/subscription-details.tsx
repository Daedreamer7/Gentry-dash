import { cabinetGuruData } from "@/lib/data"
import { InfoCard } from "@/components/dashboard/info-card"
import { SectionHeader } from "@/components/dashboard/section-header"
import { StatusBadge } from "@/components/dashboard/status-badge"
import { CheckCircle } from "lucide-react"
import { formatCurrency } from "@/lib/utils"

export function SubscriptionDetails() {
  const { subscription } = cabinetGuruData
  return (
    <div>
      <SectionHeader title="Subscription & Billing" subtitle="Details of the active recurring plan." />
      <InfoCard title="PLAN DETAILS">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-4">
            <p className="text-2xl font-bold text-zinc-100">{subscription.planName}</p>
            <StatusBadge status={subscription.status} />
            <div>
              <p className="text-3xl font-mono text-zinc-100">
                {formatCurrency(subscription.monthlyFee)}
                <span className="text-base text-zinc-500">/mo</span>
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Activates on {new Date(subscription.renewalDate).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-sm font-bold text-zinc-400 mb-3">INCLUDED FEATURES</h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              {subscription.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InfoCard>
    </div>
  )
}
