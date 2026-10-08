import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { UserCircle, Calendar, PenTool, MessageSquare, Search, Settings, Shield, BarChart3 } from 'lucide-react';

import {
  PageShell, Section, Eyebrow, SectionHeading, Body, cardSx, containerSx,
  ink, muted, line, soft, cream, lime,
} from '../../../theme/theme';

import SM1 from '../../../assets/images/solutions/smo/smo1.jpg';
import SM2 from '../../../assets/images/solutions/smo/smo2.jpg';
import SM3 from '../../../assets/images/solutions/smo/smo3.jpg';
import SM4 from '../../../assets/images/solutions/smo/smo4.jpg';
import SM5 from '../../../assets/images/solutions/smo/smo5.jpg';
import SM6 from '../../../assets/images/solutions/smo/smo6.jpg';
import SM7 from '../../../assets/images/solutions/smo/smo7.jpg';

const Smo = () => {
  const slides = [SM1, SM2, SM3];
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const painPoints = [
    { title: 'Profiles That Contradict Each Other', text: 'Different taglines, outdated bios, and visual inconsistency across platforms suggest a business that does not have its own story straight.' },
    { title: 'Posting Without Engagement', text: 'Content ships but nobody replies, questions, or shares. The feed looks alive, but the community behind it is not.' },
    { title: 'Bios and Bios Alone', text: 'Bios are written once and never revisited. Messaging, links, and CTAs drift out of sync with what the business actually sells.' },
    { title: 'Invisible in Social Search', text: 'A growing share of buyers search directly inside LinkedIn, Instagram, and TikTok. If your profiles are not optimised, you do not appear.' },
    { title: 'A Link That Goes Nowhere Useful', text: 'The single profile link points to a home page that asks too much of the visitor. The opportunity to convert is wasted before it starts.' },
    { title: 'No Idea What Is Working', text: 'No reporting beyond the platform shows. Nothing ties profile activity to leads, sales, or brand lift.' },
  ];

  const services = [
    { Icon: UserCircle, title: 'Profile Optimization', text: 'Bio, images, contact details, and pinned content optimised for conversion on every relevant platform, not just the biggest one.', image: SM4 },
    { Icon: Calendar, title: 'Content Calendar Planning', text: 'A system you can sustain — themed posting rhythms, formats, and cadence matched to audience and internal capacity.', image: SM5 },
    { Icon: PenTool, title: 'Content Creation and Curation', text: 'Platform-native posts, visual assets, carousels, and short-form video that hold attention rather than fill a feed.', image: SM6 },
    { Icon: MessageSquare, title: 'Community Engagement', text: 'Replies, comments, and DMs handled with the right tone and cadence so profiles feel owned, not abandoned.', image: SM7 },
    { Icon: Search, title: 'Social Search and Hashtag Strategy', text: 'Keywords, alt text, captions, and tag strategy applied to every post so the profile surfaces in on-platform search.', image: SM1 },
    { Icon: BarChart3, title: 'Tracking and Reporting', text: 'Profile analytics alongside GA4 and CRM data so social investment is visible against leads, sales, and brand lift.', image: SM2 },
  ];

  const processCarousel = [
    { number: '01', title: 'Discover & Align', text: 'Audit the current profiles, competitors, keywords, and business goals before making changes.', image: SM3 },
    { number: '02', title: 'Design & Architect', text: 'Rewrite bios, restructure visual identity, plan content pillars, and define the community tone.', image: SM4 },
    { number: '03', title: 'Build & Integrate', text: 'Ship profile updates and content in reviewable increments with testing cadence behind every change.', image: SM5 },
    { number: '04', title: 'Optimize & Scale', text: 'Measure search visibility, engagement quality, and pipeline contribution — then expand what works.', image: SM6 },
  ];

  const industries = [
    { title: 'Healthcare', text: 'Compliant profile optimisation for providers and clinics across professional and consumer platforms.', path: '/who-we-help/industries#healthcare' },
    { title: 'Finance & Insurance', text: 'Adviser and brand profiles optimised with compliance and disclosure built in.', path: '/who-we-help/industries#insurance' },
    { title: 'E-Commerce & Retail', text: 'Storefront and shopping integrations tuned for platform-native discovery and conversion.', path: '/who-we-help/industries#retail' },
    { title: 'Education', text: 'Programme, alumni, and institution profiles optimised for admissions and long-cycle research.', path: '/who-we-help/industries#education' },
    { title: 'Media & Entertainment', text: 'Publisher and creator profiles optimised for distribution, watch time, and audience growth.', path: '/who-we-help/industries#communication-media-info' },
    { title: 'Travel & Hospitality', text: 'Property, destination, and brand profiles optimised for regional search and seasonal demand.', path: '/who-we-help/industries#travel-logistics' },
  ];

  return (
    <PageShell>
      <Box sx={{ position: 'relative', marginTop: { xs: '72px', sm: '76px', md: '92px', lg: '100px' }, minHeight: { xs: 480, md: 560 }, padding: { xs: '7rem 1rem 3rem', md: '9rem 2.5rem 4rem' }, overflow: 'hidden', background: '#0B4C74', isolation: 'isolate', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -2, overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 1.1, ease: 'easeInOut' }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${slides[currentSlide]})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
          </AnimatePresence>
          <Box sx={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, rgba(255,255,255,.10) 0%, rgba(0,0,0,.45) 100%)' }} />
        </Box>
        <Box sx={{ position: 'relative', zIndex: 2, maxWidth: 1240, margin: '0 auto', width: '100%', textAlign: 'center' }}>
          <Typography sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)', fontSize: '.55rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 700, fontFamily: "'Poppins', sans-serif", marginBottom: '.7rem' }}>Social Media Optimization</Typography>
          <Typography component="h1" sx={{ margin: '.4rem auto 1rem', font: "400 clamp(1.5rem, 3.2vw, 2.4rem)/1.1 Georgia, 'Times New Roman', serif", color: '#fff', maxWidth: 900, textShadow: '0 2px 12px rgba(0,0,0,.95), 0 1px 3px rgba(0,0,0,1)' }}>Social Media Optimization That Makes Every Profile Earn Its Place</Typography>
          <Typography sx={{ color: '#ffffff !important', textShadow: '0 1px 8px rgba(0,0,0,.95)', fontFamily: "'Poppins', sans-serif", fontSize: { xs: '.72rem', md: '.78rem' }, lineHeight: 1.7, maxWidth: 640, margin: '0 auto 1.8rem' }}>From bio copy to search-visible posts, ONAS builds social profiles that convert visitors into followers and followers into pipeline.</Typography>
          <Box component="a" href="/resources/contact-us" sx={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.7rem 1.1rem', borderRadius: '3px', background: '#0B4C74', color: '#ffffff', fontWeight: 600, fontSize: '.62rem', fontFamily: "'Poppins', sans-serif", textDecoration: 'none', transition: 'background .2s ease', '&:hover': { background: '#d3ffb0', color: '#000000' } }}>Book a Free Consultation <ArrowForward sx={{ fontSize: 14 }} /></Box>
        </Box>
      </Box>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>The Problem</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>From Being Active to Being Credible</SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '1rem auto 0' }}>Common reasons social profiles underperform — and how ONAS builds differently.</Body>
        </Box>
        <Box sx={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: '1.5rem' }}>
          {painPoints.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}>
              <Box sx={{ ...cardSx, borderRadius: '3px' }}>
                <Typography sx={{ font: "400 clamp(1.4rem, 2.4vw, 1.9rem)/1 Georgia, 'Times New Roman', serif", color: '#bcd0c5', marginBottom: '.5rem' }}>{String(i + 1).padStart(2, '0')}</Typography>
                <Typography component="h3" sx={{ margin: '0 0 .55rem', font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif", color: ink, textTransform: 'uppercase', letterSpacing: '.02em' }}>{p.title}</Typography>
                <Body sx={{ fontSize: '.66rem' }}>{p.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>What We Build</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>Social Media Optimization Services for Consistent Organic Growth</SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '1rem auto 0' }}>Services designed for the daily practice of running a profile that actually earns attention.</Body>
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
                    <Box sx={{ position: 'absolute', top: '-22px', left: '1.2rem', display: 'grid', placeItems: 'center', width: 44, height: 44, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, boxShadow: '0 4px 12px rgba(18,63,59,0.08)', flexShrink: 0 }}>
                      <Icon size={20} color="#0B4C74" />
                    </Box>
                    <Typography component="h3" sx={{ margin: '1rem 0 .55rem', font: "400 .92rem Georgia, 'Times New Roman', serif", color: ink, lineHeight: 1.25, minHeight: '2.4rem' }}>{item.title}</Typography>
                    <Body sx={{ fontSize: '.66rem', flexGrow: 1 }}>{item.text}</Body>
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Industries</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>Industries We Serve</SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '1rem auto 0' }}>We partner with teams across sectors to build social profiles that fit real industry needs.</Body>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: '1.2rem', md: '1.4rem' } }}>
          {industries.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.05 }} style={{ display: 'flex', width: '100%' }}>
              <Box component={RouterLink} to={item.path} sx={{ ...cardSx, borderRadius: '3px', textDecoration: 'none', '&:hover': { borderColor: '#aac7b2', transform: 'translateY(-3px)' } }}>
                <Typography component="h3" sx={{ margin: '0 0 .55rem', font: "400 .92rem Georgia, 'Times New Roman', serif", color: ink, lineHeight: 1.25 }}>{item.title}</Typography>
                <Body sx={{ fontSize: '.66rem', flexGrow: 1 }}>{item.text}</Body>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', marginTop: '1rem', color: '#0B4C74', fontFamily: "'Poppins', sans-serif", fontSize: '.6rem', fontWeight: 600 }}>Learn More <ArrowForward sx={{ fontSize: 12 }} /></Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Our Process</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>How We Work</SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '1rem auto 0' }}>Four clear stages so you know exactly what happens next, and what &ldquo;done&rdquo; looks like at each step.</Body>
        </Box>
        <Box onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} sx={{ position: 'relative', overflow: 'hidden', width: '100%', '&::before, &::after': { content: '""', position: 'absolute', top: 0, bottom: 0, width: { xs: 30, md: 80 }, zIndex: 2, pointerEvents: 'none' }, '&::before': { left: 0, background: 'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0) 100%)' }, '&::after': { right: 0, background: 'linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0) 100%)' } }}>
          <Box ref={trackRef} sx={{ display: 'flex', gap: { xs: '1rem', md: '1.4rem' }, overflowX: 'hidden', scrollBehavior: 'auto', py: '.5rem', '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[...processCarousel, ...processCarousel].map((step, i) => (
              <Box key={`${step.number}-${i}`} sx={{ flex: '0 0 auto', width: { xs: 260, sm: 280, md: 300 } }}>
                <Box sx={{ ...cardSx, borderRadius: '3px', padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ width: '100%', height: 140, overflow: 'hidden', borderBottom: `1px solid ${line}` }}>
                    <Box component="img" src={step.image} alt={step.title} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </Box>
                  <Box sx={{ padding: '1.2rem 1.1rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Typography sx={{ font: "400 clamp(1.4rem, 2.4vw, 1.9rem)/1 Georgia, 'Times New Roman', serif", color: '#bcd0c5', marginBottom: '.4rem' }}>{step.number}</Typography>
                    <Typography component="h3" sx={{ margin: '0 0 .55rem', font: "400 clamp(.85rem, 1.3vw, .98rem)/1.25 Georgia, 'Times New Roman', serif", color: ink, textTransform: 'uppercase', letterSpacing: '.02em' }}>{step.title}</Typography>
                    <Body sx={{ fontSize: '.64rem', lineHeight: 1.7, flexGrow: 1 }}>{step.text}</Body>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      <Box sx={{ background: soft, borderTop: `1px solid ${line}` }}>
        <Container maxWidth={false} disableGutters sx={containerSx}>
          <Box sx={{ maxWidth: 800, mx: 'auto', padding: { xs: '4rem 1rem', md: '5rem 0' }, textAlign: 'center' }}>
            <Eyebrow>Get Started</Eyebrow>
            <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>Make Your Social Profiles Earn Their Place</SectionHeading>
            <Body sx={{ marginBottom: '1.8rem' }}>Share where your social performance stands today and what you need it to deliver. We&apos;ll map a practical, measured path forward.</Body>
            <Box component="a" href="/resources/contact-us" sx={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.7rem 1.1rem', borderRadius: '3px', background: '#0B4C74', color: '#ffffff', fontWeight: 600, fontSize: '.62rem', fontFamily: "'Poppins', sans-serif", textDecoration: 'none', transition: 'background .2s ease', '&:hover': { background: '#d3ffb0', color: '#000000' } }}>Book a Free Consultation <ArrowForward sx={{ fontSize: 14 }} /></Box>
          </Box>
        </Container>
      </Box>
    </PageShell>
  );
};

export default Smo;