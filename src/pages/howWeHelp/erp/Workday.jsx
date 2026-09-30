import React, { useState, useRef, useEffect } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowForward } from "@mui/icons-material";

// Shared design
import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  SubHeading,
  Body,
  LimeButton,
  cardSx,
  containerSx,
  heroHeadingSx,
  ink, muted, line, soft, lime,
} from '../../../theme/theme';

// Images
import Image1 from '../../../assets/images/howWeHelp/ERP/workday/img1.png';
import Image2 from '../../../assets/images/howWeHelp/ERP/workday/img2.jpg';
import Image3 from '../../../assets/images/howWeHelp/ERP/workday/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/ERP/workday/img4.png';

// 👇 same navy as the top navbar menu items
const NAVY = '#0B4C74';

const sections = [
  {
    title: "The enterprise AI platform for people, money, and agents",
    text: "Manage HR, finance, and all your AI agents. All in one place.",
    image: Image1,
  },
  {
    title: "Faster insights. Better decisions. Automated actions",
    text: "Illuminate drives innovation and growth for organizations of any size, in any industry. Built on the largest, cleanest HR and finance dataset with unrivaled business context, Illuminate deeply understands and optimizes how work gets done to deliver the most accurate, reliable results.",
    image: Image2,
  },
  {
    title: "HR Management with Workday",
    text: "Streamline human capital processes with real-time insights, reporting, and analytics to empower your workforce.",
    image: Image3,
  },
  {
    title: "Finance Management with Workday",
    text: "Gain visibility into financial performance, automate workflows, and accelerate decision-making across your organization.",
    image: Image4,
  },
];

export default function Workday() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <PageShell>
      {/* Heading */}
      <Box sx={{ padding: { xs: '5rem 1rem 2rem', md: '7rem 1rem 3rem' }, textAlign: 'center', background: '#ffffff' }}>
        <Container maxWidth={false} disableGutters sx={containerSx}>
          <Eyebrow>Workday Platform</Eyebrow>
          <Typography component="h1" sx={{ ...heroHeadingSx, color: NAVY, marginLeft: 'auto', marginRight: 'auto' }}>
            Workday — Enterprise AI Platform
          </Typography>
          <Body sx={{ maxWidth: 720, marginLeft: 'auto', marginRight: 'auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            Manage HR, finance, and all your AI agents — all in one place. Explore the platform built for people, money, and agents.
          </Body>
        </Container>
      </Box>

      {/* 2×2 Card Grid — white bg */}
      <Section sx={{ background: '#ffffff' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: { xs: '1rem', md: '1.2rem' },
            alignItems: 'stretch',
          }}
        >
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box sx={{ ...cardSx, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {sec.image && (
                  <Box
                    component="img"
                    src={sec.image}
                    alt={sec.title}
                    sx={{
                      width: '100%',
                      height: { xs: 200, md: 220 },
                      objectFit: 'cover',
                      display: 'block',
                      borderBottom: `1px solid ${line}`,
                    }}
                  />
                )}

                <Box sx={{ padding: { xs: '1.2rem 1rem', md: '1.4rem 1.2rem' }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <SubHeading sx={{ marginBottom: '.6rem', minHeight: '2.6rem', color: NAVY }}>
                    {sec.title}
                  </SubHeading>

                  <TruncatedText
                    text={sec.text}
                    isExpanded={expanded[i]}
                    toggleExpand={() => toggleExpand(i)}
                  />
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>
    </PageShell>
  );
}

export function TruncatedText({ text, isExpanded, toggleExpand }) {
  const textRef = useRef();
  const [textExceedsLimit, setTextExceedsLimit] = useState(false);
  const [maxLines, setMaxLines] = useState(3);

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
          endIcon={<ArrowForward sx={{ fontSize: 11 }} />}
          sx={{
            padding: '.3rem 0',
            marginTop: '.5rem',
            minWidth: 0,
            color: '#0B4C74',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '.58rem',
            fontWeight: 600,
            textTransform: 'none',
            '&:hover': { background: 'transparent', color: NAVY },
          }}
        >
          {isExpanded ? "Show less" : "Read more"}
        </Button>
      )}
    </Box>
  );
}