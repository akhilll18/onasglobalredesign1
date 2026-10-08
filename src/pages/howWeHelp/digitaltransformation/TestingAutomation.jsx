import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowForward } from '@mui/icons-material';
import {
  Wrench,
  Zap,
  BarChart3,
  Shield,
  Smartphone,
  Layers,
} from 'lucide-react';

import {
  PageShell, Section, Eyebrow, SectionHeading, SubHeading,
  Body, LimeButton, cardSx, containerSx, heroHeadingSx,
  ink, muted, line, soft, lime,
} from '../../../theme/theme';

import Image1 from '../../../assets/images/howWeHelp/digitaltrans/testingauto/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/digitaltrans/testingauto/img2.png';
import Image3 from '../../../assets/images/howWeHelp/digitaltrans/testingauto/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/digitaltrans/testingauto/img4.png';

const TestingAutomation = () => {
  const baseUrl = window.location.origin;
  const pageUrl = `${baseUrl}/services/testing-qa`;

  const slides = [Image1, Image2, Image3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const seoData = {
    title: 'Software Testing & QA Services | Quality Assurance & Test Automation 2024',
    description: 'Professional software testing and QA services: functional testing, test automation, performance testing, security testing, mobile/web testing, and API testing. Enterprise QA solutions.',
    keywords: 'software testing, QA services, quality assurance, test automation, automated testing, performance testing, security testing, mobile testing, web testing, API testing',
    canonicalUrl: pageUrl,
    ogImage: Image1,
    twitterImage: Image1,
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software Testing & QA Services",
    "description": "Comprehensive software testing and quality assurance services including automation, performance, security, and functional testing",
    "provider": { "@type": "Organization", "name": "ONAS", "url": baseUrl, "logo": `${baseUrl}/logo.png` },
    "serviceType": ["Functional Testing", "Test Automation", "Performance Testing", "Security Testing", "Mobile & Web Testing", "API & Microservices Testing"],
    "areaServed": { "@type": "Country", "name": "Global" },
    "offers": { "@type": "Offer", "category": "TechnologyServices" }
  };

  const offerings = [
    { icon: <Layers size={20} color="#0B4C74" />, title: 'Functional Testing', text: `End-to-end scenario testing for enterprise applications\nUse-case validation, UI/UX checks, and business logic testing` },
    { icon: <Zap size={20} color="#0B4C74" />, title: 'Test Automation', text: `Framework-driven automation (Selenium, Appium, Cypress)\nScriptless automation and reusable test assets` },
    { icon: <BarChart3 size={20} color="#0B4C74" />, title: 'Performance Testing', text: `Load, stress, and endurance testing for web and mobile apps\nScalability and failover readiness under peak loads` },
    { icon: <Shield size={20} color="#0B4C74" />, title: 'Security Testing', text: `Threat modeling, vulnerability scanning, and penetration testing\nCompliance assurance (HIPAA, PCI, OWASP, ISO, SOC2)` },
    { icon: <Smartphone size={20} color="#0B4C74" />, title: 'Mobile & Web Testing', text: `Multi-platform and browser/device testing\nResponsive design, cross-device behaviour, and compatibility checks` },
    { icon: <Wrench size={20} color="#0B4C74" />, title: 'API & Microservices Testing', text: `Interface testing, service validation, and integration assurance\nContract testing and continuous test automation` },
  ];

  const testMetrics = [
    { label: 'Defect Detection', value: '90-95%' },
    { label: 'Test Automation', value: '70-80%' },
    { label: 'Cost Reduction', value: '30-50%' },
    { label: 'Time Savings', value: '40-60%' },
    { label: 'Quality Improvement', value: '50-70%' },
    { label: 'ROI on Testing', value: '3-5x' },
  ];

  const testingTools = [
    { category: 'Test Automation', tech: 'Selenium, Cypress, Appium, TestComplete' },
    { category: 'Performance Testing', tech: 'JMeter, LoadRunner, Gatling, BlazeMeter' },
    { category: 'Security Testing', tech: 'OWASP ZAP, Burp Suite, Nessus, Metasploit' },
    { category: 'API Testing', tech: 'Postman, SoapUI, Rest-Assured, Karate' },
    { category: 'Mobile Testing', tech: 'Appium, XCUITest, Espresso, BrowserStack' },
    { category: 'Test Management', tech: 'Jira, TestRail, Zephyr, qTest, Xray' },
  ];

  const methodology = [
    { phase: 'Planning & Analysis', description: 'Requirement analysis, test strategy development, test plan creation, and risk assessment.' },
    { phase: 'Test Design', description: 'Test case development, test data preparation, automation framework design, and environment setup.' },
    { phase: 'Test Execution', description: 'Manual testing, automated test execution, defect logging, and progress tracking.' },
    { phase: 'Reporting & Closure', description: 'Test result analysis, defect reporting, test summary reports, and process improvement.' },
  ];

  return (
    <PageShell>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:title" content="Software Testing & QA Services | Quality Assurance Solutions" />
        <meta property="og:description" content="Professional software testing services for functional, automation, performance, and security testing of web and mobile applications." />
        <meta property="og:image" content={seoData.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Software Testing & QA Services | Test Automation" />
        <meta name="twitter:description" content="Comprehensive software testing and quality assurance services for enterprise applications." />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS Testing Solutions" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

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
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -2, overflow: 'hidden' }}>
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
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              background: 'linear-gradient(180deg, rgba(255,255,255,.10) 0%, rgba(0,0,0,.45) 100%)',
            }}
          />
        </Box>

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Eyebrow sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)' }}>
            Software Testing &amp; QA
          </Eyebrow>
          <Typography
            component="h1"
            sx={{
              ...heroHeadingSx,
              color: '#ffffff',
              marginLeft: 'auto',
              marginRight: 'auto',
              textShadow: '0 2px 12px rgba(0,0,0,.95), 0 1px 3px rgba(0,0,0,1)',
            }}
          >
            Software Testing &amp; QA Services
          </Typography>
          <Body
            sx={{
              color: '#ffffff !important',
              maxWidth: 780,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '1.8rem',
              textShadow: '0 1px 8px rgba(0,0,0,.95)',
            }}
          >
            Go beyond traditional checkpoints—embed confidence into every release. Our software testing services integrate automation, precision, and performance engineering to ensure flawless user experiences at scale.
          </Body>
          <LimeButton href="/resources/contact-us">
            Contact Us <ArrowForward sx={{ fontSize: 14 }} />
          </LimeButton>
        </Container>
      </Box>

      <Section>
        <Box sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center' }}>
          <Eyebrow>Introduction</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Comprehensive Software Testing Solutions for Quality Assurance
          </SectionHeading>
          <Body sx={{ maxWidth: 640, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            Our software testing and QA services ensure your applications are reliable, secure, and performant. We implement industry-best practices, advanced automation frameworks, and comprehensive testing strategies to deliver high-quality software solutions.
          </Body>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>What We Offer</Eyebrow>
          <SectionHeading>Our Testing &amp; QA Services</SectionHeading>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '1rem', md: '1.2rem' },
            alignItems: 'stretch',
          }}
        >
          {offerings.map((item, i) => (
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
                  {item.icon}
                </Box>
                <SubHeading sx={{ marginBottom: '.5rem' }}>{item.title}</SubHeading>
                <Body sx={{ whiteSpace: 'pre-line', flexGrow: 1 }}>{item.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Why Testing Matters</Eyebrow>
          <SectionHeading>The Impact of Professional Software Testing</SectionHeading>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: '1.5rem', md: '2rem' },
            alignItems: 'stretch',
          }}
        >
          <Box sx={{ background: soft, border: `1px solid ${line}`, borderRadius: '2px', padding: { xs: '1.6rem 1.2rem', md: '2.2rem 1.8rem' } }}>
            <Eyebrow>Benefits</Eyebrow>
            <SubHeading sx={{ marginTop: '.6rem', marginBottom: '1.2rem', font: "400 clamp(1.2rem, 2vw, 1.6rem)/1.15 Georgia, 'Times New Roman', serif" }}>
              Benefits of Professional Software Testing
            </SubHeading>
            <Body sx={{ fontSize: '.7rem', lineHeight: 1.8, marginBottom: '.9rem' }}>
              Our software testing services deliver significant business benefits including improved software quality, reduced maintenance costs, enhanced user satisfaction, faster time-to-market, and compliance with industry standards and regulations.
            </Body>
            <Body sx={{ fontSize: '.7rem', lineHeight: 1.8, marginBottom: '.9rem' }}>
              By implementing comprehensive testing strategies and automation frameworks, we help organizations identify defects early, reduce rework, improve application performance, and ensure security and reliability across all platforms.
            </Body>
            <Body sx={{ fontSize: '.7rem', lineHeight: 1.8, margin: 0 }}>
              Our testing expertise spans across various industries including healthcare, finance, e-commerce, enterprise software, and mobile applications, ensuring domain-specific testing approaches and compliance requirements are met.
            </Body>
          </Box>

          <Box sx={{ background: soft, border: `1px solid ${line}`, borderRadius: '2px', padding: { xs: '1.6rem 1.2rem', md: '2.2rem 1.8rem' } }}>
            <Eyebrow>Impact Metrics</Eyebrow>
            <SubHeading sx={{ marginTop: '.6rem', marginBottom: '1.4rem', font: "400 clamp(1.2rem, 2vw, 1.6rem)/1.15 Georgia, 'Times New Roman', serif" }}>
              Testing Service Impact Metrics
            </SubHeading>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: { xs: '.8rem', md: '1rem' },
              }}
            >
              {testMetrics.map((metric, idx) => (
                <Box
                  key={idx}
                  sx={{
                    padding: '1rem .8rem',
                    border: `1px solid ${line}`,
                    borderRadius: '2px',
                    background: '#fff',
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
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Our Stack</Eyebrow>
          <SectionHeading>Testing Tools &amp; Technologies</SectionHeading>
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
              border: `1px solid ${line}`,
              borderRadius: '2px',
              overflow: 'hidden',
              background: '#fff',
              minHeight: { xs: 280, sm: 420, md: 480 },
            }}
          >
            <Box
              component="img"
              src={Image4}
              alt="Testing tools and technologies"
              sx={{ width: '100%', height: '100%', minHeight: 'inherit', objectFit: 'cover', display: 'block' }}
            />
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: { xs: '1rem', md: '1.2rem' },
              alignItems: 'stretch',
            }}
          >
            {testingTools.map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                style={{ display: 'flex', width: '100%' }}
              >
                <Box sx={cardSx}>
                  <SubHeading sx={{ marginBottom: '.5rem' }}>{stack.category}</SubHeading>
                  <Body sx={{ flexGrow: 1 }}>{stack.tech}</Body>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Process</Eyebrow>
          <SectionHeading>Our Testing Methodology</SectionHeading>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: '1rem', md: '1.2rem' },
            alignItems: 'stretch',
          }}
        >
          {methodology.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box sx={{ ...cardSx, alignItems: 'center', textAlign: 'center' }}>
                <Box
                  sx={{
                    display: 'grid',
                    placeItems: 'center',
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: ink,
                    color: '#fff',
                    font: "400 1rem Georgia, 'Times New Roman', serif",
                    marginBottom: '1rem',
                    flexShrink: 0,
                  }}
                >
                  {idx + 1}
                </Box>
                <SubHeading sx={{ marginBottom: '.5rem' }}>{phase.phase}</SubHeading>
                <Body sx={{ flexGrow: 1 }}>{phase.description}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
          <Eyebrow>Get Started</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Ensure Software Quality with Expert Testing Services
          </SectionHeading>
          <Body sx={{ marginBottom: '1.8rem', fontSize: '.72rem', lineHeight: 1.75 }}>
            Contact our software testing experts to discuss your testing requirements, implement comprehensive QA strategies, and ensure your software meets the highest quality standards.
          </Body>
          <LimeButton href="/resources/contact-us">
            Request Testing Consultation <ArrowForward sx={{ fontSize: 14 }} />
          </LimeButton>
        </Box>
      </Section>
    </PageShell>
  );
};

export default TestingAutomation;