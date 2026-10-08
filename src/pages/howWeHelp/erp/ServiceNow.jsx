import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowForward } from '@mui/icons-material';

import {
  PageShell, Section, Eyebrow, SectionHeading, SubHeading,
  Body, LimeButton, cardSx, containerSx, heroHeadingSx,
  ink, muted, line, soft, lime,
} from '../../../theme/theme';

import HeroImage from '../../../assets/images/howWeHelp/ERP/servicenow/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/ERP/servicenow/img2.jpg';
import Image3 from '../../../assets/images/howWeHelp/ERP/servicenow/img3.jpg';

const NAVY = '#0B4C74';

const ServiceNow = () => {
  const slides = [HeroImage, Image2, Image3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const lifecycleBlocks = [
    {
      title: 'Implementation & Consulting Services',
      image: Image2,
      paragraphs: [
        'ONAS delivers structured ServiceNow implementation services covering business requirement analysis, platform configuration, workflow design, roles, service catalogs, and process alignment.',
        'Our consulting approach focuses on translating business requirements into scalable ServiceNow solutions while maintaining maintainable configurations and clear governance practices.',
        'We support organizations through requirement gathering, solution design, configuration, testing, user acceptance, deployment, and post-go-live support.',
      ],
    },
    {
      title: 'Integration & Optimization Services',
      image: Image3,
      paragraphs: [
        'ONAS integrates ServiceNow with enterprise systems, cloud platforms, identity providers, monitoring solutions, and business applications using APIs and integration technologies.',
        'We optimize existing ServiceNow environments by reviewing workflows, reducing manual activities, improving service visibility, and identifying opportunities for automation.',
        'Our optimization services also include platform enhancements, workflow improvements, reporting, dashboards, and continuous process refinement.',
      ],
    },
  ];

  const faqBlocks = [
    { title: 'ServiceNow Implementation', paragraphs: ['ONAS supports ServiceNow implementation from requirements and solution design through configuration, testing, deployment, and post-go-live support.', 'Implementation can be aligned with the organization’s existing IT service management processes and future automation requirements.'] },
    { title: 'IT Service Management', paragraphs: ['ServiceNow ITSM can centralize Incident, Problem, Change, Request, Knowledge, and Service Catalog processes.', 'ONAS helps organizations structure these workflows to improve service visibility, process consistency, and user experience.'] },
    { title: 'IT Operations Management', paragraphs: ['ONAS supports ServiceNow ITOM capabilities for improving infrastructure and application visibility.', 'Services can include discovery, service mapping, event management, operational workflows, and integration with existing monitoring platforms.'] },
    { title: 'Customer Service Management', paragraphs: ['ServiceNow CSM helps organizations manage customer cases and service interactions through connected workflows and self-service capabilities.', 'ONAS can help configure customer service workflows, knowledge capabilities, case management, and integrations with existing business systems.'] },
    { title: 'HR Service Delivery', paragraphs: ['ServiceNow HRSD can help organizations digitize employee service processes and provide centralized employee self-service experiences.', 'ONAS can support HR workflow configuration, service catalogs, employee requests, knowledge management, and process automation.'] },
    { title: 'Integration & Automation', paragraphs: ['ONAS integrates ServiceNow with enterprise applications and external platforms using APIs and supported integration approaches.', 'Automation opportunities can be identified across service management, operations, employee services, customer services, and internal business workflows.'] },
  ];

  return (
    <PageShell>
      <Helmet>
        <title>ServiceNow Implementation, ITSM, ITOM & Managed Services | ONAS Global</title>
        <meta name="description" content="ONAS Global provides ServiceNow consulting, implementation, ITSM, ITOM, CSM, HRSD, integration, workflow automation, managed services, and ServiceNow platform optimization." />
        <meta name="keywords" content="ServiceNow implementation, ServiceNow consulting, ServiceNow ITSM, ServiceNow ITOM, ServiceNow CSM, ServiceNow HRSD, ServiceNow integration, ServiceNow automation, ServiceNow managed services, ONAS Global ServiceNow" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'ServiceNow Services',
            description: 'ServiceNow consulting, implementation, ITSM, ITOM, integration, automation, customer service, HR service delivery, and managed services from ONAS Global.',
            url: 'https://www.onasglobal.com/servicenow-services',
            provider: { '@type': 'Organization', name: 'ONAS Global', url: 'https://www.onasglobal.com', logo: 'https://www.onasglobal.com/logo.png' },
            areaServed: { '@type': 'Country', name: 'Global' },
          })}
        </script>
        <meta property="og:title" content="ServiceNow Implementation, ITSM, ITOM & Managed Services | ONAS Global" />
        <meta property="og:description" content="ONAS Global delivers ServiceNow consulting, implementation, ITSM, ITOM, integration, automation, CSM, HRSD, and managed services." />
        <meta property="og:image" content={HeroImage} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.onasglobal.com/servicenow-services" />
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
            ServiceNow Services
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
            ServiceNow Services for Connected, Automated & Efficient Operations
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
            ONAS Global helps organizations modernize service operations with ServiceNow consulting, implementation, ITSM, ITOM, integration, workflow automation, customer service, employee service delivery, and ongoing platform support.
          </Body>

          <LimeButton href="/resources/contact-us">
            Contact Us <ArrowForward sx={{ fontSize: 14 }} />
          </LimeButton>
        </Container>
      </Box>

      <Section sx={{ background: '#ffffff' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Full Lifecycle</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>Full Lifecycle ServiceNow Services</SectionHeading>
        </Box>

        <Box sx={{ background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: { xs: '1.4rem 1.1rem', md: '1.6rem 1.8rem' } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: '1rem', md: '1.8rem' } }}>
            <Box>
              <Body sx={{ margin: '0 0 .6rem', color: `${ink} !important` }}>
                <strong>Strategy &amp; Consulting:</strong> ServiceNow roadmap, business requirements, process assessment, platform strategy, and solution planning.
              </Body>
              <Body sx={{ margin: 0 }}>
                <strong>Implementation:</strong> Platform configuration, workflows, service catalogs, roles, testing, deployment, and post-go-live support.
              </Body>
            </Box>
            <Box>
              <Body sx={{ margin: '0 0 .6rem', color: `${ink} !important` }}>
                <strong>Integration:</strong> Enterprise application integration, APIs, cloud platforms, identity systems, and monitoring tools.
              </Body>
              <Body sx={{ margin: 0 }}>
                <strong>Optimization:</strong> Managed services, workflow automation, platform enhancements, reporting, dashboards, and continuous improvement.
              </Body>
            </Box>
          </Box>
        </Box>
      </Section>

      <Section sx={{ background: '#ffffff' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Lifecycle</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>ServiceNow Service Lifecycle Management</SectionHeading>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '1.5rem', md: '2rem' } }}>
          {lifecycleBlocks.map((block, i) => {
            const isReversed = i % 2 === 1;
            return (
              <Box
                key={i}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  alignItems: 'stretch',
                  background: '#fff',
                  border: `1px solid ${line}`,
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    order: { xs: 1, md: isReversed ? 2 : 1 },
                    minHeight: { xs: 220, md: 320 },
                    backgroundImage: `url(${block.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
                <Box
                  sx={{
                    order: { xs: 2, md: isReversed ? 1 : 2 },
                    padding: { xs: '1.4rem 1.1rem', md: '2rem 1.8rem' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <SubHeading sx={{ marginBottom: '1rem', borderBottom: `1px solid ${line}`, paddingBottom: '.5rem', color: NAVY }}>
                    {block.title}
                  </SubHeading>
                  {block.paragraphs.map((paragraph, idx) => (
                    <Body key={idx} sx={{ margin: '0 0 .7rem' }}>{paragraph}</Body>
                  ))}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Section>

      <Section sx={{ background: '#ffffff' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>FAQ</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>Frequently Asked Questions About ServiceNow Services</SectionHeading>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: '1rem', md: '1.2rem' } }}>
          {faqBlocks.map((block, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={cardSx}>
                <SubHeading sx={{ marginBottom: '1rem', borderBottom: `1px solid ${line}`, paddingBottom: '.5rem', color: NAVY }}>{block.title}</SubHeading>
                {block.paragraphs.map((paragraph, idx) => (
                  <Body key={idx} sx={{ margin: '0 0 .6rem' }}>{paragraph}</Body>
                ))}
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>
    </PageShell>
  );
};

export default ServiceNow;