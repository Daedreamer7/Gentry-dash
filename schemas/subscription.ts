import { defineType, defineField } from "sanity"
import { CreditCard } from "lucide-react"

export default defineType({
  name: "subscription",
  title: "Subscription",
  type: "document",
  icon: CreditCard,
  fields: [
    defineField({ name: "clientCompany", title: "Client Company", type: "reference", to: [{ type: "clientCompany" }] }),
    defineField({ name: "planName", title: "Plan Name", type: "string" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["active", "inactive", "canceled"] },
    }),
    defineField({ name: "startDate", title: "Start Date", type: "date" }),
    defineField({ name: "renewalDate", title: "Renewal Date", type: "date" }),
    defineField({ name: "monthlyFee", title: "Monthly Fee", type: "number" }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
})
