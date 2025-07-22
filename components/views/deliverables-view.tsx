import { cabinetGuruData } from "@/lib/data"
import { InfoCard } from "@/components/dashboard/info-card"
import { SectionHeader } from "@/components/dashboard/section-header"
import { StatusBadge } from "@/components/dashboard/status-badge"
import { formatCurrency } from "@/lib/utils"
import { Milestone } from "lucide-react"

const PortableTextRenderer = ({ blocks }: { blocks: any[] }) => {
  return (
    <div className="space-y-4 text-zinc-300 text-sm">
      {blocks.map((block, index) => {
        // Handle nested arrays of blocks by calling the component recursively.
        if (Array.isArray(block)) {
          return <PortableTextRenderer key={index} blocks={block} />
        }

        // Add a guard clause for any other malformed or non-block elements.
        if (!block || !block.children || !Array.isArray(block.children)) {
          return null
        }

        const text = block.children.map((span: any) => span.text).join("")
        switch (block.style) {
          case "h2":
            return (
              <h2 key={index} className="text-xl font-bold text-zinc-100 pt-4">
                {text}
              </h2>
            )
          case "h3":
            return (
              <h3 key={index} className="text-lg font-bold text-zinc-200 pt-2">
                {text}
              </h3>
            )
          case "normal":
            if (block.listItem === "bullet") {
              return (
                <p key={index} className="pl-6 -indent-6">
                  {text}
                </p>
              )
            }
            return <p key={index}>{text}</p>
          default:
            return <p key={index}>{text}</p>
        }
      })}
    </div>
  )
}

const TimelineRenderer = ({ timeline }: { timeline: any }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-zinc-100 pt-4 mb-4">{timeline.title}</h2>
      <div className="relative border-l-2 border-zinc-700 pl-8 space-y-10">
        {timeline.phases.map((phase: any, index: number) => (
          <div key={index} className="relative">
            <div className="absolute -left-[38px] top-1 bg-zinc-700 rounded-full p-2">
              <Milestone className="w-5 h-5 text-zinc-300" />
            </div>
            <p className="font-mono text-xs text-zinc-500">
              {new Date(phase.startDate).toLocaleDateString()} - {new Date(phase.endDate).toLocaleDateString()}
            </p>
            <h3 className="text-lg font-bold text-zinc-200 mt-1">{phase.phaseName}</h3>
            <p className="text-sm text-zinc-400">{phase.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {phase.milestones.map((milestone: string) => (
                <span key={milestone} className="text-xs bg-zinc-700 text-zinc-300 px-2 py-1 rounded-full">
                  {milestone}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const InvoiceRenderer = ({ invoiceBlock }: { invoiceBlock: any }) => {
  return (
    <div className="text-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-zinc-700 text-zinc-500 font-mono text-xs">
              <th className="p-2">DESCRIPTION</th>
              <th className="p-2 text-right">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {invoiceBlock.items.map((item: any, index: number) => (
              <tr key={index} className="border-b border-zinc-800">
                <td className="p-2 text-zinc-300">{item.description}</td>
                <td className="p-2 text-right font-mono text-zinc-200">{formatCurrency(item.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <div className="w-full max-w-xs space-y-2 text-sm">
          <div className="flex justify-between text-zinc-400">
            <span>Subtotal</span>
            <span className="font-mono">{formatCurrency(invoiceBlock.subtotal)}</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>Tax (5%)</span>
            <span className="font-mono">{formatCurrency(invoiceBlock.tax)}</span>
          </div>
          <div className="flex justify-between text-zinc-100 font-bold text-base border-t border-zinc-700 pt-2">
            <span>Grand Total</span>
            <span className="font-mono">{formatCurrency(invoiceBlock.grandTotal)}</span>
          </div>
        </div>
      </div>
      <div className="mt-6 text-xs text-zinc-500 border-t border-zinc-800 pt-4">
        <p>
          <strong>Payment Terms:</strong> {invoiceBlock.paymentTerms}
        </p>
        <p>
          <strong>Notes:</strong> {invoiceBlock.notes}
        </p>
      </div>
    </div>
  )
}

const PaymentInstructions = ({ instructions }: { instructions: any }) => (
  <div className="mt-6 border-t border-zinc-800 pt-6">
    <h4 className="text-base font-bold text-zinc-200 mb-2">Payment Instructions</h4>
    <div className="text-sm text-zinc-400 space-y-1">
      <p>
        <strong>Bank:</strong> {instructions.bankName}
      </p>
      <p>
        <strong>Account Name:</strong> {instructions.accountName}
      </p>
      <p>
        <strong>Account Number:</strong> {instructions.accountNumber}
      </p>
      <p>
        <strong>Routing Number:</strong> {instructions.routingNumber}
      </p>
      <p className="text-xs text-zinc-500 pt-2">{instructions.notes}</p>
    </div>
  </div>
)

export function DeliverablesView() {
  const { proposal, invoice } = cabinetGuruData

  const proposalContent = proposal.sections.filter((s) => s._type !== "timelineBlock" && s._type !== "coverBlock")
  const timelineContent = proposal.sections.find((s) => s._type === "timelineBlock")
  const invoiceContent = invoice.sections.find((s) => s._type === "invoiceBlock")
  const paymentContent = invoice.sections.find((s) => s._type === "paymentInstructionsBlock")

  return (
    <div>
      <SectionHeader title="Deliverables" subtitle="Project Proposal & Invoice for Cabinet Guru" />
      <div className="space-y-8">
        <InfoCard title={`PROPOSAL: ${proposal.projectTitle}`}>
          <div className="flex justify-between items-center mb-6">
            <p className="text-xs text-zinc-400 font-mono">
              Version: {proposal.version} | Prepared: {new Date(proposal.preparedDate).toLocaleDateString()}
            </p>
            <StatusBadge status={proposal.status} />
          </div>
          <PortableTextRenderer blocks={proposalContent} />
          {timelineContent && <TimelineRenderer timeline={timelineContent} />}
        </InfoCard>

        <InfoCard title={`INVOICE: ${invoice.invoiceTitle}`}>
          <div className="flex justify-between items-center mb-6">
            <p className="text-xs text-zinc-400 font-mono">
              Due Date: {new Date(invoice.dueDate).toLocaleDateString()}
            </p>
            <StatusBadge status={invoice.status} />
          </div>
          {invoiceContent && <InvoiceRenderer invoiceBlock={invoiceContent} />}
          {paymentContent && <PaymentInstructions instructions={paymentContent} />}
        </InfoCard>
      </div>
    </div>
  )
}
