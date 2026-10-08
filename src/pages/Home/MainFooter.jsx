import React from 'react';
import { Box, Typography, Grid, Link as MuiLink, Container, Stack, alpha } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';

const FooterLogo = '/images/footerlogo.png';

const NAV_LINKS = [
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
          { label: 'GRC', path: '/how-we-help/digital-transformation/grc' },
          { label: 'IT Asset Management', path: '/how-we-help/digital-transformation/it-asset-management' },
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
  {
    label: 'Solutions',
    path: '/solutions',
    children: [
      { category: 'Digital Reporting Requirements (DRR)', items: [
        { label: 'DRR', path: '/solutions/drr/drr' },
        { label: 'e-Invoicing', path: '/solutions/drr/e-invoicing' },
        { label: 'Invoice Reporting', path: '/solutions/drr/invoice-reporting' },
        { label: 'ViDA', path: '/solutions/drr/vida' },
        { label: 'e-Waybill', path: '/solutions/drr/e-waybill' },
      ]},
      { category: 'Reporting', items: [
        { label: 'SAF-T', path: '/solutions/reporting/saf-t' },
        { label: 'VAT Return', path: '/solutions/reporting/vat-return' },
        { label: 'Country by Country reports', path: '/solutions/reporting/cbcr' },
        { label: 'Intrastat Reports', path: '/solutions/reporting/intrastat' },
      ]},
      { category: 'Automation', items: [
        { label: 'AP Automation', path: '/solutions/automation/ap-automation' },
        { label: 'e-Banking', path: '/solutions/automation/e-banking' },
        { label: 'Reconciliation', path: '/solutions/automation/reconciliation' },
      ]},
      { category: 'Custom Solutions', items: [
        { label: 'Custom Software Development', path: '/solutions/automation/custom-software' },
        { label: 'Enterprise Solutions', path: '/solutions/automation/enterprise-solutions' },
        { label: 'AI Based Process Automation', path: '/solutions/automation/ai-process-automation' },
        { label: 'Offshore Website Development', path: '/solutions/automation/offshore-web-dev' },
        { label: 'Ecommerce Development', path: '/solutions/automation/ecommerce-dev' },
        { label: 'DevOps', path: '/solutions/automation/devops' },
      ]},
      { category: 'Digital Marketing', items: [
        { label: 'SEO', path: '/solutions/digital-marketing/seo' },
        { label: 'PPC', path: '/solutions/digital-marketing/ppc' },
        { label: 'SMM', path: '/solutions/digital-marketing/smm' },
        { label: 'SMO', path: '/solutions/digital-marketing/smo' },
        { label: 'Content Writing', path: '/solutions/digital-marketing/content-writing' },
      ]},
      { category: 'App Development', items: [
        { label: 'Mobile App', path: '/solutions/app-development/mobile-app' },
        { label: 'Web App', path: '/solutions/app-development/web-app' },
      ]},
    ],
  },
  {
    label: 'Industries',
    path: '/who-we-help',
    children: [
      { category: 'Fiscal Services', items: [
        { label: 'Banking', path: '/who-we-help/industries#banking' },
        { label: 'Insurance', path: '/who-we-help/industries#insurance' },
      ]},
      { category: 'Health & Life Sciences', items: [
        { label: 'Life Sciences', path: '/who-we-help/industries#life-sciences' },
        { label: 'Healthcare', path: '/who-we-help/industries#healthcare' },
      ]},
      { category: 'Technology & Communications', items: [
        { label: 'Information Technology', path: '/who-we-help/industries#information-technology' },
        { label: 'Hi-Tech', path: '/who-we-help/industries#hi-tech' },
        { label: 'Communication, Media & Info Services', path: '/who-we-help/industries#communication-media-info' },
      ]},
      { category: 'Energy & Natural Resources', items: [
        { label: 'Oil, Gas & Energy', path: '/who-we-help/industries#oil-gas-energy' },
        { label: 'Energy, Resources & Utilities', path: '/who-we-help/industries#energy-resources-utilities' },
        { label: 'Natural Resources', path: '/who-we-help/industries#natural-resources' },
      ]},
      { category: 'Government & Education', items: [
        { label: 'Public Services', path: '/who-we-help/industries#public-services' },
        { label: 'Education', path: '/who-we-help/industries#education' },
      ]},
      { category: 'Travel & Logistics', items: [
        { label: 'Travel & Logistics', path: '/who-we-help/industries#travel-logistics' },
      ]},
      { category: 'Consumer & Retail', items: [
        { label: 'Consumer Electronics & Packaged Goods', path: '/who-we-help/industries#consumer-electronics-packaged-goods' },
        { label: 'Retail', path: '/who-we-help/industries#retail' },
      ]},
      { category: 'Industry & Professional Services', items: [
        { label: 'Manufacturing', path: '/who-we-help/industries#manufacturing' },
        { label: 'Professional Services', path: '/who-we-help/industries#professional-services' },
      ]},
    ],
  },
  {
    label: 'Why ONAS',
    path: '/why-onas',
    children: [
      { category: null, items: [
        { label: 'Who we are', path: '/why-onas/about-us/' },
        { label: 'Company', path: '/why-onas/company/' },
        { label: 'Mission & Principles', path: '/why-onas/mission-principles' },
        { label: 'Leadership', path: '/why-onas/leadership/' },
        { label: 'Culture & Benefits', path: '/why-onas/culture-benefits' },
        { label: 'Employees', path: '/why-onas/employees' },
        { label: 'Investors', path: '/why-onas/investors/' },
        { label: 'Life @ ONAS', path: '/why-onas/life' },
      ]},
    ],
  },
  {
    label: 'Resources',
    path: '/resources',
    children: [
      { category: null, items: [
        { label: 'Media', path: '/resources/media' },
        { label: 'Ideas That Matter', path: '/resources/ideas' },
        { label: 'Awards & Recognition', path: '/resources/awards' },
        { label: 'Blogs', path: '/resources/blogs' },
        { label: 'Contact', path: '/resources/contact-us/' },
        { label: 'Careers', path: '/resources/careers/' },
        { label: 'Case Studies', path: '/resources/case-studies/' },
        { label: 'News Room', path: '/resources/newsroom/' },
      ]},
    ],
  },
  {
    label: 'Staffing & EDTech',
    path: '/staffing',
    children: [
      { category: 'Submit a Vacancy', items: [
        { label: 'Request Call Back', path: '/staffing/submit-a-vacancy/request-a-call-back/' },
      ]},
      { category: 'IT Consulting', items: [
        { label: 'Banking Finance Sales', path: '/staffing/it-consulting#banking-finance' },
        { label: 'Finance & Accounting', path: '/staffing/it-consulting#finance-accounting' },
        { label: 'HR & Support', path: '/staffing/it-consulting#hr-support' },
        { label: 'Legal & Compliance', path: '/staffing/it-consulting#legal-compliance' },
        { label: 'Pharma, Healthcare & Life Sciences', path: '/staffing/it-consulting#pharma-healthcare-lifesciences' },
        { label: 'Sales & Trade Marketing', path: '/staffing/it-consulting#sales-trade-marketing' },
        { label: 'Wholesale & Retail', path: '/staffing/it-consulting#wholesale-retail' },
      ]},
      { category: 'Professional Services', items: [
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
      ]},
      { category: 'AI & EdTech Services', items: [
        { label: 'LLM Development Services', path: '/staffing/ai-edtech/llm-development-services' },
        { label: 'Generative AI Development', path: '/staffing/ai-edtech/generative-ai-development' },
        { label: 'Machine Learning Consulting', path: '/staffing/ai-edtech/machine-learning-consulting' },
        { label: 'AI Chatbot Development', path: '/staffing/ai-edtech/ai-chatbot-development' },
        { label: 'AI Consulting Services', path: '/staffing/ai-edtech/ai-consulting-services' },
      ]},
    ],
  },
];

const getNav = (label) => NAV_LINKS.find((n) => n.label === label);

const LinkList = ({ items }) => (
  <Stack spacing={0.3} sx={{ mt: 0.5 }}>
    {items.map((item, idx) => {
      const isExternal = item.path?.startsWith('http');
      return (
        <MuiLink
          key={`${item.label}-${idx}`}
          component={isExternal ? 'a' : RouterLink}
          {...(isExternal
            ? { href: item.path, target: '_blank', rel: 'noopener noreferrer' }
            : { to: item.path })}
          underline="none"
          sx={{
            color: alpha('#fff', 0.8),
            fontSize: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            py: 0.2,
            transition: 'all 0.2s ease',
            '&:hover': { color: '#64B5F6', transform: 'translateX(4px)' },
          }}
        >
          <ChevronRightIcon sx={{ fontSize: 10, mr: 0.3, opacity: 0.7 }} />
          {item.label}
        </MuiLink>
      );
    })}
  </Stack>
);

const ColumnHeading = ({ children, mt = 0 }) => (
  <Typography
    sx={{
      mb: 1.2,
      mt,
      fontWeight: 700,
      color: 'white',
      fontSize: '0.55rem',
      pb: 0.5,
      display: 'inline-block',
      borderBottom: `1px solid ${alpha('#fff', 0.25)}`,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
    }}
  >
    {children}
  </Typography>
);

const SubHeading = ({ children, mt = 1.2 }) => (
  <Typography
    sx={{
      color: 'white',
      fontSize: '0.45rem',
      fontWeight: 700,
      letterSpacing: '.05em',
      mb: 0.2,
      mt,
      pb: 0.3,
      display: 'inline-block',
      borderBottom: `1px solid ${alpha('#fff', 0.25)}`,
      textTransform: 'uppercase',
    }}
  >
    {children}
  </Typography>
);

export default function MainFooter() {
  const services = getNav('Services');
  const solutions = getNav('Solutions');
  const industries = getNav('Industries');
  const whyOnas = getNav('Why ONAS');
  const resources = getNav('Resources');
  const staffing = getNav('Staffing & EDTech');

  const servicesERP = services?.children?.find((c) => c.category === 'AI ERP & CRM SERVICES');
  const servicesDigital = services?.children?.find((c) => c.category === 'Digital Transformation');
  const servicesManaged = services?.children?.find((c) => c.category === 'Managed IT and Operations');

  const whyOnasItems = whyOnas?.children?.[0]?.items || [];
  const resourcesItems = resources?.children?.[0]?.items || [];

  const submitVacancy = staffing?.children?.find((c) => c.category === 'Submit a Vacancy');
  const itConsulting = staffing?.children?.find((c) => c.category === 'IT Consulting');
  const professionalServices = staffing?.children?.find((c) => c.category === 'Professional Services');
  const aiEdTech = staffing?.children?.find((c) => c.category === 'AI & EdTech Services');

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        bgcolor: '#0B4C74',
        color: 'white',
        pt: { xs: 5, md: 5 },
        pb: { xs: 4, md: 3 },
        mt: 'auto',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #2E8BC0 0%, #64B5F6 100%)',
        },
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: '100%',
          px: { xs: 2, md: 4, lg: 6 },
          boxSizing: 'border-box',
        }}
      >
        {/* ══════════ ROW 1 — FLEX LAYOUT (logo 18%, others 14%) ══════════ */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            gap: { xs: 2, md: 1.5 },
            alignItems: 'flex-start',
            mb: { xs: 3, md: 4 },
          }}
        >
          {/* LOGO — 18% width */}
          <Box sx={{ flex: { xs: '1 1 100%', sm: '0 0 45%', md: '0 0 18%' }, minWidth: 0 }}>
            <Box
              sx={{
                border: `1px solid ${alpha('#fff', 0.18)}`,
                borderRadius: '4px',
                padding: '0.7rem 0.8rem',
                background: '#ffffff',
                color: '#0B4C74',
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src={FooterLogo}
                alt="ONAS Logo"
                sx={{
                  width: '100%',
                  maxWidth: '140px',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  mb: 0.8,
                }}
              />

              <Typography
                sx={{
                  color: alpha('#0B4C74', 0.85),
                  lineHeight: 1.4,
                  fontSize: '0.44rem',
                  mb: 0.8,
                }}
              >
                A full-spectrum technology &amp; talent partner delivering AI-driven ERP &amp; CRM, digital transformation, and managed IT worldwide.
              </Typography>

              <Typography
                sx={{
                  fontWeight: 700,
                  color: '#0B4C74',
                  fontSize: '0.48rem',
                  pb: 0.3,
                  display: 'inline-block',
                  borderBottom: `1px solid ${alpha('#0B4C74', 0.25)}`,
                  textTransform: 'uppercase',
                  letterSpacing: '.06em',
                  mb: 0.5,
                }}
              >
                Connect With Us
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  '& svg': { fontSize: '12px !important' },
                  '& a': {
                    fontSize: '12px !important',
                    color: '#0B4C74',
                    transition: 'color .2s ease',
                    '&:hover': { color: '#000000' },
                  },
                  '& a:hover svg': { color: '#000000' },
                }}
              >
                <SocialIcons color="#0B4C74" />
              </Box>
            </Box>
          </Box>

          {/* ERP & CRM — 14% */}
          <Box sx={{ flex: { xs: '1 1 100%', sm: '0 0 45%', md: '0 0 14%' }, minWidth: 0 }}>
            <ColumnHeading>ERP &amp; CRM</ColumnHeading>
            <LinkList items={servicesERP?.items || []} />
          </Box>

          {/* DIGITAL TRANSFORMATION — 14% */}
          <Box sx={{ flex: { xs: '1 1 100%', sm: '0 0 45%', md: '0 0 14%' }, minWidth: 0 }}>
            <ColumnHeading>Digital Transformation</ColumnHeading>
            <LinkList items={servicesDigital?.items || []} />
          </Box>

          {/* MANAGED IT — 14% */}
          <Box sx={{ flex: { xs: '1 1 100%', sm: '0 0 45%', md: '0 0 14%' }, minWidth: 0 }}>
            <ColumnHeading>Managed IT</ColumnHeading>
            <LinkList items={servicesManaged?.items || []} />
          </Box>

          {/* SOLUTIONS — 14% */}
          <Box sx={{ flex: { xs: '1 1 100%', sm: '0 0 45%', md: '0 0 14%' }, minWidth: 0 }}>
            <ColumnHeading>Solutions</ColumnHeading>
            <LinkList
              items={[
                ...(solutions?.children?.find((c) => c.category === 'Digital Reporting Requirements (DRR)')?.items || []),
                ...(solutions?.children?.find((c) => c.category === 'Reporting')?.items || []),
                ...(solutions?.children?.find((c) => c.category === 'Automation')?.items || []),
              ]}
            />
          </Box>

          {/* INDUSTRIES — 14% */}
          <Box sx={{ flex: { xs: '1 1 100%', sm: '0 0 45%', md: '0 0 14%' }, minWidth: 0 }}>
            <ColumnHeading>Industries</ColumnHeading>
            <LinkList
              items={[
                ...(industries?.children?.find((c) => c.category === 'Fiscal Services')?.items || []),
                ...(industries?.children?.find((c) => c.category === 'Health & Life Sciences')?.items || []),
                ...(industries?.children?.find((c) => c.category === 'Technology & Communications')?.items || []),
                ...(industries?.children?.find((c) => c.category === 'Energy & Natural Resources')?.items || []),
                ...(industries?.children?.find((c) => c.category === 'Government & Education')?.items || []),
              ]}
            />
          </Box>
        </Box>

        {/* ══════════ ROW 2 — KEEP AS GRID ══════════ */}
        <Grid container spacing={{ xs: 2, md: 2 }} alignItems="flex-start">
          <Grid item xs={6} sm={3} md={2}>
            <ColumnHeading>Why ONAS</ColumnHeading>
            <LinkList items={whyOnasItems} />
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <ColumnHeading>Resources</ColumnHeading>
            <LinkList items={resourcesItems} />
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <ColumnHeading>Staffing &amp; EdTech</ColumnHeading>

            <LinkList items={submitVacancy?.items || []} />

            <SubHeading>IT Consulting</SubHeading>
            <LinkList items={itConsulting?.items || []} />
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <ColumnHeading>Professional Services</ColumnHeading>
            <LinkList items={professionalServices?.items || []} />
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <ColumnHeading>AI &amp; EdTech</ColumnHeading>
            <LinkList items={aiEdTech?.items || []} />

            <SubHeading>Corporate Training</SubHeading>

            <SubHeading mt={0.3}>Technologies</SubHeading>
            <LinkList
              items={[
                { label: 'Angular', path: '/staffing/ai-edtech/corporate-training/angular' },
                { label: '.NET', path: '/staffing/ai-edtech/corporate-training/dotnet' },
                { label: 'Node.js', path: '/staffing/ai-edtech/corporate-training/nodejs' },
                { label: 'Flutter', path: '/staffing/ai-edtech/corporate-training/flutter' },
                { label: 'React Native', path: '/staffing/ai-edtech/corporate-training/react-native' },
                { label: 'Vue', path: '/staffing/ai-edtech/corporate-training/vue' },
                { label: 'React', path: '/staffing/ai-edtech/corporate-training/react' },
              ]}
            />

            <SubHeading mt={1}>Tech Services</SubHeading>
            <LinkList
              items={[
                { label: 'Software Development', path: '/staffing/ai-edtech/corporate-training/software-development' },
                { label: 'Backend Development', path: '/staffing/ai-edtech/corporate-training/backend-development' },
                { label: 'Enterprise Development', path: '/staffing/ai-edtech/corporate-training/enterprise-development' },
                { label: 'Mobile App Development', path: '/staffing/ai-edtech/corporate-training/mobile-app-development' },
                { label: 'Blockchain', path: '/staffing/ai-edtech/corporate-training/blockchain' },
              ]}
            />
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <ColumnHeading>
              <PublicIcon sx={{ mr: 0.4, fontSize: 12, verticalAlign: 'middle' }} />
              Contact
            </ColumnHeading>

            <Stack spacing={1.5} sx={{ mt: 0.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <EmailIcon sx={{ color: '#64B5F6', mr: 0.6, mt: 0.2, fontSize: 12 }} />
                <MuiLink
                  href="mailto:sales@onasglobal.com"
                  sx={{
                    color: 'white',
                    fontWeight: 500,
                    fontSize: '0.5rem',
                    textDecoration: 'none',
                    wordBreak: 'break-all',
                    '&:hover': { color: '#64B5F6' },
                  }}
                >
                  sales@onasglobal.com
                </MuiLink>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <PhoneIcon sx={{ color: '#64B5F6', mr: 0.6, mt: 0.2, fontSize: 12 }} />
                <Stack spacing={0.1}>
                  <MuiLink href="tel:+919281506440" sx={{ color: 'white', fontWeight: 500, fontSize: '0.5rem', textDecoration: 'none', display: 'block', '&:hover': { color: '#64B5F6' } }}>
                    91-928 150 6440
                  </MuiLink>
                  <MuiLink href="tel:+919281506441" sx={{ color: 'white', fontWeight: 500, fontSize: '0.5rem', textDecoration: 'none', display: 'block', '&:hover': { color: '#64B5F6' } }}>
                    91-928 150 6441
                  </MuiLink>
                  <MuiLink href="tel:+16073262406" sx={{ color: 'white', fontWeight: 500, fontSize: '0.5rem', textDecoration: 'none', display: 'block', '&:hover': { color: '#64B5F6' } }}>
                    +1 607-326-2406
                  </MuiLink>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}