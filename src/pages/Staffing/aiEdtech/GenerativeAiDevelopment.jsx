import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, Check, ExpandMore } from '@mui/icons-material';

import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BrushIcon from '@mui/icons-material/Brush';

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

import Gen1 from '@/assets/images/staffing/AI & EdTech Services/Generative AI/genai1.jpg';
import Gen2 from '@/assets/images/staffing/AI & EdTech Services/Generative AI/genai2.jpg';
import Gen3 from '@/assets/images/staffing/AI & EdTech Services/Generative AI/genai3.jpg';
import Gen4 from '@/assets/images/staffing/AI & EdTech Services/Generative AI/genai4.jpg';
import Gen5 from '@/assets/images/staffing/AI & EdTech Services/Generative AI/genai5.jpg';
import Gen6 from '@/assets/images/staffing/AI & EdTech Services/Generative AI/genai6.jpg';
import Gen7 from '@/assets/images/staffing/AI & EdTech Services/Generative AI/genai7.jpg';
import Gen8 from '@/assets/images/staffing/AI & EdTech Services/Generative AI/genai8.jpg';
import Gen9 from '@/assets/images/staffing/AI & EdTech Services/Generative AI/genai9.jpg';
import Gen10 from '@/assets/images/staffing/AI & EdTech Services/Generative AI/genai10.jpg';
import Gen11 from '@/assets/images/staffing/AI & EdTech Services/Generative AI/genai11.jpg';

const challenges = [
  { title: 'Complex Model Training and Deployment', description: 'Enterprises struggle with model training, requiring specialized skills, computational resources, and significant capital for successful implementation.', icon: <PsychologyIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Gen1 },
  { title: 'Generative AI Integration Complexity', description: 'Over 70% of enterprises face challenges integrating generative AI solutions with their existing data pipelines, legacy systems, and scalable architecture.', icon: <IntegrationInstructionsIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Gen2 },
  { title: 'Content Quality and Bias Control', description: 'Inconsistent output quality and bias in generative models create brand risk and require robust governance, monitoring, and responsible AI frameworks.', icon: <SecurityIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Gen3 },
  { title: 'Generative AI Expertise Shortage', description: 'Organizations struggle to find skilled talent in generative AI development, slowing AI-driven innovation and delaying project timelines.', icon: <TrendingUpIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Gen4 },
];

const offerings = [
  'Custom Generative AI Solutions',
  'Large Language Model Development',
  'AI Image Generation Systems',
  'Generative AI Consulting and Strategy',
  'GPT-Based App Development',
];

const capabilities = [
  'Enterprise AI Strategy Consulting',
  'Machine Learning Model Development',
  'AI Transformation Consulting',
  'MLOps Integration',
  'AI Solution Architecture and Design',
  'AI Governance and Compliance',
];

const dedicated = [
  { title: 'Enterprise Generative AI Transformation', description: 'We help organizations harness generative AI solutions at scale, from strategy to deployment, driving transformative business solutions and competitive advantage.', icon: <AutoAwesomeIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Gen5 },
  { title: 'Advanced Text Generation', description: 'Our experts develop custom generative AI models that transform text generation and content creation, delivering relevant, contextual, and creative output at scale.', icon: <PsychologyIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Gen6 },
  { title: 'Generative AI Governance & Security', description: 'We implement responsible AI frameworks, bias mitigation, and secure deployment strategies to protect sensitive data and ensure ethical AI outcomes across your organization.', icon: <SecurityIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Gen7 },
  { title: 'Intelligent Content Automation', description: 'Transform your content operations with AI-powered automation solutions. We streamline content creation, review, and distribution to enhance productivity through intelligent content systems.', icon: <AutorenewIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Gen8 },
  { title: 'AI Image Generation Capabilities', description: 'Unlock the power of AI-driven visual content with advanced diffusion model development. Our experts build custom image generation solutions, from creative assets to photorealistic visuals that accelerate marketing and content growth.', icon: <BrushIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Gen9 },
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

const solutions = [
  'Generative AI Platforms',
  'Data Analytics',
  'Generative AI Automation',
  'Predictive Analytics',
  'Decision Support',
  'Long-Term Care',
];

const whyChoose = [
  { title: 'Customization', intro: 'Our AI solutions are tailored to your industry, data, and business objectives, ensuring optimal performance and ROI.', points: ['Custom AI Model Development', 'Industry-Specific AI Solutions', 'AI Process Automation', 'Predictive Analytics Systems', 'Computer Vision Solutions', 'Natural Language Processing', 'AI-Powered Analytics', 'Deep Learning Systems'] },
  { title: 'Innovation', text: 'We bring cutting-edge generative AI architectures and evaluation methods to every engagement — from diffusion models to GPT-based systems and beyond.' },
  { title: 'Expertise', text: 'Researchers, MLOps engineers, and domain specialists in the loop with measurable benchmarks at every stage of development.' },
  { title: 'Scalability', text: 'Production-grade generative AI systems with cost governance, observability, and a documented handoff plan for your internal team.' },
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
  { q: 'What are the main benefits of Generative AI development services for businesses?', a: 'Generative AI development services help businesses automate content creation, accelerate product innovation, personalize customer experiences, and unlock new revenue streams. Organizations gain faster time-to-market for AI-powered features, improved operational efficiency, and a competitive edge in their markets.' },
  { q: 'How can generative AI transform healthcare operations?', a: 'Generative AI can summarize clinical notes, draft prior authorization letters, power patient FAQ chatbots with PHI guardrails, assist with medical coding, and provide decision support. When paired with governance and evaluation frameworks, these applications reduce manual workload and improve consistency across regulated workflows.' },
  { q: 'What are the common challenges organizations face with generative AI?', a: 'Common challenges include complex model training and deployment, integration with legacy systems, content quality and bias control, and a shortage of generative AI expertise. Addressing these early with clear scope, data readiness assessments, and evaluation harnesses prevents costly re-work.' },
  { q: 'How can ONAS Solutions help organizations with generative AI development?', a: 'ONAS Solutions provides end-to-end generative AI development — from strategy and use-case selection through model development, deployment, and MLOps handoff. We combine domain expertise, safety and governance frameworks, and production-grade engineering to help you ship AI that scales.' },
  { q: 'Why is responsible generative AI important and how do you ensure quality outputs?', a: "Responsible generative AI protects brand trust, regulatory compliance, and user safety. We embed guardrails, bias detection, prompt versioning, human-in-the-loop review, and evaluation harnesses into every deployment so outputs stay accurate, auditable, and aligned with your organization's policies." },
];

const GenerativeAiDevelopment = () => {
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
          backgroundImage: `url(${Gen10})`,
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
              Transforming Business Through Generative AI and Custom Development
            </Typography>
            <Body sx={{ color: '#ffffff !important', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto', textShadow: '0 1px 8px rgba(0,0,0,.95)' }}>
              We help organizations design, build, and deploy generative AI solutions — from GPT-based applications to custom image generation systems — that transform content, unlock insights, and create new business possibilities.
            </Body>
          </motion.div>
        </Container>
      </Box>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Challenges</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Generative AI Development Challenges
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            Businesses face critical challenges in generative AI adoption and development.
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
          <SectionHeading sx={{ marginTop: '.7rem' }}>We Offer Comprehensive Generative AI Development Services</SectionHeading>
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
              Custom Generative AI Solutions
            </Typography>
            <Body sx={{ marginBottom: '1.4rem' }}>
              We develop tailored generative AI applications aligned with your business goals, creating powerful text generation AI and GPT-based solutions that accelerate productivity and innovation across your organization.
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
            ONAS Solutions is Dedicated to Delivering Transformative Generative AI Solutions
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            Enterprise-grade generative AI capabilities built for scale, governance, and real business outcomes.
          </Body>
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
            <Box component="img" src={Gen11} alt="Success Story" sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </Box>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Why ONAS</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Why Choose ONAS Solutions for Your Generative AI Development Needs?
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            At ONAS Solutions, we deliver cutting-edge generative AI solutions that transform content creation, automate processes, and unlock new business possibilities.
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
            Generative AI Development Solutions We Deliver
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            For enterprises, startups, and technology companies seeking advanced generative AI capabilities.
          </Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: { xs: '.7rem', md: '.8rem' } }}>
          {solutions.map((s, i) => (
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
            Ready to Revolutionize Your Business with Generative AI Development?
          </SectionHeading>
          <Body sx={{ marginBottom: '1.6rem' }}>
            Schedule a free consultation today and discover how ONAS Solutions can help you build cutting-edge generative AI applications, from GPT-based solutions to custom AI models that transform your operations.
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

      <Section>
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

export default GenerativeAiDevelopment;