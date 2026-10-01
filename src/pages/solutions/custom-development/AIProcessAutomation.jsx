import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ArrowForward, Check } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap, Brain, GitBranch, Shield, Database, Settings, Layers,
  Rocket, Cpu, Lock, Award, Globe, Users, Workflow, FileText,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import {
  PageShell, Section, Eyebrow, SectionHeading, SubHeading, Body, LimeButton,
  cardSx, containerSx, heroHeadingSx, ink, muted, line, soft, cream, lime,
} from '../../../theme/theme';

const slides = [
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80',
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80',
  'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=1600&q=80',
  'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1600&q=80',
  'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1600&q=80',
];

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

const AIProcessAutomation = () => {
  const location = useLocation();
  const baseUrl = 'https://onasglobal.com';
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const seoData = {
    title: 'AI-Based Process Automation Services | Intelligent Workflows | ONAS',
    description: 'AI-powered process automation for enterprises — intelligent workflows, document AI, RPA, and decision automation that reduce manual work by 60-80%.',
    keywords: 'AI process automation, RPA, intelligent automation, AI workflow, document AI, business process automation, ONAS',
    canonicalUrl: `${baseUrl}${location.pathname}`,
    ogImage: slides[0],
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI-Based Process Automation',
    description: 'AI-powered business process automation services',
    provider: { '@type': 'Organization', name: 'ONAS' },
    serviceType: ['AI Automation', 'RPA', 'Intelligent Workflows'],
    areaServed: 'Global',
  };

  const stats = [
    { value: '60–80%', label: 'Manual Work Reduced' },
    { value: '10x', label: 'Faster Processing' },
    { value: '99.5%', label: 'Extraction Accuracy' },
    { value: '90%', label: 'Cost Reduction' },
    { value: '<30d', label: 'Time to First Bot' },
    { value: '24/7', label: 'Bot Operation' },
  ];

  const layers = [
    { num: '01', title: 'Business Users', subtitle: 'Teams driving the process', tags: ['Finance', 'Operations', 'HR', 'Support', 'Legal'], dark: true },
    { num: '02', title: 'Automation Layer', subtitle: 'Where bots and AI agents do the work', tags: ['RPA', 'AI agents', 'Workflow engine', 'Chatbots', 'Decision engine'] },
    { num: '03', title: 'Intelligence Layer', subtitle: 'What makes automation smart', tags: ['LLMs', 'OCR', 'NLP', 'Classification', 'Anomaly detection'] },
    { num: '04', title: 'Systems & Data', subtitle: 'Where the work actually lands', tags: ['Your ERP', 'CRM', 'Email', 'Shared drives', 'APIs'] },
  ];

  const problems = [
    { num: '01', title: 'Repetitive tasks eating skilled time', text: 'Your best engineers and analysts spend 40% of their week on data entry, approvals, and manual routing that should never touch a human.' },
    { num: '02', title: 'Document-heavy workflows bottleneck', text: 'Invoices, contracts, forms, and emails pile up in queues. Processing takes days when it should take minutes — and errors slip through.' },
    { num: '03', title: 'Automation that breaks on exceptions', text: 'Old RPA bots fail the moment a document looks different. They create more work than they save because they cannot handle unstructured input.' },
    { num: '04', title: 'No visibility into process performance', text: 'You know something is slow, but not where the bottleneck is. Manual processes have no metrics, so improvement is guesswork.' },
    { num: '05', title: 'Compliance and audit pressure', text: 'Regulated processes need audit trails, approval chains, and human oversight. Manual workflows create gaps that auditors flag.' },
    { num: '06', title: 'AI pilots that never reach production', text: 'Teams spin up a POC, show it works, then hit the wall: how do you run it reliably, govern it, and prove ROI? The pilot becomes shelfware.' },
  ];

  const offerings = [
    { num: '01', icon: <FileText size={20} color="#0B4C74" />, title: 'Intelligent Document Processing', text: 'Extract data from invoices, contracts, forms, and emails with OCR + AI-powered classification that handles unstructured input.', image: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=85', bullets: ['Invoices, contracts, forms, emails', 'OCR + LLM-powered extraction', '99.5% accuracy on structured fields'] },
    { num: '02', icon: <Workflow size={20} color="#0B4C74" />, title: 'Workflow Automation', text: 'Automate approvals, routing, and notifications with AI-driven decision trees and human-in-the-loop where needed.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85', bullets: ['Approval and routing automation', 'AI decision trees with confidence scoring', 'Human-in-the-loop for exceptions'] },
    { num: '03', icon: <Layers size={20} color="#0B4C74" />, title: 'RPA + AI Hybrid Bots', text: 'Combine RPA with AI to handle unstructured data, edge cases, and scale to thousands of tasks per day.', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=85', bullets: ['RPA + AI combined for resilience', 'Handles unstructured and edge cases', 'Scales to thousands of tasks daily'] },
    { num: '04', icon: <Brain size={20} color="#0B4C74" />, title: 'AI Chatbots & Agents', text: 'Customer-facing and internal AI agents that resolve tickets, answer queries, and take actions in your systems.', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=85', bullets: ['RAG-powered internal agents', 'Customer support automation', 'Actions in ERP, CRM, ticketing'] },
    { num: '05', icon: <Shield size={20} color="#0B4C74" />, title: 'Governance & Audit', text: 'Every automation ships with audit trails, approval chains, and compliance controls that satisfy regulators.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=85', bullets: ['Full audit trails', 'Approval chain governance', 'Compliance-ready logging'] },
    { num: '06', icon: <Settings size={20} color="#0B4C74" />, title: 'Continuous Improvement', text: 'Bots learn from feedback loops. We monitor accuracy, retrain on edge cases, and evolve automations over time.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85', bullets: ['Feedback loops and retraining', 'Accuracy monitoring', 'Edge case detection and fixes'] },
  ];

  const process = [
    { num: '01', title: 'Process Discovery', text: 'We map your current workflows, measure cycle times, and identify the highest-ROI automation candidates.' },
    { num: '02', title: 'Design & Prototype', text: 'We build a working prototype on a subset of real data — you see results in weeks, not quarters.' },
    { num: '03', title: 'Build & Deploy', text: 'Production bots are built with governance, exception handling, and monitoring from day one.' },
    { num: '04', title: 'Operate & Improve', text: 'Ongoing monitoring, retraining, and expansion to adjacent processes as the automation matures.' },
  ];

  const timeline = [
    { num: '01', title: 'Discovery', text: 'Week 1–2' },
    { num: '02', title: 'Prototype', text: 'Week 3–4' },
    { num: '03', title: 'Build', text: 'Week 5–10' },
    { num: '04', title: 'Deploy', text: 'Week 11–12' },
    { num: '05', title: 'Improve', text: 'Ongoing' },
  ];

  const whyChoose = [
    { num: '01', icon: <Brain size={20} color="#0B4C74" />, title: 'AI + RPA Combined', text: 'We combine the reliability of RPA with the intelligence of modern AI — handling structured and unstructured work.' },
    { num: '02', icon: <Zap size={20} color="#0B4C74" />, title: 'ROI-First Approach', text: 'We prioritize automations that pay back in under 90 days. Discovery identifies winners and lets you skip the rest.' },
    { num: '03', icon: <Shield size={20} color="#0B4C74" />, title: 'Governance Built In', text: 'Audit trails, approval chains, and human-in-the-loop controls are designed in, not bolted on.' },
    { num: '04', icon: <Database size={20} color="#0B4C74" />, title: 'Data & Analytics', text: 'Every automation generates process analytics you can act on. Continuous improvement becomes measurable.' },
    { num: '05', icon: <Cpu size={20} color="#0B4C74" />, title: 'Production-Grade AI', text: 'We move beyond POCs. Our bots run in production with monitoring, SLAs, and escalation paths.' },
    { num: '06', icon: <Globe size={20} color="#0B4C74" />, title: 'Global Delivery', text: 'Teams across US, UK, EU, and APAC time zones — with 24/7 bot operation.' },
    { num: '07', icon: <Lock size={20} color="#0B4C74" />, title: 'Data Privacy by Default', text: 'PII redaction, tenant isolation, and residency controls built for regulated industries.' },
    { num: '08', icon: <Award size={20} color="#0B4C74" />, title: 'Proven Automation Track Record', text: 'Enterprise deployments across finance, healthcare, legal, and operations teams.' },
  ];

  const techStack = {
    'RPA Platforms': ['UiPath', 'Automation Anywhere', 'Power Automate', 'Blue Prism', 'WorkFusion'],
    'AI & LLMs': ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'Llama', 'Mistral'],
    'Document AI': ['AWS Textract', 'Azure Document Intelligence', 'Google Document AI', 'Abbyy', 'Klippa'],
    'Workflow & Orchestration': ['Camunda', 'Temporal', 'Airflow', 'n8n', 'Zapier'],
    'Integration': ['MuleSoft', 'Boomi', 'Zapier', 'Custom APIs', 'Kafka'],
    'Monitoring & Governance': ['Datadog', 'Grafana', 'LangSmith', 'Custom dashboards', 'Audit logs'],
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

      {/* ── HERO (centered) ── */}
      <Box sx={{ position: 'relative', minHeight: { xs: 520, md: 580 }, padding: { xs: '4rem 1rem 3rem', md: '6rem 2.5rem 4rem' }, overflow: 'hidden', background: ink, isolation: 'isolate', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -2, overflow: 'hidden', '&::after': { content: '""', position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(11,76,116,.45) 0%, rgba(11,76,116,.28) 55%, rgba(11,76,116,.40) 100%)', zIndex: 1 } }}>
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 1.1, ease: 'easeInOut' }} style={{ position: 'absolute', inset: 0, backgroundImage: `url(${slides[currentSlide]})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
          </AnimatePresence>
        </Box>

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Eyebrow sx={{ color: lime, textShadow: '0 1px 6px rgba(0,0,0,.6)' }}>AI Process Automation</Eyebrow>
          <Typography component="h1" sx={{ ...heroHeadingSx, marginLeft: 'auto', marginRight: 'auto', textShadow: '0 2px 10px rgba(0,0,0,.65)' }}>
            AI-Based Process Automation That Eliminates Manual Work
          </Typography>
          <Body sx={{ color: 'rgba(255,255,255,.95) !important', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto', marginBottom: '1.8rem', textShadow: '0 1px 6px rgba(0,0,0,.65)' }}>
            From document processing to intelligent workflows, we help enterprises automate 60–80% of repetitive tasks — with AI that learns and improves.
          </Body>
          <LimeButton href="/resources/contact-us">Contact Us <ArrowForward sx={{ fontSize: 14 }} /></LimeButton>
        </Container>
      </Box>

      {/* ── LAYERS DIAGRAM (section 2) ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>Architecture</Eyebrow>
          <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>
            How AI-Powered Automation Layers Together
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
            Business users at the top. Your existing systems at the bottom. Automation and intelligence layers sit in the middle and connect everything.
          </Body>
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
            <Box component="img" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1000&q=85" alt="AI automation architecture" sx={{ width: '100%', height: '100%', minHeight: { xs: 260, md: 440 }, objectFit: 'cover', display: 'block' }} />
          </Box>
        </Box>
      </Section>

      {/* ── THE PROBLEM (section 3) ── */}
      <Section bg={sectionSurface}>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>The Problem</Eyebrow>
          <SectionHeading sx={{ maxWidth: 800, margin: '.6rem auto 1rem' }}>
            Why Manual Work Is Costing You More Than You Think
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
            At ONAS, we see the same bottlenecks before every automation program.
          </Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2, alignItems: 'stretch' }}>
          {problems.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={{ ...customCardSx, background: soft }}>
                <Typography sx={{ color: ink, fontWeight: 700, fontSize: '.55rem', fontFamily: "'Poppins', sans-serif", marginBottom: '.6rem', letterSpacing: '.06em' }}>{p.num}</Typography>
                <SubHeading sx={{ marginBottom: '.5rem' }}>{p.title}</SubHeading>
                <Body sx={{ flexGrow: 1 }}>{p.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
          <Body sx={{ fontSize: '.62rem', fontStyle: 'italic', marginBottom: '1rem' }}>
            If three or more ring true, you have substantial automation ROI waiting to be unlocked.
          </Body>
          <LimeButton href="/resources/contact-us">Book A Free Automation Audit <ArrowForward sx={{ fontSize: 14 }} /></LimeButton>
        </Box>
      </Section>

      {/* ── OFFERINGS (section 4) ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>The Work</Eyebrow>
          <SectionHeading sx={{ maxWidth: 800, margin: '.6rem auto 1rem' }}>
            Comprehensive AI Automation Services
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
            From documents to workflows to AI agents — everything that turns manual effort into automated outcomes.
          </Body>
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

      {/* ── STATS (section 5) ── */}
      <Box sx={{ background: soft, borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}` }}>
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

      {/* ── HOW WE WORK (section 6) ── */}
      <Section id="how-we-work">
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>Our Process</Eyebrow>
          <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>
            How We Deliver AI Automation Programs
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
            Four stages, each designed to prove ROI early. If discovery says an automation should not proceed, you hear that in week two.
          </Body>
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

        <Box sx={{ marginTop: '2rem', background: sectionSurface, border: `1px solid ${line}`, borderRadius: '2px', padding: '1.4rem' }}>
          <Typography sx={{ fontWeight: 400, color: ink, fontSize: '.75rem', marginBottom: '1rem', fontFamily: "Georgia, serif" }}>
            From First Call to Live Automation
          </Typography>
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

      {/* ── WHY CHOOSE ONAS (section 7) ── */}
      <Section bg={sectionSurface}>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>Why ONAS</Eyebrow>
          <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>
            Why Choose ONAS for AI Automation?
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
            Here is what differentiates ONAS in delivering production-grade AI automation for enterprises.
          </Body>
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

      {/* ── TECH STACK (section 8) ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>Technology Stack</Eyebrow>
          <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>
            Our AI Automation Technology Expertise
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
            The platforms and tools we work in daily — chosen by what fits your process, not by what is trending.
          </Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2, alignItems: 'stretch' }}>
          {Object.entries(techStack).map(([category, items], i) => (
            <Box key={i} sx={{ display: 'flex' }}>
              <Box sx={customCardSx}>
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

      {/* ── FINAL CTA ── */}
      <Box sx={{ background: sectionSurface, borderTop: `1px solid ${line}` }}>
        <Container maxWidth={false} disableGutters sx={containerSx}>
          <Box sx={{ maxWidth: 800, mx: 'auto', padding: { xs: '3rem 1rem', md: '4rem 0' }, textAlign: 'center' }}>
            <Eyebrow>Get Started</Eyebrow>
            <SectionHeading sx={{ margin: '.6rem auto 1rem' }}>
              Ready to Automate the Work That Should Not Need Humans?
            </SectionHeading>
            <Body sx={{ marginBottom: '1.8rem', maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
              At ONAS, we combine RPA, AI, and process expertise to deliver automation that runs in production. Let's talk about which processes to automate first.
            </Body>
            <LimeButton href="/resources/contact-us">Book An Appointment <ArrowForward sx={{ fontSize: 14 }} /></LimeButton>
          </Box>
        </Container>
      </Box>

    </PageShell>
  );
};

export default AIProcessAutomation;