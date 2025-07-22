export interface PortableTextBlock {
  _type: string
  _key?: string
  style?: string
  listItem?: string
  level?: number
  children: PortableTextSpan[]
}

export interface PortableTextSpan {
  _type: string
  _key?: string
  text: string
  marks?: string[]
}

export interface CoverBlock {
  _type: "coverBlock"
  title: string
  subtitle: string
  preparedDate: string
  version: string
  note: string
}

export interface TimelineBlock {
  _type: "timelineBlock"
  title: string
  phases: TimelinePhase[]
}

export interface TimelinePhase {
  phaseName: string
  description: string
  startDate: string
  endDate: string
  status: string
  milestones: string[]
}

export interface InvoiceBlock {
  _type: "invoiceBlock"
  title: string
  currency: string
  items: InvoiceItem[]
  subtotal: number
  tax: number
  grandTotal: number
  paymentTerms: string
  notes: string
}

export interface InvoiceItem {
  description: string
  quantity: number
  unitPrice: number
  total: number
}

export interface PaymentInstructionsBlock {
  _type: "paymentInstructionsBlock"
  bankName: string
  accountName: string
  accountNumber: string
  routingNumber: string
  swiftCode: string
  notes: string
}

export interface PresentationSlide {
  _type: "presentationSlide"
  title: string
  subtitle?: string
  content: PortableTextBlock[]
  layout: "hero" | "content" | "split" | "full"
  background?: string
}
