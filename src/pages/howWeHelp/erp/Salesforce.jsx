import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';
import {
  Users,
  Link,
  Settings,
  Headphones,
  BarChart3,
  Compass,
  Wrench,
  Cloud,
  BookOpen,
  Layers,
} from 'lucide-react';

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

import Image1 from '../../../assets/images/howWeHelp/ERP/SalesForce/img1.jpg';

import Image3 from '../../../assets/images/howWeHelp/ERP/SalesForce/img2.jpg';
import Image4 from '../../../assets/images/howWeHelp/ERP/SalesForce/img4.jpg';
import Image5 from '../../../assets/images/howWeHelp/ERP/SalesForce/img5.jpg';
import Image6 from '../../../assets/images/howWeHelp/ERP/SalesForce/img6.png';
import Image7 from '../../../assets/images/howWeHelp/ERP/SalesForce/img7.jpg';
import Image8 from '../../../assets/images/howWeHelp/ERP/SalesForce/img8.jpg';

const NAVY = '#0B4C74';

const Salesforce = () => {
  const slides = [Image1, Image3, Image4];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const offerings = [
    { Icon: Users, title: 'Salesforce Implementation Services', text: 'Tailored deployments for Sales, Service, and Experience Clouds—designed to fit your processes and user roles.' },
    { Icon: Link, title: 'Salesforce Integration Services', text: 'Connect Salesforce with ERP, marketing systems, CPQ, and back-office tools via APIs and middleware.' },
    { Icon: Settings, title: 'Salesforce Customization Services', text: 'Configure page layouts, build Apex and Lightning components, and implement automation to drive user adoption.' },
    { Icon: Headphones, title: 'Salesforce Managed Services', text: '24/7 monitoring, release readiness, ticket support, and ongoing enhancements under SLA-backed models.' },
    { Icon: BarChart3, title: 'Salesforce Analytics & Reporting', text: 'Build dashboards, Einstein Analytics, and reporting frameworks to turn CRM data into real-time intelligence.' },
  ];

  const endToEnd = [
    { Icon: Compass, title: 'Consult & Strategize', text: 'Define CRM goals, maturity stage, user personas, and best-fit Salesforce roadmap.' },
    { Icon: Wrench, title: 'Configure & Build', text: 'Customize Salesforce with Flows, Apex, Lightning, UI details, and secure permission sets.' },
    { Icon: Cloud, title: 'Integrate & Automate', text: 'Build middleware funnels, API endpoints, data syncs, and integration patterns.' },
    { Icon: BookOpen, title: 'Train & Change', text: 'Equip teams with hands-on workshops, user guides, and go-live readiness.' },
    { Icon: Layers, title: 'Support & Optimize', text: 'Post-implementation support includes system health, release management, and AI capabilities.' },
  ];

  return (
    <PageShell>
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
            Salesforce
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
            Salesforce Consulting Services That Turn CRM Into ROI
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
            Unlock CRM power through tailored Salesforce consulting services. From strategic deployment to ongoing enhancements, we help businesses streamline sales, service, and marketing operations with measurable, scalable impact.
          </Body>
          <LimeButton href="/resources/contact-us">
            Contact Us <ArrowForward sx={{ fontSize: 14 }} />
          </LimeButton>
        </Container>
      </Box>

      <Section sx={{ background: '#ffffff' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Core Services</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>Salesforce Core Services</SectionHeading>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '1rem', md: '1.2rem' },
            alignItems: 'stretch',
          }}
        >
          {offerings.map((item, i) => {
            const { Icon } = item;
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
                  <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, marginBottom: '1rem', flexShrink: 0 }}>
                    <Icon size={20} color="#0B4C74" />
                  </Box>
                  <SubHeading sx={{ marginBottom: '.5rem', color: NAVY }}>{item.title}</SubHeading>
                  <Body sx={{ flexGrow: 1 }}>{item.text}</Body>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Section>

      <Section sx={{ background: '#ffffff' }}>
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
              minHeight: { xs: 300, sm: 420, md: 480 },
            }}
          >
            <Box
              component="img"
              src={Image5}
              alt="Salesforce CRM consulting"
              sx={{ width: '100%', height: '100%', minHeight: 'inherit', objectFit: 'cover', display: 'block' }}
            />
          </Box>

          <Box>
            <Eyebrow>CRM Success</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1.2rem', color: NAVY }}>
              Powering CRM Success with Expert Salesforce Consulting
            </SectionHeading>
            <Body sx={{ marginBottom: '.8rem', fontSize: '.72rem', lineHeight: 1.8 }}>
              With deep domain knowledge and certified Salesforce consultants, we turn CRM vision into operational excellence. Whether it's a greenfield implementation, org optimization, or multi-cloud integration, our team ensures best-practice alignment at every step.
            </Body>
            <Body sx={{ marginBottom: '.8rem', fontSize: '.72rem', lineHeight: 1.8 }}>
              From Sales and Service Clouds to Marketing, Commerce, and Pardot, our full-spectrum Salesforce consulting services help you engage effectively, drive efficiency, and grow sustainably.
            </Body>
            <Body sx={{ margin: 0, fontSize: '.72rem', lineHeight: 1.8 }}>
              We focus on configuring Salesforce to mirror your business processes—so adoption improves, automation performs, and ROI becomes measurable.
            </Body>
          </Box>
        </Box>
      </Section>

      <Section sx={{ background: '#ffffff' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>End-to-End</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>Our End-to-End Salesforce Services</SectionHeading>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '1rem', md: '1.2rem' },
            alignItems: 'stretch',
          }}
        >
          {endToEnd.map((item, i) => {
            const { Icon } = item;
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
                  <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, marginBottom: '1rem', flexShrink: 0 }}>
                    <Icon size={20} color="#0B4C74" />
                  </Box>
                  <SubHeading sx={{ marginBottom: '.5rem', color: NAVY }}>{item.title}</SubHeading>
                  <Body sx={{ flexGrow: 1 }}>{item.text}</Body>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Section>
    </PageShell>
  );
};

export default Salesforce;