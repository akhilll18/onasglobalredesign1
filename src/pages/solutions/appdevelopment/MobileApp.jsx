import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowForward, ExpandMore } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { Smartphone, Code, Layers, Shield, Zap, RefreshCw, Users, Database } from 'lucide-react';

import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  Body,
  cardSx,
  containerSx,
  ink, muted, line, soft, cream, lime,
} from '../../../theme/theme';

const MobileApp = () => {
  // ── Slideshow state ──
  const slides = [
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9a?w=1600&q=80',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&q=80',
    'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1600&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleAccordionChange = (panel) => (_, isExpanded) =>
    setExpanded(isExpanded ? panel : false);

  // ── Content ──
  const painPoints = [
    { title: 'One Team, Two Codebases', text: "Maintaining separate iOS and Android projects doubles engineering effort and slows every release." },
    { title: 'Inconsistent User Experience', text: "Native silos cause UI drift, feature parity gaps, and QA overhead you can't afford at scale." },
    { title: 'No Clear Cross-Platform Strategy', text: "Choosing the wrong stack or framework early forces rewrites that delay market entry by months." },

  ];

  const services = [
    { Icon: Layers, title: 'Cross-Platform App Development', text: 'One React Native or Flutter codebase that ships native-quality experiences to iOS, Android, and beyond.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9a?w=600&h=400&fit=crop' },
    { Icon: Smartphone, title: 'Native iOS & Android Development', text: 'When the product demands it, we build native with Swift, SwiftUI, Kotlin, and Jetpack Compose.', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop' },
    { Icon: Zap, title: 'Feature-First Development', text: 'We ship in reviewable increments so you see working software on real devices from week one.', image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=600&h=400&fit=crop' },
    { Icon: Shield, title: 'Security & Compliance', text: 'Secure identity, encrypted data, HIPAA and GDPR alignment, and audit-ready logging built into every release.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop' },
    { Icon: RefreshCw, title: 'App Modernization', text: 'Move legacy apps to modern architectures, upgrade dependencies, and remove technical debt without disrupting users.', image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop' },
    { Icon: Database, title: 'Backend & API Integration', text: 'Connect your app to REST, GraphQL, identity providers, payments, analytics, and internal systems.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
  ];

  const industries = [
    { title: 'Healthcare', text: 'Patient apps, telehealth, and clinical workflow tools built with HIPAA-conscious architecture.', path: '/who-we-help/industries#healthcare' },
    { title: 'Finance & Insurance', text: 'Secure mobile banking, wealth management, and policyholder apps with compliance built in.', path: '/who-we-help/industries#insurance' },
    { title: 'Retail & E-Commerce', text: 'Shopping, loyalty, and omnichannel apps that convert across devices and storefronts.', path: '/who-we-help/industries#retail' },
    { title: 'Education', text: 'Learning platforms, virtual classrooms, and student portals engineered for scale.', path: '/who-we-help/industries#education' },
    { title: 'Media & Entertainment', text: 'Streaming, publishing, and content apps that deliver reliably under load.', path: '/who-we-help/industries#communication-media-info' },
    { title: 'Travel & Hospitality', text: 'Booking, loyalty, and on-the-go service apps built for global audiences.', path: '/who-we-help/industries#travel-logistics' },
  ];

  const faqs = [
    { q: 'How much does it cost to build a mobile app?', a: 'Cost depends on scope, platform coverage, integrations, and the delivery timeline. A focused MVP typically starts lower than a full-featured production app. We provide a fixed-scope estimate after a short discovery session.' },
    { q: 'How long does it take to build a mobile app?', a: 'A focused MVP usually takes 8–12 weeks. A production-grade app with complex integrations and compliance needs typically takes 3–6 months. We sequence work so you see working software within the first few weeks.' },
    { q: 'Should we use a cross-platform approach or native?', a: 'Cross-platform is often the right choice when you want to ship to both platforms quickly with a shared codebase. Native is preferable when the product depends heavily on platform-specific APIs or highly native interaction patterns. We help you weigh both sides.' },
    { q: 'Can you work with an app we already have?', a: 'Yes. We review the codebase, dependencies, build pipeline, and roadmap, then recommend a staged path — improvements, modernization, or migration — based on risk and business priorities.' },
    { q: 'What happens after launch?', a: 'Post-launch support can include crash and performance monitoring, OS compatibility updates, defect fixes, feature work, and knowledge transfer to your in-house team.' },
    { q: 'Do you handle App Store and Play Store submissions?', a: 'Yes. We prepare the listing, assets, privacy documentation, and release notes, then coordinate submission and monitor the rollout.' },
    { q: 'How do you handle app security?', a: 'Security is built into identity, data handling, transport, permissions, dependencies, and release practices. Controls are selected to fit your product, industry, and compliance needs.' },
    { q: 'Can you build apps that integrate with our existing systems?', a: 'Yes. Mobile apps can connect to REST and GraphQL APIs, identity providers, analytics, payment processors, CRM, ERP, and internal backends.' },
  ];

  return (
    <PageShell>
      {/* ── HERO — SEO-style centered hero with slideshow ── */}
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
            }}
          >
            Mobile App Development
          </Typography>
          <Typography
            component="h1"
            sx={{
              margin: '.4rem auto 1rem',
              font: "400 clamp(1.5rem, 3.2vw, 2.4rem)/1.1 Georgia, 'Times New Roman', serif",
              color: '#fff',
              maxWidth: 900,
            }}
          >
            Mobile App Development Services
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255,255,255,.82) !important',
              fontFamily: "'Poppins', sans-serif",
              fontSize: { xs: '.72rem', md: '.78rem' },
              lineHeight: 1.7,
              maxWidth: 640,
              margin: '0 auto 1.8rem',
            }}
          >
            Build mobile products that scale with your business. From cross-platform MVPs to
            native iOS and Android apps, ONAS engineers mobile experiences users return to.
          </Typography>
          <Box
            component="a"
            href="/resources/contact-us"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.5rem',
              padding: '.7rem 1.1rem',
              borderRadius: '3px',
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
            Discuss Your App <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Box>

      {/* ── PAIN POINTS — small cards left + image right ── */}
      <Section bg={soft}>
        <Box
          sx={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.1fr .9fr' },
            gap: { xs: '2rem', md: '3rem' },
            alignItems: 'center',
          }}
        >
          {/* LEFT — heading + small stacked cards */}
          <Box>
            <Eyebrow>The Problem</Eyebrow>
            <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 620, textAlign: 'left', marginLeft: 0, marginRight: 0 }}>
              From Two Divergent Codebases to One App You Can Actually Maintain
            </SectionHeading>
            <Body sx={{ maxWidth: 620, marginTop: '1rem', marginBottom: '2rem' }}>
              Mobile teams lose months to the same problems. ONAS builds products that avoid them from day one.
            </Body>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.9rem' }}>
              {painPoints.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <Box
                    sx={{
                      ...cardSx,
                      borderRadius: '3px',
                      padding: { xs: '1rem 1.1rem', md: '1.1rem 1.3rem' },
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                    }}
                  >
                    <Typography
                      sx={{
                        font: "400 clamp(1.2rem, 2vw, 1.6rem)/1 Georgia, 'Times New Roman', serif",
                        color: '#bcd0c5',
                        flexShrink: 0,
                        minWidth: 40,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </Typography>
                    <Box>
                      <Typography
                        component="h3"
                        sx={{
                          margin: '0 0 .35rem',
                          font: "400 clamp(.8rem, 1.2vw, .92rem)/1.25 Georgia, 'Times New Roman', serif",
                          color: ink,
                          textTransform: 'uppercase',
                          letterSpacing: '.02em',
                        }}
                      >
                        {p.title}
                      </Typography>
                      <Body sx={{ fontSize: '.62rem', lineHeight: 1.65 }}>{p.text}</Body>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* RIGHT — image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Box
              sx={{
                width: '100%',
                height: { xs: 280, md: 520 },
                borderRadius: '3px',
                overflow: 'hidden',
                border: `1px solid ${line}`,
                boxShadow: '0 12px 32px rgba(18,63,59,0.08)',
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9a?w=900&h=1200&fit=crop"
                alt="Mobile app development"
                sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </Box>
          </motion.div>
        </Box>
      </Section>

      {/* ── SERVICES — SEO style (image top, icon circle overlapping) ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>What We Build</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>
            Comprehensive Mobile App Development Services
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '1rem auto 0' }}>
            Customer apps, field operations apps, and internal tools — engineered to run in production, not just in a demo.
          </Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: '1.2rem', md: '1.4rem' } }}>
          {services.map((item, i) => {
            const { Icon } = item;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.05 }} style={{ display: 'flex', width: '100%' }}>
                <Box sx={{ ...cardSx, borderRadius: '3px', padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ width: '100%', height: 140, overflow: 'hidden', borderBottom: `1px solid ${line}` }}>
                    <Box component="img" src={item.image} alt={item.title} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </Box>
                  <Box sx={{ padding: { xs: '1.2rem 1.1rem', md: '1.4rem 1.3rem' }, display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative' }}>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '-22px',
                        left: '1.2rem',
                        display: 'grid',
                        placeItems: 'center',
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        background: '#fff',
                        border: `1px solid ${line}`,
                        boxShadow: '0 4px 12px rgba(18,63,59,0.08)',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} color="#0B4C74" />
                    </Box>
                    <Typography component="h3" sx={{ margin: '1rem 0 .55rem', font: "400 .92rem Georgia, 'Times New Roman', serif", color: ink, lineHeight: 1.25, minHeight: '2.4rem' }}>
                      {item.title}
                    </Typography>
                    <Body sx={{ fontSize: '.66rem', flexGrow: 1 }}>{item.text}</Body>
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Section>

      {/* ── INDUSTRIES — SEO style with RouterLink + Learn More ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Industries</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>
            Industries We Serve
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '1rem auto 0' }}>
            We build mobile products for teams across healthcare, finance, retail, education, and beyond.
          </Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: '1.2rem', md: '1.4rem' } }}>
          {industries.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.05 }} style={{ display: 'flex', width: '100%' }}>
              <Box
                component={RouterLink}
                to={item.path}
                sx={{
                  ...cardSx,
                  borderRadius: '3px',
                  textDecoration: 'none',
                  '&:hover': { borderColor: '#aac7b2', transform: 'translateY(-3px)' },
                }}
              >
                <Typography component="h3" sx={{ margin: '0 0 .55rem', font: "400 .92rem Georgia, 'Times New Roman', serif", color: ink, lineHeight: 1.25 }}>
                  {item.title}
                </Typography>
                <Body sx={{ fontSize: '.66rem', flexGrow: 1 }}>{item.text}</Body>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', marginTop: '1rem', color: '#0B4C74', fontFamily: "'Poppins', sans-serif", fontSize: '.6rem', fontWeight: 600 }}>
                  Learn More <ArrowForward sx={{ fontSize: 12 }} />
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>FAQ</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>
            Frequently Asked Questions
          </SectionHeading>
        </Box>

        <Box sx={{ maxWidth: 900, margin: '0 auto' }}>
          {faqs.map((f, i) => (
            <Accordion
              key={i}
              elevation={0}
              disableGutters
              expanded={expanded === i}
              onChange={handleAccordionChange(i)}
              sx={{
                marginBottom: '.6rem',
                background: '#fff',
                border: `1px solid ${line}`,
                borderRadius: '3px !important',
                overflow: 'hidden',
                '&:before': { display: 'none' },
                '&.Mui-expanded': { margin: '0 0 .6rem 0', borderColor: '#aac7b2' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: '#0B4C74', fontSize: 20 }} />}
                sx={{
                  padding: { xs: '.6rem 1rem', md: '.7rem 1.4rem' },
                  '& .MuiAccordionSummary-content': { margin: '.6rem 0' },
                  '&.Mui-expanded': { minHeight: 'auto' },
                }}
              >
                <Typography
                  sx={{
                    color: `${ink} !important`,
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: '.82rem',
                    lineHeight: 1.4,
                  }}
                >
                  {f.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: { xs: '.2rem 1rem 1.2rem', md: '.2rem 1.4rem 1.4rem' } }}>
                <Body sx={{ fontSize: '.68rem', lineHeight: 1.8 }}>{f.a}</Body>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Section>

      {/* ── CTA — SEO style ── */}
      <Box sx={{ background: soft, borderTop: `1px solid ${line}` }}>
        <Container maxWidth={false} disableGutters sx={containerSx}>
          <Box sx={{ maxWidth: 800, mx: 'auto', padding: { xs: '4rem 1rem', md: '5rem 0' }, textAlign: 'center' }}>
            <Eyebrow>Get Started</Eyebrow>
            <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
              Ready to Build Your Mobile App?
            </SectionHeading>
            <Body sx={{ marginBottom: '1.8rem' }}>
              Share where you are today and what you want the app to make possible. We&apos;ll help map a practical way forward.
            </Body>
            <Box
              component="a"
              href="/resources/contact-us"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '.5rem',
                padding: '.7rem 1.1rem',
                borderRadius: '3px',
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
              Talk to Our Team <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </Box>
        </Container>
      </Box>
    </PageShell>
  );
};

export default MobileApp;