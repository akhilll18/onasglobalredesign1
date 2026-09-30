import React, { useState } from 'react';
import { Box, Container, Typography, TextField, MenuItem, Snackbar, Alert, CircularProgress, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, Check, ExpandMore } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

// Icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import GavelIcon from '@mui/icons-material/Gavel';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BrushIcon from '@mui/icons-material/Brush';
import InsightsIcon from '@mui/icons-material/Insights';

import SolutionsCTA from '../../../components/SolutionsCTA';
import SolutionsServices from '../../../components/SolutionsServices';

// Shared design
import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  Body,
  cardSx,
  containerSx,
  ink, muted, line, soft, lime,
} from '../../../theme/theme';

// EmailJS Configuration (same as ContactUs)
const EMAILJS_SERVICE_ID = 'service_z6cwp83';
const EMAILJS_ADMIN_TEMPLATE_ID = 'template_airu3dh';
const EMAILJS_USER_TEMPLATE_ID = 'template_17ujefq';
const EMAILJS_PUBLIC_KEY = 'SP7FmVESGAZ0wXGhK';

const servicesList = [
  'LLM Development Services',
  'Generative AI Development',
  'Machine Learning Consulting',
  'AI Chatbot Development',
  'AI Consulting Services',
  'Other',
];

// ── Data ──

const challenges = [
  {
    title: 'Complex Model Training and Deployment',
    description: 'Enterprises struggle with model training, requiring specialized skills, computational resources, and significant capital for successful implementation.',
    icon: <PsychologyIcon sx={{ fontSize: 22, color: '#257a68' }} />,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=200&fit=crop',
  },
  {
    title: 'Generative AI Integration Complexity',
    description: 'Over 70% of enterprises face challenges integrating generative AI solutions with their existing data pipelines, legacy systems, and scalable architecture.',
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 22, color: '#257a68' }} />,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
  },
  {
    title: 'Content Quality and Bias Control',
    description: 'Inconsistent output quality and bias in generative models create brand risk and require robust governance, monitoring, and responsible AI frameworks.',
    icon: <SecurityIcon sx={{ fontSize: 22, color: '#257a68' }} />,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop',
  },
  {
    title: 'Generative AI Expertise Shortage',
    description: 'Organizations struggle to find skilled talent in generative AI development, slowing AI-driven innovation and delaying project timelines.',
    icon: <TrendingUpIcon sx={{ fontSize: 22, color: '#257a68' }} />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
  },
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
  {
    title: 'Enterprise Generative AI Transformation',
    description: 'We help organizations harness generative AI solutions at scale, from strategy to deployment, driving transformative business solutions and competitive advantage.',
    icon: <AutoAwesomeIcon sx={{ fontSize: 22, color: '#257a68' }} />,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop',
  },
  {
    title: 'Advanced Text Generation',
    description: 'Our experts develop custom generative AI models that transform text generation and content creation, delivering relevant, contextual, and creative output at scale.',
    icon: <PsychologyIcon sx={{ fontSize: 22, color: '#257a68' }} />,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=200&fit=crop',
  },
  {
    title: 'Generative AI Governance & Security',
    description: 'We implement responsible AI frameworks, bias mitigation, and secure deployment strategies to protect sensitive data and ensure ethical AI outcomes across your organization.',
    icon: <SecurityIcon sx={{ fontSize: 22, color: '#257a68' }} />,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop',
  },
  {
    title: 'Intelligent Content Automation',
    description: 'Transform your content operations with AI-powered automation solutions. We streamline content creation, review, and distribution to enhance productivity through intelligent content systems.',
    icon: <AutorenewIcon sx={{ fontSize: 22, color: '#257a68' }} />,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop',
  },
  {
    title: 'AI Image Generation Capabilities',
    description: 'Unlock the power of AI-driven visual content with advanced diffusion model development. Our experts build custom image generation solutions, from creative assets to photorealistic visuals that accelerate marketing and content growth.',
    icon: <BrushIcon sx={{ fontSize: 22, color: '#257a68' }} />,
    image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400&h=200&fit=crop',
  },
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
  {
    title: 'Customization',
    intro: 'Our AI solutions are tailored to your industry, data, and business objectives, ensuring optimal performance and ROI.',
    points: ['Custom AI Model Development', 'Industry-Specific AI Solutions', 'AI Process Automation', 'Predictive Analytics Systems', 'Computer Vision Solutions', 'Natural Language Processing', 'AI-Powered Analytics', 'Deep Learning Systems'],
  },
  {
    title: 'Innovation',
    text: 'We bring cutting-edge generative AI architectures and evaluation methods to every engagement — from diffusion models to GPT-based systems and beyond.',
  },
  {
    title: 'Expertise',
    text: 'Researchers, MLOps engineers, and domain specialists in the loop with measurable benchmarks at every stage of development.',
  },
  {
    title: 'Scalability',
    text: 'Production-grade generative AI systems with cost governance, observability, and a documented handoff plan for your internal team.',
  },
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
  {
    q: 'What are the main benefits of Generative AI development services for businesses?',
    a: 'Generative AI development services help businesses automate content creation, accelerate product innovation, personalize customer experiences, and unlock new revenue streams. Organizations gain faster time-to-market for AI-powered features, improved operational efficiency, and a competitive edge in their markets.',
  },
  {
    q: 'How can generative AI transform healthcare operations?',
    a: 'Generative AI can summarize clinical notes, draft prior authorization letters, power patient FAQ chatbots with PHI guardrails, assist with medical coding, and provide decision support. When paired with governance and evaluation frameworks, these applications reduce manual workload and improve consistency across regulated workflows.',
  },
  {
    q: 'What are the common challenges organizations face with generative AI?',
    a: 'Common challenges include complex model training and deployment, integration with legacy systems, content quality and bias control, and a shortage of generative AI expertise. Addressing these early with clear scope, data readiness assessments, and evaluation harnesses prevents costly re-work.',
  },
  {
    q: 'How can ONAS Solutions help organizations with generative AI development?',
    a: 'ONAS Solutions provides end-to-end generative AI development — from strategy and use-case selection through model development, deployment, and MLOps handoff. We combine domain expertise, safety and governance frameworks, and production-grade engineering to help you ship AI that scales.',
  },
  {
    q: 'Why is responsible generative AI important and how do you ensure quality outputs?',
    a: 'Responsible generative AI protects brand trust, regulatory compliance, and user safety. We embed guardrails, bias detection, prompt versioning, human-in-the-loop review, and evaluation harnesses into every deployment so outputs stay accurate, auditable, and aligned with your organization\'s policies.',
  },
];

const GenerativeAiDevelopment = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.company.trim()) newErrors.company = 'Required';
    if (!formData.service) newErrors.service = 'Required';
    if (!formData.message.trim()) newErrors.message = 'Required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    if (Object.keys(formErrors).length !== 0) return;

    setLoading(true);
    try {
      const dateTime = new Date();
      const date = dateTime.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      const time = dateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      const fullName = `${formData.firstName} ${formData.lastName}`;

      const adminParams = {
        to_email: 'sales@onasglobal.com',
        from_name: fullName,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company,
        service: formData.service,
        message: formData.message,
        date, time,
      };
      const userParams = {
        to_email: formData.email,
        to_name: fullName,
        from_name: 'ONAS Global Services',
        company: formData.company,
        service: formData.service,
        date,
      };

      emailjs.init(EMAILJS_PUBLIC_KEY);
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_ADMIN_TEMPLATE_ID, adminParams);
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_USER_TEMPLATE_ID, userParams).catch(() => {});

      setSnackbar({ open: true, message: '✓ Thank you! Your message has been sent. Our team will contact you within 24 hours.', severity: 'success' });
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' });
      setErrors({});
    } catch (error) {
      if (error.status === 200 || error.text === 'OK' || error.message?.includes('200')) {
        setSnackbar({ open: true, message: '✓ Thank you! Your message has been sent.', severity: 'success' });
        setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' });
        setErrors({});
      } else {
        setSnackbar({ open: true, message: 'Unable to send. Please contact sales@onasglobal.com or call +91-928 150 6440.', severity: 'error' });
      }
    } finally {
      setLoading(false);
    }
  };

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '2px',
      fontFamily: "'Poppins', sans-serif",
      fontSize: '.72rem',
      background: '#fff',
      '& fieldset': { borderColor: line },
      '&:hover fieldset': { borderColor: '#aac7b2' },
      '&.Mui-focused fieldset': { borderColor: '#257a68' },
    },
    '& .MuiInputLabel-root': {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '.72rem',
      color: muted,
      '&.Mui-focused': { color: '#257a68' },
    },
    '& .MuiFormHelperText-root': { fontFamily: "'Poppins', sans-serif", fontSize: '.6rem' },
  };

  return (
    <PageShell>
      {/* ── Hero ── */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 420, md: 500 },
          padding: { xs: '5rem 1rem 3rem', md: '7rem 2.5rem 4rem' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundImage: 'url(https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          isolation: 'isolate',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(90deg, rgba(8,49,46,.94) 0%, rgba(8,49,46,.72) 55%, rgba(8,49,46,.85) 100%)' }} />

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow sx={{ color: lime }}>AI &amp; EdTech Services</Eyebrow>
            <Typography component="h1" sx={{ margin: '.4rem auto 1rem', font: "400 clamp(1.5rem, 3.2vw, 2.4rem)/1.05 Georgia, 'Times New Roman', serif", color: '#fff', maxWidth: 900 }}>
              Transforming Business Through Generative AI and Custom Development
            </Typography>
            <Body sx={{ color: 'rgba(255,255,255,.82) !important', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto' }}>
              We help organizations design, build, and deploy generative AI solutions — from GPT-based applications to custom image generation systems — that transform content, unlock insights, and create new business possibilities.
            </Body>
          </motion.div>
        </Container>
      </Box>

      {/* ── Generative AI Development Challenges ── */}
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

      {/* ── What We Offer ── */}
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
              We develop tailored generative AI applications aligned with your business goals,
              creating powerful text generation AI and GPT-based solutions that accelerate
              productivity and innovation across your organization.
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

      {/* ── Dedicated Solutions ── */}
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

      {/* ── Industries We Serve ── */}
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

      {/* ── Success Stories ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Case Study</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>Success Stories</SectionHeading>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.05fr .95fr' }, gap: { xs: '1.5rem', md: '2.5rem' }, alignItems: 'center' }}>
          <Box>
            <Body sx={{ marginBottom: '1rem' }}>
              These AI models can later be used to score chemical compound IDs. They can give a
              descriptive name to the AI model when doing so, and the system keeps track of the
              dataset used — creating a reproducible pipeline from raw data to deployment.
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
              <Box component="a" href="/resources/case-studies" sx={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', padding: '.6rem 1rem', borderRadius: '2px', background: lime, color: ink, fontWeight: 600, fontSize: '.6rem', fontFamily: "'Poppins', sans-serif", textDecoration: 'none', '&:hover': { background: '#d3ffb0' } }}>
                Read More <ArrowForward sx={{ fontSize: 13 }} />
              </Box>
              <Box component="a" href="/resources/case-studies" sx={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', padding: '.6rem 1rem', borderRadius: '2px', background: 'transparent', color: ink, border: `1px solid ${line}`, fontWeight: 600, fontSize: '.6rem', fontFamily: "'Poppins', sans-serif", textDecoration: 'none', '&:hover': { borderColor: '#aac7b2' } }}>
                See All Cases <ArrowForward sx={{ fontSize: 13 }} />
              </Box>
            </Box>
          </Box>

          <Box sx={{ border: `1px solid ${line}`, borderRadius: '2px', overflow: 'hidden', background: '#fff', height: { xs: 240, md: 320 } }}>
            <Box component="img" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Success Story" sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </Box>
        </Box>
      </Section>

      {/* ── Why Choose ONAS ── */}
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
              <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#257a68', fontSize: 20 }} />} sx={{ padding: { xs: '.6rem 1rem', md: '.7rem 1.4rem' }, '& .MuiAccordionSummary-content': { margin: '.6rem 0' }, '&.Mui-expanded': { minHeight: 'auto' } }}>
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

      {/* ── Solutions We Deliver ── */}
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

      {/* ── Ready to Transform CTA ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <Eyebrow>Get Started</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Ready to Revolutionize Your Business with Generative AI Development?
          </SectionHeading>
          <Body sx={{ marginBottom: '1.6rem' }}>
            Schedule a free consultation today and discover how ONAS Solutions can help you build
            cutting-edge generative AI applications, from GPT-based solutions to custom AI models
            that transform your operations.
          </Body>
          <Box
            component="a"
            href="#contact"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.5rem',
              padding: '.7rem 1.1rem',
              borderRadius: '2px',
              background: lime,
              color: ink,
              fontWeight: 600,
              fontSize: '.62rem',
              fontFamily: "'Poppins', sans-serif",
              textDecoration: 'none',
              transition: 'background .2s ease',
              '&:hover': { background: '#d3ffb0' },
            }}
          >
            Let&apos;s Discuss <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Section>

      {/* ── Languages, Tools, Frameworks ── */}
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

      {/* ── Contact Form ── */}
      <Section bg={soft}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 3.5rem)' }, alignItems: 'stretch' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Box sx={{ width: '100%', border: `1px solid ${line}`, borderRadius: '2px', overflow: 'hidden', background: '#fff', height: '100%' }}>
              <Box component="img" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80" alt="Contact" sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: { xs: 260, md: 420 } }} />
            </Box>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: { xs: '1.6rem 1.2rem', md: '2rem 1.7rem' } }}>
              <Box>
                <Eyebrow>Get in Touch</Eyebrow>
                <Typography component="h2" sx={{ margin: '.5rem 0 0', font: "400 clamp(1rem, 1.8vw, 1.35rem)/1.2 Georgia, 'Times New Roman', serif", color: ink }}>
                  Here&apos;s how you can get in touch
                </Typography>
              </Box>

              <TextField name="firstName" label="First Name" fullWidth required onChange={handleChange} value={formData.firstName} error={!!errors.firstName} helperText={errors.firstName} disabled={loading} sx={inputSx} />
              <TextField name="lastName" label="Last Name" fullWidth required onChange={handleChange} value={formData.lastName} error={!!errors.lastName} helperText={errors.lastName} disabled={loading} sx={inputSx} />
              <TextField name="email" label="Business Email" type="email" fullWidth required onChange={handleChange} value={formData.email} error={!!errors.email} helperText={errors.email || "We'll send confirmation to this email"} disabled={loading} sx={inputSx} />
              <TextField name="phone" label="Phone Number (Optional)" type="tel" fullWidth onChange={handleChange} value={formData.phone} error={!!errors.phone} helperText={errors.phone} disabled={loading} sx={inputSx} />
              <TextField name="company" label="Company Name" fullWidth required onChange={handleChange} value={formData.company} error={!!errors.company} helperText={errors.company} disabled={loading} sx={inputSx} />
              <TextField name="service" label="Looking For?" select fullWidth required value={formData.service} onChange={handleChange} error={!!errors.service} helperText={errors.service} disabled={loading} sx={inputSx}>
                <MenuItem value="">Select Service</MenuItem>
                {servicesList.map((s, i) => <MenuItem key={i} value={s}>{s}</MenuItem>)}
              </TextField>
              <TextField name="message" label="Tell us about your project" multiline rows={4} fullWidth required onChange={handleChange} value={formData.message} error={!!errors.message} helperText={errors.message} disabled={loading} sx={inputSx} />

              <Box component="button" type="submit" disabled={loading} sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem', padding: '.75rem 1.2rem', marginTop: '.4rem', border: 0, borderRadius: '2px', background: lime, color: ink, fontWeight: 600, fontSize: '.66rem', fontFamily: "'Poppins', sans-serif", cursor: loading ? 'not-allowed' : 'pointer', transition: 'background .2s ease', '&:hover': { background: loading ? lime : '#d3ffb0' } }}>
                {loading ? <CircularProgress size={18} sx={{ color: ink }} /> : (<>Submit Form <ArrowForward sx={{ fontSize: 14 }} /></>)}
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>FAQ</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>Questions You May Have</SectionHeading>
        </Box>
        <Box sx={{ maxWidth: 900, margin: '0 auto' }}>
          {faqs.map((f, i) => (
            <Accordion key={i} elevation={0} disableGutters sx={{ marginBottom: '.6rem', background: '#fff', border: `1px solid ${line}`, borderRadius: '2px !important', overflow: 'hidden', '&:before': { display: 'none' }, '&.Mui-expanded': { margin: '0 0 .6rem 0', borderColor: '#aac7b2' } }}>
              <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#257a68', fontSize: 20 }} />} sx={{ padding: { xs: '.6rem 1rem', md: '.7rem 1.4rem' }, '& .MuiAccordionSummary-content': { margin: '.6rem 0' }, '&.Mui-expanded': { minHeight: 'auto' } }}>
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
      <SolutionsServices />

      <Snackbar open={snackbar.open} autoHideDuration={5000} onClose={() => setSnackbar({ ...snackbar, open: false })} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </PageShell>
  );
};

export default GenerativeAiDevelopment;