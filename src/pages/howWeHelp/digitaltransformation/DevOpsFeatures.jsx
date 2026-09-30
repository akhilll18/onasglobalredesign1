import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Shield, Workflow, LifeBuoy, Infinity as InfinityIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Shared design
import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  SubHeading,
  Body,
  cardSx,
  containerSx,
  ink, muted, line, soft, lime,
} from '../../../theme/theme';

import Image3 from '../../../assets/images/howWeHelp/digitaltrans/productengg/img3.jpg';

const features = [
  {
    title: 'Comprehensive DevOps Automation',
    description: 'All the necessary DevOps tools in a single platform paired with specialized AI agents.',
    Icon: InfinityIcon,
  },
  {
    title: 'Real-time AI Help Desk',
    description: 'Resolve tickets in real time with specialized DevOps AI agents—collaborating with you every step.',
    Icon: LifeBuoy,
  },
  {
    title: 'Outcome-Focused DevOps Workflows',
    description: 'Elevate DevOps teams from automating granular tasks to composing outcomes with Agentic flows.',
    Icon: Workflow,
  },
  {
    title: 'Security & Compliance',
    description: 'Security that is built in and not bolted on. Compliance in days not months.',
    Icon: Shield,
  },
];

const platformFeaturesLeft = [
  { label: 'CI/CD Automation', text: 'Automate build, test, and deployment pipelines with intelligent workflow orchestration and parallel execution.' },
  { label: 'Infrastructure as Code', text: 'Manage cloud resources with Terraform, AWS CloudFormation, and Azure ARM templates.' },
  { label: 'Container Orchestration', text: 'Deploy and manage containers with Kubernetes, Docker, and cloud-native services.' },
];

const platformFeaturesRight = [
  { label: 'Monitoring & Observability', text: 'Real-time monitoring, log aggregation, and performance analytics with Prometheus and Grafana.' },
  { label: 'DevSecOps', text: 'Built-in security scanning, vulnerability management, and compliance automation.' },
  { label: 'Cloud Cost Optimization', text: 'FinOps integration for cloud spend management and cost optimization.' },
];

export default function DevOpsFeatures() {
  const seoData = {
    title: 'DevOps Automation Platform with AI | Enterprise CI/CD & Security',
    description: 'Enterprise DevOps platform with AI agents, automated CI/CD pipelines, real-time AI help desk, and built-in security compliance for modern engineering teams.',
    keywords: 'DevOps platform, DevOps automation, CI/CD pipeline, AI DevOps, DevOps as a Service, continuous integration, continuous deployment, DevOps security, infrastructure as code',
    canonical: 'https://onasglobal.com/devops-platform',
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI-Powered DevOps Platform",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Cloud",
    "offers": { "@type": "Offer", "category": "SaaS", "price": "0", "priceCurrency": "USD" },
    "featureList": [
      "Automated CI/CD Pipelines",
      "Real-time AI DevOps Assistance",
      "Security & Compliance Automation",
      "Infrastructure as Code",
      "Container Orchestration",
      "Monitoring & Observability",
    ],
  };

  return (
    <PageShell>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:title" content="AI-Powered DevOps Platform | Accelerate Software Delivery" />
        <meta property="og:description" content="Transform your DevOps with AI automation, real-time assistance, and enterprise-grade security." />
        <meta property="og:image" content="https://onasglobal.com/devops-platform-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered DevOps Platform | Accelerate Software Delivery" />
        <meta name="twitter:description" content="Transform your DevOps with AI automation, real-time assistance, and enterprise-grade security." />
        <meta name="twitter:image" content="https://onasglobal.com/devops-platform-twitter-card.jpg" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="DevOps Platform Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="content-language" content="en" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Main section — image left + 2×2 cards right */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' , mt: { xs: '3rem', md: '5rem' } }}>
          <Eyebrow>DevOps Platform</Eyebrow>
          <SectionHeading>AI Powered DevOps Built for Today&apos;s Engineering Teams</SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            Transform your software delivery with our enterprise DevOps platform featuring automated CI/CD pipelines, real-time AI assistance, and built-in security compliance. Accelerate deployments, improve reliability, and streamline DevOps workflows with AI-powered automation.
          </Body>
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
              minHeight: { xs: 320, sm: 480, md: 560 },
            }}
          >
            <Box
              component="img"
              src={Image3}
              alt="AI-powered DevOps platform"
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
            {features.map((feature, index) => {
              const { Icon } = feature;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
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
                      <Icon size={20} color="#0B4C74" />
                    </Box>
                    <SubHeading sx={{ marginBottom: '.5rem' }}>{feature.title}</SubHeading>
                    <Body sx={{ flexGrow: 1 }}>{feature.description}</Body>
                  </Box>
                </motion.div>
              );
            })}
          </Box>
        </Box>
      </Section>

      {/* Platform Features */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Platform Features</Eyebrow>
          <SectionHeading>Enterprise DevOps Platform Features</SectionHeading>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: '1rem', md: '1.2rem' },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {platformFeaturesLeft.map((item, idx) => (
              <Box key={idx} sx={cardSx}>
                <SubHeading sx={{ marginBottom: '.5rem' }}>{item.label}</SubHeading>
                <Body>{item.text}</Body>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {platformFeaturesRight.map((item, idx) => (
              <Box key={idx} sx={cardSx}>
                <SubHeading sx={{ marginBottom: '.5rem' }}>{item.label}</SubHeading>
                <Body>{item.text}</Body>
              </Box>
            ))}
          </Box>
        </Box>
      </Section>
    </PageShell>
  );
}