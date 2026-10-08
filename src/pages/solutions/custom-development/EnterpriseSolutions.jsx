import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ArrowForward, Check } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers, Server, Shield, Zap, GitBranch, Database, Settings,
  Rocket, Cpu, Lock, Award, Globe, Building2, Users, TrendingUp,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import {
  PageShell, Section, Eyebrow, SectionHeading, SubHeading, Body, LimeButton,
  cardSx, containerSx, heroHeadingSx, ink, muted, line, soft, cream, lime,
} from '../../../theme/theme';

import ES1 from '../../../assets/images/solutions/enterprise-solutions/enterprisedev1.jpg';
import ES2 from '../../../assets/images/solutions/enterprise-solutions/enterprisedev2.jpg';
import ES3 from '../../../assets/images/solutions/enterprise-solutions/enterprisedev3.jpg';
import ES4 from '../../../assets/images/solutions/enterprise-solutions/enterprisedev4.jpg';
import ES5 from '../../../assets/images/solutions/enterprise-solutions/enterprisedev5.jpg';
import ES6 from '../../../assets/images/solutions/enterprise-solutions/enterprisedev6.jpg';
import ES7 from '../../../assets/images/solutions/enterprise-solutions/enterprisedev7.jpg';
import ES8 from '../../../assets/images/solutions/enterprise-solutions/enterprisedev8.jpg';
import ES9 from '../../../assets/images/solutions/enterprise-solutions/enterprisedev9.jpg';
import ES10 from '../../../assets/images/solutions/enterprise-solutions/enterprisedev10.jpg';
import ES11 from '../../../assets/images/solutions/enterprise-solutions/enterprisedev11.jpg';

const slides = [ES1, ES2, ES3];

const sectionSurface = '#f3f7fa';
const customCardSx = {
  ...cardSx,
  borderRadius: '6px',
  '&:hover': {
    borderColor: '#0B4C74',
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 28px rgba(11,76,116,.08)',
  },
};

const EnterpriseSolutions = () => {
  const location = useLocation();
  const baseUrl = 'https://onasglobal.com';
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const seoData = {
    title: 'Enterprise Solutions | Scalable, Secure Enterprise Software | ONAS',
    description: 'Enterprise-grade solutions engineered for scale, security, and integration. ERP integration, workflow automation, and digital transformation for global enterprises.',
    keywords: 'enterprise solutions, enterprise software, ERP integration, workflow automation, digital transformation, ONAS',
    canonicalUrl: `${baseUrl}${location.pathname}`,
    ogImage: slides[0],
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Enterprise Solutions',
    description: 'Enterprise-grade software solutions',
    provider: { '@type': 'Organization', name: 'ONAS' },
    serviceType: ['Enterprise Software', 'ERP Integration', 'Workflow Automation'],
    areaServed: 'Global',
  };

  const stats = [
    { value: '500+', label: 'Enterprise Deployments' },
    { value: '10M+', label: 'Users Served' },
    { value: '99.99%', label: 'Platform Uptime' },
    { value: '40+', label: 'ERP Integrations Built' },
    { value: '22+', label: 'Industries Served' },
    { value: 'ISO', label: '27001:2013' },
  ];

  const offerings = [
    { num: '01', icon: <Layers size={20} color="#0B4C74" />, title: 'Enterprise Application Suites', text: 'Custom enterprise platforms built around your operations with modular architecture that connects departments and scales with growth.', image: ES4, bullets: ['Modular architecture for flexibility', 'Cross-department integration', 'Role-based access and governance'] },
    { num: '02', icon: <Server size={20} color="#0B4C74" />, title: 'ERP & System Integration', text: 'SAP, Oracle, NetSuite, Microsoft Dynamics integration that unifies data across your enterprise and powers real-time intelligence.', image: ES5, bullets: ['SAP, Oracle, NetSuite, Dynamics', 'Unified data model', 'Real-time business intelligence'] },
    { num: '03', icon: <Zap size={20} color="#0B4C74" />, title: 'Workflow Automation', text: 'Automate approvals, reporting, and operational processes with intelligent orchestration that reduces manual overhead at scale.', image: ES6, bullets: ['Approval workflow automation', 'Document processing', 'Exception handling and alerts'] },
    { num: '04', icon: <Shield size={20} color="#0B4C74" />, title: 'Security & Compliance', text: 'SOC 2, ISO 27001, HIPAA, and GDPR-aligned architecture with zero-trust security from day one — not retrofitted before launch.', image: ES7, bullets: ['SOC 2, ISO 27001, HIPAA, GDPR', 'Zero-trust architecture', 'Audit-ready logging and controls'] },
    { num: '05', icon: <TrendingUp size={20} color="#0B4C74" />, title: 'Data & Analytics Platform', text: 'Unified data warehouse, BI dashboards, and predictive analytics that give executives a single source of truth.', image: ES8, bullets: ['Data warehouse and lakehouse', 'BI dashboards and reporting', 'Predictive analytics and forecasting'] },
    { num: '06', icon: <Users size={20} color="#0B4C74" />, title: 'Change Management & Training', text: 'We help your teams adopt new systems — from stakeholder alignment to end-user training and go-live support.', image: ES9, bullets: ['Stakeholder alignment', 'End-user training programs', 'Post go-live support'] },
  ];

  const layers = [
    { num: '01', title: 'Executive & Leadership', subtitle: 'Strategic oversight and KPI visibility', tags: ['Dashboards', 'Analytics', 'Reporting', 'Compliance'], dark: true },
    { num: '02', title: 'Business Applications', subtitle: 'The platforms your teams use daily', tags: ['ERP', 'CRM', 'HRMS', 'Finance', 'Custom apps'] },
    { num: '03', title: 'Integration & Data', subtitle: 'How systems talk and share truth', tags: ['APIs', 'ETL', 'Middleware', 'Data warehouse', 'Real-time sync'] },
    { num: '04', title: 'Infrastructure & Security', subtitle: 'The foundation everything runs on', tags: ['Cloud', 'Kubernetes', 'IAM', 'Audit logging', 'DR'] },
  ];

  const process = [
    { num: '01', title: 'Enterprise Discovery', text: 'We map your current landscape, integrations, compliance requirements, and business objectives across departments.' },
    { num: '02', title: 'Architecture & Design', text: 'We design a target architecture that unifies systems, data, and security controls — validated with your stakeholders.' },
    { num: '03', title: 'Phased Implementation', text: 'Delivery runs in phases with clear go-live gates. Legacy systems stay running in parallel until cutover is proven.' },
    { num: '04', title: 'Operate & Evolve', text: 'Post-launch support, continuous improvement, and platform evolution as your business scales.' },
  ];

  const timeline = [
    { num: '01', title: 'Discovery', text: 'Weeks 1–3' },
    { num: '02', title: 'Design', text: 'Weeks 4–7' },
    { num: '03', title: 'Build', text: 'Months 2–5' },
    { num: '04', title: 'Cutover', text: 'Month 6' },
    { num: '05', title: 'Operate', text: 'Ongoing' },
  ];

  const whyChoose = [
    { num: '01', icon: <Building2 size={20} color="#0B4C74" />, title: 'Enterprise-Scale Delivery', text: '500+ enterprise deployments across 22+ industries, with average platform uptime of 99.99%.' },
    { num: '02', icon: <Shield size={20} color="#0B4C74" />, title: 'Security-First Architecture', text: 'SOC 2, ISO 27001, HIPAA, and GDPR alignment baked in from day one — not bolted on.' },
    { num: '03', icon: <GitBranch size={20} color="#0B4C74" />, title: 'Integration Depth', text: 'We connect to SAP, Oracle, Dynamics, NetSuite, Workday, and 40+ other enterprise systems.' },
    { num: '04', icon: <Database size={20} color="#0B4C74" />, title: 'Single Source of Truth', text: 'Unified data model that ends the "which number is right" problem across departments.' },
    { num: '05', icon: <Users size={20} color="#0B4C74" />, title: 'Change Management', text: 'Full training, stakeholder alignment, and go-live support — not just technical delivery.' },
    { num: '06', icon: <Globe size={20} color="#0B4C74" />, title: 'Global Delivery', text: 'Teams across US, UK, EU, and APAC time zones with 24/7 coverage options.' },
    { num: '07', icon: <Lock size={20} color="#0B4C74" />, title: 'Complete IP Ownership', text: 'You own the code, infrastructure definitions, and documentation on delivery.' },
    { num: '08', icon: <Award size={20} color="#0B4C74" />, title: 'Award-Winning Delivery', text: 'Multiple industry awards recognize ONAS for consistent delivery and service reliability.' },
  ];

  const techStack = {
    'ERP & CRM': ['SAP', 'Oracle', 'NetSuite', 'Microsoft Dynamics', 'Workday', 'Salesforce'],
    'Custom Platforms': ['React', 'Next.js', 'Node.js', 'Java', 'Spring Boot', '.NET'],
    'Data & Analytics': ['Snowflake', 'Databricks', 'Power BI', 'Tableau', 'Looker', 'dbt'],
    'Cloud Platforms': ['AWS', 'Azure', 'Google Cloud', 'Oracle Cloud', 'IBM Cloud'],
    'Security & IAM': ['Okta', 'Azure AD', 'Auth0', 'Vault', 'Snyk', 'CrowdStrike'],
    'Integration': ['MuleSoft', 'Boomi', 'Kafka', 'Apache Airflow', 'Zapier', 'Custom APIs'],
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
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      </Helmet>

      <Box sx={{ position: 'relative', marginTop: { xs: '72px', sm: '76px', md: '92px', lg: '100px' }, minHeight: { xs: 520, md: 580 }, padding: { xs: '4rem 1rem 3rem', md: '6rem 2.5rem 4rem' }, overflow: 'hidden', background: ink, isolation: 'isolate', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -2, overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 1.1, ease: 'easeInOut' }} style={{ position: 'absolute', inset: 0, backgroundImage: `url(${slides[currentSlide]})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
          </AnimatePresence>
          <Box sx={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, rgba(255,255,255,.10) 0%, rgba(0,0,0,.45) 100%)' }} />
        </Box>

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Eyebrow sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)' }}>Enterprise Solutions</Eyebrow>
          <Typography component="h1" sx={{ ...heroHeadingSx, color: '#ffffff', marginLeft: 'auto', marginRight: 'auto', textShadow: '0 2px 12px rgba(0,0,0,.95), 0 1px 3px rgba(0,0,0,1)' }}>
            Enterprise Solutions Engineered for Scale &amp; Security
          </Typography>
          <Body sx={{ color: '#ffffff !important', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto', marginBottom: '1.8rem', textShadow: '0 1px 8px rgba(0,0,0,.95)' }}>
            Enterprise-grade software that connects your departments, automates your workflows, and scales with your business — built on a security-first foundation.
          </Body>
          <LimeButton href="/resources/contact-us">Contact Us <ArrowForward sx={{ fontSize: 14 }} /></LimeButton>
        </Container>
      </Box>

      <Box sx={{ background: soft, borderBottom: `1px solid ${line}` }}>
        <Container maxWidth={false} disableGutters sx={containerSx}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' }, padding: { xs: '1.5rem 0', md: '2rem 0' } }}>
            {stats.map((s, i) => (
              <Box key={i} sx={{ textAlign: 'center', padding: '.5rem' }}>
                <Typography sx={{ fontWeight: 400, fontFamily: "Georgia, serif", fontSize: { xs: '1.1rem', md: '1.5rem' }, color: ink, lineHeight: 1 }}>{s.value}</Typography>
                <Typography sx={{ fontSize: '.5rem', color: muted, marginTop: '.35rem', textTransform: 'uppercase', letterSpacing: '.06em', fontFamily: "'Poppins', sans-serif" }}>{s.label}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>The Work</Eyebrow>
          <SectionHeading sx={{ maxWidth: 800, margin: '.6rem auto 1rem' }}>Comprehensive Enterprise Solutions for Complex Organizations</SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>Six kinds of work, all delivered the same way: senior architects, phased rollouts, and something you can validate from phase one.</Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2, alignItems: 'stretch' }}>
          {offerings.map((o, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={{ ...customCardSx, padding: 0, overflow: 'hidden' }}>
                <Box component="img" src={o.image} alt={o.title} sx={{ width: '100%', height: { xs: 150, md: 170 }, objectFit: 'cover', display: 'block' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: { xs: '1.2rem 1rem', md: '1.4rem 1.2rem' }, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.7rem', minWidth: 0 }}>
                      <Box sx={{ width: 28, height: 28, borderRadius: '50%', background: cream, border: `1px solid ${line}`, display: 'grid', placeItems: 'center', color: ink, fontWeight: 700, fontSize: '.55rem', flexShrink: 0 }}>{o.num}</Box>
                      <SubHeading>{o.title}</SubHeading>
                    </Box>
                    <Box sx={{ width: 36, height: 36, borderRadius: '50%', background: cream, border: `1px solid ${line}`, display: 'grid', placeItems: 'center', flexShrink: 0 }}>{o.icon}</Box>
                  </Box>
                  <Body sx={{ marginBottom: '1rem', flexGrow: 1 }}>{o.text}</Body>
                  <Box sx={{ background: cream, border: `1px solid ${line}`, borderRadius: '2px', padding: '.8rem .9rem', width: '100%' }}>
                    <Typography sx={{ fontWeight: 700, color: ink, fontSize: '.5rem', marginBottom: '.5rem', letterSpacing: '.06em', textTransform: 'uppercase', fontFamily: "'Poppins', sans-serif" }}>What You Get</Typography>
                    {o.bullets.map((b, bi) => (
                      <Box key={bi} sx={{ display: 'flex', alignItems: 'flex-start', gap: '.5rem', marginBottom: '.4rem' }}>
                        <Check sx={{ fontSize: 12, color: ink, marginTop: '.15rem', flexShrink: 0 }} />
                        <Typography sx={{ color: muted, fontSize: '.55rem', lineHeight: 1.5, fontFamily: "'Poppins', sans-serif" }}>{b}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
          <LimeButton href="/resources/contact-us">Share Your Requirement <ArrowForward sx={{ fontSize: 14 }} /></LimeButton>
        </Box>
      </Section>

      <Section bg={sectionSurface}>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>Architecture</Eyebrow>
          <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>How an Enterprise Solution Layers Together</SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>Executive visibility at the top. Infrastructure and security at the bottom. Business applications and integration sit in the middle and connect everything.</Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.05fr .95fr' }, gap: { xs: '1.5rem', md: '2rem' }, alignItems: 'center' }}>
          <Box>
            {layers.map((layer, i) => (
              <Box key={i}>
                <Box sx={{ background: layer.dark ? ink : soft, border: `1px solid ${line}`, borderRadius: '6px', padding: '1rem 1.2rem', marginBottom: '.5rem' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: '.5rem' }}>
                    <Box sx={{ background: layer.dark ? lime : ink, color: layer.dark ? ink : '#fff', borderRadius: '2px', padding: '.15rem .4rem', fontSize: '.5rem', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>{layer.num}</Box>
                    <Typography sx={{ fontWeight: 400, color: layer.dark ? '#fff' : ink, fontSize: '.72rem', fontFamily: "Georgia, serif" }}>{layer.title}</Typography>
                  </Box>
                  <Typography sx={{ color: layer.dark ? 'rgba(255,255,255,.85)' : muted, fontSize: '.55rem', marginBottom: '.6rem', fontFamily: "'Poppins', sans-serif" }}>{layer.subtitle}</Typography>
                  <Box sx={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
                    {layer.tags.map((tag, ti) => (
                      <Box key={ti} sx={{ background: layer.dark ? 'rgba(255,255,255,.15)' : cream, border: layer.dark ? 'none' : `1px solid ${line}`, color: layer.dark ? '#fff' : ink, fontSize: '.48rem', padding: '.2rem .55rem', borderRadius: '12px', fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}>{tag}</Box>
                    ))}
                  </Box>
                </Box>
                {i < layers.length - 1 && <Box sx={{ textAlign: 'center', color: muted, fontSize: '.9rem', marginBottom: '.5rem' }}>↓</Box>}
              </Box>
            ))}
          </Box>
          <Box sx={{ minHeight: { xs: 260, md: 440 }, height: '100%', overflow: 'hidden', border: `1px solid ${line}`, borderRadius: '6px' }}>
            <Box component="img" src={ES10} alt="Enterprise architecture" sx={{ width: '100%', height: '100%', minHeight: { xs: 260, md: 440 }, objectFit: 'cover', display: 'block' }} />
          </Box>
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>Our Process</Eyebrow>
          <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>How We Deliver Enterprise Programs</SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>Four stages, each with clear go-live gates. If discovery says the program should not proceed, you hear that in week three.</Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' }, gap: 2, alignItems: 'stretch' }}>
          {process.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={{ ...customCardSx, alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ width: 36, height: 36, borderRadius: '50%', background: ink, color: '#fff', display: 'grid', placeItems: 'center', marginBottom: '1rem', fontWeight: 700, fontSize: '.6rem', fontFamily: "'Poppins', sans-serif", flexShrink: 0 }}>{p.num}</Box>
                <SubHeading sx={{ marginBottom: '.5rem', textAlign: 'center' }}>{p.title}</SubHeading>
                <Body sx={{ textAlign: 'center', flexGrow: 1 }}>{p.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>

        <Box sx={{ marginTop: '2rem', background: soft, border: `1px solid ${line}`, borderRadius: '2px', padding: '1.4rem' }}>
          <Typography sx={{ fontWeight: 400, color: ink, fontSize: '.75rem', marginBottom: '1rem', fontFamily: "Georgia, serif" }}>From First Call to Operated Platform</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(5, minmax(0, 1fr))' }, gap: 1.5 }}>
            {timeline.map((t, i) => (
              <Box key={i}>
                <Box sx={{ border: `1px solid ${line}`, borderRadius: '2px', padding: '.8rem', background: cream }}>
                  <Typography sx={{ color: ink, fontWeight: 700, fontSize: '.52rem', marginBottom: '.3rem', fontFamily: "'Poppins', sans-serif" }}>{t.num}</Typography>
                  <Typography sx={{ fontWeight: 400, color: ink, fontSize: '.62rem', fontFamily: "Georgia, serif" }}>{t.title}</Typography>
                  <Typography sx={{ color: muted, fontSize: '.48rem', marginTop: '.2rem', fontFamily: "'Poppins', sans-serif" }}>{t.text}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      <Section bg={sectionSurface}>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>Why ONAS</Eyebrow>
          <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>Why Choose ONAS for Enterprise Solutions?</SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>Here is what differentiates ONAS in delivering enterprise-scale transformation for global organizations.</Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2, alignItems: 'stretch' }}>
          {whyChoose.map((w, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={{ ...customCardSx, background: soft }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', width: '100%' }}>
                  <Box sx={{ width: 28, height: 28, borderRadius: '50%', background: ink, color: '#fff', display: 'grid', placeItems: 'center', fontSize: '.55rem', fontWeight: 700, fontFamily: "'Poppins', sans-serif", flexShrink: 0 }}>{w.num}</Box>
                  <Box sx={{ width: 32, height: 32, borderRadius: '50%', background: cream, border: `1px solid ${line}`, display: 'grid', placeItems: 'center', flexShrink: 0 }}>{w.icon}</Box>
                </Box>
                <SubHeading sx={{ marginBottom: '.5rem' }}>{w.title}</SubHeading>
                <Body sx={{ flexGrow: 1 }}>{w.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>Technology Stack</Eyebrow>
          <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>Our Enterprise Technology Expertise</SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>The platforms and tools we work in daily — chosen by what fits your enterprise, not by what is trending.</Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2, alignItems: 'stretch' }}>
          {Object.entries(techStack).map(([category, items], i) => (
            <Box key={i} sx={{ display: 'flex' }}>
              <Box sx={{ ...customCardSx, background: soft }}>
                <SubHeading sx={{ marginBottom: '.7rem' }}>{category}</SubHeading>
                <Box sx={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.2rem' }}>
                  {items.map((tech, ti) => (
                    <Box key={ti} sx={{ background: cream, border: `1px solid ${line}`, color: ink, fontSize: '.48rem', padding: '.25rem .6rem', borderRadius: '12px', fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}>{tech}</Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Section>

      <Box sx={{ background: soft, borderTop: `1px solid ${line}` }}>
        <Container maxWidth={false} disableGutters sx={containerSx}>
          <Box sx={{ maxWidth: 800, mx: 'auto', padding: { xs: '3rem 1rem', md: '4rem 0' }, textAlign: 'center' }}>
            <Eyebrow>Get Started</Eyebrow>
            <SectionHeading sx={{ margin: '.6rem auto 1rem' }}>Ready to Unify Your Enterprise Architecture?</SectionHeading>
            <Body sx={{ marginBottom: '1.8rem', maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>At ONAS, we combine enterprise architecture, integration depth, and global delivery to build platforms that scale with your business. Let's talk about your transformation goals.</Body>
            <LimeButton href="/resources/contact-us">Book An Appointment <ArrowForward sx={{ fontSize: 14 }} /></LimeButton>
          </Box>
        </Container>
      </Box>
    </PageShell>
  );
};

export default EnterpriseSolutions;