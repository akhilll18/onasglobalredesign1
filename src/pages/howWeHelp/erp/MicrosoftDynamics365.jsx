import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowForward } from '@mui/icons-material';
import {
  Server, Users, Link, Wrench, Headphones, BarChart3,
  Compass, Settings, Cloud, BookOpen, Layers, Zap,
  GitBranch, Database, ShoppingCart, TrendingUp, Shield,
} from 'lucide-react';

import {
  PageShell, Section, Eyebrow, SectionHeading, SubHeading,
  Body, LimeButton, cardSx, containerSx, heroHeadingSx,
  ink, muted, line, soft, lime,
} from '../../../theme/theme';

import HeroImage from '../../../assets/images/howWeHelp/ERP/MicrosoftDynamics/hero.jpg';
import Image1 from '../../../assets/images/howWeHelp/ERP/MicrosoftDynamics/img1.png';
import Image2 from '../../../assets/images/howWeHelp/ERP/MicrosoftDynamics/img2.png';

const NAVY = '#0B4C74';

const MicrosoftDynamics365 = () => {
  const dynamicsKeywords = [
    'Microsoft Dynamics 365 consulting services',
    'Dynamics 365 implementation partner',
    'Dynamics 365 ERP implementation',
  ].join(', ');

  const offerings = [
    { Icon: Server, title: 'Dynamics 365 Implementation Services', text: 'End-to-end implementation of Dynamics 365 Finance & Operations, Business Central, and Customer Engagement apps tailored to your business needs.' },
    { Icon: Users, title: 'Dynamics 365 CRM Services', text: 'Transform customer relationships with Sales, Marketing, and Customer Service modules. Automate lead-to-cash processes and enhance customer experiences.' },
    { Icon: Link, title: 'Power Platform Integration', text: 'Extend Dynamics 365 with Power Apps, Power Automate, and Power BI. Create custom solutions without complex coding requirements.' },
    { Icon: Wrench, title: 'Dynamics 365 Customization', text: 'Customize forms, workflows, plugins, and business processes. Build tailored solutions that align perfectly with your unique business requirements.' },
    { Icon: Headphones, title: 'Managed Services & Support', text: '24/7 proactive monitoring, incident management, user support, and continuous optimization for your Dynamics 365 environment.' },
    { Icon: BarChart3, title: 'Dynamics 365 Analytics & BI', text: 'Transform data into insights with Power BI dashboards, advanced analytics, and AI-driven business intelligence for better decision-making.' },
  ];

  const endToEnd = [
    { Icon: Compass, title: 'Discovery & Assessment', text: 'Analyze business processes, define requirements, and create a strategic roadmap for Dynamics 365 implementation success.' },
    { Icon: Settings, title: 'Configuration & Development', text: 'Configure modules, develop customizations, and build integrations to create a tailored Dynamics 365 solution.' },
    { Icon: Cloud, title: 'Data Migration & Integration', text: 'Securely migrate data from legacy systems and integrate with existing applications for seamless operations.' },
    { Icon: BookOpen, title: 'Training & Change Management', text: 'Comprehensive user training, documentation, and change management strategies to ensure user adoption.' },
    { Icon: Layers, title: 'Go-Live & Hypercare', text: 'Managed go-live execution with intensive post-implementation support to ensure smooth transition.' },
    { Icon: Zap, title: 'Continuous Optimization', text: 'Regular system health checks, performance tuning, and feature updates for ongoing improvement.' },
  ];

  const valueDelivery = [
    { Icon: GitBranch, title: 'Microsoft Gold Partner', text: 'Certified Microsoft partner with proven expertise in Dynamics 365 implementations across industries.' },
    { Icon: Zap, title: 'Accelerated Time-to-Value', text: 'Rapid implementation methodologies that deliver results faster while minimizing business disruption.' },
    { Icon: Database, title: 'Unified Platform Approach', text: 'Seamless integration across Dynamics 365 apps and Power Platform for a cohesive user experience.' },
    { Icon: Cloud, title: 'Flexible Delivery Models', text: 'Onshore, offshore, and hybrid delivery models to match your project scope, timeline, and budget requirements.' },
  ];

  const whyMatters = [
    'Unifies CRM, ERP, and productivity tools into a single intelligent platform',
    'Enhances decision-making with AI-powered insights and predictive analytics',
    'Improves operational efficiency through process automation and workflows',
    'Delivers personalized customer experiences across all touchpoints',
    'Scales seamlessly with your business from SMB to enterprise',
    'Integrates naturally with Microsoft 365, Teams, and Azure ecosystem',
    'Reduces IT complexity with cloud-native architecture and regular updates',
  ];

  const modules = [
    { Icon: ShoppingCart, title: 'Dynamics 365 Sales', text: 'AI-powered sales automation with Copilot, lead management, and predictive insights to close deals faster.' },
    { Icon: TrendingUp, title: 'Dynamics 365 Finance', text: 'Real-time financial insights, budgeting, and compliance management for modern enterprises.' },
    { Icon: Shield, title: 'Business Central', text: 'All-in-one business management solution for SMBs covering finance, sales, and operations.' },
  ];

  return (
    <PageShell>
      <Helmet>
        <title>Microsoft Dynamics 365 Consulting Services | AI-Powered ERP & CRM Implementation | ONAS Global</title>
        <meta name="description" content="ONAS provides expert Microsoft Dynamics 365 consulting services with AI integration, ERP implementation, CRM setup, and managed services. Certified Microsoft partner serving global enterprises." />
        <meta name="keywords" content={dynamicsKeywords} />
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
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: -2,
            overflow: 'hidden',
            backgroundImage: `url(${HeroImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            background: 'linear-gradient(180deg, rgba(255,255,255,.10) 0%, rgba(0,0,0,.45) 100%)',
          }}
        />

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)' }}>
              Microsoft Dynamics 365
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
              Transform Your Business With Microsoft Dynamics 365
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
              Microsoft Dynamics 365 is a portfolio of AI-powered, cloud-based CRM and ERP business applications designed to connect data, teams, and processes. It enables organizations to manage sales, customer service, finance, and supply chain operations using tools like Dynamics 365 Sales, Customer Insights, and Business Central.
            </Body>
            <LimeButton href="/resources/contact-us">
              Contact Us <ArrowForward sx={{ fontSize: 14 }} />
            </LimeButton>
          </motion.div>
        </Container>
      </Box>

      <Section sx={{ background: '#ffffff' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: { xs: '2rem', md: '2rem' }, alignItems: 'stretch' }}>
          <Box>
            <Eyebrow>Intelligent Business Applications</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1.2rem', color: NAVY }}>
              Intelligent Business Applications That Drive Growth
            </SectionHeading>
            <Body sx={{ marginBottom: '.8rem', fontSize: '.72rem', lineHeight: 1.8 }}>
              As a certified Microsoft Dynamics 365 partner, we deliver comprehensive implementation, customization, and support services across the entire Dynamics 365 ecosystem. Our experts specialize in aligning Dynamics 365 Finance &amp; Operations, Business Central, Sales, Customer Service, and Marketing modules with your business objectives.
            </Body>
            <Body sx={{ margin: 0, fontSize: '.72rem', lineHeight: 1.8 }}>
              Every deployment is designed to maximize ROI, streamline operations, and provide actionable insights through AI-powered analytics. We help organizations of all sizes leverage the full power of the Microsoft Cloud—including Teams, Power Platform, and Azure—to create a truly connected business environment.
            </Body>
          </Box>

          <Box
            sx={{
              border: `1px solid ${line}`,
              borderRadius: '2px',
              overflow: 'hidden',
              background: '#fff',
              minHeight: { xs: 300, sm: 420, md: 480 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <Box
              component="img"
              src={Image1}
              alt="Dynamics 365 overview"
              sx={{ width: '100%', maxWidth: 400, height: 'auto', display: 'block' }}
            />
          </Box>
        </Box>
      </Section>

      <Section sx={{ background: '#ffffff' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Core Services</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>Comprehensive Dynamics 365 Services</SectionHeading>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: '1rem', md: '1.2rem' }, alignItems: 'stretch' }}>
          {offerings.map((item, i) => {
            const { Icon } = item;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} style={{ display: 'flex', width: '100%' }}>
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
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>End-to-End</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>Our End-to-End Dynamics 365 Implementation Approach</SectionHeading>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: '1rem', md: '1.2rem' }, alignItems: 'stretch' }}>
          {endToEnd.map((item, i) => {
            const { Icon } = item;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} style={{ display: 'flex', width: '100%' }}>
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
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Why Us</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>Why Partner With Us for Dynamics 365</SectionHeading>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: { xs: '1rem', md: '1.2rem' }, alignItems: 'stretch' }}>
          {valueDelivery.map((item, i) => {
            const { Icon } = item;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} style={{ display: 'flex', width: '100%' }}>
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
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Why It Matters</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>Why Microsoft Dynamics 365 Matters for Your Business</SectionHeading>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr .9fr' }, gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 4rem)' }, alignItems: 'center' }}>
          <Box sx={{ background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: { xs: '1.6rem 1.2rem', md: '2.2rem 1.8rem' } }}>
            {whyMatters.map((point, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem', marginBottom: i < whyMatters.length - 1 ? '1rem' : 0 }}>
                  <Box sx={{ display: 'grid', placeItems: 'center', width: 22, height: 22, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, flexShrink: 0, marginTop: '.1rem', fontFamily: "'Poppins', sans-serif", fontSize: '.6rem', fontWeight: 700, color: '#0B4C74' }}>
                    {i + 1}
                  </Box>
                  <Body sx={{ margin: 0, fontSize: '.72rem', lineHeight: 1.75 }}>{point}</Body>
                </Box>
              </motion.div>
            ))}
          </Box>

          <Box sx={{ border: `1px solid ${line}`, borderRadius: '2px', overflow: 'hidden', background: '#fff', height: { xs: 320, sm: 400, md: 360 } }}>
            <Box
              component="img"
              src={Image2}
              alt="Why Microsoft Dynamics 365 matters"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Box>
      </Section>

      <Section sx={{ background: '#ffffff' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Modules</Eyebrow>
          <SectionHeading sx={{ color: NAVY }}>Key Dynamics 365 Modules We Support</SectionHeading>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: '1rem', md: '1.2rem' }, alignItems: 'stretch' }}>
          {modules.map((item, i) => {
            const { Icon } = item;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} style={{ display: 'flex', width: '100%' }}>
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

export default MicrosoftDynamics365;