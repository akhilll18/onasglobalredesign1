import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, Check } from '@mui/icons-material';

import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  Body,
  cardSx,
  ink, muted, line, soft, cream, lime,
} from '@/theme/theme';

import MA1 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Mobile apps/mobileappdev-1.jpg';
import MA2 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Mobile apps/mobileappdev-2.jpg';
import MA3 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Mobile apps/mobileappdev-3.jpg';
import MA4 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Mobile apps/mobileappdev-4.jpg';
import MA5 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Mobile apps/mobileappdev-5.jpg';
import MA6 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Mobile apps/mobileappdev-6.jpg';
import MA7 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Mobile apps/mobileappdev-7.jpg';
import MA8 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Mobile apps/mobileappdev-8.jpg';
import MA9 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Mobile apps/mobileappdev-9.jpg';

export default function MobileAppDevelopment() {
  const eyebrow = 'Custom mobile product engineering';
  const title = 'Mobile apps made around your users and workflows';
  const heroText = 'Design and develop mobile applications that help people get things done. We work across product strategy, iOS and Android engineering, integrations, release, and ongoing improvement.';
  const heroCta = 'Plan your mobile app';
  const heroImage = MA1;
  const heroImageAlt = 'Mobile application displayed on a smartphone';
  const stats = [
    { value: 'iOS + Android', label: 'Native and cross-platform options' },
    { value: 'Product-first', label: 'Designed around real tasks' },
    { value: 'End to end', label: 'From discovery through support' },
  ];

  const overviewEyebrow = 'A mobile team for the full product journey';
  const overviewTitle = 'Start with the job your app needs to do';
  const overviewText = [
    'A successful mobile app is shaped by more than its screens. It depends on clear user journeys, considered platform choices, dependable backend services, and a release process that supports ongoing change.',
    'ONAS can help at the start of a new product or join an existing team to extend, modernize, and maintain a mobile experience. We help you weigh native, cross-platform, and hybrid approaches against your specific constraints.',
  ];
  const overviewImage = MA2;
  const overviewImageAlt = 'Team reviewing a mobile product on a laptop';

  const challengeEyebrow = 'Why mobile products stall';
  const challengeTitle = 'A promising idea needs more than a quick build';
  const challengeIntro = 'Choosing an approach before understanding the users and operating environment can create expensive compromises later.';
  const challenges = [
    { title: 'The app misses real workflows', text: 'A feature list alone may not reveal the context, interruptions, or accessibility needs of everyday use.' },
    { title: 'The platform choice is rushed', text: 'Native, cross-platform, and hybrid approaches each bring trade-offs that should fit the product.' },
    { title: 'Integrations become blockers', text: 'Identity, payments, EHR, ERP, and backend connections need early technical attention.' },
    { title: 'Launch is treated as the finish', text: 'Store review, observability, support, and future updates should be planned from the start.' },
  ];

  const servicesEyebrow = 'Mobile app development services';
  const servicesTitle = 'One partner from first sketch to ongoing care';
  const servicesIntro = 'Shape the engagement around what your product needs now, with a clear path for what comes next.';
  const services = [
    { title: 'Custom app development', text: 'Create customer, workforce, or enterprise apps for iOS and Android around your product goals.', image: MA3 },
    { title: 'Mobile modernization', text: 'Improve an established app, update its architecture, or plan a staged migration to a new platform.', image: MA4 },
    { title: 'Integration & operations', text: 'Connect mobile experiences to business systems and prepare for monitoring, support, and releases.', image: MA5 },
  ];

  const processEyebrow = 'From discovery to app store';
  const processTitle = 'A mobile app development process built for learning';
  const processIntro = 'A clear sequence helps the team validate assumptions early and keep the release path visible.';
  const process = [
    { number: '01', title: 'Discover', text: 'Understand users, jobs, devices, accessibility needs, and product outcomes.' },
    { number: '02', title: 'Choose', text: 'Select native, cross-platform, or hybrid based on experience and technical needs.' },
    { number: '03', title: 'Prototype & build', text: 'Validate the core journeys, then deliver a usable product in measured increments.' },
    { number: '04', title: 'Integrate & test', text: 'Verify device behavior, backend connections, security needs, and accessibility.' },
    { number: '05', title: 'Launch & learn', text: 'Prepare store releases, monitor app health, and prioritize improvements using feedback.' },
  ];

  const deliveryEyebrow = 'Native, cross-platform, or hybrid?';
  const deliveryTitle = 'Choose the delivery approach that fits the app';
  const deliveryIntro = 'There is no best choice for every product. Consider user experience, platform needs, team skills, and long-term support.';
  const deliveryOptions = [
    {
      label: 'Native development',
      title: 'Deep platform control',
      points: ['Useful when platform-specific APIs or interactions are central.', 'Separate iOS and Android implementations may require more platform capacity.', 'A strong fit when each platform experience needs distinct behavior.'],
      image: MA6,
    },
    {
      label: 'Cross-platform or hybrid',
      title: 'Shared delivery where it makes sense',
      points: ['Can reuse selected code and product logic across platforms.', 'Frameworks differ in rendering, integration, and platform behavior.', 'The right choice depends on your app, not on code reuse alone.'],
      image: MA7,
    },
  ];

  const comparisonEyebrow = 'Make the trade-offs explicit';
  const comparisonTitle = 'Native vs cross-platform vs hybrid';
  const comparisonIntro = 'A high-level guide for discovery. A real recommendation should account for your feature needs, team, existing systems, and maintenance horizon.';
  const comparisonHeaders = ['Consideration', 'Native', 'Cross-platform', 'Hybrid / web-based'];
  const comparisonRows = [
    ['User experience', 'Platform-specific UI and interaction', 'Shared approach with framework-specific UI', 'Web technologies inside a mobile container'],
    ['Code sharing', 'Limited across iOS and Android', 'Often possible for selected app layers', 'Web layer can be shared across platforms'],
    ['Device API access', 'Direct platform access', 'Framework APIs, plugins, and native modules', 'Plugins or native extensions may be needed'],
    ['Team skills', 'iOS and Android expertise', 'Framework and platform expertise', 'Web engineering plus mobile packaging'],
    ['Typical consideration', 'Maximum platform control', 'Balance shared delivery and mobile needs', 'Reuse web capabilities where requirements fit'],
    ['Decision driver', 'Platform-specific product needs', 'Shared product direction and app requirements', 'Existing web assets and simpler device needs'],
  ];

  const engagementEyebrow = 'How you can engage a mobile team';
  const engagementTitle = 'A team model that can grow with the app';
  const engagementIntro = 'Match the team shape to the stage of the product, then adapt as your roadmap develops.';
  const engagements = [
    { title: 'Fixed-scope MVP', subtitle: 'Test a clear product hypothesis', text: 'A defined first release focused on a small set of user journeys and explicit assumptions.' },
    { title: 'Dedicated product pod', subtitle: 'Build a continuing roadmap', text: 'A cross-functional team for product design, application development, and quality.' },
    { title: 'Staff augmentation', subtitle: 'Add skills to your team', text: 'Bring mobile engineers into your existing product and delivery process.' },
  ];

  const industriesEyebrow = 'Mobile products across sectors';
  const industriesTitle = 'Apps for people on the move';
  const industriesIntro = 'We consider the environments, devices, policies, and systems behind each mobile workflow.';
  const industries = ['Healthcare & wellness', 'Telemedicine & remote care', 'Education & learning', 'Retail & commerce', 'Finance & banking', 'Field service', 'Travel & hospitality', 'Enterprise operations'];

  const capabilitiesEyebrow = 'Capabilities that support real use';
  const capabilitiesTitle = 'The building blocks of a dependable mobile app';
  const capabilitiesIntro = 'Include what supports your user journeys today and leave room for what the product may need tomorrow.';
  const capabilities = ['Push notifications', 'Offline-aware workflows', 'In-app payments', 'Biometric authentication', 'Real-time updates', 'Wearables & IoT', 'HL7 / FHIR integrations', 'SSO & active directory', 'App Store & Play release'];

  const stackEyebrow = 'Mobile technology options';
  const stackTitle = 'A technology stack selected for your app';
  const stackIntro = 'We recommend tools based on platform requirements, in-house skills, product needs, and ongoing ownership.';
  const stack = [
    { title: 'Cross-platform', items: 'React Native · Flutter · .NET MAUI · Ionic' },
    { title: 'iOS & Android', items: 'Swift · SwiftUI · Kotlin · Jetpack Compose' },
    { title: 'App foundation', items: 'TypeScript · Dart · React · Expo' },
    { title: 'Backend & identity', items: 'REST · GraphQL · Firebase · OAuth · SSO' },
    { title: 'Data & integrations', items: 'PostgreSQL · managed cloud data · EHR / ERP APIs' },
    { title: 'Testing & release', items: 'Appium · XCTest · Detox · CI/CD · store pipelines' },
  ];



  return (
    <PageShell>
      <Box sx={{ position: 'relative', marginTop: { xs: '72px', sm: '76px', md: '92px', lg: '100px' }, minHeight: { xs: 480, md: 560 }, padding: { xs: '7rem 1rem 3rem', md: '9rem 2.5rem 4rem' }, display: 'flex', alignItems: 'center', overflow: 'hidden', background: ink, isolation: 'isolate' }}>
        {heroImage && (
          <Box
            component="img"
            src={heroImage}
            alt={heroImageAlt || title}
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              zIndex: -2,
            }}
          />
        )}
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.75) 100%)' }} />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.05fr .95fr' }, gap: { xs: '2rem', md: '3rem' }, alignItems: 'center', maxWidth: 1240, margin: '0 auto', width: '100%' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {eyebrow && <Eyebrow sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)' }}>{eyebrow}</Eyebrow>}
            <Typography component="h1" sx={{ margin: '.5rem 0 1.4rem', font: "400 clamp(1.5rem, 3.2vw, 2.4rem)/1.05 Georgia, 'Times New Roman', serif", color: '#fff', maxWidth: 640, letterSpacing: 0, textShadow: '0 2px 12px rgba(0,0,0,.95), 0 1px 3px rgba(0,0,0,1)' }}>{title}</Typography>
            <Body sx={{ color: '#ffffff !important', maxWidth: 560, marginBottom: '1.8rem', textShadow: '0 1px 8px rgba(0,0,0,.95)' }}>{heroText}</Body>
            <Box component="a" href="/resources/contact-us" sx={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.7rem 1.1rem', borderRadius: '2px', background: '#0B4C74', color: '#ffffff', fontWeight: 600, fontSize: '.62rem', fontFamily: "'Poppins', sans-serif", textDecoration: 'none', transition: 'background .2s ease', '&:hover': { background: '#d3ffb0', color: '#000000' } }}>
              {heroCta} <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
            {stats && stats.length > 0 && (
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: `repeat(${Math.min(stats.length, 3)}, 1fr)` }, gap: '.8rem', marginTop: '2rem' }}>
                {stats.map((stat, i) => (
                  <Box key={i} sx={{ borderLeft: `2px solid ${lime}`, paddingLeft: '.8rem' }}>
                    <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.72rem', fontWeight: 700, color: lime, lineHeight: 1.2, marginBottom: '.2rem' }}>{stat.value}</Typography>
                    <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.58rem', color: '#ffffff', lineHeight: 1.5, letterSpacing: '.04em', textTransform: 'uppercase', textShadow: '0 1px 6px rgba(0,0,0,.85)' }}>{stat.label}</Typography>
                  </Box>
                ))}
              </Box>
            )}
          </motion.div>
          <Box />
        </Box>
      </Box>

      <Section>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.05fr .95fr' }, gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 4rem)' }, alignItems: 'center' }}>
          <Box>
            {overviewEyebrow && <Eyebrow>{overviewEyebrow}</Eyebrow>}
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>{overviewTitle}</SectionHeading>
            {Array.isArray(overviewText) ? overviewText.map((paragraph, i) => <Body key={i} sx={{ marginBottom: '.9rem' }}>{paragraph}</Body>) : <Body>{overviewText}</Body>}
          </Box>
          {overviewImage && (
            <Box sx={{ border: `1px solid ${line}`, borderRadius: '2px', overflow: 'hidden', background: '#fff', height: { xs: 240, md: 340 } }}>
              <Box component="img" src={overviewImage} alt={overviewImageAlt || overviewTitle} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </Box>
          )}
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          {challengeEyebrow && <Eyebrow>{challengeEyebrow}</Eyebrow>}
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem', maxWidth: 900 }}>{challengeTitle}</SectionHeading>
          {challengeIntro && <Body sx={{ maxWidth: 800, margin: '0 auto' }}>{challengeIntro}</Body>}
        </Box>
        <Box sx={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: '1.5rem' }}>
          {challenges.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}>
              <Box sx={cardSx}>
                <Typography sx={{ font: "400 clamp(1.4rem, 2.4vw, 1.9rem)/1 Georgia, 'Times New Roman', serif", color: '#bcd0c5', marginBottom: '.5rem' }}>{String(i + 1).padStart(2, '0')}</Typography>
                <Typography component="h3" sx={{ margin: '0 0 .55rem', font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif", color: ink, textTransform: 'uppercase', letterSpacing: '.02em' }}>{item.title}</Typography>
                <Body sx={{ fontSize: '.66rem' }}>{item.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          {servicesEyebrow && <Eyebrow>{servicesEyebrow}</Eyebrow>}
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem', maxWidth: 900 }}>{servicesTitle}</SectionHeading>
          {servicesIntro && <Body sx={{ maxWidth: 800, margin: '0 auto' }}>{servicesIntro}</Body>}
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: `repeat(${Math.min(services.length, 3)}, 1fr)` }, gap: { xs: '1.2rem', md: '1.4rem' } }}>
          {services.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.05 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={{ ...cardSx, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ width: '100%', height: 150, overflow: 'hidden', borderBottom: `1px solid ${line}` }}>
                  <Box component="img" src={item.image} alt={item.title} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </Box>
                <Box sx={{ padding: '1.2rem 1.2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Box sx={{ display: 'grid', placeItems: 'center', width: 36, height: 36, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, marginBottom: '.9rem', flexShrink: 0 }}>
                    <Check sx={{ fontSize: 18, color: '#0B4C74' }} />
                  </Box>
                  <Typography component="h3" sx={{ margin: '0 0 .55rem', font: "400 .92rem Georgia, 'Times New Roman', serif", color: ink, lineHeight: 1.25, minHeight: '2.4rem' }}>{item.title}</Typography>
                  <Body sx={{ fontSize: '.66rem', flexGrow: 1 }}>{item.text}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          {processEyebrow && <Eyebrow>{processEyebrow}</Eyebrow>}
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem', maxWidth: 900 }}>{processTitle}</SectionHeading>
          {processIntro && <Body sx={{ maxWidth: 800, margin: '0 auto' }}>{processIntro}</Body>}
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: `repeat(${Math.min(process.length, 5)}, 1fr)` }, gap: { xs: '1rem', md: '1.2rem' } }}>
          {process.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 5) * 0.05 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={cardSx}>
                <Typography sx={{ font: "400 clamp(1.4rem, 2.4vw, 1.9rem)/1 Georgia, 'Times New Roman', serif", color: '#bcd0c5', marginBottom: '.5rem' }}>{step.number}</Typography>
                <Typography component="h3" sx={{ margin: '0 0 .55rem', font: "400 clamp(.85rem, 1.3vw, .98rem)/1.25 Georgia, 'Times New Roman', serif", color: ink, textTransform: 'uppercase', letterSpacing: '.02em' }}>{step.title}</Typography>
                <Body sx={{ fontSize: '.66rem', flexGrow: 1 }}>{step.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          {deliveryEyebrow && <Eyebrow>{deliveryEyebrow}</Eyebrow>}
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem', maxWidth: 900 }}>{deliveryTitle}</SectionHeading>
          {deliveryIntro && <Body sx={{ maxWidth: 800, margin: '0 auto' }}>{deliveryIntro}</Body>}
        </Box>
        <Box sx={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: '1.2rem' }}>
          {deliveryOptions.map((option, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}>
              <Box sx={{ ...cardSx, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ width: '100%', height: 160, overflow: 'hidden', borderBottom: `1px solid ${line}` }}>
                  <Box component="img" src={option.image} alt={option.title} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </Box>
                <Box sx={{ padding: '1.4rem 1.4rem' }}>
                  <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.6rem', fontWeight: 700, color: '#0B4C74', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.5rem' }}>{option.label}</Typography>
                  <Typography component="h3" sx={{ margin: '0 0 .9rem', font: "400 clamp(.95rem, 1.5vw, 1.15rem)/1.25 Georgia, 'Times New Roman', serif", color: ink }}>{option.title}</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
                    {option.points.map((point, pi) => (
                      <Box key={pi} sx={{ display: 'flex', alignItems: 'flex-start', gap: '.6rem' }}>
                        <Check sx={{ fontSize: 15, color: '#0B4C74', marginTop: '3px', flexShrink: 0 }} />
                        <Body sx={{ fontSize: '.66rem' }}>{point}</Body>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          {comparisonEyebrow && <Eyebrow>{comparisonEyebrow}</Eyebrow>}
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem', maxWidth: 900 }}>{comparisonTitle}</SectionHeading>
          {comparisonIntro && <Body sx={{ maxWidth: 800, margin: '0 auto' }}>{comparisonIntro}</Body>}
        </Box>
        <Box sx={{ overflowX: 'auto', border: `1px solid ${line}`, borderRadius: '2px', background: '#fff' }}>
          <Box component="table" sx={{ width: '100%', minWidth: 680, borderCollapse: 'collapse', '& th, & td': { padding: { xs: '.9rem 1rem', md: '1rem 1.4rem' }, textAlign: 'left', borderBottom: `1px solid ${line}`, fontSize: '.68rem', fontFamily: "'Poppins', sans-serif" }, '& th': { background: soft, color: ink, textTransform: 'uppercase', fontSize: '.6rem', fontWeight: 700, letterSpacing: '.05em' }, '& td': { color: muted }, '& td:first-of-type': { color: ink, fontWeight: 600 }, '& tr:last-of-type td': { borderBottom: 0 } }}>
            <thead><tr>{comparisonHeaders.map((header, i) => <th key={i}>{header}</th>)}</tr></thead>
            <tbody>{comparisonRows.map((row, ri) => <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>)}</tbody>
          </Box>
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          {engagementEyebrow && <Eyebrow>{engagementEyebrow}</Eyebrow>}
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem', maxWidth: 900 }}>{engagementTitle}</SectionHeading>
          {engagementIntro && <Body sx={{ maxWidth: 800, margin: '0 auto' }}>{engagementIntro}</Body>}
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: `repeat(${Math.min(engagements.length, 3)}, 1fr)` }, gap: { xs: '1.2rem', md: '1.4rem' } }}>
          {engagements.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.05 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={cardSx}>
                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.6rem', color: muted, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.6rem' }}>{item.subtitle}</Typography>
                <Typography component="h3" sx={{ margin: '0 0 .55rem', font: "400 clamp(.95rem, 1.5vw, 1.1rem)/1.25 Georgia, 'Times New Roman', serif", color: ink }}>{item.title}</Typography>
                <Body sx={{ fontSize: '.66rem', flexGrow: 1 }}>{item.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: '2.5rem', md: '3rem' } }}>
          <Box>
            {industriesEyebrow && <Eyebrow>{industriesEyebrow}</Eyebrow>}
            <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '.9rem', textAlign: 'left' }}>{industriesTitle}</SectionHeading>
            {industriesIntro && <Body sx={{ marginBottom: '1.4rem' }}>{industriesIntro}</Body>}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: '.6rem' }}>
              {industries.map((industry, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: '.6rem', background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: '.8rem 1rem' }}>
                  <Check sx={{ fontSize: 16, color: '#0B4C74', flexShrink: 0 }} />
                  <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.66rem', color: ink, lineHeight: 1.4 }}>{industry}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            {capabilitiesEyebrow && <Eyebrow>{capabilitiesEyebrow}</Eyebrow>}
            <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '.9rem', textAlign: 'left' }}>{capabilitiesTitle}</SectionHeading>
            {capabilitiesIntro && <Body sx={{ marginBottom: '1.4rem' }}>{capabilitiesIntro}</Body>}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: '.6rem' }}>
              {capabilities.map((capability, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: '.6rem', background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: '.8rem 1rem' }}>
                  <Check sx={{ fontSize: 16, color: '#0B4C74', flexShrink: 0 }} />
                  <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.66rem', color: ink, lineHeight: 1.4 }}>{capability}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          {stackEyebrow && <Eyebrow>{stackEyebrow}</Eyebrow>}
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem', maxWidth: 900 }}>{stackTitle}</SectionHeading>
          {stackIntro && <Body sx={{ maxWidth: 800, margin: '0 auto' }}>{stackIntro}</Body>}
        </Box>
        <Box sx={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: '1rem' }}>
          {stack.map((group, i) => (
            <Box key={i} sx={{ background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: '1.2rem' }}>
              <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.6rem', color: '#0B4C74', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.6rem' }}>{group.title}</Typography>
              <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.72rem', color: ink, lineHeight: 1.7 }}>{group.items}</Typography>
            </Box>
          ))}
        </Box>
      </Section>

      
    </PageShell>
  );
}