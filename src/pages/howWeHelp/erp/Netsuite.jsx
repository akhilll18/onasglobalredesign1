import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowForward } from '@mui/icons-material';
import {
  Server,
  Users,
  Link,
  Wrench,
  Headphones,
  BarChart3,
  Compass,
  Settings,
  Cloud,
  BookOpen,
  Layers,
  Zap,
  GitBranch,
  Database,
} from 'lucide-react';

// Shared design
import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  SubHeading,
  Body,
  LimeButton,
  cardSx,
  containerSx,
  heroHeadingSx,
  ink, muted, line, soft, lime,
} from '../../../theme/theme';

// Images
import Image1 from '../../../assets/images/howWeHelp/ERP/Netsuite/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/ERP/Netsuite/img2.png';
import Image3 from '../../../assets/images/howWeHelp/ERP/Netsuite/img3.png';
import Image4 from '../../../assets/images/howWeHelp/ERP/Netsuite/img4.png';

// 👇 same navy as the top navbar menu items
const NAVY = '#0B4C74';

const NetSuite = () => {
  const slides = [Image1, Image2, Image3, Image4];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const netSuiteKeywords = [
    'NetSuite consulting services',
    'NetSuite implementation partner',
    'NetSuite ERP implementation',
    'NetSuite consulting company',
    'NetSuite implementation services',
    'NetSuite ERP consulting',
    'Oracle NetSuite services',
    'NetSuite customization services',
    'NetSuite integration services',
    'NetSuite managed services',
    'NetSuite support services',
    'NetSuite cloud integration',
  ].join(', ');

  const offerings = [
    { Icon: Server, title: 'NetSuite ERP Implementation Services', text: 'Streamline core business operations—finance, procurement, inventory, and billing—through tailored ERP configurations.' },
    { Icon: Users, title: 'NetSuite CRM Services', text: 'Enable lead-to-cash journeys with customized NetSuite CRM modules for sales automation, customer data, and engagement tracking.' },
    { Icon: Link, title: 'NetSuite Integration Services', text: 'Connect NetSuite with HRMS, eCommerce, logistics, and third-party systems through scalable API and middleware integrations.' },
    { Icon: Wrench, title: 'NetSuite Customization & SuiteFlex', text: 'Use SuiteScript, SuiteBuilder, and SuiteFlow to build industry-specific workflows, reports, and UI experiences.' },
    { Icon: Headphones, title: 'NetSuite Support & Managed Services', text: '24/7/365 proactive monitoring, release management, bug resolution, and NetSuite admin support—on SLA-backed models.' },
    { Icon: BarChart3, title: 'NetSuite Analytics & Dashboards', text: 'Design interactive dashboards, KPI reports, and BI insights across finance, sales, and inventory using SuiteAnalytics.' },
  ];

  const endToEnd = [
    { Icon: Compass, title: 'Consult & Map', text: 'Define ERP goals, business processes, and role-based requirements to design the right NetSuite deployment plan.' },
    { Icon: Settings, title: 'Configure & Deploy', text: 'Customize NetSuite modules, roles, fields, and workflows, ensuring smooth go-live with minimal disruption.' },
    { Icon: Cloud, title: 'Integrate & Automate', text: 'Develop bi-directional integrations with third-party systems, automate order-to-cash, and enable real-time data sync.' },
    { Icon: BookOpen, title: 'Train & Support', text: 'Drive adoption through tailored training, knowledge transfer, and dedicated go-live assistance.' },
    { Icon: Layers, title: 'Monitor & Optimize', text: 'Ensure continuous improvements through monthly audits, enhancement releases, and performance tuning.' },
  ];

  const valueDelivery = [
    { Icon: GitBranch, title: 'Business-Aligned Architecture', text: 'We build configurations and flows around your industry needs, not just the system defaults.' },
    { Icon: Zap, title: 'Faster Go-Lives', text: 'Accelerated sprints, sandbox validations, and user testing for seamless transitions.' },
    { Icon: Database, title: 'Low-Code & No-Code Extensions', text: 'Enhance functionality with SuiteBuilder, SuiteFlow, and SuiteAnalytics, without heavy development overhead.' },
    { Icon: Cloud, title: 'Hybrid Delivery Models', text: 'Offshore, onshore, and blended support models to suit your project scope and budget.' },
  ];

  const whyMatters = [
    'Centralizes ERP, CRM, Finance, and Supply Chain into a unified cloud platform',
    'Improves operational agility with real-time visibility across departments',
    'Reduces IT overhead through automation and managed services',
    'Enhances financial accuracy and audit-readiness with custom reporting',
    'Scales with you—modular, cloud-native, and built for mid-size to enterprise firms',
  ];

  return (
    <PageShell>
      <Helmet>
        <title>NetSuite Consulting Services | AI-Powered NetSuite ERP Implementation Partner | ONAS Global</title>
        <meta name="description" content="ONAS provides expert NetSuite consulting services with AI integration, ERP implementation, CRM setup, cloud integration, and managed services. Certified NetSuite partner serving global enterprises." />
        <meta name="keywords" content={netSuiteKeywords} />
        <link rel="canonical" href="https://www.onasglobal.com/netsuite-consulting-services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.onasglobal.com/netsuite-consulting-services" />
        <meta property="og:title" content="NetSuite Consulting Services | AI-Powered NetSuite ERP Implementation Partner | ONAS Global" />
        <meta property="og:description" content="Expert NetSuite consulting services with AI integration, ERP implementation, CRM setup, cloud integration, and managed services." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NetSuite Consulting Services | AI-Powered NetSuite ERP Implementation Partner | ONAS Global" />
        <meta name="twitter:description" content="Expert NetSuite consulting services with AI integration, ERP implementation, CRM setup, cloud integration, and managed services." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B4C74" />
      </Helmet>

      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 480, md: 560 },
          padding: { xs: '5rem 1rem 3rem', md: '7rem 2.5rem 4rem' },
          overflow: 'hidden',
          background: ink,
          isolation: 'isolate',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: -2,
            overflow: 'hidden',
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(11,76,116,.94) 0%, rgba(11,76,116,.72) 55%, rgba(11,76,116,.85) 100%)',
              zIndex: 1,
            },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${slides[currentSlide]})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            />
          </AnimatePresence>
        </Box>

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Eyebrow sx={{ color: lime }}>Oracle NetSuite</Eyebrow>
          <Typography component="h1" sx={{ ...heroHeadingSx, marginLeft: 'auto', marginRight: 'auto' }}>
            Modern NetSuite Consulting Services for Agile Enterprises
          </Typography>
          <Body sx={{ color: 'rgba(255,255,255,.82) !important', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto', marginBottom: '1.8rem' }}>
            Supercharge growth with NetSuite consulting services tailored to your workflows. From ERP implementation and CRM setup to cloud integration, we deliver agility, insight, and scalability - without the overhead.
          </Body>
          <LimeButton href="/resources/contact-us">
            Contact Us <ArrowForward sx={{ fontSize: 14 }} />
          </LimeButton>
        </Container>
      </Box>

      {/* Scalable Deployments — white bg */}
      <Section sx={{ background: '#ffffff' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: { xs: '2rem', md: '2rem' },
            alignItems: 'stretch',
          }}
        >
          <Box>
            <Eyebrow>Scalable Deployments</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1.2rem', color: NAVY }}>
              Scalable NetSuite Deployments That Drive Efficiency
            </SectionHeading>
            <Body sx={{ marginBottom: '.8rem', fontSize: '.72rem', lineHeight: 1.8 }}>
              As a certified NetSuite implementation partner, we offer complete support—from ERP setup to system tuning. Our experts specialize in aligning NetSuite ERP, CRM, Financials, and Supply Chain modules with your business goals, shortening time-to-value.
            </Body>
            <Body sx={{ margin: 0, fontSize: '.72rem', lineHeight: 1.8 }}>
              Every deployment is mapped to operational KPIs, so your teams gain clarity, speed, and measurable results from day one. We reduce system sprawl, automate repetitive tasks, and provide actionable insights across departments through a unified NetSuite cloud platform.
            </Body>
          </Box>

          <Box
            sx={{
              border: `1px solid ${line}`,
              borderRadius: '2px',
              overflow: 'hidden',
              background: '#fff',
              minHeight: { xs: 280, sm: 380, md: 440 },
            }}
          >
            <Box
              component="img"
              src={Image2}
              alt="Scalable NetSuite deployments"
              sx={{ width: '100%', height: '100%', minHeight: 'inherit', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Box>
      </Section>

      {/* Core Services — white bg */}
      <Section sx={{ background: '#ffffff' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Core Services</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>NetSuite Core Services</SectionHeading>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '1rem', md: '1.2rem' },
            alignItems: 'stretch',
          }}
        >
          {offerings.map((item, i) => {
            const { Icon } = item;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{ display: 'flex', width: '100%' }}
              >
                <Box sx={cardSx}>
                  <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, marginBottom: '1rem', flexShrink: 0 }}>
                    <Icon size={20} color="#0B4C74" />
                  </Box>
                  <SubHeading sx={{ marginBottom: '.5rem', color: NAVY }}>{item.title}</SubHeading>
                  <Body sx={{ flexGrow: 1 }}>{item.text}</Body>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Section>

      {/* End-to-End — white bg */}
      <Section sx={{ background: '#ffffff' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>End-to-End</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>Our End-to-End NetSuite Services</SectionHeading>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '1rem', md: '1.2rem' },
            alignItems: 'stretch',
          }}
        >
          {endToEnd.map((item, i) => {
            const { Icon } = item;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{ display: 'flex', width: '100%' }}
              >
                <Box sx={cardSx}>
                  <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, marginBottom: '1rem', flexShrink: 0 }}>
                    <Icon size={20} color="#0B4C74" />
                  </Box>
                  <SubHeading sx={{ marginBottom: '.5rem', color: NAVY }}>{item.title}</SubHeading>
                  <Body sx={{ flexGrow: 1 }}>{item.text}</Body>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Section>

      {/* Delivery — white bg */}
      <Section sx={{ background: '#ffffff' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Delivery</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>How We Deliver NetSuite Success</SectionHeading>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: { xs: '2rem', md: '2rem' },
            alignItems: 'stretch',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: { xs: '1rem', md: '1.2rem' },
              alignItems: 'stretch',
            }}
          >
            {valueDelivery.map((item, i) => {
              const { Icon } = item;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  style={{ display: 'flex', width: '100%' }}
                >
                  <Box sx={cardSx}>
                    <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, marginBottom: '1rem', flexShrink: 0 }}>
                      <Icon size={20} color="#0B4C74" />
                    </Box>
                    <SubHeading sx={{ marginBottom: '.5rem', color: NAVY }}>{item.title}</SubHeading>
                    <Body sx={{ flexGrow: 1 }}>{item.text}</Body>
                  </Box>
                </motion.div>
              );
            })}
          </Box>

          <Box
            sx={{
              border: `1px solid ${line}`,
              borderRadius: '2px',
              overflow: 'hidden',
              background: '#fff',
              minHeight: { xs: 280, sm: 420, md: 480 },
            }}
          >
            <Box
              component="img"
              src={Image3}
              alt="NetSuite success delivery"
              sx={{ width: '100%', height: '100%', minHeight: 'inherit', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Box>
      </Section>

      {/* Why It Matters — white bg */}
      <Section sx={{ background: '#ffffff' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Why It Matters</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>Why NetSuite Consulting Services Matters</SectionHeading>
        </Box>
        <Box sx={{ maxWidth: 900, margin: '0 auto', background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: { xs: '1.8rem 1.4rem', md: '2.2rem 2.4rem' } }}>
          {whyMatters.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem', marginBottom: i < whyMatters.length - 1 ? '1rem' : 0 }}>
                <Box
                  sx={{
                    display: 'grid',
                    placeItems: 'center',
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: '#fff',
                    border: `1px solid ${line}`,
                    flexShrink: 0,
                    marginTop: '.1rem',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '.6rem',
                    fontWeight: 700,
                    color: '#0B4C74',
                  }}
                >
                  {i + 1}
                </Box>
                <Body sx={{ margin: 0, fontSize: '.72rem', lineHeight: 1.75 }}>
                  {point}
                </Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>
    </PageShell>
  );
};

export default NetSuite;