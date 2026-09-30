import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

// Culture photos
import Culture1 from '../../assets/images/whyOnas/lifeAtOnas/1.jpg';
import Culture2 from '../../assets/images/whyOnas/lifeAtOnas/2.jpg';
import Culture3 from '../../assets/images/whyOnas/lifeAtOnas/3.jpg';
import Culture4 from '../../assets/images/whyOnas/lifeAtOnas/4.jpg';
import Culture5 from '../../assets/images/whyOnas/lifeAtOnas/5.jpg';
import Culture6 from '../../assets/images/whyOnas/lifeAtOnas/6.jpg';
import Culture7 from '../../assets/images/whyOnas/lifeAtOnas/7.jpg';
import Culture8 from '../../assets/images/whyOnas/lifeAtOnas/8.jpg';
import Culture9 from '../../assets/images/whyOnas/lifeAtOnas/9.jpg';
import Culture10 from '../../assets/images/whyOnas/lifeAtOnas/10.jpg';
import Culture11 from '../../assets/images/whyOnas/lifeAtOnas/11.jpg';
import Culture12 from '../../assets/images/whyOnas/lifeAtOnas/12.jpg';
import Culture13 from '../../assets/images/whyOnas/lifeAtOnas/13.jpg';
import Culture14 from '../../assets/images/whyOnas/lifeAtOnas/14.jpg';
import Culture15 from '../../assets/images/whyOnas/lifeAtOnas/15.jpg';

// Shared design
import {
  PageShell,
  Section,
  SectionHeading,
  Body,
  ink, line,
} from '../../theme/theme';

export default function LifeAtOnas() {
  const culturePhotos = [
    Culture1, Culture2, Culture3, Culture4,
    Culture5, Culture6, Culture7,
    Culture8, Culture9, Culture10,
    Culture11, Culture12, Culture13,
    Culture14, Culture15,
  ];

  return (
    <PageShell>
      {/* ── Heading ── */}
      <Section>
        <Box sx={{ textAlign: 'center', mt: { xs: '3rem', md: '5rem' } }}>
          <SectionHeading sx={{ margin: '.7rem auto 1rem', maxWidth: 800 }}>
            Life @ ONAS
          </SectionHeading>
          <Body sx={{ maxWidth: 700, margin: '0 auto' }}>
            A Glimpse Into Our Culture, People, and Everyday Energy
          </Body>
        </Box>
      </Section>

      {/* ── Photo Grid ── */}
      <Section>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '1rem', md: '1.2rem' },
            alignItems: 'stretch',
          }}
        >
          {culturePhotos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 6) * 0.05 }}
            >
              <Box
                sx={{
                  border: `1px solid ${line}`,
                  borderRadius: '2px',
                  overflow: 'hidden',
                  background: '#fff',
                  height: { xs: 200, sm: 230, md: 260 },
                  transition: 'all .25s ease',
                  '&:hover': {
                    borderColor: '#aac7b2',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={photo}
                  alt={`Life at ONAS ${idx + 1}`}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>
    </PageShell>
  );
}