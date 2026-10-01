import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { ArrowForward, Check } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code, Layers, GitBranch, Shield, Rocket, Cpu, Lock, Award, Globe,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import {
  PageShell, Section, Eyebrow, SectionHeading, SubHeading, Body, LimeButton,
  cardSx, containerSx, heroHeadingSx, ink, muted, line, soft, cream, lime,
} from '../../../theme/theme';

const slides = [
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80',
  'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1600&q=80',
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1600&q=80',
  'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1600&q=80',
  'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=1600&q=80',
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
const imageCardSx = { ...customCardSx, padding: 0, overflow: 'hidden' };

const CustomSoftwareDevelopment = () => {
  const location = useLocation();
  const baseUrl = 'https://onasglobal.com';
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const seoData = {
    title: 'Custom Software Development Services | ONAS',
    description: 'At ONAS, we build custom software that fits the business you actually run. Enterprise-grade, scalable, secure.',
    keywords: 'custom software development, bespoke software, enterprise software, SaaS development, ONAS',
    canonicalUrl: `${baseUrl}${location.pathname}`,
    ogImage: slides[0],
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Software Development Services',
    description: 'At ONAS, we deliver enterprise-grade custom software development services',
    provider: { '@type': 'Organization', name: 'ONAS' },
    serviceType: ['Custom Software Development', 'Enterprise Software', 'SaaS Development'],
    areaServed: 'Global',
  };

  const stats = [
    { value: '1,700+', label: 'Projects Delivered' },
    { value: '400+', label: 'Clients Served' },
    { value: '34', label: 'Countries Served' },
    { value: '4.8/5', label: 'Avg Client Rating' },
    { value: '15+', label: 'Years of Experience' },
    { value: 'ISO', label: '27001:2013' },
  ];

  const problems = [
    { num: '01', title: 'Spreadsheets holding the system together', text: 'The real process lives in three spreadsheets and one person\'s head because the software could not model it. Every export and re-import is a place errors get in.' },
    { num: '02', title: 'You are paying for features you do not use', text: 'Enterprise licenses priced per seat where your team touches four screens out of forty. The cost scales with headcount even though the value stopped scaling years ago.' },
    { num: '03', title: 'Integrations that never quite work', text: 'Two systems that should talk, joined by a nightly CSV and a person who checks it. Every new tool makes the web denser and the failure modes harder to trace.' },
    { num: '04', title: 'Change requests measured in quarters', text: 'A small workflow change goes to the vendor roadmap and comes back in eighteen months, or never. Meanwhile your competitor shipped theirs in a fortnight.' },
    { num: '05', title: 'Your data is somebody else\'s asset', text: 'Export limits, API rate caps, and pricing that moves when your usage does. The switching cost was the product all along, and it compounds every year.' },
    { num: '06', title: 'Reporting nobody trusts', text: 'Three systems, three versions of the same number, and a monthly meeting spent arguing about which is right rather than what to do about it.' },
  ];

  const offerings = [
    { num: '01', icon: <Code size={20} color="#0B4C74" />, title: 'Bespoke Business Applications', text: 'The system that runs your operations: quoting, scheduling, dispatch, case management — built around your process.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=85', bullets: ['Requirements traceable to what you asked for', 'Role-based access from day one', 'An admin layer your team controls'] },
    { num: '02', icon: <Layers size={20} color="#0B4C74" />, title: 'Legacy Modernization', text: 'Moving a system that works but cannot be changed onto something maintainable. We do this incrementally.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=85', bullets: ['Strangler-pattern migration plan', 'Data migration with reconciliation', 'No downtime cutover'] },
    { num: '03', icon: <GitBranch size={20} color="#0B4C74" />, title: 'Integration & Middleware', text: 'Making your systems talk properly, with retries, idempotent writes and an audit trail.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=85', bullets: ['Idempotent writes, so retries never duplicate', 'Rate limiting that respects your API caps', 'Failure alerts before your customer notices'] },
    { num: '04', icon: <Rocket size={20} color="#0B4C74" />, title: 'SaaS & Multi-Tenant Products', text: 'If you are building software to sell rather than use, the architecture decisions are different: tenancy, metering, billing, onboarding.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85', bullets: ['Tenant isolation model', 'Usage metering and billing hooks', 'Self-serve onboarding path'] },
    { num: '05', icon: <Cpu size={20} color="#0B4C74" />, title: 'AI Features Inside Your Product', text: 'Search that understands intent, drafting that saves your users typing, classification that removes a manual step.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=85', bullets: ['Model abstraction so you are not locked in', 'Cost per request instrumented', 'Fallback when the model is unavailable'] },
    { num: '06', icon: <Shield size={20} color="#0B4C74" />, title: 'Compliance-Driven Builds', text: 'Systems where an auditor will eventually ask how a decision was made. HIPAA, SOC 2, PCI DSS, UK GDPR shape the architecture.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=85', bullets: ['Audit logging designed in, not added', 'Data residency in your chosen region', 'Evidence pack for your auditors'] },
  ];

  const layers = [
    { num: '01', title: 'Your Users', subtitle: 'Everyone who touches the system', tags: ['Web', 'Mobile', 'Admin', 'Partner portal', 'API consumers'], dark: true },
    { num: '02', title: 'Application Layer', subtitle: 'The screens and access model your team actually uses', tags: ['React', 'Next.js', 'Design system', 'Role-based access', 'Audit logging'] },
    { num: '03', title: 'Business Logic', subtitle: 'The rules that make the software yours', tags: ['Pricing rules', 'Workflow engine', 'Scheduling', 'AI services', 'Reporting'] },
    { num: '04', title: 'Integration & Data', subtitle: 'What you already run, connected rather than replaced', tags: ['Your ERP', 'Your CRM', 'Legacy DB', 'Third-party APIs', 'Warehouse'] },
  ];

  const process = [
    { num: '01', title: 'Discover & Align', text: 'We begin by evaluating your workflows, existing systems and business objectives to identify the gaps that actually cost you time.' },
    { num: '02', title: 'Design & Architect', text: 'We design secure, scalable architecture aligned to your operational and compliance requirements.' },
    { num: '03', title: 'Build & Integrate', text: 'Delivery runs in two-week sprints with a working demo at the end of each, integrated with your existing applications.' },
    { num: '04', title: 'Optimize & Scale', text: 'After launch we monitor performance, reliability, cost and security posture, then refine to improve efficiency.' },
  ];

  const timeline = [
    { num: '01', title: 'Discovery', text: 'Week 1 — Free' },
    { num: '02', title: 'Design', text: 'Weeks 2–4' },
    { num: '03', title: 'Build Sprints', text: 'Weeks 5–14' },
    { num: '04', title: 'Harden & Launch', text: 'Weeks 15–16' },
    { num: '05', title: 'Support', text: 'Ongoing' },
  ];

  const whyChoose = [
    { num: '01', icon: <Layers size={20} color="#0B4C74" />, title: 'Requirement-Led Engineering', text: 'Every build starts with a free discovery week that maps what your business actually does.' },
    { num: '02', icon: <Cpu size={20} color="#0B4C74" />, title: 'AI-Assisted Delivery', text: 'Our engineers use AI tooling for scaffolding, test generation and migrations, removing 20 to 30 percent of mechanical effort.' },
    { num: '03', icon: <GitBranch size={20} color="#0B4C74" />, title: 'Integration Depth', text: 'Most vendors can build an application. Fewer can connect it to a twelve-year-old ERP without breaking the month-end close.' },
    { num: '04', icon: <Lock size={20} color="#0B4C74" />, title: 'Complete IP Ownership', text: 'Source code, infrastructure definitions and design files are assigned to you in writing on delivery.' },
    { num: '05', icon: <Award size={20} color="#0B4C74" />, title: 'Proven Track Record', text: 'Backed by 1,700+ successful technology engagements and a 4.8 out of 5 client satisfaction rating.' },
    { num: '06', icon: <Globe size={20} color="#0B4C74" />, title: 'Global Delivery', text: 'Organizations across 34+ countries and 22+ industries rely on ONAS across US, UK, EU, and APAC time zones.' },
    { num: '07', icon: <Shield size={20} color="#0B4C74" />, title: 'Risk-Controlled Delivery', text: 'Defined roadmaps, workflow assessments and phased delivery reduce downtime and keep production stable.' },
    { num: '08', icon: <Award size={20} color="#0B4C74" />, title: 'Recognized Excellence', text: 'Multiple industry awards recognize ONAS for consistent delivery standards and service reliability.' },
  ];

  const techStack = {
    'Programming Languages': ['Java', 'C#', '.NET', 'Python', 'Node.js', 'Go', 'PHP'],
    'Frameworks': ['React', 'Next.js', 'Angular', 'Vue', 'Spring Boot', 'Django'],
    'Mobile': ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    'Cloud Platforms': ['AWS', 'Azure', 'Google Cloud', 'Oracle Cloud'],
    'Databases': ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Oracle DB'],
    'AI & Automation': ['OpenAI', 'Anthropic', 'LangChain', 'TensorFlow', 'PyTorch'],
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

      {/* ── 1. HERO ── */}
      <Box sx={{ position: 'relative', minHeight: { xs: 520, md: 580 }, padding: { xs: '4rem 1rem 3rem', md: '6rem 2.5rem 4rem' }, overflow: 'hidden', background: ink, isolation: 'isolate', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -2, overflow: 'hidden', '&::after': { content: '""', position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(11,76,116,.55) 0%, rgba(11,76,116,.35) 55%, rgba(11,76,116,.45) 100%)', zIndex: 1 } }}>
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 1.1, ease: 'easeInOut' }} style={{ position: 'absolute', inset: 0, backgroundImage: `url(${slides[currentSlide]})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
          </AnimatePresence>
        </Box>

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.15fr) minmax(340px, .85fr)' }, gap: { xs: 3, md: 4 }, alignItems: 'center' }}>
            <Box sx={{ minWidth: 0 }}>
              <Eyebrow sx={{ color: lime, textShadow: '0 1px 6px rgba(0,0,0,.6)' }}>Custom Software Development</Eyebrow>
              <Typography component="h1" sx={{ ...heroHeadingSx, textShadow: '0 2px 10px rgba(0,0,0,.65)' }}>
                Custom Software Development That Fits the Business You Actually Run
              </Typography>
              <Body sx={{ color: 'rgba(255,255,255,.92) !important', maxWidth: 620, marginBottom: '1rem', textShadow: '0 1px 6px rgba(0,0,0,.6)' }}>
                Off-the-shelf software makes you change how you work to match how it was built. That trade is worth it for email and payroll. It stops being worth it the moment the software touches the thing you are actually good at.
              </Body>
              <Body sx={{ color: 'rgba(255,255,255,.85) !important', maxWidth: 620, marginBottom: '1.8rem', textShadow: '0 1px 6px rgba(0,0,0,.6)' }}>
                At ONAS, we build the systems that carry your competitive advantage: the pricing engine, the scheduling logic, the workflow nobody else in your industry runs.
              </Body>
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', marginBottom: '1.2rem' }}>
                <LimeButton href="/resources/contact-us">Book A Free Discovery Week <ArrowForward sx={{ fontSize: 14 }} /></LimeButton>
               
              </Box>
              
            </Box>

            <Box sx={{ minWidth: 0 }}>
              <Box sx={{ background: 'rgba(255,255,255,.98)', borderRadius: '3px', padding: '1.2rem', boxShadow: '0 12px 40px rgba(0,0,0,.25)' }}>
                <Typography sx={{ fontWeight: 400, color: ink, fontSize: '.72rem', marginBottom: '.8rem', textAlign: 'center', fontFamily: "Georgia, serif" }}>
                  Custom Software Build
                </Typography>

                {[
                  { label: 'Business Requirements', sub: 'Rules only you run' },
                  { label: 'Existing Systems', sub: 'ERP, CRM, legacy DB' },
                  { label: 'User Workflows', sub: 'How work really happens' },
                ].map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, padding: '.5rem .6rem', border: `1px solid ${line}`, borderRadius: '2px', marginBottom: '.4rem', background: cream }}>
                    <Box sx={{ width: 22, height: 22, borderRadius: '50%', background: ink, color: '#fff', display: 'grid', placeItems: 'center', fontSize: '.5rem', fontWeight: 700, flexShrink: 0 }}>{i + 1}</Box>
                    <Box>
                      <Typography sx={{ fontSize: '.55rem', fontWeight: 700, color: ink, lineHeight: 1.2 }}>{item.label}</Typography>
                      <Typography sx={{ fontSize: '.46rem', color: muted, lineHeight: 1.2 }}>{item.sub}</Typography>
                    </Box>
                  </Box>
                ))}

               

                {[
                  { label: 'Web Application', sub: 'Built for your process' },
                  { label: 'Connected APIs', sub: 'Your stack, linked' },
                  { label: 'Reporting', sub: 'Numbers you can trust' },
                ].map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, padding: '.5rem .6rem', border: `1px solid ${line}`, borderRadius: '2px', marginBottom: '.4rem', background: cream }}>
                    <Box sx={{ width: 22, height: 22, borderRadius: '50%', background: lime, color: ink, display: 'grid', placeItems: 'center', fontSize: '.5rem', fontWeight: 700, flexShrink: 0 }}>✓</Box>
                    <Box>
                      <Typography sx={{ fontSize: '.55rem', fontWeight: 700, color: ink, lineHeight: 1.2 }}>{item.label}</Typography>
                      <Typography sx={{ fontSize: '.46rem', color: muted, lineHeight: 1.2 }}>{item.sub}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

    

      {/* ── 3. THE PROBLEM ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>The Problem</Eyebrow>
          <SectionHeading sx={{ maxWidth: 800, margin: '.6rem auto 1rem' }}>
            From Rigid Off-the-Shelf Tools to Software That Fits Your Business
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
            At ONAS, we see the same constraints before every build.
          </Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2, alignItems: 'stretch' }}>
          {problems.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} style={{ display: 'flex', width: '100%' }}>
                <Box sx={customCardSx}>
                  <Typography sx={{ color: ink, fontWeight: 700, fontSize: '.55rem', fontFamily: "'Poppins', sans-serif", marginBottom: '.6rem', letterSpacing: '.06em' }}>{p.num}</Typography>
                  <SubHeading sx={{ marginBottom: '.5rem' }}>{p.title}</SubHeading>
                  <Body sx={{ flexGrow: 1 }}>{p.text}</Body>
                </Box>
            </motion.div>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
          <Body sx={{ fontSize: '.62rem', fontStyle: 'italic', marginBottom: '1rem' }}>
            If three or more of these are true, a custom build usually pays for itself inside twelve months.
          </Body>
          <LimeButton href="/resources/contact-us">Book A Free Discovery Week <ArrowForward sx={{ fontSize: 14 }} /></LimeButton>
        </Box>
      </Section>

      {/* ── 4. OFFERINGS ── */}
      <Box sx={{ background: sectionSurface }}>
        <Container maxWidth={false} disableGutters sx={{ ...containerSx, paddingTop: { xs: '2.5rem', md: '3.5rem' }, paddingBottom: { xs: '2.5rem', md: '3.5rem' } }}>
          <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Eyebrow>The Work</Eyebrow>
            <SectionHeading sx={{ maxWidth: 800, margin: '.6rem auto 1rem' }}>
              Comprehensive Custom Software Development Services for Scalable Growth
            </SectionHeading>
            <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
              Six kinds of work, all delivered the same way: senior engineers, two-week sprints, and something you can click from sprint one.
            </Body>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2, alignItems: 'stretch' }}>
            {offerings.map((o, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} style={{ display: 'flex', width: '100%' }}>
                  <Box sx={imageCardSx}>
                    <Box component="img" src={o.image} alt={o.title} sx={{ width: '100%', height: { xs: 150, md: 170 }, objectFit: 'cover', display: 'block' }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', padding: { xs: '1.2rem 1rem', md: '1.4rem 1.2rem' }, flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', width: '100%' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
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
        </Container>
      </Box>

      {/* ── 5. LAYERS DIAGRAM ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>Architecture</Eyebrow>
          <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>
            How a Custom Build Layers Over What You Already Run
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
            Users at the top. Your existing systems stay at the bottom. The custom build sits in the middle and connects both.
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
                    <Box key={ti} sx={{ background: layer.dark ? 'rgba(255,255,255,.15)' : cream, border: layer.dark ? 'none' : `1px solid ${line}`, color: layer.dark ? '#fff' : ink, fontSize: '.48rem', padding: '.2rem .55rem', borderRadius: '12px', fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}>
                      {tag}
                    </Box>
                  ))}
                </Box>
              </Box>
              {i < layers.length - 1 && (
                <Box sx={{ textAlign: 'center', color: muted, fontSize: '.9rem', marginBottom: '.5rem' }}>↓</Box>
              )}
            </Box>
          ))}
          </Box>
          <Box sx={{ minHeight: { xs: 260, md: 440 }, height: '100%', overflow: 'hidden', border: `1px solid ${line}`, borderRadius: '6px' }}>
            <Box component="img" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=85" alt="Software development team collaborating on a custom application" sx={{ width: '100%', height: '100%', minHeight: { xs: 260, md: 440 }, objectFit: 'cover', display: 'block' }} />
          </Box>
        </Box>
      </Section>

      {/* ── 6. HOW WE WORK ── */}
      <Section id="how-we-work">
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>Our Process</Eyebrow>
          <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>
            How We Work
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
            Four stages, with the cheapest first. If discovery says the project should not go ahead, you hear it in week one.
          </Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' }, gap: 2, alignItems: 'stretch' }}>
          {process.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} style={{ display: 'flex', width: '100%' }}>
                <Box sx={{ ...customCardSx, alignItems: 'center', textAlign: 'center' }}>
                  <Box sx={{ width: 36, height: 36, borderRadius: '50%', background: ink, color: '#fff', display: 'grid', placeItems: 'center', marginBottom: '1rem', fontWeight: 700, fontSize: '.6rem', fontFamily: "'Poppins', sans-serif", flexShrink: 0 }}>
                    {p.num}
                  </Box>
                  <SubHeading sx={{ marginBottom: '.5rem', textAlign: 'center' }}>{p.title}</SubHeading>
                  <Body sx={{ textAlign: 'center', flexGrow: 1 }}>{p.text}</Body>
                </Box>
            </motion.div>
          ))}
        </Box>

        <Box sx={{ marginTop: '2rem', background: sectionSurface, border: `1px solid ${line}`, borderRadius: '2px', padding: '1.4rem' }}>
          <Typography sx={{ fontWeight: 400, color: ink, fontSize: '.75rem', marginBottom: '1rem', fontFamily: "Georgia, serif" }}>
            From First Call to Production
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

      {/* ── 7. WHY CHOOSE ONAS ── */}
      <Box sx={{ background: sectionSurface }}>
        <Container maxWidth={false} disableGutters sx={{ ...containerSx, paddingTop: { xs: '2.5rem', md: '3.5rem' }, paddingBottom: { xs: '2.5rem', md: '3.5rem' } }}>
          <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Eyebrow>Why ONAS</Eyebrow>
            <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>
              Why Choose ONAS?
            </SectionHeading>
            <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
              Here is what differentiates ONAS in delivering custom software development for US, UK, EU and APAC organizations.
            </Body>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2, alignItems: 'stretch' }}>
            {whyChoose.map((w, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} style={{ display: 'flex', width: '100%' }}>
                  <Box sx={customCardSx}>
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
        </Container>
      </Box>

      {/* ── 8. TECH STACK ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>Technology Stack</Eyebrow>
          <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>
            Our Technology Expertise
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
            The full stack we work in, chosen by what fits your business — not by what is easiest for us.
          </Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2, alignItems: 'stretch' }}>
          {Object.entries(techStack).map(([category, items], i) => (
            <Box key={i} sx={{ display: 'flex' }}>
              <Box sx={customCardSx}>
                <SubHeading sx={{ marginBottom: '.7rem' }}>{category}</SubHeading>
                <Box sx={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.2rem' }}>
                  {items.map((tech, ti) => (
                    <Box key={ti} sx={{ background: cream, border: `1px solid ${line}`, color: ink, fontSize: '.48rem', padding: '.25rem .6rem', borderRadius: '12px', fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}>
                      {tech}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Section>

      {/* ── 9. FINAL CTA ── */}
      <Box sx={{ background: sectionSurface, borderTop: `1px solid ${line}` }}>
        <Container maxWidth={false} disableGutters sx={containerSx}>
          <Box sx={{ maxWidth: 800, mx: 'auto', padding: { xs: '3rem 1rem', md: '4rem 0' }, textAlign: 'center' }}>
            <Eyebrow>Get Started</Eyebrow>
            <SectionHeading sx={{ margin: '.6rem auto 1rem' }}>
              Your Next Step Toward Success Starts Here
            </SectionHeading>
            <Body sx={{ marginBottom: '1.8rem', maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
              At ONAS, we combine engineering depth, product thinking, and global delivery to build software that drives real business outcomes. Let's talk about what you are trying to build.
            </Body>
            <LimeButton href="/resources/contact-us">Book An Appointment <ArrowForward sx={{ fontSize: 14 }} /></LimeButton>
          </Box>
        </Container>
      </Box>

    </PageShell>
  );
};

export default CustomSoftwareDevelopment;