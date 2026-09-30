import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowForward } from '@mui/icons-material';
import { Cloud, BarChart3, Wrench, Zap, Shield, Layers, Database } from 'lucide-react';

import CloudHero from '../../../assets/images/howWeHelp/mitoper/cloudsupport.png';

// Images
import Image1 from '../../../assets/images/howWeHelp/mitoper/cloudsupport/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/mitoper/cloudsupport/img2.png';
import Image3 from '../../../assets/images/howWeHelp/mitoper/cloudsupport/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/mitoper/cloudsupport/img4.jpg';
import { Eyebrow, PageShell, Section, SectionHeading, SubHeading, Body, LimeButton, cardSx, containerSx, heroHeadingSx, ink, muted, line, soft, cream, lime } from '../../../theme/theme';

const CloudSupport = () => {
  const baseUrl = window.location.origin;
  const pageUrl = `${baseUrl}/services/cloud-support`;

  // ── Slideshow state ──
  const slides = [CloudHero, Image1, Image2, Image3, Image4];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const seoData = {
    title: 'Cloud Support Services | 24/7 Cloud Management & Optimization 2024',
    description: 'Professional cloud support services: cloud monitoring, optimization, security, backup, IaC support for AWS, Azure, GCP. 24/7 cloud management and cost optimization.',
    keywords: 'cloud support services, cloud management, cloud optimization, cloud monitoring, AWS support, Azure support, Google Cloud support, cloud security, cloud backup, infrastructure as code, cloud cost optimization, multi-cloud support, hybrid cloud support, cloud consulting, cloud managed services, cloud infrastructure support, cloud operations, cloud performance optimization, cloud migration support, cloud governance, cloud compliance, cloud automation, cloud disaster recovery, cloud security services, cloud monitoring tools, cloud cost management, cloud support company',
    canonicalUrl: pageUrl,
    ogImage: CloudHero,
    twitterImage: CloudHero,
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cloud Support Services",
    "description": "Professional cloud support and management services including monitoring, optimization, security, backup, and infrastructure as code support for AWS, Azure, and Google Cloud",
    "provider": { "@type": "Organization", "name": "ONAS", "url": baseUrl, "logo": `${baseUrl}/logo.png` },
    "serviceType": ["Cloud Management", "Cloud Optimization", "Cloud Monitoring", "Cloud Security", "Cloud Backup", "Infrastructure as Code Support"],
    "areaServed": { "@type": "Country", "name": "Global" },
    "offers": { "@type": "Offer", "category": "TechnologyServices", "availability": "https://schema.org/InStock" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What are cloud support services?", "acceptedAnswer": { "@type": "Answer", "text": "Cloud support services include ongoing management, monitoring, optimization, security, and maintenance of cloud infrastructure and applications across AWS, Azure, Google Cloud, and hybrid environments to ensure performance, security, and cost-efficiency." } },
      { "@type": "Question", "name": "Which cloud platforms do you support?", "acceptedAnswer": { "@type": "Answer", "text": "We provide comprehensive support for AWS (Amazon Web Services), Microsoft Azure, Google Cloud Platform (GCP), Oracle Cloud, IBM Cloud, and hybrid cloud environments including on-premise integration." } },
      { "@type": "Question", "name": "What is included in cloud optimization services?", "acceptedAnswer": { "@type": "Answer", "text": "Cloud optimization services include rightsizing resources, identifying and eliminating waste, implementing cost-saving measures, improving performance, automating processes, and implementing governance policies to reduce cloud spending by 30-50% while maintaining performance." } },
      { "@type": "Question", "name": "Do you provide 24/7 cloud monitoring and support?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide 24/7 cloud monitoring, alerting, and support with guaranteed SLAs. Our services include proactive monitoring, incident response, performance optimization, security monitoring, and continuous improvement of your cloud environments." } }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": `${baseUrl}/services` },
      { "@type": "ListItem", "position": 3, "name": "Cloud Support", "item": seoData.canonicalUrl }
    ]
  };

  const offerings = [
    { Icon: Wrench, title: 'OS Management in Cloud', text: 'Proactive OS monitoring, patching, and configuration across cloud-based Linux, Windows, and container-based systems.', schemaType: "OperatingSystemService" },
    { Icon: BarChart3, title: 'Cloud Optimization Services', text: 'Identify underutilized assets, rightsize workloads, and reduce cloud waste through continuous assessment and governance.', schemaType: "OptimizationService" },
    { Icon: Layers, title: 'Cloud Monitoring & Alerting', text: 'End-to-end visibility and real-time alerting across cloud infrastructure, applications, and services.', schemaType: "MonitoringService" },
    { Icon: Database, title: 'Access & Identity Management', text: 'Centralized user access, role-based controls, and policy enforcement to ensure secure cloud environments.', schemaType: "SecurityService" },
    { Icon: Shield, title: 'Cloud Backup & Recovery', text: 'Automated backup schedules, disaster recovery orchestration, and data redundancy strategies.', schemaType: "BackupService" },
    { Icon: Cloud, title: 'Infrastructure as Code Support', text: 'Support for Terraform, CloudFormation, and other IaC tools to standardize deployments.', schemaType: "SoftwareApplication" },
  ];

  const valueDelivery = [
    { Icon: Zap, title: 'Proactive Support', text: 'Continuous monitoring, alerting, and incident resolution before issues impact operations.' },
    { Icon: Shield, title: 'Compliance & Security', text: 'Governance, policies, and encryption enforced across cloud workloads.' },
    { Icon: Database, title: 'Multi-Cloud Agility', text: 'Seamless operations across AWS, Azure, GCP, and hybrid clouds.' },
    { Icon: Layers, title: 'Cost Optimization', text: 'Identify and eliminate waste, rightsize resources, and improve ROI.' },
  ];

  const impactMetrics = [
    { label: 'Cost Reduction', value: '30-50%' },
    { label: 'Uptime Improvement', value: '99.9%+' },
    { label: 'Performance Gain', value: '40-60%' },
    { label: 'Security Enhancement', value: '70-90%' },
    { label: 'Incident Response', value: '50% Faster' },
    { label: 'ROI on Cloud Spend', value: '2-3x' },
  ];

  const cloudTech = [
    { category: 'Cloud Platforms', tech: 'AWS, Microsoft Azure, Google Cloud, Oracle Cloud, IBM Cloud' },
    { category: 'Infrastructure as Code', tech: 'Terraform, CloudFormation, ARM Templates, Ansible, Pulumi' },
    { category: 'Cloud Monitoring', tech: 'CloudWatch, Azure Monitor, Stackdriver, Datadog, New Relic' },
    { category: 'Cloud Security', tech: 'AWS IAM, Azure AD, Cloud Security Posture Management, WAF, DDoS' },
    { category: 'Container & Kubernetes', tech: 'EKS, AKS, GKE, Docker, Kubernetes, OpenShift' },
    { category: 'Cloud Databases', tech: 'RDS, Aurora, Cosmos DB, Cloud SQL, DynamoDB, MongoDB Atlas' },
  ];

  return (
    <Box sx={{ background: cream, color: ink, width: '100%', overflowX: 'hidden', '& h1, & h2, & h3': { fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, letterSpacing: 0 } }}>
      {/* ── SEO ── */}
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:title" content="Cloud Support Services | Multi-Cloud Management & Optimization" />
        <meta property="og:description" content="Professional cloud support services for AWS, Azure, Google Cloud, and hybrid environments. 24/7 monitoring, optimization, and security." />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ONAS Cloud Services" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourCompany" />
        <meta name="twitter:creator" content="@YourCompany" />
        <meta name="twitter:title" content="Cloud Support Services | 24/7 Cloud Management" />
        <meta name="twitter:description" content="Comprehensive cloud support services for monitoring, optimization, security, and backup across cloud platforms." />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="twitter:image:alt" content="Cloud Support Services" />
        <meta property="linkedin:title" content="Cloud Support Services" />
        <meta property="linkedin:description" content="Enterprise cloud support services for AWS, Azure, GCP, and hybrid cloud environments." />
        <meta property="linkedin:image" content={seoData.ogImage} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS Cloud Services" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="date" content={new Date().toISOString().split('T')[0]} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ONAS",
            "url": baseUrl,
            "logo": `${baseUrl}/logo.png`,
            "sameAs": ["https://twitter.com/yourcompany", "https://linkedin.com/company/yourcompany", "https://github.com/yourcompany"],
            "description": "Cloud support and management services"
          })}
        </script>
      </Helmet>

      {/* Hidden SEO */}
      <div style={{ display: 'none' }}>
        <h1>Cloud Support and Management Services</h1>
        <p>Professional cloud support services for AWS, Azure, Google Cloud Platform, and hybrid environments. Our 24/7 cloud management ensures optimal performance, security, and cost-efficiency for your cloud infrastructure and applications.</p>
        <h2>Cloud Support Services Overview</h2>
        <p>Comprehensive cloud support including monitoring, optimization, security, backup, disaster recovery, and infrastructure as code (IaC) management across all major cloud platforms and hybrid environments.</p>
        <h3>Cloud Platforms We Support</h3>
        <ul>
          <li>AWS (Amazon Web Services) Support and Management</li>
          <li>Microsoft Azure Cloud Support Services</li>
          <li>Google Cloud Platform (GCP) Support</li>
          <li>Oracle Cloud Infrastructure Support</li>
          <li>IBM Cloud Support Services</li>
          <li>Multi-Cloud and Hybrid Cloud Support</li>
        </ul>
        <h4>Cloud Support Benefits</h4>
        <p>Reduce cloud costs by 30-50%, improve performance and reliability, enhance security and compliance, implement proactive monitoring and alerting, and optimize cloud resource utilization with our expert cloud support services.</p>
      </div>

      {/* ── Hero — Slideshow background ── */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 480, md: 560 },
          padding: { xs: '3.5rem 1rem', md: '5rem 2.5rem' },
          overflow: 'hidden',
          background: ink,
          isolation: 'isolate',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: -2,
            overflow: 'hidden',
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(11,76,116,.94) 0%, rgba(11,76,116,.72) 55%, rgba(11,76,116,.85) 100%)',
              zIndex: 1,
            },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${slides[currentSlide]})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </AnimatePresence>
        </Box>

        <Box sx={{ position: 'relative', zIndex: 2, maxWidth: 1240, margin: '0 auto', width: '100%' }}>
          <Typography sx={{ color: lime, fontSize: '.55rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 700, fontFamily: "'Poppins', sans-serif", marginBottom: '.7rem' }}>
            Cloud Support
          </Typography>
          <Typography
            component="h1"
            sx={{ margin: '.4rem 0 1rem', font: "400 clamp(2rem, 4.5vw, 3.6rem)/1.02 Georgia, 'Times New Roman', serif", color: '#fff', maxWidth: 900 }}
          >
            Cloud Support Services
          </Typography>
          <Typography
            sx={{ color: 'rgba(255,255,255,.82) !important', fontFamily: "'Poppins', sans-serif", fontSize: { xs: '.72rem', md: '.78rem' }, lineHeight: 1.7, maxWidth: 640, marginBottom: '1.8rem' }}
          >
            Keep your cloud environment secure, scalable, and cost-efficient with expert cloud support services designed for multi-cloud, hybrid, and on-premises landscapes.
          </Typography>
          <Box
            component="a"
            href="/resources/contact-us"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.5rem',
              padding: '.7rem 1.1rem',
              borderRadius: '2px',
              background: '#0B4C74',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '.62rem',
              fontFamily: "'Poppins', sans-serif",
              textDecoration: 'none',
              transition: 'background .2s ease',
              '&:hover': { background: '#d3ffb0', color: '#000000' },
            }}
          >
            Contact Us <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Box>

      {/* ── SEO Introduction ── */}
      <Container maxWidth={false} disableGutters sx={containerSx}>
        <Box sx={{ maxWidth: 900, mx: 'auto', padding: { xs: '3rem 1rem', md: '4rem 0' }, textAlign: 'center' }}>
          <Eyebrow>Introduction</Eyebrow>
          <Typography component="h2" sx={{ margin: '.7rem auto 1rem', font: "400 clamp(1.6rem, 3.2vw, 2.4rem)/1.05 Georgia, 'Times New Roman', serif", color: ink, maxWidth: 800 }}>
            Expert Cloud Support for AWS, Azure, Google Cloud, and Hybrid Environments
          </Typography>
          <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.72rem', lineHeight: 1.75, maxWidth: 640, margin: '0 auto' }}>
            Our cloud support services ensure your cloud infrastructure remains performant, secure, and cost-optimized. We provide comprehensive management including monitoring, optimization, security, backup, and infrastructure as code (IaC) support across all major cloud platforms.
          </Typography>
        </Box>
      </Container>

      {/* ── Offerings — 3 per row ── */}
      <Box sx={{ background: soft }}>
        <Container maxWidth={false} disableGutters sx={{ ...containerSx, paddingTop: { xs: '3.5rem', md: '5rem' }, paddingBottom: { xs: '3.5rem', md: '5rem' } }}>
          <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <Eyebrow>What We Offer</Eyebrow>
            <Typography component="h2" sx={{ margin: '.7rem auto 0', font: "400 clamp(1.8rem, 3.6vw, 3.6rem)/.98 Georgia, 'Times New Roman', serif", color: ink, maxWidth: 720 }}>
              Our Cloud Support Offerings
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: { xs: '1.2rem', md: '1.5rem' },
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
                  itemScope
                  itemType={`https://schema.org/${item.schemaType}`}
                >
                  <Box sx={cardSx} itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, marginBottom: '1rem', flexShrink: 0 }}>
                      <Icon size={20} color="#0B4C74" />
                    </Box>
                    <Typography itemProp="name" component="h3" sx={{ margin: '0 0 .55rem', font: "400 .92rem Georgia, 'Times New Roman', serif", color: ink, lineHeight: 1.25, minHeight: '2.4rem' }}>
                      {item.title}
                    </Typography>
                    <Typography itemProp="description" sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.66rem', lineHeight: 1.75, flexGrow: 1 }}>
                      {item.text}
                    </Typography>
                  </Box>
                </motion.div>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* ── How We Deliver Long-Term Value — image LEFT, cards RIGHT ── */}
      <Container maxWidth={false} disableGutters sx={{ ...containerSx, paddingTop: { xs: '3.5rem', md: '5rem' }, paddingBottom: { xs: '3.5rem', md: '5rem' } }}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Delivery</Eyebrow>
          <Typography component="h2" sx={{ margin: '.7rem auto 0', font: "400 clamp(1.8rem, 3.6vw, 3.6rem)/.98 Georgia, 'Times New Roman', serif", color: ink, maxWidth: 720 }}>
            How We Deliver Long-Term Value
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: { xs: '2rem', sm: '1.5rem', md: '2rem' },
            alignItems: 'stretch',
          }}
        >
          {/* Left — image */}
          <Box
            sx={{
              border: `1px solid ${line}`,
              borderRadius: '2px',
              overflow: 'hidden',
              background: '#fff',
              minHeight: { xs: 320, sm: 420, md: 500 },
            }}
          >
            <Box
              component="img"
              src={Image1}
              alt="Long-term cloud support value"
              sx={{ width: '100%', height: '100%', minHeight: 'inherit', objectFit: 'cover', display: 'block' }}
            />
          </Box>

          {/* Right — 4 cards in 2×2 */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: { xs: '1rem', md: '1.2rem' },
              alignItems: 'stretch',
            }}
          >
            {valueDelivery.map((item, i) => {
              const { Icon } = item;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  style={{ display: 'flex', width: '100%' }}
                >
                  <Box sx={cardSx}>
                    <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', background: soft, border: `1px solid ${line}`, marginBottom: '1rem', flexShrink: 0 }}>
                      <Icon size={20} color="#0B4C74" />
                    </Box>
                    <Typography component="h3" sx={{ margin: '0 0 .5rem', font: "400 .92rem Georgia, 'Times New Roman', serif", color: ink, lineHeight: 1.25, minHeight: '2.4rem' }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.66rem', lineHeight: 1.75, flexGrow: 1 }}>
                      {item.text}
                    </Typography>
                  </Box>
                </motion.div>
              );
            })}
          </Box>
        </Box>
      </Container>

      {/* ── Benefits + Impact Metrics ── */}
      <Box sx={{ background: soft }}>
        <Container maxWidth={false} disableGutters sx={{ ...containerSx, paddingTop: { xs: '3.5rem', md: '5rem' }, paddingBottom: { xs: '3.5rem', md: '5rem' } }}>
          <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <Eyebrow>Benefits</Eyebrow>
            <Typography component="h2" sx={{ margin: '.7rem auto 0', font: "400 clamp(1.8rem, 3.6vw, 3.6rem)/.98 Georgia, 'Times New Roman', serif", color: ink, maxWidth: 720 }}>
              Benefits of Professional Cloud Support
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: '2rem', md: '2.5rem' },
              alignItems: 'stretch',
            }}
          >
            {/* Left — text */}
            <Box>
              <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.72rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                Our cloud support services deliver significant business benefits including reduced cloud costs, improved performance and reliability, enhanced security and compliance, proactive issue prevention, and optimized resource utilization.
              </Typography>
              <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.72rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                By implementing comprehensive cloud management strategies and leveraging automation and best practices, we help organizations maximize their cloud investment, ensure business continuity, and achieve digital transformation goals.
              </Typography>
              <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.72rem', lineHeight: 1.8, marginBottom: 0 }}>
                Our expertise spans across various cloud platforms including AWS, Azure, Google Cloud, hybrid environments, and multi-cloud architectures across different industries and use cases.
              </Typography>
            </Box>

            {/* Right — Impact Metrics card */}
            <Box sx={{ background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: { xs: '1.8rem 1.4rem', md: '2.2rem' } }}>
              <Eyebrow>Impact Metrics</Eyebrow>
              <Typography component="h3" sx={{ margin: '.6rem 0 1.4rem', font: "400 clamp(1.3rem, 2.2vw, 1.7rem)/1.15 Georgia, 'Times New Roman', serif", color: ink }}>
                Cloud Support Impact Metrics
              </Typography>

              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: { xs: '.8rem', md: '1rem' } }}>
                {impactMetrics.map((metric, i) => (
                  <Box
                    key={i}
                    sx={{
                      padding: '1rem .8rem',
                      border: `1px solid ${line}`,
                      borderRadius: '2px',
                      background: soft,
                      textAlign: 'center',
                    }}
                  >
                    <Typography sx={{ margin: 0, color: ink, font: "400 clamp(1.1rem, 1.8vw, 1.5rem)/1 Georgia, 'Times New Roman', serif" }}>
                      {metric.value}
                    </Typography>
                    <Typography sx={{ margin: '.35rem 0 0', color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.55rem', letterSpacing: '.05em', textTransform: 'uppercase' }}>
                      {metric.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Cloud Platforms & Technologies — content LEFT, image RIGHT ── */}
      <Container maxWidth={false} disableGutters sx={{ ...containerSx, paddingTop: { xs: '3.5rem', md: '5rem' }, paddingBottom: { xs: '3.5rem', md: '5rem' } }}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Technology Stack</Eyebrow>
          <Typography component="h2" sx={{ margin: '.7rem auto 0', font: "400 clamp(1.8rem, 3.6vw, 3.6rem)/.98 Georgia, 'Times New Roman', serif", color: ink, maxWidth: 720 }}>
            Cloud Platforms &amp; Technologies We Support
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: { xs: '2rem', sm: '1.5rem', md: '2rem' },
            alignItems: 'stretch',
          }}
        >
          {/* Left — 6 tech cards in 2×3 grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: { xs: '1rem', md: '1.2rem' },
              alignItems: 'stretch',
            }}
          >
            {cloudTech.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{ display: 'flex', width: '100%' }}
              >
                <Box sx={cardSx}>
                  <Typography component="h3" sx={{ margin: '0 0 .5rem', font: "400 .88rem Georgia, 'Times New Roman', serif", color: ink, lineHeight: 1.25, minHeight: '2.2rem' }}>
                    {tech.category}
                  </Typography>
                  <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.64rem', lineHeight: 1.7, flexGrow: 1 }}>
                    {tech.tech}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Right — image */}
          <Box
            sx={{
              border: `1px solid ${line}`,
              borderRadius: '2px',
              overflow: 'hidden',
              background: '#fff',
              minHeight: { xs: 320, sm: 480, md: 540 },
            }}
          >
            <Box
              component="img"
              src={Image2}
              alt="Cloud platforms and technologies we support"
              sx={{ width: '100%', height: '100%', minHeight: 'inherit', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Box>
      </Container>

      {/* ── CTA Section ── */}
      <Box sx={{ background: soft, borderTop: `1px solid ${line}` }}>
        <Container maxWidth={false} disableGutters sx={containerSx}>
          <Box sx={{ maxWidth: 800, mx: 'auto', padding: { xs: '4rem 1rem', md: '5rem 0' }, textAlign: 'center' }}>
            <Eyebrow>Get Started</Eyebrow>
            <Typography component="h2" sx={{ margin: '.7rem auto 1rem', font: "400 clamp(1.8rem, 3.6vw, 3rem)/1.05 Georgia, 'Times New Roman', serif", color: ink }}>
              Optimize Your Cloud Environment with Expert Support
            </Typography>
            <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.72rem', lineHeight: 1.75, marginBottom: '1.8rem' }}>
              Contact our cloud support experts to discuss your cloud management requirements, implement comprehensive support strategies, and ensure your cloud infrastructure remains secure, performant, and cost-optimized.
            </Typography>
            <Box
              component="a"
              href="/resources/contact-us"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '.5rem',
                padding: '.7rem 1.1rem',
                borderRadius: '2px',
                background: '#0B4C74',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '.62rem',
                fontFamily: "'Poppins', sans-serif",
                textDecoration: 'none',
                transition: 'background .2s ease',
                '&:hover': { background: '#d3ffb0', color: '#000000' },
              }}
            >
              Request Cloud Support Consultation <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CloudSupport;