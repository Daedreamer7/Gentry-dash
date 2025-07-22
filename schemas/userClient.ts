import { defineType, defineField } from "sanity"
import { User } from "lucide-react"

export default defineType({
  name: "userClient",
  title: "User Client",
  type: "document",
  icon: User,
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "email", title: "Email", type: "string", validation: (Rule) => Rule.required().email() }),
    defineField({ name: "role", title: "Role", type: "string" }),
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
