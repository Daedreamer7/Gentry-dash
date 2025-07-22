export const cabinetGuruData = {
  clientCompany: {
    _type: "clientCompany",
    companyName: "Cabinet Guru",
    uuid: "CLIENT-4001",
    industry: "Custom Cabinetry & E-commerce",
    address: "456 Artisan Way, Denver, CO",
  },
  adminClient: {
    _type: "adminClient",
    name: "Alex Miller",
    email: "alex.miller@cabinetguru.com",
    phone: "+1 555 987 6543",
    role: "Owner",
    uuid: "ADMIN-4001",
  },
  userClients: [
    {
      _type: "userClient",
      name: "Brenda Chen",
      email: "brenda.chen@cabinetguru.com",
      role: "Operations Manager",
      uuid: "USER-4002",
    },
  ],
  businessOnboarding: {
    _type: "businessOnboarding",
    uuid: "ONBOARD-4001",
    tasks: [
      { taskName: "Email Setup and Domain Configuration", status: "not_started", completedDate: null },
      { taskName: "Brand Kit and Website Design", status: "not_started", completedDate: null },
      { taskName: "Website and App Development", status: "not_started", completedDate: null },
      { taskName: "Go-Live and Social Media Activation", status: "not_started", completedDate: null },
    ],
  },
  proposal: {
    _type: "projectProposal",
    uuid: "PROPOSAL-4001",
    projectTitle: "Full Digital Launch: Email, Website, App, Brand Kit, and Social",
    preparedDate: "2024-07-06",
    status: "sent",
    version: "v1",
    sections: [
      {
        _type: "coverBlock",
        title: "Proposal",
        subtitle: "Full Digital Launch Package",
        preparedDate: "2024-07-06",
        version: "v1",
        note: "Prepared for Cabinet Guru",
      },
      { _type: "block", style: "h2", children: [{ _type: "span", text: "Scope of Work" }] },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "This project covers the end-to-end digital launch for Cabinet Guru. It includes email infrastructure setup, a modern e-commerce website, a branded mobile app, a complete brand kit, and social media profile design and activation.",
          },
        ],
      },
      { _type: "block", style: "h3", children: [{ _type: "span", text: "Deliverables:" }] },
      [
        {
          _type: "block",
          style: "normal",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "✅ Email Setup: Google Workspace configuration for 10 accounts, DNS records (SPF/DKIM), branded email signatures.",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "✅ Website: 10-page e-commerce build with shopping cart, Stripe payments, and client dashboard.",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "✅ Mobile App: Progressive web app (PWA) featuring product catalog, user accounts, and push notifications.",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "✅ Brand Kit: Logo files in multiple formats, color palettes, typography system, and brand guidelines PDF.",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "✅ Social Media: Profile branding, cover images, 20 launch graphics, and social post templates.",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "✅ Content Library: Pre-written website copy, FAQs, and policy pages (privacy policy, terms of service).",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "✅ CRM Integration: Basic CRM setup for lead capture and contact management.",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "✅ Analytics & SEO: Google Analytics integration, SEO metadata configuration, and sitemap submission.",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "✅ Custom Automations: Abandoned cart emails and order notification workflows.",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "✅ Training & Handoff: Video walkthroughs, PDF guides, and a 60-minute training session.",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "✅ Support: 3 months of priority support and maintenance.",
            },
          ],
        },
      ],
      {
        _type: "timelineBlock",
        title: "Project Timeline",
        phases: [
          {
            phaseName: "Setup",
            description: "Email and domain configuration",
            startDate: "2024-07-08",
            endDate: "2024-07-12",
            status: "not_started",
            milestones: ["Email Live", "DNS Verified"],
          },
          {
            phaseName: "Design",
            description: "Brand kit and website design",
            startDate: "2024-07-13",
            endDate: "2024-07-25",
            status: "not_started",
            milestones: ["Design Approval"],
          },
          {
            phaseName: "Development",
            description: "Website and app build",
            startDate: "2024-07-26",
            endDate: "2024-08-20",
            status: "not_started",
            milestones: ["Staging Launch"],
          },
          {
            phaseName: "Launch",
            description: "Go live and social media activation",
            startDate: "2024-08-21",
            endDate: "2024-08-25",
            status: "not_started",
            milestones: ["Public Launch"],
          },
        ],
      },
    ],
  },
  invoice: {
    _type: "projectInvoice",
    uuid: "INVOICE-4001",
    invoiceTitle: "Full Digital Launch Package Invoice",
    preparedDate: "2024-07-06",
    dueDate: "2024-07-20",
    status: "sent",
    sections: [
      {
        _type: "invoiceBlock",
        title: "Invoice Summary",
        currency: "USD",
        items: [
          { description: "Email Setup and Domain Configuration", quantity: 1, unitPrice: 1200, total: 1200 },
          { description: "Website Design & Development", quantity: 1, unitPrice: 8000, total: 8000 },
          { description: "Mobile App Build", quantity: 1, unitPrice: 3500, total: 3500 },
          { description: "Brand Kit Development", quantity: 1, unitPrice: 1500, total: 1500 },
          { description: "Social Media Launch Assets", quantity: 1, unitPrice: 1000, total: 1000 },
          { description: "Content Library & Copywriting", quantity: 1, unitPrice: 800, total: 800 },
          { description: "CRM & Analytics Setup", quantity: 1, unitPrice: 1250, total: 1250 },
          { description: "Custom Automations", quantity: 1, unitPrice: 1200, total: 1200 },
          { description: "Training & Handoff Package", quantity: 1, unitPrice: 1000, total: 1000 },
          { description: "3 Months Priority Support", quantity: 1, unitPrice: 1500, total: 1500 },
        ],
        subtotal: 20950,
        tax: 1047.5,
        grandTotal: 21997.5,
        paymentTerms: "Due within 14 days",
        notes: "Includes all production-ready source files and 3 months of support.",
      },
      {
        _type: "paymentInstructionsBlock",
        bankName: "First National Bank",
        accountName: "Concepts On Concepts",
        accountNumber: "123456789",
        routingNumber: "987654321",
        swiftCode: "FNBOUS33",
        notes: "Reference invoice number when submitting payment.",
      },
    ],
  },
  subscription: {
    _type: "subscription",
    planName: "Digital Launch Suite",
    status: "pending",
    renewalDate: "2024-08-25",
    monthlyFee: 499,
    features: ["Managed Hosting", "Daily Backups", "Security Monitoring", "Monthly Performance Reports"],
  },
}
