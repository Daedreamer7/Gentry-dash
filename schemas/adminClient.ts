import { defineType, defineField } from "sanity"
import { UserCircle } from "lucide-react"

export default defineType({
  name: "adminClient",
  title: "Admin Client",
  type: "document",
  icon: UserCircle,
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "email", title: "Email", type: "string", validation: (Rule) => Rule.required().email() }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "role", title: "Role", type: "string", initialValue: "Admin" }),
    defineField({ name: "uuid", title: "UUID", type: "string", readOnly: true }),
    defineField({
      name: "company",
      title: "Company",
      type: "reference",
      to: [{ type: "clientCompany" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
