import React, { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowForward } from '@mui/icons-material';
import { Wrench, Database, Layers, Cloud, Zap, Shield } from 'lucide-react';

// Hero Image
import ITInfraHero from '../../../assets/images/howWeHelp/mitoper/itinfra.png';

// Images
import Image1 from '../../../assets/images/howWeHelp/mitoper/cybersecurity/img1.png';
import Image2 from '../../../assets/images/howWeHelp/mitoper/cybersecurity/img2.png';
import Image3 from '../../../assets/images/howWeHelp/mitoper/cybersecurity/img3.png';
import Image4 from '../../../assets/images/howWeHelp/mitoper/cybersecurity/img4.png';

// ── Arvee editorial palette ──
const ink = '#0B4C74';
const muted = '#647572';
const line = '#dfe8df';
const soft = '#ffffff';
const cream = '#ffffff';
const lime = '#baf58c';

const eyebrowSx = {
  color: '#0B4C74',
  fontSize: '.55rem',
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  fontWeight: 700,
  fontFamily: "'Poppins', sans-serif",
};

const containerSx = {
  width: '100%',
  maxWidth: { xs: '100%', md: '1240px' },
  margin: '0 auto',
  padding: { xs: '0 1rem', md: '0 1.5rem' },
  boxSizing: 'border-box',
};

const cardSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'left',
  background: '#fff',
  border: `1px solid ${line}`,
  borderRadius: '2px',
  padding: { xs: '1.3rem 1.1rem', md: '1.6rem 1.4rem' },
  height: '100%',
  width: '100%',
  transition: 'all .25s ease',
  '&:hover': {
    borderColor: '#aac7b2',
    transform: 'translateY(-3px)',
  },
};

const ITInfra = () => {
  const baseUrl = window.location.origin;
  const pageUrl = `${baseUrl}/services/it-infrastructure`;

  // ── Slideshow state ──
  const slides = [ITInfraHero, Image1, Image2, Image3, Image4];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // ── SEO ──
  const seoData = {
    title: 'IT Infrastructure Management Services | 24/7 Managed IT Support 2024',
    description:
      'Professional IT infrastructure management services: managed OS, databases, remote infrastructure management, cloud infrastructure, monitoring, and compliance support.',
    keywords:
      'IT infrastructure management, managed IT services, managed OS services, managed database services, remote infrastructure management, cloud infrastructure management, IT infrastructure monitoring, network compliance support, 24/7 IT support, hybrid infrastructure, multi-cloud management, IT operations',
    canonicalUrl: pageUrl,
    ogImage: ITInfraHero,
    twitterImage: ITInfraHero,
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IT Infrastructure Management Services',
    description:
      'IT infrastructure management services including managed OS, databases, remote infrastructure management, cloud infrastructure, monitoring, and compliance',
    provider: { '@type': 'Organization', name: 'ONAS', url: baseUrl, logo: `${baseUrl}/logo.png` },
    serviceType: [
      'Managed OS Services',
      'Managed Database Services',
      'Remote Infrastructure Management',
      'Cloud Infrastructure Management',
      'IT Infrastructure Monitoring',
      'Network & Compliance Support',
    ],
    areaServed: { '@type': 'Country', name: 'Global' },
    offers: { '@type': 'Offer', category: 'TechnologyServices', availability: 'https://schema.org/InStock' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` },
      { '@type': 'ListItem', position: 3, name: 'IT Infrastructure', item: seoData.canonicalUrl },
    ],
  };

  // ── Offerings (your original content) ──
  const offerings = [
    { Icon: Wrench, title: 'Managed OS Services', text: 'Operating system support across Linux, Windows, and Unix platforms, including updates, security hardening, and lifecycle management.' },
    { Icon: Database, title: 'Managed Database Services', text: 'Performance tuning, replication setup, backup, and scaling across SQL, Oracle, PostgreSQL, and NoSQL databases.' },
    { Icon: Layers, title: 'Remote Infrastructure Management', text: 'Centralized control and real-time support across servers, storage, and network devices with performance insights and rapid issue resolution.' },
    { Icon: Cloud, title: 'Cloud Infrastructure Management', text: 'Proactive management of multi-cloud environments (AWS, Azure, GCP), including workload balancing, patching, and access controls.' },
    { Icon: Zap, title: 'IT Infrastructure Monitoring', text: '24x7 system health tracking, predictive alerting, root-cause analysis, and SLA-based issue escalation.' },
    { Icon: Shield, title: 'Network & Compliance Support', text: 'NOC support, ITSM integration, and infrastructure compliance across HIPAA, SOC2, ISO 27001, and internal standards.' },
  ];

  // ── Value Delivery (your original content) ──
  const valueDelivery = [
    { Icon: Zap, title: 'Always-On Support', text: 'Ensure uptime and reliability across hybrid, cloud, and on-prem environments.' },
    { Icon: Shield, title: 'Risk Mitigation', text: 'Proactive issue detection, patching, and vulnerability management.' },
    { Icon: Database, title: 'Operational Efficiency', text: 'Streamlined IT operations, monitoring, and reporting to reduce overhead.' },
    { Icon: Layers, title: 'Scalable Infrastructure', text: 'Flexible systems that grow with business needs and hybrid workloads.' },
  ];

  return (
    <Box
      sx={{
        background: cream,
        color: ink,
        width: '100%',
        overflowX: 'hidden',
        '& h1, & h2, & h3': { fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, letterSpacing: 0 },
      }}
    >
      {/* ── SEO ── */}
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:title" content="IT Infrastructure Management Services | 24/7 Managed IT Support" />
        <meta property="og:description" content="Professional IT infrastructure management for hybrid, cloud, and on-prem environments." />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ONAS Infrastructure Services" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourCompany" />
        <meta name="twitter:creator" content="@YourCompany" />
        <meta name="twitter:title" content="IT Infrastructure Management Services" />
        <meta name="twitter:description" content="24/7 managed IT infrastructure services for hybrid, cloud, and on-prem environments." />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="twitter:image:alt" content="IT Infrastructure Management Services" />

        <meta property="linkedin:title" content="IT Infrastructure Management Services" />
        <meta property="linkedin:description" content="Enterprise IT infrastructure management services including managed OS, databases, and cloud." />
        <meta property="linkedin:image" content={seoData.ogImage} />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS Infrastructure Services" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="date" content={new Date().toISOString().split('T')[0]} />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'ONAS',
            url: baseUrl,
            logo: `${baseUrl}/logo.png`,
            sameAs: [
              'https://twitter.com/yourcompany',
              'https://linkedin.com/company/yourcompany',
              'https://github.com/yourcompany',
            ],
            description: 'IT infrastructure management and support services',
          })}
        </script>
      </Helmet>

      {/* Hidden SEO */}
      <div style={{ display: 'none' }}>
        <h1>IT Infrastructure Management Services</h1>
        <p>Professional IT infrastructure management services for hybrid, cloud, and on-prem environments with managed OS, database, remote infrastructure, cloud, monitoring, and compliance support.</p>
      </div>

      {/* ── Section 1: Hero — Slideshow background ── */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 480, md: 560 },
          padding: { xs: '3.5rem 1rem', md: '5rem 2.5rem' },
          overflow: 'hidden',
          background: ink,
          isolation: 'isolate',
          display: 'flex',
          alignItems: 'center',
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
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${slides[currentSlide]})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </AnimatePresence>
        </Box>

        <Box sx={{ position: 'relative', zIndex: 2, maxWidth: 1240, margin: '0 auto', width: '100%' }}>
          <Typography
            sx={{
              color: lime,
              fontSize: '.55rem',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              marginBottom: '.7rem',
            }}
          >
            IT Infrastructure
          </Typography>
          <Typography
            component="h1"
            sx={{
              margin: '.4rem 0 1rem',
              font: "400 clamp(2rem, 4.5vw, 3.6rem)/1.02 Georgia, 'Times New Roman', serif",
              color: '#fff',
              maxWidth: 900,
            }}
          >
            IT Infrastructure Management Services
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255,255,255,.82) !important',
              fontFamily: "'Poppins', sans-serif",
              fontSize: { xs: '.72rem', md: '.78rem' },
              lineHeight: 1.7,
              maxWidth: 640,
              marginBottom: '1.8rem',
            }}
          >
            Guarantee agility, performance, and uptime with IT infrastructure management services
            designed to support your hybrid workloads, distributed teams, and critical IT operations.
          </Typography>
          <Box
            component="a"
            href="/resources/contact-us"
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
              '&:hover': { background: '#d3ffb0', color: '#000000' },
            }}
          >
            Contact Us <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Box>

      {/* ── Section 2: Offerings ── */}
      <Box sx={{ background: soft }}>
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            ...containerSx,
            paddingTop: { xs: '3.5rem', md: '5rem' },
            paddingBottom: { xs: '3.5rem', md: '5rem' },
          }}
        >
          <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <Eyebrow>What We Offer</Eyebrow>
            <Typography
              component="h2"
              sx={{
                margin: '.7rem auto 0',
                font: "400 clamp(1.8rem, 3.6vw, 3.6rem)/.98 Georgia, 'Times New Roman', serif",
                color: ink,
                maxWidth: 720,
              }}
            >
              Our Core IT Infrastructure Services
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: { xs: '1.2rem', md: '1.5rem' },
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
                    <Box
                      sx={{
                        display: 'grid',
                        placeItems: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: '#fff',
                        border: `1px solid ${line}`,
                        marginBottom: '1rem',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} color="#0B4C74" />
                    </Box>
                    <Typography
                      component="h3"
                      sx={{
                        margin: '0 0 .55rem',
                        font: "400 .92rem Georgia, 'Times New Roman', serif",
                        color: ink,
                        lineHeight: 1.25,
                        minHeight: '2.4rem',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: `${muted} !important`,
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '.66rem',
                        lineHeight: 1.75,
                        flexGrow: 1,
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </motion.div>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* ── Section 3: How We Deliver Long-Term Value ── */}
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          ...containerSx,
          paddingTop: { xs: '3.5rem', md: '5rem' },
          paddingBottom: { xs: '3.5rem', md: '5rem' },
        }}
      >
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Delivery</Eyebrow>
          <Typography
            component="h2"
            sx={{
              margin: '.7rem auto 0',
              font: "400 clamp(1.8rem, 3.6vw, 3.6rem)/.98 Georgia, 'Times New Roman', serif",
              color: ink,
              maxWidth: 720,
            }}
          >
            How We Deliver Long-Term Value
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
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
                  <Box
                    sx={{
                      display: 'grid',
                      placeItems: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: soft,
                      border: `1px solid ${line}`,
                      marginBottom: '1rem',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color="#0B4C74" />
                  </Box>
                  <Typography
                    component="h3"
                    sx={{
                      margin: '0 0 .5rem',
                      font: "400 .92rem Georgia, 'Times New Roman', serif",
                      color: ink,
                      lineHeight: 1.25,
                      minHeight: '2.4rem',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: `${muted} !important`,
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '.66rem',
                      lineHeight: 1.75,
                      flexGrow: 1,
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default ITInfra;