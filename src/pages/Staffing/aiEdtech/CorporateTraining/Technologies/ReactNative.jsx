import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, Check, ExpandMore } from '@mui/icons-material';

import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  Body,
  cardSx,
  ink, muted, line, soft, lime,
} from '@/theme/theme';

// ✅ Local images — React Native folder (matching actual filenames)
import RNHero     from '@/assets/images/staffing/AI & EdTech Services/technologies/React Native/reactnative1.jpg';
import RNContext  from '@/assets/images/staffing/AI & EdTech Services/technologies/React Native/reactnative2.jpg';
import Risk1      from '@/assets/images/staffing/AI & EdTech Services/technologies/React Native/reactnative3.jpg';
import Risk2      from '@/assets/images/staffing/AI & EdTech Services/technologies/React Native/reactnative4.jpg';
import Risk3      from '@/assets/images/staffing/AI & EdTech Services/technologies/React Native/reactnative5.jpg';
import Risk4      from '@/assets/images/staffing/AI & EdTech Services/technologies/React Native/reactnative6.jpg';
import Step1      from '@/assets/images/staffing/AI & EdTech Services/technologies/React Native/reactnative7.jpg';
import Step2      from '@/assets/images/staffing/AI & EdTech Services/technologies/React Native/reactnative8.jpg';
import Step3      from '@/assets/images/staffing/AI & EdTech Services/technologies/React Native/reactnative9.jpg';
import Step4      from '@/assets/images/staffing/AI & EdTech Services/technologies/React Native/reactnative10.jpg';
import Step5      from '@/assets/images/staffing/AI & EdTech Services/technologies/React Native/reactnative11.jpg';
// Reuse reactnative2.jpg for the final "real use" image since only 11 files exist
import RNRealUse  from '@/assets/images/staffing/AI & EdTech Services/technologies/React Native/reactnative2.jpg';

const deliveryRisks = [
  { title: 'A Fragmented Codebase', body: 'Separate iOS and Android workstreams can duplicate product logic and slow down everyday changes.', image: Risk1 },
  { title: 'Platform Details Arrive Late', body: 'Permissions, native modules, and device behavior need deliberate design, not last-minute workarounds.', image: Risk2 },
  { title: 'Quality Gets Squeezed', body: 'A tight launch window can leave too little time for device coverage, accessibility, and regression testing.', image: Risk3 },
  { title: 'The App Is Hard to Evolve', body: 'Unclear ownership and architecture can make routine feature work feel riskier than it should.', image: Risk4 },
];

const benefits = [
  { number: '01', title: 'A Familiar Way to Build Mobile', body: 'Use React and JavaScript or TypeScript skills to create product experiences for iOS and Android.' },
  { number: '02', title: 'Platform-Aware Interfaces', body: 'Compose screens from native UI building blocks and tune behavior where each platform calls for it.' },
  { number: '03', title: 'Reuse With Intent', body: 'Share suitable business logic and UI patterns while keeping platform-specific work clear and maintainable.' },
  { number: '04', title: 'A Broad Ecosystem', body: 'Connect to established React tooling, libraries, and developer workflows that fit your team.' },
  { number: '05', title: 'Room to Scale', body: 'Adopt a deliberate app structure that supports new features, contributors, and native integrations.' },
];

const services = [
  { title: 'React Native App Development', body: 'Plan and build a mobile product from first user flow through implementation, testing, and release.' },
  { title: 'App Modernization', body: 'Improve an existing application, update its architecture, or plan a measured move from another stack.' },
  { title: 'Engineering Partnership', body: 'Extend your team with product-minded React Native engineers for features, integrations, or ongoing care.' },
];

const processSteps = [
  { number: '01', title: 'Align', body: 'Understand the users, product goals, systems, constraints, and release expectations.', image: Step1 },
  { number: '02', title: 'Design', body: 'Map key journeys and agree on an architecture that balances shared and platform-specific needs.', image: Step2 },
  { number: '03', title: 'Implement', body: 'Build the product in reviewable increments, with working software and decisions visible as we go.', image: Step3 },
  { number: '04', title: 'Verify', body: 'Test on real devices and validate integrations, accessibility, performance, and release readiness.', image: Step4 },
  { number: '05', title: 'Release', body: 'Prepare store submissions, monitor the rollout, and use feedback to shape the next iteration.', image: Step5 },
];

const comparisonRows = [
  ['Primary languages', 'JavaScript or TypeScript', 'Dart', 'Swift for iOS, Kotlin for Android'],
  ['UI approach', 'React components rendered with native platform views', 'Flutter widgets with its rendering approach', 'Platform-native UI components'],
  ['Good fit when', 'Your team values React skills and a cross-platform product', 'A consistent custom UI across platforms is a priority', 'Deep platform-specific behavior is central'],
  ['Native integration', 'Native modules and platform APIs as needed', 'Plugins and custom platform channels as needed', 'Direct access to platform APIs'],
  ['Team model', 'Shared JavaScript / TypeScript skills, plus native expertise when needed', 'Shared Dart skills, plus native expertise when needed', 'Separate iOS and Android expertise'],
];

const engagementOptions = [
  { title: 'Product Discovery', subtitle: 'Make the first decisions count', body: 'Turn an early concept into a clear product scope, technical direction, and release plan.' },
  { title: 'Dedicated Delivery Team', subtitle: 'Build and keep improving', body: 'Bring product, design, and engineering together around a roadmap and a steady delivery cadence.' },
  { title: 'Specialist Contribution', subtitle: 'Add targeted capability', body: 'Get experienced help with app architecture, native integrations, performance, or release readiness.' },
];

const sectors = [
  'Healthcare & wellness', 'Retail & commerce', 'Education & learning', 'Finance & insurance',
  'Field service', 'Travel & hospitality', 'Media & entertainment', 'Enterprise operations',
];

const capabilities = [
  'Push notifications', 'Offline-aware workflows', 'Secure identity and access',
  'Payments and subscriptions', 'Device and native integrations', 'Analytics and crash reporting',
  'Accessibility support', 'Deep links and app links', 'Continuous delivery pipelines',
];

const stackAreas = [
  { title: 'App Foundation', content: 'React Native · React · TypeScript · Expo or native projects' },
  { title: 'State & Navigation', content: 'React Navigation · state libraries · modular feature structure' },
  { title: 'Quality & Observability', content: 'Jest · React Native Testing Library · crash and usage reporting' },
  { title: 'Build & Release', content: 'GitHub Actions · EAS Build · Fastlane · App Store Connect · Play Console' },
];

const faqs = [
  { q: 'What is React Native app development?', a: 'React Native is a framework for building mobile applications with React and JavaScript or TypeScript, using native platform UI components. Teams can share parts of an application while integrating with iOS and Android where needed.' },
  { q: 'Is React Native the right choice for our product?', a: 'It can be a strong fit when your team values React skills and your product can benefit from a shared cross-platform approach. Platform requirements, interaction details, and existing team expertise should guide the decision.' },
  { q: 'Can you build HIPAA-conscious React Native apps?', a: 'We can design and build with your security and compliance requirements in view, including identity, data handling, audit needs, and the supporting backend. Formal compliance depends on the full system and operating practices, not the framework alone.' },
  { q: 'Can React Native use native device features?', a: 'Yes. React Native applications can integrate with device APIs and native modules. We assess each integration early so its maintenance and platform behavior are understood.' },
  { q: 'Can you take over an existing app?', a: 'Yes. We can review the codebase, build and release setup, dependencies, and product roadmap, then recommend practical improvements or a staged transition.' },
  { q: 'What happens after launch?', a: 'Support can include crash and performance monitoring, compatibility updates, defect resolution, new features, and knowledge transfer to your in-house team.' },
];

const ReactNative = () => {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const scrollPosRef = useRef(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let rafId;
    const speed = 0.6;
    const step = () => {
      if (!isPaused && el) {
        scrollPosRef.current += speed;
        if (scrollPosRef.current >= el.scrollWidth / 2) {
          scrollPosRef.current = 0;
        }
        el.scrollLeft = scrollPosRef.current;
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  const processCarousel = [...processSteps, ...processSteps];

  return (
    <PageShell>
      {/* ── HERO ── */}
      <Box
        sx={{
          position: 'relative',
          marginTop: { xs: '72px', sm: '76px', md: '92px', lg: '100px' },
          minHeight: { xs: 480, md: 560 },
          padding: { xs: '7rem 1rem 3rem', md: '9rem 2.5rem 4rem' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundImage: `url(${RNHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: ink,
          isolation: 'isolate',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            background:
              'linear-gradient(120deg, rgba(11,76,116,.92) 0%, rgba(11,76,116,.75) 55%, rgba(0,0,0,.55) 100%)',
          }}
        />

        <Box
          sx={{
            maxWidth: 900,
            margin: '0 auto',
            textAlign: 'center',
            width: '100%',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow sx={{ color: lime, textShadow: '0 2px 8px rgba(0,0,0,.6)' }}>
              Corporate Training
            </Eyebrow>

            <Typography
              component="h1"
              sx={{
                margin: '.5rem auto 1rem',
                font: "400 clamp(1.1rem, 2.2vw, 1.7rem)/1.15 Georgia, 'Times New Roman', serif",
                color: '#fff',
                maxWidth: 620,
                letterSpacing: 0,
                textShadow: '0 2px 12px rgba(0,0,0,.75), 0 1px 3px rgba(0,0,0,.9)',
              }}
            >
              React Native App Development{' '}
              <Box component="span" sx={{ color: lime }}>
                by ONAS Solutions
              </Box>
            </Typography>

            <Body
              sx={{
                color: '#ffffff !important',
                maxWidth: 560,
                margin: '0 auto .8rem',
                textShadow: '0 1px 8px rgba(0,0,0,.7)',
              }}
            >
              React Native apps built to move your product forward. Create thoughtful iOS and Android applications
              with React Native.
            </Body>

            <Body
              sx={{
                color: '#ffffff !important',
                maxWidth: 560,
                margin: '0 auto 1.8rem',
                textShadow: '0 1px 8px rgba(0,0,0,.7)',
              }}
            >
              We connect product goals, React expertise, and platform-aware engineering from discovery through
              launch.
            </Body>

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
              Plan Your App <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* ── IN CONTEXT ── */}
      <Section>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr .95fr' },
            gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 4rem)' },
            alignItems: 'center',
          }}
        >
          <Box>
            <Eyebrow>React Native, In Context</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
              Build Once Where It Helps. Go Native Where It Matters.
            </SectionHeading>
            <Body sx={{ marginBottom: '1rem' }}>
              A cross-platform strategy is not a promise that every line of code will be shared. It is a way to make
              thoughtful choices about what belongs in common and where a platform-specific solution will serve users
              better.
            </Body>
            <Body>
              We help teams plan that balance across the interface, application logic, device capabilities, and the
              systems behind the app.
            </Body>
          </Box>
          <Box
            sx={{
              border: `1px solid ${line}`,
              borderRadius: '2px',
              overflow: 'hidden',
              background: '#fff',
              height: { xs: 240, md: 340 },
            }}
          >
            <Box
              component="img"
              src={RNContext}
              alt="Software team reviewing a product"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Box>
      </Section>

      {/* ── DELIVERY RISKS ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Where Projects Can Get Stuck</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Avoidable Friction Should Not Define Your Launch
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            A framework can simplify parts of delivery, but strong outcomes still depend on product decisions,
            architecture, and testing discipline.
          </Body>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: '1rem', md: '1.2rem' },
          }}
        >
          {deliveryRisks.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box
                sx={{
                  ...cardSx,
                  padding: 0,
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: 110,
                    overflow: 'hidden',
                    borderBottom: `1px solid ${line}`,
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </Box>
                <Box
                  sx={{
                    padding: '1rem .9rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    sx={{
                      font: "400 clamp(1.2rem, 2vw, 1.6rem)/1 Georgia, 'Times New Roman', serif",
                      color: '#bcd0c5',
                      marginBottom: '.4rem',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </Typography>
                  <Typography
                    component="h3"
                    sx={{
                      margin: '0 0 .5rem',
                      font: "400 clamp(.78rem, 1.1vw, .9rem)/1.25 Georgia, 'Times New Roman', serif",
                      color: ink,
                      textTransform: 'uppercase',
                      letterSpacing: '.02em',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Body sx={{ fontSize: '.6rem', lineHeight: 1.65, flexGrow: 1 }}>{item.body}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* ── WHY REACT NATIVE ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Why React Native</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            A Shared Product Direction, With Platform Details in View
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            React Native can help teams bring their React knowledge to mobile while continuing to account for the
            details of iOS and Android.
          </Body>
        </Box>

        <Box
          sx={{
            maxWidth: 900,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '.8rem',
          }}
        >
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '48px 1fr', md: '68px 1fr' },
                  gap: '1.4rem',
                  alignItems: 'flex-start',
                  background: '#fff',
                  border: `1px solid ${line}`,
                  borderRadius: '2px',
                  padding: '1.2rem 1.4rem',
                }}
              >
                <Typography
                  sx={{
                    font: "400 clamp(1.4rem, 2.4vw, 1.9rem)/1 Georgia, 'Times New Roman', serif",
                    color: '#bcd0c5',
                  }}
                >
                  {item.number}
                </Typography>
                <Box>
                  <Typography
                    component="h3"
                    sx={{
                      margin: '0 0 .4rem',
                      font: "400 clamp(.85rem, 1.3vw, .98rem)/1.25 Georgia, 'Times New Roman', serif",
                      color: ink,
                      textTransform: 'uppercase',
                      letterSpacing: '.02em',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Body sx={{ fontSize: '.66rem' }}>{item.body}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* ── SERVICES ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>How We Can Help</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            React Native Services for Your Product Lifecycle
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            From a new mobile product to a focused modernization initiative, we work around the needs of your team.
          </Body>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: '1.2rem', md: '1.4rem' },
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              style={{ display: 'flex' }}
            >
              <Box sx={{ ...cardSx, height: '100%' }}>
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
                  <Check sx={{ fontSize: 20, color: '#0B4C74' }} />
                </Box>
                <Typography
                  component="h3"
                  sx={{
                    margin: '0 0 .55rem',
                    font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif",
                    color: ink,
                    textTransform: 'uppercase',
                    letterSpacing: '.02em',
                  }}
                >
                  {service.title}
                </Typography>
                <Body sx={{ fontSize: '.66rem' }}>{service.body}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* ── PROCESS (auto-scrolling carousel) ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>From Brief to Booked Launch</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Our React Native Process
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            A straightforward delivery path keeps stakeholders informed and makes decisions easier to revisit as the
            product evolves.
          </Body>
        </Box>

        <Box
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: { xs: 30, md: 80 },
              zIndex: 2,
              pointerEvents: 'none',
            },
            '&::before': {
              left: 0,
              background: 'linear-gradient(to right, #ffffff 0%, rgba(251,252,247,0) 100%)',
            },
            '&::after': {
              right: 0,
              background: 'linear-gradient(to left, #ffffff 0%, rgba(251,252,247,0) 100%)',
            },
          }}
        >
          <Box
            ref={trackRef}
            sx={{
              display: 'flex',
              gap: { xs: '1rem', md: '1.4rem' },
              overflowX: 'hidden',
              scrollBehavior: 'auto',
              py: '.5rem',
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {processCarousel.map((step, i) => (
              <Box
                key={`${step.number}-${i}`}
                sx={{ flex: '0 0 auto', width: { xs: 260, sm: 280, md: 300 } }}
              >
                <Box
                  sx={{
                    ...cardSx,
                    padding: 0,
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: 140,
                      overflow: 'hidden',
                      borderBottom: `1px solid ${line}`,
                    }}
                  >
                    <Box
                      component="img"
                      src={step.image}
                      alt={step.title}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </Box>
                  <Box
                    sx={{
                      padding: '1.2rem 1.1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        font: "400 clamp(1.4rem, 2.4vw, 1.9rem)/1 Georgia, 'Times New Roman', serif",
                        color: '#bcd0c5',
                        marginBottom: '.4rem',
                      }}
                    >
                      {step.number}
                    </Typography>
                    <Typography
                      component="h3"
                      sx={{
                        margin: '0 0 .55rem',
                        font: "400 clamp(.85rem, 1.3vw, .98rem)/1.25 Georgia, 'Times New Roman', serif",
                        color: ink,
                        textTransform: 'uppercase',
                        letterSpacing: '.02em',
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Body sx={{ fontSize: '.64rem', lineHeight: 1.7, flexGrow: 1 }}>{step.body}</Body>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      {/* ── COMPARISON TABLE ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Compare Before You Commit</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            React Native vs Flutter vs Native Development
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            The best option depends on the experience you are building, the capabilities it needs, and who will
            maintain it.
          </Body>
        </Box>

        <Box
          sx={{
            overflowX: 'auto',
            border: `1px solid ${line}`,
            borderRadius: '2px',
            background: '#fff',
          }}
        >
          <Box
            component="table"
            sx={{
              width: '100%',
              minWidth: 760,
              borderCollapse: 'collapse',
              '& th, & td': {
                padding: { xs: '.9rem 1rem', md: '1rem 1.4rem' },
                textAlign: 'left',
                borderBottom: `1px solid ${line}`,
                fontSize: '.68rem',
                fontFamily: "'Poppins', sans-serif",
              },
              '& th': {
                background: soft,
                color: ink,
                textTransform: 'uppercase',
                fontSize: '.6rem',
                fontWeight: 700,
                letterSpacing: '.05em',
              },
              '& td': { color: muted },
              '& td:first-of-type': { color: ink, fontWeight: 600 },
              '& tr:last-of-type td': { borderBottom: 0 },
            }}
          >
            <thead>
              <tr>
                <th>Criteria</th>
                <th>React Native</th>
                <th>Flutter</th>
                <th>Native Apps</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([criteria, rn, flutter, native]) => (
                <tr key={criteria}>
                  <td>{criteria}</td>
                  <td>{rn}</td>
                  <td>{flutter}</td>
                  <td>{native}</td>
                </tr>
              ))}
            </tbody>
          </Box>
        </Box>
      </Section>

      {/* ── ENGAGEMENT MODELS ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Ways to Work Together</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            The Right Engagement for Your Next Milestone
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            Start with the kind of support that moves your product forward now, then adapt the model as your needs
            change.
          </Body>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: '1.2rem', md: '1.4rem' },
          }}
        >
          {engagementOptions.map((model, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              style={{ display: 'flex' }}
            >
              <Box sx={{ ...cardSx, height: '100%' }}>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '.6rem',
                    color: muted,
                    textTransform: 'uppercase',
                    letterSpacing: '.08em',
                    marginBottom: '.6rem',
                  }}
                >
                  {model.subtitle}
                </Typography>
                <Typography
                  component="h3"
                  sx={{
                    margin: '0 0 .55rem',
                    font: "400 clamp(.95rem, 1.5vw, 1.1rem)/1.25 Georgia, 'Times New Roman', serif",
                    color: ink,
                  }}
                >
                  {model.title}
                </Typography>
                <Body sx={{ fontSize: '.66rem' }}>{model.body}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* ── SECTORS ── */}
      <Section bg={soft}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: '2rem', md: '3rem' },
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              border: `1px solid ${line}`,
              borderRadius: '2px',
              overflow: 'hidden',
              background: '#fff',
              height: { xs: 240, md: 340 },
            }}
          >
            <Box
              component="img"
              src={RNRealUse}
              alt="Mobile app usage"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
          <Box>
            <Eyebrow>Designed for Real Use</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
              Mobile Experiences for Customers and Teams
            </SectionHeading>
            <Body sx={{ marginBottom: '1.4rem' }}>
              We shape mobile workflows around the context people are in, whether they are shopping, learning,
              managing appointments, or completing work away from a desk.
            </Body>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: '.7rem',
              }}
            >
              {sectors.map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                  <Check sx={{ fontSize: 16, color: '#0B4C74', flexShrink: 0 }} />
                  <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.68rem', color: ink }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Section>

      {/* ── CAPABILITIES ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Capabilities</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            A Production-Minded React Native App
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            We plan for the everyday functions that make a mobile app dependable, not just the screens users see
            first.
          </Body>
        </Box>

        <Box
          sx={{
            maxWidth: 1000,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: '.7rem',
          }}
        >
          {capabilities.map((item, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '.6rem',
                background: '#fff',
                border: `1px solid ${line}`,
                borderRadius: '2px',
                padding: '.9rem 1rem',
              }}
            >
              <Check sx={{ fontSize: 16, color: '#0B4C74', flexShrink: 0 }} />
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '.68rem',
                  color: ink,
                  lineHeight: 1.5,
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Section>

      {/* ── STACK ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Technology Choices</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            A Practical React Native Stack
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            We work with the libraries and delivery tools that fit your app, team experience, and support model.
          </Body>
        </Box>

        <Box
          sx={{
            maxWidth: 900,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: '1rem',
          }}
        >
          {stackAreas.map((group, i) => (
            <Box
              key={i}
              sx={{
                background: '#fff',
                border: `1px solid ${line}`,
                borderRadius: '2px',
                padding: '1.2rem',
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '.6rem',
                  color: '#0B4C74',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '.08em',
                  marginBottom: '.6rem',
                }}
              >
                {group.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '.72rem',
                  color: ink,
                  lineHeight: 1.7,
                }}
              >
                {group.content}
              </Typography>
            </Box>
          ))}
        </Box>
      </Section>

      {/* ── FINAL CTA ── */}
      <Section>
        <Box sx={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <Eyebrow>Start a Conversation</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Make Your Next Mobile Release a Considered One
          </SectionHeading>
          <Body sx={{ marginBottom: '1.6rem' }}>
            Tell us what you are building, where you are getting stuck, or what needs to change. We&apos;ll help you
            work out the next step.
          </Body>
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
            Talk to Our Team <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Section>

      {/* ── FAQ ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>React Native FAQ</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>
            Questions Teams Ask Before They Start
          </SectionHeading>
        </Box>
        <Box sx={{ maxWidth: 900, margin: '0 auto' }}>
          {faqs.map((f, i) => (
            <Accordion
              key={i}
              elevation={0}
              disableGutters
              sx={{
                marginBottom: '.6rem',
                background: '#fff',
                border: `1px solid ${line}`,
                borderRadius: '2px !important',
                overflow: 'hidden',
                '&:before': { display: 'none' },
                '&.Mui-expanded': { margin: '0 0 .6rem 0', borderColor: '#aac7b2' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: '#0B4C74', fontSize: 20 }} />}
                sx={{
                  padding: { xs: '.6rem 1rem', md: '.7rem 1.4rem' },
                  '& .MuiAccordionSummary-content': { margin: '.6rem 0' },
                  '&.Mui-expanded': { minHeight: 'auto' },
                }}
              >
                <Typography
                  sx={{
                    color: `${ink} !important`,
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: '.82rem',
                    lineHeight: 1.4,
                  }}
                >
                  {f.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ padding: { xs: '.2rem 1rem 1.2rem', md: '.2rem 1.4rem 1.4rem' } }}
              >
                <Body sx={{ fontSize: '.68rem', lineHeight: 1.8 }}>{f.a}</Body>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Section>
    </PageShell>
  );
};

export default ReactNative;