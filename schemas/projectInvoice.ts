import { defineType, defineField } from "sanity"
import { Receipt } from "lucide-react"

export default defineType({
  name: "projectInvoice",
  title: "Project Invoice",
  type: "document",
  icon: Receipt,
  fields: [
    defineField({ name: "invoiceTitle", title: "Invoice Title", type: "string" }),
    defineField({ name: "uuid", title: "UUID", type: "string", readOnly: true }),
    defineField({ name: "preparedDate", title: "Prepared Date", type: "datetime" }),
    defineField({ name: "dueDate", title: "Due Date", type: "datetime" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["Draft", "Sent", "Paid", "Overdue"] },
    }),
    defineField({ name: "clientCompany", title: "Client Company", type: "reference", to: [{ type: "clientCompany" }] }),
    // For simplicity, line items are omitted. A real implementation would use an array of objects.
    defineField({ name: "grandTotal", title: "Grand Total", type: "number" }),
  ],
})
