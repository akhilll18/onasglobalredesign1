import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowForward, ExpandMore, Check } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { FileText, Globe, Newspaper, BookOpen, Wrench, Package, Mail, PenTool, Shield, BarChart3 } from 'lucide-react';

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

const ContentWriting = () => {
  // ── Slideshow state ──
  const slides = [
    'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);

  // ── Process carousel state (same as SEO) ──
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const scrollPosRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let rafId;
    const speed = 0.6;
    const step = () => {
      if (!isPaused && el) {
        scrollPosRef.current += speed;
        if (scrollPosRef.current >= el.scrollWidth / 2) {
          scrollPosRef.current = 0;
        }
        el.scrollLeft = scrollPosRef.current;
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  const handleAccordionChange = (panel) => (_, isExpanded) =>
    setExpanded(isExpanded ? panel : false);

  // ── Content ──
  const painPoints = [
    { title: 'Content Written to a Word Count', text: 'Two thousand words on a page that should have been 600. Padding does not rank, does not convert, and does not earn the click.' },
    { title: 'Well Written, Ranked for Nothing', text: 'Good copy points in the wrong direction. The strategy underneath it — keywords, intent, topics — is what makes writing work.' },
    { title: 'Readers Guessing at Your Product', text: 'The copy explains what the product is but never what it does for the reader. The visitor has to guess, and mostly does not bother.' },
    { title: 'A Different Voice on Every Page', text: 'Six writers, four editors, three months. The site reads like four different companies stitched together and it flattens authority.' },
    { title: 'Product Descriptions from the Spec Sheet', text: 'Features list technical specs while buyers want outcomes. Product and category pages underperform because they were never written for a person.' },
    { title: 'No Idea Which Pieces Worked', text: 'Publishing continues on a steady calendar with no measurement beyond page views. Nothing shows which content actually moved the business.' },
  ];

  // Services with images (SEO-style)
  const services = [
    { Icon: FileText, title: 'SEO Content Writing', text: 'Articles and landing pages built on the intent of the query, not a target keyword count — optimised for rankings, conversions, and AI citation.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop' },
    { Icon: Globe, title: 'Website and Landing Pages', text: 'Pages that state what you do, who it is for, and why it matters — with structure that guides the reader to act.', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop' },
    { Icon: Newspaper, title: 'Blog and Article Programs', text: 'A sustained editorial programme based on topic clusters, internal linking, and search demand — not one-off posts.', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop' },
    { Icon: BookOpen, title: 'Technical Content Writing', text: 'API documentation, developer guides, and product documentation written with precision by writers who understand engineering.', image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop' },
    { Icon: Package, title: 'Product and Ecommerce Copy', text: 'Product descriptions, category pages, and PDPs that explain the outcome the buyer gets — not just the spec sheet.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop' },
    { Icon: PenTool, title: 'Content Strategy and Voice', text: 'Editorial strategy, brand voice guidelines, tone documentation, and messaging architecture that keep every page consistent.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop' },
  ];

  // Process carousel (SEO style with images)
  const processCarousel = [
    { number: '01', title: 'Discover & Align', text: 'Understand the audience, competitors, positioning, and commercial goals before writing a word.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop' },
    { number: '02', title: 'Design & Architect', text: 'Define voice, content pillars, formats, and an editorial calendar tied to business priorities.', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop' },
    { number: '03', title: 'Build & Publish', text: 'Ship content in disciplined batches with briefs, drafts, edits, and SEO review built into every piece.', image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop' },
    { number: '04', title: 'Optimize & Scale', text: 'Measure rankings, engagement, conversion, and pipeline. Iterate on what compounds; retire what does not.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
  ];

  const industries = [
    { title: 'Healthcare', text: 'Compliant, evidence-based content for providers, health systems, and medical device companies.', path: '/who-we-help/industries#healthcare' },
    { title: 'Finance & Insurance', text: 'Financial content that meets disclosure and compliance requirements while still being readable.', path: '/who-we-help/industries#insurance' },
    { title: 'E-Commerce & Retail', text: 'Category architecture, product descriptions, and buyer-guide content built for catalog scale.', path: '/who-we-help/industries#retail' },
    { title: 'SaaS & Technology', text: 'Product, documentation, and thought leadership content for technical audiences.', path: '/who-we-help/industries#education' },
    { title: 'Education', text: 'Programme, admissions, and academic content across long consideration cycles.', path: '/who-we-help/industries#communication-media-info' },
    { title: 'Professional Services', text: 'Insight-led content that positions your firm as the obvious choice for complex problems.', path: '/who-we-help/industries#travel-logistics' },
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
            Content Writing Services
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
            Content Writing for Readers Who Are About to Spend Money
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
            From SEO articles to product pages and technical documentation, ONAS writes content
            that ranks, reads well, and converts the people you actually want.
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
            Book a Free Consultation <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Box>

      {/* ── PAIN POINTS — SEO style ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>The Problem</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>
            From Filling a Calendar to Earning the Click
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '1rem auto 0' }}>
            Common reasons content programmes stall — and how ONAS builds differently.
          </Body>
        </Box>

        <Box sx={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: '1.5rem' }}>
          {painPoints.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}>
              <Box sx={{ ...cardSx, borderRadius: '3px' }}>
                <Typography sx={{ font: "400 clamp(1.4rem, 2.4vw, 1.9rem)/1 Georgia, 'Times New Roman', serif", color: '#bcd0c5', marginBottom: '.5rem' }}>
                  {String(i + 1).padStart(2, '0')}
                </Typography>
                <Typography component="h3" sx={{ margin: '0 0 .55rem', font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif", color: ink, textTransform: 'uppercase', letterSpacing: '.02em' }}>
                  {p.title}
                </Typography>
                <Body sx={{ fontSize: '.66rem' }}>{p.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* ── SERVICES — SEO style (image top, icon circle overlapping) ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>What We Write</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>
            Content Writing Services for Search, Sales, and Product
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '1rem auto 0' }}>
            We write every format where words do the work — from blog posts to documentation and everything between.
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
            We partner with teams across sectors to write content that fits real industry needs.
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

      {/* ── HOW WE WORK — SEO-style auto-scroll carousel with images ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Our Process</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>
            How We Work
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '1rem auto 0' }}>
            Four clear stages so you know exactly what happens next, and what &ldquo;done&rdquo; looks like at each step.
          </Body>
        </Box>

        <Box
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: { xs: 30, md: 80 },
              zIndex: 2,
              pointerEvents: 'none',
            },
            '&::before': {
              left: 0,
              background: 'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0) 100%)',
            },
            '&::after': {
              right: 0,
              background: 'linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0) 100%)',
            },
          }}
        >
          <Box
            ref={trackRef}
            sx={{
              display: 'flex',
              gap: { xs: '1rem', md: '1.4rem' },
              overflowX: 'hidden',
              scrollBehavior: 'auto',
              py: '.5rem',
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {[...processCarousel, ...processCarousel].map((step, i) => (
              <Box key={`${step.number}-${i}`} sx={{ flex: '0 0 auto', width: { xs: 260, sm: 280, md: 300 } }}>
                <Box sx={{ ...cardSx, borderRadius: '3px', padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ width: '100%', height: 140, overflow: 'hidden', borderBottom: `1px solid ${line}` }}>
                    <Box component="img" src={step.image} alt={step.title} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </Box>
                  <Box sx={{ padding: '1.2rem 1.1rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Typography sx={{ font: "400 clamp(1.4rem, 2.4vw, 1.9rem)/1 Georgia, 'Times New Roman', serif", color: '#bcd0c5', marginBottom: '.4rem' }}>
                      {step.number}
                    </Typography>
                    <Typography component="h3" sx={{ margin: '0 0 .55rem', font: "400 clamp(.85rem, 1.3vw, .98rem)/1.25 Georgia, 'Times New Roman', serif", color: ink, textTransform: 'uppercase', letterSpacing: '.02em' }}>
                      {step.title}
                    </Typography>
                    <Body sx={{ fontSize: '.64rem', lineHeight: 1.7, flexGrow: 1 }}>{step.text}</Body>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

     

      {/* ── CTA — SEO style ── */}
      <Box sx={{ background: soft, borderTop: `1px solid ${line}` }}>
        <Container maxWidth={false} disableGutters sx={containerSx}>
          <Box sx={{ maxWidth: 800, mx: 'auto', padding: { xs: '4rem 1rem', md: '5rem 0' }, textAlign: 'center' }}>
            <Eyebrow>Get Started</Eyebrow>
            <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
              Write Content That Earns the Click
            </SectionHeading>
            <Body sx={{ marginBottom: '1.8rem' }}>
              Share what your content programme needs to deliver and where it stands today. We&apos;ll map a practical way forward — with samples before any contract.
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
              Book a Free Consultation <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </Box>
        </Container>
      </Box>
    </PageShell>
  );
};

export default ContentWriting;