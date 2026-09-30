import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowForward, ExpandMore } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { Code, Layers, Gauge, Shield, RefreshCw, Cloud, Database, Zap } from 'lucide-react';

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

const WebApp = () => {
  // ── Slideshow state ──
  const slides = [
    'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1600&q=80',
    'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=80',
    'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1600&q=80',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
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

  // ── Content (trimmed to 4 shorter items) ──
  const painPoints = [
    { title: 'Performance Collapses Under Load', text: "Sites built for demos can't handle real traffic. Latency and cold starts destroy conversion the moment volume arrives." },
    { title: 'Mobile as an Afterthought', text: 'Layouts that break on phones and content built for desktop create friction mobile-first users will not tolerate.' },
    { title: 'Accessibility Discovered Late', text: 'Violations found after launch force rewrites when the fix should have been cheap.' },
    { title: 'Data Models That Cannot Bend', text: 'Rigid schemas and missing migrations turn small feature changes into multi-week refactors.' },
  ];

  const services = [
    { Icon: Gauge, title: 'Fast Platforms', text: 'Server-rendered, CDN-cached, and edge-optimized apps that stay fast under load — with measurable performance budgets enforced in CI.', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop' },
    { Icon: Layers, title: 'Internal Tools & Portals', text: 'Role-based dashboards, admin consoles, and workflow portals that reduce manual work and make teams faster.', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop' },
    { Icon: Code, title: 'Progressive Web Apps', text: 'Installable, offline-capable, and push-enabled apps that give users an app-like experience without the store tax.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9a?w=600&h=400&fit=crop' },
    { Icon: Zap, title: 'Headless & Composable', text: 'A hardened frontend over your existing CMS, ERP, or commerce platform — decoupled, composable, and easy to evolve.', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop' },
    { Icon: Shield, title: 'AI Features in the Product', text: 'Search, ranking, recommendations, and workflow automation built into the app — with guardrails, evaluation, and auditability.', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop' },
    { Icon: RefreshCw, title: 'Performance & Conversion Remediation', text: 'Audits, Core Web Vitals fixes, and iterative optimization that ship measurable improvements, not just reports.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
  ];

  const industries = [
    { title: 'Healthcare', text: 'Provider portals, patient tools, and clinical workflow apps built with HIPAA-conscious architecture and audit trails.', path: '/who-we-help/industries#healthcare' },
    { title: 'Finance & Insurance', text: 'Secure customer portals, adviser tools, and policy servicing interfaces built with compliance in mind.', path: '/who-we-help/industries#insurance' },
    { title: 'Retail & E-Commerce', text: 'Storefronts, marketplaces, and B2B commerce platforms engineered for catalog scale, conversion, and load.', path: '/who-we-help/industries#retail' },
    { title: 'Education', text: 'Learning platforms, student portals, and administrative systems that scale with cohorts and content.', path: '/who-we-help/industries#education' },
    { title: 'Media & Entertainment', text: 'Publishing, streaming, and content platforms that perform across devices and geographies.', path: '/who-we-help/industries#communication-media-info' },
    { title: 'Travel & Hospitality', text: 'Booking, loyalty, and account platforms designed for cross-region traffic and seasonal peaks.', path: '/who-we-help/industries#travel-logistics' },
  ];

  const faqs = [
    { q: 'How much does it cost to build a web app?', a: 'Cost depends on scope, integrations, data complexity, and timeline. A focused marketing site or portal typically starts lower than a full production platform. We provide a fixed-scope estimate after a short discovery session.' },
    { q: 'How long does it take to build a web app?', a: 'A focused marketing site or MVP typically takes 4–8 weeks. A production platform with complex integrations and compliance needs takes 3–6 months. We sequence work so you see progress quickly.' },
    { q: 'Should we use a framework like Next.js or keep it simple?', a: 'The right choice depends on SEO, personalization, and how much of the product is dynamic. We help you weigh options based on your traffic profile, integrations, and support model.' },
    { q: 'Can you work with a site we already have?', a: 'Yes. We review the codebase, hosting, and analytics, then recommend a staged improvement, modernization, or rebuild path based on risk and business priorities.' },
    { q: 'How do you approach web performance?', a: "We set performance budgets, measure Core Web Vitals continuously, and enforce them in CI so performance doesn't regress release after release." },
    { q: 'What happens after launch?', a: 'Support can include monitoring, incident response, performance tuning, feature work, and knowledge transfer to your in-house team.' },
    { q: 'Do you handle accessibility?', a: 'Yes. We design and build to WCAG 2.2 AA standards, test with real assistive technologies, and build accessibility into the QA loop — not as a post-launch audit.' },
    { q: 'Can you integrate with our existing CMS, ERP, or CRM?', a: 'Yes. Web apps can connect to content platforms, ERP, CRM, payments, identity, analytics, and internal systems through APIs or purpose-built integration layers.' },
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
            Web App Development
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
            Web Application Development Where Performance Is an Acceptance Criterion
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
            From marketing sites to complex internal platforms, ONAS builds web applications that
            are fast, accessible, and built to scale with your business.
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
            Book a Free Consultation <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Box>

      {/* ── PAIN POINTS — trimmed left + 2 smaller images right ── */}
      <Section bg={soft} sx={{ padding: { xs: '3rem 1.5rem', md: '3.5rem 1.5rem' } }}>
        <Box
          sx={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.1fr .9fr' },
            gap: { xs: '2rem', md: '2.5rem' },
            alignItems: 'stretch',
          }}
        >
          {/* LEFT — heading + 4 compact cards */}
          <Box>
            <Eyebrow>The Problem</Eyebrow>
            <SectionHeading
              sx={{
                marginTop: '.7rem',
                maxWidth: 520,
                textAlign: 'left',
                marginLeft: 0,
                marginRight: 0,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              From Slow, Fragile Builds to Applications That Perform Under Load
            </SectionHeading>
            <Body sx={{ maxWidth: 520, marginTop: '.8rem', marginBottom: '1.5rem', fontSize: '.7rem' }}>
              Web teams hit the same walls. ONAS builds products that avoid them from day one.
            </Body>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
              {painPoints.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Box
                    sx={{
                      ...cardSx,
                      borderRadius: '3px',
                      padding: { xs: '.7rem .9rem', md: '.8rem 1rem' },
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '.8rem',
                    }}
                  >
                    <Typography
                      sx={{
                        font: "400 1.1rem/1 Georgia, 'Times New Roman', serif",
                        color: '#bcd0c5',
                        flexShrink: 0,
                        minWidth: 32,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </Typography>
                    <Box>
                      <Typography
                        component="h3"
                        sx={{
                          margin: '0 0 .25rem',
                          font: "400 .82rem/1.25 Georgia, 'Times New Roman', serif",
                          color: ink,
                          textTransform: 'uppercase',
                          letterSpacing: '.02em',
                        }}
                      >
                        {p.title}
                      </Typography>
                      <Body sx={{ fontSize: '.6rem', lineHeight: 1.6 }}>{p.text}</Body>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* RIGHT — two smaller stacked images */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex' }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '.8rem',
                width: '100%',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  minHeight: { xs: 130, md: 160 },
                  borderRadius: '3px',
                  overflow: 'hidden',
                  border: `1px solid ${line}`,
                  boxShadow: '0 8px 20px rgba(18,63,59,0.06)',
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&h=600&fit=crop"
                  alt="Web application development"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </Box>
              <Box
                sx={{
                  flex: 1,
                  minHeight: { xs: 130, md: 160 },
                  borderRadius: '3px',
                  overflow: 'hidden',
                  border: `1px solid ${line}`,
                  boxShadow: '0 8px 20px rgba(18,63,59,0.06)',
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=600&fit=crop"
                  alt="Web platform engineering"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Section>

      {/* ── SERVICES — SEO style (image top, icon circle overlapping) ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>What We Build</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>
            Comprehensive Web Application Development Services for Scalable Growth
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '1rem auto 0' }}>
            Customer-facing platforms, internal tools, and everything in between — engineered to run in production, not just in a demo.
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
                      <Icon size={20} color="#257a68" />
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
            We partner with teams across sectors to build web platforms that meet real industry needs.
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
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', marginTop: '1rem', color: '#257a68', fontFamily: "'Poppins', sans-serif", fontSize: '.6rem', fontWeight: 600 }}>
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
                expandIcon={<ExpandMore sx={{ color: '#257a68', fontSize: 20 }} />}
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
              Your Next Step Toward Success Starts Here
            </SectionHeading>
            <Body sx={{ marginBottom: '1.8rem' }}>
              Share where you are today and what you want the web application to make possible. We&apos;ll map a practical way forward.
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
              Book an Appointment <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </Box>
        </Container>
      </Box>
    </PageShell>
  );
};

export default WebApp;