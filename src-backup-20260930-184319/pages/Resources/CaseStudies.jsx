import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

// Shared design
import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  Body,
  cardSx,
  ink, muted, line, soft,
} from '../../theme/theme';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Smart Factory Transformation for a Leading Beverage Manufacturer',
      text: 'A North American beverage leader leveraged AI-powered predictive maintenance to eliminate bottlenecks, optimize production, and reduce costs.',
    },
    {
      title: 'Patch Management & Zero-Day Security for a Global Medical Device Leader',
      text: 'Automated patch management to secure thousands of connected devices, minimize cybersecurity risks, and meet strict healthcare compliance standards, while reducing operational costs.',
    },
    {
      title: 'Oracle Fusion Cloud Test Automation for a Global Excavation Firm',
      text: 'Automated Oracle Fusion Cloud regression testing, eliminating 90% of manual effort, achieving faster patch validation, improved test coverage, and seamless CI/CD integration.',
    },
    {
      title: 'Cloud Modernization for a Global SaaS Provider',
      text: 'Re-engineered a legacy application into a cloud-native platform, enabling 5X customer growth while enhancing scalability, security, and cost efficiency.',
    },
    {
      title: 'Oracle: Enabled Healthcare Distribution Excellence',
      text: 'A transformation story through effective Oracle Fusion deployment.',
    },
    {
      title: 'SAP: Enabled Healthcare Distribution Excellence',
      text: 'A transformation story through effective SAP deployment.',
    },
  ];

  return (
    <PageShell>
      {/* ── Heading ── */}
      <Section>
        <Box sx={{ textAlign: 'center', mt: { xs: '3rem', md: '5rem' } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Eyebrow>Case Studies</Eyebrow>
            <SectionHeading sx={{ margin: '.7rem auto .9rem', maxWidth: 800 }}>
              Case Studies
            </SectionHeading>
            <Body sx={{ maxWidth: 640, margin: '0 auto .9rem' }}>
              Every Fix Has a Story
            </Body>
            <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
              Some problems are predictable. Others catch you off guard. Dive into the SMART moves
              we made to turn tech challenges into seamless solutions.
            </Body>
          </motion.div>
        </Box>
      </Section>

      {/* ── Case Studies Grid ── */}
      <Section bg={soft}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '1.2rem', md: '1.4rem' },
            alignItems: 'stretch',
          }}
        >
          {caseStudies.map((study, i) => (
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
                  <Briefcase size={20} color="#257a68" />
                </Box>
                <Typography
                  component="h3"
                  sx={{
                    margin: '0 0 .55rem',
                    font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif",
                    color: ink,
                  }}
                >
                  {study.title}
                </Typography>
                <Body sx={{ fontSize: '.66rem', flexGrow: 1 }}>{study.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>
    </PageShell>
  );
};

export default CaseStudies;