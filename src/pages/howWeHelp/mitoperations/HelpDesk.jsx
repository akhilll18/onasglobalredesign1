import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography, Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';
import { Laptop, Smartphone, Headphones, Shield, Zap, BookOpen, Users, Database } from 'lucide-react';

// Hero Image
import HelpdeskHero from '../../../assets/images/howWeHelp/mitoper/helpdesk.png';

// Images
import Image1 from '../../../assets/images/howWeHelp/mitoper/helpdesk/img1.png';
import Image2 from '../../../assets/images/howWeHelp/mitoper/helpdesk/img2.png';
import Image3 from '../../../assets/images/howWeHelp/mitoper/helpdesk/img3.png';
import Image4 from '../../../assets/images/howWeHelp/mitoper/helpdesk/img4.png';

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

const Helpdesk = () => {
  const baseUrl = window.location.origin;
  const pageUrl = `${baseUrl}/services/helpdesk-support`;

  // ── Slideshow state ──
  const slides = [HelpdeskHero, Image1, Image2, Image3, Image4];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // ── SEO ──
  const seoData = {
    title: '24x7 Helpdesk Support Services | Enterprise IT Help Desk Solutions',
    description:
      'Professional 24x7 helpdesk support services with remote desktop support, end-user device management, IT outsourcing & incident reporting. Improve productivity with SLA-based IT support.',
    keywords:
      '24x7 helpdesk support, IT help desk services, remote desktop support, end-user device management, IT outsourcing, password management, incident reporting, enterprise IT support, SLA-based helpdesk',
    canonicalUrl: pageUrl,
    ogImage: HelpdeskHero,
    ogImageAlt: '24x7 Helpdesk Support Team - IT Support Services',
    twitterImage: HelpdeskHero,
    twitterImageAlt: 'Professional 24x7 IT Helpdesk Support Services',
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '24x7 Helpdesk Support Services',
    description: seoData.description,
    provider: { '@type': 'Organization', name: 'ONAS', url: baseUrl, logo: `${baseUrl}/logo.png` },
    areaServed: { '@type': 'Country', name: 'Global' },
    serviceType: 'IT Support Services',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Helpdesk Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Remote Desktop Support Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'End-User Device Management' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Helpdesk Outsourcing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Application & Software Support' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'User Onboarding & Access Provisioning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Password & Access Management' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Knowledge Management & Training' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Incident Reporting & Analytics' } },
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` },
      { '@type': 'ListItem', position: 3, name: 'Helpdesk Support', item: seoData.canonicalUrl },
    ],
  };

  // ── Offerings ──
  const offerings = [
    { Icon: Laptop, title: 'Remote Desktop Support Services', text: 'Comprehensive support for desktops, laptops, printers, and peripheral devices. Includes remote diagnostics, hardware coordination, and system configuration.' },
    { Icon: Smartphone, title: 'End-User Device Management', text: 'Lifecycle management of desktops, laptops, and mobile devices. Includes OS patching, driver updates, antivirus management, and software deployment.' },
    { Icon: Headphones, title: 'IT Helpdesk Outsourcing', text: 'Complete outsourced helpdesk support with multi-channel ticket resolution (email, chat, phone, and web) backed by performance analytics and SLA-based response.' },
    { Icon: Database, title: 'Application & Software Support', text: 'Support for productivity and enterprise software suites including installation, license validation, bug resolution, and usage assistance.' },
    { Icon: Users, title: 'User Onboarding & Access Provisioning', text: 'Automated user provisioning and access configuration for systems, VPNs, enterprise apps, and collaboration tools.' },
    { Icon: Shield, title: 'Password & Access Management', text: 'Round-the-clock support for password resets, multi-factor authentication, account lockouts, and single sign-on (SSO) configuration.' },
    { Icon: BookOpen, title: 'Knowledge Management & Training', text: 'Curated knowledge base creation, how-to guides, and training materials to enable self-service and improve first-contact resolution.' },
    { Icon: Zap, title: 'Incident Reporting & Analytics', text: 'Daily, weekly, and monthly reports on ticket trends, response metrics, and resolution times to enable continuous improvement.' },
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
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:alt" content={seoData.ogImageAlt} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ONAS Helpdesk Services" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={seoData.canonicalUrl} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="twitter:image:alt" content={seoData.twitterImageAlt} />

        <meta property="linkedin:title" content="24x7 Helpdesk Support Services" />
        <meta property="linkedin:description" content="Enterprise helpdesk support services with SLA-based response and 24x7 coverage." />
        <meta property="linkedin:image" content={seoData.ogImage} />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS Helpdesk Services" />
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
            description: 'Helpdesk and IT support services',
          })}
        </script>
      </Helmet>

      {/* Hidden SEO */}
      <div style={{ display: 'none' }}>
        <h1>24x7 Helpdesk Support Services</h1>
        <p>Professional helpdesk support services for enterprises with remote desktop support, end-user device management, IT helpdesk outsourcing, and incident reporting. SLA-based IT support for improved productivity and minimal downtime.</p>
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
            Helpdesk Support
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
            24x7 Helpdesk Support Services
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
            Empower your workforce with uninterrupted IT support. Our 24x7 helpdesk support services
            ensure timely, accurate, and seamless resolution of user issues, improving productivity
            and minimizing business downtime.
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
              Our 24x7 Helpdesk Services Portfolio
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

export default Helpdesk;