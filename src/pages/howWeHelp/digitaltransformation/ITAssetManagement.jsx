import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowForward } from '@mui/icons-material';

import {
  PageShell, Section, Eyebrow, SectionHeading, SubHeading,
  Body, LimeButton, cardSx, containerSx, heroHeadingSx,
  ink, muted, line, soft, lime,
} from '../../../theme/theme';

import CmdbImage from '../../../assets/images/howWeHelp/ITAssetMangement/cmdb.png';
import WorkflowImage from '../../../assets/images/howWeHelp/ITAssetMangement/workflow.png';
import RiskImage from '../../../assets/images/howWeHelp/ITAssetMangement/risk.png';
import SpeedImage from '../../../assets/images/howWeHelp/ITAssetMangement/speed.png';
import LicenseImage from '../../../assets/images/howWeHelp/ITAssetMangement/license.png';
import OptimizeImage from '../../../assets/images/howWeHelp/ITAssetMangement/optimize.png';
import LifecycleImage from '../../../assets/images/howWeHelp/ITAssetMangement/lifecycle.png';
import ITAMImage from '../../../assets/images/howWeHelp/ITAssetMangement/itam_main.png';
import Image2 from '../../../assets/images/howWeHelp/digitaltrans/AssetMangement/img2.jpg';
import Image3 from '../../../assets/images/howWeHelp/digitaltrans/AssetMangement/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/digitaltrans/AssetMangement/img4.jpg';

const outcomeDeployment = [
  { image: CmdbImage, title: 'CMDB', text: 'End-to-end visibility of IT assets to maintain a clean CMDB and achieve accuracy for asset inventory' },
  { image: WorkflowImage, title: 'Workflows', text: 'Simplify and streamline asset allocation/workflows – request, receive, deploy, swap, and dispose' },
  { image: RiskImage, title: 'Risk Management', text: 'Mitigate risks related to asset cost by minimizing waste and enabling compliance' },
  { image: SpeedImage, title: 'Speed', text: 'Speed up business outcomes by leveraging software data workflows that are already a key aspect of the platform' },
  { image: LicenseImage, title: 'Software License', text: 'Reduce risks related to software licenses by embedding SAM and IT change management, and taking actions on unlicensed deployments' },
  { image: OptimizeImage, title: 'Optimization', text: 'Optimize license use and mitigate overlap to reduce software and cloud spend' },
  { image: LifecycleImage, title: 'Digital Lifecycle', text: 'Manage digital lifecycles by breaking down silos with a single system of action across tables, views, and apps' },
];

const kpis = [
  { label: 'Cost Savings', value: '15-30%' },
  { label: 'License Compliance', value: '99%+' },
  { label: 'Asset Visibility', value: '100%' },
  { label: 'Audit Readiness', value: '24/7' },
  { label: 'Lifecycle Management', value: 'End-to-End' },
  { label: 'ROI Timeline', value: '6-12 Months' },
];

const impactStats = [
  { stat: '40%', desc: 'Average cost savings from ITAM implementation' },
  { stat: '40%', desc: 'Reduction in software audit risks' },
  { stat: '95%', desc: 'Improvement in asset tracking accuracy' },
  { stat: '50%', desc: 'Faster IT procurement processes' },
];

const ITAssetManagement = () => {
  const baseUrl = window.location.origin;
  const pageUrl = `${baseUrl}/services/it-asset-management`;

  const slides = [ITAMImage, Image2, Image3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const seoData = {
    title: 'IT Asset Management (ITAM) Solutions | Hardware & Software Asset Management 2024',
    description: 'Complete IT Asset Management solutions for hardware tracking, software license management, CMDB, lifecycle management, and cost optimization. Enterprise ITAM services.',
    keywords: 'IT Asset Management, ITAM, software asset management, hardware asset management, CMDB, IT inventory management, license management, SAM, IT asset tracking, IT lifecycle management, IT cost optimization',
    canonicalUrl: pageUrl,
    ogImage: ITAMImage,
    twitterImage: ITAMImage,
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IT Asset Management Solutions",
    "description": "Comprehensive IT Asset Management services including hardware tracking, software license management, CMDB implementation, and IT lifecycle management",
    "provider": { "@type": "Organization", "name": "ONAS", "url": baseUrl, "logo": `${baseUrl}/logo.png` },
    "serviceType": ["Hardware Asset Management", "Software Asset Management", "CMDB Implementation", "IT Asset Discovery", "License Management", "IT Cost Optimization"],
    "areaServed": { "@type": "Country", "name": "Global" },
    "offers": { "@type": "Offer", "category": "TechnologyServices" }
  };

  return (
    <PageShell>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:title" content="IT Asset Management Solutions | Hardware & Software Asset Tracking" />
        <meta property="og:description" content="Enterprise IT Asset Management solutions for hardware tracking, software license management, CMDB, and IT lifecycle optimization." />
        <meta property="og:image" content={seoData.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Asset Management Solutions | ITAM Services" />
        <meta name="twitter:description" content="Professional IT Asset Management services for hardware, software, and license tracking." />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS IT Solutions" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

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
                inset: 0,
                backgroundImage: `url(${slides[currentSlide]})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
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

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Eyebrow sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)' }}>
            IT Asset Management
          </Eyebrow>
          <Typography
            component="h1"
            sx={{
              ...heroHeadingSx,
              color: '#ffffff',
              marginLeft: 'auto',
              marginRight: 'auto',
              textShadow: '0 2px 12px rgba(0,0,0,.95), 0 1px 3px rgba(0,0,0,1)',
            }}
          >
            IT Asset Management Solutions
          </Typography>
          <Body
            sx={{
              color: '#ffffff !important',
              maxWidth: 780,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '1.8rem',
              textShadow: '0 1px 8px rgba(0,0,0,.95)',
            }}
          >
            Drive full lifecycle tracking and visibility into hardware assets and software licenses with costs, processes, and data on a single platform.
          </Body>
          <LimeButton href="/resources/contact-us">
            Contact Us <ArrowForward sx={{ fontSize: 14 }} />
          </LimeButton>
        </Container>
      </Box>

      <Section>
        <Box sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center' }}>
          <Eyebrow>Introduction</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Enterprise IT Asset Management for Cost Control and Compliance
          </SectionHeading>
          <Body sx={{ maxWidth: 640, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            Our IT Asset Management solutions provide comprehensive tracking, management, and optimization of IT assets throughout their lifecycle. We help organizations reduce costs, ensure compliance, improve security, and make informed IT investment decisions.
          </Body>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Outcome Focused</Eyebrow>
          <SectionHeading>Outcome Focused Deployment</SectionHeading>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '1rem', md: '1.2rem' },
            alignItems: 'stretch',
          }}
        >
          {outcomeDeployment.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box sx={cardSx}>
                {item.image && (
                  <Box
                    component="img"
                    src={item.image}
                    alt={`IT Asset Management - ${item.title}`}
                    sx={{
                      width: 48,
                      height: 48,
                      marginBottom: '1rem',
                      objectFit: 'contain',
                      flexShrink: 0,
                    }}
                  />
                )}
                <SubHeading sx={{ marginBottom: '.5rem' }}>{item.title}</SubHeading>
                <Body sx={{ flexGrow: 1 }}>{item.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: '1.5rem', md: '2rem' },
            alignItems: 'stretch',
          }}
        >
          <Box>
            <Eyebrow>Benefits</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1.2rem' }}>
              IT Asset Management Benefits
            </SectionHeading>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.9rem' }}>
              Our IT Asset Management solutions deliver measurable benefits including cost reduction, improved compliance, enhanced security, and better decision-making through comprehensive asset visibility and control.
            </Body>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.9rem' }}>
              By implementing a structured ITAM program, organizations can achieve 15-30% cost savings through license optimization, reduce audit risks, improve resource utilization, and streamline IT operations.
            </Body>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, margin: 0 }}>
              Our approach combines industry best practices with technology solutions to deliver sustainable ITAM results that support business objectives and digital transformation initiatives.
            </Body>
          </Box>

          <Box sx={{ background: soft, border: `1px solid ${line}`, borderRadius: '2px', padding: { xs: '1.6rem 1.2rem', md: '2rem' } }}>
            <Eyebrow>KPI</Eyebrow>
            <SubHeading sx={{ marginTop: '.6rem', marginBottom: '1.4rem', font: "400 clamp(1.2rem, 2vw, 1.6rem)/1.15 Georgia, 'Times New Roman', serif" }}>
              ITAM Key Performance Indicators
            </SubHeading>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: { xs: '.8rem', md: '1rem' } }}>
              {kpis.map((kpi, idx) => (
                <Box
                  key={idx}
                  sx={{
                    padding: '1rem .8rem',
                    border: `1px solid ${line}`,
                    borderRadius: '2px',
                    background: '#fff',
                    textAlign: 'center',
                  }}
                >
                  <Typography sx={{ margin: 0, color: ink, font: "400 clamp(1.1rem, 1.8vw, 1.5rem)/1 Georgia, 'Times New Roman', serif" }}>
                    {kpi.value}
                  </Typography>
                  <Typography sx={{ margin: '.35rem 0 0', color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.55rem', letterSpacing: '.05em', textTransform: 'uppercase' }}>
                    {kpi.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Section>

      <Box sx={{ background: ink, color: '#fff' }}>
        <Container maxWidth={false} disableGutters sx={{ ...containerSx, paddingTop: { xs: '3rem', md: '4rem' }, paddingBottom: { xs: '3rem', md: '4rem' } }}>
          <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
            <Typography sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)', fontSize: '.55rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>
              Our Impact
            </Typography>
            <Typography component="h2" sx={{ margin: '.7rem auto 0', font: "400 clamp(1.2rem, 2.2vw, 1.7rem)/1.15 Georgia, 'Times New Roman', serif", color: '#fff', maxWidth: 720, textShadow: '0 2px 12px rgba(0,0,0,.95)' }}>
              IT Asset Management Impact
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
              gap: { xs: '1rem', md: '1.2rem' },
            }}
          >
            {impactStats.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  padding: { xs: '1.4rem 1rem', md: '1.8rem 1.2rem' },
                  border: '1px solid rgba(255,255,255,.12)',
                  borderRadius: '2px',
                  textAlign: 'center',
                }}
              >
                <Typography sx={{ margin: 0, color: lime, font: "400 clamp(1.6rem, 3vw, 2.2rem)/1 Georgia, 'Times New Roman', serif" }}>
                  {item.stat}
                </Typography>
                <Typography sx={{ margin: '.5rem 0 0', color: 'rgba(255,255,255,.72) !important', fontFamily: "'Poppins', sans-serif", fontSize: '.6rem', lineHeight: 1.6 }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </PageShell>
  );
};

export default ITAssetManagement;