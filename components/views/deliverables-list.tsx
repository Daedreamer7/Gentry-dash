import { mockData } from "@/lib/data"
import { InfoCard } from "@/components/dashboard/info-card"
import { SectionHeader } from "@/components/dashboard/section-header"
import { StatusBadge } from "@/components/dashboard/status-badge"

export function DeliverablesList() {
  const { proposal, invoice } = mockData
  return (
    <div>
      <SectionHeader title="Deliverables" subtitle="All project proposals, invoices, and contracts." />
      <div className="space-y-6">
        <InfoCard title="PROJECT PROPOSAL">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-zinc-200">{proposal.projectTitle}</p>
              <p className="text-xs text-zinc-500 font-mono">
                Prepared: {new Date(proposal.preparedDate).toLocaleDateString()}
              </p>
            </div>
            <StatusBadge status={proposal.status} />
          </div>
        </InfoCard>
        <InfoCard title="PROJECT INVOICE">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-zinc-200">{invoice.invoiceTitle}</p>
              <p className="text-xs text-zinc-500 font-mono">Due: {new Date(invoice.dueDate).toLocaleDateString()}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-mono text-zinc-200">
                {new Intl.NumberFormat("en-US", { style: "currency", currency: invoice.currency }).format(
                  invoice.grandTotal,
                )}
              </p>
              <StatusBadge status={invoice.status} />
            </div>
          </div>
        </InfoCard>
      </div>
    </div>
  )
}
