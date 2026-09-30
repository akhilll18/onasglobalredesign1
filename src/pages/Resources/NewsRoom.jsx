import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

// Shared design
import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  Body,
  containerSx,
  ink, muted, line, soft, lime,
} from '../../theme/theme';

const NewsRoom = () => {
  return (
    <PageShell>
      {/* ── Heading ── */}
      <Section>
        <Box sx={{ textAlign: 'center' , mt: { xs: '3rem', md: '5rem' } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Eyebrow>News Room</Eyebrow>
            <SectionHeading sx={{ margin: '.7rem auto 1rem' }}>
              News Room
            </SectionHeading>
            <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
              ONAS Featured on Clutch and GoodFirms for Its Technology and Business Services Excellence
            </Body>
          </motion.div>
        </Box>
      </Section>

      {/* ── Content ── */}
      <Section bg={soft}>
        <Box
          sx={{
            maxWidth: 900,
            margin: '0 auto',
            background: '#fff',
            border: `1px solid ${line}`,
            borderRadius: '2px',
            padding: { xs: '1.6rem 1.3rem', md: '2.4rem 2.2rem' },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Body sx={{ marginBottom: '1.2rem' }}>
              Every client engagement at ONAS starts with a promise: solve real-world challenges with
              precision, innovation, and integrity. Over the years, this promise has evolved into
              long-term partnerships built on measurable outcomes and mutual trust. Now, with our
              listings on Clutch and GoodFirms, and a consecutive two-year recognition in the Gartner
              Magic Quadrant for Finance &amp; Accounting BPO, this trust is independently validated.
            </Body>

            <Body sx={{ marginBottom: '1.4rem' }}>
              Our presence on these industry-standard platforms is a reflection of ONAS’s domain
              strength across IT services, enterprise application support, business process
              modernization, and finance and accounting transformation. And it opens doors to new
              conversations with enterprises looking for proven partners.
            </Body>

            <Typography
              component="h2"
              sx={{
                margin: '1.4rem 0 .8rem',
                font: "400 clamp(1rem, 1.8vw, 1.35rem)/1.2 Georgia, 'Times New Roman', serif",
                color: ink,
              }}
            >
              Why Clutch and GoodFirms Matter
            </Typography>

            <Body sx={{ marginBottom: '1.8rem' }}>
              These aren’t paid listings. Clutch and GoodFirms evaluate companies through a rigorous,
              transparent review process based on verified client feedback, service delivery, market
              presence, and technical expertise.
            </Body>

            {/* CTA buttons */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '.8rem', justifyContent: 'center' }}>
              <Box
                component={RouterLink}
                to="/"
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
                  '&:hover': { background: '#000000' },
                }}
              >
                Visit Clutch <ArrowForward sx={{ fontSize: 14 }} />
              </Box>

              <Box
                component={RouterLink}
                to="/"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '.5rem',
                  padding: '.7rem 1.1rem',
                  borderRadius: '2px',
                  background: ink,
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '.62rem',
                  fontFamily: "'Poppins', sans-serif",
                  textDecoration: 'none',
                  transition: 'background .2s ease',
                  '&:hover': { background: '#0b2e2b' },
                }}
              >
                Visit GoodFirms <ArrowForward sx={{ fontSize: 14 }} />
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Section>
    </PageShell>
  );
};

export default NewsRoom;