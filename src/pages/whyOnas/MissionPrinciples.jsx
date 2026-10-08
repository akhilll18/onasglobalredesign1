import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';
import { CheckCircle, Clock, Users, Smile, Cog } from 'lucide-react';

import MissionHero from '../../assets/images/whyOnas/mission/mission.png';
import Image1 from '../../assets/images/whyOnas/mission/img1.png';
import Image2 from '../../assets/images/whyOnas/mission/img2.png';
import Image3 from '../../assets/images/whyOnas/mission/img3.png';

import {
  PageShell, Section, Eyebrow, SectionHeading, Body,
  cardSx, containerSx, ink, muted, line, lime,
} from '../../theme/theme';

const MissionPrinciples = () => {
  const slides = [MissionHero, Image1, Image2, Image3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const principles = [
    { Icon: CheckCircle, title: 'We Solve Problems', text: 'We are always friendly and help our clients resolve challenges effectively.' },
    { Icon: Clock, title: 'We Are Reliable', text: 'We are punctual, keep our word, and commit to high quality.' },
    { Icon: Cog, title: 'We Are Effective', text: 'We focus on achieving company goals efficiently, improving ourselves personally and professionally.' },
    { Icon: Users, title: 'We Are a Team', text: 'We communicate openly, provide mutual support, and collaborate globally.' },
    { Icon: Smile, title: 'We Enthuse Our Customers', text: 'We always exceed expectations in every customer contact.' },
  ];

  return (
    <PageShell>
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
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              background: 'linear-gradient(180deg, rgba(255,255,255,.10) 0%, rgba(0,0,0,.45) 100%)',
            }}
          />
        </Box>

        <Box sx={{ position: 'relative', zIndex: 2, ...containerSx }}>
          <Eyebrow sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)' }}>
            Our Mission
          </Eyebrow>
          <Typography
            component="h1"
            sx={{
              margin: '.4rem 0 .9rem',
              font: "400 clamp(1.15rem, 2.2vw, 1.75rem)/1.15 Georgia, 'Times New Roman', serif",
              color: '#fff',
              maxWidth: 900,
              textShadow: '0 2px 12px rgba(0,0,0,.95), 0 1px 3px rgba(0,0,0,1)',
            }}
          >
            Our Mission &amp; Principles
          </Typography>
          <Body
            sx={{
              color: '#ffffff !important',
              maxWidth: 640,
              marginBottom: '1.8rem',
              textShadow: '0 1px 8px rgba(0,0,0,.95)',
            }}
          >
            Simply enthused customers — this is our mission as a global IT infrastructure service
            provider. We go the extra mile and take end-to-end accountability, always finding a
            solution and never stopping until the job is done.
          </Body>
          <Box
            component="a"
            href="/resources/contact-us"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.5rem',
              padding: '.7rem 1.1rem',
              borderRadius: '2px',
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
            Contact Us <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Box>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Our Principles</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>
            Our Guiding Principles
          </SectionHeading>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '1.2rem', md: '1.4rem' },
            alignItems: 'stretch',
          }}
        >
          {principles.map((item, i) => {
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
                <Box sx={cardSx}>
                  <Box
                    sx={{
                      display: 'grid',
                      placeItems: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: '#fff',
                      border: `1px solid ${line}`,
                      marginBottom: '1rem',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color="#0B4C74" />
                  </Box>
                  <Typography
                    component="h3"
                    sx={{
                      margin: '0 0 .55rem',
                      font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif",
                      color: ink,
                      minHeight: '2.4rem',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Body sx={{ fontSize: '.66rem', flexGrow: 1 }}>{item.text}</Body>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Section>
    </PageShell>
  );
};

export default MissionPrinciples;