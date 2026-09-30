import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { Search, TrendingUp, ShoppingCart, Settings, FileText, Bot } from 'lucide-react';

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

const Seo = () => {
  // ── Slideshow state ──
  const slides = [
    'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1600&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  // ── Process carousel state ──
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

  const processCarousel = [
    { number: '01', title: 'Discover & Align', text: 'Audit the market, competitors, existing rankings, and business goals before writing a strategy.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop' },
    { number: '02', title: 'Strategy & Roadmap', text: 'Prioritise opportunities by impact and effort. Define measurement before the first task ships.', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop' },
    { number: '03', title: 'Build & Publish', text: 'Ship technical fixes, content, and internal linking in reviewable increments with visible progress.', image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop' },
    { number: '04', title: 'Measure & Iterate', text: 'Track rankings, traffic, conversions, and AI citations. Adjust the roadmap against real data.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
  ];

  // ── Content ──
  const painPoints = [
    { title: 'Rankings That Never Became Revenue', text: 'Traffic arrives but does not convert. Organic sessions without commercial intent consume budget without producing pipeline.' },
    { title: 'Invisible in Local Search', text: 'Your name does not appear when buyers search nearby. Your profile, reviews, and service data sit scattered across the wrong pages.' },
    { title: 'Product Pages That Cannot Compete', text: 'Category and product pages miss the keyword patterns that drive qualified buyers. Thin descriptions and missing structured data cost you visibility.' },
    { title: 'Technical Debt Capping Everything', text: 'Crawl issues, missing schema, and slow Core Web Vitals quietly suppress every page. Fixing content without fixing the foundations is wasted effort.' },
    { title: 'Absent from AI Answers', text: 'Buyers now ask ChatGPT and Gemini first. If your content is not structured to be cited, you are not in the answer at all.' },
    { title: 'Reporting Nobody Trusts', text: 'Dashboard vanity metrics without business context. Nobody can tie the SEO programme to pipeline, revenue, or market share.' },
  ];

  const services = [
    { Icon: Search, title: 'Local SEO', text: 'Local rankings, Google Business Profile optimization, review management, and geo-targeted content for multi-location businesses.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop' },
    { Icon: TrendingUp, title: 'SEO Consulting & Strategy', text: 'Technical audits, competitor analysis, content strategy, and prioritised roadmaps that produce measurable growth.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop' },
    { Icon: ShoppingCart, title: 'E-commerce SEO', text: 'Category and product page optimization, structured data, faceted navigation, and internal linking for catalog scale.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop' },
    { Icon: Settings, title: 'Technical SEO', text: 'Crawlability, site architecture, Core Web Vitals, log-file analysis, and schema markup engineered for AI and traditional search.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop' },
    { Icon: FileText, title: 'Content & On-page SEO', text: 'Keyword research, topic clusters, briefs, on-page optimization, and internal linking that builds topical authority.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop' },
    { Icon: Bot, title: 'Answer Engine Optimization', text: 'Structured content designed to be cited by ChatGPT, Gemini, Perplexity, and other AI surfaces — not just rank on Google.', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop' },
  ];

  // ⭐ UNIQUE SECTION: three surfaces + checklist
  // (Removed "Classic search" card as requested)
  const threeSurfacesLeft = [
    { title: 'Answer engines', text: 'ChatGPT, Gemini, Perplexity, and Copilot cite sources. Content must be structured to be picked up and quoted.' },
    { title: 'AI in the SERP', text: 'Google AI Overviews summarise and cite sources. Traditional rank alone no longer determines visibility.' },
  ];

  const threeSurfacesRight = [
    'Keyword and topic research mapped to buyer intent',
    'Technical audit covering crawl, index, and Core Web Vitals',
    'On-page and structured data for every commercial page',
    'Content plan with pillar pages, clusters, and internal links',
    'Local and Google Business Profile optimisation where relevant',
    'AI-surface optimization to be cited by answer engines',
    'Analytics, GSC, and reporting wired to pipeline — not vanity metrics',
  ];

  const industries = [
    { title: 'Healthcare', text: 'Compliant SEO for providers, clinics, and health systems — patient acquisition without crossing regulatory lines.', path: '/who-we-help/industries#healthcare' },
    { title: 'Finance & Insurance', text: 'Rank for high-intent financial queries with content engineered for YMYL and compliance review.', path: '/who-we-help/industries#insurance' },
    { title: 'E-Commerce & Retail', text: 'Category architecture, product schema, and content that captures commercial search across the catalog.', path: '/who-we-help/industries#retail' },
    { title: 'Education', text: 'Program pages, admissions intent, and student search journeys across long decision cycles.', path: '/who-we-help/industries#education' },
    { title: 'Media & Entertainment', text: 'Content discovery and topical authority across fast-moving publishing cycles.', path: '/who-we-help/industries#communication-media-info' },
    { title: 'Travel & Hospitality', text: 'Destination, brand, and property-level SEO that captures regional and long-tail demand.', path: '/who-we-help/industries#travel-logistics' },
  ];

  const techStack = [
    { category: 'Research & Audit', tech: 'Ahrefs · Semrush · Screaming Frog · Google Search Console' },
    { category: 'Analytics & Tracking', tech: 'GA4 · Looker Studio · Google Tag Manager · Hotjar' },
    { category: 'Content & On-Page', tech: 'Surfer SEO · Frase · Clearscope · Grammarly' },
    { category: 'Technical SEO', tech: 'PageSpeed Insights · Lighthouse · Schema.org · Log File Analyzer' },
    { category: 'Local SEO', tech: 'Google Business Profile · BrightLocal · Local Falcon' },
    { category: 'AI Surface Optimization', tech: 'Custom citation tracking · Content structure audits · Schema for LLMs' },
  ];

  return (
    <PageShell>
      {/* ── HERO — Slideshow background ── */}
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
            SEO Services
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
            SEO Services Measured in Pipeline, Not Rankings
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
            From technical audits to AI-surface optimization, ONAS builds SEO programmes tied to
            commercial outcomes — qualified traffic, leads, and revenue you can attribute.
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

      {/* ── PAIN POINTS (no dark left border) ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>The Problem</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>
            From Reporting on Rankings to Reporting on Revenue
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '1rem auto 0' }}>
            Common reasons SEO programmes stall — and how ONAS builds differently.
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

      {/* ── SERVICES (cards with images) ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>What We Build</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>
            Comprehensive SEO Services for Search, Answer, and Generative Engines
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '1rem auto 0' }}>
            Services designed for how buyers actually search today — traditional, local, and AI-driven.
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

      {/* ⭐ UNIQUE SECTION — THREE SURFACES (Classic search removed) ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Search Has Changed</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>
            Search Now Has Three Surfaces, Not One
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '1rem auto 0' }}>
            Traditional Google is still essential — but it&apos;s no longer the only surface where buyers find you.
          </Body>
        </Box>

        <Box sx={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.05fr .95fr' }, gap: { xs: '2rem', md: '3rem' }, alignItems: 'start' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {threeSurfacesLeft.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}>
                <Box sx={{ padding: '1.2rem 1.3rem', background: '#fff', border: `1px solid ${line}`, borderRadius: '3px', borderLeft: '3px solid #0B4C74' }}>
                  <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.68rem', fontWeight: 700, color: '#0B4C74', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.5rem' }}>
                    {item.title}
                  </Typography>
                  <Body sx={{ fontSize: '.68rem' }}>{item.text}</Body>
                </Box>
              </motion.div>
            ))}

            <Box sx={{ padding: '1.2rem 1.3rem', background: ink, border: `1px solid ${ink}`, borderRadius: '3px', marginTop: '.6rem' }}>
              <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.68rem', fontWeight: 700, color: lime, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.5rem' }}>
                The bottom line
              </Typography>
              <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.68rem', color: 'rgba(255,255,255,.85)', lineHeight: 1.7 }}>
                SEO today is not about ranking on one surface. It&apos;s about being findable everywhere your buyer searches — traditional, local, and AI-driven.
              </Typography>
            </Box>
          </Box>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Box sx={{ padding: { xs: '1.6rem 1.3rem', md: '2rem 1.6rem' }, background: '#fff', border: `1px solid ${line}`, borderRadius: '3px' }}>
              <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.6rem', fontWeight: 700, color: '#0B4C74', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.6rem' }}>
                What every ONAS SEO engagement includes
              </Typography>
              <Typography component="h3" sx={{ font: "400 clamp(1rem, 1.6vw, 1.25rem)/1.2 Georgia, 'Times New Roman', serif", color: ink, marginBottom: '1.4rem' }}>
                The full stack — no gaps.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
                {threeSurfacesRight.map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: '.6rem' }}>
                    <Box sx={{ minWidth: 16, height: 16, borderRadius: '50%', background: '#ffffff', border: `1px solid ${line}`, display: 'grid', placeItems: 'center', marginTop: '3px', flexShrink: 0 }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#0B4C74' }} />
                    </Box>
                    <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.66rem', color: ink, lineHeight: 1.65 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Section>

      {/* ── INDUSTRIES (linked to Industries page) ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Industries</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>
            Industries We Serve
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '1rem auto 0' }}>
            We partner with teams across sectors to build SEO programmes that fit real industry needs.
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

      {/* ── HOW WE WORK (auto-scrolling carousel with images) ── */}
      <Section bg={soft}>
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
              background: 'linear-gradient(to right, #ffffff 0%, rgba(241,246,239,0) 100%)',
            },
            '&::after': {
              right: 0,
              background: 'linear-gradient(to left, #ffffff 0%, rgba(241,246,239,0) 100%)',
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

      {/* ── TECH STACK ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Toolkit</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>
            Our Technology Expertise
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '1rem auto 0' }}>
            We pick the tools that fit your market, team, and long-term support model.
          </Body>
        </Box>

        <Box sx={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: '1rem' }}>
          {techStack.map((group, i) => (
            <Box key={i} sx={{ background: '#fff', border: `1px solid ${line}`, borderRadius: '3px', padding: '1.2rem' }}>
              <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.6rem', color: '#0B4C74', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.6rem' }}>
                {group.category}
              </Typography>
              <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.72rem', color: ink, lineHeight: 1.7 }}>
                {group.tech}
              </Typography>
            </Box>
          ))}
        </Box>
      </Section>

      {/* ── CTA ── */}
      <Box sx={{ background: soft, borderTop: `1px solid ${line}` }}>
        <Container maxWidth={false} disableGutters sx={containerSx}>
          <Box sx={{ maxWidth: 800, mx: 'auto', padding: { xs: '4rem 1rem', md: '5rem 0' }, textAlign: 'center' }}>
            <Eyebrow>Get Started</Eyebrow>
            <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
              Measure Your SEO Programme in Pipeline, Not Rankings
            </SectionHeading>
            <Body sx={{ marginBottom: '1.8rem' }}>
              Share where your organic growth stands today and where you want it to go. We&apos;ll map a practical, measured path forward.
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

export default Seo;