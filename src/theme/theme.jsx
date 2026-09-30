import React from 'react';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';

// ── Base palette ──
const MAASTRICHT = '#001B3A';
const MAROON1 = '#2D0303';
const MAROON2 = '#5B0A0A';
const ACCENT_GRADIENT = `linear-gradient(90deg, ${MAROON1} 0%, ${MAROON2} 100%)`;

// ── Shared palette ──
export const ink = '#0B4C74';
export const muted = '#647572';
export const line = '#dfe8df';
export const soft = '#ffffff';
export const cream = '#ffffff';
export const lime = '#baf58c';
export const primary = '#0B4C74';
export const primaryHover = '#082f4a';
export const limeHover = '#d3ffb0';

// ── MUI theme ──
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
  palette: {
    primary: { main: MAASTRICHT, contrastText: '#ffffff' },
    secondary: { main: MAROON1, contrastText: '#fff' },
    background: { default: '#FDFDFD', paper: '#ffffff' },
    text: {
      primary: '#0f1724',
      secondary: '#0f282cff',
      third: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Poppins, Montserrat, sans-serif',
    h1: { fontFamily: 'Poppins, Montserrat, sans-serif', fontWeight: 700, fontSize: '2.6rem', letterSpacing: 1 },
    h2: { fontFamily: 'Poppins, Montserrat, sans-serif', fontWeight: 600, fontSize: '2rem', letterSpacing: 0.5 },
    h3: { fontFamily: 'Poppins, Montserrat, sans-serif', fontWeight: 700, fontSize: '1.8rem', letterSpacing: 0.2 },
    h4: { fontFamily: 'Poppins, Montserrat, sans-serif', fontWeight: 500, fontSize: '1.4rem', letterSpacing: 0.1 },
    h5: { fontFamily: 'Poppins, Montserrat, sans-serif', fontWeight: 500, fontSize: '1.25rem', letterSpacing: 0.1 },
    h6: { fontFamily: 'Poppins, Montserrat, sans-serif', fontWeight: 500, fontSize: '1rem', letterSpacing: 0.05 },
    body1: { fontFamily: 'Poppins, Montserrat, sans-serif', fontWeight: 400, fontSize: '1rem', textShadow: 'none' },
    body2: { fontFamily: 'Poppins, Montserrat, sans-serif', fontWeight: 400, fontSize: '0.9rem', textShadow: 'none' },
    button: { fontFamily: 'Poppins, Montserrat, sans-serif', fontWeight: 500, textTransform: 'none', fontSize: '1.05rem', letterSpacing: 0.2, textShadow: 'none' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#FDFDFD',
          minHeight: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
          '&:hover': { textDecoration: 'none', borderBottom: 'none' },
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontFamily: 'Poppins, Arial, sans-serif',
          fontWeight: 500,
          fontSize: '1.05rem',
          letterSpacing: 0.2,
          padding: '8px 24px',
          textDecoration: 'none',
          '&:hover': { textDecoration: 'none' },
        },
      },
      variants: [
        {
          props: { variant: 'primaryFilled' },
          style: {
            backgroundColor: '#0F1C38',
            color: '#fff',
            border: '1px solid',
            margin: '3px',
            fontFamily: 'Poppins, Montserrat, sans-serif',
            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
            '&:hover': { backgroundColor: '#0F1C38' },
          },
        },
        {
          props: { variant: 'secondaryFilled' },
          style: {
            backgroundColor: '#fff',
            color: '#000',
            border: '1px solid',
            margin: '3px',
            fontFamily: 'Poppins, Montserrat, sans-serif',
            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
            '&:hover': { backgroundColor: '#fff', color: '#000' },
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          '&:hover': { textDecoration: 'none', borderBottom: 'none' },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 89,
          '@media (min-width:600px)': { minHeight: 89 },
          '@media (max-width:599px)': { minHeight: 64 },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          a: {
            textDecoration: 'none',
            '&:hover': { textDecoration: 'none' },
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

// ═══════════════════════════════════════════════════════════════
// ── SHARED DESIGN TOKENS ──
// ═══════════════════════════════════════════════════════════════

export const eyebrowSx = {
  color: '#0B4C74',
  fontSize: '.55rem',
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  fontWeight: 700,
  fontFamily: "'Poppins', sans-serif",
};

export const sectionHeadingSx = {
  margin: '0 auto',
  font: "400 clamp(1.2rem, 2.2vw, 1.7rem)/1.15 Georgia, 'Times New Roman', serif",
  color: ink,
  letterSpacing: 0,
  maxWidth: 720,
};

export const subHeadingSx = {
  margin: 0,
  font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif",
  color: ink,
  letterSpacing: 0,
};

export const heroHeadingSx = {
  margin: '.4rem 0 .9rem',
  font: "400 clamp(1.15rem, 2.2vw, 1.75rem)/1.15 Georgia, 'Times New Roman', serif",
  color: '#fff',
  maxWidth: 900,
};

export const bodySx = {
  color: `${muted} !important`,
  fontFamily: "'Poppins', sans-serif",
  fontSize: '.7rem',
  lineHeight: 1.75,
};

export const containerSx = {
  width: '100%',
  maxWidth: { xs: '100%', md: '1240px' },
  margin: '0 auto',
  padding: { xs: '0 1rem', md: '0 1.5rem' },
  boxSizing: 'border-box',
};

export const sectionPadSx = {
  paddingTop: { xs: '2rem', md: '2.8rem' },
  paddingBottom: { xs: '2rem', md: '2.8rem' },
};

export const cardSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'left',
  background: '#fff',
  border: `1px solid ${line}`,
  borderRadius: '2px',
  padding: { xs: '1.2rem 1rem', md: '1.4rem 1.2rem' },
  height: '100%',
  width: '100%',
  transition: 'all .25s ease',
  '&:hover': {
    borderColor: '#aac7b2',
    transform: 'translateY(-3px)',
  },
};

export const primaryButtonSx = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '.5rem',
  padding: '.65rem 1.1rem',
  borderRadius: '2px',
  background: '#0B4C74',
  color: '#fff',
  fontWeight: 600,
  fontSize: '.62rem',
  fontFamily: "'Poppins', sans-serif",
  textDecoration: 'none',
  transition: 'background .2s ease',
  '&:hover': { background: '#082f4a' },
};

export const limeButtonSx = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '.5rem',
  padding: '.65rem 1.1rem',
  borderRadius: '2px',
  background: '#0B4C74',
  color: '#fff',
  fontWeight: 600,
  fontSize: '.62rem',
  fontFamily: "'Poppins', sans-serif",
  textDecoration: 'none',
  transition: 'background .2s ease',
  '&:hover': { background: limeHover, color: '#000000' },
};

export const limeCtaSx = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '.5rem',
  padding: '.65rem 1.1rem',
  borderRadius: '2px',
  background: primary,
  color: '#fff',
  fontWeight: 600,
  fontSize: '.62rem',
  fontFamily: "'Poppins', sans-serif",
  textDecoration: 'none',
  transition: 'background .2s ease',
  '&:hover': { background: limeHover, color: '#000' },
};

export const outlineButtonSx = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '.5rem',
  padding: '.65rem 1.1rem',
  borderRadius: '2px',
  background: 'transparent',
  color: '#fff',
  border: '1px solid rgba(255,255,255,.35)',
  fontWeight: 600,
  fontSize: '.62rem',
  fontFamily: "'Poppins', sans-serif",
  textDecoration: 'none',
  transition: 'all .2s ease',
  '&:hover': {
    background: 'rgba(255,255,255,.08)',
    borderColor: '#fff',
  },
};

// ═══════════════════════════════════════════════════════════════
// ── SHARED COMPONENTS ──
// ═══════════════════════════════════════════════════════════════

export function Eyebrow({ children, sx = {} }) {
  return <Typography sx={{ ...eyebrowSx, ...sx }}>{children}</Typography>;
}

export function SectionHeading({ children, sx = {} }) {
  return (
    <Typography component="h2" sx={{ ...sectionHeadingSx, ...sx }}>
      {children}
    </Typography>
  );
}

export function SubHeading({ children, sx = {} }) {
  return (
    <Typography component="h3" sx={{ ...subHeadingSx, ...sx }}>
      {children}
    </Typography>
  );
}

export function Body({ children, sx = {} }) {
  return <Typography sx={{ ...bodySx, ...sx }}>{children}</Typography>;
}

export function PrimaryButton({ children, href, sx = {}, ...rest }) {
  return (
    <Box component="a" href={href} {...rest} sx={{ ...primaryButtonSx, ...sx }}>
      {children}
    </Box>
  );
}

export function LimeButton({ children, href, sx = {}, ...rest }) {
  return (
    <Box component="a" href={href} {...rest} sx={{ ...limeButtonSx, ...sx }}>
      {children}
    </Box>
  );
}

export function LimeCta({ children, href, sx = {}, ...rest }) {
  return (
    <Box component="a" href={href} {...rest} sx={{ ...limeCtaSx, ...sx }}>
      {children}
    </Box>
  );
}

export function PageShell({ children, bg = cream, sx = {} }) {
  return (
    <Box
      sx={{
        background: bg,
        color: ink,
        width: '100%',
        overflowX: 'hidden',
        '& h1, & h2, & h3': {
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 400,
          letterSpacing: 0,
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export function Section({ children, bg, sx = {} }) {
  return (
    <Box sx={{ background: bg, ...sx }}>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          ...containerSx,
          paddingTop: { xs: '2rem', md: '2.8rem' },
          paddingBottom: { xs: '2rem', md: '2.8rem' },
        }}
      >
        {children}
      </Container>
    </Box>
  );
}

export { theme, ACCENT_GRADIENT };