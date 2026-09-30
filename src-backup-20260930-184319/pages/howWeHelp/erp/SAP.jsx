import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowForward } from '@mui/icons-material';
import {
  Boxes, Database, Cloud, Factory, Headphones,
  Lightbulb, Cpu, Box as LucideBox, Brain,
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
import SAPHeroImage from '../../../assets/images/howWeHelp/ERP/sap/SAP.jpg';
import Image5 from '../../../assets/images/howWeHelp/ERP/sap/img5.jpg';
import Image6 from '../../../assets/images/howWeHelp/ERP/sap/img6.png';

// 👇 same navy as the top navbar menu items
const NAVY = '#0B4C74';

const SAP = () => {
  const slides = [SAPHeroImage, Image5, Image6];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const offerings = [
    { Icon: Boxes, title: 'SAP S/4HANA Implementation', text: 'Deploy S/4HANA on-premises or cloud, optimized for Finance, Supply Chain, Procurement, and process automation.' },
    { Icon: Database, title: 'SAP ECC to S/4HANA Migration', text: 'Transition from ECC using automated tools, data-cleansing frameworks, and phased deployment strategies for minimal disruption.' },
    { Icon: Cloud, title: 'SAP Cloud Integration', text: 'Integrate SAP with Salesforce, Azure, AWS via CPI, IDoc, REST/OData connectors for seamless data exchange.' },
    { Icon: Factory, title: 'Industry Specific SAP Solutions', text: 'Implement SAP modules for Retail, Utilities, Manufacturing, and Healthcare using industry-aligned best practices.' },
    { Icon: Headphones, title: 'SAP Managed Services & Support', text: '24/7 monitoring, patch deployment, incident handling, and continuous enhancements under flexible SLA models.' },
    { Icon: Lightbulb, title: 'Advisory Services', text: 'Increase the value of your SAP investments with our thought leadership & expertise. Whether it is implementations, rollouts, or cost-effective support models, our aim is to help you identify success opportunities.' },
    { Icon: Cpu, title: 'BTP-Enabled Digital Transformation', text: 'Unlock a comprehensive approach to digital transformation by integrating SAP BTP into your ecosystem. Our expertise, resources, and dedication are ever ready to help you navigate the complexities.' },
    { Icon: LucideBox, title: 'SAP Cloud ERP', text: 'Designed for fast-growing mid-market enterprises, SAP Cloud ERP enables rapid, cost-effective, and simplified ERP adoption. Accelerate deployment, reduce complexity, and harness the full potential of SAP Public Cloud.' },
    { Icon: Brain, title: 'Intelligent Data + AI', text: 'Transform your business and unlock new opportunities by harnessing the power of Data & AI to generate actionable insights. Staying competitive is now a click-away with our team of seasoned experts.' },
  ];

  // Lifecycle with images for zig-zag
  const lifecycleBlocks = [
    {
      title: 'Implementation & Support Services',
      image: Image5,
      paragraphs: [
        'Comprehensive SAP S/4HANA implementation methodology following SAP Activate methodology with detailed project plan templates. Clear blueprint deliverables and testing strategy (unit, integration, UAT) implementation.',
        'SAP AMS (Application Managed Services) with production support model L1 L2 L3. Performance tuning guide and user authorization troubleshooting.',
        'Best practices for SAP data migration and basis support checklist for operations and year-end closing support activities SAP FICO.',
      ],
    },
    {
      title: 'Upgrade & Migration Services',
      image: Image6,
      paragraphs: [
        'Comprehensive SAP upgrade project planning and S/4HANA 2023 to S/4HANA 2028 upgrade with downtime minimization strategies. SAP SUM tool tutorials and custom code impact management (SPAU/SPDD).',
        'SAP S/4HANA migration checklists, evaluate Greenfield vs Brownfield options, execute SAP Brownfield migration (SUM/DMO) with migration cockpit expertise.',
        'Handle custom code adaptation (ADT), SAP Fiori migration, and implement data migration strategy (LTMC, LSMW, S/4HANA DMIS).',
      ],
    },
  ];

  const faqBlocks = [
    { title: 'Implementation Methodology', paragraphs: ['SAP Activate methodology follows six phases: Prepare, Explore, Realize, Deploy, Run, and Optimize. Provides ready-to-use templates for successful SAP S/4HANA implementation.', 'Includes SAP blueprint phase deliverables, SAP testing strategy (unit, integration, UAT), and best practices for SAP data migration.'] },
    { title: 'Support & Operations', paragraphs: ['SAP production support model L1 L2 L3 with comprehensive 24/7 SAP AMS (Application Managed Services). Level 1 handles basic issues, Level 2 addresses configuration problems, Level 3 manages complex technical issues.', 'Includes SAP performance tuning guide, SAP user authorization issues troubleshooting, and SAP basis support checklist for ongoing operations.'] },
    { title: 'Upgrade Services', paragraphs: ['Comprehensive SAP upgrade project planning for S/4HANA 2023 to S/4HANA 2028 upgrade. Advanced SAP upgrade downtime minimization strategies reduce downtime by 40-60%.', 'SAP SUM (Software Update Manager) tool tutorials and management of SAP upgrade impact on custom code (SPAU/SPDD). Comprehensive testing strategy for SAP upgrades.'] },
    { title: 'Migration Services', paragraphs: ['SAP S/4HANA migration with comprehensive checklists. Evaluate New implementation vs conversion (Greenfield vs Brownfield) options. Execute SAP Brownfield migration (SUM/DMO) steps.', 'SAP S/4HANA migration cockpit deep dive expertise. Handle custom code adaptation for S/4HANA (ADT) and SAP Fiori migration.'] },
    { title: 'Data & Tools', paragraphs: ['Comprehensive data migration strategy for S/4HANA (LTMC, LSMW, S/4HANA DMIS). S/4HANA readiness check reports analysis and SAP legacy system migration workbench (LSMW) utilization.', 'Transparent cost of migrating to SAP S/4HANA analysis and comprehensive SAP implementation vs upgrade vs migration comparison.'] },
    { title: 'Advisory & Strategy', paragraphs: ['Comparative analysis of SAP RISE vs LEGACY model considering total cost of ownership, operational flexibility, and business agility. Guidance on SAP support models: break-fix vs managed services selection.', 'Development of comprehensive SAP transformation roadmap and assistance in choosing an SAP partner for implementation.'] },
  ];

  // Delivery Framework with images
  const deliveryFramework = [
    {
      title: 'SAP Implementation Excellence',
      image: SAPHeroImage,
      paragraphs: ['SAP S/4HANA implementation methodology following SAP Activate methodology with clear blueprint deliverables and comprehensive testing strategy (unit, integration, UAT).', 'Detailed project plan templates, best practices for SAP data migration, and thorough partner selection criteria evaluation.', 'Clear team structure roles definition and transparent cost breakdown with realistic implementation timelines.'],
    },
    {
      title: 'SAP Support & Maintenance',
      image: Image5,
      paragraphs: ['Comprehensive SAP AMS (Application Managed Services) with multi-tier production support model L1 L2 L3 coverage.', 'Efficient support ticket process best practices, proactive performance tuning, and timely security patches implementation.', 'Comprehensive basis support checklist, specialized user authorization troubleshooting, and dedicated year-end closing support activities SAP FICO.'],
    },
    {
      title: 'SAP Upgrade Services',
      image: Image6,
      paragraphs: ['Comprehensive SAP upgrade project planning including enhancement package (EhP) installation and strategic S/4HANA 2023 to S/4HANA 2028 upgrade execution.', 'Specialized upgrade downtime minimization strategies using advanced SAP SUM (Software Update Manager) tool techniques.', 'Thorough testing strategy for SAP upgrades, management of custom code impact (SPAU/SPDD), and comprehensive post-upgrade checklists.'],
    },
    {
      title: 'SAP Migration Expertise',
      image: SAPHeroImage,
      paragraphs: ['End-to-end SAP S/4HANA migration services with comprehensive checklists covering both Greenfield vs Brownfield approaches.', 'Detailed SAP Brownfield migration (SUM/DMO) steps and custom code adaptation for S/4HANA (ADT).', 'Comprehensive data migration strategy (LTMC, LSMW, S/4HANA DMIS), thorough S/4HANA readiness check report analysis, and transparent cost analysis.'],
    },
  ];

  const keywordColumns = [
    ['SAP S/4HANA implementation methodology', 'SAP Activate methodology guidance', 'SAP implementation project templates', 'SAP partner selection criteria', 'SAP implementation cost breakdown', 'SAP team structure roles', 'SAP blueprint deliverables', 'SAP data migration best practices', 'SAP testing strategy (unit, integration, UAT)', 'SAP AMS (Application Managed Services)', 'SAP production support model L1 L2 L3', 'SAP performance tuning'],
    ['SAP security patches implementation', 'SAP user authorization troubleshooting', 'SAP batch job monitoring', 'SAP support ticket processes', 'SAP basis support checklist', 'Year-end closing support SAP FICO', 'SAP upgrade project planning', 'SAP EhP installation guidance', 'S/4HANA upgrade services', 'SAP upgrade downtime strategies', 'SAP SUM tool tutorials', 'SAP upgrade testing strategy'],
    ['Custom code adaptation (ADT)', 'SAP Fiori migration', 'Data migration strategy (LTMC, LSMW)', 'S/4HANA readiness check', 'LSMW utilization', 'S/4HANA migration cost analysis', 'Implementation vs upgrade comparison', 'SAP RISE vs LEGACY evaluation', 'SAP support models selection', 'SAP transformation roadmap', 'SAP partner selection assistance', 'Migration cockpit expertise'],
  ];

  return (
    <PageShell>
      <Helmet>
        <title>SAP Implementation, Support, Upgrade & Migration Services | Onas Global</title>
        <meta name="description" content="Comprehensive SAP services including SAP S/4HANA implementation methodology, SAP Activate methodology step-by-step, SAP AMS (Application Managed Services), S/4HANA 2023 to 2028 upgrades, and SAP S/4HANA migration." />
        <meta name="keywords" content="SAP S/4HANA implementation methodology, SAP Activate methodology, SAP AMS, S/4HANA upgrade, SAP S/4HANA migration, RISE with SAP, SAP BTP, SAP FICO" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Comprehensive SAP Services",
            "description": "Full lifecycle SAP services including implementation, support, upgrade, and migration",
            "url": "https://www.onasglobal.com/sap-services",
            "provider": { "@type": "Organization", "name": "Onas Global", "url": "https://www.onasglobal.com", "logo": "https://www.onasglobal.com/logo.png" },
            "areaServed": { "@type": "Country", "name": "Global" }
          })}
        </script>
        <meta property="og:title" content="SAP Implementation, Support, Upgrade & Migration Services | Onas Global" />
        <meta property="og:description" content="Comprehensive SAP services including SAP S/4HANA implementation methodology, SAP Activate methodology step-by-step, SAP AMS, S/4HANA upgrades, and SAP migration." />
        <meta property="og:image" content={SAPHeroImage} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.onasglobal.com/sap-services" />
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
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -2, overflow: 'hidden', '&::after': { content: '""', position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,49,46,.94) 0%, rgba(8,49,46,.72) 55%, rgba(8,49,46,.85) 100%)', zIndex: 1 } }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              style={{ position: 'absolute', inset: 0, backgroundImage: `url(${slides[currentSlide]})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
            />
          </AnimatePresence>
        </Box>

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Eyebrow sx={{ color: lime }}>SAP Services</Eyebrow>
          <Typography component="h1" sx={{ ...heroHeadingSx, marginLeft: 'auto', marginRight: 'auto' }}>
            SAP AI for Comprehensive SAP Services: Implementation, Support, Upgrade &amp; Migration
          </Typography>
          <Body sx={{ color: 'rgba(255,255,255,.82) !important', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto', marginBottom: '1.8rem' }}>
            Expert SAP services enhanced by SAP AI including SAP S/4HANA implementation methodology, SAP Activate methodology step-by-step guidance, SAP AMS (Application Managed Services), S/4HANA 2023 to 2028 upgrade planning, SAP S/4HANA migration, and comprehensive SAP transformation roadmap development.
          </Body>
          <LimeButton href="/resources/contact-us">
            Contact Us <ArrowForward sx={{ fontSize: 14 }} />
          </LimeButton>
        </Container>
      </Box>

      {/* Full Lifecycle — white bg */}
      <Section sx={{ background: '#ffffff' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Full Lifecycle</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>Full Lifecycle SAP Services</SectionHeading>
        </Box>
        <Box sx={{ background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: { xs: '1.4rem 1.1rem', md: '1.6rem 1.8rem' } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: '1rem', md: '1.8rem' } }}>
            <Box>
              <Body sx={{ margin: '0 0 .6rem', color: `${ink} !important` }}><strong>Implementation:</strong> SAP S/4HANA methodology, SAP Activate, project templates, team roles, cost breakdown.</Body>
              <Body sx={{ margin: 0 }}><strong>Support:</strong> SAP AMS, L1 L2 L3 support, performance tuning, security patches, user authorization.</Body>
            </Box>
            <Box>
              <Body sx={{ margin: '0 0 .6rem', color: `${ink} !important` }}><strong>Upgrade:</strong> Project planning, S/4HANA 2023 to 2028 upgrade, downtime minimization, SAP SUM tool.</Body>
              <Body sx={{ margin: 0 }}><strong>Migration:</strong> SAP S/4HANA migration, Greenfield vs Brownfield, data migration strategy, cost analysis.</Body>
            </Box>
          </Box>
        </Box>
      </Section>

      {/* Portfolio — white bg */}
      <Section sx={{ background: '#ffffff' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Portfolio</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>Comprehensive SAP Services Portfolio</SectionHeading>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: '1rem', md: '1.2rem' } }}>
          {offerings.map((item, i) => {
            const { Icon } = item;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} style={{ display: 'flex', width: '100%' }}>
                <Box sx={cardSx}>
                  <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, marginBottom: '1rem' }}>
                    <Icon size={20} color="#257a68" />
                  </Box>
                  <SubHeading sx={{ marginBottom: '.5rem', color: NAVY }}>{item.title}</SubHeading>
                  <Body sx={{ flexGrow: 1 }}>{item.text}</Body>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Section>

      {/* Lifecycle Management — zig-zag text/image */}
      <Section sx={{ background: '#ffffff' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Lifecycle</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>SAP Service Lifecycle Management</SectionHeading>
        </Box>

        <Box sx={{ maxWidth: 1200, margin: '0 auto' }}>
          {lifecycleBlocks.map((block, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: { xs: '1.5rem', md: '2.5rem' },
                    alignItems: 'center',
                    marginBottom: { xs: '2.5rem', md: '3rem' },
                  }}
                >
                  {/* Text — order depends on isEven */}
                  <Box
                    sx={{
                      order: { xs: 1, md: isEven ? 1 : 2 },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <SubHeading
                      sx={{
                        marginBottom: '1rem',
                        borderBottom: `1px solid ${line}`,
                        paddingBottom: '.5rem',
                        color: NAVY,
                      }}
                    >
                      {block.title}
                    </SubHeading>
                    {block.paragraphs.map((p, idx) => (
                      <Body key={idx} sx={{ margin: '0 0 .7rem' }}>{p}</Body>
                    ))}
                  </Box>

                  {/* Image — opposite side */}
                  <Box
                    sx={{
                      order: { xs: 2, md: isEven ? 2 : 1 },
                      width: '100%',
                      height: { xs: 220, md: 320 },
                      overflow: 'hidden',
                      borderRadius: '2px',
                      border: `1px solid ${line}`,
                    }}
                  >
                    <Box
                      component="img"
                      src={block.image}
                      alt={block.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Section>

      {/* FAQ — white bg */}
      <Section sx={{ background: '#ffffff' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>FAQ</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>Frequently Asked Questions About SAP Services</SectionHeading>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: '1rem', md: '1.2rem' } }}>
          {faqBlocks.map((block, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={cardSx}>
                <SubHeading sx={{ marginBottom: '1rem', borderBottom: `1px solid ${line}`, paddingBottom: '.5rem', color: NAVY }}>{block.title}</SubHeading>
                {block.paragraphs.map((p, idx) => (
                  <Body key={idx} sx={{ margin: '0 0 .6rem' }}>{p}</Body>
                ))}
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* Delivery Framework — cards with images */}
      <Section sx={{ background: '#ffffff' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Delivery Framework</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>Comprehensive SAP Service Delivery Framework</SectionHeading>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: '1.2rem', md: '1.4rem' } }}>
          {deliveryFramework.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box
                sx={{
                  ...cardSx,
                  padding: 0,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image on top */}
                <Box
                  sx={{
                    width: '100%',
                    height: 170,
                    overflow: 'hidden',
                    borderBottom: `1px solid ${line}`,
                  }}
                >
                  <Box
                    component="img"
                    src={block.image}
                    alt={block.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </Box>

                {/* Text */}
                <Box sx={{ padding: '1.4rem 1.4rem' }}>
                  <SubHeading sx={{ marginBottom: '1rem', color: NAVY }}>{block.title}</SubHeading>
                  {block.paragraphs.map((p, idx) => (
                    <Body key={idx} sx={{ margin: '0 0 .6rem' }}>{p}</Body>
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* Keyword Footer — white bg */}
      <Section sx={{ background: '#ffffff' }}>
        <SectionHeading sx={{ textAlign: 'center', color: NAVY, marginBottom: '2rem' }}>
          ONAS Comprehensive SAP Services
        </SectionHeading>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: '1rem', md: '1.2rem' } }}>
          {keywordColumns.map((col, ci) => (
            <Box
              key={ci}
              sx={{
                padding: '1.2rem 1rem',
                background: '#fff',
                border: `1px solid ${line}`,
                borderRadius: '2px',
              }}
            >
              {col.map((item, idx) => (
                <Typography
                  key={idx}
                  sx={{
                    color: `${muted} !important`,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '.6rem',
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  • {item}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Section>
    </PageShell>
  );
};

export default SAP;