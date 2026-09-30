import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// Local video import
import LocalVideo from '../../assets/videos/resourcesPage/video1.mp4';

// Shared design
import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  Body,
  ink, muted, line,
} from '../../theme/theme';

export default function Media() {
  const mediaVideos = [
    LocalVideo,
  ];

  const getEmbedUrl = (url) => {
    try {
      const parsedUrl = new URL(url);

      if (
        parsedUrl.hostname.includes('youtube.com') &&
        parsedUrl.pathname.startsWith('/embed/')
      ) {
        return url;
      }

      if (parsedUrl.hostname.includes('youtube.com') && parsedUrl.searchParams.get('v')) {
        const videoId = parsedUrl.searchParams.get('v');
        const searchParams = parsedUrl.searchParams.toString();
        return `https://www.youtube.com/embed/${videoId}?${searchParams}`;
      }

      if (parsedUrl.hostname.includes('youtube.com') && parsedUrl.pathname.startsWith('/shorts/')) {
        const videoId = parsedUrl.pathname.split('/shorts/')[1].split('?')[0];
        const searchParams = parsedUrl.searchParams.toString();
        return `https://www.youtube.com/embed/${videoId}?${searchParams}`;
      }

      if (parsedUrl.hostname.includes('youtu.be')) {
        const videoId = parsedUrl.pathname.replace('/', '');
        const searchParams = parsedUrl.searchParams.toString();
        return `https://www.youtube.com/embed/${videoId}?${searchParams}`;
      }

      if (parsedUrl.hostname.includes('vimeo.com')) {
        const videoId = parsedUrl.pathname.replace('/', '');
        return `https://player.vimeo.com/video/${videoId}`;
      }

      return url;
    } catch (err) {
      console.error('Invalid video URL:', url);
      return url;
    }
  };

  return (
    <PageShell>
      <Section>
        <Box sx={{ textAlign: 'center', mt: { xs: '3rem', md: '5rem' } }}>
        
          <SectionHeading sx={{ margin: '.7rem auto 1rem', maxWidth: 800 }}>
            Media
          </SectionHeading>
          <Body sx={{ maxWidth: 700, margin: '0 auto' }}>
            Watch our culture, events, and behind-the-scenes moments
          </Body>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: '1.2rem', md: '1.5rem' },
            mt: { xs: '2rem', md: '3rem' },
          }}
        >
          {mediaVideos && mediaVideos.length > 0 ? (
            mediaVideos.map((videoUrl, idx) => {
              const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
              const isVimeo = videoUrl.includes('vimeo.com');

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 6) * 0.05 }}
                  style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: { xs: '100%', md: 720 },
                      border: `1px solid ${line}`,
                      borderRadius: '2px',
                      overflow: 'hidden',
                      background: '#fff',
                      transition: 'all .25s ease',
                      '&:hover': {
                        borderColor: '#aac7b2',
                      },
                    }}
                  >
                    {isYouTube || isVimeo ? (
                      <Box
                        component="iframe"
                        src={getEmbedUrl(videoUrl)}
                        title={`Media ${idx + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        sx={{
                          width: '100%',
                          height: { xs: 200, sm: 320, md: 405 },
                          border: 'none',
                          display: 'block',
                        }}
                      />
                    ) : (
                      <Box
                        component="video"
                        src={videoUrl}
                        controls
                        sx={{
                          width: '100%',
                          height: { xs: 200, sm: 320, md: 405 },
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    )}
                  </Box>
                </motion.div>
              );
            })
          ) : (
            ['Events', 'Behind the Scenes', 'Stories'].map((title, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 6) * 0.05 }}
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
              >
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: { xs: '100%', md: 720 },
                    border: `1px solid ${line}`,
                    borderRadius: '2px',
                    background: '#fff',
                    padding: { xs: '1.4rem 1.2rem', md: '1.7rem 1.5rem' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'all .25s ease',
                    '&:hover': {
                      borderColor: '#aac7b2',
                    },
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      margin: '0 0 .5rem',
                      font: "400 .92rem Georgia, 'Times New Roman', serif",
                      color: ink,
                    }}
                  >
                    {title}
                  </Typography>
                  <Body sx={{ fontSize: '.66rem' }}>
                    Exciting video content coming soon.
                  </Body>
                </Box>
              </motion.div>
            ))
          )}
        </Box>
      </Section>
    </PageShell>
  );
}