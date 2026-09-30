import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Cpu, Users, BookOpen } from 'lucide-react';

// ── Arvee editorial palette ──
const ink = '#0B4C74';
const muted = '#647572';
const line = '#dfe8df';
const soft = '#ffffff';
const cream = '#ffffff';

const eyebrowSx = {
  color: '#0B4C74',
  fontSize: '.55rem',
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  fontWeight: 700,
  fontFamily: "'Poppins', sans-serif",
};

const containerSx = {
  width: '100%',
  maxWidth: { xs: '100%', md: '1240px' },
  margin: '0 auto',
  padding: { xs: '0 1rem', md: '0 1.5rem' },
  boxSizing: 'border-box',
};

function Eyebrow({ children }) {
  return <Typography sx={eyebrowSx}>{children}</Typography>;
}

const cardSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'left',
  background: '#fff',
  border: `1px solid ${line}`,
  borderRadius: '2px',
  padding: { xs: '1.4rem 1.2rem', md: '1.7rem 1.5rem' },
  height: '100%',
  width: '100%',
  transition: 'all .25s ease',
  '&:hover': {
    borderColor: '#aac7b2',
    transform: 'translateY(-3px)',
  },
};

const IdeasThatMatter = () => {
  const ideas = [
    {
      Icon: Cpu,
      title: 'IT & Digital Consulting',
      idea: 'Empowering organizations to transform with precision and foresight.',
      points: [
        'AI-driven insights help businesses optimize processes, reduce costs, and predict market trends.',
        'Data-backed strategies enable faster, smarter decision-making.',
        'Focus on intelligent automation, cloud solutions, and digital resilience.',
      ],
      message:
        'We don’t just implement technology — we craft AI-powered strategies that turn complexity into competitive advantage.',
    },
    {
      Icon: Users,
      title: 'Expert Staffing Solutions',
      idea: 'Matching the right talent to the right opportunity, powered by intelligence.',
      points: [
        'AI evaluates skills, experience, and cultural fit to streamline recruitment.',
        'Predictive analytics anticipate workforce needs before they arise.',
        'Reduces hiring time, cost, and turnover, ensuring sustainable growth.',
      ],
      message:
        'Our AI-driven staffing solutions ensure your teams are built for today’s demands and tomorrow’s challenges.',
    },
    {
      Icon: BookOpen,
      title: 'EdTech & AI-Enabled Learning',
      idea: 'Transforming learning into a personalized, scalable, and future-ready experience.',
      points: [
        'Adaptive AI platforms tailor learning paths for every individual.',
        'Real-time analytics measure engagement, comprehension, and skill mastery.',
        'Enables continuous upskilling, reskilling, and career acceleration.',
      ],
      message:
        'We leverage AI to make learning smarter, faster, and more impactful — equipping talent for the jobs of tomorrow.',
    },
  ];

  return (
    <Box
      sx={{
        background: cream,
        color: ink,
        width: '100%',
        overflowX: 'hidden',
        '& h1, & h2, & h3': { fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, letterSpacing: 0 },
      }}
    >
      {/* ── Heading ── */}
      <Container maxWidth={false} disableGutters sx={containerSx}>
        <Box sx={{ textAlign: 'center', padding: { xs: '4rem 0 2rem', md: '6rem 0 3rem' } }}>
          <Eyebrow>Ideas That Matter</Eyebrow>
          <Typography
            component="h1"
            sx={{
              margin: '.7rem auto 1rem',
              font: "400 clamp(1.8rem, 1.6vw, 3rem)/1.05 Georgia, 'Times New Roman', serif",
              color: ink,
              maxWidth: 800,
            }}
          >
            Ideas That Matter
          </Typography>
          <Typography
            sx={{
              color: `${muted} !important`,
              fontFamily: "'Poppins', sans-serif",
              fontSize: '.72rem',
              lineHeight: 1.75,
              maxWidth: 700,
              margin: '0 auto',
            }}
          >
            Innovative solutions powered by AI, expertise, and future-ready strategies
          </Typography>
        </Box>
      </Container>

      {/* ── Ideas Grid ── */}
      <Box sx={{ background: soft }}>
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            ...containerSx,
            paddingTop: { xs: '3.5rem', md: '5rem' },
            paddingBottom: { xs: '3.5rem', md: '5rem' },
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: { xs: '1.2rem', md: '1.5rem' },
              alignItems: 'stretch',
            }}
          >
            {ideas.map((idea, i) => {
              const { Icon } = idea;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  style={{ display: 'flex', width: '100%' }}
                >
                  <Box sx={cardSx}>
                    <Box
                      sx={{
                        display: 'grid',
                        placeItems: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: '#fff',
                        border: `1px solid ${line}`,
                        marginBottom: '1rem',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} color="#0B4C74" />
                    </Box>

                    <Typography
                      component="h3"
                      sx={{
                        margin: '0 0 .5rem',
                        font: "400 .92rem Georgia, 'Times New Roman', serif",
                        color: ink,
                        lineHeight: 1.25,
                      }}
                    >
                      {idea.title}
                    </Typography>

                    <Typography
                      sx={{
                        margin: '0 0 1rem',
                        color: `${muted} !important`,
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '.64rem',
                        fontStyle: 'italic',
                        lineHeight: 1.6,
                      }}
                    >
                      {idea.idea}
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '1rem' }}>
                      {idea.points.map((point, idx) => (
                        <Typography
                          key={idx}
                          sx={{
                            color: `${muted} !important`,
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: '.64rem',
                            lineHeight: 1.7,
                          }}
                        >
                          • {point}
                        </Typography>
                      ))}
                    </Box>

                    <Typography
                      sx={{
                        color: `${ink} !important`,
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '.66rem',
                        fontWeight: 500,
                        lineHeight: 1.7,
                        marginTop: 'auto',
                      }}
                    >
                      {idea.message}
                    </Typography>
                  </Box>
                </motion.div>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default IdeasThatMatter;