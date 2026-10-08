import React from 'react';
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

import FlutterLogo from '@/assets/images/staffing/AI & EdTech Services/technologies/Flutter/flutter1.jpg';
import Process1 from '@/assets/images/staffing/AI & EdTech Services/technologies/Flutter/flutter2.jpg';
import Process2 from '@/assets/images/staffing/AI & EdTech Services/technologies/Flutter/flutter3.jpg';
import Process3 from '@/assets/images/staffing/AI & EdTech Services/technologies/Flutter/flutter4.jpg';
import Process4 from '@/assets/images/staffing/AI & EdTech Services/technologies/Flutter/flutter5.jpg';
import Process5 from '@/assets/images/staffing/AI & EdTech Services/technologies/Flutter/flutter6.jpg';

const frictionPoints = [
  { label: 'UI Drift', text: 'Keeping iOS and Android experiences aligned gets harder as product details multiply.' },
  { label: 'Release Pressure', text: 'Separate implementations can stretch feature delivery and make coordination expensive.' },
  { label: 'Quality Gaps', text: 'Device differences, flaky networks, and late testing can turn into launch surprises.' },
  { label: 'Unclear Ownership', text: 'Without shared standards, small changes become harder to review and maintain.' },
];

const outcomes = [
  { number: '01', title: 'A Shared Product Surface', text: 'Build consistent screens and interactions for iOS and Android from a common Flutter codebase.' },
  { number: '02', title: 'Faster Feedback Loops', text: 'Use hot reload and component-led workflows to test ideas with your team earlier.' },
  { number: '03', title: 'A Foundation that Can Grow', text: 'Organize features, state, and integrations so new capabilities do not make the app brittle.' },
  { number: '04', title: 'One Connected Release Plan', text: 'Coordinate build, testing, store preparation, and post-launch support in one delivery rhythm.' },
  { number: '05', title: 'A Considered User Experience', text: 'Respect platform conventions while keeping your brand and product flow recognizable.' },
];

const services = [
  { title: 'New Flutter Applications', text: 'From discovery and interface design through architecture, implementation, and store submission.' },
  { title: 'Product Modernization', text: 'Assess an existing mobile product, shape a migration path, and move capabilities without losing sight of users.' },
  { title: 'Team Extension & Support', text: 'Add Flutter specialists for a defined initiative, ongoing feature work, or quality and performance improvements.' },
];

const processSteps = [
  { number: '01', title: 'Discover', text: 'Align on users, workflows, constraints, integrations, and what success means for this release.', image: Process1 },
  { number: '02', title: 'Shape', text: 'Agree on the experience, technical approach, delivery milestones, and a testable first slice.', image: Process2 },
  { number: '03', title: 'Build', text: 'Deliver in increments, with regular reviews and working software visible throughout.', image: Process3 },
  { number: '04', title: 'Validate', text: 'Test across target devices, accessibility needs, network conditions, and backend integrations.', image: Process4 },
  { number: '05', title: 'Launch & Improve', text: 'Prepare the release, monitor real usage, and prioritize the next improvements with your team.', image: Process5 },
];

const comparisonRows = [
  ['Shared UI approach', 'Flutter widgets and rendering', 'Platform-native UI components'],
  ['Primary language', 'Dart', 'Swift for iOS, Kotlin for Android'],
  ['Best fit', 'A consistent experience across platforms', 'Deep platform-specific behavior or UI'],
  ['Platform integrations', 'Plugins plus custom native bridges when needed', 'Direct access to platform APIs'],
  ['Team considerations', 'One cross-platform skill set', 'Separate platform expertise'],
];

const engagementModels = [
  { title: 'Discovery Sprint', detail: 'A short, focused start', text: 'Clarify user journeys, technical constraints, architecture options, and a practical delivery roadmap.', image: Process1 },
  { title: 'Product Squad', detail: 'A dedicated delivery team', text: 'Bring product, design, and engineering together to build and evolve your Flutter application.', image: Process3 },
  { title: 'Specialist Support', detail: 'Targeted expertise', text: 'Get help with a defined challenge such as performance, integrations, release readiness, or team mentoring.', image: Process5 },
];

const industries = [
  'Healthcare & wellness', 'Retail & commerce', 'Education & learning',
  'Finance & insurance', 'Field operations', 'Travel & hospitality',
];

const capabilities = [
  'Customer and member apps', 'Booking and transaction flows', 'Offline-aware experiences',
  'Secure sign-in and permissions', 'Real-time updates and messaging', 'Analytics and product events',
];

const stackGroups = [
  { name: 'Application', tools: 'Flutter · Dart · Material · Cupertino' },
  { name: 'State & Architecture', tools: 'Riverpod · Bloc · Provider · Clean architecture' },
  { name: 'Services & Data', tools: 'REST · GraphQL · Firebase · SQL / NoSQL' },
  { name: 'Delivery & Quality', tools: 'GitHub Actions · Fastlane · Flutter test · Crash reporting' },
];

const faqs = [
  { q: 'When is Flutter a good fit?', a: 'Flutter is worth considering when you want a shared codebase and a consistent product experience across platforms. Native development may be preferable when the product depends heavily on platform-specific APIs or highly native interaction patterns.' },
  { q: 'Can a Flutter app connect to our existing systems?', a: 'Yes. Flutter applications can integrate with REST and GraphQL APIs, identity providers, analytics tools, payment services, and other backend systems. The approach depends on your current architecture and security requirements.' },
  { q: 'Can you work with an app we already have?', a: 'Yes. We can review the current codebase, identify maintenance or performance concerns, and recommend a staged improvement or migration plan.' },
  { q: 'How do you approach app security?', a: 'Security is considered across identity, data handling, transport, permissions, dependencies, and release practices. Specific controls are selected to fit your product and compliance needs.' },
  { q: 'How long does Flutter development take?', a: 'Timing depends on scope, integrations, design readiness, and release requirements. A discovery phase helps turn the initial idea into a realistic estimate and sequence.' },
  { q: 'Do you support the app after launch?', a: 'Support can include monitoring, defect fixes, OS compatibility updates, new features, and guidance for your in-house team.' },
];

const Flutter = () => {
  return (
    <PageShell>
      <Box
        sx={{
          position: 'relative',
          marginTop: { xs: '72px', sm: '76px', md: '92px', lg: '100px' },
          minHeight: { xs: 480, md: 560 },
          padding: { xs: '7rem 1rem 3rem', md: '9rem 2.5rem 4rem' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundImage: `url(${FlutterLogo})`,
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
            background: 'linear-gradient(180deg, rgba(255,255,255,.10) 0%, rgba(0,0,0,.65) 100%)',
          }}
        />

        <Box sx={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', width: '100%', position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)' }}>Corporate Training</Eyebrow>
            <Typography
              component="h1"
              sx={{
                margin: '.5rem auto 1rem',
                font: "400 clamp(1.1rem, 2.2vw, 1.7rem)/1.15 Georgia, 'Times New Roman', serif",
                color: '#fff',
                maxWidth: 620,
                letterSpacing: 0,
                textShadow: '0 2px 12px rgba(0,0,0,.95), 0 1px 3px rgba(0,0,0,1)',
              }}
            >
              Flutter App Development <Box component="span" sx={{ color: lime }}>by ONAS Solutions</Box>
            </Typography>

            <Body sx={{ color: '#ffffff !important', maxWidth: 560, margin: '0 auto .8rem', textShadow: '0 1px 8px rgba(0,0,0,.95)' }}>
              Turn a product idea into a dependable mobile experience for iOS and Android. ONAS brings product thinking, Flutter engineering, and release support together from the first conversation.
            </Body>

            <Body sx={{ color: '#ffffff !important', maxWidth: 560, margin: '0 auto 1.8rem', textShadow: '0 1px 8px rgba(0,0,0,.95)' }}>
              A shared codebase, shaped for the people who use it.
            </Body>

            <Box component="a" href="/resources/contact-us" sx={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.7rem 1.1rem', borderRadius: '2px', background: '#0B4C74', color: '#ffffff', fontWeight: 600, fontSize: '.62rem', fontFamily: "'Poppins', sans-serif", textDecoration: 'none', transition: 'background .2s ease', '&:hover': { background: '#d3ffb0', color: '#000000' } }}>
              Discuss Your App <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </motion.div>
        </Box>
      </Box>

      <Section>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.05fr .95fr' }, gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 4rem)' }, alignItems: 'center' }}>
          <Box>
            <Eyebrow>Flutter Development, With Context</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
              A Mobile Product Is More Than a Shared Codebase
            </SectionHeading>
            <Body sx={{ marginBottom: '1rem' }}>
              The right cross-platform approach starts with your users, your existing systems, and the decisions the product needs to support. We help teams weigh those details before they become expensive to change.
            </Body>
            <Body>
              From a first release to a mature application, our work connects interface design, architecture, integrations, testing, and the realities of operating software after launch.
            </Body>
          </Box>
          <Box sx={{ border: `1px solid ${line}`, borderRadius: '2px', overflow: 'hidden', background: '#fff', height: { xs: 240, md: 340 } }}>
            <Box component="img" src={Process2} alt="Product team collaborating" sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </Box>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Common Delivery Friction</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Where Mobile Projects Lose Momentum
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            Cross-platform development works best when teams plan for the trade-offs, not just the code reuse.
          </Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: { xs: '1rem', md: '1.2rem' } }}>
          {frictionPoints.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 4) * 0.05 }} style={{ display: 'flex' }}>
              <Box sx={{ ...cardSx }}>
                <Typography sx={{ font: "400 clamp(1.4rem, 2.4vw, 1.9rem)/1 Georgia, 'Times New Roman', serif", color: '#bcd0c5', marginBottom: '.5rem' }}>
                  {String(i + 1).padStart(2, '0')}
                </Typography>
                <Typography component="h3" sx={{ margin: '0 0 .55rem', font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif", color: ink, textTransform: 'uppercase', letterSpacing: '.02em' }}>
                  {item.label}
                </Typography>
                <Body sx={{ fontSize: '.66rem' }}>{item.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Designed for Outcomes</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            A Stronger Foundation for Every Release
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            Technology choices matter most when they make day-to-day product work clearer and more sustainable.
          </Body>
        </Box>

        <Box sx={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
          {outcomes.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '48px 1fr', md: '68px 1fr' }, gap: '1.4rem', alignItems: 'flex-start', background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: '1.2rem 1.4rem' }}>
                <Typography sx={{ font: "400 clamp(1.4rem, 2.4vw, 1.9rem)/1 Georgia, 'Times New Roman', serif", color: '#bcd0c5' }}>
                  {item.number}
                </Typography>
                <Box>
                  <Typography component="h3" sx={{ margin: '0 0 .4rem', font: "400 clamp(.85rem, 1.3vw, .98rem)/1.25 Georgia, 'Times New Roman', serif", color: ink, textTransform: 'uppercase', letterSpacing: '.02em' }}>
                    {item.title}
                  </Typography>
                  <Body sx={{ fontSize: '.66rem' }}>{item.text}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>How We Can Help</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Flutter Services That Fit Your Stage
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            Bring us in for a complete product journey or a clearly defined part of the work.
          </Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: '1.2rem', md: '1.4rem' } }}>
          {services.map((service, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.05 }} style={{ display: 'flex' }}>
              <Box sx={{ ...cardSx, height: '100%' }}>
                <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, marginBottom: '1rem' }}>
                  <Check sx={{ fontSize: 20, color: '#0B4C74' }} />
                </Box>
                <Typography component="h3" sx={{ margin: '0 0 .55rem', font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif", color: ink, textTransform: 'uppercase', letterSpacing: '.02em' }}>
                  {service.title}
                </Typography>
                <Body sx={{ fontSize: '.66rem' }}>{service.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>From First Brief to First Release</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Our Flutter Delivery Process
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            A clear sequence keeps product, design, and engineering decisions connected as the work moves forward.
          </Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }, gap: { xs: '1rem', md: '1.2rem' } }}>
          {processSteps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 5) * 0.05 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={{ ...cardSx, padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ width: '100%', height: 100, overflow: 'hidden', borderBottom: `1px solid ${line}` }}>
                  <Box component="img" src={step.image} alt={step.title} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </Box>
                <Box sx={{ padding: '1rem .9rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography sx={{ font: "400 clamp(1.2rem, 2vw, 1.6rem)/1 Georgia, 'Times New Roman', serif", color: '#bcd0c5', marginBottom: '.4rem' }}>
                    {step.number}
                  </Typography>
                  <Typography component="h3" sx={{ margin: '0 0 .5rem', font: "400 clamp(.72rem, 1vw, .82rem)/1.25 Georgia, 'Times New Roman', serif", color: ink, textTransform: 'uppercase', letterSpacing: '.02em' }}>
                    {step.title}
                  </Typography>
                  <Body sx={{ fontSize: '.58rem', lineHeight: 1.65, flexGrow: 1 }}>{step.text}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Choose the Right Approach</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Flutter and Native: A Practical Comparison
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            There is no universal winner. The product&apos;s interaction model, platform needs, and team context should lead the decision.
          </Body>
        </Box>

        <Box sx={{ overflowX: 'auto', border: `1px solid ${line}`, borderRadius: '2px', background: '#fff' }}>
          <Box component="table" sx={{ width: '100%', minWidth: 620, borderCollapse: 'collapse', '& th, & td': { padding: { xs: '.9rem 1rem', md: '1rem 1.4rem' }, textAlign: 'left', borderBottom: `1px solid ${line}`, fontSize: '.68rem', fontFamily: "'Poppins', sans-serif" }, '& th': { background: soft, color: ink, textTransform: 'uppercase', fontSize: '.6rem', fontWeight: 700, letterSpacing: '.05em' }, '& td': { color: muted }, '& td:first-of-type': { color: ink, fontWeight: 600 }, '& tr:last-of-type td': { borderBottom: 0 } }}>
            <thead>
              <tr><th>Consideration</th><th>Flutter</th><th>Native Apps</th></tr>
            </thead>
            <tbody>
              {comparisonRows.map(([criteria, flutter, native]) => (
                <tr key={criteria}><td>{criteria}</td><td>{flutter}</td><td>{native}</td></tr>
              ))}
            </tbody>
          </Box>
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Flexible Ways to Engage</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            A Delivery Model for Your Next Step
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            Start with the shape of the challenge. We can define a right-sized engagement around your timeline and in-house team.
          </Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: '1.2rem', md: '1.4rem' } }}>
          {engagementModels.map((model, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.05 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={{ ...cardSx, padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ width: '100%', height: 160, overflow: 'hidden', borderBottom: `1px solid ${line}` }}>
                  <Box component="img" src={model.image} alt={model.title} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </Box>
                <Box sx={{ padding: { xs: '1.2rem 1.1rem', md: '1.4rem 1.3rem' }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.6rem', color: muted, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.55rem' }}>
                    {model.detail}
                  </Typography>
                  <Typography component="h3" sx={{ margin: '0 0 .55rem', font: "400 clamp(.95rem, 1.5vw, 1.1rem)/1.25 Georgia, 'Times New Roman', serif", color: ink }}>
                    {model.title}
                  </Typography>
                  <Body sx={{ fontSize: '.66rem', flexGrow: 1 }}>{model.text}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: '2rem', md: '3rem' }, alignItems: 'center' }}>
          <Box sx={{ border: `1px solid ${line}`, borderRadius: '2px', overflow: 'hidden', background: '#fff', height: { xs: 240, md: 340 } }}>
            <Box component="img" src={Process4} alt="Mobile app usage" sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </Box>
          <Box>
            <Eyebrow>Built Around Real Workflows</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
              Useful Across the Moments That Matter
            </SectionHeading>
            <Body sx={{ marginBottom: '1.4rem' }}>
              Flutter can support customer-facing and internal applications alike. We focus the experience on the task at hand, whether that means helping someone make a purchase, complete a field visit, or keep learning on the move.
            </Body>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: '.7rem' }}>
              {industries.map((item, i) => (
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

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Product Capabilities</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Capabilities for Connected Mobile Experiences
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            A strong foundation leaves room for the features your users actually need.
          </Body>
        </Box>

        <Box sx={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: '.7rem' }}>
          {capabilities.map((item, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: '.6rem', background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: '.9rem 1rem' }}>
              <Check sx={{ fontSize: 16, color: '#0B4C74', flexShrink: 0 }} />
              <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.68rem', color: ink, lineHeight: 1.5 }}>{item}</Typography>
            </Box>
          ))}
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Technology Choices</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            A Stack That Supports Long-Term Delivery
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            We select tools based on your product requirements, current systems, and the team that will maintain the application.
          </Body>
        </Box>

        <Box sx={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: '1rem' }}>
          {stackGroups.map((group, i) => (
            <Box key={i} sx={{ background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: '1.2rem' }}>
              <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.6rem', color: '#0B4C74', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.6rem' }}>
                {group.name}
              </Typography>
              <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.72rem', color: ink, lineHeight: 1.7 }}>
                {group.tools}
              </Typography>
            </Box>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <Eyebrow>Make the Next Move</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Build a Mobile Product Your Team Can Keep Improving
          </SectionHeading>
          <Body sx={{ marginBottom: '1.6rem' }}>
            Share where you are today and what you want the app to make possible. We&apos;ll help map a practical way forward.
          </Body>
          <Box component="a" href="/resources/contact-us" sx={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.7rem 1.1rem', borderRadius: '2px', background: '#0B4C74', color: '#ffffff', fontWeight: 600, fontSize: '.62rem', fontFamily: "'Poppins', sans-serif", textDecoration: 'none', transition: 'background .2s ease', '&:hover': { background: '#d3ffb0', color: '#000000' } }}>
            Talk to Our Team <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Flutter FAQ</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>
            Questions Teams Ask Before They Start
          </SectionHeading>
        </Box>

        <Box sx={{ maxWidth: 900, margin: '0 auto' }}>
          {faqs.map((f, i) => (
            <Accordion key={i} elevation={0} disableGutters sx={{ marginBottom: '.6rem', background: '#fff', border: `1px solid ${line}`, borderRadius: '2px !important', overflow: 'hidden', '&:before': { display: 'none' }, '&.Mui-expanded': { margin: '0 0 .6rem 0', borderColor: '#aac7b2' } }}>
              <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#0B4C74', fontSize: 20 }} />} sx={{ padding: { xs: '.6rem 1rem', md: '.7rem 1.4rem' }, '& .MuiAccordionSummary-content': { margin: '.6rem 0' }, '&.Mui-expanded': { minHeight: 'auto' } }}>
                <Typography sx={{ color: `${ink} !important`, fontFamily: "Georgia, 'Times New Roman', serif", fontSize: '.82rem', lineHeight: 1.4 }}>{f.q}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: { xs: '.2rem 1rem 1.2rem', md: '.2rem 1.4rem 1.4rem' } }}>
                <Body sx={{ fontSize: '.68rem', lineHeight: 1.8 }}>{f.a}</Body>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Section>
    </PageShell>
  );
};

export default Flutter;