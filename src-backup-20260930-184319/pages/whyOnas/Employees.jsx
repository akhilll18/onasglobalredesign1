import React from 'react';
import { Box } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

// Shared design
import {
  PageShell,
  Section,
  SectionHeading,
  Body,
  ink, lime,
} from '../../theme/theme';

export default function Employess() {
  const loginUrl = 'https://onasit.peopleapps.in/';

  return (
    <PageShell>
      {/* ── Heading ── */}
      <Section>
        <Box sx={{ textAlign: 'center', mt: { xs: '3rem', md: '5rem' } }}>
          <SectionHeading sx={{ margin: '.7rem auto 1rem', maxWidth: 800 }}>
            Employees
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto' }}>
            ONAS employees can log in to the HR Portal to download payslips, access
            tax documents, view employee-related information, and record attendance
            (punch-in/punch-out).
          </Body>
        </Box>
      </Section>

      {/* ── Image + CTA ── */}
      <Section>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src="/onas-employees.png"
            alt="onas-employees"
            sx={{
              width: '100%',
              maxWidth: 1000,
              height: 'auto',
              mb: '1rem',
              display: 'block',
            }}
          />

          <Box
            component="a"
            href={loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
            
              padding: '.75rem 1.6rem',
              borderRadius: '2px',
              background: lime,
              color: ink,
              fontWeight: 600,
              fontSize: '.68rem',
              fontFamily: "'Poppins', sans-serif",
              textDecoration: 'none',
              transition: 'background .2s ease',
              '&:hover': { background: '#090909' },
            }}
          >
            Employees Login <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Section>
    </PageShell>
  );
}