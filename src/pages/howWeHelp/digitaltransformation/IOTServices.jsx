import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Wifi,
  Smartphone,
  Cloud,
  Zap,
  Database,
  Layers,
  Compass,
  GitBranch,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Shared design
import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  SubHeading,
  Body,
  LimeButton,
  cardSx,
  containerSx,
  heroHeadingSx,
  ink, muted, line, soft, lime,
} from '../../../theme/theme';

// Images
import Image1 from '../../../assets/images/howWeHelp/digitaltrans/dataengganalytics/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/digitaltrans/dataengganalytics/img2.jpg';

const IOTServices = () => {
  const baseUrl = window.location.origin;
  const pageUrl = `${baseUrl}/services/iot-application-development`;

  const seoData = {
    title: 'IoT Application Development Services | IoT Solutions & Consulting 2024',
    description: 'Professional IoT application development services: IoT ecosystems, mobile apps, data analytics, device integration for smart manufacturing, healthcare, and smart cities.',
    keywords: 'IoT development, IoT solutions, IoT applications, IoT consulting, IoT ecosystem, IoT data analytics, IoT integration, smart devices, IoT platforms, Azure IoT, AWS IoT, IoT security',
    canonicalUrl: pageUrl,
    ogImage: Image1,
    twitterImage: Image1,
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IoT Application Development Services",
    "description": "Professional IoT development services for smart ecosystems, device integration, data analytics, and mobile applications",
    "provider": { "@type": "Organization", "name": "ONAS", "url": baseUrl, "logo": `${baseUrl}/logo.png` },
    "serviceType": ["IoT Ecosystem Development", "IoT Mobile & Web Applications", "IoT Data & Analytics", "Device Integration & Connectivity"],
    "areaServed": { "@type": "Country", "name": "Global" },
    "offers": { "@type": "Offer", "category": "TechnologyServices" }
  };

  const offerings = [
    {
      icon: <Wifi size={20} color="#0B4C74" />,
      title: 'IoT Ecosystem Development',
      text: `Design and develop interconnected IoT systems across devices and platforms
Leverage IoT platforms like Azure IoT Hub, AWS IoT, Arduino, NodeMCU
Integrate sensors for temperature, humidity, motion, light, and more
Enable secure and scalable device communication`,
    },
    {
      icon: <Smartphone size={20} color="#0B4C74" />,
      title: 'IoT Mobile & Web Applications',
      text: `Build mobile apps and web dashboards for real-time IoT data visualization
Enable remote monitoring and device management
Develop using Node.js, Python, .NET MAUI, Flutter for cross-platform support
Integrate actionable insights into enterprise workflows`,
    },
    {
      icon: <Cloud size={20} color="#0B4C74" />,
      title: 'IoT Data & Analytics',
      text: `Collect, process, and analyze IoT sensor data
Leverage predictive analytics and actionable insights
Integrate with cloud services for scalability and real-time decision-making
Support industry use cases like smart manufacturing, wearables, and smart buildings`,
    },
    {
      icon: <Zap size={20} color="#0B4C74" />,
      title: 'Device Integration & Connectivity',
      text: `Enable Bluetooth, NFC, WiFi, 4G LTE, and 5G connectivity
Support communication protocols like Modbus, BLE, TCP/IP, UDP, and Beacons
Ensure secure device onboarding and lifecycle management
Optimize connectivity for performance and reliability`,
    },
  ];

  const valueDelivery = [
    {
      icon: <Compass size={20} color="#0B4C74" />,
      title: 'End-to-End IoT Development',
      text: 'From IoT ecosystem design to mobile apps, dashboards, and analytics—complete end-to-end delivery.',
    },
    {
      icon: <Database size={20} color="#0B4C74" />,
      title: 'Cross-Industry Expertise',
      text: 'IoT solutions tailored for manufacturing, healthcare, logistics, wearables, smart buildings, and more.',
    },
    {
      icon: <GitBranch size={20} color="#0B4C74" />,
      title: 'Scalable & Secure Solutions',
      text: 'Secure, reliable, and scalable IoT applications with encryption, authentication, and zero-trust architecture.',
    },
    {
      icon: <Layers size={20} color="#0B4C74" />,
      title: 'Innovation-Driven Approach',
      text: 'Leverage latest technologies, sensors, protocols, and platforms to deliver cutting-edge IoT solutions.',
    },
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
        <meta property="og:title" content="IoT Application Development Services | Smart IoT Solutions" />
        <meta property="og:description" content="Build smart IoT ecosystems with professional IoT application development services for enterprises and industries." />
        <meta property="og:image" content={seoData.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IoT Application Development Services | IoT Solutions" />
        <meta name="twitter:description" content="Professional IoT development services for smart devices, sensors, and connected ecosystems." />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS IoT Solutions" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Hero */}
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
            backgroundImage: `url(${Image1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(11,76,116,.94) 0%, rgba(11,76,116,.72) 55%, rgba(11,76,116,.85) 100%)',
              zIndex: 1,
            },
          }}
        />

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Eyebrow sx={{ color: lime }}>IoT Development</Eyebrow>
          <Typography component="h1" sx={{ ...heroHeadingSx, marginLeft: 'auto', marginRight: 'auto' }}>
            IoT Application Development Services
          </Typography>
          <Body sx={{ color: 'rgba(255,255,255,.82) !important', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto', marginBottom: '1.8rem' }}>
            As a premier IoT software development company, we help you build smart ecosystems and tailored IoT solutions by integrating your vision into the software ecosystem. Enhance device communication, real-time visibility, and actionable insights across industries.
          </Body>
          <LimeButton href="/resources/contact-us">
            Contact Us
          </LimeButton>
        </Container>
      </Box>

      {/* Offerings */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>What We Offer</Eyebrow>
          <SectionHeading>Our IoT Development Offerings</SectionHeading>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
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
                <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', background: soft, border: `1px solid ${line}`, marginBottom: '1rem', flexShrink: 0 }}>
                  {item.icon}
                </Box>
                <SubHeading sx={{ marginBottom: '.5rem' }}>{item.title}</SubHeading>
                <Body sx={{ whiteSpace: 'pre-line', flexGrow: 1 }}>{item.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* Why Choose ONAS */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Why Us</Eyebrow>
          <SectionHeading>Why Choose ONAS for IoT Development?</SectionHeading>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: { xs: '2rem', md: '2rem' },
            alignItems: 'stretch',
          }}
        >
          <Box>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '1.6rem', maxWidth: 520 }}>
              From end-to-end IoT development to cross-industry expertise, we bring the innovation, security, and scale your connected ecosystem needs. Every solution is engineered around your business outcomes.
            </Body>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
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
                    <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, marginBottom: '1rem', flexShrink: 0 }}>
                      {item.icon}
                    </Box>
                    <SubHeading sx={{ marginBottom: '.5rem' }}>{item.title}</SubHeading>
                    <Body sx={{ flexGrow: 1 }}>{item.text}</Body>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>

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
              src={Image2}
              alt="IoT development infrastructure"
              sx={{ width: '100%', height: '100%', minHeight: 'inherit', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Box>
      </Section>

      {/* Technology Stack + Application Areas */}
      <Section>
        <Box
          sx={{
            background: '#fff',
            border: `1px solid ${line}`,
            borderRadius: '2px',
            padding: { xs: '1.6rem 1.2rem', md: '2.2rem 1.8rem' },
          }}
        >
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.5fr 1fr' }, gap: '2rem' }}>
            <Box>
              <Eyebrow>IoT Technology Stack &amp; Expertise</Eyebrow>
              <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.8rem', marginTop: '.8rem' }}>
                We utilize cutting-edge IoT technologies including Azure IoT Hub, AWS IoT Core, Google Cloud IoT, Arduino, Raspberry Pi, and various sensor technologies. Our expertise covers the full IoT stack from edge computing to cloud analytics.
              </Body>
              <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.8rem' }}>
                From industrial IoT (IIoT) to consumer applications, we build scalable, secure, and reliable IoT solutions that deliver actionable insights and business value.
              </Body>
              <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, margin: 0 }}>
                Our IoT development services include custom firmware, mobile applications, web dashboards, data analytics, and integration with enterprise systems.
              </Body>
            </Box>
            <Box>
              <Eyebrow>IoT Application Areas</Eyebrow>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.5rem', marginTop: '.8rem' }}>
                {[
                  'Smart Manufacturing & Industry 4.0',
                  'Healthcare & Medical Devices',
                  'Smart Cities & Infrastructure',
                  'Agriculture & Environmental Monitoring',
                  'Retail & Supply Chain',
                  'Energy Management & Smart Grid',
                ].map((area) => (
                  <Box key={area} sx={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: ink, flexShrink: 0 }} />
                    <Body sx={{ fontSize: '.68rem', lineHeight: 1.6, margin: 0 }}>
                      {area}
                    </Body>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Section>
    </PageShell>
  );
};

export default IOTServices;