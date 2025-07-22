import { cabinetGuruData } from "@/lib/data"
import { InfoCard } from "@/components/dashboard/info-card"
import { SectionHeader } from "@/components/dashboard/section-header"

export function TeamManagement() {
  const { adminClient, userClients } = cabinetGuruData
  const allUsers = [adminClient, ...userClients]

  return (
    <div>
      <SectionHeader title="Team & Access" subtitle="Manage all client contacts and their roles." />
      <InfoCard title="CABINET GURU TEAM">
        <div className="divide-y divide-zinc-800">
          {allUsers.map((user) => (
            <div key={user.uuid} className="py-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div>
                <p className="text-zinc-200 font-bold">{user.name}</p>
                <p className="text-xs text-zinc-500 font-mono">{user.role}</p>
              </div>
              <p className="text-sm text-zinc-400">{user.email}</p>
              <p className="text-sm text-zinc-400 font-mono">{user.phone || "---"}</p>
            </div>
          ))}
        </div>
      </InfoCard>
    </div>
  )
}
