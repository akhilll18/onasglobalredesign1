import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';
import {
  VerifiedUser, DevicesOther, TuneOutlined, BusinessCenter,
  SchoolOutlined, SupportAgent,
} from '@mui/icons-material';

import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  Body,
  cardSx,
  ink, line, soft, lime,
} from '../../../../theme/theme';

const keyTakeaways = [
  { Icon: VerifiedUser, title: 'Industry-Recognized Certifications', text: 'Structured programs that map to credentials your teams can show for compliance, audit, and career progression.' },
  { Icon: DevicesOther, title: 'Blended Training Mode', text: 'Classroom, online, and e-learning options — combined to fit distributed teams and hybrid work schedules.' },
  { Icon: TuneOutlined, title: 'Customized Curriculum', text: 'Course content tailored to your tech stack, business goals, and the skill gaps your teams actually have.' },
  { Icon: BusinessCenter, title: 'Industry-Specific Programs', text: 'Training built around real industry workflows — banking, healthcare, retail, manufacturing, and more.' },
  { Icon: SchoolOutlined, title: 'Delivered by Experts', text: 'Senior practitioners with real-world delivery experience leading each cohort, not just theory instructors.' },
  { Icon: SupportAgent, title: 'Post-Training Support', text: 'Guidance, mentorship, and assistance on live projects after the training ends.' },
];

const popularCourses = [
  { title: 'Frontend Engineering', subtitle: 'Angular · Vue · React · TypeScript · Tailwind', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop' },
  { title: 'Backend & APIs', subtitle: '.NET · Node.js · Python · FastAPI · Express', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop' },
  { title: 'Mobile Development', subtitle: 'Flutter · React Native · Swift · Kotlin', image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=400&h=250&fit=crop' },
  { title: 'Enterprise & Cloud', subtitle: 'Blockchain · DevOps · Cloud · Enterprise Architecture', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop' },
  { title: 'Data & AI', subtitle: 'Machine Learning · LLMs · Analytics · MLOps', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop' },
  { title: 'Cloud & DevOps', subtitle: 'AWS · Azure · GCP · Kubernetes · Terraform', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop' },
];

const CorporateTraining = () => {
  // ── Carousel state ──
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const scrollPosRef = useRef(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let rafId;
    const speed = 0.6; // px per frame

    const step = () => {
      if (!isPaused && el) {
        scrollPosRef.current += speed;

        // Reset when we've scrolled past half the width (since cards are duplicated)
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

  // Duplicate the array so the loop is seamless
  const carouselItems = [...popularCourses, ...popularCourses];

  return (
    <PageShell>
      {/* ── HERO ── */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 420, md: 500 },
          padding: { xs: '5rem 1rem 3rem', md: '7rem 2.5rem 4rem' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          isolation: 'isolate',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(90deg, rgba(8,49,46,.94) 0%, rgba(8,49,46,.72) 55%, rgba(8,49,46,.85) 100%)' }} />
        <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 900 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow sx={{ color: lime }}>AI &amp; EdTech Services</Eyebrow>
            <Typography component="h1" sx={{ margin: '.4rem auto 1rem', font: "400 clamp(1.5rem, 3.2vw, 2.4rem)/1.05 Georgia, 'Times New Roman', serif", color: '#fff' }}>
              Corporate Training
            </Typography>
            <Body sx={{ color: 'rgba(255,255,255,.82) !important', maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
              Raising Excellence Then, Now and Forever
            </Body>
          </motion.div>
        </Box>
      </Box>

      {/* ── We Help Brands to Connect & Grow ── */}
      <Section>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.05fr .95fr' }, gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 4rem)' }, alignItems: 'center' }}>
          <Box>
            <Eyebrow>Overview</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
              We Help Brands to Connect &amp; Grow
            </SectionHeading>
            <Body sx={{ marginBottom: '1rem' }}>
              The need to address the skill gap in today's tech-driven world is greater than ever. Closing that gap — improving employee performance, fostering innovation, and staying current with the latest technologies — is critical to the overall growth of your organization.
            </Body>
            <Body>
              With a global footprint across the USA, UK, and India, ONAS is committed to enhancing and fine-tuning your workforce through in-house corporate training. Our curriculum is designed to fit your business requirements, and our instructors are certified, experienced practitioners who bring real delivery experience to every session.
            </Body>
          </Box>
          <Box sx={{ border: `1px solid ${line}`, borderRadius: '2px', overflow: 'hidden', background: '#fff', height: { xs: 240, md: 340 } }}>
            <Box component="img" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" alt="Corporate Training" sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </Box>
        </Box>
      </Section>

      {/* ── Key Takeaways ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Key Takeaways</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>What Your Teams Get</SectionHeading>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: '1.2rem', md: '1.4rem' } }}>
          {keyTakeaways.map((t, i) => {
            const { Icon } = t;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} style={{ display: 'flex' }}>
                <Box sx={cardSx}>
                  <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, marginBottom: '1rem' }}>
                    <Icon sx={{ fontSize: 20, color: '#257a68' }} />
                  </Box>
                  <Typography component="h3" sx={{ margin: '0 0 .55rem', font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif", color: ink }}>
                    {t.title}
                  </Typography>
                  <Body sx={{ fontSize: '.66rem' }}>{t.text}</Body>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Section>

      {/* ── Popular Courses — auto-scrolling carousel ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Training Tracks</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>Popular Courses</SectionHeading>
        </Box>

        <Box
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            // Fade edges for a polished look
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
              background: 'linear-gradient(to right, #fbfcf7 0%, rgba(251,252,247,0) 100%)',
            },
            '&::after': {
              right: 0,
              background: 'linear-gradient(to left, #fbfcf7 0%, rgba(251,252,247,0) 100%)',
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
              // Prevent scrollbar jitter
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {carouselItems.map((c, i) => (
              <Box
                key={`${c.title}-${i}`}
                sx={{
                  flex: '0 0 auto',
                  width: { xs: 260, sm: 280, md: 300 },
                }}
              >
                <Box sx={{ ...cardSx, padding: 0, overflow: 'hidden', height: '100%', cursor: 'pointer', transition: 'all .25s ease', '&:hover': { borderColor: '#aac7b2', transform: 'translateY(-3px)' } }}>
                  <Box sx={{ width: '100%', height: 140, overflow: 'hidden', borderBottom: `1px solid ${line}` }}>
                    <Box component="img" src={c.image} alt={c.title} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </Box>
                  <Box sx={{ padding: '1.3rem 1.2rem' }}>
                    <Typography component="h3" sx={{ margin: '0 0 .4rem', font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif", color: ink }}>
                      {c.title}
                    </Typography>
                    <Body sx={{ fontSize: '.64rem' }}>{c.subtitle}</Body>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      {/* ── CTA ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <Eyebrow>Let's Partner</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>Ready to Upskill Your Team?</SectionHeading>
          <Body sx={{ marginBottom: '1.6rem' }}>Let's design a corporate training program that fits your technology stack, your teams, and your business goals.</Body>
          <Box component="a" href="#top" sx={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.7rem 1.1rem', borderRadius: '2px', background: lime, color: ink, fontWeight: 600, fontSize: '.62rem', fontFamily: "'Poppins', sans-serif", textDecoration: 'none', transition: 'background .2s ease', '&:hover': { background: '#d3ffb0' } }}>
            Contact Us <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Section>
    </PageShell>
  );
};

export default CorporateTraining;