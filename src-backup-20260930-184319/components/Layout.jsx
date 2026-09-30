import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box, CssBaseline } from '@mui/material';
import ScrollControl from '../pages/Home/ScrollToTopAndBottom';
import MainFooter from '../pages/Home/MainFooter';
import PrivacyConsentBanner from '../pages/Home/Cokkies';
import WhatsAppChat from './WhatsAppChat';
import Chatbot from './ChatBot/Chatbot';

export default function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Header />

      <Box
        sx={{
          minHeight: '100vh',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {children}
      </Box>

      <ScrollControl />

      {/* ⬇️ Full-width MainFooter — no padding wrapper */}
      <MainFooter />

      <Footer />
      <PrivacyConsentBanner />
      <WhatsAppChat />
      <Chatbot />
    </>
  );
}