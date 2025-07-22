import { defineType, defineField } from "sanity"
import { ShieldCheck } from "lucide-react"

export default defineType({
  name: "memberAccount",
  title: "Member Account",
  type: "document",
  icon: ShieldCheck,
  fields: [
    defineField({ name: "userClient", title: "User Client", type: "reference", to: [{ type: "userClient" }] }),
    defineField({ name: "subscriptionPlan", title: "Subscription Plan", type: "string" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["active", "inactive", "paused"] },
    }),
    defineField({ name: "startDate", title: "Start Date", type: "date" }),
    defineField({ name: "renewalDate", title: "Renewal Date", type: "date" }),
    defineField({
      name: "permissions",
      title: "Permissions",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
  ],
})
