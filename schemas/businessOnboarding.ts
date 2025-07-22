import { defineType, defineField } from "sanity"
import { ClipboardCheck } from "lucide-react"

export default defineType({
  name: "businessOnboarding",
  title: "Business Onboarding",
  type: "document",
  icon: ClipboardCheck,
  fields: [
    defineField({ name: "uuid", title: "UUID", type: "string", readOnly: true }),
    defineField({
      name: "clientCompany",
      title: "Client Company",
      type: "reference",
      to: [{ type: "clientCompany" }],
    }),
    defineField({ name: "adminClient", title: "Admin Client", type: "reference", to: [{ type: "adminClient" }] }),
    defineField({
      name: "tasks",
      title: "Tasks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "taskName", type: "string" },
            { name: "status", type: "string", options: { list: ["completed", "in_progress", "not_started"] } },
            { name: "completedDate", type: "date" },
          ],
        },
      ],
    }),
    defineField({ name: "notes", title: "Notes", type: "array", of: [{ type: "block" }] }),
  ],
})
