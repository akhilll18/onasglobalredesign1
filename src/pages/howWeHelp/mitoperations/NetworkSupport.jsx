import React, { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowForward } from '@mui/icons-material';
import { Shield, Layers, Zap, Database, Cloud, Wrench } from 'lucide-react';

// Hero Image
import NetworkHero from '../../../assets/images/howWeHelp/mitoper/networksupport.png';

// Images
import Image1 from '../../../assets/images/howWeHelp/mitoper/networksupport/img1.png';
import Image2 from '../../../assets/images/howWeHelp/mitoper/networksupport/img2.png';
import Image3 from '../../../assets/images/howWeHelp/mitoper/networksupport/img3.png';
import Image4 from '../../../assets/images/howWeHelp/mitoper/networksupport/img4.png';

// ── Shared theme imports (matches your other working pages) ──
import {
  Eyebrow,
  cardSx,
  containerSx,
  ink,
  muted,
  line,
  soft,
  cream,
  lime,
} from '../../../theme/theme';

const NetworkSupport = () => {
  const baseUrl = window.location.origin;
  const pageUrl = `${baseUrl}/services/network-support`;

  // ── Slideshow state ──
  const slides = [NetworkHero, Image1, Image2, Image3, Image4];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // ── SEO ──
  const seoData = {
    title: 'Network Support Services | 24/7 NOC & Network Monitoring 2024',
    description:
      'Professional network support services: remote network monitoring, 24/7 NOC support, performance monitoring, secure remote access, configuration management, and incident management.',
    keywords:
      'network support services, network monitoring, NOC support, remote network management, network performance monitoring, secure remote access, VPN management, SD-WAN support, network configuration management, network incident management, 24/7 network support, network operations center, network optimization, LAN WAN support, network infrastructure support',
    canonicalUrl: pageUrl,
    ogImage: NetworkHero,
    twitterImage: NetworkHero,
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Network Support Services',
    description:
      'Network support services including remote monitoring, NOC operations, performance monitoring, secure remote access, and incident management',
    provider: { '@type': 'Organization', name: 'ONAS', url: baseUrl, logo: `${baseUrl}/logo.png` },
    serviceType: [
      'Network Monitoring',
      'NOC Support',
      'Network Performance Monitoring',
      'Secure Remote Access',
      'Configuration Management',
      'Network Incident Management',
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
      { '@type': 'ListItem', position: 3, name: 'Network Support', item: seoData.canonicalUrl },
    ],
  };

  // ── Offerings ──
  const offerings = [
    { Icon: Database, title: 'Remote Network Monitoring & Management', text: 'Constant surveillance of routers, firewalls, switches, and WAN links using real-time dashboards and automated remediation triggers.' },
    { Icon: Layers, title: '24/7 NOC Support', text: 'Tiered architecture staffed by certified network engineers handling incident detection, escalation, and resolution from a centralized NOC.' },
    { Icon: Zap, title: 'Network Performance Monitoring', text: 'Track metrics like latency, packet loss, jitter, and throughput. Predict congestion using trend analysis, traffic shaping, and QoS enforcement.' },
    { Icon: Shield, title: 'Secure Remote Access Solutions', text: 'Deploy and manage VPNs, NAC, MPLS, and SD-WAN frameworks for secure and reliable connectivity across remote teams and multi-site clusters.' },
    { Icon: Cloud, title: 'Configuration & Change Management', text: 'Maintain standardized configs, version control, firmware updates, rollback mechanisms, and automation scripts—ensuring governance and stability.' },
    { Icon: Wrench, title: 'Network Optimization & Incident Management', text: 'Audits, traffic shaping, routing optimization, and SNMP-based incident detection to reduce mean time to resolution.' },
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
        <meta property="og:title" content="Network Support Services | 24/7 NOC & Network Monitoring" />
        <meta property="og:description" content="Professional network support services for monitoring, NOC operations, performance, and incident management." />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ONAS Network Services" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourCompany" />
        <meta name="twitter:creator" content="@YourCompany" />
        <meta name="twitter:title" content="Network Support Services | 24/7 NOC Support" />
        <meta name="twitter:description" content="Comprehensive network support services for monitoring, performance, and secure connectivity." />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="twitter:image:alt" content="Network Support Services" />

        <meta property="linkedin:title" content="Network Support Services" />
        <meta property="linkedin:description" content="Enterprise network support services including 24/7 NOC, monitoring, and secure remote access." />
        <meta property="linkedin:image" content={seoData.ogImage} />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS Network Services" />
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
            description: 'Network support and management services',
          })}
        </script>
      </Helmet>

      {/* Hidden SEO */}
      <div style={{ display: 'none' }}>
        <h1>Network Support and Management Services</h1>
        <p>Professional network support services for enterprises with remote network monitoring, 24/7 NOC support, network performance monitoring, secure remote access, configuration management, and incident management.</p>
      </div>

      {/* ── Section 1: Hero — Slideshow background (CENTERED + LIGHTER shade) ── */}
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
                'linear-gradient(90deg, rgba(11,76,116,.45) 0%, rgba(11,76,116,.28) 55%, rgba(11,76,116,.40) 100%)',
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

        <Box sx={{ position: 'relative', zIndex: 2, maxWidth: 1240, margin: '0 auto', width: '100%', textAlign: 'center' }}>
          <Typography
            sx={{
              color: lime,
              fontSize: '.55rem',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              marginBottom: '.7rem',
              textShadow: '0 1px 6px rgba(0,0,0,.6)',
            }}
          >
            Network Support
          </Typography>
          <Typography
            component="h1"
            sx={{
              margin: '.4rem auto 1rem',
              font: "400 clamp(1.6rem, 3.2vw, 2.6rem)/1.05 Georgia, 'Times New Roman', serif",
              color: '#fff',
              maxWidth: 800,
              textShadow: '0 2px 10px rgba(0,0,0,.65)',
            }}
          >
            Network Support Services
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255,255,255,.95) !important',
              fontFamily: "'Poppins', sans-serif",
              fontSize: { xs: '.72rem', md: '.78rem' },
              lineHeight: 1.7,
              maxWidth: 640,
              margin: '0 auto 1.8rem',
              textShadow: '0 1px 6px rgba(0,0,0,.65)',
            }}
          >
            Maintain high-performance connectivity with network support services designed for
            dispatch reliability. From LAN/WAN management to NOC operations, we deliver 24/7
            support and deep technical insight, keeping your network infrastructure resilient,
            secure, and scalable.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
                font: "400 clamp(1.4rem, 2.6vw, 2.2rem)/.98 Georgia, 'Times New Roman', serif",
                color: ink,
                maxWidth: 720,
              }}
            >
              Our Network Support Services Portfolio
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
    </Box>
  );
};

export default NetworkSupport;