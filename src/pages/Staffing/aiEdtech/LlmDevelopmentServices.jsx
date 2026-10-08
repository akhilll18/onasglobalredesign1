import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, Check, ExpandMore } from '@mui/icons-material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import GavelIcon from '@mui/icons-material/Gavel';

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

import Llm1 from '@/assets/images/staffing/AI & EdTech Services/LLM development/llm1.jpg';
import Llm2 from '@/assets/images/staffing/AI & EdTech Services/LLM development/llm2.jpg';
import Llm3 from '@/assets/images/staffing/AI & EdTech Services/LLM development/llm3.jpg';
import Llm4 from '@/assets/images/staffing/AI & EdTech Services/LLM development/llm4.jpg';
import Llm5 from '@/assets/images/staffing/AI & EdTech Services/LLM development/llm5.jpg';
import Llm6 from '@/assets/images/staffing/AI & EdTech Services/LLM development/llm6.jpg';
import Llm7 from '@/assets/images/staffing/AI & EdTech Services/LLM development/llm7.jpg';
import Llm8 from '@/assets/images/staffing/AI & EdTech Services/LLM development/llm8.jpg';
import Llm9 from '@/assets/images/staffing/AI & EdTech Services/LLM development/llm9.jpg';

const risks = [
  { title: 'Undefined Deliverables', description: "Teams need clarity on what vendors ship — fine-tuned models, API wrappers, or multi-agent systems. Scope definition prevents 'we built it but it doesn't work' outcomes.", icon: <CheckCircleIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Llm1 },
  { title: 'Opaque Model and Stack Choices', description: 'Without named providers, model families, and versions, architecture reviews stall. Locking the stack early removes ambiguity and speeds up sign-off.', icon: <SecurityIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Llm2 },
  { title: 'Hallucination and PHI Exposure', description: 'Clinical summarization, prior auth, and coding must be audit-ready. Retrofitted multi-tenant environments have zero tolerance for hallucinations.', icon: <TrendingUpIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Llm3 },
  { title: 'No Phased Engagement Path', description: 'Leaders expect a 2–4 week proof-of-concept, a production build, and a maintenance contract with clear acceptance criteria for each phase.', icon: <IntegrationInstructionsIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Llm4 },
];

const benefits = [
  { title: 'Fine-Tuned Domain Models', description: 'We fine-tune open and commercial base models on your proprietary corpora with evaluation harnesses, regression sets, and rollback plans.', icon: <CheckCircleIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Llm5 },
  { title: 'RAG Pipelines Over Your Data', description: 'Embeddings land in the vector store of your choice with refresh cadence tuned to your data freshness, latency, and cost requirements.', icon: <DataUsageIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Llm6 },
  { title: 'Multi-Agent Orchestration', description: 'We implement chains, agents, and graphs with LangChain, LlamaIndex, Haystack, or custom pipelines based on use case, latency, and debugging needs.', icon: <AutorenewIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: Llm7 },
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
  { title: 'Customization', text: 'We negotiate scope, data readiness, quality bar, and domain fit before you commit to a production program. Custom fine-tuned and pretrained models with hallucination guardrails and PHI handling.' },
  { title: 'Innovation', text: 'We bring cutting-edge architectures and evaluation methods to every engagement — from RAG patterns to agent orchestration and beyond.' },
  { title: 'Expertise', text: 'Researchers, MLOps engineers, and domain specialists in the loop with measurable benchmarks at every stage.' },
  { title: 'Scalability', text: 'Production-grade systems with cost governance, observability, and a documented handoff plan for your internal team.' },
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
  { q: 'What deliverables does ONAS ship for custom LLM development services?', a: 'Depending on scope, we ship fine-tuned or pretrained models, RAG pipelines over your proprietary stores, API wrappers with safety layers, multi-agent orchestration systems, and evaluation harnesses with MLOps handoff documentation.' },
  { q: 'Which models, vector databases, and frameworks do you use?', a: 'OpenAI, Anthropic Claude, Meta Llama, Mistral, Google Gemini for models; Pinecone, Qdrant, pgvector, Weaviate, Milvus for vector stores; and LangChain, LlamaIndex, Haystack, or custom pipelines — chosen per use case.' },
  { q: 'How do healthcare LLM applications handle PHI and compliance?', a: 'We apply data minimisation, PHI redaction, tenant isolation, audit logging, and role-based access. Model and deployment choices are reviewed for HIPAA, GDPR, and regional residency requirements before production.' },
  { q: "What is ONAS's LLM engagement model and timeline?", a: 'Most engagements start with a 2–4 week proof-of-concept, followed by a production build (8–16 weeks depending on scope), and a maintenance contract with defined SLAs and acceptance criteria for each phase.' },
  { q: 'Who is the intended buyer for these LLM development services?', a: 'CTOs, VPs of Engineering, Heads of Product, and Digital Transformation leaders at mid-to-large enterprises and funded startups who need production-grade LLM systems, not prototypes.' },
];

const LlmDevelopmentServices = () => {
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
          backgroundImage: `url(${Llm3})`,
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
              Custom LLM Development Services for Engineering &amp; Product Leaders
            </Typography>
            <Body sx={{ color: '#ffffff !important', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto', textShadow: '0 1px 8px rgba(0,0,0,.95)' }}>
              Fine-tuned models, RAG pipelines, and multi-agent systems shipped to production with evaluation harnesses, governance, and MLOps handoff. Built for teams that need real outcomes, not prototypes.
            </Body>
          </motion.div>
        </Container>
      </Box>

      <Section>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.05fr .95fr' }, gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 4rem)' }, alignItems: 'center' }}>
          <Box>
            <Eyebrow>Overview</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
              What are Custom LLM Development Services?
            </SectionHeading>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
              Custom LLM development services cover the design, fine-tuning, deployment, and ongoing operation of large language models tailored to your domain. Unlike generic API integrations, this includes data preparation on your proprietary corpora, evaluation harnesses, guardrails for safety and compliance, and MLOps pipelines that keep models production-ready as your data and requirements evolve.
            </Body>
          </Box>

          <Box sx={{ border: `1px solid ${line}`, borderRadius: '2px', overflow: 'hidden', background: '#fff', height: { xs: 220, sm: 260, md: 320 } }}>
            <Box component="img" src={Llm4} alt="LLM overview" sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </Box>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Risk De-Risk</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            LLM Program Risks Engineering Leaders Must De-Risk Early
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            CTOs and VPs of Engineering cite these gaps when LLM plans stall. Address them at the start — before fast technical diligence becomes urgent.
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

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>What We Build</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            What ONAS Builds
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            We ship production LLM systems across the stack — from fine-tuned models to retrieval pipelines and MLOps handoff.
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

export default LlmDevelopmentServices;