import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowForward } from '@mui/icons-material';

import {
  Boxes,
  Database,
  Cloud,
  Factory,
  Headphones,
  Lightbulb,
  Cpu,
  Box as LucideBox,
  Brain,
} from 'lucide-react';

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
  ink,
  muted,
  line,
  soft,
  lime,
} from '../../../theme/theme';

// Images
import ServiceNowHeroImage from '../../../assets/images/howWeHelp/ERP/sap/SAP.jpg';
import Image5 from '../../../assets/images/howWeHelp/ERP/sap/img5.jpg';
import Image6 from '../../../assets/images/howWeHelp/ERP/sap/img6.png';

// Portfolio card images
import PortfolioImg1 from '../../../assets/images/howWeHelp/ERP/sap/img5.jpg';
import PortfolioImg2 from '../../../assets/images/howWeHelp/ERP/sap/img6.png';
import PortfolioImg3 from '../../../assets/images/howWeHelp/ERP/sap/SAP.jpg';
import PortfolioImg4 from '../../../assets/images/howWeHelp/ERP/sap/img5.jpg';
import PortfolioImg5 from '../../../assets/images/howWeHelp/ERP/sap/img6.png';
import PortfolioImg6 from '../../../assets/images/howWeHelp/ERP/sap/SAP.jpg';
import PortfolioImg7 from '../../../assets/images/howWeHelp/ERP/sap/img5.jpg';
import PortfolioImg8 from '../../../assets/images/howWeHelp/ERP/sap/img6.png';
import PortfolioImg9 from '../../../assets/images/howWeHelp/ERP/sap/SAP.jpg';

// 👇 same navy as the top navbar menu items
const NAVY = '#0B4C74';

const ServiceNow = () => {
  const slides = [ServiceNowHeroImage, Image5, Image6];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const offerings = [
    {
      Icon: Boxes,
      title: 'ServiceNow Implementation',
      text: 'ONAS helps organizations implement ServiceNow with structured workflows, scalable configurations, role-based processes, and business-focused service management practices.',
      image: PortfolioImg1,
    },
    {
      Icon: Database,
      title: 'IT Service Management (ITSM)',
      text: 'Transform IT service delivery with Incident, Problem, Change, Request, Knowledge, and Service Catalog capabilities designed to improve operational visibility and user experience.',
      image: PortfolioImg2,
    },
    {
      Icon: Cloud,
      title: 'ServiceNow Integration',
      text: 'Connect ServiceNow with enterprise applications, cloud platforms, identity systems, monitoring tools, and business applications through APIs and integration frameworks.',
      image: PortfolioImg3,
    },
    {
      Icon: Factory,
      title: 'IT Operations Management (ITOM)',
      text: 'Improve infrastructure and application visibility through ServiceNow ITOM capabilities including discovery, service mapping, event management, and operational workflows.',
      image: PortfolioImg4,
    },
    {
      Icon: Headphones,
      title: 'ServiceNow Managed Services',
      text: 'ONAS provides ongoing ServiceNow support covering incident resolution, platform administration, workflow enhancements, configuration support, and continuous optimization.',
      image: PortfolioImg5,
    },
    {
      Icon: Lightbulb,
      title: 'ServiceNow Consulting & Advisory',
      text: 'Our ServiceNow consulting approach helps organizations define platform strategies, identify automation opportunities, optimize workflows, and build a practical roadmap for service transformation.',
      image: PortfolioImg6,
    },
    {
      Icon: Cpu,
      title: 'Custom Applications & Workflows',
      text: 'Build business applications and automated workflows on the ServiceNow platform to address organization-specific processes and reduce manual operational activities.',
      image: PortfolioImg7,
    },
    {
      Icon: LucideBox,
      title: 'Customer Service Management',
      text: 'Improve customer service operations with connected case management, self-service experiences, workflow automation, knowledge management, and cross-functional service processes.',
      image: PortfolioImg8,
    },
    {
      Icon: Brain,
      title: 'Automation & AI',
      text: 'Use ServiceNow automation and AI capabilities to streamline repetitive processes, improve service experiences, surface actionable insights, and support faster decision-making.',
      image: PortfolioImg9,
    },
  ];

  const lifecycleBlocks = [
    {
      title: 'Implementation & Consulting Services',
      image: Image5,
      paragraphs: [
        'ONAS delivers structured ServiceNow implementation services covering business requirement analysis, platform configuration, workflow design, roles, service catalogs, and process alignment.',
        'Our consulting approach focuses on translating business requirements into scalable ServiceNow solutions while maintaining maintainable configurations and clear governance practices.',
        'We support organizations through requirement gathering, solution design, configuration, testing, user acceptance, deployment, and post-go-live support.',
      ],
    },
    {
      title: 'Integration & Optimization Services',
      image: Image6,
      paragraphs: [
        'ONAS integrates ServiceNow with enterprise systems, cloud platforms, identity providers, monitoring solutions, and business applications using APIs and integration technologies.',
        'We optimize existing ServiceNow environments by reviewing workflows, reducing manual activities, improving service visibility, and identifying opportunities for automation.',
        'Our optimization services also include platform enhancements, workflow improvements, reporting, dashboards, and continuous process refinement.',
      ],
    },
  ];

  const faqBlocks = [
    {
      title: 'ServiceNow Implementation',
      paragraphs: [
        'ONAS supports ServiceNow implementation from requirements and solution design through configuration, testing, deployment, and post-go-live support.',
        'Implementation can be aligned with the organization’s existing IT service management processes and future automation requirements.',
      ],
    },
    {
      title: 'IT Service Management',
      paragraphs: [
        'ServiceNow ITSM can centralize Incident, Problem, Change, Request, Knowledge, and Service Catalog processes.',
        'ONAS helps organizations structure these workflows to improve service visibility, process consistency, and user experience.',
      ],
    },
    {
      title: 'IT Operations Management',
      paragraphs: [
        'ONAS supports ServiceNow ITOM capabilities for improving infrastructure and application visibility.',
        'Services can include discovery, service mapping, event management, operational workflows, and integration with existing monitoring platforms.',
      ],
    },
    {
      title: 'Customer Service Management',
      paragraphs: [
        'ServiceNow CSM helps organizations manage customer cases and service interactions through connected workflows and self-service capabilities.',
        'ONAS can help configure customer service workflows, knowledge capabilities, case management, and integrations with existing business systems.',
      ],
    },
    {
      title: 'HR Service Delivery',
      paragraphs: [
        'ServiceNow HRSD can help organizations digitize employee service processes and provide centralized employee self-service experiences.',
        'ONAS can support HR workflow configuration, service catalogs, employee requests, knowledge management, and process automation.',
      ],
    },
    {
      title: 'Integration & Automation',
      paragraphs: [
        'ONAS integrates ServiceNow with enterprise applications and external platforms using APIs and supported integration approaches.',
        'Automation opportunities can be identified across service management, operations, employee services, customer services, and internal business workflows.',
      ],
    },
  ];

  const keywordColumns = [
    [
      'ServiceNow implementation services',
      'ServiceNow consulting services',
      'ServiceNow implementation partner',
      'ServiceNow platform consulting',
      'ServiceNow ITSM services',
      'ServiceNow Incident Management',
      'ServiceNow Problem Management',
      'ServiceNow Change Management',
      'ServiceNow Service Catalog',
      'ServiceNow Knowledge Management',
      'ServiceNow workflow automation',
      'ServiceNow service management',
    ],
    [
      'ServiceNow ITOM services',
      'ServiceNow Discovery',
      'ServiceNow Service Mapping',
      'ServiceNow Event Management',
      'ServiceNow CSM',
      'ServiceNow Customer Service Management',
      'ServiceNow HRSD',
      'ServiceNow HR Service Delivery',
      'ServiceNow integration services',
      'ServiceNow API integration',
      'ServiceNow managed services',
      'ServiceNow platform support',
    ],
    [
      'ServiceNow automation',
      'ServiceNow custom applications',
      'ServiceNow custom workflows',
      'ServiceNow digital transformation',
      'ServiceNow AI automation',
      'ServiceNow reporting and dashboards',
      'ServiceNow platform optimization',
      'ServiceNow upgrade support',
      'ServiceNow governance',
      'ServiceNow roadmap',
      'ONAS ServiceNow services',
      'ONAS Global ServiceNow consulting',
    ],
  ];

  return (
    <PageShell>
      <Helmet>
        <title>
          ServiceNow Implementation, ITSM, ITOM & Managed Services | ONAS Global
        </title>

        <meta
          name="description"
          content="ONAS Global provides ServiceNow consulting, implementation, ITSM, ITOM, CSM, HRSD, integration, workflow automation, managed services, and ServiceNow platform optimization."
        />

        <meta
          name="keywords"
          content="ServiceNow implementation, ServiceNow consulting, ServiceNow ITSM, ServiceNow ITOM, ServiceNow CSM, ServiceNow HRSD, ServiceNow integration, ServiceNow automation, ServiceNow managed services, ONAS Global ServiceNow"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'ServiceNow Services',
            description:
              'ServiceNow consulting, implementation, ITSM, ITOM, integration, automation, customer service, HR service delivery, and managed services from ONAS Global.',
            url: 'https://www.onasglobal.com/servicenow-services',
            provider: {
              '@type': 'Organization',
              name: 'ONAS Global',
              url: 'https://www.onasglobal.com',
              logo: 'https://www.onasglobal.com/logo.png',
            },
            areaServed: {
              '@type': 'Country',
              name: 'Global',
            },
          })}
        </script>

        <meta
          property="og:title"
          content="ServiceNow Implementation, ITSM, ITOM & Managed Services | ONAS Global"
        />

        <meta
          property="og:description"
          content="ONAS Global delivers ServiceNow consulting, implementation, ITSM, ITOM, integration, automation, CSM, HRSD, and managed services."
        />

        <meta property="og:image" content={ServiceNowHeroImage} />
        <meta property="og:type" content="website" />

        <link
          rel="canonical"
          href="https://www.onasglobal.com/servicenow-services"
        />
      </Helmet>

      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 480, md: 560 },
          padding: {
            xs: '5rem 1rem 3rem',
            md: '7rem 2.5rem 4rem',
          },
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
            overflow: 'hidden',
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(8,49,46,.94) 0%, rgba(8,49,46,.72) 55%, rgba(8,49,46,.85) 100%)',
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
              transition={{
                duration: 1.1,
                ease: 'easeInOut',
              }}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${slides[currentSlide]})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            />
          </AnimatePresence>
        </Box>

        <Container
          maxWidth={false}
          disableGutters
          sx={{
            ...containerSx,
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
          }}
        >
          <Eyebrow sx={{ color: lime }}>ServiceNow Services</Eyebrow>

          <Typography
            component="h1"
            sx={{
              ...heroHeadingSx,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            ServiceNow Services for Connected, Automated & Efficient Operations
          </Typography>

          <Body
            sx={{
              color: 'rgba(255,255,255,.82) !important',
              maxWidth: 780,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '1.8rem',
            }}
          >
            ONAS Global helps organizations modernize service operations with
            ServiceNow consulting, implementation, ITSM, ITOM, integration,
            workflow automation, customer service, employee service delivery,
            and ongoing platform support.
          </Body>

          <LimeButton href="/resources/contact-us">
            Contact Us <ArrowForward sx={{ fontSize: 14 }} />
          </LimeButton>
        </Container>
      </Box>

      {/* Full Lifecycle — white bg */}
      <Section sx={{ background: '#ffffff' }}>
        <Box
          sx={{
            textAlign: 'center',
            marginBottom: '1.8rem',
          }}
        >
          <Eyebrow>Full Lifecycle</Eyebrow>

          <SectionHeading sx={{ color: NAVY }}>Full Lifecycle ServiceNow Services</SectionHeading>
        </Box>

        <Box
          sx={{
            background: '#fff',
            border: `1px solid ${line}`,
            borderRadius: '2px',
            padding: {
              xs: '1.4rem 1.1rem',
              md: '1.6rem 1.8rem',
            },
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: '1fr 1fr',
              },
              gap: {
                xs: '1rem',
                md: '1.8rem',
              },
            }}
          >
            <Box>
              <Body
                sx={{
                  margin: '0 0 .6rem',
                  color: `${ink} !important`,
                }}
              >
                <strong>Strategy & Consulting:</strong> ServiceNow roadmap,
                business requirements, process assessment, platform strategy,
                and solution planning.
              </Body>

              <Body sx={{ margin: 0 }}>
                <strong>Implementation:</strong> Platform configuration,
                workflows, service catalogs, roles, testing, deployment, and
                post-go-live support.
              </Body>
            </Box>

            <Box>
              <Body
                sx={{
                  margin: '0 0 .6rem',
                  color: `${ink} !important`,
                }}
              >
                <strong>Integration:</strong> Enterprise application
                integration, APIs, cloud platforms, identity systems, and
                monitoring tools.
              </Body>

              <Body sx={{ margin: 0 }}>
                <strong>Optimization:</strong> Managed services, workflow
                automation, platform enhancements, reporting, dashboards, and
                continuous improvement.
              </Body>
            </Box>
          </Box>
        </Box>
      </Section>

      {/* Portfolio — with images on each card, white bg */}
      <Section sx={{ background: '#ffffff' }}>
        <Box
          sx={{
            textAlign: 'center',
            marginBottom: '1.8rem',
          }}
        >
          <Eyebrow>Portfolio</Eyebrow>

          <SectionHeading sx={{ color: NAVY }}>
            Comprehensive ServiceNow Services Portfolio
          </SectionHeading>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: {
              xs: '1rem',
              md: '1.2rem',
            },
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
              >
                <Box
                  sx={{
                    ...cardSx,
                    padding: 0,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Card image */}
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: '100%',
                      height: 180,
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />

                  {/* Card content */}
                  <Box
                    sx={{
                      padding: { xs: '1rem', md: '1.2rem' },
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                    }}
                  >
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
                      }}
                    >
                      <Icon size={20} color="#257a68" />
                    </Box>

                    <SubHeading sx={{ marginBottom: '.5rem', color: NAVY }}>
                      {item.title}
                    </SubHeading>

                    <Body sx={{ flexGrow: 1 }}>{item.text}</Body>
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Section>

      {/* Lifecycle Management — alternating image/content, white bg */}
      <Section sx={{ background: '#ffffff' }}>
        <Box
          sx={{
            textAlign: 'center',
            marginBottom: '1.8rem',
          }}
        >
          <Eyebrow>Lifecycle</Eyebrow>

          <SectionHeading sx={{ color: NAVY }}>
            ServiceNow Service Lifecycle Management
          </SectionHeading>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '1.5rem', md: '2rem' },
          }}
        >
          {lifecycleBlocks.map((block, i) => {
            const isReversed = i % 2 === 1;

            return (
              <Box
                key={i}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  alignItems: 'stretch',
                  background: '#fff',
                  border: `1px solid ${line}`,
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                {/* Image — left on even, right on odd */}
                <Box
                  sx={{
                    order: { xs: 1, md: isReversed ? 2 : 1 },
                    minHeight: { xs: 220, md: 320 },
                    backgroundImage: `url(${block.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />

                {/* Content */}
                <Box
                  sx={{
                    order: { xs: 2, md: isReversed ? 1 : 2 },
                    padding: {
                      xs: '1.4rem 1.1rem',
                      md: '2rem 1.8rem',
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <SubHeading
                    sx={{
                      marginBottom: '1rem',
                      borderBottom: `1px solid ${line}`,
                      paddingBottom: '.5rem',
                      color: NAVY,
                    }}
                  >
                    {block.title}
                  </SubHeading>

                  {block.paragraphs.map((paragraph, idx) => (
                    <Body
                      key={idx}
                      sx={{
                        margin: '0 0 .7rem',
                      }}
                    >
                      {paragraph}
                    </Body>
                  ))}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Section>

      {/* FAQ — white bg */}
      <Section sx={{ background: '#ffffff' }}>
        <Box
          sx={{
            textAlign: 'center',
            marginBottom: '1.8rem',
          }}
        >
          <Eyebrow>FAQ</Eyebrow>

          <SectionHeading sx={{ color: NAVY }}>
            Frequently Asked Questions About ServiceNow Services
          </SectionHeading>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: {
              xs: '1rem',
              md: '1.2rem',
            },
          }}
        >
          {faqBlocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box sx={cardSx}>
                <SubHeading
                  sx={{
                    marginBottom: '1rem',
                    borderBottom: `1px solid ${line}`,
                    paddingBottom: '.5rem',
                    color: NAVY,
                  }}
                >
                  {block.title}
                </SubHeading>

                {block.paragraphs.map((paragraph, idx) => (
                  <Body
                    key={idx}
                    sx={{
                      margin: '0 0 .6rem',
                    }}
                  >
                    {paragraph}
                  </Body>
                ))}
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>
    </PageShell>
  );
};

export default ServiceNow;