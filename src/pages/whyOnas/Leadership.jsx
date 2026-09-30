import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Eye, Handshake, Zap, Users } from 'lucide-react';

// Shared design
import {
  PageShell,
  Section,
  SectionHeading,
  Body,
  cardSx,
  ink, muted, line,
} from '../../theme/theme';

const Leadership = () => {
  const pillars = [
    {
      Icon: Eye,
      title: 'Vision & Guidance',
      points: [
        'Leading with clarity, delivering with purpose we guide your business to its next horizon.',
        'Our leadership is your advantage: shaping strategies today for tomorrow’s success.',
        'We navigate complexity with foresight, helping your organization achieve more.',
      ],
    },
    {
      Icon: Handshake,
      title: 'Trust & Partnership',
      points: [
        'Leadership is not about authority it’s about earning your trust every day.',
        'We lead by example, ensuring our partnership creates sustainable value for you.',
        'Your goals inspire our leadership; together, we turn challenges into opportunities.',
      ],
    },
    {
      Icon: Zap,
      title: 'Innovation & Growth',
      points: [
        'Transformative leadership fuels innovation your growth is our mission.',
        'Leading through change, we bring insight, strategy, and solutions that move you forward.',
        'We combine experience with vision to lead your organization toward smarter, faster outcomes.',
      ],
    },
    {
      Icon: Users,
      title: 'Customer-Centric Leadership',
      points: [
        'True leadership listens first, acts decisively, and delivers measurable impact.',
        'We empower your business with leadership that prioritizes your success above all.',
        'Our leadership philosophy is simple: your growth is the measure of our success.',
      ],
    },
  ];

  return (
    <PageShell>
      {/* ── Heading ── */}
      <Section>
        <Box sx={{ textAlign: 'center', mt: { xs: '3rem', md: '5rem' } }}>
          <SectionHeading sx={{ margin: '.7rem auto 1rem', maxWidth: 800 }}>
            Leadership
          </SectionHeading>
          <Body sx={{ maxWidth: 640, margin: '0 auto' }}>
            Guiding with Vision, Trust, Innovation &amp; Customer-Centricity
          </Body>
        </Box>
      </Section>

      {/* ── Pillars Grid ── */}
      <Section>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: '1.2rem', md: '1.4rem' },
            alignItems: 'stretch',
          }}
        >
          {pillars.map((item, i) => {
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
                      margin: '0 0 .8rem',
                      font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif",
                      color: ink,
                      minHeight: '2.4rem',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                    {item.points.map((point, idx) => (
                      <Typography
                        key={idx}
                        sx={{
                          color: `${muted} !important`,
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: '.64rem',
                          lineHeight: 1.7,
                        }}
                      >
                        • {point}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Section>
    </PageShell>
  );
};

export default Leadership;