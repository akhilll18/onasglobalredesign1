import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowForward } from '@mui/icons-material';
import { Compass, Layers, Zap, GitBranch, Server } from 'lucide-react';

import {
  PageShell, Section, Eyebrow, SectionHeading, SubHeading,
  Body, LimeButton, cardSx, containerSx, heroHeadingSx,
  ink, muted, line, soft, lime,
} from '../../../theme/theme';

import Image1 from '../../../assets/images/howWeHelp/digitaltrans/productengg/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/digitaltrans/productengg/img2.jpg';
import Image3 from '../../../assets/images/howWeHelp/digitaltrans/productengg/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/digitaltrans/productengg/img4.jpg';

const ProductEngineering = () => {
  const baseUrl = window.location.origin;
  const pageUrl = `${baseUrl}/services/product-engineering`;

  const slides = [Image1, Image2, Image3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const seoData = {
    title: 'Product Engineering Services | End-to-End Product Development 2024',
    description: 'Comprehensive product engineering services: product consulting, development, modernization, testing, and maintenance. Build scalable digital products with expert engineering teams.',
    keywords: 'product engineering, product development, software product engineering, product consulting, MVP development, product modernization, SaaS development, cloud-native applications, product testing, product maintenance',
    canonicalUrl: pageUrl,
    ogImage: Image1,
    twitterImage: Image1,
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Product Engineering Services",
    "description": "End-to-end product engineering services including product consulting, development, modernization, testing, and maintenance",
    "provider": { "@type": "Organization", "name": "ONAS", "url": baseUrl, "logo": `${baseUrl}/logo.png` },
    "serviceType": ["Product Consulting & Design", "Platform & Application Development", "Product Modernization & Transformation", "Product Testing & Quality Engineering", "Product Maintenance & Support"],
    "areaServed": { "@type": "Country", "name": "Global" },
    "offers": { "@type": "Offer", "category": "TechnologyServices" }
  };

  const offerings = [
    { icon: <Compass size={20} color="#0B4C74" />, title: 'Product Consulting & Design', text: `Product Discovery & Feasibility Study\nTech Stack Evaluation & Architecture Planning\nUI/UX Design and Wireframing\nPrototype & MVP Development` },
    { icon: <Server size={20} color="#0B4C74" />, title: 'Platform & Application Development', text: `Web, Mobile & Desktop App Development\nSaaS & Cloud-Native Product Engineering\nEmbedded & IoT Device Engineering\nLow-Code / No-Code Application Development` },
    { icon: <Layers size={20} color="#0B4C74" />, title: 'Product Modernization & Transformation', text: `Legacy System Re-engineering\nCloud Migration & Microservices Architecture\nAPI-First Development & Performance Optimization` },
    { icon: <Zap size={20} color="#0B4C74" />, title: 'Product Testing & Quality Engineering', text: `Test Strategy Design & Automation\nCI/CD, Functional & Security Testing\nCompliance Testing (HIPAA, FDA, ISO, etc.)` },
    { icon: <GitBranch size={20} color="#0B4C74" />, title: 'Product Maintenance & Support', text: `L1–L3 Application Support\nFeature Enhancements & Technical Upgrades\nDevOps, Release Engineering & Documentation` },
  ];

  const techStack = [
    { category: 'Frontend', tech: 'React, Angular, Vue.js, TypeScript' },
    { category: 'Backend', tech: 'Node.js, Python, Java, .NET, Go' },
    { category: 'Mobile', tech: 'React Native, Flutter, Swift, Kotlin' },
    { category: 'Cloud', tech: 'AWS, Azure, Google Cloud, Kubernetes' },
    { category: 'Databases', tech: 'PostgreSQL, MongoDB, MySQL, Redis' },
    { category: 'DevOps', tech: 'Docker, Jenkins, GitLab CI, Terraform' },
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
        <meta property="og:title" content="Product Engineering Services | End-to-End Product Development" />
        <meta property="og:description" content="Build innovative digital products with our comprehensive product engineering services from concept to launch and beyond." />
        <meta property="og:image" content={seoData.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Product Engineering Services | Digital Product Development" />
        <meta name="twitter:description" content="Comprehensive product engineering services for building scalable, reliable software products." />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS Product Engineering" />
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
            Product Engineering
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
            Product Engineering Services
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
            From idea to launch, and every iteration in between, our end-to-end product engineering services empower you to build innovative, reliable, and scalable digital solutions. Modern product engineering goes beyond writing code—it demands agility, resilience, and alignment with business goals.
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
            Build Innovative Digital Products with Expert Engineering
          </SectionHeading>
          <Body sx={{ maxWidth: 640, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            Our product engineering services combine technical expertise with business strategy to deliver market-ready digital products. We follow agile methodologies, implement best practices, and leverage modern technologies to build products that users love and businesses need.
          </Body>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>What We Offer</Eyebrow>
          <SectionHeading>Our Product Engineering Offerings</SectionHeading>
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
                <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, marginBottom: '1rem', flexShrink: 0 }}>
                  {item.icon}
                </Box>
                <SubHeading sx={{ marginBottom: '.5rem' }}>{item.title}</SubHeading>
                <Body sx={{ whiteSpace: 'pre-line', flexGrow: 1 }}>{item.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Our Stack</Eyebrow>
          <SectionHeading>Technology Stack for Product Engineering</SectionHeading>
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
              src={Image4}
              alt="Technology stack for product engineering"
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
            {techStack.map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                style={{ display: 'flex', width: '100%' }}
              >
                <Box sx={cardSx}>
                  <SubHeading sx={{ marginBottom: '.5rem' }}>{stack.category}</SubHeading>
                  <Body sx={{ flexGrow: 1 }}>{stack.tech}</Body>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
          <Eyebrow>Get Started</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Ready to Build Your Next Digital Product?
          </SectionHeading>
          <Body sx={{ marginBottom: '1.8rem', fontSize: '.72rem', lineHeight: 1.75 }}>
            Contact our product engineering experts to discuss your project requirements, explore technical solutions, and develop a roadmap for successful product delivery.
          </Body>
          <LimeButton href="/resources/contact-us">
            Start Your Product Journey <ArrowForward sx={{ fontSize: 14 }} />
          </LimeButton>
        </Box>
      </Section>
    </PageShell>
  );
};

export default ProductEngineering;