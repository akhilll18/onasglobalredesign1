import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Images
import PurposeImg from '../../assets/images/whoWeAre/purpose.png';
import VisionImg from '../../assets/images/whoWeAre/vision.jpg';
import MissionImg from '../../assets/images/whoWeAre/mission.jpg';
import IntegrityImg from '../../assets/images/whoWeAre/integrity.jpg';
import CustomerSuccessImg from '../../assets/images/whoWeAre/customersuccess.png';
import ConsultingMindsetImg from '../../assets/images/whoWeAre/consultingmindset.png';
import TrustImg from '../../assets/images/whoWeAre/trust.jpg';
import EqualityOnenessImg from '../../assets/images/whoWeAre/equalityoneness.webp';

// Shared design
import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  Body,
  containerSx,
  ink, muted, line, soft,
} from '../../theme/theme';

const aboutSections = [
  {
    id: 'purpose',
    title: 'Our Purpose',
    description:
      'Deliver outcome focused technology solutions that enhance business performance and organizational value of our customers; making positive impact on our people and society',
    image: PurposeImg,
    reverse: false,
  },
  {
    id: 'vision',
    title: 'Vision',
    description:
      'To be a global business solution partner empowering value propositions for organizations, people, and society steered by our Intelligent Frameworks',
    image: VisionImg,
    reverse: true,
  },
  {
    id: 'mission',
    title: 'Mission',
    description:
      'Nurture our workforce with world-class niche technology skills and knowledge development, and utilize their prowess in serving our customers on the promise of thought leadership, innovation and technological agility',
    image: MissionImg,
    reverse: false,
  },
];

const coreValues = [
  {
    title: 'Integrity',
    description:
      'Embracing honesty by sincerely owning up to our actions and abiding by organizational responsibilities at all times and by all means',
    image: IntegrityImg,
    reverse: true,
  },
  {
    title: 'Customer Success',
    description:
      'Aiming to align all our actions that not only cater to specific customer requirements, but go above and beyond to reap customer business success',
    image: CustomerSuccessImg,
    reverse: false,
  },
  {
    title: 'Consulting Mindset',
    description:
      'Going beyond just offering services, we help customers by delivering on the promise of thought leadership through recommending best-in-class solutions that target specific business challenges with structured problem-solving processes',
    image: ConsultingMindsetImg,
    reverse: true,
  },
  {
    title: 'Trust',
    description:
      'Moving forward with deep faith and trust in every member of our teams, so we all are inspired to be our own boss, and can freely exhibit innovation in all our actions and deliverables',
    image: TrustImg,
    reverse: false,
  },
  {
    title: 'Equality & Oneness',
    description:
      'Respecting cultural diversity that people bring at workplace and seeing all people across the organization as one team, all delivering on the promise of outcome focused solutions',
    image: EqualityOnenessImg,
    reverse: true,
  },
];

export default function AboutUs() {
  const baseUrl = window.location.origin;
  const pageUrl = `${baseUrl}/who-we-are`;

  const seoData = {
    title: 'Who We Are | ONAS — Outcome-Focused Global IT Consulting',
    description:
      'ONAS is an outcome-focused, global IT consulting, innovation and services organization. Learn about our purpose, vision, mission, and core values.',
    keywords:
      'who we are, about ONAS, IT consulting organization, global IT services, purpose vision mission, core values, integrity, customer success, consulting mindset, trust, equality and oneness',
    canonicalUrl: pageUrl,
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ONAS',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: seoData.description,
    slogan: 'Outcome-Focused, Global IT Consulting, Innovation and Services organization',
  };

  return (
    <PageShell>
      {/* ── SEO ── */}
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:title" content="Who We Are | ONAS" />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={PurposeImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ONAS" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourCompany" />
        <meta name="twitter:creator" content="@YourCompany" />
        <meta name="twitter:title" content="Who We Are | ONAS" />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={PurposeImg} />
        <meta name="twitter:image:alt" content="Who We Are — ONAS" />

        <meta property="linkedin:title" content="Who We Are | ONAS" />
        <meta property="linkedin:description" content={seoData.description} />
        <meta property="linkedin:image" content={PurposeImg} />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="date" content={new Date().toISOString().split('T')[0]} />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Hidden SEO */}
      <div style={{ display: 'none' }}>
        <h1>Who We Are — ONAS</h1>
        <p>ONAS is an outcome-focused, global IT consulting, innovation and services organization. Our purpose, vision, mission, and core values guide every decision we make.</p>
      </div>

      {/* ── WHO WE ARE ── */}
      <Section>
        <Box sx={{ textAlign: 'center', mt: { xs: '3rem', md: '5rem' } }}>
          <Eyebrow>Who We Are</Eyebrow>
          <SectionHeading sx={{ margin: '.7rem auto 0', maxWidth: 800 }}>
            We are Outcome-Focused, Global IT Consulting, Innovation and Services organization.
          </SectionHeading>
        </Box>
      </Section>

      {/* ── Purpose, Vision, Mission ── */}
      <Section>
        {aboutSections.map((section, idx) => (
          <motion.div
            key={idx}
            id={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: section.reverse ? '1fr 1.15fr' : '1.15fr 1fr' },
                gap: { xs: '1.5rem', md: 'clamp(2rem, 5vw, 4rem)' },
                alignItems: 'center',
                marginBottom: { xs: '2.5rem', md: '4rem' },
                direction: { xs: 'ltr', md: section.reverse ? 'rtl' : 'ltr' },
              }}
            >
              {/* Image — shorter */}
              <Box
                sx={{
                  border: `1px solid ${line}`,
                  borderRadius: '2px',
                  overflow: 'hidden',
                  background: '#fff',
                  height: { xs: 200, sm: 220, md: 260 },
                  direction: 'ltr',
                }}
              >
                <Box
                  component="img"
                  src={section.image}
                  alt={section.title}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </Box>

              {/* Text */}
              <Box sx={{ direction: 'ltr' }}>
                <Eyebrow>{section.title}</Eyebrow>
                <Typography
                  component="h2"
                  sx={{
                    margin: '.7rem 0 1rem',
                    font: "400 clamp(1rem, 1.8vw, 1.35rem)/1.2 Georgia, 'Times New Roman', serif",
                    color: ink,
                  }}
                >
                  {section.title}
                </Typography>
                <Body sx={{ whiteSpace: 'pre-line' }}>{section.description}</Body>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Section>

      {/* ── Core Values header ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center' }}>
          <Eyebrow>Core Values</Eyebrow>
          <SectionHeading sx={{ margin: '.7rem auto 1rem', maxWidth: 720 }}>
            Our Principles Guide Every Decision We Make
          </SectionHeading>
          <Body sx={{ maxWidth: 640, margin: '0 auto' }}>
            Our principles guide every decision we make and every action we take.
          </Body>
        </Box>
      </Section>

      {/* ── Core Values list ── */}
      <Section bg={soft}>
        {coreValues.map((value, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: value.reverse ? '1fr 1.15fr' : '1.15fr 1fr' },
                gap: { xs: '1.5rem', md: 'clamp(2rem, 5vw, 4rem)' },
                alignItems: 'center',
                marginBottom: { xs: '2.5rem', md: '4rem' },
                direction: { xs: 'ltr', md: value.reverse ? 'rtl' : 'ltr' },
              }}
            >
              {/* Image — shorter */}
              <Box
                sx={{
                  border: `1px solid ${line}`,
                  borderRadius: '2px',
                  overflow: 'hidden',
                  background: '#fff',
                  height: { xs: 180, sm: 200, md: 240 },
                  direction: 'ltr',
                }}
              >
                <Box
                  component="img"
                  src={value.image}
                  alt={value.title}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </Box>

              {/* Text */}
              <Box sx={{ direction: 'ltr' }}>
                <Eyebrow>Core Value</Eyebrow>
                <Typography
                  component="h3"
                  sx={{
                    margin: '.7rem 0 1rem',
                    font: "400 clamp(1rem, 1.8vw, 1.35rem)/1.2 Georgia, 'Times New Roman', serif",
                    color: ink,
                  }}
                >
                  {value.title}
                </Typography>
                <Body sx={{ whiteSpace: 'pre-line' }}>{value.description}</Body>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Section>
    </PageShell>
  );
}