// Site info
export const SITE = {
  name: 'ONAS',
  tagline: 'Empowering Enterprises with Technology & Talent',
  copyright: `© ${new Date().getFullYear()} ONASTech Global Services Pvt Ltd | All rights reserved.`,
};

// Navigation links
export const NAV_LINKS = [
  {
    label: 'Services',
    path: '/how-we-help',
    children: [
      {
        category: 'AI ERP & CRM SERVICES',
        items: [
          { label: 'SAP', path: '/how-we-help/erp/sap' },
          { label: 'Oracle', path: 'https://www.onasit.com/' },
          { label: 'Netsuite', path: '/how-we-help/erp/netsuite' },
          { label: 'Workday', path: '/how-we-help/erp/workday' },
          { label: 'Microsoft Dynamic 365', path: '/how-we-help/erp/microsoft-dynamics-365' },
          { label: 'Salesforce', path: '/how-we-help/erp/salesforce' },
          { label: 'Service Now', path: '/how-we-help/erp/servicenow' },
        ],
      },
      {
        category: 'Digital Transformation',
        items: [
          { label: 'AI & ML', path: '/how-we-help/digital-transformation/ai-ml' },
          { label: 'Cloud Migration & Integration', path: '/how-we-help/digital-transformation/cloud-integ' },
          { label: 'Data Engineering & Analytics', path: '/how-we-help/digital-transformation/data-eng-ana' },
          { label: 'IoT Services', path: '/how-we-help/digital-transformation/iot-services' },
          { label: 'Product Engineering', path: '/how-we-help/digital-transformation/product-eng' },
          { label: 'Testing & Automation', path: '/how-we-help/digital-transformation/test-automation' },
          { label: 'Governance, Risk & Compliance (GRC)', path: '/how-we-help/digital-transformation/grc' },
          { label: 'IT Asset Management Solutions', path: '/how-we-help/digital-transformation/it-asset-management' },
          { label: 'GenAI Solutions', path: '/how-we-help/digital-transformation/genai' },
          { label: 'DevOps & Infra Automation', path: '/how-we-help/digital-transformation/devops' },
        ],
      },
      {
        category: 'Managed IT and Operations',
        items: [
          { label: 'Application Maintenance Services', path: '/how-we-help/managed-it-operations/app-maintenance' },
          { label: 'Cloud Support', path: '/how-we-help/managed-it-operations/cloud-support' },
          { label: 'Cybersecurity', path: '/how-we-help/managed-it-operations/cybersecurity' },
          { label: 'IT Infrastructure Services', path: '/how-we-help/managed-it-operations/it-infra' },
          { label: 'Network Support', path: '/how-we-help/managed-it-operations/network-support' },
          { label: '24x7 Helpdesk', path: '/how-we-help/managed-it-operations/helpdesk' },
        ],
      },
    ],
  },

  // ── SOLUTIONS ──
  {
    label: 'Solutions',
    path: '/solutions',
    children: [
      {
        category: 'Digital Reporting Requirements (DRR)',
        items: [
          { label: 'DRR', path: '/solutions/drr/drr' },
          { label: 'e-Invoicing', path: '/solutions/drr/e-invoicing' },
          { label: 'Invoice Reporting', path: '/solutions/drr/invoice-reporting' },
          { label: 'ViDA (VAT in the Digital Age)', path: '/solutions/drr/vida' },
          { label: 'e-Waybill', path: '/solutions/drr/e-waybill' },
        ],
      },
      {
        category: 'Reporting',
        items: [
          { label: 'SAF-T', path: '/solutions/reporting/saf-t' },
          { label: 'VAT Return', path: '/solutions/reporting/vat-return' },
          { label: 'Country by Country reports', path: '/solutions/reporting/cbcr' },
          { label: 'Intrastat Reports', path: '/solutions/reporting/intrastat' },
        ],
      },
      {
        category: 'Automation',
        items: [
          { label: 'AP Automation', path: '/solutions/automation/ap-automation' },
          { label: 'e-Banking', path: '/solutions/automation/e-banking' },
          { label: 'Reconciliation', path: '/solutions/automation/reconciliation' },
        ],
      },
      {
        category: 'Automation',
        items: [
          { label: 'Custom Software Development', path: '/solutions/automation/custom-software' },
          { label: 'Enterprise Solutions', path: '/solutions/automation/enterprise-solutions' },
          { label: 'Ai Based Process Automation', path: '/solutions/automation/ai-process-automation' },
          { label: 'Offshore Website Development', path: '/solutions/automation/offshore-web-dev' },
         
          { label: 'Ecommerce Development', path: '/solutions/automation/ecommerce-dev' },
          { label: 'Devops', path: '/solutions/automation/devops' },
        ],
      },
      {
        category: 'Digital Marketing',
        items: [
          { label: 'SEO', path: '/solutions/digital-marketing/seo' },
          { label: 'PPC', path: '/solutions/digital-marketing/ppc' },
          { label: 'SMM', path: '/solutions/digital-marketing/smm' },
          { label: 'SMO', path: '/solutions/digital-marketing/smo' },
          { label: 'Content Writing', path: '/solutions/digital-marketing/content-writing' },
        ],
      },
      {
        category: 'App Development',
        items: [
          { label: 'Mobile App', path: '/solutions/app-development/mobile-app' },
          { label: 'Web App', path: '/solutions/app-development/web-app' },
        ],
      },
    ],
  },

  // ── INDUSTRIES ──
  {
    label: 'Industries',
    path: '/who-we-help',
    children: [
      {
        category: 'Fiscal Services',
        items: [
          { label: 'Banking', path: '/who-we-help/industries#banking' },
          { label: 'Insurance', path: '/who-we-help/industries#insurance' },
        ],
      },
      {
        category: 'Health & Life Sciences',
        items: [
          { label: 'Life Sciences', path: '/who-we-help/industries#life-sciences' },
          { label: 'Healthcare', path: '/who-we-help/industries#healthcare' },
        ],
      },
      {
        category: 'Technology & Communications',
        items: [
          { label: 'Information Technology', path: '/who-we-help/industries#information-technology' },
          { label: 'Hi-Tech', path: '/who-we-help/industries#hi-tech' },
          { label: 'Communication, Media & Info Services', path: '/who-we-help/industries#communication-media-info' },
        ],
      },
      {
        category: 'Energy & Natural Resources',
        items: [
          { label: 'Oil, Gas & Energy', path: '/who-we-help/industries#oil-gas-energy' },
          { label: 'Energy, Resources & Utilities', path: '/who-we-help/industries#energy-resources-utilities' },
          { label: 'Natural Resources', path: '/who-we-help/industries#natural-resources' },
        ],
      },
      {
        category: 'Government & Education',
        items: [
          { label: 'Public Services', path: '/who-we-help/industries#public-services' },
          { label: 'Education', path: '/who-we-help/industries#education' },
        ],
      },
      {
        category: 'Travel & Logistics',
        items: [
          { label: 'Travel & Logistics', path: '/who-we-help/industries#travel-logistics' },
        ],
      },
      {
        category: 'Consumer & Retail',
        items: [
          { label: 'Consumer Electronics & Packaged Goods', path: '/who-we-help/industries#consumer-electronics-packaged-goods' },
          { label: 'Retail', path: '/who-we-help/industries#retail' },
        ],
      },
      {
        category: 'Industry & Professional Services',
        items: [
          { label: 'Manufacturing', path: '/who-we-help/industries#manufacturing' },
          { label: 'Professional Services', path: '/who-we-help/industries#professional-services' },
        ],
      },
    ],
  },

  // ── WHY ONAS ──
  {
    label: 'Why ONAS',
    path: '/why-onas',
    children: [
      { label: 'Who we are', path: '/why-onas/about-us/' },
      { label: 'Company', path: '/why-onas/company/' },
      { label: 'Mission & Principles', path: '/why-onas/mission-principles' },
      { label: 'Leadership', path: '/why-onas/leadership/' },
      { label: 'Culture & Benefits', path: '/why-onas/culture-benefits' },
      { label: 'Employees', path: '/why-onas/employees' },
      { label: 'Investors', path: '/why-onas/investors/' },
      { label: 'Life @ ONAS', path: '/why-onas/life' },
    ],
  },

  // ── RESOURCES ──
  {
    label: 'Resources',
    path: '/resources',
    children: [
      { label: 'Media', path: '/resources/media' },
      { label: 'Ideas That Matter', path: '/resources/ideas' },
      { label: 'Awards & Recognition', path: '/resources/awards' },
      { label: 'Blogs', path: '/resources/blogs' },
      { label: 'Contact', path: '/resources/contact-us/' },
      { label: 'Careers', path: '/resources/careers/' },
      { label: 'Case Studies', path: '/resources/case-studies/' },
      { label: 'News Room', path: '/resources/newsroom/' },
    ],
  },

  // ── STAFFING & EDTECH ──
  {
    label: 'Staffing & EDTech',
    path: '/staffing',
    children: [
      {
        category: 'Submit a Vacancy',
        items: [
          { label: 'Request Call Back', path: '/staffing/submit-a-vacancy/request-a-call-back/' },
        ],
      },
      {
        category: 'IT Consulting',
        items: [
          { label: 'Banking Finance Sales', path: '/staffing/it-consulting#banking-finance' },
          { label: 'Finance & Accounting', path: '/staffing/it-consulting#finance-accounting' },
          { label: 'HR & Support', path: '/staffing/it-consulting#hr-support' },
          { label: 'Legal & Compliance', path: '/staffing/it-consulting#legal-compliance' },
          { label: 'Pharma, Healthcare & Life Sciences', path: '/staffing/it-consulting#pharma-healthcare-lifesciences' },
          { label: 'Sales & Trade Marketing', path: '/staffing/it-consulting#sales-trade-marketing' },
          { label: 'Wholesale & Retail', path: '/staffing/it-consulting#wholesale-retail' },
        ],
      },
      {
        category: 'Professional Services',
        items: [
          { label: 'Managed IT & Resource Services', path: '/staffing/professional-services#managed-it' },
          { label: 'Staff Augmentation Services', path: '/staffing/professional-services#staff-augmentation' },
          { label: 'Temporary / Contract Staffing', path: '/staffing/professional-services#temporary-contract' },
          { label: 'Permanent Staffing / Executive Placement', path: '/staffing/professional-services#permanent-executive' },
          { label: 'Contract To Hire Staffing', path: '/staffing/professional-services#contract-to-hire' },
          { label: 'Remote / Virtual Staffing', path: '/staffing/professional-services#remote-virtual' },
          { label: 'Offshore Staffing', path: '/staffing/professional-services#offshore-staffing' },
          { label: 'RPO Services', path: '/staffing/professional-services#rpo-services' },
          { label: 'BPO Services', path: '/staffing/professional-services#bpo-services' },
          { label: 'Hire our Recruiters', path: '/staffing/professional-services#hire-recruiters' },
          { label: 'Technical Support Services', path: '/staffing/professional-services#technical-support' },
        ],
      },
      {
        category: 'AI & EdTech Services',
        items: [
          { label: 'LLM Development Services', path: '/staffing/ai-edtech/llm-development-services' },
          { label: 'Generative AI Development', path: '/staffing/ai-edtech/generative-ai-development' },
          { label: 'Machine Learning Consulting', path: '/staffing/ai-edtech/machine-learning-consulting' },
          { label: 'AI Chatbot Development', path: '/staffing/ai-edtech/ai-chatbot-development' },
          { label: 'AI Consulting Services', path: '/staffing/ai-edtech/ai-consulting-services' },
          {
            label: 'Corporate Training',
            path: '/staffing/ai-edtech/corporate-training',
            subgroups: [
              {
                title: 'TECHNOLOGIES',
                items: [
                  { label: 'Angular', path: '/staffing/ai-edtech/corporate-training/angular' },
                  { label: '.NET', path: '/staffing/ai-edtech/corporate-training/dotnet' },
                  { label: 'Node.js', path: '/staffing/ai-edtech/corporate-training/nodejs' },
                  { label: 'Flutter', path: '/staffing/ai-edtech/corporate-training/flutter' },
                  { label: 'React Native', path: '/staffing/ai-edtech/corporate-training/react-native' },
                  { label: 'Vue', path: '/staffing/ai-edtech/corporate-training/vue' },
                  { label: 'React', path: '/staffing/ai-edtech/corporate-training/react' },
                ],
              },
              {
                title: 'TECH SERVICES',
                items: [
                  { label: 'Software Development', path: '/staffing/ai-edtech/corporate-training/software-development' },
                  { label: 'Backend Development', path: '/staffing/ai-edtech/corporate-training/backend-development' },
                  { label: 'Enterprise Development', path: '/staffing/ai-edtech/corporate-training/enterprise-development' },
                  { label: 'Mobile App Development', path: '/staffing/ai-edtech/corporate-training/mobile-app-development' },
                  { label: 'Blockchain', path: '/staffing/ai-edtech/corporate-training/blockchain' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];