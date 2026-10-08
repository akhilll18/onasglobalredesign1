import React from 'react';
import { Box, Container, Typography, Snackbar, Alert, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, Check, ExpandMore } from '@mui/icons-material';

import ChatIcon from '@mui/icons-material/Chat';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LanguageIcon from '@mui/icons-material/Language';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import InsightsIcon from '@mui/icons-material/Insights';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

import SolutionsCTA from '@/components/SolutionsCTA';

import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  Body,
  cardSx,
  containerSx,
  ink, muted, line, soft, lime,
} from '@/theme/theme';

import Chat1 from '@/assets/images/staffing/AI & EdTech Services/AI Chatbot/ai-chatbot-dev1.jpg';
import Chat2 from '@/assets/images/staffing/AI & EdTech Services/AI Chatbot/ai-chatbot-dev2.jpg';
import Chat3 from '@/assets/images/staffing/AI & EdTech Services/AI Chatbot/ai-chatbot-dev3.jpg';
import Chat4 from '@/assets/images/staffing/AI & EdTech Services/AI Chatbot/ai-chatbot-dev4.jpg';
import Chat5 from '@/assets/images/staffing/AI & EdTech Services/AI Chatbot/ai-chatbot-dev5.jpg';
import Chat6 from '@/assets/images/staffing/AI & EdTech Services/AI Chatbot/ai-chatbot-dev6.jpg';
import Chat7 from '@/assets/images/staffing/AI & EdTech Services/AI Chatbot/ai-chatbot-dev7.jpg';
import Chat8 from '@/assets/images/staffing/AI & EdTech Services/AI Chatbot/ai-chatbot-dev8.jpg';
import Chat9 from '@/assets/images/staffing/AI & EdTech Services/AI Chatbot/ai-chatbot-dev9.jpg';
import Chat10 from '@/assets/images/staffing/AI & EdTech Services/AI Chatbot/ai-chatbot-dev10.jpg';
import Chat11 from '@/assets/images/staffing/AI & EdTech Services/AI Chatbot/ai-chatbot-dev11.jpg';

const challenges = [
  { title: 'Manual Customer Operations', description: 'Support teams handle repetitive inquiries manually, resulting in higher response times, increased costs, and inconsistent customer experiences.', icon: <SupportAgentIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Chat1 },
  { title: 'Chatbot Integration Difficulties', description: 'Companies face challenges integrating AI chatbots into existing systems, resulting in failed automation initiatives and poor customer engagement.', icon: <IntegrationInstructionsIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Chat2 },
  { title: 'Limited Conversational Capabilities', description: 'Basic chatbots lack natural language understanding, making conversations feel robotic and reducing engagement rates.', icon: <ChatIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Chat3 },
  { title: 'Scalability and Maintenance Issues', description: 'Organizations struggle to scale chatbot solutions across departments, facing significant maintenance and performance optimization challenges.', icon: <TrendingUpIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Chat4 },
];

const offerings = [
  'Custom Chatbot Development',
  'NLP Chatbot Solutions',
  'AI Virtual Assistants',
  'Chatbot Integration',
  'Chatbot Automation Services',
];

const capabilities = [
  'Enterprise AI Strategy Consulting',
  'Machine Learning Model Development',
  'AI Digital Transformation Services',
  'MLOps Implementation Services',
  'AI Solution Architecture Design',
  'AI Governance and Compliance',
];

const dedicated = [
  { title: 'Conversational AI Development', description: 'We help organizations implement intelligent chatbot solutions that provide 24/7 support to full-scale enterprise deployments, enhancing customer experiences through advanced natural language understanding, operational efficiency, and competitive advantage.', icon: <AutoAwesomeIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Chat5 },
  { title: 'AI Customer Service Bots', description: 'Our expert team develops advanced customer service bots that handle inquiries, resolve issues, and escalate important interactions to the right personnel, providing personalized, proactive, and efficient service that enhances customer satisfaction.', icon: <SupportAgentIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Chat6 },
  { title: 'Chatbot for Website', description: 'We implement secure website chatbots that improve user experience, provide instant support, increase lead generation, and enhance conversion rates. Our solutions facilitate positive interactions, ensure compliance, and effectively support business objectives.', icon: <LanguageIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Chat7 },
  { title: 'Conversational AI Development', description: 'Transform your customer engagement with AI-powered conversational solutions. We build contextual, multi-turn chat systems that reduce response times, improve satisfaction rates, and enhance operational efficiency through intelligent automation and support.', icon: <ChatIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Chat8 },
  { title: 'Chatbot Performance Analytics', description: 'Unlock the power of data with advanced chatbot analytics solutions. Our experts build user insights, performance metrics, and optimization dashboards that provide real-time visibility into conversations and improve chatbot effectiveness and ROI.', icon: <InsightsIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Chat9 },
];

const industries = [
  'Enterprise organizations and conglomerates', 'Technology companies',
  'Financial services firms', 'Software development companies',
  'Research institutions', 'Manufacturing companies',
  'Government agencies', 'ISV and fintech platforms',
  'Life science and healthcare organizations', 'Retail and e-commerce',
  'Energy and utilities', 'Logistics and supply chain',
  'NGOs and non-profits', 'Media and entertainment',
];

const solutionsDelivered = [
  'Conversational AI Platforms',
  'Data Analytics',
  'Process Automation',
  'Predictive Analytics',
  'Decision Support',
  'Long-Term Care',
];

const whyChoose = [
  { title: 'Customization', intro: 'Our chatbot solutions are tailored to your industry, customer needs, and business objectives, ensuring optimal engagement and ROI.', points: ['Custom AI Model Development', 'Industry-Specific AI Solutions', 'AI Process Automation', 'Predictive Analytics Systems', 'Computer Vision Solutions', 'Natural Language Processing', 'AI-Powered Analytics', 'Deep Learning Systems'] },
  { title: 'Innovation', text: 'We bring cutting-edge conversational AI architectures to every engagement — from intent recognition and entity extraction to multi-turn dialogue and beyond.' },
  { title: 'Expertise', text: 'NLP engineers, MLOps specialists, and CX domain experts in the loop with measurable engagement and resolution benchmarks at every stage.' },
  { title: 'Scalability', text: 'Production-grade chatbot systems with cost governance, observability, and a documented handoff plan for your internal CX team.' },
];

const frameworks = [
  { title: 'AI & ML', items: ['OpenAI', 'Gemini', 'Claude', 'Llama', 'Mistral', 'RAG', 'Vector DBs'] },
  { title: 'Frontend', items: ['React', 'Vue', 'TypeScript', 'Tailwind', 'Node.js'] },
  { title: 'Backend', items: ['Node.js', 'Python', '.NET', 'Redis', 'FastAPI', 'Express'] },
  { title: 'Data & Storage', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { title: 'DevOps & Infrastructure', items: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD'] },
  { title: 'Mobile & Desktop', items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
];

const faqs = [
  { q: 'What are the main benefits of AI chatbot development services for businesses?', a: 'AI chatbot development services help businesses automate customer support, reduce response times, cut operational costs, and deliver consistent experiences at scale. Organizations gain 24/7 coverage, higher customer satisfaction, and better lead generation without proportional headcount growth.' },
  { q: 'How can AI chatbots transform customer service operations?', a: 'AI chatbots transform customer service by handling routine inquiries instantly, escalating complex issues to human agents with full context, and continuously learning from conversations. This improves first-response time, reduces agent workload, and delivers personalized support across channels.' },
  { q: 'What are the common challenges organizations face when implementing chatbots?', a: 'Common challenges include manual customer operations that resist automation, integration difficulties with legacy systems, limited conversational capabilities in basic bots, and scalability and maintenance issues across departments. Addressing these early with proper architecture and NLP foundations prevents failed pilots.' },
  { q: 'How can ONAS Solutions help organizations with chatbot development?', a: 'ONAS Solutions provides end-to-end chatbot development — from conversational strategy and use-case selection through NLP model development, integration with your systems, deployment, and analytics. We combine domain expertise, governance, and production-grade engineering to help you ship chatbots that scale.' },
  { q: 'Why is chatbot security important, and how do you ensure responsible chatbot implementation?', a: 'Chatbot security protects user data, brand trust, and regulatory compliance. We embed PII redaction, role-based access, encryption, and audit logging into every deployment, along with human-in-the-loop review and evaluation harnesses so conversations stay safe, accurate, and auditable.' },
];

const AiChatbotDevelopment = () => {
  return (
    <PageShell>
      <Box
        sx={{
          position: 'relative',
          marginTop: { xs: '72px', sm: '76px', md: '92px', lg: '100px' },
          minHeight: { xs: 420, md: 500 },
          padding: { xs: '7rem 1rem 3rem', md: '9rem 2.5rem 4rem' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundImage: `url(${Chat10})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          isolation: 'isolate',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(180deg, rgba(255,255,255,.10) 0%, rgba(0,0,0,.45) 100%)' }} />

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)' }}>AI &amp; EdTech Services</Eyebrow>
            <Typography component="h1" sx={{ margin: '.4rem auto 1rem', font: "400 clamp(1.5rem, 3.2vw, 2.4rem)/1.05 Georgia, 'Times New Roman', serif", color: '#fff', maxWidth: 900, textShadow: '0 2px 12px rgba(0,0,0,.95), 0 1px 3px rgba(0,0,0,1)' }}>
              Advanced AI Chatbot Development Services for Modern Businesses
            </Typography>
            <Body sx={{ color: '#ffffff !important', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto', textShadow: '0 1px 8px rgba(0,0,0,.95)' }}>
              We help organizations design, build, and deploy intelligent chatbot solutions — from NLP-powered assistants to multi-channel conversational AI — that enhance customer engagement, automate support, and create exceptional user experiences.
            </Body>
          </motion.div>
        </Container>
      </Box>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Challenges</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Customer Service Challenges
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            Businesses struggle with customer engagement and support automation.
          </Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: { xs: '1rem', md: '1.2rem' }, alignItems: 'stretch' }}>
          {challenges.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 4) * 0.05 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={cardSx}>
                <Box sx={{ position: 'relative', width: '100%', height: 130, overflow: 'hidden', background: soft, borderBottom: `1px solid ${line}` }}>
                  <Box component="img" src={c.image} alt={c.title} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </Box>
                <Box sx={{ padding: { xs: '1.6rem 1.2rem 1.3rem', md: '1.8rem 1.4rem 1.5rem' }, display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative' }}>
                  <Box sx={{ position: 'absolute', top: '-22px', left: '1.2rem', display: 'grid', placeItems: 'center', width: 44, height: 44, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, boxShadow: '0 4px 12px rgba(18,63,59,0.08)' }}>
                    {c.icon}
                  </Box>
                  <Typography component="h3" sx={{ margin: '1rem 0 .6rem', font: "400 clamp(.95rem, 1.5vw, 1.1rem)/1.2 Georgia, 'Times New Roman', serif", color: ink, minHeight: '2.4rem' }}>
                    {c.title}
                  </Typography>
                  <Body sx={{ flexGrow: 1, fontSize: '.66rem' }}>{c.description}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>What We Do</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>We Offer Comprehensive AI Chatbot Development Services</SectionHeading>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '.9fr 1.1fr' }, gap: { xs: '1.5rem', md: '2.5rem' }, alignItems: 'stretch' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
            {offerings.map((item, i) => (
              <Box key={i} sx={{ background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: '1rem 1.2rem' }}>
                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.72rem', color: ink, fontWeight: 600, letterSpacing: '.02em' }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box>
            <Typography component="h3" sx={{ margin: '0 0 .6rem', font: "400 clamp(.95rem, 1.6vw, 1.2rem)/1.25 Georgia, 'Times New Roman', serif", color: ink }}>
              Custom Chatbot Development
            </Typography>
            <Body sx={{ marginBottom: '1.4rem' }}>
              We build tailored chatbot solutions aligned with your business needs, creating intelligent conversational interfaces that enhance customer engagement and drive business growth.
            </Body>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: '.7rem' }}>
              {capabilities.map((c, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: '.6rem', background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: '.8rem .9rem' }}>
                  <Check sx={{ color: '#5e987f', fontSize: 15, marginTop: '2px', flexShrink: 0 }} />
                  <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.66rem', color: ink, lineHeight: 1.6 }}>
                    {c}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Our Focus</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            ONAS Solutions is Dedicated to Delivering Advanced Chatbot Solutions
          </SectionHeading>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: '1.2rem', md: '1.4rem' }, alignItems: 'stretch' }}>
          {dedicated.map((d, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.05 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={cardSx}>
                <Box sx={{ position: 'relative', width: '100%', height: 140, overflow: 'hidden', background: soft, borderBottom: `1px solid ${line}` }}>
                  <Box component="img" src={d.image} alt={d.title} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </Box>
                <Box sx={{ padding: { xs: '1.6rem 1.2rem 1.3rem', md: '1.8rem 1.4rem 1.5rem' }, display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative' }}>
                  <Box sx={{ position: 'absolute', top: '-22px', left: '1.2rem', display: 'grid', placeItems: 'center', width: 44, height: 44, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, boxShadow: '0 4px 12px rgba(18,63,59,0.08)' }}>
                    {d.icon}
                  </Box>
                  <Typography component="h3" sx={{ margin: '1rem 0 .6rem', font: "400 clamp(1rem, 1.6vw, 1.15rem)/1.2 Georgia, 'Times New Roman', serif", color: ink, minHeight: '2.4rem' }}>
                    {d.title}
                  </Typography>
                  <Body sx={{ flexGrow: 1, fontSize: '.66rem' }}>{d.description}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Who We Serve</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>Industries We Serve</SectionHeading>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem', justifyContent: 'center' }}>
          {industries.map((o, i) => (
            <Box key={i} sx={{ padding: '.6rem 1rem', background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', fontFamily: "'Poppins', sans-serif", fontSize: '.66rem', color: ink, transition: 'all .2s ease', '&:hover': { borderColor: '#aac7b2', background: soft } }}>
              {o}
            </Box>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Case Study</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>Success Stories</SectionHeading>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.05fr .95fr' }, gap: { xs: '1.5rem', md: '2.5rem' }, alignItems: 'center' }}>
          <Box>
            <Body sx={{ marginBottom: '1rem' }}>
              These AI models can later be used to score chemical compound IDs. They can give a descriptive name to the AI model when doing so, and the system keeps track of the dataset used — creating a reproducible pipeline from raw data to deployment.
            </Body>
            <Box sx={{ display: 'flex', gap: '1.5rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
              <Box>
                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.55rem', color: muted, textTransform: 'uppercase', letterSpacing: '.1em', fontWeight: 700, marginBottom: '.3rem' }}>
                  Expertise
                </Typography>
                <Body sx={{ fontSize: '.7rem', color: `${ink} !important` }}>Healthcare AI</Body>
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.55rem', color: muted, textTransform: 'uppercase', letterSpacing: '.1em', fontWeight: 700, marginBottom: '.3rem' }}>
                  Technologies
                </Typography>
                <Body sx={{ fontSize: '.7rem', color: `${ink} !important` }}>React, Node.js, TensorFlow</Body>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '.7rem', flexWrap: 'wrap' }}>
              <Box component="a" href="/resources/case-studies" sx={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', padding: '.6rem 1rem', borderRadius: '2px', background: '#0B4C74', color: '#ffffff', fontWeight: 600, fontSize: '.6rem', fontFamily: "'Poppins', sans-serif", textDecoration: 'none', '&:hover': { background: '#d3ffb0', color: '#000000' } }}>
                Read More <ArrowForward sx={{ fontSize: 13 }} />
              </Box>
              <Box component="a" href="/resources/case-studies" sx={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', padding: '.6rem 1rem', borderRadius: '2px', background: 'transparent', color: ink, border: `1px solid ${line}`, fontWeight: 600, fontSize: '.6rem', fontFamily: "'Poppins', sans-serif", textDecoration: 'none', '&:hover': { borderColor: '#aac7b2' } }}>
                See All Cases <ArrowForward sx={{ fontSize: 13 }} />
              </Box>
            </Box>
          </Box>

          <Box sx={{ border: `1px solid ${line}`, borderRadius: '2px', overflow: 'hidden', background: '#fff', height: { xs: 240, md: 320 } }}>
            <Box component="img" src={Chat11} alt="Success Story" sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </Box>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Why ONAS</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Why Choose ONAS Solutions for Your AI Chatbot Development Needs?
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            At ONAS Solutions, we deliver custom chatbot solutions that enhance customer engagement, automate support, and create exceptional user experiences.
          </Body>
        </Box>

        <Box sx={{ maxWidth: 900, margin: '0 auto' }}>
          {whyChoose.map((item, i) => (
            <Accordion key={i} elevation={0} disableGutters sx={{ marginBottom: '.6rem', background: '#fff', border: `1px solid ${line}`, borderRadius: '2px !important', overflow: 'hidden', '&:before': { display: 'none' }, '&.Mui-expanded': { margin: '0 0 .6rem 0', borderColor: '#aac7b2' } }}>
              <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#0B4C74', fontSize: 20 }} />} sx={{ padding: { xs: '.6rem 1rem', md: '.7rem 1.4rem' }, '& .MuiAccordionSummary-content': { margin: '.6rem 0' }, '&.Mui-expanded': { minHeight: 'auto' } }}>
                <Typography sx={{ color: `${ink} !important`, fontFamily: "Georgia, 'Times New Roman', serif", fontSize: '.82rem' }}>
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: { xs: '.2rem 1rem 1.2rem', md: '.2rem 1.4rem 1.4rem' }, background: soft }}>
                {item.intro && <Body sx={{ fontSize: '.68rem', lineHeight: 1.8, marginBottom: item.points?.length ? '.8rem' : 0 }}>{item.intro}</Body>}
                {item.text && <Body sx={{ fontSize: '.68rem', lineHeight: 1.8 }}>{item.text}</Body>}
                {item.points && item.points.length > 0 && (
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: '.4rem', marginTop: '.6rem' }}>
                    {item.points.map((p, j) => (
                      <Box key={j} sx={{ display: 'flex', alignItems: 'flex-start', gap: '.5rem' }}>
                        <Check sx={{ color: '#5e987f', fontSize: 14, marginTop: '3px', flexShrink: 0 }} />
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.64rem', color: ink, lineHeight: 1.6 }}>{p}</Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Solutions</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Chatbot Solutions We Deliver
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            For businesses, e-commerce, and customer service organizations across industries.
          </Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: { xs: '.7rem', md: '.8rem' } }}>
          {solutionsDelivered.map((s, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: '.6rem', background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: '.9rem 1rem' }}>
              <Check sx={{ color: '#5e987f', fontSize: 16, marginTop: '2px', flexShrink: 0 }} />
              <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.68rem', color: ink, lineHeight: 1.6 }}>{s}</Typography>
            </Box>
          ))}
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <Eyebrow>Get Started</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Ready to Transform Your Business with AI Chatbots?
          </SectionHeading>
          <Body sx={{ marginBottom: '1.6rem' }}>
            Schedule a free consultation today and discover how ONAS Solutions can help you enhance customer engagement, automate support, and drive growth through intelligent chatbot solutions.
          </Body>
          <Box component="a" href="#contact" sx={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.7rem 1.1rem', borderRadius: '2px', background: '#0B4C74', color: '#ffffff', fontWeight: 600, fontSize: '.62rem', fontFamily: "'Poppins', sans-serif", textDecoration: 'none', transition: 'background .2s ease', '&:hover': { background: '#d3ffb0', color: '#000000' } }}>
            Let&apos;s Discuss <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Tooling</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>Languages, Tools, and Frameworks</SectionHeading>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: '1.2rem', md: '1.4rem' } }}>
          {frameworks.map((group, i) => (
            <Box key={i} sx={{ background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: '1.2rem' }}>
              <Typography component="h3" sx={{ margin: '0 0 .7rem', font: "400 clamp(.85rem, 1.3vw, 1rem)/1.25 Georgia, 'Times New Roman', serif", color: ink }}>
                {group.title}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                {group.items.map((it, j) => (
                  <Box key={j} sx={{ padding: '.35rem .7rem', background: soft, border: `1px solid ${line}`, borderRadius: '2px', fontFamily: "'Poppins', sans-serif", fontSize: '.6rem', color: ink }}>
                    {it}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>FAQ</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>Questions You May Have</SectionHeading>
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

      <SolutionsCTA />
    </PageShell>
  );
};

export default AiChatbotDevelopment;