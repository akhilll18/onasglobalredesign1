import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ExpandMore, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import faqicon from '../../assets/images/faqsec/question.png';

// ── Arvee editorial palette ──
const ink = '#0B4C74';
const muted = '#647572';
const line = '#dfe8df';
const soft = '#ffffff';
const cream = '#ffffff';
const lime = '#baf58c';

const containerSx = {
  width: '100%',
  maxWidth: { xs: '100%', md: '1240px' },
  margin: '0 auto',
  padding: { xs: '0 1rem', md: '0 1.5rem' },
  boxSizing: 'border-box',
};

function Eyebrow({ children }) {
  return (
    <Typography
      sx={{
        color: '#0B4C74',
        fontSize: '.55rem',
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        fontWeight: 700,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {children}
    </Typography>
  );
}

const faqs = [
  { q: 'What ERP systems does ONAS Global specialize in?', a: 'We specialize in implementing and supporting major ERP platforms including SAP, Oracle Cloud, Salesforce, Microsoft Dynamics, Workday, and ServiceNow. Our team has certified experts in each system.' },
  { q: 'How do you handle ERP implementation projects?', a: 'We follow a structured implementation methodology including requirements analysis, system configuration, data migration, user training, and post-implementation support. Our approach minimizes disruption to your business operations.' },
  { q: 'Can you help migrate from legacy ERP systems to modern platforms?', a: 'Yes, we specialize in ERP modernization and migration projects. We help businesses transition from outdated systems to cloud-based ERP solutions with minimal downtime and maximum data integrity.' },
  { q: 'What industries do you serve with ERP solutions?', a: 'We serve multiple industries including manufacturing, healthcare, finance, retail, education, and professional services with industry-specific ERP configurations and best practices.' },
  { q: 'What does your digital transformation process involve?', a: 'Our digital transformation process includes assessment, strategy development, technology selection, implementation, and continuous optimization to help businesses leverage digital technologies for growth and efficiency.' },
  { q: 'How do you measure success in digital transformation projects?', a: 'We measure success through KPIs like operational efficiency, cost reduction, revenue growth, customer satisfaction, and digital adoption rates. We establish clear metrics before project initiation.' },
  { q: 'Do you provide ongoing support after digital transformation?', a: 'Yes, we offer comprehensive managed services including system monitoring, updates, security management, and continuous improvement services to ensure long-term success.' },
  { q: 'Can you help with legacy system modernization?', a: 'Absolutely. We specialize in modernizing legacy systems through cloud migration, API integration, and platform upgrades while preserving critical business logic and data.' },
  { q: 'What services are included in your managed IT offerings?', a: 'Our managed IT services include 24/7 monitoring, help desk support, cybersecurity management, cloud infrastructure management, backup and disaster recovery, and proactive maintenance.' },
  { q: 'How do you ensure security in managed IT operations?', a: 'We implement multi-layered security including firewalls, intrusion detection, endpoint protection, regular vulnerability assessments, compliance monitoring, and employee security training.' },
  { q: 'What is your response time for IT support requests?', a: 'We offer tiered SLAs with response times ranging from 15 minutes for critical issues to 4 hours for standard requests, with 24/7 availability for all support levels.' },
  { q: 'Can you manage hybrid IT environments?', a: 'Yes, we specialize in managing hybrid environments that combine on-premises infrastructure with cloud services, ensuring seamless integration and optimal performance.' },
  { q: 'What types of IT staffing do you offer?', a: 'We offer permanent placement, contract staffing, staff augmentation, project-based teams, executive search, and contract-to-hire solutions across all IT domains.' },
  { q: 'How do you vet IT professionals?', a: 'Our vetting process includes technical assessments, behavioral interviews, reference checks, background verification, and skill validation through practical tests and certifications.' },
  { q: 'What industries do you serve for staffing needs?', a: 'We serve banking & finance, healthcare, manufacturing, retail, technology, education, energy, and government sectors with industry-specific IT talent.' },
  { q: 'Do you offer remote staffing solutions?', a: 'Yes, we provide comprehensive remote staffing solutions with collaboration tools, performance tracking, and management support for distributed teams.' },
  { q: 'What cybersecurity services do you provide?', a: 'We offer security assessments, penetration testing, threat monitoring, incident response, compliance management, and security awareness training.' },
  { q: 'Do you offer custom software development?', a: 'Yes, we provide end-to-end custom software development including web applications, mobile apps, enterprise solutions, and integration services.' },
  { q: 'What data analytics and BI services do you offer?', a: 'We offer data warehouse design, business intelligence implementation, predictive analytics, data visualization, and AI/ML solutions for data-driven decision making.' },
  { q: 'Can you help with cloud migration and optimization?', a: 'We provide comprehensive cloud services including migration strategy, implementation, cost optimization, security configuration, and ongoing cloud management.' },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) =>
    setExpanded(isExpanded ? panel : false);

  return (
    <Box
      sx={{
        background: cream,
        color: ink,
        width: '100%',
        overflowX: 'hidden',
        '& h1, & h2, & h3': {
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 400,
          letterSpacing: 0,
        },
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          ...containerSx,
          paddingTop: { xs: '3.5rem', md: '5rem' },
          paddingBottom: { xs: '3.5rem', md: '5rem' },
        }}
      >
        {/* ── Two-column layout ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1.7fr' },
            gap: { xs: '2.5rem', md: 'clamp(2rem, 5vw, 4rem)' },
            alignItems: 'flex-start',
          }}
        >
          {/* ── LEFT — Heading ── */}
          <Box sx={{ position: { md: 'sticky' }, top: { md: '6rem' } }}>
            <Box
              component="img"
              src={faqicon}
              alt="FAQ"
              sx={{
                height: { xs: 45, md: 52 },
                marginBottom: '1rem',
                display: 'block',
              }}
            />

            <Typography
              component="h2"
              sx={{
                margin: '.7rem 0 1rem',
                font: "400 clamp(1.4rem, 2.4vw, 2rem)/1.1 Georgia, 'Times New Roman', serif",
                color: ink,
              }}
            >
              FAQs about ONAS — Design with ONAS
            </Typography>

            <Typography
              sx={{
                color: `${muted} !important`,
                fontFamily: "'Poppins', sans-serif",
                fontSize: '.72rem',
                lineHeight: 1.75,
                marginBottom: '1.6rem',
              }}
            >
              Everything you want to know — and maybe some things you didn&apos;t think to ask.
            </Typography>

            <Box
              component={RouterLink}
              to="/#explore-us"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '.5rem',
                padding: '.7rem 1.1rem',
                borderRadius: '2px',
                background: '#0B4C74',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '.62rem',
                fontFamily: "'Poppins', sans-serif",
                textDecoration: 'none',
                transition: 'background .2s ease',
                '&:hover': { background: '#000000', color: '#fff' },
              }}
            >
              Explore Services <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </Box>

          {/* ── RIGHT — Accordions ── */}
          <Box>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.6) }}
              >
                <Accordion
                  expanded={expanded === i}
                  onChange={handleChange(i)}
                  elevation={0}
                  disableGutters
                  sx={{
                    marginBottom: '.6rem',
                    background: '#fff',
                    border: `1px solid ${line}`,
                    borderRadius: '2px !important',
                    overflow: 'hidden',
                    '&:before': { display: 'none' },

                    // Expanded → dark navy background
                    '&.Mui-expanded': {
                      margin: `0 0 .6rem 0`,
                      background: '#0B4C74',
                      borderColor: '#0B4C74',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore sx={{ fontSize: 20 }} />}
                    sx={{
                      padding: { xs: '.6rem 1rem', md: '.7rem 1.4rem' },
                      '& .MuiAccordionSummary-content': { margin: '.6rem 0' },
                      '&.Mui-expanded': { minHeight: 'auto' },

                      '& .MuiSvgIcon-root': { color: '#ffffff' },
                      '&.Mui-expanded .MuiSvgIcon-root': { color: '#ffffff' },
                    }}
                  >
                    <Typography
                      sx={{
                        color: `${ink} !important`,
                        fontFamily: "Georgia, 'Times New Roman', serif",
                        fontSize: '.82rem',
                        lineHeight: 1.4,

                        // Expanded → white question text
                        '.Mui-expanded &': {
                          color: '#ffffff !important',
                        },
                      }}
                    >
                      {faq.q}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={{
                      padding: { xs: '.2rem 1rem 1.2rem', md: '.2rem 1.4rem 1.4rem' },
                      borderTop: `1px solid rgba(255,255,255,.15)`,
                      background: 'transparent',
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,.85) !important',
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '.68rem',
                        lineHeight: 1.8,
                      }}
                    >
                      {faq.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}