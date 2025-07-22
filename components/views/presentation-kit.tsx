import { SectionHeader } from "@/components/dashboard/section-header"
import { InfoCard } from "@/components/dashboard/info-card"
import { PresentationViewer } from "@/components/presentation/presentation-viewer"
import { Button } from "@/components/ui/button"
import { Download, Eye, FileText, Presentation } from "lucide-react"

export function PresentationKit() {
  const kitItems = [
    {
      title: "Client Presentation",
      description: "Interactive slide deck with project overview and timeline",
      icon: Presentation,
      action: "View Presentation",
    },
    {
      title: "Project Proposal",
      description: "Detailed scope of work and deliverables document",
      icon: FileText,
      action: "Download PDF",
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand kit with logos, colors, and typography",
      icon: Eye,
      action: "View Guidelines",
    },
    {
      title: "Technical Specifications",
      description: "Infrastructure details and technical documentation",
      icon: Download,
      action: "Download Specs",
    },
  ]

  return (
    <div>
      <SectionHeader
        title="Presentation Kit"
        subtitle="Complete client handoff materials and interactive presentation"
      />

      <div className="space-y-8">
        {/* Kit Overview */}
        <InfoCard title="HANDOFF MATERIALS">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {kitItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-zinc-800/30 rounded-lg">
                <div className="bg-zinc-700 p-2 rounded-lg">
                  <item.icon className="w-5 h-5 text-zinc-300" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-zinc-200 mb-1">{item.title}</h4>
                  <p className="text-sm text-zinc-400 mb-3">{item.description}</p>
                  <Button variant="outline" size="sm" className="text-xs bg-transparent">
                    {item.action}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </InfoCard>

        {/* Interactive Presentation */}
        <InfoCard title="INTERACTIVE PRESENTATION" className="p-0 overflow-hidden">
          <div className="h-[600px]">
            <PresentationViewer />
          </div>
        </InfoCard>

        {/* Delivery Notes */}
        <InfoCard title="DELIVERY NOTES">
          <div className="space-y-4 text-sm text-zinc-300">
            <div>
              <h4 className="font-medium text-zinc-200 mb-2">Presentation Guidelines</h4>
              <ul className="space-y-1 text-zinc-400 list-disc list-inside">
                <li>Use the interactive presentation for client meetings and reviews</li>
                <li>All materials are branded and ready for client delivery</li>
                <li>PDF versions available for offline sharing</li>
                <li>Presentation includes auto-advance feature for unattended display</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-200 mb-2">Next Steps</h4>
              <ul className="space-y-1 text-zinc-400 list-disc list-inside">
                <li>Schedule client presentation meeting</li>
                <li>Prepare any custom modifications based on client feedback</li>
                <li>Coordinate with development team for project kickoff</li>
                <li>Set up project management and communication channels</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </div>
    </div>
  )
}
