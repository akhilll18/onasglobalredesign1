import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Server, Link, Settings, Zap, GitBranch, Database } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import {
  PageShell, Section, Eyebrow, SectionHeading, SubHeading,
  Body, LimeButton, cardSx, containerSx, heroHeadingSx,
  ink, muted, line, soft, lime,
} from '../../../theme/theme';

import Image1 from '../../../assets/images/howWeHelp/digitaltrans/cloud-integ/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/digitaltrans/cloud-integ/img2.jpg';
import Image3 from '../../../assets/images/howWeHelp/digitaltrans/cloud-integ/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/digitaltrans/cloud-integ/img4.png';
import Image5 from '../../../assets/images/howWeHelp/digitaltrans/cloud-integ/img5.png';

const CloudMigrationIntegration = () => {
  const location = useLocation();
  const baseUrl = 'https://onasglobal.com';

  const slides = [Image1, Image4, Image5];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const seoData = {
    title: 'Cloud Migration & Integration Services | AWS, Azure, GCP Migration Experts',
    description: 'Secure cloud migration and integration services with zero disruption. Legacy app modernization, multi-cloud strategy, and hybrid cloud solutions for AWS, Azure, GCP.',
    keywords: 'cloud migration services, cloud integration, AWS migration, Azure migration, GCP migration, hybrid cloud, legacy app modernization, cloud optimization, FinOps',
    canonicalUrl: `${baseUrl}${location.pathname}`,
    ogImage: Image1,
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cloud Migration & Integration Services",
    "description": "Enterprise cloud migration and integration services for AWS, Azure, GCP, Oracle Cloud, and hybrid environments",
    "provider": { "@type": "Organization", "name": "ONAS" },
    "serviceType": ["Cloud Migration", "Cloud Integration", "Legacy Modernization", "Multi-Cloud Strategy", "Cloud Optimization"],
    "areaServed": "Global"
  };

  const offerings = [
    {
      icon: <Server size={20} color="#0B4C74" />,
      title: 'Cloud Migration Services',
      text: `Legacy app rehosting, replatforming, and refactoring
Application and database modernization
Multi-cloud and hybrid cloud migration
Data center exit and infrastructure consolidation`,
    },
    {
      icon: <Link size={20} color="#0B4C74" />,
      title: 'Cloud Integration Services',
      text: `API and microservices enablement
SaaS and on-prem system integration
Hybrid cloud orchestration and DevOps workflows
Secure data sync and operational unification`,
    },
    {
      icon: <Settings size={20} color="#0B4C74" />,
      title: 'Cloud Management & Optimization',
      text: `Cloud monitoring, alerting, and uptime visibility
FinOps strategies for spend optimization
Workload tuning and auto-scaling
Security and compliance automation`,
    },
  ];

  const valueDelivery = [
    { icon: <GitBranch size={20} color="#0B4C74" />, title: 'Cloud-Agnostic Expertise', text: 'Deep platform experience across AWS, Azure, GCP, Oracle Cloud, and Snowflake.' },
    { icon: <Zap size={20} color="#0B4C74" />, title: 'Full-Lifecycle Delivery', text: 'From cloud assessment to post-deployment optimization, we manage every stage.' },
    { icon: <Database size={20} color="#0B4C74" />, title: 'Business-Focused Outcomes', text: 'Every migration is mapped to KPIs: performance, uptime, cost savings, and agility.' },
    { icon: <Cloud size={20} color="#0B4C74" />, title: 'Built-In Security & Governance', text: 'Zero-trust architecture, encryption, IAM, and regulatory alignment at every layer.' },
  ];

  return (
    <PageShell>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.ogImage} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS" />
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
            Cloud Migration &amp; Integration
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
            Cloud Migration &amp; Integration Services That De-Risk and Deliver ROI
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
            Modernize with confidence through comprehensive cloud migration and integration services that ensure zero disruption and deliver measurable outcomes. From replatforming legacy systems to enabling hybrid cloud agility, our solutions support secure, scalable integration across AWS, Azure, and GCP.
          </Body>
          <LimeButton href="/resources/contact-us">
            Contact Us <ArrowForward sx={{ fontSize: 14 }} />
          </LimeButton>
        </Container>
      </Box>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Our Impact</Eyebrow>
          <SectionHeading>Why Cloud Migration &amp; Integration Matters</SectionHeading>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: { xs: '2rem', md: '2rem' },
            alignItems: 'stretch',
          }}
        >
          <Box
            sx={{
              border: `1px solid ${line}`,
              borderRadius: '2px',
              overflow: 'hidden',
              background: '#fff',
              minHeight: { xs: 280, sm: 420, md: 480 },
            }}
          >
            <Box
              component="img"
              src={Image2}
              alt="Cloud infrastructure"
              sx={{ width: '100%', height: '100%', minHeight: 'inherit', objectFit: 'cover', display: 'block' }}
            />
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
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
                      background: soft,
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
        </Box>
      </Section>

      <Box
        sx={{
          position: 'relative',
          padding: { xs: '3.5rem 1rem', md: '5rem 2.5rem' },
          overflow: 'hidden',
          background: ink,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${Image3})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(.4)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(255,255,255,.10) 0%, rgba(0,0,0,.55) 100%)',
          }}
        />

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
            <Typography sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)', fontSize: '.55rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 700, fontFamily: "'Poppins', sans-serif", marginBottom: '.5rem' }}>
              What We Offer
            </Typography>
            <Typography component="h2" sx={{ margin: '.4rem auto 0', font: "400 clamp(1.2rem, 2.2vw, 1.7rem)/1.15 Georgia, 'Times New Roman', serif", color: '#fff', maxWidth: 720, textShadow: '0 2px 12px rgba(0,0,0,.95)' }}>
              Our Cloud Services
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
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
        </Container>
      </Box>

      <Section>
        <Box
          sx={{
            background: '#fff',
            border: `1px solid ${line}`,
            borderRadius: '2px',
            padding: { xs: '1.6rem 1.2rem', md: '2.2rem 1.8rem' },
          }}
        >
          <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.8rem' }}>
            As a leading cloud migration and integration services provider, we specialize in helping enterprises transition from legacy systems to modern cloud infrastructure. Our expertise spans across AWS, Azure, GCP, and hybrid cloud environments, ensuring business continuity and zero disruption during migration.
          </Body>
          <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, margin: 0 }}>
            Whether you're planning a data center exit, legacy application modernization, or implementing a multi-cloud strategy, our cloud consulting services deliver measurable ROI through optimized performance, reduced operational costs, and enhanced security compliance.
          </Body>
        </Box>
      </Section>
    </PageShell>
  );
};

export default CloudMigrationIntegration;