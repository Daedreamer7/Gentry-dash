import { defineType, defineField } from "sanity"
import { Briefcase } from "lucide-react"

export default defineType({
  name: "keyholderCompany",
  title: "Keyholder Company",
  type: "document",
  icon: Briefcase,
  fields: [
    defineField({ name: "companyName", title: "Company Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "uuid", title: "UUID", type: "string", readOnly: true }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "status", title: "Status", type: "string", options: { list: ["active", "inactive"] } }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "companyName" } }),
    defineField({ name: "notes", title: "Notes", type: "array", of: [{ type: "block" }] }),
  ],
})
