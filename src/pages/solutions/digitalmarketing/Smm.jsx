import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowForward, ExpandMore, Check } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { Target, Megaphone, Linkedin, Youtube, FileText, BarChart3 } from 'lucide-react';

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

const Smm = () => {
  // ── Slideshow state ──
  const slides = [
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&q=80',
    'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1600&q=80',
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80',
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
    { title: 'Reach Falling Every Quarter', text: 'Organic reach on most platforms has been declining for years. The same content reaches fewer people unless you change the approach.' },
    { title: 'Engagement from the Wrong People', text: 'Likes come from peers and competitors, not buyers. The metric looks healthy but does not move the business forward.' },
    { title: 'A Calendar with No Argument', text: 'Posts ship because the calendar says so. There is no hypothesis, no measurement, and no honest answer to why each post exists.' },
    { title: 'Paid and Organic Working Apart', text: 'One team posts, another team buys media, and neither feeds the other. Signals that could compound get wasted because nobody connects them.' },
    { title: 'No LinkedIn or YouTube Presence', text: 'The two channels where B2B buyers spend real time are empty. Competitors are answering questions that you should own.' },
    { title: 'No Line from Social to Pipeline', text: 'You cannot see what social actually contributed. Attribution stops at the platform, so nobody can defend the budget.' },
  ];

  // Services with images (SEO-style)
  const services = [
    { Icon: Target, title: 'Strategy & Channel Selection', text: 'We choose the two or three platforms where your audience actually is, then commit to them properly rather than spreading across every network.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop' },
    { Icon: Megaphone, title: 'Meta Advertising', text: 'Facebook and Instagram campaigns built around creative testing, audience layering, and conversion measurement.', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop' },
    { Icon: Linkedin, title: 'LinkedIn Marketing', text: 'Organic thought leadership and paid campaigns for B2B — reaching decision makers where they are already researching.', image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=600&h=400&fit=crop' },
    { Icon: Youtube, title: 'YouTube Marketing', text: 'Video strategy, channel structure, and paid campaigns that build a durable presence on the second-largest search engine.', image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop' },
    { Icon: FileText, title: 'Content Production & Management', text: 'Editorial planning, copywriting, creative direction, publishing cadence, and community management in one workflow.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop' },
    { Icon: BarChart3, title: 'Analytics & Optimization', text: 'Platform metrics alongside GA4 and CRM data so you can see the actual line from social activity to pipeline.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
  ];

  // Process carousel (SEO style with images)
  const processCarousel = [
    { number: '01', title: 'Discover & Align', text: 'Audit current channels, competitors, audience, and business goals before committing to a strategy.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop' },
    { number: '02', title: 'Strategy & Architecture', text: 'Choose platforms, define content pillars, and plan creative, community, and paid together.', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop' },
    { number: '03', title: 'Build & Integrate', text: 'Ship content and paid campaigns in reviewable increments with visible testing cadence.', image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop' },
    { number: '04', title: 'Optimize & Scale', text: 'Measure organic signals, paid performance, and pipeline. Scale what works, cut what does not.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
  ];

  const industries = [
    { title: 'Healthcare', text: 'Compliant social programmes for providers and clinics that build trust without crossing regulatory lines.', path: '/who-we-help/industries#healthcare' },
    { title: 'Finance & Insurance', text: 'Adviser-led content and compliant paid campaigns that respect disclosure requirements.', path: '/who-we-help/industries#insurance' },
    { title: 'E-Commerce & Retail', text: 'Paid social creative engineered around product, seasonality, and return on ad spend.', path: '/who-we-help/industries#retail' },
    { title: 'Education', text: 'Programme marketing and community building across long admissions consideration cycles.', path: '/who-we-help/industries#education' },
    { title: 'Media & Entertainment', text: 'Audience growth and monetisation across platforms that shift constantly.', path: '/who-we-help/industries#communication-media-info' },
    { title: 'Travel & Hospitality', text: 'Destination, brand, and property content designed for regional and seasonal demand.', path: '/who-we-help/industries#travel-logistics' },
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
            Social Media Marketing
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
            Social Media Marketing That Builds Pipeline, Not Follower Counts
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
            From organic authority to paid amplification, ONAS builds social programmes tied to
            qualified leads — with the discipline that the platform era now demands.
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
            From Posting Consistently to Generating Pipeline
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '1rem auto 0' }}>
            Common reasons social programmes stall — and how ONAS builds differently.
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
          <Eyebrow>What We Build</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>
            Social Media Marketing Services Across Organic and Paid
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '1rem auto 0' }}>
            Services designed for the two halves of social — the content that earns attention and the media that scales it.
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
            We partner with teams across sectors to build social programmes that fit real industry needs.
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
              Build a Social Programme That Builds Pipeline
            </SectionHeading>
            <Body sx={{ marginBottom: '1.8rem' }}>
              Share where your social performance stands today and what you need it to deliver. We&apos;ll map a practical, measured path forward.
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

export default Smm;