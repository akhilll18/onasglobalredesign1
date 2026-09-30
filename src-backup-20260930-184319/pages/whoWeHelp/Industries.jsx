import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// Images
import BankingImg from '../../assets/images/whoWeHelp/banking.jpg';
import LifeSciencesImg from '../../assets/images/whoWeHelp/life.jpg';
import PublicServicesImg from '../../assets/images/whoWeHelp/public.jpg';
import ProfessionalServicesImg from '../../assets/images/whoWeHelp/professional.jpg';
import EngineeringImg from '../../assets/images/whoWeHelp/engineering.png';
import MediaImg from '../../assets/images/whoWeHelp/media.webp';
import EducationImg from '../../assets/images/whoWeHelp/education.jpg';
import HealthcareImg from '../../assets/images/whoWeHelp/healthcare.webp';
import InsuranceImg from '../../assets/images/whoWeHelp/Insurance.jpg';
import ManufacturingImg from '../../assets/images/whoWeHelp/manufacturing.jpg';
import RetailImg from '../../assets/images/whoWeHelp/retail.jpg';
import CapitalMarketsImg from '../../assets/images/whoWeHelp/capitalmarkets.jpg';
import ConsumerGoodsImg from '../../assets/images/whoWeHelp/consumer.jpeg';
import EnergyImg from '../../assets/images/whoWeHelp/energy.jpg';
import HiTechImg from '../../assets/images/whoWeHelp/hitech.jpg';
import ITImg from '../../assets/images/whoWeHelp/it.png';


import {
  PageShell,
  Section,
  SectionHeading,
  Body,
  ink, muted,
} from '../../theme/theme';

const NAVY = '#0B4C74';

const industriesSections = [
  {
    id: 'banking',
    title: 'Banking',
    description: `With ONAS’s strong expertise in banking and technology, corporate customers are embracing new opportunities to transform their offerings and capabilities…and move from commoditized products to added-value solutions.
Move to the cloud
Successful financial services leaders in cloud adoption are using the cloud as a transformative platform to achieve new revenue streams, innovation, and business growth at significantly higher levels.
Unlike traditional, decentralized financial services systems, cloud systems ensure consistency of processes and controls in all situations. This adds an extra layer of robustness against extraordinary events like capacity strain that can arise in remote working, cyber-attacks, and volume spikes.`,
    image: BankingImg,
    reverse: false,
  },
  {
    id: 'life-sciences',
    title: 'Life Sciences & Pharma',
    description: `Create the foundation for the future with systems that deliver accountable, affordable and accessible healthcare.
ONAS works with the pioneers and leaders in pharma to fuel innovation and recalibrate business towards more accountable, affordable and accessible care using technology.`,
    image: LifeSciencesImg,
    reverse: true,
  },
  {
    id: 'public-services',
    title: 'Public Services',
    description: `Create an engaging and empowering environment across every aspect of governance.
ONAS Public Sector practice provides governments the means to engage citizens, government agencies, businesses and NGO’s and deliver services to them in a cost-effective manner. We use our wide partnerships to simplify digital technology (core infrastructure and applications) to create innovative e-governance models. Governments across the world have deployed our expertise in areas such as public safety, transport, smart cities and digital governance for efficiency and scalable services.`,
    image: PublicServicesImg,
    reverse: false,
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    description: `Augment service delivery capabilities, improve customer-centricity and create differentiation.
Improving customer-centricity, creating differentiation, building operational efficiency and cost optimization in the Healthcare industry are urgent needs. To aid in meeting these goals, ONAS provides clients with services and customized solutions for prudent financial management, business performance management, continuous operational improvement, responsiveness to customer needs and processes to attract and retain top talent.`,
    image: ProfessionalServicesImg,
    reverse: true,
  },
  {
    id: 'engineering-construction-operations',
    title: 'Engineering, Construction & Operations',
    description: `Creating a digital culture delivering operational efficiencies while enhancing user experience and safety.
The Construction, Operations and Airport sectors are undergoing a revolutionary transformation, exploring new ways to improve efficiency, accuracy and transparency of their key business processes, while enhancing overall performance and user experience.`,
    image: EngineeringImg,
    reverse: false,
  },
  {
    id: 'communication-media-info',
    title: 'Communication Media & Information Services',
    description: `The communications industry is undergoing a major transformation, driven by the rise of new technologies like 5G, Generative AI and advanced AR/VR. These technologies are creating new opportunities for Communication Service Providers (CSPs) to engage with customers, deliver new services, and improve operational efficiency. We collaborate with top CSPs and Network Equipment providers to deliver innovative services like Network as a Service (NaaS), Secure Access Service Edge (SASE), and managed private 5G solutions.`,
    image: MediaImg,
    reverse: true,
  },
  {
    id: 'education',
    title: 'Education',
    description: `The educational sector is experiencing significant change. From preschool to high school, and universities to technical training, educational institutions must navigate changes across their operations and service delivery. Hybrid and flexible learning models alter how students learn, and also how faculty support new delivery mechanisms.
ONAS helps organizations design, customize, implement, manage and improve a number of systems, from the student information system (SIS), learning management system and CRM to workflow management systems, HRMS and financial management systems.`,
    image: EducationImg,
    reverse: false,
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: `Healthcare clients who are quickly realizing that the future belongs to the fee-for-value model leverage ONAS Healthcare services to deliver cost-effective, high-quality care through robust systems, products and commercial models.`,
    image: HealthcareImg,
    reverse: true,
  },
  {
    id: 'insurance',
    title: 'Insurance',
    description: `Digital transformation aimed at delivering enhanced customer experience enabled by big data and analytical insights.
ONAS delivers a seamless insurance sales and service journey for our clients by leveraging robust and elastic IT infrastructure and automation.
With our breadth of experience serving global insurance and re-insurance companies in sales and distribution, new business and underwriting, policy administration, claims, billing, accounting, risk and compliance, brokerage and third party administration, ONAS offers you a robust and comprehensive service portfolio.`,
    image: InsuranceImg,
    reverse: false,
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: `Customers today buy experiences, not just products. Manufacturers need to build connected, cognitive, and collaborative networks which support adaptive innovation at scale. This calls for a neural approach where the manufacturing value chain mimics the human nervous system, reflexively sensing new information, perceiving its meaning, and taking the required action, all in real time.`,
    image: ManufacturingImg,
    reverse: true,
  },
  {
    id: 'retail',
    title: 'Retail',
    description: `We help you fuel growth and innovate continuously by enabling end-to-end business transformation across digital strategy, customer experience, operations, and commercial proposition optimization. Our deep industry expertise, unique outcome-driven engagement model, AI-powered products and platforms, innovation hubs, and partnership ecosystems accelerate your journey to a data-led, nimble enterprise of the future.`,
    image: RetailImg,
    reverse: false,
  },
  {
    id: 'capital-markets',
    title: 'Capital Markets',
    description: `Efficient and transparent capital markets are critical to economic growth and financial stability. Market volatility, high transaction volumes, demand for advisory services, and sustainability imperatives are pushing capital markets firms to focus on resilience, adaptability, and sustainable business practices.`,
    image: CapitalMarketsImg,
    reverse: true,
  },
  {
    id: 'consumer-goods-distribution',
    title: 'Consumer Good & Distribution',
    description: `Conscious consumers expect more than convenience. They want the products they buy to be ethically and sustainably sourced, produced, and distributed. For consumer goods companies, this means that, in addition to enabling pervasive commerce, they need to tailor their strategies to cater to these preferences.`,
    image: ConsumerGoodsImg,
    reverse: false,
  },
  {
    id: 'energy-resources-utilities',
    title: 'Energy Source & Utilities',
    description: `The Energy Resources & utilities industry is changing dramatically as the world embraces planet-friendly fuels and the trend toward electrification moves utilities from value-chain players to the backbone of the energy transition.
Gradual decentralization of the energy market is allowing new entities to play an increasingly critical role by offering new services and creating new markets. New technologies and aging assets compound matters, even as federal governments pledge billions of dollars to modernize infrastructure.`,
    image: EnergyImg,
    reverse: true,
  },
  {
    id: 'hi-tech',
    title: 'Hi-Tech',
    description: `The Hi-Tech industry is fiercely competitive. As product lifecycles become shorter, innovation has become their lifeblood. Today, to thrive, hi-tech organizations must quickly decipher customer needs while reducing costs and creating differentiators.`,
    image: HiTechImg,
    reverse: false,
  },
  {
    id: 'information-technology',
    title: 'Information Technology',
    description: `The IT sector powers innovation and transformation across all industries. From cloud computing and cybersecurity to AI and automation, IT enables enterprises to modernize systems, optimize operations, and unlock new business opportunities. ONAS partners with clients to design scalable IT strategies, implement next-gen solutions, and provide continuous support that drives resilience and growth.`,
    image: ITImg,
    reverse: true,
  },
];

export default function Industries() {
  return (
    <PageShell>
      {/* ── Heading ── */}
      <Section sx={{ background: '#ffffff' }}>
        <Box sx={{ textAlign: 'center', mt: { xs: '3rem', md: '5rem' } }}>
          <SectionHeading
            sx={{  maxWidth: 1000, color: NAVY }}
          >
            Industries We Serve
          </SectionHeading>
          <Body sx={{ maxWidth: 700, margin: '0 auto' }}>
            We partner with organizations across diverse industries to accelerate
            digital transformation, innovation, and operational efficiency.
          </Body>
        </Box>
      </Section>

      {/* ── Industries Sections ── */}
      <Section sx={{ background: '#ffffff' }}>
        {industriesSections.map((section, i) => (
          <Box
            key={section.id}
            id={section.id}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '0.85fr 1.15fr' },
              gap: { xs: '1.5rem', sm: '1.5rem', md: '2rem' },
              alignItems: 'stretch',
              marginBottom: { xs: '2.5rem', md: '1rem' },
              scrollMarginTop: '100px',
            }}
          >
            {/* IMAGE */}
            <Box
              sx={{
                order: { xs: 1, sm: section.reverse ? 2 : 1 },
                overflow: 'hidden',
                borderRadius: 0,
                height: '100%',
                minHeight: { xs: 220, sm: 240, md: 260 },
              }}
            >
              <Box
                component="img"
                src={section.image}
                alt={section.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform .6s ease',
                  '&:hover': { transform: 'scale(1.04)' },
                }}
              />
            </Box>

            {/* CONTENT */}
            <Box
              sx={{
                order: { xs: 2, sm: section.reverse ? 1 : 2 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: { xs: '.5rem 0', md: '1rem 0' },
              }}
            >
              {/* 👇 heading now uses the navbar navy color */}
              <Typography
                component="h2"
                sx={{
                  margin: '0 0 .9rem',
                  font: "400 clamp(1rem, 1.8vw, 1.35rem)/1.2 Georgia, 'Times New Roman', serif",
                  color: NAVY,
                }}
              >
                {section.title}
              </Typography>
              <Typography
                sx={{
                  maxWidth: 520,
                  whiteSpace: 'pre-line',
                  color: `${muted} !important`,
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '.72rem',
                  lineHeight: 1.75,
                }}
              >
                {section.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Section>
    </PageShell>
  );
}