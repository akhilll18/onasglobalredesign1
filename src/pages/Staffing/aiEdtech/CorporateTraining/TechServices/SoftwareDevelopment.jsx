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

import SD1 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Software development/customsoftwaredev1.jpg';
import SD2 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Software development/customsoftwaredev2.jpg';
import SD3 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Software development/customsoftwaredev3.jpg';
import SD4 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Software development/customsoftwaredev4.jpg';
import SD5 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Software development/customsoftwaredev5.jpg';
import SD6 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Software development/customsoftwaredev6.jpg';
import SD7 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Software development/customsoftwaredev7.jpg';

export default function SoftwareDevelopment() {
  const eyebrow = 'Software product delivery';
  const title = 'Software development outsourcing with clear ownership';
  const heroText = 'Extend your product team with an engineering partner who brings delivery structure, practical communication, and the technical depth to take software from discovery to ongoing improvement.';
  const heroCta = 'Discuss your roadmap';
  const heroImage = SD1;
  const heroImageAlt = 'Software team collaborating around a table';
  const stats = [
    { value: 'One team', label: 'Shared delivery ownership' },
    { value: 'Clear plan', label: 'Visible milestones' },
    { value: 'Built to evolve', label: 'Long-term maintainability' },
  ];

  const overviewEyebrow = 'A delivery partner, not a black box';
  const overviewTitle = 'Keep product direction close while we help carry the engineering work';
  const overviewText = [
    'Software outsourcing works best when your team keeps a clear line of sight into priorities, decisions, and delivery. We collaborate with your stakeholders to plan work in manageable increments and keep progress visible.',
    'Our teams can support product discovery, architecture, application development, quality engineering, and ongoing maintenance. Engagements are shaped around your requirements, team structure, and operating context.',
  ];
  const overviewImage = SD2;
  const overviewImageAlt = 'Colleagues discussing product work together';

  const challengeEyebrow = 'Why outsource intentionally';
  const challengeTitle = 'Address delivery pressure without losing product control';
  const challengeIntro = 'Outsourcing should solve a real capacity or capability need. Clear ownership and dependable collaboration make the difference.';
  const challenges = [
    { title: 'Roadmaps outpace capacity', text: 'The work matters, but hiring and onboarding can take longer than the next product milestone allows.' },
    { title: 'Specialist skills are hard to staff', text: 'A project may need a blend of engineering, cloud, data, quality, or security experience.' },
    { title: 'Delivery visibility is missing', text: 'Progress becomes difficult to forecast when decisions and risks surface only at handoff.' },
    { title: 'Ownership gets blurred', text: 'A vendor relationship should not leave your team unsure who decides, reviews, or supports the product.' },
  ];

  const servicesEyebrow = 'Software development services';
  const servicesTitle = 'Engineering capacity that connects to your product goals';
  const servicesIntro = 'Use a full delivery team or add specific skills to the team you already have.';
  const services = [
    { title: 'Product engineering', text: 'Plan, design, build, test, and evolve web, mobile, and enterprise software.', image: SD3 },
    { title: 'Dedicated development teams', text: 'Add a stable cross-functional team that works alongside your product owners and internal engineers.', image: SD4 },
    { title: 'Modernization & maintenance', text: 'Improve legacy applications, address technical debt, and support secure, steady releases.', image: SD5 },
  ];

  const processEyebrow = 'From discovery to dependable delivery';
  const processTitle = 'A transparent outsourcing process';
  const processIntro = 'Keep context, decisions, and quality connected across each stage of the engagement.';
  const process = [
    { number: '01', title: 'Discover', text: 'Clarify business outcomes, users, systems, constraints, and measures of progress.' },
    { number: '02', title: 'Set up', text: 'Agree on roles, delivery cadence, environments, access, and ways of working.' },
    { number: '03', title: 'Build', text: 'Ship small, reviewable increments with routine demos and decision records.' },
    { number: '04', title: 'Verify', text: 'Test functionality, quality, security needs, and operational readiness throughout.' },
    { number: '05', title: 'Improve', text: 'Support releases, learn from product use, and refine the roadmap together.' },
  ];

  const deliveryEyebrow = 'One product sprint, two different experiences';
  const deliveryTitle = 'The engagement model shapes the delivery experience';
  const deliveryIntro = 'Illustrative patterns, not promises of a specific outcome. We establish the operating model with you before delivery begins.';
  const deliveryOptions = [
    {
      label: 'Unstructured outsourcing',
      title: 'Work moves across a handoff boundary',
      points: ['Priorities and acceptance criteria may be unclear.', 'Progress is hard to inspect between milestone reviews.', 'Product context can be lost between separate teams.'],
      image: SD6,
    },
    {
      label: 'Collaborative engineering partner',
      title: 'The team shares context and accountability',
      points: ['Backlog, ownership, and decision paths are agreed together.', 'Working increments and risks stay visible throughout delivery.', 'Knowledge transfer and maintainability are part of the plan.'],
      image: SD7,
    },
  ];

  const comparisonEyebrow = 'Choose the right team model';
  const comparisonTitle = 'Outsourcing or staff augmentation?';
  const comparisonIntro = 'Pick the model based on who should lead day-to-day engineering and how much delivery ownership you need.';
  const comparisonHeaders = ['Factor', 'Software outsourcing', 'Staff augmentation'];
  const comparisonRows = [
    ['Team direction', 'Partner helps organize delivery with agreed ownership', 'Your team leads day-to-day work'],
    ['Best when', 'You need an accountable delivery team or defined capability', 'You have strong internal leadership and need extra capacity'],
    ['Scope', 'Outcome, product area, or managed backlog', 'Individual roles and responsibilities'],
    ['Ways of working', 'Joint planning, reviews, and delivery cadence', 'Integrated into your existing team process'],
    ['Knowledge', 'Transfer is planned alongside delivery', 'Knowledge is embedded in your internal team'],
    ['Control', 'Shared governance and agreed decision rights', 'Direct management by your organization'],
  ];

  const engagementEyebrow = 'Flexible engagement options';
  const engagementTitle = 'A team structure suited to the work';
  const engagementIntro = 'Start with the scope and collaboration model that fits your roadmap; revisit it as the product changes.';
  const engagements = [
    { title: 'Pilot or MVP', subtitle: 'Validate a focused product idea', text: 'A compact scope with clear assumptions, an initial architecture, and a working release plan.' },
    { title: 'Dedicated product team', subtitle: 'Sustain a product roadmap', text: 'A cross-functional team that works with your stakeholders through ongoing planning and delivery.' },
    { title: 'Enterprise program', subtitle: 'Coordinate complex delivery', text: 'Support for multiple workstreams, governance needs, integrations, and long-term modernization.' },
  ];

  const industriesEyebrow = 'Where our teams contribute';
  const industriesTitle = 'Software for complex, real-world operations';
  const industriesIntro = 'We adapt delivery practices to the workflows, integrations, and operational expectations of your sector.';
  const industries = ['Healthcare & digital health', 'Education & learning', 'Financial services', 'Retail & commerce', 'Enterprise platforms', 'Logistics & field service', 'Data & analytics', 'Cloud products'];

  const capabilitiesEyebrow = 'What your engagement can include';
  const capabilitiesTitle = 'End-to-end engineering capabilities';
  const capabilitiesIntro = 'The team composition follows your needs rather than a fixed package.';
  const capabilities = ['Product discovery', 'Solution architecture', 'Web and mobile engineering', 'API & platform integration', 'Cloud & DevOps', 'Quality automation', 'Security engineering', 'Data platforms', 'Post-launch support'];

  const stackEyebrow = 'Technology breadth';
  const stackTitle = 'A technology stack chosen for the product';
  const stackIntro = 'We align with your current architecture where practical and recommend alternatives when there is a clear reason to change.';
  const stack = [
    { title: 'AI & data', items: 'Applied AI · analytics · data engineering · machine learning' },
    { title: 'Frontend', items: 'React · Angular · Vue · TypeScript · accessible UI' },
    { title: 'Backend', items: 'Node.js · .NET · Java · Python · API development' },
    { title: 'Platforms', items: 'AWS · Azure · Google Cloud · SaaS integrations' },
    { title: 'Data & storage', items: 'PostgreSQL · SQL Server · MongoDB · managed data services' },
    { title: 'Delivery', items: 'GitHub Actions · Docker · Kubernetes · automated testing' },
  ];

  const ctaTitle = 'Bring the next software milestone within reach';
  const ctaText = 'Tell us what your team is building and where additional engineering ownership would help.';
  const ctaButton = 'Talk to our team';

  return (
    <PageShell>
      <Box sx={{ position: 'relative', marginTop: { xs: '72px', sm: '76px', md: '92px', lg: '10px' }, minHeight: { xs: 480, md: 560 }, padding: { xs: '7rem 1rem 3rem', md: '9rem 2.5rem 4rem' }, display: 'flex', alignItems: 'center', overflow: 'hidden', background: ink, isolation: 'isolate' }}>
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

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <Eyebrow>Get Started</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>{ctaTitle}</SectionHeading>
          {ctaText && <Body sx={{ marginBottom: '1.6rem' }}>{ctaText}</Body>}
          <Box component="a" href="/resources/contact-us" sx={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.7rem 1.1rem', borderRadius: '2px', background: '#0B4C74', color: '#ffffff', fontWeight: 600, fontSize: '.62rem', fontFamily: "'Poppins', sans-serif", textDecoration: 'none', transition: 'background .2s ease', '&:hover': { background: '#d3ffb0', color: '#000000' } }}>
            {ctaButton || 'Talk to Our Team'} <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Section>
    </PageShell>
  );
}