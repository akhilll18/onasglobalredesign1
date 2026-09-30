import React, { useState, useCallback } from 'react';
import {
  Box,
  Typography,
  TextField,
  Alert,
  CircularProgress,
  Container,
} from '@mui/material';
import { Email as EmailIcon, ArrowForward } from '@mui/icons-material';

// ── Arvee editorial palette ──
const ink = '#0B4C74';
const muted = '#647572';
const line = '#dfe8df';
const soft = '#ffffff';
const cream = '#ffffff';
const lime = '#baf58c';

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

// Constants
const API_ENDPOINTS = {
  NEWSLETTER: '/api/newsletter.php',
  DOWNLOAD_GUIDE: '/guide.pdf',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const validateEmail = useCallback((email) => {
    if (!email.trim()) {
      return { isValid: false, message: 'Please enter your email.' };
    }
    if (!EMAIL_REGEX.test(email)) {
      return { isValid: false, message: 'Please enter a valid email address.' };
    }
    return { isValid: true, message: '' };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    const validation = validateEmail(email);
    if (!validation.isValid) {
      setStatus({ type: 'error', message: validation.message });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const submissions = JSON.parse(localStorage.getItem('newsletterSubmissions') || '[]');
      submissions.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem('newsletterSubmissions', JSON.stringify(submissions));

      setStatus({
        type: 'success',
        message: 'Thank you! Your guide is ready for download.',
      });
      setEmail('');

      setTimeout(() => {
        handleDownload();
      }, 500);

      setIsSubmitting(false);
    }, 800);
  };

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      const response = await fetch(API_ENDPOINTS.DOWNLOAD_GUIDE);

      if (!response.ok) {
        throw new Error(`Failed to load PDF: ${response.status}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'ONAS_Global_Business_Proposal.pdf';

      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        setIsDownloading(false);
      }, 100);
    } catch (error) {
      console.error('Download error:', error);

      const link = document.createElement('a');
      link.href = API_ENDPOINTS.DOWNLOAD_GUIDE;
      link.download = 'ONAS_Global_Business_Proposal.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (status.type === 'error') {
      setStatus({ type: '', message: '' });
    }
  };

  return (
    <Box
      sx={{
        background: soft,
        color: ink,
        width: '100%',
        overflowX: 'hidden',
        '& h1, & h2, & h3': {
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 400,
          letterSpacing: 0,
        },
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          ...containerSx,
          paddingTop: { xs: '3.5rem', md: '5rem' },
          paddingBottom: { xs: '3.5rem', md: '5rem' },
        }}
      >
        {/* ⬇️ Image LEFT / Content RIGHT */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1.15fr' },
            gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 4rem)' },
            alignItems: 'center',
          }}
        >
          {/* LEFT — Image */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=85"
              alt="ONAS AI solution provider"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: { xs: 280, md: 440 },
                objectFit: 'cover',
                borderRadius: '2px',
                display: 'block',
              }}
            />
          </Box>

          {/* RIGHT — Content */}
          <Box>
            <Eyebrow>Your AI Solution Provider</Eyebrow>
            <Typography
              component="h2"
              sx={{
                margin: '.7rem 0 1rem',
                font: "400 clamp(1.4rem, 2.4vw, 2rem)/1.1 Georgia, 'Times New Roman', serif",
                color: ink,
              }}
            >
              Your AI Solution Provider
            </Typography>

            <Typography
              sx={{
                color: `${muted} !important`,
                fontFamily: "'Poppins', sans-serif",
                fontSize: '.72rem',
                lineHeight: 1.8,
                marginBottom: '1.6rem',
              }}
            >
              ONAS does more than &ldquo;aspire&rdquo; to solve your AI needs — we stand ready to
              be your partner for all your data, AI, IT, and digital solution initiatives. We
              continuously strive to bring the best-in-class solutions to our clients by adopting
              the latest innovations and custom solutions tailored to each client&apos;s unique
              needs.
            </Typography>

            {/* Form */}
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: '1rem',
                alignItems: 'flex-start',
              }}
            >
              <TextField
                type="email"
                variant="outlined"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                disabled={isSubmitting}
                error={status.type === 'error'}
                aria-label="Email address"
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '2px',
                    background: '#fff',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '.72rem',
                    '& fieldset': { borderColor: line },
                    '&:hover fieldset': { borderColor: '#aac7b2' },
                    '&.Mui-focused fieldset': { borderColor: '#0B4C74' },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '.72rem',
                    opacity: 0.6,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <EmailIcon sx={{ color: '#0B4C74', mr: 1, fontSize: 18 }} />
                  ),
                }}
              />

              <Box
                component="button"
                type="submit"
                disabled={isSubmitting || !email}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '.5rem',
                  padding: '.85rem 1.3rem',
                  border: 0,
                  borderRadius: '2px',
                  background: '#0B4C74',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '.66rem',
                  fontFamily: "'Poppins', sans-serif",
                  cursor: isSubmitting || !email ? 'not-allowed' : 'pointer',
                  transition: 'background .2s ease',
                  whiteSpace: 'nowrap',
                  opacity: isSubmitting || !email ? 0.7 : 1,
                  '&:hover': {
                    background: isSubmitting || !email ? lime : '#d3ffb0',
                  },
                }}
              >
                {isSubmitting ? (
                  <CircularProgress size={18} sx={{ color: '#ffffff' }} />
                ) : (
                  <>
                    Get Your Free Guide <ArrowForward sx={{ fontSize: 14 }} />
                  </>
                )}
              </Box>
            </Box>

            {/* Status */}
            {status.message && (
              <Alert
                severity={status.type}
                onClose={() => setStatus({ type: '', message: '' })}
                sx={{
                  marginTop: '1rem',
                  borderRadius: '2px',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '.66rem',
                }}
              >
                {status.message}
              </Alert>
            )}

            {/* Privacy note */}
            <Typography
              sx={{
                display: 'block',
                marginTop: '1.2rem',
                color: `${muted} !important`,
                fontFamily: "'Poppins', sans-serif",
                fontSize: '.6rem',
                lineHeight: 1.7,
                opacity: 0.85,
              }}
            >
              By submitting your email, you agree to receive our newsletter and occasional
              updates. We respect your privacy. Unsubscribe at any time. Your data is protected
              and never shared with third parties.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}