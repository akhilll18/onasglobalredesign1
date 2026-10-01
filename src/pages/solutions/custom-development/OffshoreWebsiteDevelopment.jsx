import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Code, Zap, GitBranch, Shield, Database, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import {
  PageShell, Section, Eyebrow, SectionHeading, SubHeading, Body, LimeButton,
  cardSx, containerSx, heroHeadingSx, ink, muted, line, soft, lime,
} from '../../../theme/theme';

const slides = [
  'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1600&q=80',
  'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=80',
  'https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1600&q=80',
  'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1600&q=80',
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1600&q=80',
];
const bgImage = 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=80';
const contentImage = 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80';

const OffshoreWebsiteDevelopment = () => {
  const location = useLocation();
  const baseUrl = 'https://onasglobal.com';
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const seoData = {
    title: 'Offshore Website Development Services | Cost-Effective Global Teams',
    description: 'Offshore website development services with global delivery teams. Reduce development costs by 50-70% without compromising quality. React, Next.js, WordPress, and custom stacks.',
    keywords: 'offshore website development, offshore development team, global web development, cost-effective web development',
    canonicalUrl: `${baseUrl}${location.pathname}`,
    ogImage: slides[0],
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Offshore Website Development',
    description: 'Offshore website development services',
    provider: { '@type': 'Organization', name: 'ONAS' },
    serviceType: ['Offshore Development', 'Web Development', 'Global Delivery'],
    areaServed: 'Global',
  };

  const offerings = [
    {
      icon: <Code size={20} color="#0B4C74" />,
      title: 'Custom Website Development',
      text: `React, Next.js, Vue, and modern JS stacks\nHeadless CMS and API-first builds\nPerformance-optimized & SEO-ready`,
    },
    {
      icon: <Globe size={20} color="#0B4C74" />,
      title: 'Global Delivery Model',
      text: `Dedicated offshore teams in India\nOverlap with US/UK/EU timezones\nTransparent communication & reporting`,
    },
    {
      icon: <Zap size={20} color="#0B4C74" />,
      title: 'Maintenance & Support',
      text: `Ongoing updates, monitoring, and security patches\nSLA-backed response times\n24/7 coverage options`,
    },
  ];

  const valueDelivery = [
    { icon: <Database size={20} color="#0B4C74" />, title: '50-70% Cost Savings', text: 'Significant savings vs local teams, with no quality compromise.' },
    { icon: <GitBranch size={20} color="#0B4C74" />, title: 'Agile Delivery', text: 'Sprint-based delivery with weekly demos and clear milestones.' },
    { icon: <Shield size={20} color="#0B4C74" />, title: 'NDA & IP Protection', text: 'Full IP ownership and strict confidentiality agreements.' },
    { icon: <Settings size={20} color="#0B4C74" />, title: 'Flexible Engagement', text: 'Fixed-price, T&M, or dedicated team — your choice.' },
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
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="author" content="ONAS" />
      </Helmet>

      <Box sx={{ position: 'relative', minHeight: { xs: 480, md: 560 }, padding: { xs: '5rem 1rem 3rem', md: '7rem 2.5rem 4rem' }, overflow: 'hidden', background: ink, isolation: 'isolate', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -2, overflow: 'hidden', '&::after': { content: '""', position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(11,76,116,.45) 0%, rgba(11,76,116,.28) 55%, rgba(11,76,116,.40) 100%)', zIndex: 1 } }}>
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 1.1, ease: 'easeInOut' }} style={{ position: 'absolute', inset: 0, backgroundImage: `url(${slides[currentSlide]})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
          </AnimatePresence>
        </Box>

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Eyebrow sx={{ color: lime, textShadow: '0 1px 6px rgba(0,0,0,.6)' }}>Offshore Website Development</Eyebrow>
          <Typography component="h1" sx={{ ...heroHeadingSx, marginLeft: 'auto', marginRight: 'auto', textShadow: '0 2px 10px rgba(0,0,0,.65)' }}>
            Offshore Website Development with Global-Quality Delivery
          </Typography>
          <Body sx={{ color: 'rgba(255,255,255,.95) !important', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto', marginBottom: '1.8rem', textShadow: '0 1px 6px rgba(0,0,0,.65)' }}>
            Build high-performance websites with dedicated offshore teams — save 50–70% on cost while keeping quality, security, and communication world-class.
          </Body>
          <LimeButton href="/resources/contact-us">Contact Us <ArrowForward sx={{ fontSize: 14 }} /></LimeButton>
        </Container>
      </Box>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Our Impact</Eyebrow>
          <SectionHeading>Global Talent, Local Accountability</SectionHeading>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: { xs: '2rem', md: '2rem' }, alignItems: 'stretch' }}>
          <Box sx={{ border: `1px solid ${line}`, borderRadius: '2px', overflow: 'hidden', background: '#fff', minHeight: { xs: 280, sm: 420, md: 480 } }}>
            <Box component="img" src={contentImage} alt="Offshore website development" sx={{ width: '100%', height: '100%', minHeight: 'inherit', objectFit: 'cover', display: 'block' }} />
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: { xs: '1rem', md: '1.2rem' }, alignItems: 'stretch' }}>
            {valueDelivery.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} style={{ display: 'flex', width: '100%' }}>
                <Box sx={cardSx}>
                  <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', background: soft, border: `1px solid ${line}`, marginBottom: '1rem', flexShrink: 0 }}>
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

      <Box sx={{ position: 'relative', padding: { xs: '3.5rem 1rem', md: '5rem 2.5rem' }, overflow: 'hidden', background: ink }}>
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${bgImage})`, backgroundPosition: 'center', backgroundSize: 'cover', filter: 'brightness(.35)' }} />
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(11,76,116,.94) 0%, rgba(11,76,116,.72) 55%, rgba(11,76,116,.85) 100%)' }} />
        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
            <Typography sx={{ color: lime, fontSize: '.55rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 700, fontFamily: "'Poppins', sans-serif", marginBottom: '.5rem' }}>What We Offer</Typography>
            <Typography component="h2" sx={{ margin: '.4rem auto 0', font: "400 clamp(1.2rem, 2.2vw, 1.7rem)/1.15 Georgia, 'Times New Roman', serif", color: '#fff', maxWidth: 720 }}>Our Offshore Development Services</Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: '1rem', md: '1.2rem' }, alignItems: 'stretch' }}>
            {offerings.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} style={{ display: 'flex', width: '100%' }}>
                <Box sx={cardSx}>
                  <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', background: soft, border: `1px solid ${line}`, marginBottom: '1rem', flexShrink: 0 }}>
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
        <Box sx={{ background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: { xs: '1.6rem 1.2rem', md: '2.2rem 1.8rem' } }}>
          <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.8rem' }}>
            Our offshore website development model gives you access to senior engineering talent at a fraction of local cost. We staff dedicated teams that work as an extension of your in-house team.
          </Body>
          <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, margin: 0 }}>
            From marketing sites and e-commerce platforms to complex web applications, we deliver production-grade websites with modern stacks, cloud hosting, and ongoing support.
          </Body>
        </Box>
      </Section>
    </PageShell>
  );
};

export default OffshoreWebsiteDevelopment;