import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Bolt, BookOpen, Gift, Users } from 'lucide-react';

// Shared design
import {
  PageShell,
  Section,
  SectionHeading,
  Body,
  cardSx,
  ink, muted, line,
} from '../../theme/theme';

const CultureBenefits = () => {
  const cards = [
    {
      Icon: Bolt,
      title: 'Can-Do Attitude',
      text: 'Orange Blooded Pros take on responsibility, unite their strengths, and go the extra mile to enthuse customers. Challenges are seen as opportunities to get creative and find solutions. Our can-do attitude fuels constant success and growth.',
    },
    {
      Icon: BookOpen,
      title: 'Continuous Learning & Development',
      text: 'At ONAS, we are continuous learners. Training is offered via our internal Global Campus platform and dedicated development programs to help colleagues grow personally and professionally, developing crucial skills for their roles.',
    },
    {
      Icon: Gift,
      title: 'Benefits at ONAS',
      text: 'Colleagues enjoy perks beyond the standard. Global benefits are complemented by country- and role-specific perks, ensuring a rewarding employment experience.',
    },
    {
      Icon: Users,
      title: 'Unique Employment Experience',
      text: 'Join a vibrant team collaborating across the globe, taking end-to-end accountability from day one. Work contributes to a greater social purpose, making your experience at ONAS more than just a job.',
    },
  ];

  return (
    <PageShell>
      {/* ── Heading ── */}
      <Section>
        <Box sx={{ textAlign: 'center', mt: { xs: '3rem', md: '5rem' } }}>
          <SectionHeading sx={{ margin: '.7rem auto 1rem', maxWidth: 800 }}>
            Culture &amp; Benefits
          </SectionHeading>
          <Body sx={{ maxWidth: 640, margin: '0 auto' }}>
            Building a winning team through collaboration, growth, and purpose
          </Body>
        </Box>
      </Section>

      {/* ── Cards Grid ── */}
      <Section>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: '1.2rem', md: '1.4rem' },
            alignItems: 'stretch',
          }}
        >
          {cards.map((card, i) => {
            const { Icon } = card;
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
                    <Icon size={20} color="#257a68" />
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
                    {card.title}
                  </Typography>
                  <Body sx={{ fontSize: '.66rem', flexGrow: 1 }}>{card.text}</Body>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Section>
    </PageShell>
  );
};

export default CultureBenefits;