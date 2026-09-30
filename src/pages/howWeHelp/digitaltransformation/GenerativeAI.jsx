import React, { useState, useRef, useEffect } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { ArrowForward } from '@mui/icons-material';

// Shared design
import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  SubHeading,
  Body,
  cardSx,
  containerSx,
  ink, muted, line, soft, lime,
} from '../../../theme/theme';

// Images
import RevolutionImg from '../../../assets/images/howWeHelp/GenAI/revolution.png';
import ImpactImg from '../../../assets/images/howWeHelp/GenAI/impact.png';
import NewyorkImg from '../../../assets/images/howWeHelp/GenAI/newyork.png';
import InfographicImg from '../../../assets/images/howWeHelp/GenAI/infographic.png';
import BKImg from '../../../assets/images/howWeHelp/GenAI/bk.png';
import TechEvolveImg from '../../../assets/images/howWeHelp/GenAI/techevolve.png';
import ThinkImg from '../../../assets/images/howWeHelp/GenAI/think.png';
import DeepDiveImg from '../../../assets/images/howWeHelp/GenAI/deepdive.png';
import ArticleImg from '../../../assets/images/howWeHelp/GenAI/article.png';
import MultiAgentImg from '../../../assets/images/howWeHelp/GenAI/multiagent.png';
import JobImg from '../../../assets/images/howWeHelp/GenAI/job.png';
import HinderImg from '../../../assets/images/howWeHelp/GenAI/hinder.png';
import FutureImg from '../../../assets/images/howWeHelp/GenAI/future.png';
import RethinkImg from '../../../assets/images/howWeHelp/GenAI/rethink.png';
import ConsumerImg from '../../../assets/images/howWeHelp/GenAI/consumer.png';
import PublicFacImg from '../../../assets/images/howWeHelp/GenAI/publicfac.png';

const sections = [
  { title: "The generative AI revolution", text: "Dive into our latest thought leadership to uncover gen AI's wide-ranging impacts across industries—and its transformative potential.", image: RevolutionImg },
  { title: "The global impact of generative AI", text: "Here's a comprehensive look at macroeconomic and societal implications of gen AI and how it will impact productivity on a global scale.", tag: "INTERACTIVE REPORT", image: ImpactImg },
  { title: "New work, new world", text: "Gen AI could deliver more than $1 trillion in annual growth by 2032, while disrupting up to 90% of jobs. Navigate this upheaval by investing in people.", tag: "INTERACTIVE REPORT", cta: "Read the interactive report", image: NewyorkImg, link: "https://www.cognizant.com/us/en/gen-ai-economic-model-oxford-economics" },
  { title: "Gen AI momentum: accelerators and inhibitors", text: "By understanding the biggest barriers inhibiting gen AI adoption, businesses can continue to generate momentum and realize the powerful productivity gains it has to offer.", tag: "DEEP DIVE", image: DeepDiveImg, link: "https://www.cognizant.com/us/en/insights/insights-blog/gen-ai-strategy-wf2851465" },
  { title: "What businesses need to know", text: "Take a look into the near future of orchestrated AI, when AI agents begin to talk to each other. Learn how to get your business started.", tag: "INTERACTIVE REPORT", cta: "Know more", image: BKImg, link: "https://www.cognizant.com/us/en/generative-ai-future-of-work" },
  { title: "Tech evolution", text: "Gen AI creates business opportunities in unprecedented ways. But tech teams must see things in a completely new light to seize the prospects.", tag: "INTERACTIVE REPORT", image: TechEvolveImg },
  { title: "Think like an AI native", text: "Existing businesses can't become AI natives themselves, but they need to stay vigilant as these AI upstarts seize new market opportunities. By actively studying how AI-native businesses put AI into the core of their operations and technology, established companies can reap the benefits of thinking and acting like their newest competitors.", tag: "INTERACTIVE REPORT", cta: "Know more", image: ThinkImg, link: "https://www.cognizant.com/us/en/ai-native-business" },
  { title: "AI integration strategies for modern tech stacks", text: "Remain competitive within an AI-native world with four integration strategies that can help transform processes and create innovative product offerings.", tag: "INFOGRAPHIC", cta: "Know more", image: InfographicImg, link: "https://www.cognizant.com/en_us/insights/documents/cognizant-ai-integration-strategies-for-modern-tech-stacks.pdf" },
  { title: "Technology lessons from AI natives", text: "Learn how traditional businesses can compete with emerging AI-native businesses.", tag: "ARTICLE", cta: "Know more", image: ArticleImg, link: "https://www.cognizant.com/us/en/insights/insights-blog/businesses-prepare-for-ai-natives-wf2777725" },
  { title: "Multi-agent AI is set to revolutionize enterprise operations", text: "AI's killer function is coming, and it could transform business operations sooner than you think. Uncover how AI agents are breaking down silos and connecting disparate software to create a single-interface enterprise operations platform.", cta: "Know more", image: MultiAgentImg, link: "https://www.cognizant.com/us/en/insights/insights-blog/multi-agent-ai-to-revolutionize-enterprise-operations" },
  { title: "Jobs and skilling", text: "Gen AI is set to shake up the job market, displacing some and prompting others to reskill.", tag: "ARTICLE", image: JobImg },
  { title: "Will gen AI help or hinder women?", text: "The skewed impact of gen AI on women in the workplace cannot be ignored. Businesses must implement actions now to address this imbalance.", tag: "ARTICLE", cta: "Know more", image: HinderImg, link: "https://www.cognizant.com/us/en/insights/insights-blog/gen-ai-impact-on-women-in-the-workplace-wf2458851" },
  { title: "Future of human skills", text: "HR leaders face a mammoth task in guiding their people through a period of adjustment—helping to work with gen AI and not against it.", tag: "ARTICLE", cta: "Know more", image: FutureImg, link: "https://www.cognizant.com/us/en/insights/insights-blog/the-people-who-will-thrive-as-ai-transforms-the-enterprise-wf2233399" },
  { title: "Generative AI requires a skills rethink", text: "Gen AI is reshaping workforce skills, shining a spotlight on critical thinking, communication and decision-making.", tag: "ARTICLE", cta: "Know more", image: RethinkImg, link: "https://www.cognizant.com/us/en/insights/insights-blog/generative-ai-in-the-workforce-wf2343510" },
  { title: "Building consumer trust in AI", text: "Only a third of consumers trust gen AI. But with the right approach, businesses can build strategies to win their hearts and minds.", tag: "DEEP DIVE", image: ConsumerImg, link: "https://www.cognizant.com/us/en/insights/insights-blog/building-consumer-trust-in-ai-wf2729750", cta: "Know more" },
  { title: "Public-facing gen AI: Five tips to overcome skepticism", text: "Businesses must work to build a solid foundation of trust for their customers—from the very start of their AI adoption journey.", image: PublicFacImg, link: "https://www.cognizant.com/us/en/insights/insights-blog/5-tips-to-overcome-public-skepticism-of-gen-ai-wf2501119" },
];

const stats = [
  { value: '15+', label: 'AI Research Reports' },
  { value: '$1T+', label: 'Economic Impact' },
  { value: '90%', label: 'Jobs Impacted' },
  { value: '2025', label: 'Latest Research' },
];

export default function GenerativeAI() {
  const [expanded, setExpanded] = useState({});
  const baseUrl = window.location.origin;

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <PageShell>
      <Helmet>
        <title>Generative AI Insights & Research | Latest AI Trends & Business Impact 2024</title>
        <meta name="description" content="Explore comprehensive Generative AI insights, research reports, and industry analysis. Discover AI trends, business impact, implementation strategies, and future predictions for enterprise transformation." />
        <meta name="keywords" content="Generative AI, AI insights, ChatGPT, GPT-4, AI research, artificial intelligence, machine learning, AI business impact, AI implementation, AI strategy, enterprise AI" />
        <link rel="canonical" href={`${baseUrl}/insights/generative-ai`} />
        <meta property="og:title" content="Generative AI Insights & Research | Latest AI Trends & Business Impact 2024" />
        <meta property="og:description" content="Comprehensive Generative AI insights, research reports, and industry analysis for business leaders and AI practitioners." />
        <meta property="og:image" content={RevolutionImg} />
        <meta property="og:url" content={`${baseUrl}/insights/generative-ai`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Generative AI Insights & Research | Latest AI Trends" />
        <meta name="twitter:description" content="Explore comprehensive Generative AI insights and research for enterprise transformation." />
        <meta name="twitter:image" content={RevolutionImg} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS AI Research Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="content-language" content="en" />
      </Helmet>

      {/* Heading */}
      <Section>
        <Box sx={{ textAlign: 'center', mt: { xs: '3rem', md: '5rem'}}}>
          <Eyebrow>Insights &amp; Research</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Generative AI Insights &amp; Research
          </SectionHeading>
          <Body sx={{ maxWidth: 700, margin: '0 auto .6rem', fontSize: '.72rem', lineHeight: 1.75 }}>
            Comprehensive analysis of Generative AI trends, business impact, implementation strategies, and future predictions.
          </Body>
          <Body sx={{ maxWidth: 700, margin: '0 auto', fontSize: '.68rem', lineHeight: 1.7 }}>
            Explore our collection of research reports, articles, deep dives, and interactive content on Generative AI transformation.
          </Body>
        </Box>
      </Section>

      {/* Stats strip */}
      <Box sx={{ background: soft, borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}` }}>
        <Container maxWidth={false} disableGutters sx={{ ...containerSx, paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
              gap: { xs: '1rem', md: '1.5rem' },
            }}
          >
            {stats.map((stat, idx) => (
              <Box key={idx} sx={{ textAlign: 'center' }}>
                <Typography sx={{ margin: 0, color: ink, font: "400 clamp(1.4rem, 2.8vw, 2rem)/1 Georgia, 'Times New Roman', serif" }}>
                  {stat.value}
                </Typography>
                <Typography sx={{ margin: '.4rem 0 0', color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.58rem', letterSpacing: '.05em', textTransform: 'uppercase' }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Article grid */}
      <Section>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '1rem', md: '1.2rem' },
            alignItems: 'stretch',
          }}
        >
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              viewport={{ once: true }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box sx={cardSx}>
                {sec.image && (
                  <Box
                    component="img"
                    src={sec.image}
                    alt={`Generative AI insights: ${sec.title}`}
                    title={sec.title}
                    sx={{
                      width: '100%',
                      height: 180,
                      objectFit: 'cover',
                      display: 'block',
                      borderBottom: `1px solid ${line}`,
                    }}
                  />
                )}

                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: { xs: '1.2rem 1rem', md: '1.4rem 1.2rem' } }}>
                  {sec.tag && (
                    <Typography
                      sx={{
                        display: 'inline-block',
                        alignSelf: 'flex-start',
                        marginBottom: '.7rem',
                        padding: '.25rem .55rem',
                        border: `1px solid ${line}`,
                        borderRadius: '20px',
                        color: '#0B4C74',
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '.52rem',
                        fontWeight: 700,
                        letterSpacing: '.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {sec.tag}
                    </Typography>
                  )}

                  <SubHeading sx={{ marginBottom: '.6rem', minHeight: '2.5rem' }}>
                    {sec.title}
                  </SubHeading>

                  <TruncatedText
                    text={sec.text}
                    isExpanded={expanded[i]}
                    toggleExpand={() => toggleExpand(i)}
                  />

                  <Box sx={{ mt: 'auto', pt: '1rem' }}>
                    {sec.cta && (
                      <Box
                        component="button"
                        onClick={() => {
                          if (sec.link?.startsWith('http')) window.open(sec.link, '_blank');
                        }}
                        aria-label={`Read more about ${sec.title}`}
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '.4rem',
                          padding: '.5rem .8rem',
                          borderRadius: '2px',
                          border: 0,
                          background: '#0B4C74',
                          color: '#ffffff',
                          fontWeight: 600,
                          fontSize: '.58rem',
                          fontFamily: "'Poppins', sans-serif",
                          cursor: 'pointer',
                          transition: 'background .2s ease',
                          '&:hover': { background: '#d3ffb0', color: '#000000' },
                        }}
                      >
                        {sec.cta} <ArrowForward sx={{ fontSize: 12 }} />
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* About our research */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
          <Eyebrow>About Our Research</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            About Our Generative AI Research
          </SectionHeading>
          <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.8rem' }}>
            Our Generative AI research provides data-driven insights and analysis on AI transformation, business impact, and implementation strategies. We cover the latest developments in large language models (LLMs), multimodal AI, AI agents, and enterprise AI adoption across industries including healthcare, finance, retail, and manufacturing.
          </Body>
          <Body sx={{ fontSize: '.68rem', fontStyle: 'italic', lineHeight: 1.7 }}>
            Stay updated with the latest Generative AI trends, research, and insights for informed decision-making and strategic AI implementation.
          </Body>
        </Box>
      </Section>
    </PageShell>
  );
}

export function TruncatedText({ text, isExpanded, toggleExpand }) {
  const textRef = useRef();
  const [textExceedsLimit, setTextExceedsLimit] = useState(false);
  const [maxLines, setMaxLines] = useState(4);

  useEffect(() => {
    const updateLines = () => {
      if (window.innerWidth < 600) setMaxLines(4);
      else if (window.innerWidth < 900) setMaxLines(3);
      else setMaxLines(4);
    };
    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      setTextExceedsLimit(textRef.current.scrollHeight > textRef.current.clientHeight);
    }
  }, [text, maxLines]);

  return (
    <Box>
      <Typography
        ref={textRef}
        sx={{
          color: `${muted} !important`,
          fontFamily: "'Poppins', sans-serif",
          fontSize: '.66rem',
          lineHeight: 1.75,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: isExpanded ? 'none' : maxLines,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {text}
      </Typography>

      {textExceedsLimit && (
        <Button
          onClick={toggleExpand}
          aria-expanded={isExpanded}
          sx={{
            padding: '.3rem 0',
            marginTop: '.5rem',
            minWidth: 0,
            color: '#0B4C74',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '.58rem',
            fontWeight: 600,
            textTransform: 'none',
            '&:hover': { background: 'transparent', color: ink },
          }}
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </Button>
      )}
    </Box>
  );
}