import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ArrowForward, Check } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GitBranch, Cloud, Zap, Server, Shield, Database, Settings,
  Rocket, Cpu, Lock, Award, Globe, Layers, Activity, Terminal,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import {
  PageShell, Section, Eyebrow, SectionHeading, SubHeading, Body, LimeButton,
  cardSx, containerSx, heroHeadingSx, ink, muted, line, soft, cream, lime,
} from '../../../theme/theme';

import D1 from '../../../assets/images/solutions/devops/devops1.jpg';
import D2 from '../../../assets/images/solutions/devops/devops2.jpg';
import D3 from '../../../assets/images/solutions/devops/devops3.jpg';
import D4 from '../../../assets/images/solutions/devops/devops4.jpg';
import D5 from '../../../assets/images/solutions/devops/devops5.jpg';
import D6 from '../../../assets/images/solutions/devops/devops6.jpg';
import D7 from '../../../assets/images/solutions/devops/devops7.jpg';
import D8 from '../../../assets/images/solutions/devops/devops8.jpg';

const slides = [D1, D2, D3];

const sectionSurface = '#f3f7fa';
const customCardSx = {
  ...cardSx,
  borderRadius: '6px',
  '&:hover': {
    borderColor: '#0B4C74',
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 28px rgba(11,76,116,.08)',
  },
};

const DevOps = () => {
  const location = useLocation();
  const baseUrl = 'https://onasglobal.com';
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const seoData = {
    title: 'DevOps Services | CI/CD, Kubernetes, Infrastructure Automation | ONAS',
    description: 'DevOps services for modern engineering teams — CI/CD pipelines, Kubernetes, IaC, observability, and platform engineering. Ship faster with confidence.',
    keywords: 'devops services, CI CD pipelines, kubernetes, infrastructure as code, terraform, platform engineering, ONAS',
    canonicalUrl: `${baseUrl}${location.pathname}`,
    ogImage: slides[0],
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'DevOps Services',
    description: 'DevOps engineering and automation services',
    provider: { '@type': 'Organization', name: 'ONAS' },
    serviceType: ['DevOps', 'CI/CD', 'Kubernetes', 'Infrastructure Automation'],
    areaServed: 'Global',
  };

  const stats = [
    { value: '10x', label: 'Faster Deployments' },
    { value: '85%', label: 'Less Manual Work' },
    { value: '99.99%', label: 'Uptime Achieved' },
    { value: '50%', label: 'Cloud Cost Reduction' },
    { value: '<5min', label: 'MTTR' },
    { value: '200+', label: 'Pipelines Built' },
  ];

  const problems = [
    { num: '01', title: 'Slow, fragile release cycles', text: 'Deployments take hours, rollbacks are painful, and engineers spend more time babysitting releases than shipping features.' },
    { num: '02', title: 'Manual infrastructure that drifts', text: 'Servers configured by hand, environments that differ between dev and prod, and nobody quite sure what is actually running.' },
    { num: '03', title: 'No visibility into failures', text: 'When something breaks in production, teams scramble across five tools. MTTR stretches into hours because logs, metrics, and traces live in different places.' },
    { num: '04', title: 'Cloud costs spiraling without controls', text: 'Autoscaling misconfigured, idle resources never shut down, and nobody can explain why the AWS bill keeps growing.' },
    { num: '05', title: 'Security bolted on late', text: 'Secrets in code, no SAST/DAST in pipelines, and compliance checks done weeks after deployments. DevSecOps becomes a fire drill, not a practice.' },
    { num: '06', title: 'Kubernetes complexity without payoff', text: 'Clusters stood up but not optimized. Team still fighting YAML, missing Helm charts, no service mesh, and no cost visibility.' },
  ];

  const offerings = [
    { num: '01', icon: <GitBranch size={20} color="#0B4C74" />, title: 'CI/CD Pipelines', text: 'Automated builds, tests, and zero-downtime deployments across GitHub Actions, GitLab CI, Jenkins, and ArgoCD.', image: D4, bullets: ['Multi-stage pipelines with quality gates', 'Blue/green and canary deployments', 'Automated rollback on failure'] },
    { num: '02', icon: <Cloud size={20} color="#0B4C74" />, title: 'Kubernetes & Containers', text: 'Production-grade EKS, AKS, GKE, or self-managed clusters with Helm, Istio service mesh, and autoscaling.', image: D5, bullets: ['EKS, AKS, GKE, self-managed', 'Helm charts and GitOps workflows', 'Autoscaling and cost optimization'] },
    { num: '03', icon: <Server size={20} color="#0B4C74" />, title: 'Infrastructure as Code', text: 'Terraform, Pulumi, CloudFormation, and Ansible pipelines that make infrastructure reproducible and auditable.', image: D6, bullets: ['Terraform, Pulumi, CloudFormation', 'GitOps-driven infrastructure changes', 'Full audit trail for compliance'] },
    { num: '04', icon: <Shield size={20} color="#0B4C74" />, title: 'DevSecOps', text: 'Shift security left with SAST, DAST, secret scanning, and policy-as-code baked into every pipeline.', image: D7, bullets: ['SAST, DAST, SCA in pipelines', 'Secret scanning and rotation', 'Policy-as-code enforcement'] },
    { num: '05', icon: <Activity size={20} color="#0B4C74" />, title: 'Observability', text: 'Logs, metrics, and traces unified with Prometheus, Grafana, Datadog, or ELK — with actionable alerting.', image: D8, bullets: ['Prometheus, Grafana, Datadog, ELK', 'Distributed tracing and APM', 'SLO-based alerting'] },
    { num: '06', icon: <Terminal size={20} color="#0B4C74" />, title: 'Platform Engineering', text: 'Internal developer platforms that abstract away complexity and give teams self-service deployment capabilities.', image: D1, bullets: ['Internal developer portals', 'Self-service environments', 'Golden paths and templates'] },
  ];

  const layers = [
    { num: '01', title: 'Developers', subtitle: 'Everyone shipping code', tags: ['Local dev', 'IDE plugins', 'CLI tools', 'Internal portal', 'Docs'], dark: true },
    { num: '02', title: 'CI/CD Layer', subtitle: 'From commit to production', tags: ['GitHub Actions', 'ArgoCD', 'Jenkins', 'GitLab CI', 'Quality gates'] },
    { num: '03', title: 'Orchestration', subtitle: 'Where workloads actually run', tags: ['Kubernetes', 'Helm', 'Istio', 'Service mesh', 'Autoscaling'] },
    { num: '04', title: 'Infrastructure', subtitle: 'Cloud and on-prem foundations', tags: ['AWS', 'Azure', 'GCP', 'Terraform', 'Observability'] },
  ];

  const process = [
    { num: '01', title: 'Assess & Baseline', text: 'We audit your current pipelines, infrastructure, security posture, and cloud spend to find the biggest wins.' },
    { num: '02', title: 'Design & Automate', text: 'We design the target architecture and build the IaC, CI/CD, and observability layers — sprint by sprint.' },
    { num: '03', title: 'Migrate & Harden', text: 'Workloads move to the new stack incrementally. Security and compliance are validated at every stage.' },
    { num: '04', title: 'Operate & Improve', text: 'Ongoing SRE support, cost optimization, and continuous improvement of pipelines and platform tooling.' },
  ];

  const timeline = [
    { num: '01', title: 'Audit', text: 'Week 1–2' },
    { num: '02', title: 'Design', text: 'Week 3–4' },
    { num: '03', title: 'Implement', text: 'Week 5–10' },
    { num: '04', title: 'Harden', text: 'Week 11–12' },
    { num: '05', title: 'Operate', text: 'Ongoing' },
  ];

  const whyChoose = [
    { num: '01', icon: <Zap size={20} color="#0B4C74" />, title: 'Ship 10x Faster', text: 'Deployments drop from hours to minutes. Developers get their time back for shipping features.' },
    { num: '02', icon: <Shield size={20} color="#0B4C74" />, title: 'Security Built In', text: 'DevSecOps, secret management, and compliance-as-code are the default — not an afterthought.' },
    { num: '03', icon: <Activity size={20} color="#0B4C74" />, title: 'Full Observability', text: 'Unified logs, metrics, and traces across your entire stack with SLO-based alerting.' },
    { num: '04', icon: <Database size={20} color="#0B4C74" />, title: 'Cost Optimization', text: 'Rightsizing, autoscaling, and spot instance strategies that cut cloud spend by 30–50%.' },
    { num: '05', icon: <Cpu size={20} color="#0B4C74" />, title: 'Kubernetes Depth', text: 'Certified Kubernetes engineers running production clusters for enterprise workloads.' },
    { num: '06', icon: <Globe size={20} color="#0B4C74" />, title: 'Multi-Cloud Ready', text: 'AWS, Azure, GCP, and hybrid environments — no lock-in, no vendor bias.' },
    { num: '07', icon: <Lock size={20} color="#0B4C74" />, title: 'Compliance-Ready', text: 'SOC 2, HIPAA, PCI DSS, and ISO 27001 controls built into pipelines from day one.' },
    { num: '08', icon: <Award size={20} color="#0B4C74" />, title: 'Proven Track Record', text: '200+ pipelines built, 99.99% uptime achieved across production systems.' },
  ];

  const techStack = {
    'CI/CD': ['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD', 'CircleCI', 'Tekton'],
    'Containers & Orchestration': ['Kubernetes', 'Docker', 'Helm', 'Istio', 'Kustomize', 'OpenShift'],
    'Infrastructure as Code': ['Terraform', 'Pulumi', 'CloudFormation', 'Ansible', 'Crossplane'],
    'Cloud Platforms': ['AWS', 'Azure', 'GCP', 'Oracle Cloud', 'DigitalOcean'],
    'Observability': ['Prometheus', 'Grafana', 'Datadog', 'ELK Stack', 'Jaeger', 'OpenTelemetry'],
    'Security': ['Vault', 'Trivy', 'Snyk', 'Falco', 'OPA', 'SonarQube'],
  };

  return (
    <PageShell>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      </Helmet>

      <Box sx={{ position: 'relative', marginTop: { xs: '72px', sm: '76px', md: '92px', lg: '100px' }, minHeight: { xs: 520, md: 580 }, padding: { xs: '4rem 1rem 3rem', md: '6rem 2.5rem 4rem' }, overflow: 'hidden', background: ink, isolation: 'isolate', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -2, overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 1.1, ease: 'easeInOut' }} style={{ position: 'absolute', inset: 0, backgroundImage: `url(${slides[currentSlide]})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
          </AnimatePresence>
          <Box sx={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, rgba(255,255,255,.10) 0%, rgba(0,0,0,.45) 100%)' }} />
        </Box>

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Eyebrow sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)' }}>DevOps Services</Eyebrow>
          <Typography component="h1" sx={{ ...heroHeadingSx, color: '#ffffff', marginLeft: 'auto', marginRight: 'auto', textShadow: '0 2px 12px rgba(0,0,0,.95), 0 1px 3px rgba(0,0,0,1)' }}>
            DevOps That Ships Faster, Safer, and Cheaper
          </Typography>
          <Body sx={{ color: '#ffffff !important', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto', marginBottom: '1.8rem', textShadow: '0 1px 8px rgba(0,0,0,.95)' }}>
            Modernize your delivery pipeline with CI/CD, Kubernetes, IaC, and observability — engineered to ship 10x faster with confidence.
          </Body>
          <LimeButton href="/resources/contact-us">Contact Us <ArrowForward sx={{ fontSize: 14 }} /></LimeButton>
        </Container>
      </Box>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>The Problem</Eyebrow>
          <SectionHeading sx={{ maxWidth: 800, margin: '.6rem auto 1rem' }}>Why Most Engineering Teams Are Stuck in Delivery Debt</SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>At ONAS, we see the same delivery bottlenecks before every DevOps engagement.</Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2, alignItems: 'stretch' }}>
          {problems.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={customCardSx}>
                <Typography sx={{ color: ink, fontWeight: 700, fontSize: '.55rem', fontFamily: "'Poppins', sans-serif", marginBottom: '.6rem', letterSpacing: '.06em' }}>{p.num}</Typography>
                <SubHeading sx={{ marginBottom: '.5rem' }}>{p.title}</SubHeading>
                <Body sx={{ flexGrow: 1 }}>{p.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
          <Body sx={{ fontSize: '.62rem', fontStyle: 'italic', marginBottom: '1rem' }}>If three or more of these sound familiar, your delivery pipeline is costing you more than you think.</Body>
          <LimeButton href="/resources/contact-us">Book A Free DevOps Audit <ArrowForward sx={{ fontSize: 14 }} /></LimeButton>
        </Box>
      </Section>

      <Section bg={sectionSurface}>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>Architecture</Eyebrow>
          <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>How a Modern DevOps Stack Layers Together</SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>Developers at the top. Cloud infrastructure at the bottom. CI/CD and orchestration in the middle connect everything.</Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.05fr .95fr' }, gap: { xs: '1.5rem', md: '2rem' }, alignItems: 'center' }}>
          <Box>
            {layers.map((layer, i) => (
              <Box key={i}>
                <Box sx={{ background: layer.dark ? ink : soft, border: `1px solid ${line}`, borderRadius: '6px', padding: '1rem 1.2rem', marginBottom: '.5rem' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: '.5rem' }}>
                    <Box sx={{ background: layer.dark ? lime : ink, color: layer.dark ? ink : '#fff', borderRadius: '2px', padding: '.15rem .4rem', fontSize: '.5rem', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>{layer.num}</Box>
                    <Typography sx={{ fontWeight: 400, color: layer.dark ? '#fff' : ink, fontSize: '.72rem', fontFamily: "Georgia, serif" }}>{layer.title}</Typography>
                  </Box>
                  <Typography sx={{ color: layer.dark ? 'rgba(255,255,255,.85)' : muted, fontSize: '.55rem', marginBottom: '.6rem', fontFamily: "'Poppins', sans-serif" }}>{layer.subtitle}</Typography>
                  <Box sx={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
                    {layer.tags.map((tag, ti) => (
                      <Box key={ti} sx={{ background: layer.dark ? 'rgba(255,255,255,.15)' : cream, border: layer.dark ? 'none' : `1px solid ${line}`, color: layer.dark ? '#fff' : ink, fontSize: '.48rem', padding: '.2rem .55rem', borderRadius: '12px', fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}>{tag}</Box>
                    ))}
                  </Box>
                </Box>
                {i < layers.length - 1 && <Box sx={{ textAlign: 'center', color: muted, fontSize: '.9rem', marginBottom: '.5rem' }}>↓</Box>}
              </Box>
            ))}
          </Box>
          <Box sx={{ minHeight: { xs: 260, md: 440 }, height: '100%', overflow: 'hidden', border: `1px solid ${line}`, borderRadius: '6px' }}>
            <Box component="img" src={D2} alt="DevOps pipeline visualization" sx={{ width: '100%', height: '100%', minHeight: { xs: 260, md: 440 }, objectFit: 'cover', display: 'block' }} />
          </Box>
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>The Work</Eyebrow>
          <SectionHeading sx={{ maxWidth: 800, margin: '.6rem auto 1rem' }}>End-to-End DevOps Services for Modern Engineering Teams</SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>From pipelines to platform engineering — everything that lets your team ship faster with confidence.</Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2, alignItems: 'stretch' }}>
          {offerings.map((o, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={{ ...customCardSx, padding: 0, overflow: 'hidden' }}>
                <Box component="img" src={o.image} alt={o.title} sx={{ width: '100%', height: { xs: 150, md: 170 }, objectFit: 'cover', display: 'block' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: { xs: '1.2rem 1rem', md: '1.4rem 1.2rem' }, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.7rem', minWidth: 0 }}>
                      <Box sx={{ width: 28, height: 28, borderRadius: '50%', background: cream, border: `1px solid ${line}`, display: 'grid', placeItems: 'center', color: ink, fontWeight: 700, fontSize: '.55rem', flexShrink: 0 }}>{o.num}</Box>
                      <SubHeading>{o.title}</SubHeading>
                    </Box>
                    <Box sx={{ width: 36, height: 36, borderRadius: '50%', background: cream, border: `1px solid ${line}`, display: 'grid', placeItems: 'center', flexShrink: 0 }}>{o.icon}</Box>
                  </Box>
                  <Body sx={{ marginBottom: '1rem', flexGrow: 1 }}>{o.text}</Body>
                  <Box sx={{ background: cream, border: `1px solid ${line}`, borderRadius: '2px', padding: '.8rem .9rem', width: '100%' }}>
                    <Typography sx={{ fontWeight: 700, color: ink, fontSize: '.5rem', marginBottom: '.5rem', letterSpacing: '.06em', textTransform: 'uppercase', fontFamily: "'Poppins', sans-serif" }}>What You Get</Typography>
                    {o.bullets.map((b, bi) => (
                      <Box key={bi} sx={{ display: 'flex', alignItems: 'flex-start', gap: '.5rem', marginBottom: '.4rem' }}>
                        <Check sx={{ fontSize: 12, color: ink, marginTop: '.15rem', flexShrink: 0 }} />
                        <Typography sx={{ color: muted, fontSize: '.55rem', lineHeight: 1.5, fontFamily: "'Poppins', sans-serif" }}>{b}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
          <LimeButton href="/resources/contact-us">Share Your Requirement <ArrowForward sx={{ fontSize: 14 }} /></LimeButton>
        </Box>
      </Section>

      <Box sx={{ background: soft, borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}` }}>
        <Container maxWidth={false} disableGutters sx={containerSx}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' }, padding: { xs: '1.5rem 0', md: '2rem 0' } }}>
            {stats.map((s, i) => (
              <Box key={i} sx={{ textAlign: 'center', padding: '.5rem' }}>
                <Typography sx={{ fontWeight: 400, fontFamily: "Georgia, serif", fontSize: { xs: '1.1rem', md: '1.5rem' }, color: ink, lineHeight: 1 }}>{s.value}</Typography>
                <Typography sx={{ fontSize: '.5rem', color: muted, marginTop: '.35rem', textTransform: 'uppercase', letterSpacing: '.06em', fontFamily: "'Poppins', sans-serif" }}>{s.label}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Section id="how-we-work">
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>Our Process</Eyebrow>
          <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>How We Modernize Your Delivery Pipeline</SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>Four stages, each designed to compound velocity and reliability. If the audit says you should optimize rather than rebuild, you hear that in week one.</Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' }, gap: 2, alignItems: 'stretch' }}>
          {process.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={{ ...customCardSx, alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ width: 36, height: 36, borderRadius: '50%', background: ink, color: '#fff', display: 'grid', placeItems: 'center', marginBottom: '1rem', fontWeight: 700, fontSize: '.6rem', fontFamily: "'Poppins', sans-serif", flexShrink: 0 }}>{p.num}</Box>
                <SubHeading sx={{ marginBottom: '.5rem', textAlign: 'center' }}>{p.title}</SubHeading>
                <Body sx={{ textAlign: 'center', flexGrow: 1 }}>{p.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>

        <Box sx={{ marginTop: '2rem', background: sectionSurface, border: `1px solid ${line}`, borderRadius: '2px', padding: '1.4rem' }}>
          <Typography sx={{ fontWeight: 400, color: ink, fontSize: '.75rem', marginBottom: '1rem', fontFamily: "Georgia, serif" }}>From First Call to Operated Pipeline</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(5, minmax(0, 1fr))' }, gap: 1.5 }}>
            {timeline.map((t, i) => (
              <Box key={i}>
                <Box sx={{ border: `1px solid ${line}`, borderRadius: '2px', padding: '.8rem', background: cream }}>
                  <Typography sx={{ color: ink, fontWeight: 700, fontSize: '.52rem', marginBottom: '.3rem', fontFamily: "'Poppins', sans-serif" }}>{t.num}</Typography>
                  <Typography sx={{ fontWeight: 400, color: ink, fontSize: '.62rem', fontFamily: "Georgia, serif" }}>{t.title}</Typography>
                  <Typography sx={{ color: muted, fontSize: '.48rem', marginTop: '.2rem', fontFamily: "'Poppins', sans-serif" }}>{t.text}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      <Section bg={sectionSurface}>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>Technology Stack</Eyebrow>
          <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>Our DevOps Technology Expertise</SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>The tools we work in daily — chosen by what fits your team, not by what is trending.</Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2, alignItems: 'stretch' }}>
          {Object.entries(techStack).map(([category, items], i) => (
            <Box key={i} sx={{ display: 'flex' }}>
              <Box sx={{ ...customCardSx, background: soft }}>
                <SubHeading sx={{ marginBottom: '.7rem' }}>{category}</SubHeading>
                <Box sx={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.2rem' }}>
                  {items.map((tech, ti) => (
                    <Box key={ti} sx={{ background: cream, border: `1px solid ${line}`, color: ink, fontSize: '.48rem', padding: '.25rem .6rem', borderRadius: '12px', fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}>{tech}</Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Eyebrow>Why ONAS</Eyebrow>
          <SectionHeading sx={{ maxWidth: 720, margin: '.6rem auto 1rem' }}>Why Choose ONAS for DevOps?</SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>Here is what differentiates ONAS in delivering DevOps transformation for enterprise teams.</Body>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2, alignItems: 'stretch' }}>
          {whyChoose.map((w, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={customCardSx}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', width: '100%' }}>
                  <Box sx={{ width: 28, height: 28, borderRadius: '50%', background: ink, color: '#fff', display: 'grid', placeItems: 'center', fontSize: '.55rem', fontWeight: 700, fontFamily: "'Poppins', sans-serif", flexShrink: 0 }}>{w.num}</Box>
                  <Box sx={{ width: 32, height: 32, borderRadius: '50%', background: cream, border: `1px solid ${line}`, display: 'grid', placeItems: 'center', flexShrink: 0 }}>{w.icon}</Box>
                </Box>
                <SubHeading sx={{ marginBottom: '.5rem' }}>{w.title}</SubHeading>
                <Body sx={{ flexGrow: 1 }}>{w.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Box sx={{ background: sectionSurface, borderTop: `1px solid ${line}` }}>
        <Container maxWidth={false} disableGutters sx={containerSx}>
          <Box sx={{ maxWidth: 800, mx: 'auto', padding: { xs: '3rem 1rem', md: '4rem 0' }, textAlign: 'center' }}>
            <Eyebrow>Get Started</Eyebrow>
            <SectionHeading sx={{ margin: '.6rem auto 1rem' }}>Ready to Modernize Your Delivery Pipeline?</SectionHeading>
            <Body sx={{ marginBottom: '1.8rem', maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>At ONAS, we combine platform engineering, SRE discipline, and cloud economics to transform how your team ships software. Let's talk about your delivery goals.</Body>
            <LimeButton href="/resources/contact-us">Book An Appointment <ArrowForward sx={{ fontSize: 14 }} /></LimeButton>
          </Box>
        </Container>
      </Box>
    </PageShell>
  );
};

export default DevOps;