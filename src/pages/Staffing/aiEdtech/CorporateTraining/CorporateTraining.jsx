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

const technologies = [
  'Angular',
  '.NET',
  'Node.js',
  'Flutter',
  'React Native',
  'Vue',
  'React',
];

const CorporateTraining = () => {
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
          backgroundImage: 'url(/corporate-training1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          isolation: 'isolate',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(90deg, rgba(11,76,116,.94) 0%, rgba(11,76,116,.72) 55%, rgba(11,76,116,.85) 100%)' }} />
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

      {/* ── Overview ── */}
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
            <Box component="img" src="/corporate-training.jpg" alt="Corporate Training" sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
                    <Icon sx={{ fontSize: 20, color: '#0B4C74' }} />
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

      {/* ── Technologies ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Training Tracks</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>Technologies</SectionHeading>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: '1rem', md: '1.2rem' },
            maxWidth: 1000,
            margin: '0 auto',
          }}
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Box
                sx={{
                  ...cardSx,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.4rem 1rem',
                  minHeight: 80,
                  cursor: 'pointer',
                  transition: 'all .25s ease',
                  '&:hover': {
                    borderColor: '#aac7b2',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 6px 16px rgba(11,76,116,.08)',
                  },
                }}
              >
                <Typography
                  sx={{
                    font: "400 clamp(.9rem, 1.5vw, 1.1rem)/1.2 Georgia, 'Times New Roman', serif",
                    color: ink,
                    textAlign: 'center',
                    letterSpacing: '.02em',
                  }}
                >
                  {tech}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* ── CTA ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <Eyebrow>Let's Partner</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>Ready to Upskill Your Team?</SectionHeading>
          <Body sx={{ marginBottom: '1.6rem' }}>Let's design a corporate training program that fits your technology stack, your teams, and your business goals.</Body>
          <Box component="a" href="#top" sx={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.7rem 1.1rem', borderRadius: '2px', background: '#0B4C74', color: '#ffffff', fontWeight: 600, fontSize: '.62rem', fontFamily: "'Poppins', sans-serif", textDecoration: 'none', transition: 'background .2s ease', '&:hover': { background: '#d3ffb0', color: '#000000' } }}>
            Contact Us <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Section>
    </PageShell>
  );
};

export default CorporateTraining;