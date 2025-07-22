import { defineType, defineField } from "sanity"
import { FileText } from "lucide-react"

export default defineType({
  name: "projectProposal",
  title: "Project Proposal",
  type: "document",
  icon: FileText,
  fields: [
    defineField({ name: "projectTitle", title: "Project Title", type: "string" }),
    defineField({ name: "uuid", title: "UUID", type: "string", readOnly: true }),
    defineField({ name: "preparedDate", title: "Prepared Date", type: "datetime" }),
    defineField({ name: "clientCompany", title: "Client Company", type: "reference", to: [{ type: "clientCompany" }] }),
    defineField({ name: "adminClient", title: "Admin Client", type: "reference", to: [{ type: "adminClient" }] }),
    // For simplicity, sections are omitted. A real implementation would use portable text or object arrays.
  ],
})
