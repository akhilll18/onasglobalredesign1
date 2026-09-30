import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Check } from '@mui/icons-material';
import { NAV_LINKS } from '../../utils/constants';

// Images
import BankingImg from '../../assets/images/staffing/itconsulting/banking.png';
import FinanceImg from '../../assets/images/staffing/itconsulting/finance.png';
import HRImg from '../../assets/images/staffing/itconsulting/hr.png';
import LegalImg from '../../assets/images/staffing/itconsulting/legal.png';
import PharmaImg from '../../assets/images/staffing/itconsulting/pharma.png';
import SalesImg from '../../assets/images/staffing/itconsulting/sales.png';
import RetailImg from '../../assets/images/staffing/itconsulting/retail.png';

// Shared design
import {
  PageShell,
  Section,
  SectionHeading,
  Body,
  cardSx,
  ink, muted, line,
} from '../../theme/theme';

// Section data
const itConsultingSections = [
  {
    id: 'banking-finance',
    title: 'Banking Finance Sales',
    description:
      'As specialists in the BFSI sector, we understand the critical demand for compliant, skilled talent. We leverage innovative sourcing solutions and a vast pool of pre-screened, audit-ready candidates to fill crucial Legal, Compliance, Finance, and Sales roles efficiently. Partner with us to secure professional talent that drives growth while mitigating organizational risk.',
    image: BankingImg,
    items: ['Comprehensive recruiting solutions', 'Deep market insights', 'Specialized talent management'],
  },
  {
    id: 'finance-accounting',
    title: 'Finance & Accounting',
    description:
      'Stop searching, start leading. We connect you with a curated portfolio of in-demand Finance and Accounting roles at top-tier employers. Leverage our specialized career support and industry access to ensure your next placement is a strategic step toward building a rewarding and high-trajectory career.',
    image: FinanceImg,
    items: ['Wide variety of finance roles', 'Career guidance and mentoring', 'Access to top employers'],
  },
  {
    id: 'hr-support',
    title: 'HR & Support',
    description:
      'We help fill crucial roles in Legal, Admin, Office, Surveillance, Drivers, and more.',
    image: HRImg,
    items: ['HR strategy and recruitment', 'Admin and office staffing', 'Specialized talent management'],
  },
  {
    id: 'legal-compliance',
    title: 'Legal & Compliance',
    description:
      'A Partner for talent in legal & compliance roles. We help fill crucial roles with professional talent efficiently and effectively.',
    image: LegalImg,
    items: ['Regulatory compliance staffing', 'Legal role specialization', 'Audit-ready talent solutions'],
  },
  {
    id: 'pharma-healthcare-lifesciences',
    title: 'Pharma, Healthcare & Life Sciences',
    description:
      'A Partner for talent in pharma, healthcare, and lifesciences. Access pre-screened candidates and specialized recruiting solutions.',
    image: PharmaImg,
    items: ['Healthcare staffing', 'Pharma recruitment solutions', 'Life sciences talent pool'],
  },
  {
    id: 'sales-trade-marketing',
    title: 'Sales & Trade Marketing',
    description:
      'A partner for talent in sales & trade marketing roles. Fill crucial roles efficiently with professional and pre-screened candidates.',
    image: SalesImg,
    items: ['Sales and marketing recruitment', 'Trade marketing specialists', 'Market insights and analytics'],
  },
  {
    id: 'wholesale-retail',
    title: 'Wholesale & Retail',
    description:
      'A Partner for talent in wholesale & retail. Leverage our global footprint and innovative recruiting processes to fill key positions.',
    image: RetailImg,
    items: ['Retail and wholesale talent', 'Pre-screened professionals', 'Customizable recruitment solutions'],
  },
];

export default function ITConsulting() {
  // Get menu items from NAV_LINKS (kept for future use)
  const menuItems =
    NAV_LINKS.find((link) => link.label === 'Staffing')
      ?.children.find((cat) => cat.category === 'IT Consulting')
      ?.items.map((item) => ({
        label: item.label,
        path: item.path.includes('#') ? `#${item.path.split('#')[1]}` : item.path,
      })) || [];

  return (
    <PageShell>
      {/* ── Page Title ── */}
      <Section>
        <Box sx={{ textAlign: 'center', mt: { xs: '3rem', md: '5rem' } }}>
          <SectionHeading sx={{ margin: '.7rem auto 1rem', maxWidth: 800 }}>
            IT Consulting
          </SectionHeading>
          <Body sx={{ maxWidth: 700, margin: '0 auto' }}>
            Delivering workforce and IT solutions tailored to help businesses adapt, scale, and
            succeed in a fast-changing world.
          </Body>
        </Box>
      </Section>

      {/* ── Card Grid ── */}
      <Section>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '1.2rem', md: '1.4rem' },
            alignItems: 'stretch',
          }}
        >
          {itConsultingSections.map((section, i) => (
            <motion.div
              key={i}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box sx={{ ...cardSx, padding: 0, overflow: 'hidden' }}>
                {/* Image on top */}
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 180, sm: 200, md: 200 },
                    overflow: 'hidden',
                    borderBottom: `1px solid ${line}`,
                  }}
                >
                  <Box
                    component="img"
                    src={section.image}
                    alt={section.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </Box>

                {/* Content below */}
                <Box
                  sx={{
                    padding: { xs: '1.3rem 1.2rem', md: '1.5rem 1.4rem' },
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      margin: '0 0 .6rem',
                      font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif",
                      color: ink,
                      minHeight: '2.6rem',
                    }}
                  >
                    {section.title}
                  </Typography>

                  <Body sx={{ marginBottom: '1rem', flexGrow: 1, fontSize: '.66rem' }}>
                    {section.description}
                  </Body>

                  {/* Feature list */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
                    {section.items.map((item, idx) => (
                      <Typography
                        key={idx}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          color: `${ink} !important`,
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: '.62rem',
                          lineHeight: 1.6,
                        }}
                      >
                        <Check sx={{ color: '#5e987f', fontSize: 13, marginRight: '.4rem', marginTop: '2px', flexShrink: 0 }} />
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>
    </PageShell>
  );
}