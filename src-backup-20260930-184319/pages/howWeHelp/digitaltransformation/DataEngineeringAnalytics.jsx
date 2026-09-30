import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Database,
  BarChart3,
  Layers,
  Zap,
  Cloud,
  GitBranch,
  Compass,
} from 'lucide-react';

// Shared design
import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  SubHeading,
  Body,
  LimeButton,
  cardSx,
  containerSx,
  heroHeadingSx,
  ink, muted, line, soft, lime,
} from '../../../theme/theme';

// Images
import Image1 from '../../../assets/images/howWeHelp/digitaltrans/dataengganalytics/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/digitaltrans/dataengganalytics/img2.jpg';
import Image3 from '../../../assets/images/howWeHelp/digitaltrans/dataengganalytics/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/digitaltrans/dataengganalytics/img4.jpg';
import Image5 from '../../../assets/images/howWeHelp/digitaltrans/dataengganalytics/img5.jpg';

const DataEngineeringAnalytics = () => {
  const offerings = [
    {
      icon: <Database size={20} color="#257a68" />,
      title: 'Data Engineering & Modernization',
      text: `Legacy data warehouse modernization
Cloud-native data lake and pipeline development
ETL/ELT optimization across platforms
Scalable migration to AWS, Azure, and GCP`,
    },
    {
      icon: <BarChart3 size={20} color="#257a68" />,
      title: 'Business Intelligence & Visualization',
      text: `Self-service BI and real-time dashboards
KPI monitoring with Power BI, Tableau, and Looker
Executive-level reporting and performance tracking
Data storytelling and visualization consulting`,
    },
    {
      icon: <Layers size={20} color="#257a68" />,
      title: 'Advanced Analytics & AI/ML',
      text: `Predictive and prescriptive analytics
AI/ML model development and deployment
Customer segmentation and personalization
Demand forecasting and churn prediction`,
    },
    {
      icon: <Zap size={20} color="#257a68" />,
      title: 'Data Governance & Quality',
      text: `Master Data Management (MDM) strategies
Data lineage, cataloging, and metadata control
Security, compliance (HIPAA, GDPR), and access control
Quality monitoring, validation, and remediation`,
    },
  ];

  const valueDelivery = [
    {
      icon: <Compass size={20} color="#257a68" />,
      title: 'Full-Stack Analytics Delivery',
      text: 'From data ingestion to predictive outcomes, we cover the entire analytics lifecycle.',
    },
    {
      icon: <Cloud size={20} color="#257a68" />,
      title: 'Cloud-Ready, Tool-Agnostic Expertise',
      text: 'We work across AWS, Azure, GCP, Databricks, Power BI, Snowflake, Tableau, and more.',
    },
    {
      icon: <GitBranch size={20} color="#257a68" />,
      title: 'Business-Driven Approach',
      text: 'We don’t just enable dashboards; we align every solution with business KPIs and ROI expectations.',
    },
    {
      icon: <Layers size={20} color="#257a68" />,
      title: 'Security & Compliance First',
      text: 'Security frameworks and compliance practices including GDPR, HIPAA, and industry-specific mandates.',
    },
  ];

  return (
    <PageShell>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 480, md: 560 },
          padding: { xs: '5rem 1rem 3rem', md: '7rem 2.5rem 4rem' },
          overflow: 'hidden',
          background: ink,
          isolation: 'isolate',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: -2,
            overflow: 'hidden',
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(8,49,46,.94) 0%, rgba(8,49,46,.72) 55%, rgba(8,49,46,.85) 100%)',
              zIndex: 1,
            },
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          >
            <source src="/videos/BG.mp4" type="video/mp4" />
          </video>
        </Box>

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Eyebrow sx={{ color: lime }}>Data & Analytics</Eyebrow>
          <Typography component="h1" sx={{ ...heroHeadingSx, marginLeft: 'auto', marginRight: 'auto' }}>
            Data Analytics Services That Turn Intelligence into Enterprise Impact
          </Typography>
          <Body sx={{ color: 'rgba(255,255,255,.82) !important', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto', marginBottom: '1.8rem' }}>
            Unlock enterprise-wide insights and accelerate smarter decisions with our end-to-end data analytics services. From building robust data pipelines to delivering AI-powered intelligence, we simplify complexity and drive actionable outcomes.
          </Body>
          <LimeButton href="/resources/contact-us">
            Contact Us
          </LimeButton>
        </Container>
      </Box>

      {/* Offerings */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>What We Offer</Eyebrow>
          <SectionHeading>Our Data Analytics Offerings</SectionHeading>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: '1rem', md: '1.2rem' },
            alignItems: 'stretch',
          }}
        >
          {offerings.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
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
                    background: soft,
                    border: `1px solid ${line}`,
                    marginBottom: '1rem',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </Box>
                <SubHeading sx={{ marginBottom: '.5rem' }}>{item.title}</SubHeading>
                <Body sx={{ whiteSpace: 'pre-line', flexGrow: 1 }}>{item.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* Value Delivery */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Our Impact</Eyebrow>
          <SectionHeading>Why ONAS for Data Analytics?</SectionHeading>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: '1rem', md: '1.2rem' },
            alignItems: 'stretch',
          }}
        >
          {valueDelivery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
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
                  {item.icon}
                </Box>
                <SubHeading sx={{ marginBottom: '.5rem' }}>{item.title}</SubHeading>
                <Body sx={{ flexGrow: 1 }}>{item.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>
    </PageShell>
  );
};

export default DataEngineeringAnalytics;