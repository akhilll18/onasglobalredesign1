import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Users,
  Link,
  Wrench,
  Headphones,
  Cloud,
  Zap,
  GitBranch,
  Database,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import {
  PageShell, Section, Eyebrow, SectionHeading, SubHeading,
  Body, LimeButton, cardSx, containerSx, heroHeadingSx,
  ink, muted, line, soft, lime,
} from '../../../theme/theme';

import Image1 from '../../../assets/images/howWeHelp/digitaltrans/AIML/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/digitaltrans/AIML/img2.jpg';
import Image3 from '../../../assets/images/howWeHelp/digitaltrans/AIML/img3.jpg';

const AIML = () => {
  const location = useLocation();
  const baseUrl = 'https://onasglobal.com';

  const slides = [Image1, Image2, Image3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const seoData = {
    title: 'AI & ML Consulting Services | Enterprise AI Solutions & Implementation',
    description: 'Drive enterprise performance with AI consulting services designed for intelligent automation, predictive analytics, and transformative customer experiences. Custom machine learning models and enterprise-grade generative AI solutions.',
    keywords: 'AI consulting, machine learning services, enterprise AI solutions, generative AI implementation, predictive analytics, computer vision, NLP, AI automation, MLOps',
    canonicalUrl: `${baseUrl}${location.pathname}`,
    ogImage: Image1,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI & ML Consulting Services",
      "description": "Enterprise AI solutions and machine learning consulting services",
      "provider": { "@type": "Organization", "name": "ONAS" },
      "serviceType": ["AI Strategy Consulting", "Machine Learning Development", "Computer Vision Solutions", "Natural Language Processing", "Generative AI Implementation", "Predictive Analytics"],
      "areaServed": "Global",
      "offers": { "@type": "Offer", "category": "Professional Services" }
    }
  };

  const offerings = [
    { icon: <Server size={20} color="#0B4C74" />, title: 'AI Strategy & Consulting', text: `AI readiness assessments and maturity evaluation\nUse-case mapping with ROI impact modeling\nResponsible AI frameworks, governance, compliance` },
    { icon: <Users size={20} color="#0B4C74" />, title: 'Computer Vision & NLP', text: `Video analytics, OCR, defect detection, facial recognition\nNLP for sentiment analysis, summarization, and speech-to-text\nCustom NLU pipelines for contextual understanding` },
    { icon: <Link size={20} color="#0B4C74" />, title: 'Machine Learning & Predictive Analytics', text: `Supervised and unsupervised learning models\nForecasting, churn prediction, anomaly detection\nModel development, MLOps pipelines, continuous learning` },
    { icon: <Wrench size={20} color="#0B4C74" />, title: 'Generative AI Solutions', text: `Enterprise-grade GPT chatbot and knowledge assistants\nLLM integrations using OpenAI, Azure, Claude, Bedrock\nText, code, and image generation use cases\nModel fine-tuning and prompt engineering` },
    { icon: <Headphones size={20} color="#0B4C74" />, title: 'AI-Powered Automation', text: `Intelligent document processing and workflow automation\nRPA augmentation with AI models\nHyper-personalization and real-time recommendations` },
  ];

  const valueDelivery = [
    { icon: <GitBranch size={20} color="#0B4C74" />, title: 'Business-Aligned Intelligence', text: 'We address real-world challenges, including fraud detection, inventory forecasting, and dynamic customer experience personalization' },
    { icon: <Zap size={20} color="#0B4C74" />, title: 'Cross-Industry Expertise', text: 'Healthcare, Retail, BFSI, Manufacturing, EdTech — all covered with domain-ready accelerators.' },
    { icon: <Database size={20} color="#0B4C74" />, title: 'Secure & Responsible AI', text: 'We follow ethical AI practices with compliance, privacy controls, and explainability at every level.' },
    { icon: <Cloud size={20} color="#0B4C74" />, title: 'Rapid Scaling & ROI', text: 'From MVP to production-grade deployments, we optimize for speed, impact, and sustainability.' },
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
        <script type="application/ld+json">{JSON.stringify(seoData.structuredData)}</script>
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
            AI &amp; Machine Learning
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
            Artificial Intelligence Consulting Services for Enterprise Impact
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
            Drive enterprise performance with AI consulting services designed to enable intelligent automation, predictive analytics, and transformative customer experiences. Whether it's custom machine learning models or enterprise-grade generative AI, accelerate your journey from pilot projects to scalable AI implementation.
          </Body>
          <LimeButton href="/resources/contact-us">
            Contact Us <ArrowForward sx={{ fontSize: 14 }} />
          </LimeButton>
        </Container>
      </Box>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>What We Offer</Eyebrow>
          <SectionHeading>Our AI Consulting Offerings</SectionHeading>
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
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Our Impact</Eyebrow>
          <SectionHeading>How We Deliver Value with AI</SectionHeading>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
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
                    background: '#fff',
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
      </Section>

      <Section>
        <Box
          sx={{
            background: '#fff',
            border: `1px solid ${line}`,
            borderRadius: '2px',
            padding: { xs: '1.6rem 1.2rem', md: '2.4rem 2rem' },
          }}
        >
          <Box sx={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <Eyebrow>Why Us</Eyebrow>
            <SectionHeading>Why Choose Our AI Consulting Services?</SectionHeading>
          </Box>

          <Box sx={{ maxWidth: 780, margin: '0 auto' }}>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.8rem' }}>
              As a leading AI consulting company, we provide end-to-end machine learning solutions that drive measurable business outcomes. Our expertise spans across artificial intelligence implementation, model deployment, and ongoing optimization.
            </Body>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.8rem' }}>
              With deep experience in both traditional machine learning and cutting-edge generative AI, we help enterprises navigate their digital transformation journey. Our data scientists and AI engineers work closely with your team to develop custom solutions that address specific business challenges.
            </Body>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, margin: 0 }}>
              Whether you need predictive analytics for better decision-making, computer vision for quality control, or NLP for customer service automation, our AI consulting services deliver scalable, production-ready solutions.
            </Body>
          </Box>
        </Box>
      </Section>
    </PageShell>
  );
};

export default AIML;