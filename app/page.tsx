"use client"

import type React from "react"
import { useState } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { DashboardOverview } from "@/components/views/overview"
import { TeamManagement } from "@/components/views/team-management"
import { OnboardingTracker } from "@/components/views/onboarding-tracker"
import { DeliverablesView } from "@/components/views/deliverables-view"
import { SubscriptionDetails } from "@/components/views/subscription-details"
import { CheckCircle, Loader, Circle, ChevronRight } from "lucide-react" // Importing the required icons
import { cn } from "@/lib/utils" // Assuming cn is a utility function for class names
import { PresentationKit } from "@/components/views/presentation-kit"

// --- MOCK DATA (Based on your provided structure) ---
const mockData = {
  keyholderCompany: {
    _type: "keyholderCompany",
    companyName: "Concepts On Concepts",
    uuid: "KEYHOLDER-001",
  },
  clientCompany: {
    _type: "clientCompany",
    companyName: "Pioneer Brands LLC",
    uuid: "CLIENT-002",
    industry: "E-commerce",
    address: "123 Market St, San Francisco, CA",
  },
  adminClient: {
    _type: "adminClient",
    name: "Jane Doe",
    email: "jane.doe@pioneerbrands.com",
    phone: "+1 555 123 4567",
    role: "Admin",
    uuid: "ADMIN-002",
  },
  userClients: [
    {
      _type: "userClient",
      name: "John Smith",
      email: "john.smith@pioneerbrands.com",
      role: "Manager",
      uuid: "USER-005",
    },
    {
      _type: "userClient",
      name: "Lisa Ray",
      email: "lisa.ray@pioneerbrands.com",
      role: "Contributor",
      uuid: "USER-006",
    },
  ],
  businessOnboarding: {
    _type: "businessOnboarding",
    uuid: "ONBOARD-1002",
    tasks: [
      { taskName: "EIN Registration", status: "completed", completedDate: "2024-07-01" },
      { taskName: "Domain Purchase and Configuration", status: "completed", completedDate: "2024-07-02" },
      { taskName: "Business Email Setup", status: "in_progress", completedDate: null },
      { taskName: "Website Build", status: "not_started", completedDate: null },
    ],
  },
  proposal: {
    _type: "projectProposal",
    projectTitle: "Pioneer Brands Full Business Setup & Launch Plan",
    uuid: "PROPOSAL-1002",
    preparedDate: "2024-07-01T00:00:00Z",
    status: "Accepted",
  },
  invoice: {
    _type: "projectInvoice",
    invoiceTitle: "Full Business Setup Invoice",
    uuid: "INVOICE-1002",
    dueDate: "2024-07-15T00:00:00Z",
    status: "Sent",
    grandTotal: 9765,
    currency: "USD",
  },
  subscription: {
    _type: "subscription",
    planName: "Business Essentials",
    status: "active",
    renewalDate: "2025-07-01",
    monthlyFee: 299,
    features: ["Business Email Hosting", "Website Maintenance", "Priority Support", "Quarterly Strategy Reviews"],
  },
}

// --- UI COMPONENTS ---

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-mono tracking-wider text-zinc-200">{title}</h2>
    <p className="text-zinc-500 mt-1">{subtitle}</p>
  </div>
)

const InfoCard = ({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) => (
  <div className={cn("bg-zinc-900/50 border border-zinc-800 rounded-lg p-6", className)}>
    <h3 className="font-mono text-sm tracking-[0.2em] text-zinc-400 mb-4">{title}</h3>
    {children}
  </div>
)

const StatusBadge = ({ status }: { status: string }) => {
  const statusMap: { [key: string]: { text: string; icon: React.ElementType; color: string } } = {
    completed: { text: "Completed", icon: CheckCircle, color: "text-green-400" },
    in_progress: { text: "In Progress", icon: Loader, color: "text-blue-400 animate-spin" },
    not_started: { text: "Not Started", icon: Circle, color: "text-zinc-500" },
    active: { text: "Active", icon: CheckCircle, color: "text-green-400" },
    Sent: { text: "Sent", icon: ChevronRight, color: "text-yellow-400" },
    Accepted: { text: "Accepted", icon: CheckCircle, color: "text-green-400" },
  }
  const { text, icon: Icon, color } = statusMap[status] || { text: status, icon: Circle, color: "text-zinc-400" }
  return (
    <span className={cn("flex items-center text-sm font-mono", color)}>
      <Icon className="w-4 h-4 mr-2" />
      {text}
    </span>
  )
}

const ProgressBar = ({ value, max }: { value: number; max: number }) => {
  const percentage = (value / max) * 100
  return (
    <div className="w-full bg-zinc-700 rounded-full h-2.5">
      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
  )
}

const SignatureBlock = () => (
  <div className="border-t border-zinc-800 pt-4 text-xs text-zinc-500">
    <p className="font-bold text-zinc-300">[Your Name]</p>
    <p>Founder & Lead Strategist</p>
    <p>Concepts On Concepts</p>
  </div>
)

// --- MAIN DASHBOARD COMPONENT ---

export default function BusinessDashboard() {
  const [activeView, setActiveView] = useState("presentation")

  const renderContent = () => {
    switch (activeView) {
      case "overview":
        return <DashboardOverview />
      case "team":
        return <TeamManagement />
      case "onboarding":
        return <OnboardingTracker />
      case "deliverables":
        return <DeliverablesView />
      case "subscription":
        return <SubscriptionDetails />
      case "presentation":
        return <PresentationKit />
      default:
        return <DeliverablesView />
    }
  }

  return (
    <div className="bg-[#1B1B1B] text-[#E5E5E5] min-h-screen font-sans flex flex-col md:flex-row">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <div className="max-w-5xl mx-auto">{renderContent()}</div>
      </main>
    </div>
  )
}
