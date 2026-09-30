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

const risks = [
  {
    title: 'Undefined Deliverables',
    description: 'Teams need clarity on what vendors ship — fine-tuned models, API wrappers, or multi-agent systems. Scope definition prevents "we built it but it doesn\'t work" outcomes.',
    icon: <CheckCircleIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop',
  },
  {
    title: 'Opaque Model and Stack Choices',
    description: 'Without named providers, model families, and versions, architecture reviews stall. Locking the stack early removes ambiguity and speeds up sign-off.',
    icon: <SecurityIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop',
  },
  {
    title: 'Hallucination and PHI Exposure',
    description: 'Clinical summarization, prior auth, and coding must be audit-ready. Retrofitted multi-tenant environments have zero tolerance for hallucinations.',
    icon: <TrendingUpIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
  },
  {
    title: 'No Phased Engagement Path',
    description: 'Leaders expect a 2–4 week proof-of-concept, a production build, and a maintenance contract with clear acceptance criteria for each phase.',
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
  },
];

const benefits = [
  {
    title: 'Fine-Tuned Domain Models',
    description: 'We fine-tune open and commercial base models on your proprietary corpora with evaluation harnesses, regression sets, and rollback plans.',
    icon: <CheckCircleIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop',
  },
  {
    title: 'RAG Pipelines Over Your Data',
    description: 'Embeddings land in the vector store of your choice with refresh cadence tuned to your data freshness, latency, and cost requirements.',
    icon: <DataUsageIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
  },
  {
    title: 'Multi-Agent Orchestration',
    description: 'We implement chains, agents, and graphs with LangChain, LlamaIndex, Haystack, or custom pipelines based on use case, latency, and debugging needs.',
    icon: <AutorenewIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=200&fit=crop',
  },
];

const challenges = [
  {
    title: 'Model Selection',
    description: 'Choosing between OpenAI, Anthropic, Meta Llama, Mistral, or Gemini requires understanding quality, cost, latency, and residency trade-offs.',
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop',
  },
  {
    title: 'Data Security & PHI',
    description: 'Sensitive data needs tenant isolation, redaction, audit logging, and role-based access — especially for healthcare and regulated workflows.',
    icon: <DataUsageIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop',
  },
  {
    title: 'Evaluation & Observability',
    description: 'Without tracing, prompt versioning, and regression sets, models silently drift and quality becomes impossible to defend.',
    icon: <AutorenewIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
  },
  {
    title: 'Governance & Compliance',
    description: 'HIPAA, GDPR, and regional residency requirements demand clear model and deployment reviews before production.',
    icon: <GavelIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=200&fit=crop',
  },
];

const techStack = [
  { title: 'Model Providers', text: 'OpenAI GPT-4o, Anthropic Claude, Meta Llama, Mistral, Google Gemini, plus Bedrock and Hugging Face equivalents for on-prem or VPC delivery.' },
  { title: 'Vector Databases', text: 'Pinecone, Qdrant, pgvector, Weaviate, Milvus — chosen per freshness, cost, and residency needs.' },
  { title: 'Orchestration', text: 'LangChain, LlamaIndex, Haystack, or custom pipelines tuned for latency, debuggability, and use case.' },
  { title: 'Observability & Governance', text: 'LangSmith, W&B, Arize for tracing and prompt versioning. PII detection, guardrails, and RBAC for audit-ready reviews.' },
  { title: 'Deployment Targets', text: 'Your cloud, on-prem, or hybrid — with autoscaling inference endpoints and CI/CD for zero-downtime releases.' },
  { title: 'Fine-Tuning Stack', text: 'LoRA, PEFT, RLHF, DPO, and quantization pipelines with domain-specific evaluation harnesses.' },
];

const organizations = [
  'Healthcare providers and payers', 'Enterprise software and SaaS',
  'Financial services and insurance', 'AI/ML startups shipping LLM products',
  'Research and clinical operations', 'Retail, e-commerce and D2C',
  'Legal and compliance teams', 'Media and content platforms',
  'Manufacturing knowledge management', 'Energy and utilities analytics',
  'Government and public sector', 'Logistics and supply chain operators',
  'Recruitment and HR platforms', 'NGOs with sensitive program data',
];

const whyChoose = [
  {
    title: 'Customization',
    text: 'We negotiate scope, data readiness, quality bar, and domain fit before you commit to a production program. Custom fine-tuned and pretrained models with hallucination guardrails and PHI handling.',
  },
  {
    title: 'Innovation',
    text: 'We bring cutting-edge architectures and evaluation methods to every engagement — from RAG patterns to agent orchestration and beyond.',
  },
  {
    title: 'Expertise',
    text: 'Researchers, MLOps engineers, and domain specialists in the loop with measurable benchmarks at every stage.',
  },
  {
    title: 'Scalability',
    text: 'Production-grade systems with cost governance, observability, and a documented handoff plan for your internal team.',
  },
];

const healthcareApps = [
  'Clinical Note Summarization (SOAP)',
  'Prior Authorization Letter Generation',
  'Patient FAQ Chatbots with PHI Guardrails',
  'Medical Coding Assistance',
  'Stack Models, Vector DBs & Frameworks',
  'Engagement Model',
];

const frameworks = [
  { title: 'AI & ML', items: ['OpenAI', 'Gemini', 'Claude', 'Llama', 'Mistral', 'RAG', 'Vector DBs'] },
  { title: 'Frontend', items: ['React', 'Vue', 'TypeScript', 'Tailwind', 'Node.js'] },
  { title: 'Backend', items: ['Node.js', 'Python', '.NET', 'Redis', 'FastAPI', 'Express'] },
  { title: 'Data & Storage', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { title: 'DevOps & Infra', items: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD'] },
  { title: 'Mobile & Desktop', items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
];

const faqs = [
  {
    q: 'What deliverables does ONAS ship for custom LLM development services?',
    a: 'Depending on scope, we ship fine-tuned or pretrained models, RAG pipelines over your proprietary stores, API wrappers with safety layers, multi-agent orchestration systems, and evaluation harnesses with MLOps handoff documentation.',
  },
  {
    q: 'Which models, vector databases, and frameworks do you use?',
    a: 'OpenAI, Anthropic Claude, Meta Llama, Mistral, Google Gemini for models; Pinecone, Qdrant, pgvector, Weaviate, Milvus for vector stores; and LangChain, LlamaIndex, Haystack, or custom pipelines — chosen per use case.',
  },
  {
    q: 'How do healthcare LLM applications handle PHI and compliance?',
    a: 'We apply data minimisation, PHI redaction, tenant isolation, audit logging, and role-based access. Model and deployment choices are reviewed for HIPAA, GDPR, and regional residency requirements before production.',
  },
  {
    q: "What is ONAS's LLM engagement model and timeline?",
    a: 'Most engagements start with a 2–4 week proof-of-concept, followed by a production build (8–16 weeks depending on scope), and a maintenance contract with defined SLAs and acceptance criteria for each phase.',
  },
  {
    q: 'Who is the intended buyer for these LLM development services?',
    a: 'CTOs, VPs of Engineering, Heads of Product, and Digital Transformation leaders at mid-to-large enterprises and funded startups who need production-grade LLM systems, not prototypes.',
  },
];

const LlmDevelopmentServices = () => {
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
      '&.Mui-focused fieldset': { borderColor: '#0B4C74' },
    },
    '& .MuiInputLabel-root': {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '.72rem',
      color: muted,
      '&.Mui-focused': { color: '#0B4C74' },
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
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(90deg, rgba(11,76,116,.94) 0%, rgba(11,76,116,.72) 55%, rgba(11,76,116,.85) 100%)' }} />

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow sx={{ color: lime }}>AI &amp; EdTech Services</Eyebrow>
            <Typography component="h1" sx={{ margin: '.4rem auto 1rem', font: "400 clamp(1.5rem, 3.2vw, 2.4rem)/1.05 Georgia, 'Times New Roman', serif", color: '#fff', maxWidth: 900 }}>
              Custom LLM Development Services for Engineering &amp; Product Leaders
            </Typography>
            <Body sx={{ color: 'rgba(255,255,255,.82) !important', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto' }}>
              Fine-tuned models, RAG pipelines, and multi-agent systems shipped to production with evaluation harnesses, governance, and MLOps handoff. Built for teams that need real outcomes, not prototypes.
            </Body>
          </motion.div>
        </Container>
      </Box>

      {/* ── What are LLM Development Services? ── */}
      <Section>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.05fr .95fr' }, gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 4rem)' }, alignItems: 'center' }}>
          <Box>
            <Eyebrow>Overview</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
              What are Custom LLM Development Services?
            </SectionHeading>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
              Custom LLM development services cover the design, fine-tuning, deployment, and
              ongoing operation of large language models tailored to your domain. Unlike generic
              API integrations, this includes data preparation on your proprietary corpora,
              evaluation harnesses, guardrails for safety and compliance, and MLOps pipelines
              that keep models production-ready as your data and requirements evolve.
            </Body>
          </Box>

          <Box sx={{ border: `1px solid ${line}`, borderRadius: '2px', overflow: 'hidden', background: '#fff', height: { xs: 220, sm: 260, md: 320 } }}>
            <Box component="img" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop" alt="LLM overview" sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </Box>
        </Box>
      </Section>

      {/* ── LLM Program Risks ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Risk De-Risk</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            LLM Program Risks Engineering Leaders Must De-Risk Early
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            CTOs and VPs of Engineering cite these gaps when LLM plans stall. Address them at the
            start — before fast technical diligence becomes urgent.
          </Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: { xs: '1rem', md: '1.2rem' }, alignItems: 'stretch' }}>
          {risks.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 4) * 0.05 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={cardSx}>
                <Box sx={{ position: 'relative', width: '100%', height: 130, overflow: 'hidden', background: soft, borderBottom: `1px solid ${line}` }}>
                  <Box component="img" src={r.image} alt={r.title} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </Box>
                <Box sx={{ padding: { xs: '1.6rem 1.2rem 1.3rem', md: '1.8rem 1.4rem 1.5rem' }, display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative' }}>
                  <Box sx={{ position: 'absolute', top: '-22px', left: '1.2rem', display: 'grid', placeItems: 'center', width: 44, height: 44, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, boxShadow: '0 4px 12px rgba(18,63,59,0.08)' }}>
                    {r.icon}
                  </Box>
                  <Typography component="h3" sx={{ margin: '1rem 0 .6rem', font: "400 clamp(.95rem, 1.5vw, 1.1rem)/1.2 Georgia, 'Times New Roman', serif", color: ink, minHeight: '2.4rem' }}>
                    {r.title}
                  </Typography>
                  <Body sx={{ flexGrow: 1, fontSize: '.66rem' }}>{r.description}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* ── What ONAS Builds / Benefits ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>What We Build</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            What ONAS Builds
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            We ship production LLM systems across the stack — from fine-tuned models to retrieval
            pipelines and MLOps handoff.
          </Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: '1.2rem', md: '1.4rem' }, alignItems: 'stretch' }}>
          {benefits.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.05 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={cardSx}>
                <Box sx={{ position: 'relative', width: '100%', height: 140, overflow: 'hidden', background: soft, borderBottom: `1px solid ${line}` }}>
                  <Box component="img" src={b.image} alt={b.title} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </Box>
                <Box sx={{ padding: { xs: '1.6rem 1.2rem 1.3rem', md: '1.8rem 1.4rem 1.5rem' }, display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative' }}>
                  <Box sx={{ position: 'absolute', top: '-22px', left: '1.2rem', display: 'grid', placeItems: 'center', width: 44, height: 44, borderRadius: '50%', background: '#fff', border: `1px solid ${line}`, boxShadow: '0 4px 12px rgba(18,63,59,0.08)' }}>
                    {b.icon}
                  </Box>
                  <Typography component="h3" sx={{ margin: '1rem 0 .6rem', font: "400 clamp(1rem, 1.6vw, 1.15rem)/1.2 Georgia, 'Times New Roman', serif", color: ink, minHeight: '2.4rem' }}>
                    {b.title}
                  </Typography>
                  <Body sx={{ flexGrow: 1, fontSize: '.66rem' }}>{b.description}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* ── Technology Stack ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Stack</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>Technology Stack</SectionHeading>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: '1.2rem', md: '1.4rem' } }}>
          {techStack.map((t, i) => (
            <Box key={i} sx={{ ...cardSx, padding: '1.4rem 1.3rem' }}>
              <Typography component="h3" sx={{ margin: '0 0 .6rem', font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif", color: ink }}>
                {t.title}
              </Typography>
              <Body sx={{ fontSize: '.66rem' }}>{t.text}</Body>
            </Box>
          ))}
        </Box>
      </Section>

      {/* ── Organizations ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Who We Serve</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>Organizations We Build LLM Systems For</SectionHeading>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem', justifyContent: 'center' }}>
          {organizations.map((o, i) => (
            <Box key={i} sx={{ padding: '.6rem 1rem', background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', fontFamily: "'Poppins', sans-serif", fontSize: '.66rem', color: ink, transition: 'all .2s ease', '&:hover': { borderColor: '#aac7b2', background: soft } }}>
              {o}
            </Box>
          ))}
        </Box>
      </Section>

      {/* ── Why Leaders Choose ONAS ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Why ONAS</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>Why Engineering Leaders Choose ONAS</SectionHeading>
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
                <Body sx={{ fontSize: '.68rem', lineHeight: 1.8 }}>{item.text}</Body>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Section>

      {/* ── Healthcare-Specific LLM Applications ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Healthcare</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>Healthcare-Specific LLM Applications</SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            Input, output, and evaluation frameworks for regulated healthcare workflows.
          </Body>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: { xs: '.7rem', md: '.8rem' } }}>
          {healthcareApps.map((item, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: '.6rem', background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: '.9rem 1rem' }}>
              <Check sx={{ color: '#5e987f', fontSize: 16, marginTop: '2px', flexShrink: 0 }} />
              <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.68rem', color: ink, lineHeight: 1.6 }}>{item}</Typography>
            </Box>
          ))}
        </Box>
      </Section>

      {/* ── Languages, Tools, Frameworks ── */}
      <Section bg={soft}>
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
      <Section>
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

              <Box component="button" type="submit" disabled={loading} sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem', padding: '.75rem 1.2rem', marginTop: '.4rem', border: 0, borderRadius: '2px', background: '#0B4C74', color: '#ffffff', fontWeight: 600, fontSize: '.66rem', fontFamily: "'Poppins', sans-serif", cursor: loading ? 'not-allowed' : 'pointer', transition: 'background .2s ease', '&:hover': { background: loading ? '#0B4C74' : '#d3ffb0', color: loading ? '#ffffff' : '#000000' } }}>
                {loading ? <CircularProgress size={18} sx={{ color: '#ffffff' }} /> : (<>Submit Form <ArrowForward sx={{ fontSize: 14 }} /></>)}
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Section>

      {/* ── FAQ ── */}
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
      <SolutionsServices />

      <Snackbar open={snackbar.open} autoHideDuration={5000} onClose={() => setSnackbar({ ...snackbar, open: false })} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </PageShell>
  );
};

export default LlmDevelopmentServices;