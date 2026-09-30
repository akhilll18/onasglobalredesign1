import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowForward } from '@mui/icons-material';
import { Shield, Zap, Layers, Database, Wrench, Cloud } from 'lucide-react';

// Images
import CyberHero from '../../../assets/images/howWeHelp/mitoper/cybersecurity.png';
import Image1 from '../../../assets/images/howWeHelp/mitoper/cybersecurity/img1.png';
import Image2 from '../../../assets/images/howWeHelp/mitoper/cybersecurity/img2.png';
import Image3 from '../../../assets/images/howWeHelp/mitoper/cybersecurity/img3.png';
import Image4 from '../../../assets/images/howWeHelp/mitoper/cybersecurity/img4.png';

// ── Arvee editorial palette ──
const ink = '#123f3b';
const muted = '#647572';
const line = '#dfe8df';
const soft = '#f1f6ef';
const cream = '#fbfcf7';
const lime = '#baf58c';

const eyebrowSx = {
  color: '#257a68',
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

const CyberSecurity = () => {
  const baseUrl = window.location.origin;
  const pageUrl = `${baseUrl}/services/cybersecurity`;

  // ── Slideshow state ──
  const slides = [CyberHero, Image1, Image2, Image3, Image4];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // ── SEO ──
  const seoData = {
    title: 'Cyber Security Services | 24/7 Managed SOC & Threat Protection 2024',
    description:
      'Professional cybersecurity services: managed SOC, vulnerability management, cloud security, EDR protection, network security, and compliance for GDPR, HIPAA, PCI DSS.',
    keywords:
      'cybersecurity services, managed security services, SOC as a service, vulnerability management, cloud security, EDR protection, network security, threat detection, 24/7 security monitoring, cybersecurity consulting, security operations center, threat intelligence, cybersecurity solutions, cybersecurity company, managed security, security monitoring, cyber threat protection, data protection, ransomware protection, cybersecurity assessment, security compliance, cybersecurity framework, cybersecurity risk management, cybersecurity audit, penetration testing, security incident response, cybersecurity consulting services, cybersecurity managed services',
    canonicalUrl: pageUrl,
    ogImage: CyberHero,
    twitterImage: CyberHero,
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cyber Security Services',
    description:
      'Professional cybersecurity services including managed SOC, vulnerability management, cloud security, EDR protection, network security, and compliance management',
    provider: { '@type': 'Organization', name: 'ONAS', url: baseUrl, logo: `${baseUrl}/logo.png` },
    serviceType: [
      'Vulnerability Management',
      'Cloud Security',
      'Managed SOC',
      'EDR Protection',
      'Network Security',
      'SIEM & Threat Intelligence',
    ],
    areaServed: { '@type': 'Country', name: 'Global' },
    offers: { '@type': 'Offer', category: 'TechnologyServices', availability: 'https://schema.org/InStock' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are managed cybersecurity services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Managed cybersecurity services provide 24/7 monitoring, threat detection, incident response, vulnerability management, and security operations through a Security Operations Center (SOC) to protect organizations from cyber threats, data breaches, and security incidents.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a Security Operations Center (SOC)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A SOC is a centralized unit that provides 24/7 monitoring, detection, analysis, and response to cybersecurity incidents using security information and event management (SIEM) systems, threat intelligence, and security analysts to protect organizational assets and data.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which compliance standards do you support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support compliance with GDPR, HIPAA, PCI DSS, SOC 2, ISO 27001, NIST, CMMC, FedRAMP, FISMA, CCPA, and other industry-specific cybersecurity and data protection regulations and frameworks.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is EDR (Endpoint Detection and Response)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'EDR is a cybersecurity technology that continuously monitors endpoints (computers, mobile devices, servers) for threats, provides real-time detection, investigation, and response capabilities to identify and mitigate advanced threats that bypass traditional security measures.',
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` },
      { '@type': 'ListItem', position: 3, name: 'Cyber Security', item: seoData.canonicalUrl },
    ],
  };

  // ── Content ──
  const offerings = [
    { Icon: Shield, title: 'Vulnerability Management (VMaaS)', text: 'Continuous scanning, risk classification, and prioritized remediation across infrastructure, endpoints, and apps.', schemaType: 'SecurityService' },
    { Icon: Cloud, title: 'Cloud Security Services', text: 'Protection for public, private, and hybrid cloud workloads with CSPM, container security, and policy enforcement.', schemaType: 'CloudSecurityService' },
    { Icon: Layers, title: 'Managed SOC', text: '24/7 threat detection, real-time alert triage, incident response, threat hunting, and forensic analysis.', schemaType: 'SecurityService' },
    { Icon: Database, title: 'EDR Endpoint Protection', text: 'Behavioral monitoring, anomaly detection, isolation, and rapid containment of endpoint threats.', schemaType: 'EndpointSecurityService' },
    { Icon: Wrench, title: 'Network Security & Firewall', text: 'Next-gen firewall configuration, network segmentation, intrusion prevention, and encrypted traffic inspection.', schemaType: 'NetworkSecurityService' },
    { Icon: Zap, title: 'SIEM & Threat Intelligence', text: 'Real-time log analysis, threat integration, compliance-ready reporting, and threat actor profiling.', schemaType: 'ThreatIntelligenceService' },
  ];

  const valueDelivery = [
    { Icon: Zap, title: '24/7 Monitoring', text: 'Always-on detection and response for business-critical assets.' },
    { Icon: Shield, title: 'Compliance Ready', text: 'Aligns with HIPAA, PCI DSS, GDPR, SOC 2, ISO 27001, and internal policies.' },
    { Icon: Database, title: 'Threat Intelligence', text: 'Proactive threat hunting using global attack feed integration.' },
    { Icon: Layers, title: 'Risk Mitigation', text: 'Layered security approach minimizing exposure and downtime.' },
  ];

  const cloudTech = [
    { category: 'SIEM & Log Management', tech: 'Splunk, ArcSight, QRadar, LogRhythm, Sentinel, Elastic Stack' },
    { category: 'Endpoint Protection', tech: 'CrowdStrike, SentinelOne, Microsoft Defender, Carbon Black, Trend Micro' },
    { category: 'Cloud Security', tech: 'AWS Security Hub, Azure Security Center, GCP Security Command, Prisma Cloud' },
    { category: 'Network Security', tech: 'Palo Alto, Fortinet, Cisco, Check Point, FireEye, Zscaler' },
    { category: 'Threat Intelligence', tech: 'Recorded Future, ThreatConnect, Anomali, MISP, IBM X-Force' },
    { category: 'Vulnerability Management', tech: 'Tenable, Qualys, Rapid7, OpenVAS, Nessus, Nexpose' },
  ];

  const impactMetrics = [
    { label: 'Threat Detection', value: '90-95%' },
    { label: 'Response Time', value: 'Minutes' },
    { label: 'Risk Reduction', value: '70-85%' },
    { label: 'Compliance Rate', value: '100%' },
    { label: 'Downtime Reduction', value: '80-95%' },
    { label: 'ROI on Security', value: '3-5x' },
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
        <meta property="og:title" content="Cyber Security Services | Managed SOC & Threat Protection" />
        <meta property="og:description" content="Professional cybersecurity services for 24/7 threat detection, vulnerability management, cloud security, and compliance." />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ONAS Security Services" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourCompany" />
        <meta name="twitter:creator" content="@YourCompany" />
        <meta name="twitter:title" content="Cyber Security Services | 24/7 Managed SOC" />
        <meta name="twitter:description" content="Comprehensive cybersecurity services for threat detection, vulnerability management, and compliance." />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="twitter:image:alt" content="Cyber Security Services" />

        <meta property="linkedin:title" content="Cyber Security Services" />
        <meta property="linkedin:description" content="Enterprise cybersecurity services including managed SOC, EDR protection, and cloud security." />
        <meta property="linkedin:image" content={seoData.ogImage} />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS Security Services" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="date" content={new Date().toISOString().split('T')[0]} />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
            description: 'Cybersecurity and managed security services',
          })}
        </script>
      </Helmet>

      {/* Hidden SEO */}
      <div style={{ display: 'none' }}>
        <h1>Cyber Security and Managed Security Services</h1>
        <p>Professional cybersecurity services for 24/7 threat detection, vulnerability management, cloud security, EDR protection, and compliance with GDPR, HIPAA, PCI DSS, SOC 2, and ISO 27001 standards.</p>
        <h2>Cybersecurity Services Overview</h2>
        <p>Comprehensive cybersecurity solutions including Security Operations Center (SOC) as a service, vulnerability assessment, penetration testing, incident response, threat intelligence, and security compliance management for enterprises.</p>
        <h3>Cybersecurity Solutions</h3>
        <ul>
          <li>Managed Security Operations Center (SOC) Services</li>
          <li>Vulnerability Management and Penetration Testing</li>
          <li>Cloud Security (AWS, Azure, Google Cloud)</li>
          <li>Endpoint Detection and Response (EDR)</li>
          <li>Network Security and Firewall Management</li>
          <li>Security Information and Event Management (SIEM)</li>
          <li>Threat Intelligence and Threat Hunting</li>
          <li>Security Compliance and Risk Management</li>
        </ul>
        <h4>Cybersecurity Compliance Standards</h4>
        <p>We help organizations achieve compliance with GDPR, HIPAA, PCI DSS, SOC 2, ISO 27001, NIST, CMMC, FedRAMP, FISMA, and other industry-specific cybersecurity regulations and frameworks.</p>
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
                'linear-gradient(90deg, rgba(8,49,46,.94) 0%, rgba(8,49,46,.72) 55%, rgba(8,49,46,.85) 100%)',
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
            Cyber Security
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
            Cyber Security Services
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
            Protect your critical infrastructure with services designed to detect threats, manage
            risks, and guarantee business continuity across hybrid and multi-cloud environments.
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
              background: lime,
              color: ink,
              fontWeight: 600,
              fontSize: '.62rem',
              fontFamily: "'Poppins', sans-serif",
              textDecoration: 'none',
              transition: 'background .2s ease',
              '&:hover': { background: '#d3ffb0' },
            }}
          >
            Contact Us <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Box>

      {/* ── Section 2: SEO Intro — text LEFT, image RIGHT ── */}
      <Container maxWidth={false} disableGutters sx={containerSx}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr .95fr' },
            gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 4rem)' },
            alignItems: 'center',
            padding: { xs: '3rem 0', md: '4.5rem 0' },
          }}
        >
          <Box>
            <Eyebrow>Introduction</Eyebrow>
            <Typography
              component="h2"
              sx={{
                margin: '.7rem 0 1rem',
                font: "400 clamp(1.6rem, 3.2vw, 2.6rem)/1.08 Georgia, 'Times New Roman', serif",
                color: ink,
              }}
            >
              Professional Cybersecurity Services for Threat Detection and Risk Management
            </Typography>
            <Typography
              sx={{
                color: `${muted} !important`,
                fontFamily: "'Poppins', sans-serif",
                fontSize: '.72rem',
                lineHeight: 1.8,
                marginBottom: '.9rem',
              }}
            >
              Our cybersecurity services provide comprehensive protection against cyber threats
              through 24/7 monitoring, advanced threat detection, vulnerability management,
              and compliance with industry security standards and regulations.
            </Typography>
            <Typography
              sx={{
                color: `${muted} !important`,
                fontFamily: "'Poppins', sans-serif",
                fontSize: '.72rem',
                lineHeight: 1.8,
              }}
            >
              From managed SOC operations to endpoint protection and cloud security, we build
              layered defences that keep your business resilient against evolving threats.
            </Typography>
          </Box>

          <Box
            sx={{
              border: `1px solid ${line}`,
              borderRadius: '2px',
              overflow: 'hidden',
              background: '#fff',
              minHeight: { xs: 260, md: 420 },
            }}
          >
            <Box
              component="img"
              src={Image1}
              alt="Professional cybersecurity services for threat detection and risk management"
              sx={{ width: '100%', height: '100%', minHeight: 'inherit', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Box>
      </Container>

      {/* ── Section 3: Offerings ── */}
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
              Our Cyber Security Offerings
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
                  itemScope
                  itemType={`https://schema.org/${item.schemaType}`}
                >
                  <Box sx={cardSx} itemProp="offers" itemScope itemType="https://schema.org/Offer">
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
                      <Icon size={20} color="#257a68" />
                    </Box>
                    <Typography
                      itemProp="name"
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
                      itemProp="description"
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

      {/* ── Section 4: How We Deliver Long-Term Value ── */}
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
                    <Icon size={20} color="#257a68" />
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

      {/* ── Section 5: Benefits + Impact Metrics ── */}
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
            <Eyebrow>Benefits</Eyebrow>
            <Typography
              component="h2"
              sx={{
                margin: '.7rem auto 0',
                font: "400 clamp(1.8rem, 3.6vw, 3.6rem)/.98 Georgia, 'Times New Roman', serif",
                color: ink,
                maxWidth: 720,
              }}
            >
              Benefits of Professional Cybersecurity Services
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: '2rem', md: '2.5rem' },
              alignItems: 'stretch',
            }}
          >
            <Box>
              <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.72rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                Our cybersecurity services deliver significant business benefits including reduced risk
                of data breaches, improved threat detection and response times, enhanced compliance
                with regulations, protection against ransomware, and safeguarding of critical business
                assets and reputation.
              </Typography>
              <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.72rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                By implementing comprehensive security strategies and leveraging advanced threat
                intelligence, we help organizations prevent security incidents, minimize business
                disruption, and maintain customer trust in an increasingly complex threat landscape.
              </Typography>
              <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.72rem', lineHeight: 1.8 }}>
                Our expertise spans across various security domains including network security, cloud
                security, endpoint protection, threat intelligence, and compliance management across
                different industries and regulatory environments.
              </Typography>
            </Box>

            <Box sx={{ background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: { xs: '1.8rem 1.4rem', md: '2.2rem' } }}>
              <Eyebrow>Impact Metrics</Eyebrow>
              <Typography
                component="h3"
                sx={{
                  margin: '.6rem 0 1.4rem',
                  font: "400 clamp(1.3rem, 2.2vw, 1.7rem)/1.15 Georgia, 'Times New Roman', serif",
                  color: ink,
                }}
              >
                Cybersecurity Impact Metrics
              </Typography>

              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: { xs: '.8rem', md: '1rem' } }}>
                {impactMetrics.map((metric, i) => (
                  <Box
                    key={i}
                    sx={{
                      padding: '1rem .8rem',
                      border: `1px solid ${line}`,
                      borderRadius: '2px',
                      background: soft,
                      textAlign: 'center',
                    }}
                  >
                    <Typography sx={{ margin: 0, color: ink, font: "400 clamp(1.1rem, 1.8vw, 1.5rem)/1 Georgia, 'Times New Roman', serif" }}>
                      {metric.value}
                    </Typography>
                    <Typography
                      sx={{
                        margin: '.35rem 0 0',
                        color: `${muted} !important`,
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '.55rem',
                        letterSpacing: '.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {metric.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Section 6: Technologies & Solutions — SLIDESHOW BACKGROUND ── */}
      <Box
        sx={{
          position: 'relative',
          padding: { xs: '4rem 1rem', md: '6rem 1.5rem' },
          overflow: 'hidden',
          background: ink,
          isolation: 'isolate',
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
                'linear-gradient(90deg, rgba(8,49,46,.94) 0%, rgba(8,49,46,.78) 55%, rgba(8,49,46,.9) 100%)',
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
          <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <Typography sx={{ ...eyebrowSx, color: lime }}>Technology Stack</Typography>
            <Typography
              component="h2"
              sx={{
                margin: '.7rem auto 0',
                font: "400 clamp(1.8rem, 3.6vw, 3.6rem)/.98 Georgia, 'Times New Roman', serif",
                color: '#fff',
                maxWidth: 720,
              }}
            >
              Cybersecurity Technologies &amp; Solutions
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: { xs: '1rem', md: '1.2rem' },
              alignItems: 'stretch',
            }}
          >
            {cloudTech.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{ display: 'flex', width: '100%' }}
              >
                <Box
                  sx={{
                    ...cardSx,
                    background: 'rgba(255,255,255,.96)',
                    border: '1px solid rgba(223,232,223,.6)',
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      margin: '0 0 .5rem',
                      font: "400 .88rem Georgia, 'Times New Roman', serif",
                      color: ink,
                      lineHeight: 1.25,
                      minHeight: '2.2rem',
                    }}
                  >
                    {tech.category}
                  </Typography>
                  <Typography
                    sx={{
                      color: `${muted} !important`,
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '.64rem',
                      lineHeight: 1.7,
                      flexGrow: 1,
                    }}
                  >
                    {tech.tech}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── Section 7: CTA ── */}
      <Box sx={{ background: soft, borderTop: `1px solid ${line}` }}>
        <Container maxWidth={false} disableGutters sx={containerSx}>
          <Box sx={{ maxWidth: 800, mx: 'auto', padding: { xs: '4rem 1rem', md: '5rem 0' }, textAlign: 'center' }}>
            <Eyebrow>Get Started</Eyebrow>
            <Typography
              component="h2"
              sx={{
                margin: '.7rem auto 1rem',
                font: "400 clamp(1.8rem, 3.6vw, 3rem)/1.05 Georgia, 'Times New Roman', serif",
                color: ink,
              }}
            >
              Secure Your Organization with Expert Cybersecurity Services
            </Typography>
            <Typography
              sx={{
                color: `${muted} !important`,
                fontFamily: "'Poppins', sans-serif",
                fontSize: '.72rem',
                lineHeight: 1.75,
                marginBottom: '1.8rem',
              }}
            >
              Contact our cybersecurity experts to discuss your security requirements, implement
              comprehensive protection strategies, and ensure your organization is protected
              against evolving cyber threats and compliance requirements.
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
                background: lime,
                color: ink,
                fontWeight: 600,
                fontSize: '.62rem',
                fontFamily: "'Poppins', sans-serif",
                textDecoration: 'none',
                transition: 'background .2s ease',
                '&:hover': { background: '#d3ffb0' },
              }}
            >
              Request Security Assessment <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CyberSecurity;