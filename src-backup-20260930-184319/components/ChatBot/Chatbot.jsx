import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "👋 Hello! Welcome to ONAS. I'm your virtual assistant, here to help you find about our services.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showServices, setShowServices] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(null);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showBackToServices, setShowBackToServices] = useState(false);
  const [showBackToQuestions, setShowBackToQuestions] = useState(false);
  const [currentServiceCategory, setCurrentServiceCategory] = useState('');
  const [isFromSubMenu, setIsFromSubMenu] = useState(false);
  const messagesEndRef = useRef(null);
  const sectionStartRef = useRef(null);


  const servicesSubMenu = [
    { text: 'Gen AI ERP Solutions', type: 'erp', icon: '🏢' },
    { text: 'Digital Transformation', type: 'digital', icon: '⚡' },
    { text: 'Managed IT Services', type: 'it', icon: '🛡️' },
    { text: 'Professional Services', type: 'staffing-pro', icon: '👥' },
    { text: 'EdTech Services', type: 'staffing-edu', icon: '🎓' }
  ];

 
  const otherServicesSubMenu = [
    { text: 'Web Development', type: 'marketing', subType: 'web-dev', icon: '🌐' },
    { text: 'SEO', type: 'marketing', subType: 'seo', icon: '🔍' },
    { text: 'Social Media Marketing', type: 'marketing', subType: 'social-media', icon: '📱' },
    { text: 'Email Marketing', type: 'marketing', subType: 'email-marketing', icon: '✉️' }
  ];

 
  const quickReplies = [
    { text: 'Services', type: 'services-menu', icon: '📋' },
    { text: 'Other Services', type: 'other-services-menu', icon: '🎯' },
    { text: 'IT Consulting', type: 'staffing-it', icon: '👨‍💼' },
    { text: 'Staffing', type: 'staffing-pro', icon: '👥' },
    { text: 'Common Questions', type: 'questions', icon: '❓' },
    { text: 'Contact Team', type: 'contact', icon: '📞' }
  ];

  // ENTERPRISE RESOURCE PLANNING (ERP)
  const erpServices = [
    {
      id: 1,
      title: 'Oracle ERP',
      desc: 'Cloud/E-Business Suite implementation, optimization, and support.',
      details: `**Oracle ERP Cloud / Oracle E-Business Suite (EBS)**\n\nFull-scale enterprise implementation, optimization, and support.\n\n**Financial Modules:**\n• General Ledger (GL), Accounts Payable (AP), Accounts Receivable (AR)\n• Fixed Assets (FA), Cash Management, Financial Reporting\n\n**Supply Chain Modules:**\n• Inventory Management, Order Management, Purchasing\n• Manufacturing, Cost Management, Logistics\n\n**Human Capital Modules:**\n• Human Resources (HRMS), Payroll, Time & Labor\n• Benefits, Talent Management\n\n**Project Modules:**\n• Project Accounting, Project Management\n• Project Costing, Project Billing\n\n**Tax Implementation & Compliance:**\n• Global Tax Solutions: VAT, GST, Sales & Use Tax across 190+ countries\n• Regional Specializations: US Sales Tax, European VAT, APAC GST\n• Oracle Tax Cloud: Automated tax calculation, reporting, and filing\n• e-Invoicing & Compliance: Real-time invoice reporting`
    },
    {
      id: 2,
      title: 'SAP',
      desc: 'S/4HANA implementation and comprehensive module expertise.',
      details: `**SAP Implementation & Optimization**\n\nFull-scale enterprise implementation and optimization.\n\n**Key Modules:**\n• Finance (FI/CO), Sales & Distribution (SD)\n• Materials Management (MM), Production Planning (PP)\n• Human Capital Management (HCM), Supply Chain Management (SCM)\n• Customer Relationship Management (CRM), Business Intelligence (BI)\n\n**Tax Implementation & Compliance:**\n• Global Tax Solutions: SAP S/4HANA Tax Compliance, VAT, GST\n• Country-Specific Solutions: Brazilian Nota Fiscal, Indian GST\n• SAP Tax Compliance: Automated calculation, reporting, monitoring\n• e-Document Compliance: Electronic invoicing worldwide\n• Transfer Pricing & Custom Duty Management`
    },
    {
      id: 3,
      title: 'Microsoft Dynamics',
      desc: 'Dynamics 365, NAV, AX business management solutions.',
      details: `**Microsoft Dynamics Solutions**\n\nEnd-to-end business management solutions (Dynamics 365, NAV, AX).\n\n**Key Modules:**\n• Finance & Operations, Sales & Customer Service\n• Supply Chain Management, Retail\n• Project Operations, Human Resources, Commerce\n\n**Tax Implementation:**\n• Global tax engine, VAT, GST, Sales Tax\n• e-Invoicing compliance across regions`
    },
    {
      id: 4,
      title: 'Salesforce CRM',
      desc: 'Sales, Service, Marketing Cloud implementation.',
      details: `**Salesforce CRM & Business Solutions**\n\nCRM and business process solutions.\n\n**Key Modules:**\n• Sales Cloud, Service Cloud, Marketing Cloud\n• Commerce Cloud, Experience Cloud\n• Tableau Analytics, MuleSoft Integration\n\n**Tax Solutions:**\n• Salesforce CPQ with tax calculation\n• Billing with tax automation`
    },
    {
      id: 5,
      title: 'Netsuite',
      desc: 'Cloud ERP for growing businesses.',
      details: `**Netsuite Cloud ERP**\n\nCloud ERP for growing businesses.\n\n**Key Modules:**\n• Financial Management, Order Management\n• Inventory & Supply Chain, CRM & eCommerce\n• HR & Payroll, SuiteAnalytics\n\n**Tax Implementation:**\n• SuiteTax global tax engine\n• Automated compliance for 100+ countries`
    },
    {
      id: 6,
      title: 'ServiceNow',
      desc: 'IT service management and workflow automation.',
      details: `**ServiceNow Solutions**\n\nIT service management and workflow automation.\n\n**Key Modules:**\n• IT Service Management (ITSM)\n• IT Operations Management (ITOM)\n• Customer Service Management (CSM)\n• HR Service Delivery (HRSD), Security Operations\n• App Engine`
    },
    {
      id: 7,
      title: 'Workday',
      desc: 'Human capital and financial management.',
      details: `**Workday HCM & Financials**\n\nHuman capital and financial management.\n\n**Key Modules:**\n• Human Resources, Payroll, Talent Management\n• Financial Management, Planning, Analytics\n• Student Management\n\n**Tax Solutions:**\n• Global payroll tax compliance\n• Statutory reporting`
    },
    {
      id: 8,
      title: 'Zoho & Tally',
      desc: 'Solutions for SMEs and accounting-focused businesses.',
      details: `**Zoho & Tally Solutions**\n\nSolutions for SMEs and accounting-focused businesses.\n\n**Zoho Modules:**\n• CRM, Books (Accounting), Inventory\n• People (HR), Analytics\n\n**Tally Modules:**\n• Accounting, Inventory, Taxation (GST)\n• Payroll, Compliance\n\n**Tax Focus:**\n• Strong GST/VAT compliance for small to medium businesses`
    },
    {
      id: 9,
      title: 'Tax Implementation & Compliance',
      desc: 'Global tax compliance across 190+ countries with automated solutions.',
      details: `**Tax Implementation & Compliance Services**\n\nOur tax implementation services ensure your business remains compliant across all operating regions. We specialize in:\n\n**Global Tax Coverage:**\n• **Americas:** US Sales Tax, Canada GST/HST, Brazilian Nota Fiscal, Mexican CFDI\n• **EMEA:** EU VAT, UK MTD, Saudi Arabian ZATCA, UAE VAT\n• **APAC:** Indian GST, Australian BAS, Singapore GST, Japanese Consumption Tax\n• **Africa:** South African VAT, Nigerian tax compliance\n\n**Key Services:**\n1. **Tax Configuration & Localization:** Setting up tax codes, rules, and rates for specific countries\n2. **e-Invoicing & Real-time Reporting:** Compliance with government digital reporting mandates\n3. **Tax Automation:** Automated calculation, reporting, and filing processes\n4. **VAT/GST Reconciliation & Recovery:** Optimization of input tax credits\n5. **Transfer Pricing & Custom Duty Management**\n6. **Periodic Compliance Updates:** Keeping systems updated with changing tax laws\n\n**Supported Platforms:**\n• Oracle Tax Cloud\n• SAP S/4HANA Tax Compliance\n• Microsoft Dynamics Tax Engine\n• Netsuite SuiteTax\n• Custom tax solutions for all ERP platforms`
    }
  ];

  // DIGITAL TRANSFORMATION
  const digitalServices = [
    {
      id: 1,
      title: 'AI & ML / GenAI',
      desc: 'Intelligent applications, automation, and custom AI models.',
      details: `**AI & ML / GenAI Solutions**\n\nBuilding intelligent applications, automation, and custom generative AI models.\n\n**Services:**\n• Custom AI model development and training\n• Machine Learning solutions for predictive analytics\n• Generative AI for content creation and automation\n• AI-powered chatbots and virtual assistants\n• Natural Language Processing (NLP) solutions\n\n**Implementation:**\n1. Use case identification and feasibility study\n2. Data preparation and model selection\n3. Development and integration\n4. Testing and deployment\n5. Ongoing monitoring and optimization`
    },
    {
      id: 2,
      title: 'Cloud Migration',
      desc: 'Seamlessly moving systems to AWS, Azure, GCP.',
      details: `**Cloud Migration & Integration**\n\nSeamlessly moving and connecting your systems to the cloud.\n\n**Services:**\n• Cloud readiness assessment and planning\n• AWS, Azure, GCP migration expertise\n• Hybrid and multi-cloud strategies\n• Cloud security and compliance\n• Cost optimization and monitoring\n\n**Approach:**\n1. Assessment and business case development\n2. Migration strategy (lift-and-shift, re-platform, refactor)\n3. Execution with minimal disruption\n4. Optimization and governance\n5. Ongoing management and support`
    },
    {
      id: 3,
      title: 'Data Engineering',
      desc: 'Robust data pipelines and analytics dashboards.',
      details: `**Data Engineering & Analytics**\n\nCreating robust data pipelines and dashboards for insights.\n\n**Services:**\n• Data lake and warehouse implementation\n• ETL/ELT pipeline development\n• Real-time data processing\n• Business Intelligence dashboards\n• Advanced analytics and reporting\n\n**Technologies:**\n• Snowflake, Databricks, AWS Redshift\n• Tableau, Power BI, Looker\n• Apache Spark, Kafka, Airflow`
    },
    {
      id: 4,
      title: 'IoT Services',
      desc: 'Connecting physical devices to digital networks.',
      details: `**IoT Services**\n\nConnecting physical devices to digital networks.\n\n**Services:**\n• IoT architecture design and implementation\n• Sensor integration and data collection\n• Real-time monitoring and alerting\n• Predictive maintenance solutions\n• IoT security and compliance\n\n**Applications:**\n• Smart manufacturing and Industry 4.0\n• Connected healthcare devices\n• Smart buildings and facilities\n• Asset tracking and management`
    },
    {
      id: 5,
      title: 'Product Engineering',
      desc: 'Designing, developing, and launching software products.',
      details: `**Product Engineering**\n\nDesigning, developing, and launching new software products.\n\n**Services:**\n• Product discovery and strategy\n• UI/UX design and prototyping\n• Full-stack development\n• Quality assurance and testing\n• DevOps and deployment\n\n**Methodology:**\n• Agile and Scrum development\n• MVP development and iteration\n• User-centered design\n• Continuous integration/delivery`
    },
    {
      id: 6,
      title: 'DevOps & Automation',
      desc: 'Accelerating development and ensuring reliable deployments.',
      details: `**DevOps & Infra Automation**\n\nAccelerating development and ensuring reliable deployments.\n\n**Services:**\n• CI/CD pipeline implementation\n• Infrastructure as Code (IaC)\n• Containerization and orchestration (Docker, Kubernetes)\n• Monitoring and observability\n• Site reliability engineering\n\n**Benefits:**\n• Faster time to market\n• Improved deployment frequency\n• Reduced failure rate\n• Faster mean time to recovery`
    },
    {
      id: 7,
      title: 'GRC Solutions',
      desc: 'Managing risk and ensuring regulatory adherence.',
      details: `**Governance, Risk & Compliance (GRC)**\n\nManaging risk and ensuring regulatory adherence across your organization.\n\n**Key Services:**\n• **Governance Framework Development:**\n  - Policy creation and management\n  - Corporate governance structure\n  - Board reporting and dashboards\n\n• **Risk Management:**\n  - Risk assessment and identification\n  - Risk mitigation strategies\n  - Business continuity planning\n  - Third-party risk management\n\n• **Compliance Management:**\n  - Regulatory compliance monitoring\n  - Audit management and preparation\n  - Compliance training and awareness\n  - Control testing and validation\n\n• **Regulatory Expertise:**\n  - GDPR, CCPA, HIPAA compliance\n  - SOX, PCI-DSS, ISO 27001\n  - Industry-specific regulations\n  - Global compliance requirements\n\n**Implementation Approach:**\n1. Current state assessment\n2. Regulatory requirements mapping\n3. Control framework design\n4. Technology implementation\n5. Training and change management\n6. Ongoing monitoring and reporting`
    },
    {
      id: 8,
      title: 'IT Asset Management',
      desc: 'Optimizing software and hardware investments.',
      details: `**IT Asset Management (ITAM)**\n\nOptimizing your software and hardware investments for maximum value.\n\n**Comprehensive ITAM Services:**\n\n• **Software Asset Management (SAM):**\n  - License compliance and optimization\n  - Software usage tracking\n  - Vendor management and negotiations\n  - Software audits and reconciliation\n\n• **Hardware Asset Management:**\n  - Hardware lifecycle management\n  - Asset tracking and inventory\n  - Depreciation and financial reporting\n  - Procurement optimization\n\n• **Cloud Asset Management:**\n  - Cloud cost optimization\n  - Resource utilization tracking\n  - Reserved instance management\n  - Multi-cloud asset tracking\n\n• **Mobile Asset Management:**\n  - Mobile device management (MDM)\n  - Mobile application management\n  - Security compliance\n  - Remote wipe and management\n\n**Key Benefits:**\n• 20-30% reduction in software costs\n• 100% license compliance\n• Improved security posture\n• Better budgeting and forecasting\n• Enhanced vendor relationships\n\n**Technology Integration:**\n• Integration with ServiceNow, BMC, Flexera\n• Custom dashboard and reporting\n• Automated discovery and reconciliation\n• Contract and license management`
    },
    {
      id: 9,
      title: 'Testing & Automation',
      desc: 'Ensuring quality and performance at scale.',
      details: `**Testing & Automation Services**\n\nEnsuring quality and performance at scale through comprehensive testing strategies.\n\n**Testing Services Portfolio:**\n\n• **Functional Testing:**\n  - Manual and automated testing\n  - User acceptance testing (UAT)\n  - Regression testing\n  - Integration testing\n\n• **Non-Functional Testing:**\n  - Performance and load testing\n  - Security testing and vulnerability assessment\n  - Compatibility testing\n  - Usability testing\n\n• **Automation Testing:**\n  - Test automation framework development\n  - API testing automation\n  - Mobile testing automation\n  - Continuous testing integration\n\n• **Specialized Testing:**\n  - ERP testing (SAP, Oracle, Dynamics)\n  - CRM testing (Salesforce, Microsoft)\n  - Cloud migration testing\n  - DevOps pipeline testing\n\n**Automation Technologies:**\n• Selenium, Cypress, Playwright\n• JMeter, LoadRunner\n• Postman, SoapUI\n• Appium, XCTest\n• CI/CD integration (Jenkins, GitLab, Azure DevOps)\n\n**Testing Methodology:**\n1. Test strategy and planning\n2. Test case design and development\n3. Test execution and defect management\n4. Test reporting and analytics\n5. Continuous improvement\n\n**Quality Metrics:**\n• Test coverage and defect density\n• Mean time to detect/resolve\n• Automation percentage\n• Release confidence score`
    }
  ];

  // MANAGED IT AND OPERATIONS
  const itServices = [
    {
      id: 1,
      title: 'Application Maintenance',
      desc: 'Keeping critical software and cloud services optimized.',
      details: `**Application Maintenance & Cloud Support**\n\nKeeping your critical software and cloud services optimized.\n\n**Services:**\n• 24/7 application monitoring and support\n• Performance tuning and optimization\n• Bug fixes and enhancements\n• Version upgrades and patches\n• Cloud cost optimization\n\n**Support Levels:**\n• L1: Basic support and ticket routing\n• L2: Technical troubleshooting\n• L3: Complex issue resolution\n• L4: Architecture and optimization`
    },
    {
      id: 2,
      title: 'Cybersecurity',
      desc: 'Protecting data and infrastructure from threats.',
      details: `**Cybersecurity Services**\n\nProtecting your data and infrastructure from threats.\n\n**Services:**\n• Security assessment and risk analysis\n• Network security and firewall management\n• Endpoint protection and mobile security\n• Identity and access management\n• Security incident response\n\n**Compliance:**\n• GDPR, HIPAA, PCI-DSS compliance\n• ISO 27001 implementation\n• Regular security audits\n• Employee security training`
    },
    {
      id: 3,
      title: 'IT Infrastructure',
      desc: 'Managing servers, networks, and connectivity.',
      details: `**IT Infrastructure & Network Support**\n\nManaging servers, networks, and connectivity.\n\n**Services:**\n• Server administration and maintenance\n• Network design and implementation\n• Storage and backup solutions\n• Virtualization and cloud infrastructure\n• Disaster recovery planning\n\n**Infrastructure Management:**\n• Proactive monitoring and alerting\n• Capacity planning and scaling\n• Performance optimization\n• Hardware lifecycle management`
    }
  ];

  // OTHER SERVICES (Marketing & Web)
  const marketingServices = [
    {
      id: 1,
      title: 'Web Development',
      desc: 'Building modern, responsive, user-friendly websites.',
      details: `**Web Design & Development**\n\nBuilding modern, responsive, and user-friendly websites.\n\n**Services:**\n• Custom website design and development\n• E-commerce solutions\n• Content Management Systems (CMS)\n• Mobile-responsive design\n• Website maintenance and updates\n\n**Technologies:**\n• React, Angular, Vue.js\n• WordPress, Drupal, Shopify\n• Node.js, Python, PHP\n• AWS, Azure, Google Cloud hosting`
    },
    {
      id: 2,
      title: 'SEO',
      desc: 'Improving site visibility on Google and search engines.',
      details: `**Search Engine Optimization (SEO)**\n\nImproving your site's visibility on Google.\n\n**Services:**\n• Technical SEO audit and optimization\n• Keyword research and strategy\n• On-page and off-page optimization\n• Content strategy and creation\n• Local SEO and Google My Business\n\n**Results:**\n• Higher search engine rankings\n• Increased organic traffic\n• Improved user experience\n• Better conversion rates`
    },
    {
      id: 3,
      title: 'Social Media Marketing',
      desc: 'Engaging audience with compelling content.',
      details: `**Social Media & Content Marketing**\n\nEngaging your audience with compelling content.\n\n**Services:**\n• Social media strategy and management\n• Content creation and calendar planning\n• Community management and engagement\n• Social media advertising\n• Influencer marketing\n\n**Platforms:**\n• Facebook, Instagram, LinkedIn\n• Twitter, YouTube, TikTok\n• Pinterest, Snapchat`
    },
    {
      id: 4,
      title: 'Email Marketing',
      desc: 'Running targeted campaigns for leads and sales.',
      details: `**Email Marketing & PPC Advertising**\n\nRunning targeted campaigns for leads and sales.\n\n**Services:**\n• Email campaign strategy and design\n• List segmentation and management\n• A/B testing and optimization\n• PPC campaign management (Google Ads, Bing)\n• Conversion rate optimization\n\n**Results:**\n• Higher email open and click rates\n• Improved lead generation\n• Better ROI on ad spend\n• Increased sales conversions`
    }
  ];

  // STAFFING SERVICES
  const staffingServices = {
    'it-consulting': [
      {
        id: 1,
        title: 'IT Consulting',
        desc: 'Specialized talent across key industry verticals.',
        details: `**IT Consulting Specializations**\n\nWe provide specialized IT consulting talent across key industry verticals. Our consultants bring deep domain expertise to drive your technology initiatives.\n\n**Our IT Consulting Specializations:**\n\n» **Banking Finance Sales**\n• Core banking solutions, fintech, trading systems, regulatory compliance\n• Sales technology, CRM implementation, financial analytics\n\n» **Finance & Accounting**\n• ERP financial modules (SAP FI/CO, Oracle Financials)\n• Accounting software, financial reporting, audit systems\n\n» **HR & Support**\n• HRIS implementation (Workday, SuccessFactors, SAP HCM)\n• Service desk solutions, employee portal development\n\n» **Legal & Compliance**\n• GRC systems, legal document management, compliance automation\n• Data privacy solutions (GDPR, CCPA, HIPAA)\n\n» **Pharma, Healthcare & Life Sciences**\n• Clinical trial systems, EHR/EMR implementation\n• Pharma manufacturing systems, regulatory compliance\n• Healthcare analytics and IoT solutions\n\n» **Sales & Trade Marketing**\n• Trade promotion management, sales force automation\n• Marketing technology stacks, customer engagement platforms\n\n» **Wholesale & Retail**\n• Point of sale systems, inventory management, e-commerce\n• Supply chain optimization, customer loyalty programs`
      }
    ],
    'professional-services': [
      {
        id: 1,
        title: 'Professional Services',
        desc: 'Flexible staffing solutions for all business needs.',
        details: `**Staffing & Professional Services**\n\nFlexible staffing solutions to meet your evolving business needs.\n\n**Our Services:**\n• Managed IT & Resource Services: Complete team management\n• Staff Augmentation: Supplement existing teams\n• Temporary/Contract Staffing: Project-based resources\n• Permanent Staffing: Direct hire solutions\n• Contract to Hire: Try before you hire model\n• Remote/Virtual Staffing: Global talent access\n• Offshore Staffing: Cost-effective solutions\n• RPO Services: Recruitment process outsourcing\n• BPO Services: Business process outsourcing\n• Technical Support: 24/7 helpdesk services\n\n**Benefits:**\n• Access to pre-vetted talent pool\n• Flexible engagement models\n• Reduced hiring time and cost\n• Scalable resource allocation`
      }
    ],
    'edtech-services': [
      {
        id: 1,
        title: 'EdTech Services',
        desc: 'Comprehensive education technology solutions.',
        details: `**EdTech Solutions**\n\nComprehensive EdTech solutions to transform learning experiences.\n\n**Our Services:**\n• Learning Management Systems (LMS) implementation\n• Educational Content Development\n• Student Information Systems (SIS)\n• Virtual Classroom solutions\n• Educational Analytics and tracking\n• Mobile Learning Apps\n• Compliance & Accreditation systems\n• AI-powered Learning technologies\n\n**For:**\n• K-12 Education\n• Higher Education\n• Corporate Training\n• Online Learning Platforms`
      }
    ]
  };

  // Common Questions Data
  const commonQuestions = [
    {
      id: 1,
      question: "How quickly can you fill a position?",
      answer: `Our average time-to-fill varies by role complexity:\n• Standard IT positions: 2-4 weeks\n• Niche/specialized roles: 4-6 weeks\n• Executive placements: 6-8 weeks\n\nWe have a large pre-vetted talent pool to accelerate your hiring. Would you like to discuss a specific urgent requirement?`
    },
    {
      id: 2,
      question: "What industries do you serve?",
      answer: `We serve multiple industries with specialized consultants:\n• Financial Services & Banking\n• Healthcare & Life Sciences\n• Retail & E-commerce\n• Manufacturing & Logistics\n• Technology & SaaS\n• Education & EdTech\n• Pharmaceuticals\n• Legal & Compliance\n\nIs there a particular industry you're focused on?`
    },
    {
      id: 3,
      question: "What's the difference between staff augmentation and managed services?",
      answer: `Great question!\n\n• **Staff Augmentation**: We provide individual professionals who work under your management\n• **Managed Services**: We provide and manage entire teams or processes as a service\n\n**Key Differences:**\n• Control Level: Augmentation = You manage, Managed = We manage\n• Risk: Augmentation = Lower risk, Managed = Higher risk transfer\n• Scalability: Both are scalable\n• Cost Structure: Different pricing models\n\nThe choice depends on your need for control vs. turnkey solutions. Would you like me to explain which might work better for your situation?`
    },
    {
      id: 4,
      question: "Do you offer remote staffing?",
      answer: `Yes! We specialize in remote and virtual staffing solutions across:\n• Different time zones\n• Multiple countries\n• Various engagement models\n\n**Our Remote Staffing Features:**\n• Pre-vetted remote professionals\n• Collaboration tools and processes\n• Time zone management\n• Performance monitoring\n• Security and compliance\n\nOur remote professionals are experienced in distributed team collaboration and come with proven track records.`
    },
    {
      id: 5,
      question: "What is your pricing model?",
      answer: `We offer flexible pricing models based on your needs:\n\n**Staff Augmentation:**\n• Hourly rates (time & material)\n• Monthly fixed fees\n• Project-based pricing\n\n**Managed Services:**\n• Fixed monthly fee\n• Outcome-based pricing\n• Risk-sharing models\n\n**Consulting Services:**\n• Daily/Monthly rates\n• Fixed project price\n• Retainer models\n\nWould you like to discuss a specific pricing model for your requirements?`
    },
    {
      id: 6,
      question: "How do you vet your candidates?",
      answer: `Our rigorous 7-step vetting process ensures quality:\n\n1. **Initial Screening**: Resume and profile review\n2. **Technical Assessment**: Skills testing and evaluation\n3. **Background Check**: Employment and education verification\n4. **Reference Check**: Professional references\n5. **Cultural Fit**: Alignment with your company culture\n6. **Interview Process**: Multiple interview rounds\n7. **Final Evaluation**: Comprehensive review\n\nThis ensures we provide only top-tier talent that matches your requirements.`
    }
  ];


  const keywordMapping = {
   
    'erp': 'erp',
    'erps': 'erp',
    'erp systems': 'erp',
    'enterprise resource planning': 'erp',
    'enterprise': 'erp',
    'resource planning': 'erp',
    'sap': 'erp',
    'sap erp': 'erp',
    'sap systems': 'erp',
    'oracle': 'erp',
    'oracle erp': 'erp',
    'oracle cloud': 'erp',
    'oracle ebs': 'erp',
    'oracle e-business': 'erp',
    'dynamics': 'erp',
    'microsoft dynamics': 'erp',
    'dynamics 365': 'erp',
    'dynamics nav': 'erp',
    'dynamics ax': 'erp',
    'netsuite': 'erp',
    'oracle netsuite': 'erp',
    'net suite': 'erp',
    'salesforce': 'erp',
    'sales force': 'erp',
    'salesforce crm': 'erp',
    'crm': 'erp',
    'customer relationship': 'erp',
    'servicenow': 'erp',
    'service now': 'erp',
    'service-now': 'erp',
    'workday': 'erp',
    'work day': 'erp',
    'zoho': 'erp',
    'zoho erp': 'erp',
    'tally': 'erp',
    'tally erp': 'erp',
    'tally software': 'erp',
    'zoho tally': 'erp',
    'tally zoho': 'erp',
    'tax': 'erp',
    'taxes': 'erp',
    'taxation': 'erp',
    'gst': 'erp',
    'vat': 'erp',
    'compliance': 'erp',

   
    'servdes': 'general',
    'servises': 'general',
    'serivces': 'general',
    'servieces': 'general',
    'searvices': 'general',
    'sarvices': 'general',
    'seervices': 'general',
    'servicess': 'general',
    'servise': 'general',
    'servce': 'general',

    // Digital Transformation keywords
    'digital': 'digital',
    'digitl': 'digital',
    'digital transformation': 'digital',
    'digital trans': 'digital',
    'digi transform': 'digital',
    'transformation': 'digital',
    'transform': 'digital',
    'ai': 'digital',
    'artificial intelligence': 'digital',
    'artificial': 'digital',
    'machine learning': 'digital',
    'ml': 'digital',
    'genai': 'digital',
    'gen ai': 'digital',
    'generative ai': 'digital',
    'cloud': 'digital',
    'cloud migration': 'digital',
    'cloud computing': 'digital',
    'data': 'digital',
    'data engineering': 'digital',
    'analytics': 'digital',
    'data analytics': 'digital',
    'iot': 'digital',
    'internet of things': 'digital',
    'devops': 'digital',
    'dev ops': 'digital',
    'development operations': 'digital',
    'automation': 'digital',
    'grc': 'digital',
    'governance risk compliance': 'digital',
    'governance': 'digital',
    'risk': 'digital',
    'compliance': 'digital',
    'itam': 'digital',
    'it asset management': 'digital',
    'asset management': 'digital',
    'testing': 'digital',
    'software testing': 'digital',
    'quality assurance': 'digital',
    'qa': 'digital',

    // IT Services keywords
    'it': 'it',
    'it support': 'it',
    'it services': 'it',
    'helpdesk': 'it',
    'help desk': 'it',
    'technical support': 'it',
    'cybersecurity': 'it',
    'cyber security': 'it',
    'security': 'it',
    'infrastructure': 'it',
    'it infrastructure': 'it',
    'network': 'it',
    'networking': 'it',
    'maintenance': 'it',
    'application maintenance': 'it',
    'app support': 'it',

    // Marketing keywords
    'marketing': 'marketing',
    'digital marketing': 'marketing',
    'markerting': 'marketing',
    'marketting': 'marketing',
    'seo': 'marketing',
    'search engine optimization': 'marketing',
    'search engine': 'marketing',
    'social media': 'marketing',
    'social': 'marketing',
    'social media marketing': 'marketing',
    'email marketing': 'marketing',
    'email': 'marketing',
    'web': 'marketing',
    'website': 'marketing',
    'web development': 'marketing',
    'web design': 'marketing',
    'development': 'marketing',
    'website development': 'marketing',
    'ppc': 'marketing',
    'pay per click': 'marketing',

    // IT Consulting keywords
    'consulting': 'staffing-it',
    'consultant': 'staffing-it',
    'consultants': 'staffing-it',
    'it consulting': 'staffing-it',
    'it consultant': 'staffing-it',
    'expert': 'staffing-it',
    'specialist': 'staffing-it',
    'banking': 'staffing-it',
    'bank': 'staffing-it',
    'finance': 'staffing-it',
    'financial': 'staffing-it',
    'healthcare': 'staffing-it',
    'health care': 'staffing-it',
    'pharma': 'staffing-it',
    'pharmaceutical': 'staffing-it',
    'retail': 'staffing-it',
    'manufacturing': 'staffing-it',
    'logistics': 'staffing-it',
    'legal': 'staffing-it',
    'law': 'staffing-it',
    'wholesale': 'staffing-it',
    'life sciences': 'staffing-it',
    'hr': 'staffing-it',
    'human resources': 'staffing-it',

    // Staffing keywords
    'staffing': 'staffing-pro',
    'staff': 'staffing-pro',
    'hire': 'staffing-pro',
    'hiring': 'staffing-pro',
    'recruit': 'staffing-pro',
    'recruitment': 'staffing-pro',
    'talent': 'staffing-pro',
    'resource': 'staffing-pro',
    'augmentation': 'staffing-pro',
    'staff augmentation': 'staffing-pro',
    'managed services': 'staffing-pro',
    'professional services': 'staffing-pro',

    // EdTech keywords
    'edtech': 'staffing-edu',
    'ed tech': 'staffing-edu',
    'education': 'staffing-edu',
    'educational': 'staffing-edu',
    'learning': 'staffing-edu',
    'lms': 'staffing-edu',
    'learning management': 'staffing-edu',
    'student': 'staffing-edu',
    'training': 'staffing-edu',
    'e-learning': 'staffing-edu',
    'elearning': 'staffing-edu',

    // General keywords
    'services': 'general',
    'service': 'general',
    'offerings': 'general',
    'offer': 'general',
    'provide': 'general',
    'help': 'general',
    'information': 'general',
    'details': 'general',
    'about': 'general',
    'tell me': 'general',
    'what do you': 'general',

    // Contact keywords
    'contact': 'contact',
    'contact us': 'contact',
    'get in touch': 'contact',
    'phone': 'contact',
    'telephone': 'contact',
    'email': 'contact',
    'mail': 'contact',
    'call': 'contact',
    'reach': 'contact',
    'address': 'contact',
    'location': 'contact'
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('chatShown')) {
        setIsOpen(true);
        sessionStorage.setItem('chatShown', 'true');
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

 
  useEffect(() => {
    if (messagesEndRef.current && isTyping) {
     
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    if (sectionStartRef.current && (showServices || showSubMenu || showQuestions)) {
      
      setTimeout(() => {
        if (sectionStartRef.current) {
          sectionStartRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [messages, isTyping, showServices, showSubMenu, showQuestions]);

  
  const findClosestKeyword = (userInput) => {
    const words = userInput.toLowerCase().split(/\s+/);

    
    for (const word of words) {
      if (keywordMapping[word]) {
        return { matched: word, service: keywordMapping[word] };
      }
    }

   
    const inputString = userInput.toLowerCase();
    for (const [keyword, service] of Object.entries(keywordMapping)) {
      if (inputString.includes(keyword) && keyword.length > 2) {
        return { matched: keyword, service };
      }
    }

   
    const commonMisspellings = {
      'servdes': 'services',
      'servises': 'services',
      'serivces': 'services',
      'servieces': 'services',
      'searvices': 'services',
      'sarvices': 'services',
      'seervices': 'services',
      'servicess': 'services',
      'servise': 'services',
      'servce': 'services',
      'erps': 'erp',
      'digitl': 'digital',
      'transfrm': 'transform',
      'markerting': 'marketing',
      'marketting': 'marketing',
      'conslting': 'consulting',
      'consultnt': 'consultant',
      'staffng': 'staffing'
    };

    for (const word of words) {
      if (commonMisspellings[word] && keywordMapping[commonMisspellings[word]]) {
        return {
          matched: commonMisspellings[word],
          service: keywordMapping[commonMisspellings[word]],
          corrected: true
        };
      }
    }

    return null;
  };

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage = {
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    setShowServices(null);
    setShowSubMenu(null);
    setShowQuestions(false);
    setShowBackToServices(false);
    setShowBackToQuestions(false);
    setIsFromSubMenu(false);

    setTimeout(() => {
      const botResponse = getBotResponse(inputText.toLowerCase());
      setMessages(prev => [...prev, {
        text: botResponse.text,
        sender: 'bot',
        timestamp: new Date()
      }]);

      if (botResponse.showServices) {
        setShowServices(botResponse.showServices);
        setCurrentServiceCategory(botResponse.showServices);
      }

      if (botResponse.showSubMenu) {
        setShowSubMenu(botResponse.showSubMenu);
      }

      if (botResponse.showQuestions) {
        setShowQuestions(true);
      }

      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (message) => {
   
    const keywordMatch = findClosestKeyword(message);

    if (keywordMatch) {
      const { matched, service, corrected } = keywordMatch;

      let responseText = '';
      let showServiceType = null;
      let showSubMenuType = null;

      if (corrected) {
        responseText = `I think you meant "${matched}". `;
      }

      switch(service) {

        case 'erp':
          responseText += "We help businesses integrate and manage their core processes with leading ERP platforms. Our implementation, customization, and support services ensure smooth operations across finance, HR, supply chain, and more.\n\nWhich ERP platform are you interested in?";
          showServiceType = 'erp';
          break;
        case 'digital':
          responseText += "We partner with companies to modernize their technology, data, and products, driving innovation and efficiency.\n\nWhich digital transformation service interests you?";
          showServiceType = 'digital';
          break;
        case 'it':
          responseText += "We offer proactive, around-the-clock support to keep your IT environment secure, stable, and running smoothly.\n\nWhat type of IT service do you need?";
          showServiceType = 'it';
          break;
        case 'marketing':
          responseText += "We create and promote powerful digital experiences to help you grow your online presence and reach your target audience.\n\nWhich marketing or web service are you looking for?";
          showServiceType = 'marketing';
          break;
        case 'staffing-it':
          responseText += "We provide specialized IT consulting talent across key industry verticals. Our consultants bring deep domain expertise to drive your technology initiatives.\n\nWhich industry vertical are you interested in?";
          showServiceType = 'staffing-it';
          break;
        case 'staffing-pro':
          responseText += "We offer flexible staffing solutions to meet your evolving business needs.\n\nHere are our professional services:";
          showServiceType = 'staffing-pro';
          break;
        case 'staffing-edu':
          responseText += "We provide comprehensive EdTech solutions to transform learning experiences.\n\nHere are our EdTech services:";
          showServiceType = 'staffing-edu';
          break;
        case 'contact':
          return {
            text:`<strong>Contact Our Team ( 24/7 Support) </strong><br><br>
            📞 <strong>Phone:</strong> <a href="tel:+1 201-589-8827" class="chatbot-link">+1 201-589-8827</a><br>
            📞 <strong>Phone 2:</strong> <a href="tel:+91-9281 50 6440"class="chatbot-link">+91-9281 50 6440"</a><br>
            📧 <strong>Email:</strong> <a href="mailto:sales@onasglobal.com" class="chatbot-link">sales@onasglobal.com</a><br>
             <strong>Website:</strong> <a href="https://onasglobal.com/" target="_blank" rel="noopener noreferrer" class="chatbot-link">https://onasglobal.com/</a><br><br>
            <strong>Business Hours:</strong><br>
            Monday - Friday: 9AM - 11PM EST<br><br>`,
            showServices: null
          };
          break;
        case 'general':
          responseText = "I can help you with:\n1. **Services** - ERP, Digital Transformation, IT Services\n2. **Other Services** - Web, SEO, Marketing\n3. **IT Consulting** - Specialized industry expertise\n4. **Staffing** - Flexible hiring solutions\n5. **Common Questions** - FAQs and answers\n6. **Contact Team** - Get in touch with us\n\nJust tell me what you're interested in!";
          break;
        default:
          responseText = "I understand you're interested in our services. Could you please specify what you're looking for?";
      }

      return {
        text: responseText,
        showServices: showServiceType,
        showSubMenu: showSubMenuType
      };
    }

   
    if (message.includes('tax') || message.includes('gst') || message.includes('vat') || message.includes('compliance')) {
      return {
        text: "Tax compliance is a critical part of our ERP implementation services. We help businesses stay compliant across all operating regions through our ERP platforms.\n\nWhich ERP platform are you interested in for tax compliance?",
        showServices: 'erp'
      };
    }

   
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return {
        text: "Hello! Welcome to ONAS. How can I assist you with our services today?",
        showServices: null
      };
    }

    if (message.includes('help')) {
      return {
        text: "I can help you with:\n1. **Services** - ERP, Digital Transformation, IT Services\n2. **Other Services** - Web, SEO, Marketing\n3. **IT Consulting** - Specialized industry expertise\n4. **Staffing** - Flexible hiring solutions\n5. **Common Questions** - FAQs and answers\n6. **Contact Team** - Get in touch with us\n\nJust tell me what you're interested in!",
        showServices: null
      };
    }

   
    if (message.length < 3 || message.split(' ').length < 2) {
      return {
        text: "I want to make sure I understand correctly. Are you looking for:\n• Hiring/recruitment services?\n• IT consulting expertise?\n• Staffing solutions?\n• EdTech implementation?\nOr something else specific to your needs?",
        showServices: null
      };
    }

    return {
      text: "I can help you with Services, IT Consulting, Staffing, and more. Could you please tell me what specific service you're looking for?",
      showServices: null
    };
  };

  const handleQuickReply = (type, subType = null) => {
    setIsTyping(true);
    setShowServices(null);
    setShowSubMenu(null);
    setShowQuestions(false);
    setShowBackToServices(false);
    setShowBackToQuestions(false);

  
    if (type === 'services-menu' || type === 'other-services-menu') {
      setIsFromSubMenu(true);
    } else if (type === 'staffing-it' || type === 'questions' || type === 'contact') {
      setIsFromSubMenu(false);
    } else if (type === 'staffing-pro') {
     
      setIsFromSubMenu(type === 'staffing-pro' ? false : true);
    } else if (type === 'staffing-edu') {
      setIsFromSubMenu(true); 
    } else {
     
      setIsFromSubMenu(showSubMenu !== null);
    }

    setTimeout(() => {
      let message = '';
      let showServiceType = null;
      let showSubMenuType = null;
      let showQuestionsFlag = false;

      switch (type) {
        case 'services-menu':
          message = "We offer a range of comprehensive services. Which area are you interested in?";
          showSubMenuType = 'services';
          break;

        case 'other-services-menu':
          message = "We provide various digital services to enhance your online presence. Which service are you looking for?";
          showSubMenuType = 'other-services';
          break;

        case 'erp':
          message = "We help businesses integrate and manage their core processes with leading ERP platforms. Which ERP platform are you interested in?";
          showServiceType = 'erp';
          setCurrentServiceCategory('erp');
          break;

        case 'digital':
          message = "We partner with companies to modernize their technology, data, and products. Which digital transformation service interests you?";
          showServiceType = 'digital';
          setCurrentServiceCategory('digital');
          break;

        case 'it':
          message = "We offer proactive, around-the-clock support to keep your IT environment secure. What type of IT service do you need?";
          showServiceType = 'it';
          setCurrentServiceCategory('it');
          break;

        case 'marketing':
          message = "We create and promote powerful digital experiences. Which marketing or web service are you looking for?";
          showServiceType = 'marketing';
          setCurrentServiceCategory('marketing');
          break;

        case 'staffing-it':
          message = "We provide specialized IT consulting talent across key industry verticals. Which industry vertical are you interested in?";
          showServiceType = 'staffing-it';
          setCurrentServiceCategory('staffing-it');
          break;

        case 'staffing-pro':
          message = "We offer flexible staffing solutions to meet your evolving business needs.";
          showServiceType = 'staffing-pro';
          setCurrentServiceCategory('staffing-pro');
          break;

        case 'staffing-edu':
          message = "We provide comprehensive EdTech solutions to transform learning experiences.";
          showServiceType = 'staffing-edu';
          setCurrentServiceCategory('staffing-edu');
          break;

        case 'questions':
          message = "Here are some common questions we receive. Click on any question to see the answer:";
          showQuestionsFlag = true;
          break;

        case 'contact':
          message = `<strong>Contact Our Team ( 24/7 Support) </strong><br><br>

            📞 <strong>Phone:</strong> <a href="tel:+1 201-589-8827" class="chatbot-link">+1 (201) 589-8827</a><br>
             📞 <strong>Phone 2:</strong> <a href="tel:+91-9848 00 4777" class="chatbot-link">+91-9848 00 4777</a><br>
            📧 <strong>Email:</strong> <a href="mailto:sales@onasglobal.com" class="chatbot-link">sales@onasglobal.com</a><br>
             <strong>Website:</strong> <a href="https://onasglobal.com/" target="_blank" rel="noopener noreferrer" class="chatbot-link">https://onasglobal.com/</a><br><br>
            <strong>Business Hours:</strong><br>
            Monday - Friday: 9AM - 11PM EST<br><br>`;
          break;

        default:
          message = 'Our services include:';
      }

      setMessages(prev => [...prev, {
        text: message,
        sender: 'bot',
        timestamp: new Date()
      }]);

      setShowServices(showServiceType);
      setShowSubMenu(showSubMenuType);
      setShowQuestions(showQuestionsFlag);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuestionClick = (question) => {
    const botMessage = {
      text: question.answer,
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setShowQuestions(false);
    setShowBackToQuestions(true);
  };

  const handleServiceClick = (service) => {
    const botMessage = {
      text: service.details,
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setShowServices(null);
    setShowSubMenu(null);
    setShowBackToServices(true);
  };

  const getServicesData = () => {
    switch (showServices) {
      case 'erp': return erpServices;
      case 'digital': return digitalServices;
      case 'it': return itServices;
      case 'marketing': return marketingServices;
      case 'staffing-it': return staffingServices['it-consulting'];
      case 'staffing-pro': return staffingServices['professional-services'];
      case 'staffing-edu': return staffingServices['edtech-services'];
      default: return [];
    }
  };

  const getServiceTitle = (serviceType) => {
    switch (serviceType) {
      case 'erp': return 'Gen AI ERP Solutions';
      case 'digital': return 'Digital Transformation Services';
      case 'it': return 'Managed IT & Operations';
      case 'marketing': return 'Other Services';
      case 'staffing-it': return 'IT Consulting Services';
      case 'staffing-pro': return 'Professional Services';
      case 'staffing-edu': return 'EdTech Services';
      default: return 'Services';
    }
  };

  const getServiceIcon = (serviceType, serviceId) => {
    if (serviceType === 'erp') {
      const erpIcons = ['🏢', '📊', '💼', '👥', '☁️', '⚙️', '👨‍💼', '📈', '🏛️'];
      return erpIcons[serviceId - 1] || '🏢';
    }
    if (serviceType === 'digital') {
      const digitalIcons = ['🤖', '☁️', '📊', '📡', '💻', '⚡', '🛡️', '💾', '🧪'];
      return digitalIcons[serviceId - 1] || '⚡';
    }
    if (serviceType === 'it') {
      const itIcons = ['🛠️', '🛡️', '💻', '📞'];
      return itIcons[serviceId - 1] || '💻';
    }
    if (serviceType === 'marketing') {
      const marketingIcons = ['🌐', '🔍', '📱', '✉️'];
      return marketingIcons[serviceId - 1] || '🎯';
    }
    // Staffing icons
    if (serviceType === 'staffing-it') return '👨‍💼';
    if (serviceType === 'staffing-pro') return '👥';
    if (serviceType === 'staffing-edu') return '🎓';
    return '📋';
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleClose = () => {
    setIsOpen(false);

  
    setMessages([
      {
        text: "👋 Hello! Welcome to ONAS. I'm your virtual assistant, here to help you find the right talent solutions or learn about our services.",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
    setInputText('');
    setIsTyping(false);
    setShowServices(null);
    setShowSubMenu(null);
    setShowQuestions(false);
    setShowBackToServices(false);
    setShowBackToQuestions(false);
    setCurrentServiceCategory('');
    setIsFromSubMenu(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="chatbot-floating-btn" onClick={() => setIsOpen(true)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
              stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="chatbot-pulse"></div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-title">ONAS Digital Assistant</div>
              <div className="chatbot-subtitle">ERP | Digital Transformation |  IT Services | Staffing</div>
            </div>
            <button className="chatbot-close-btn" onClick={handleClose}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          <div className="chatbot-body">
            {/* Messages */}
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message chatbot-message-${msg.sender}`}>
                <div className="chatbot-message-content">
              
                  {typeof msg.text === 'string' && msg.text.includes('<') ? (
                    <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                  ) : (
                    <>
                      {msg.text.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < msg.text.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </>
                  )}
                </div>
                <div className="chatbot-message-time">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}

         
            <div ref={sectionStartRef} />

            {/* Services Sub-Menu */}
            {showSubMenu === 'services' && !isTyping && (
              <div className="services-buttons-container">
                <div className="services-title">Our Services</div>
                <div className="service-buttons-grid">
                  {servicesSubMenu.map((service) => (
                    <button
                      key={service.type}
                      className="service-button"
                      onClick={() => handleQuickReply(service.type)}
                    >
                      <span className="service-button-icon">{service.icon}</span>
                      <div className="service-button-content">
                        <div className="service-button-title">{service.text}</div>
                      </div>
                    </button>
                  ))}
                </div>
                <button
                  className="back-to-services-button"
                  onClick={() => setShowSubMenu(null)}
                >
                  ← Back
                </button>
                <button
                  className="back-to-main-button"
                  onClick={() => {
                    setShowSubMenu(null);
                    setShowServices(null);
                    setIsFromSubMenu(false);
                  }}
                >
                  ← Back to Main Menu
                </button>
              </div>
            )}

            {/* Other Services Sub-Menu */}
            {showSubMenu === 'other-services' && !isTyping && (
              <div className="services-buttons-container">
                <div className="services-title">Other Services</div>
                <div className="service-buttons-grid">
                  {otherServicesSubMenu.map((service) => (
                    <button
                      key={service.subType}
                      className="service-button"
                      onClick={() => handleQuickReply(service.type, service.subType)}
                    >
                      <span className="service-button-icon">{service.icon}</span>
                      <div className="service-button-content">
                        <div className="service-button-title">{service.text}</div>
                      </div>
                    </button>
                  ))}
                </div>
                <button
                  className="back-to-services-button"
                  onClick={() => setShowSubMenu(null)}
                >
                  ← Back
                </button>
                <button
                  className="back-to-main-button"
                  onClick={() => {
                    setShowSubMenu(null);
                    setShowServices(null);
                    setIsFromSubMenu(false);
                  }}
                >
                  ← Back to Main Menu
                </button>
              </div>
            )}

            {/* Service Cards */}
            {showServices && !isTyping && (
              <div className="services-buttons-container">
                <div className="services-title">{getServiceTitle(showServices)}</div>
                <div className="service-buttons-grid">
                  {getServicesData().map((service) => (
                    <button
                      key={service.id}
                      className="service-button"
                      onClick={() => handleServiceClick(service)}
                    >
                      <span className="service-button-icon">
                        {getServiceIcon(showServices, service.id)}
                      </span>
                      <div className="service-button-content">
                        <div className="service-button-title">{service.title}</div>
                        <div className="service-button-desc">{service.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>

               
                {isFromSubMenu && (
                  <button
                    className="back-to-services-button"
                    onClick={() => {
                      if (showServices === 'marketing') {
                        // For Other Services flow
                        setShowServices(null);
                        setShowSubMenu('other-services');
                      } else if (showServices === 'staffing-edu') {
                        // For EdTech from Services menu
                        setShowServices(null);
                        setShowSubMenu('services');
                      } else if (showServices === 'staffing-pro' && isFromSubMenu) {
                        // For Professional Services from Services menu
                        setShowServices(null);
                        setShowSubMenu('services');
                      } else {
                        // For Services flow
                        setShowServices(null);
                        setShowSubMenu('services');
                      }
                    }}
                  >
                    ← Back to {showServices === 'marketing' ? 'Other Services' : 'Services'}
                  </button>
                )}

               
                <button
                  className="back-to-main-button"
                  onClick={() => {
                    setShowServices(null);
                    setShowSubMenu(null);
                    setIsFromSubMenu(false);
                  }}
                >
                  ← Back to Main Menu
                </button>
              </div>
            )}

           
            {showBackToServices && !isTyping && (
              <div className="services-buttons-container">
                <button
                  className="back-to-services-button"
                  onClick={() => {
                    setShowBackToServices(false);
                    setShowServices(currentServiceCategory);
                  }}
                >
                  ← Back to {getServiceTitle(currentServiceCategory)}
                </button>
                <button
                  className="back-to-main-button"
                  onClick={() => {
                    setShowBackToServices(false);
                    setShowServices(null);
                    setShowSubMenu(null);
                    setIsFromSubMenu(false);
                  }}
                >
                  ← Back to Main Menu
                </button>
              </div>
            )}

            {/* Common Questions */}
            {showQuestions && !isTyping && (
              <div className="services-buttons-container">
                <div className="services-title">Common Questions</div>
                <div className="questions-list">
                  {commonQuestions.map((question) => (
                    <button
                      key={question.id}
                      className="question-button"
                      onClick={() => handleQuestionClick(question)}
                    >
                      <div className="question-content">
                        <div className="question-text">{question.question}</div>
                        <div className="question-arrow">→</div>
                      </div>
                    </button>
                  ))}
                </div>
                <button
                  className="back-to-services-button"
                  onClick={() => setShowQuestions(false)}
                >
                  ← Back
                </button>
                <button
                  className="back-to-main-button"
                  onClick={() => {
                    setShowQuestions(false);
                    setIsFromSubMenu(false);
                  }}
                >
                  ← Back to Main Menu
                </button>
              </div>
            )}

          
            {showBackToQuestions && !isTyping && (
              <div className="services-buttons-container">
                <button
                  className="back-to-services-button"
                  onClick={() => {
                    setShowBackToQuestions(false);
                    setShowQuestions(true);
                  }}
                >
                  ← Back to Questions
                </button>
                <button
                  className="back-to-main-button"
                  onClick={() => {
                    setShowBackToQuestions(false);
                    setShowQuestions(false);
                    setIsFromSubMenu(false);
                  }}
                >
                  ← Back to Main Menu
                </button>
              </div>
            )}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="chatbot-typing">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="typing-text">ONAS Assistant is typing...</span>
              </div>
            )}

          
            {!isTyping && !showServices && !showSubMenu && !showQuestions && !showBackToServices && !showBackToQuestions && (
              <div className="chatbot-quick-replies">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    className="chatbot-quick-reply"
                    onClick={() => handleQuickReply(reply.type)}
                  >
                    <span className="quick-reply-icon">{reply.icon}</span>
                    {reply.text}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="chatbot-input-area">
            <div className="chatbot-input-wrapper">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                className="chatbot-input-field"
              />
              <button
                onClick={sendMessage}
                className="chatbot-send-btn"
                disabled={!inputText.trim()}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;