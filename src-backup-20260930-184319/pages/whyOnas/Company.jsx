import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import CompanyImage from '../../../public/logo2.png';

// Shared design
import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  Body,
  ink, muted,
} from '../../theme/theme';

export default function Company() {
  return (
    <PageShell>
      {/* ── Heading ── */}
      <Section>
        <Box sx={{ textAlign: 'center', mt: { xs: '3rem', md: '5rem' } }}>
          <Eyebrow>Company</Eyebrow>
          <SectionHeading sx={{ margin: '.7rem auto 1rem', maxWidth: 800 }}>
            Solving Today. Scaling Tomorrow
          </SectionHeading>
          <Body sx={{ maxWidth: 640, margin: '0 auto' }}>
            ONAS has powered businesses that lead, disrupt, and redefine industries.
          </Body>
        </Box>
      </Section>

      {/* ── Company Description ── */}
      <Section>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr .95fr' },
            gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 4rem)' },
            alignItems: 'center',
          }}
        >
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Eyebrow>Our Story</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
              Technology Evolves. So Do We.
            </SectionHeading>
            <Body sx={{ marginBottom: '.9rem' }}>
              We don’t just fix problems — we engineer scalable, intelligent, and resilient digital ecosystems.
            </Body>
            <Body sx={{ marginBottom: '.9rem' }}>
              From a technology solutions provider to a global force in innovation, we enable enterprises to support critical operations, modernize infrastructure, automate workflows, reinforce security, and transform industries — all through our{' '}
              <Box component="strong" sx={{ color: ink, fontWeight: 600 }}>
                SMART@ONAS
              </Box>{' '}
              framework.
            </Body>
            <Body>
              This isn’t just what we do. It’s who we are.
            </Body>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ width: '100%' }}
          >
            <Box
              component="img"
              src={CompanyImage}
              alt="ONAS Company"
              sx={{
                width: '100%',
                maxWidth: 500,
                
               
                
              }}
            />
          </motion.div>
        </Box>
      </Section>
    </PageShell>
  );
}