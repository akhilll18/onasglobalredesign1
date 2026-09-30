import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Check } from '@mui/icons-material';
import { NAV_LINKS } from '../../utils/constants';

// Images
import ManagedITImg from '../../assets/images/staffing/professionalservices/managedit.png';
import StaffAugImg from '../../assets/images/staffing/professionalservices/staffaugmentation.webp';
import TempContractImg from '../../assets/images/staffing/professionalservices/tempcontract.jpg';
import PermanentImg from '../../assets/images/staffing/professionalservices/permanent.png';
import ContractHireImg from '../../assets/images/staffing/professionalservices/contracthire.png';
import RemoteImg from '../../assets/images/staffing/professionalservices/remote.webp';
import OffshoreImg from '../../assets/images/staffing/professionalservices/offshore.jpg';
import RpoImg from '../../assets/images/staffing/professionalservices/rpo.png';
import BpoImg from '../../assets/images/staffing/professionalservices/bpo.png';
import RecruitersImg from '../../assets/images/staffing/professionalservices/recruiters.webp';
import TechSupportImg from '../../assets/images/staffing/professionalservices/techsupport.webp';

// Shared design
import {
  PageShell,
  Section,
  SectionHeading,
  Body,
  cardSx,
  ink, muted, line,
} from '../../theme/theme';

// Section data
const professionalSections = [
  {
    id: 'managed-it',
    title: 'Managed IT & Resource Services',
    description:
      'Focus on your core business while we manage your IT infrastructure and resources. End-to-end support ensures cost optimization and growth-driven technology.',
    image: ManagedITImg,
    items: ['End-to-end IT management', 'System monitoring & maintenance', 'Proactive resource optimization'],
  },
  {
    id: 'staff-augmentation',
    title: 'Staff Augmentation Services',
    description:
      'Boost your team’s capabilities with skilled professionals who integrate seamlessly into your projects.',
    image: StaffAugImg,
    items: ['Seamless project integration', 'Flexible engagement models', 'Access to wide talent pool'],
  },
  {
    id: 'temporary-contract',
    title: 'Temporary / Contract Staffing',
    description:
      'Stay agile with skilled professionals for short and mid-term needs, manage workloads efficiently.',
    image: TempContractImg,
    items: ['On-demand professionals', 'Short & mid-term support', 'Scalable workforce solutions'],
  },
  {
    id: 'permanent-executive',
    title: 'Permanent Staffing / Executive Placement',
    description:
      'Find long-term success with qualified professionals and leaders focused on cultural fit and retention.',
    image: PermanentImg,
    items: ['Specialized & leadership roles', 'Focus on cultural fit', 'Long-term hiring strategy'],
  },
  {
    id: 'contract-to-hire',
    title: 'Contract-to-Hire Staffing',
    description:
      'Evaluate professionals before permanent hire—reducing risks and improving retention.',
    image: ContractHireImg,
    items: ['Evaluate skills & performance', 'Lower hiring risks', 'Retention-focused approach'],
  },
  {
    id: 'remote-virtual',
    title: 'Remote / Virtual Staffing',
    description:
      'Build high-performing teams without geographical limits. Scale flexibly and cost-efficiently.',
    image: RemoteImg,
    items: ['Global talent access', 'Scalable & flexible', 'Cost-efficient staffing'],
  },
  {
    id: 'offshore-staffing',
    title: 'Offshore Staffing',
    description:
      'Expand capabilities with cost-effective offshore teams, from IT to back-office functions.',
    image: OffshoreImg,
    items: ['Cost-efficient offshore teams', 'Global expertise', 'Seamless business extension'],
  },
  {
    id: 'rpo-services',
    title: 'RPO (Recruitment Process Outsourcing)',
    description:
      'Streamline recruitment with end-to-end lifecycle management, reducing costs and improving scalability.',
    image: RpoImg,
    items: ['Full recruitment lifecycle', 'Faster hiring', 'Cost-efficient & scalable'],
  },
  {
    id: 'bpo-services',
    title: 'BPO (Business Process Outsourcing)',
    description:
      'Outsource non-core processes like customer support, data entry, and back-office operations to improve efficiency and cut costs.',
    image: BpoImg,
    items: ['Customer support services', 'Data entry & processing', 'Back-office operations'],
  },
  {
    id: 'hire-recruiters',
    title: 'Hire Our Recruiters',
    description:
      'On-demand recruitment expertise tailored to your needs—helping you build your dream team faster.',
    image: RecruitersImg,
    items: ['Expert recruiters on demand', 'Agile & efficient hiring', 'Scalable support'],
  },
  {
    id: 'technical-support',
    title: 'Technical Support Services',
    description:
      'Reliable, responsive 24/7 technical support trusted by industry leaders to ensure seamless operations.',
    image: TechSupportImg,
    items: ['24/7 coverage', 'Trusted by industry leaders', 'Responsive & reliable'],
  },
];

export default function ProfessionalServices() {
  const menuItems =
    NAV_LINKS.find((link) => link.label === 'Staffing')
      ?.children.find((cat) => cat.category === 'Professional Services')
      ?.items.map((item) => ({
        label: item.label,
        path: item.path.includes('#') ? `#${item.path.split('#')[1]}` : item.path,
      })) || [];

  return (
    <PageShell>
      {/* ── Page Title ── */}
      <Section>
        <Box sx={{ textAlign: 'center', mt: { xs: '3rem', md: '5rem' } }}>
          <SectionHeading sx={{ margin: '.7rem auto 1rem', maxWidth: 800 }}>
            Professional Services
          </SectionHeading>
          <Body sx={{ maxWidth: 700, margin: '0 auto' }}>
            We provide comprehensive workforce and IT solutions designed to meet the evolving needs
            of modern businesses.
          </Body>
        </Box>
      </Section>

      {/* ── Card Grid ── */}
      <Section>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '1.2rem', md: '1.4rem' },
            alignItems: 'stretch',
          }}
        >
          {professionalSections.map((section, i) => (
            <motion.div
              key={i}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box sx={{ ...cardSx, padding: 0, overflow: 'hidden' }}>
                {/* Image on top */}
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 180, sm: 200, md: 200 },
                    overflow: 'hidden',
                    borderBottom: `1px solid ${line}`,
                  }}
                >
                  <Box
                    component="img"
                    src={section.image}
                    alt={section.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </Box>

                {/* Content below */}
                <Box
                  sx={{
                    padding: { xs: '1.3rem 1.2rem', md: '1.5rem 1.4rem' },
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      margin: '0 0 .6rem',
                      font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif",
                      color: ink,
                      minHeight: '2.6rem',
                    }}
                  >
                    {section.title}
                  </Typography>

                  <Body sx={{ marginBottom: '1rem', flexGrow: 1, fontSize: '.66rem' }}>
                    {section.description}
                  </Body>

                  {/* Feature list */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
                    {section.items.map((item, idx) => (
                      <Typography
                        key={idx}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          color: `${ink} !important`,
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: '.62rem',
                          lineHeight: 1.6,
                        }}
                      >
                        <Check sx={{ color: '#5e987f', fontSize: 13, marginRight: '.4rem', marginTop: '2px', flexShrink: 0 }} />
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>
    </PageShell>
  );
}