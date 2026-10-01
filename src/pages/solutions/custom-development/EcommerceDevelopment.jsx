import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { ArrowForward, Check } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingCart, CreditCard, Zap, GitBranch, Shield, Database, Settings,
  Rocket, Cpu, Lock, Award, Globe, Layers, Smartphone, TrendingUp,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import {
  PageShell, Section, Eyebrow, SectionHeading, SubHeading, Body, LimeButton,
  cardSx, containerSx, heroHeadingSx, ink, muted, line, soft, cream, lime,
} from '../../../theme/theme';

const slides = [
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80',
  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80',
  'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1600&q=80',
  'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=1600&q=80',
  'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1600&q=80',
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

const EcommerceDevelopment = () => {
  const location = useLocation();
  const baseUrl = 'https://onasglobal.com';
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const seoData = {
    title: 'Ecommerce Development Services | Shopify, Headless & Custom Builds',
    description: 'Ecommerce development services — Shopify, WooCommerce, headless commerce, and custom builds. High-converting stores optimized for speed, SEO, and scale.',
    keywords: 'ecommerce development, Shopify development, headless commerce, WooCommerce, custom ecommerce',
    canonicalUrl: `${baseUrl}${location.pathname}`,
    ogImage: slides[0],
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Ecommerce Development',
    description: 'Ecommerce development services',
    provider: { '@type': 'Organization', name: 'ONAS' },
    serviceType: ['Ecommerce Development', 'Shopify Development', 'Headless Commerce'],
    areaServed: 'Global',
  };

  const stats = [
    { value: '250+', label: 'Stores Launched' },
    { value: '3.2x', label: 'Avg Conversion Lift' },
    { value: '40%', label: 'Faster Page Loads' },
    { value: '<1.5s', label: 'Time to Interactive' },
    { value: '99.99%', label: 'Uptime (Black Friday)' },
    { value: '12+', label: 'Payment Gateways' },
  ];

  const problems = [
    { num: '01', title: 'Slow storefronts killing conversions', text: 'Every 100ms delay costs up to 7% in conversions. Bloated themes and unoptimized images quietly bleed revenue on every visit.' },
    { num: '02', title: 'Checkout friction driving cart abandonment', text: 'Average cart abandonment sits above 70%. Multi-step checkouts, forced account creation, and hidden shipping costs are the usual suspects.' },
    { num: '03', title: 'Platform lock-in limiting growth', text: 'You built on a SaaS platform that cannot handle your B2B pricing rules, custom bundles, or international tax logic. Now you are stuck.' },
    { num: '04', title: 'Poor SEO and Core Web Vitals', text: 'Google ranks slow sites lower. Your product pages fail Core Web Vitals, and organic traffic is declining while paid costs rise.' },
    { num: '05', title: 'Disconnected ERP and inventory', text: 'Orders, stock, and pricing sync manually. Oversells, stale prices, and angry customers become the norm during peak season.' },
    { num: '06', title: 'No mobile-first experience', text: 'Over 60% of traffic is mobile. If your storefront is not engineered for thumb-first shopping, you are losing the majority of your audience.' },
  ];

  const offerings = [
    { num: '01', icon: <ShoppingCart size={20} color="#0B4C74" />, title: 'Shopify & WooCommerce', text: 'Custom themes and app development, migration from legacy platforms, and checkout flows optimized for conversion.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=85', bullets: ['Custom Shopify / WooCommerce themes', 'App development and integrations', 'Migration with zero data loss'] },
    { num: '02', icon: <Zap size={20} color="#0B4C74" />, title: 'Headless Commerce', text: 'Next.js + Shopify / BigCommerce / CommerceTools storefronts — blazing fast, omni-channel ready, and SEO-first.', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=85', bullets: ['Next.js + Shopify / CommerceTools', 'Sub-1s page loads', 'Omni-channel ready (web, mobile, POS)'] },
    { num: '03', icon: <CreditCard size={20} color="#0B4C74" />, title: 'Payments & Gateways', text: 'Stripe, Razorpay, PayPal, Adyen, and regional gateways with tokenization, multi-currency, and tax support.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=85', bullets: ['Stripe, Razorpay, PayPal, Adyen', 'Multi-currency and tax handling', 'PCI-DSS compliant tokenization'] },
    { num: '04', icon: <Database size={20} color="#0B4C74" />, title: 'ERP & Inventory Integration', text: 'Real-time sync of orders, stock, and pricing with your ERP, CRM, and warehouse systems.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=85', bullets: ['SAP, NetSuite, Dynamics, Oracle sync', 'Real-time inventory updates', 'Automated order fulfilment'] },
    { num: '05', icon: <Smartphone size={20} color="#0B4C74" />, title: 'Mobile-First & PWA', text: 'Progressive web apps and native mobile shopping experiences built for thumb-first customers.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=85', bullets: ['React Native / PWA storefronts', 'Offline browsing support', 'Push notifications for re-engagement'] },
    { num: '06', icon: <TrendingUp size={20} color="#0B4C74" />, title: 'CRO & Analytics', text: 'Continuous conversion optimization with A/B testing, funnel analytics, and behavioural insights.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85', bullets: ['A/B testing across funnels', 'Heatmaps and session replay', 'Revenue attribution analytics'] },
  ];

  const layers = [
    { num: '01', title: 'Your Customers', subtitle: 'Everyone shopping across channels', tags: ['Web', 'Mobile', 'POS', 'Marketplaces', 'B2B portal'], dark: true },
    { num: '02', title: 'Storefront Layer', subtitle: 'The experience your customers actually see', tags: ['Next.js', 'Shopify', 'Headless CMS', 'PWA', 'Design system'] },
    { num: '03', title: 'Commerce Logic', subtitle: 'Pricing, promotions, cart, and checkout', tags: ['Dynamic pricing', 'Bundle rules', 'Tax engine', 'Loyalty', 'Checkout'] },
    { num: '04', title: 'Backend & Data', subtitle: 'What keeps orders and inventory in sync', tags: ['Your ERP', 'Warehouse', 'Payment gateways', 'Analytics', 'CRM'] },
  ];

  const process = [
    { num: '01', title: 'Audit & Strategy', text: 'We analyse your current storefront, traffic sources, funnel data, and tech stack to identify the highest-ROI fixes first.' },
    { num: '02', title: 'Design & Prototype', text: 'Conversion-focused UI/UX prototypes tested with real users before a single line of production code is written.' },
    { num: '03', title: 'Build & Integrate', text: 'Two-week sprints with working storefronts — payment, ERP, and inventory integrations running from sprint one.' },
    { num: '04', title: 'Optimize & Scale', text: 'Post-launch A/B testing, performance tuning, and continuous CRO to compound revenue month over month.' },
  ];

  const timeline = [
    { num: '01', title: 'Audit', text: 'Week 1' },
    { num: '02', title: 'Design', text: 'Weeks 2–3' },
    { num: '03', title: 'Build', text: 'Weeks 4–10' },
    { num: '04', title: 'Launch', text: 'Week 11' },
    { num: '05', title: 'CRO', text: 'Ongoing' },
  ];

  const whyChoose = [
    { num: '01', icon: <Zap size={20} color="#0B4C74" />, title: 'Conversion-Obsessed', text: 'Every pixel, script, and interaction is measured against a single KPI: revenue per visitor.' },
    { num: '02', icon: <Cpu size={20} color="#0B4C74" />, title: 'Headless Expertise', text: 'We ship headless Next.js storefronts with sub-1s loads and industry-leading Core Web Vitals.' },
    { num: '03', icon: <GitBranch size={20} color="#0B4C74" />, title: 'Deep Integrations', text: 'From ERP to payment gateways to warehouse systems, we connect the full commerce stack.' },
    { num: '04', icon: <Lock size={20} color="#0B4C74" />, title: 'PCI-DSS Compliant', text: 'Tokenized payments, fraud prevention, and audit-ready security controls built in from day one.' },
    { num: '05', icon: <Award size={20} color="#0B4C74" />, title: 'Proven Track Record', text: '250+ storefronts launched, with an average 3.2x lift in conversion rate after redesign.' },
    { num: '06', icon: <Globe size={20} color="#0B4C74" />, title: 'Global Commerce Ready', text: 'Multi-currency, multi-language, and multi-tax-region support for cross-border brands.' },
    { num: '07', icon: <Shield size={20} color="#0B4C74" />, title: 'Peak-Season Ready', text: 'Autoscaling architectures that handle Black Friday and holiday traffic without a hiccup.' },
    { num: '08', icon: <Award size={20} color="#0B4C74" />, title: 'Post-Launch CRO', text: 'Ongoing A/B testing and optimisation retainers that compound results quarter over quarter.' },
  ];

  const techStack = {
    'Ecommerce Platforms': ['Shopify', 'Shopify Plus', 'WooCommerce', 'BigCommerce', 'CommerceTools', 'Magento'],
    'Frontend': ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vue Storefront'],
    'Payments': ['Stripe', 'Razorpay', 'PayPal', 'Adyen', 'Braintree', 'Klarna'],
    'ERP & Inventory': ['SAP', 'NetSuite', 'Microsoft Dynamics', 'Oracle', 'Cin7', 'TradeGecko'],
    'Analytics & CRO': ['GA4', 'Hotjar', 'Optimizely', 'Segment', 'Mixpanel', 'Amplitude'],
    'Infrastructure': ['Vercel', 'AWS', 'Cloudflare', 'Fastly', 'Algolia', 'Elasticsearch'],
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
          <Eyebrow sx={{ color: lime, textShadow: '0 1px 6px rgba(0,0,0,.6)' }}>Ecommerce Development</Eyebrow>
          <Typography component="h1" sx={{ ...heroHeadingSx, marginLeft: 'auto', marginRight: 'auto', textShadow: '0 2px 10px rgba(0,0,0,.65)' }}>
            Ecommerce Stores Built for Conversion &amp; Scale
          </Typography>
          <Body sx={{ color: 'rgba(255,255,255,.95) !important', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto', marginBottom: '1.8rem', textShadow: '0 1px 6px rgba(0,0,0,.65)' }}>
            High-performance ecommerce stores built on Shopify, headless stacks, or custom frameworks — engineered for speed, SEO, and revenue.
          </Body>
          <LimeButton href="/resources/contact-us">Contact Us <ArrowForward sx={{ fontSize: 14 }} /></LimeButton>
        </Container>
      </Box>

      {/* ── STATS ── */}
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

      {/* ── THE PROBLEM (section 2) ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>The Problem</Eyebrow>
          <SectionHeading sx={{ maxWidth: 800, margin: '.6rem auto 1rem' }}>
            Why Most Ecommerce Stores Leave Revenue on the Table
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
            At ONAS, we see the same conversion killers before every build.
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
            If three or more of these ring true, your storefront is likely losing 15–30% of potential revenue.
          </Body>
          <LimeButton href="/resources/contact-us">Book A Free Store Audit <ArrowForward sx={{ fontSize: 14 }} /></LimeButton>
        </Box>
      </Section>

      {/* ── OFFERINGS (section 3) ── */}
      <Box sx={{ background: sectionSurface }}>
        <Container maxWidth={false} disableGutters sx={{ ...containerSx, paddingTop: { xs: '2.5rem', md: '3.5rem' }, paddingBottom: { xs: '2.5rem', md: '3.5rem' } }}>
          <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Eyebrow>The Work</Eyebrow>
            <SectionHeading sx={{ maxWidth: 800, margin: '.6rem auto 1rem' }}>
              End-to-End Ecommerce Development Services
            </SectionHeading>
            <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
              From storefronts to payments, ERP sync to CRO — everything that makes an online store actually sell.
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
        </Container>
      </Box>

      {/* ── LAYERS DIAGRAM (section 4) ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>Architecture</Eyebrow>
          <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>
            How a Modern Ecommerce Stack Layers Together
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
            Customers at the top. Your ERP, warehouse, and payment systems at the bottom. The storefront and commerce logic sit in the middle and connect everything.
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
            <Box component="img" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&q=85" alt="Ecommerce storefront" sx={{ width: '100%', height: '100%', minHeight: { xs: 260, md: 440 }, objectFit: 'cover', display: 'block' }} />
          </Box>
        </Box>
      </Section>

      {/* ── HOW WE WORK (section 5) ── */}
      <Section id="how-we-work" bg={sectionSurface}>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>Our Process</Eyebrow>
          <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>
            How We Build Ecommerce Stores
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
            Four stages, each designed to compound revenue from day one. If the audit says your current storefront should be optimized rather than rebuilt, you hear that in week one.
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

        <Box sx={{ marginTop: '2rem', background: cream, border: `1px solid ${line}`, borderRadius: '2px', padding: '1.4rem' }}>
          <Typography sx={{ fontWeight: 400, color: ink, fontSize: '.75rem', marginBottom: '1rem', fontFamily: "Georgia, serif" }}>
            From First Call to Live Store
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(5, minmax(0, 1fr))' }, gap: 1.5 }}>
            {timeline.map((t, i) => (
              <Box key={i}>
                <Box sx={{ border: `1px solid ${line}`, borderRadius: '2px', padding: '.8rem', background: soft }}>
                  <Typography sx={{ color: ink, fontWeight: 700, fontSize: '.52rem', marginBottom: '.3rem', fontFamily: "'Poppins', sans-serif" }}>{t.num}</Typography>
                  <Typography sx={{ fontWeight: 400, color: ink, fontSize: '.62rem', fontFamily: "Georgia, serif" }}>{t.title}</Typography>
                  <Typography sx={{ color: muted, fontSize: '.48rem', marginTop: '.2rem', fontFamily: "'Poppins', sans-serif" }}>{t.text}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      {/* ── WHY CHOOSE ONAS (section 6) ── */}
      <Box sx={{ background: soft }}>
        <Container maxWidth={false} disableGutters sx={{ ...containerSx, paddingTop: { xs: '2.5rem', md: '3.5rem' }, paddingBottom: { xs: '2.5rem', md: '3.5rem' } }}>
          <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Eyebrow>Why ONAS</Eyebrow>
            <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>
              Why Choose ONAS for Ecommerce?
            </SectionHeading>
            <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
              Here is what differentiates ONAS in delivering ecommerce development for global brands.
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

      {/* ── TECH STACK (section 7) ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>Technology Stack</Eyebrow>
          <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>
            Our Ecommerce Technology Expertise
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
            The full stack we work in — chosen by what fits your brand, not by what is easiest for us.
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
              Ready to Turn Your Storefront Into a Revenue Engine?
            </SectionHeading>
            <Body sx={{ marginBottom: '1.8rem', maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
              At ONAS, we combine commerce strategy, engineering depth, and CRO obsession to build ecommerce stores that actually sell. Let's talk about your growth targets.
            </Body>
            <LimeButton href="/resources/contact-us">Book An Appointment <ArrowForward sx={{ fontSize: 14 }} /></LimeButton>
          </Box>
        </Container>
      </Box>

    </PageShell>
  );
};

export default EcommerceDevelopment;