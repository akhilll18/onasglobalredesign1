import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowForward } from '@mui/icons-material';
import {
  Wrench,
  BarChart3,
  Layers,
  Shield,
  Zap,
  Database,
} from 'lucide-react';

// Hero Image
import AppMaintenanceHero from '../../../assets/images/howWeHelp/mitoper/appmaintain.png';

// Images
import Image1 from '../../../assets/images/howWeHelp/mitoper/AMS/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/mitoper/AMS/img2.jpg';
import { Eyebrow, PageShell, Section, SectionHeading, SubHeading, Body, LimeButton, cardSx, containerSx, heroHeadingSx, ink, muted, line, soft, cream, lime } from '../../../theme/theme';

const ApplicationMaintenance = () => {
  const baseUrl = window.location.origin;
  const pageUrl = `${baseUrl}/services/application-maintenance`;

  // ── Slideshow state ──
  const slides = [AppMaintenanceHero, Image1, Image2];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const seoData = {
    title: 'Application Maintenance Services | 24/7 Application Support & Management 2024',
    description: 'Professional application maintenance services: 24/7 support, performance optimization, legacy modernization, cloud maintenance, and compliance management. Enterprise application support.',
    keywords: 'application maintenance, application maintenance services, application support, application management, legacy application maintenance, cloud application maintenance, application performance optimization, application modernization, application patching, application upgrades, 24/7 application support, managed application services, application monitoring, application troubleshooting, application security maintenance, application maintenance company, application support services, application maintenance solutions, application lifecycle management, application maintenance outsourcing, application maintenance and support, enterprise application maintenance, SaaS application maintenance, cloud application support',
    canonicalUrl: pageUrl,
    ogImage: AppMaintenanceHero,
    twitterImage: AppMaintenanceHero,
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Application Maintenance Services",
    "description": "Comprehensive application maintenance and support services including 24/7 monitoring, performance optimization, legacy modernization, and cloud maintenance",
    "provider": { "@type": "Organization", "name": "ONAS", "url": baseUrl, "logo": `${baseUrl}/logo.png` },
    "serviceType": ["Application Maintenance", "Application Support", "Performance Optimization", "Legacy Modernization", "Cloud Application Support", "24/7 Managed Services"],
    "areaServed": { "@type": "Country", "name": "Global" },
    "offers": { "@type": "Offer", "category": "TechnologyServices", "availability": "https://schema.org/InStock" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is application maintenance and why is it important?", "acceptedAnswer": { "@type": "Answer", "text": "Application maintenance involves ongoing support, updates, and optimization of software applications to ensure they remain secure, performant, and aligned with business needs. It's crucial for preventing downtime, ensuring security, maintaining compliance, and extending application lifespan while reducing total cost of ownership." } },
      { "@type": "Question", "name": "What services are included in application maintenance?", "acceptedAnswer": { "@type": "Answer", "text": "Our application maintenance services include 24/7 monitoring, incident management, performance optimization, security patching, bug fixes, version upgrades, compliance management, cloud maintenance, legacy modernization, and continuous improvement of applications across various platforms and technologies." } },
      { "@type": "Question", "name": "How do you handle legacy application maintenance?", "acceptedAnswer": { "@type": "Answer", "text": "We provide specialized legacy application maintenance including code refactoring, platform migration, security hardening, performance tuning, and gradual modernization strategies to extend the life of legacy systems while maintaining stability and preparing for future upgrades." } },
      { "@type": "Question", "name": "What are the benefits of outsourcing application maintenance?", "acceptedAnswer": { "@type": "Answer", "text": "Outsourcing application maintenance provides cost savings (30-50% reduction in maintenance costs), access to specialized expertise, 24/7 support coverage, improved application performance, enhanced security, faster issue resolution, and allows internal teams to focus on core business initiatives and innovation." } }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": `${baseUrl}/services` },
      { "@type": "ListItem", "position": 3, "name": "Application Maintenance", "item": seoData.canonicalUrl }
    ]
  };

  const offerings = [
    { Icon: Wrench, title: 'Preventive & Corrective Support', text: 'Monitor, detect, and resolve issues before they impact users or performance.', schemaType: "SupportService" },
    { Icon: BarChart3, title: 'Performance Optimization', text: 'Fine-tune runtime environments, eliminate latency, and ensure high responsiveness.', schemaType: "OptimizationService" },
    { Icon: Layers, title: 'Legacy Application Modernization', text: 'Upgrade legacy apps using replatforming, refactoring, or rehosting—without disruption.', schemaType: "ModernizationService" },
    { Icon: Database, title: 'Cloud & Hybrid App Support', text: 'Maintain, monitor, and optimize applications hosted on AWS, Azure, GCP, or hybrid setups.', schemaType: "CloudService" },
    { Icon: Zap, title: 'Patch, Upgrade & Compliance Management', text: 'Timely release cycles, version control, and vulnerability patching to keep your systems secure.', schemaType: "ComplianceService" },
    { Icon: Shield, title: '24/7 Managed Application Services', text: 'Global helpdesk, ticket triage, and incident management tailored to business-critical SLAs.', schemaType: "ManagedService" },
  ];

  const valueDelivery = [
    { Icon: Zap, title: 'Stability That Sustains', text: 'Maximize uptime and system reliability with proactive issue prevention.' },
    { Icon: Shield, title: 'Business-Centric Support', text: 'Align fixes, updates, and enhancements with real operational priorities.' },
    { Icon: Layers, title: 'Preventive Over Reactive', text: 'Detect, resolve, and avoid risks before they disrupt critical functions.' },
    { Icon: Database, title: 'Cross-Platform Mastery', text: 'Support for legacy, cloud, hybrid, and enterprise-grade custom applications.' },
    { Icon: Wrench, title: 'Efficient Cost Models', text: 'Cut support costs with automation, issue trends, and TCO-driven strategies.' },
  ];

  const impactMetrics = [
    { label: 'Downtime Reduction', value: '70-90%' },
    { label: 'Cost Savings', value: '30-50%' },
    { label: 'Performance Improvement', value: '40-60%' },
    { label: 'Issue Resolution Time', value: '50-70% Faster' },
    { label: 'Application Lifespan', value: '2-3x Extension' },
    { label: 'User Satisfaction', value: '80-95%' },
  ];

  const technologies = [
    { category: 'Programming Languages', tech: 'Java, .NET, Node.js, Python, PHP, Ruby' },
    { category: 'Frontend Frameworks', tech: 'React, Angular, Vue.js, JavaScript, TypeScript' },
    { category: 'Databases', tech: 'Oracle, SQL Server, MySQL, PostgreSQL, MongoDB' },
    { category: 'Cloud Platforms', tech: 'AWS, Azure, Google Cloud, IBM Cloud' },
    { category: 'Legacy Systems', tech: 'COBOL, Mainframe, AS/400, VB6, Delphi' },
    { category: 'Middleware', tech: 'WebSphere, WebLogic, Tomcat, Apache, Nginx' },
  ];

  return (
    <Box sx={{ background: cream, color: ink, width: '100%', overflowX: 'hidden', '& h1, & h2, & h3': { fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, letterSpacing: 0 } }}>
      {/* ── SEO ── */}
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:title" content="Application Maintenance Services | 24/7 Application Support" />
        <meta property="og:description" content="Professional application maintenance and support services for enterprise applications, cloud platforms, and legacy systems." />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ONAS Application Services" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourCompany" />
        <meta name="twitter:creator" content="@YourCompany" />
        <meta name="twitter:title" content="Application Maintenance Services | Enterprise App Support" />
        <meta name="twitter:description" content="24/7 application maintenance and support services for business-critical applications." />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="twitter:image:alt" content="Application Maintenance Services" />
        <meta property="linkedin:title" content="Application Maintenance Services" />
        <meta property="linkedin:description" content="Enterprise application maintenance and support services for legacy, cloud, and hybrid applications." />
        <meta property="linkedin:image" content={seoData.ogImage} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS Application Services" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="date" content={new Date().toISOString().split('T')[0]} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ONAS",
            "url": baseUrl,
            "logo": `${baseUrl}/logo.png`,
            "sameAs": ["https://twitter.com/yourcompany", "https://linkedin.com/company/yourcompany", "https://github.com/yourcompany"],
            "description": "Application maintenance and support services"
          })}
        </script>
      </Helmet>

      {/* Hidden SEO */}
      <div style={{ display: 'none' }}>
        <h1>Application Maintenance and Support Services</h1>
        <p>Comprehensive application maintenance services for enterprise applications, legacy systems, cloud platforms, and hybrid environments. Our 24/7 application support ensures maximum uptime, performance, and security for your critical business applications.</p>
        <h2>Application Maintenance Services Overview</h2>
        <p>Professional application maintenance including monitoring, troubleshooting, performance optimization, security patching, version upgrades, legacy modernization, and cloud application support for various technologies and platforms.</p>
        <h3>Application Maintenance Benefits</h3>
        <ul>
          <li>Reduced application downtime and improved reliability</li>
          <li>Enhanced application performance and user experience</li>
          <li>Cost-effective maintenance through optimized processes</li>
          <li>Extended application lifecycle and return on investment</li>
          <li>Improved security through regular updates and patching</li>
          <li>Compliance with industry regulations and standards</li>
        </ul>
        <h4>Application Technologies We Support</h4>
        <p>We maintain applications built with Java, .NET, Node.js, Python, PHP, React, Angular, Vue.js, legacy systems, and various databases and cloud platforms including AWS, Azure, and Google Cloud.</p>
      </div>

      {/* ── Hero — Slideshow background ── */}
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
          <Typography sx={{ color: lime, fontSize: '.55rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 700, fontFamily: "'Poppins', sans-serif", marginBottom: '.7rem' }}>
            Application Maintenance
          </Typography>
          <Typography
            component="h1"
            sx={{ margin: '.4rem 0 1rem', font: "400 clamp(2rem, 4.5vw, 3.6rem)/1.02 Georgia, 'Times New Roman', serif", color: '#fff', maxWidth: 900 }}
          >
            Application Maintenance Services
          </Typography>
          <Typography
            sx={{ color: 'rgba(255,255,255,.82) !important', fontFamily: "'Poppins', sans-serif", fontSize: { xs: '.72rem', md: '.78rem' }, lineHeight: 1.7, maxWidth: 640, marginBottom: '1.8rem' }}
          >
            Keep mission-critical systems stable, secure, and scalable with application maintenance services designed to eliminate downtime and optimize every layer of performance.
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

      {/* ── SEO Introduction ── */}
      <Container maxWidth={false} disableGutters sx={containerSx}>
        <Box sx={{ maxWidth: 900, mx: 'auto', padding: { xs: '3rem 1rem', md: '4rem 0' }, textAlign: 'center' }}>
          <Eyebrow>Introduction</Eyebrow>
          <Typography component="h2" sx={{ margin: '.7rem auto 1rem', font: "400 clamp(1.6rem, 3.2vw, 2.4rem)/1.05 Georgia, 'Times New Roman', serif", color: ink, maxWidth: 800 }}>
            Professional Application Maintenance for Business-Critical Systems
          </Typography>
          <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.72rem', lineHeight: 1.75, maxWidth: 640, margin: '0 auto' }}>
            Our application maintenance services ensure your software applications remain performant, secure, and aligned with business needs. We provide comprehensive support including monitoring, troubleshooting, optimization, and continuous improvement across all application types and platforms.
          </Typography>
        </Box>
      </Container>

      {/* ── Offerings — 3 per row ── */}
      <Box sx={{ background: soft }}>
        <Container maxWidth={false} disableGutters sx={{ ...containerSx, paddingTop: { xs: '3.5rem', md: '5rem' }, paddingBottom: { xs: '3.5rem', md: '5rem' } }}>
          <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <Eyebrow>What We Offer</Eyebrow>
            <Typography component="h2" sx={{ margin: '.7rem auto 0', font: "400 clamp(1.8rem, 3.6vw, 3.6rem)/.98 Georgia, 'Times New Roman', serif", color: ink, maxWidth: 720 }}>
              Our Application Maintenance Offerings
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
                    <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, marginBottom: '1rem', flexShrink: 0 }}>
                      <Icon size={20} color="#257a68" />
                    </Box>
                    <Typography itemProp="name" component="h3" sx={{ margin: '0 0 .55rem', font: "400 .92rem Georgia, 'Times New Roman', serif", color: ink, lineHeight: 1.25, minHeight: '2.4rem' }}>
                      {item.title}
                    </Typography>
                    <Typography itemProp="description" sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.66rem', lineHeight: 1.75, flexGrow: 1 }}>
                      {item.text}
                    </Typography>
                  </Box>
                </motion.div>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* ── How We Deliver Long-Term Value — image left, cards right ── */}
      <Container maxWidth={false} disableGutters sx={{ ...containerSx, paddingTop: { xs: '3.5rem', md: '5rem' }, paddingBottom: { xs: '3.5rem', md: '5rem' } }}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Delivery</Eyebrow>
          <Typography component="h2" sx={{ margin: '.7rem auto 0', font: "400 clamp(1.8rem, 3.6vw, 3.6rem)/.98 Georgia, 'Times New Roman', serif", color: ink, maxWidth: 720 }}>
            How We Deliver Long-Term Value
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: { xs: '2rem', sm: '1.5rem', md: '2rem' },
            alignItems: 'stretch',
          }}
        >
          {/* Left — image */}
          <Box
            sx={{
              border: `1px solid ${line}`,
              borderRadius: '2px',
              overflow: 'hidden',
              background: '#fff',
              minHeight: { xs: 320, sm: 480, md: 540 },
            }}
          >
            <Box
              component="img"
              src={Image1}
              alt="Long-term application maintenance value"
              sx={{ width: '100%', height: '100%', minHeight: 'inherit', objectFit: 'cover', display: 'block' }}
            />
          </Box>

          {/* Right — 5 cards stacked */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '.8rem', md: '1rem' } }}>
            {valueDelivery.map((item, i) => {
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
                  <Box sx={{ ...cardSx, flexDirection: 'row', alignItems: 'flex-start', gap: '1rem' }}>
                    <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', background: soft, border: `1px solid ${line}`, flexShrink: 0 }}>
                      <Icon size={20} color="#257a68" />
                    </Box>
                    <Box>
                      <Typography component="h3" sx={{ margin: '0 0 .35rem', font: "400 .88rem Georgia, 'Times New Roman', serif", color: ink, lineHeight: 1.25 }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.64rem', lineHeight: 1.7 }}>
                        {item.text}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              );
            })}
          </Box>
        </Box>
      </Container>

      {/* ── Benefits + Impact Metrics ── */}
      <Box sx={{ background: soft }}>
        <Container maxWidth={false} disableGutters sx={{ ...containerSx, paddingTop: { xs: '3.5rem', md: '5rem' }, paddingBottom: { xs: '3.5rem', md: '5rem' } }}>
          <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <Eyebrow>Benefits</Eyebrow>
            <Typography component="h2" sx={{ margin: '.7rem auto 0', font: "400 clamp(1.8rem, 3.6vw, 3.6rem)/.98 Georgia, 'Times New Roman', serif", color: ink, maxWidth: 720 }}>
              Benefits of Professional Application Maintenance
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
            {/* Left — text */}
            <Box>
              <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.72rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                Our application maintenance services deliver significant business benefits including reduced downtime, improved performance, enhanced security, cost savings, and extended application lifecycle.
              </Typography>
              <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.72rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                By implementing proactive maintenance strategies and leveraging automation, we help organizations prevent issues before they occur, optimize resource utilization, and ensure applications continue to meet evolving business needs.
              </Typography>
              <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.72rem', lineHeight: 1.8, marginBottom: 0 }}>
                Our expertise spans across various application types including legacy systems, cloud-native applications, enterprise software, and custom business applications across different industries and technologies.
              </Typography>
            </Box>

            {/* Right — Impact Metrics card */}
            <Box sx={{ background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: { xs: '1.8rem 1.4rem', md: '2.2rem' } }}>
              <Eyebrow>Impact Metrics</Eyebrow>
              <Typography component="h3" sx={{ margin: '.6rem 0 1.4rem', font: "400 clamp(1.3rem, 2.2vw, 1.7rem)/1.15 Georgia, 'Times New Roman', serif", color: ink }}>
                Application Maintenance Impact Metrics
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
                    <Typography sx={{ margin: '.35rem 0 0', color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.55rem', letterSpacing: '.05em', textTransform: 'uppercase' }}>
                      {metric.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Application Technologies — content left, image right ── */}
      <Container maxWidth={false} disableGutters sx={{ ...containerSx, paddingTop: { xs: '3.5rem', md: '5rem' }, paddingBottom: { xs: '3.5rem', md: '5rem' } }}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Technology Stack</Eyebrow>
          <Typography component="h2" sx={{ margin: '.7rem auto 0', font: "400 clamp(1.8rem, 3.6vw, 3.6rem)/.98 Georgia, 'Times New Roman', serif", color: ink, maxWidth: 720 }}>
            Application Technologies We Maintain
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: { xs: '2rem', sm: '1.5rem', md: '2rem' },
            alignItems: 'stretch',
          }}
        >
          {/* Left — 6 tech cards in 2×3 grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: { xs: '1rem', md: '1.2rem' },
              alignItems: 'stretch',
            }}
          >
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{ display: 'flex', width: '100%' }}
              >
                <Box sx={cardSx}>
                  <Typography component="h3" sx={{ margin: '0 0 .5rem', font: "400 .88rem Georgia, 'Times New Roman', serif", color: ink, lineHeight: 1.25, minHeight: '2.2rem' }}>
                    {tech.category}
                  </Typography>
                  <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.64rem', lineHeight: 1.7, flexGrow: 1 }}>
                    {tech.tech}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Right — image */}
          <Box
            sx={{
              border: `1px solid ${line}`,
              borderRadius: '2px',
              overflow: 'hidden',
              background: '#fff',
              minHeight: { xs: 320, sm: 480, md: 540 },
            }}
          >
            <Box
              component="img"
              src={Image2}
              alt="Application technologies we maintain"
              sx={{ width: '100%', height: '100%', minHeight: 'inherit', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Box>
      </Container>

      {/* ── CTA Section ── */}
      <Box sx={{ background: soft, borderTop: `1px solid ${line}` }}>
        <Container maxWidth={false} disableGutters sx={containerSx}>
          <Box sx={{ maxWidth: 800, mx: 'auto', padding: { xs: '4rem 1rem', md: '5rem 0' }, textAlign: 'center' }}>
            <Eyebrow>Get Started</Eyebrow>
            <Typography component="h2" sx={{ margin: '.7rem auto 1rem', font: "400 clamp(1.8rem, 3.6vw, 3rem)/1.05 Georgia, 'Times New Roman', serif", color: ink }}>
              Ensure Application Reliability with Expert Maintenance
            </Typography>
            <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.72rem', lineHeight: 1.75, marginBottom: '1.8rem' }}>
              Contact our application maintenance experts to discuss your support requirements, implement proactive maintenance strategies, and ensure your critical applications remain reliable, secure, and performant.
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
              Request Maintenance Consultation <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ApplicationMaintenance;