import { defineType, defineField } from "sanity"
import { Building } from "lucide-react"

export default defineType({
  name: "clientCompany",
  title: "Client Company",
  type: "document",
  icon: Building,
  fields: [
    defineField({ name: "companyName", title: "Company Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "uuid", title: "UUID", type: "string", readOnly: true }),
    defineField({ name: "industry", title: "Industry", type: "string" }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "notes", title: "Notes", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "keyholder",
      title: "Keyholder Company",
      type: "reference",
      to: [{ type: "keyholderCompany" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
