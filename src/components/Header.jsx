import React, { useState, useEffect, useRef } from "react";

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Menu,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { Popper, Paper, ClickAwayListener, Grow, MenuList, MenuItem } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../utils/constants";
import CloseIcon from "@mui/icons-material/Close";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from '@mui/icons-material/X';

import Logo from '../../public/images/logo.png';

export default function Header() {
  const scrollTimeout = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isHoveringPopper, setIsHoveringPopper] = useState(false);

  const handleMenuOpen = (event, label) => {
    setOpenMenu(label);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setOpenMenu(null);
    setAnchorEl(null);
  };

  const toggleMenu = (menuLabel) => {
    setExpandedMenu((prev) => (prev === menuLabel ? null : menuLabel));
    setExpandedCategory(null);
  };

  const toggleCategory = (categoryLabel) => {
    setExpandedCategory((prev) => (prev === categoryLabel ? null : categoryLabel));
  };

  const handleDrawerNavigation = () => {
    setDrawerOpen(false);
    setExpandedMenu(null);
    setExpandedCategory(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isHoveringPopper) {
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          handleMenuClose();
        }, 200);
      }
    };

    if (openMenu) {
      window.addEventListener("scroll", handleScroll, true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [openMenu, isHoveringPopper]);

  // --- TopBar ---
  const TopBar = () => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: { xs: 1.5, sm: 3, md: 1 },
        px: { xs: 2, sm: 4, md: 0, lg: 4, xl: 10, xxl: 14 },
        py: { xs: 1, sm: 1.2, md: 0, lg: 1, xl: 1.25, xxl: 2 },
        height: { lg: 64, xl: 64, xxl: 72 },
        fontFamily: "Poppins, Montserrat, sans-serif",
        bgcolor: '#282825',
        color: 'white',
        fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.85rem', lg: '0.95rem', xl: '1rem' },
        textAlign: 'center',
        fontWeight: 400,
        letterSpacing: '0.2px',
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: 3,
          alignItems: "center",
        }}
      >
        <MuiLink
          href="mailto:sales@onasglobal.com"
          underline="none"
          color="inherit"
          sx={{
            fontSize: '15px',
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontFamily: "Poppins, Montserrat, sans-serif",
          }}
        >
          <MailOutlineIcon fontSize="small" /> sales@onasglobal.com
        </MuiLink>
        <Box sx={{
          fontSize: '15px',
          display: "flex",
          alignItems: "center",
          gap: 2,
          fontFamily: "Poppins, Montserrat, sans-serif",
        }}>
          <MuiLink
            href="tel:+91-9281506440"
            underline="none"
            color="inherit"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              fontFamily: "Poppins, Montserrat, sans-serif",
            }}
          >
            <PhoneIcon fontSize="small" /> 91-928 150 6440 & 44 1
          </MuiLink>&nbsp; &amp;&nbsp;
          <MuiLink
            href="tel:+16073262406"
            underline="none"
            color="inherit"
            sx={{
              fontSize: '15px',
              display: "flex",  
              alignItems: "center",
              gap: 0.5,
              fontFamily: "Poppins, Montserrat, sans-serif",
            }}
          >
            <PhoneIcon fontSize="small" /> +1 607-326-2406
          </MuiLink>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          gap: 0.5,
          fontFamily: "Poppins, Montserrat, sans-serif",
        }}
      >
        <PhoneIcon fontSize="small" />
        <MuiLink
          href="tel:+919281506440"
          underline="none"
          color="inherit"
          sx={{ fontFamily: "Poppins, Montserrat, sans-serif" }}
        >
          +91-9281506440
        </MuiLink> &nbsp;&amp;&nbsp;
        <MuiLink
          href="tel:+16073262406"
          underline="none"
          color="inherit"
          sx={{ fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif" }}
        >
          +1 607 326 2406
        </MuiLink>
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: 2,
          fontFamily: "Poppins, Montserrat, sans-serif",
        }}
      >
        <MuiLink
          href="https://www.facebook.com/profile.php?id=61581619530716"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <FacebookIcon fontSize="small" />
        </MuiLink>
        <MuiLink
          href="https://www.instagram.com/onasglobalservices?igsh=aXVmdjVjdWVqcXE4"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <InstagramIcon fontSize="small" />
        </MuiLink>
        <MuiLink
          href="https://www.linkedin.com/company/onas-consulting-services"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <LinkedInIcon fontSize="small" />
        </MuiLink>
        <MuiLink
          href="https://www.youtube.com/@ONASGlobalServicess"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <YouTubeIcon fontSize="small" />
        </MuiLink>
        <MuiLink
          href="https://x.com/ONAS261679"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <XIcon fontSize="small" />
        </MuiLink>

        <Button
          size="small"
          component={RouterLink}
          to="/resources/contact-us/"
          variant="primaryFilled"
          sx={{
            fontFamily: "Poppins, Montserrat, sans-serif",
            fontWeight: 500,
          }}
        >
          Contact Us
        </Button>
        <Button
          size="small"
          variant="secondaryFilled"
          component={RouterLink}
          to="/resources/careers/"
          sx={{
            fontFamily: "Poppins, Montserrat, sans-serif",
            fontWeight: 500,
          }}
        >
          Careers
        </Button>
      </Box>
    </Box>
  );

  const renderNavLinks = () => (
    <Box sx={{
      display: "flex",
      alignItems: "center",
    
      fontFamily: "Poppins, Montserrat, sans-serif",
    }}>
      {NAV_LINKS.map((nav) =>
        nav.children ? (
          <Box
            key={nav.label}
            sx={{
              position: "relative",
              display: "inline-block",
              fontFamily: "Poppins, Montserrat, sans-serif",
            }}
          >
            <Button
              onMouseEnter={(e) => handleMenuOpen(e, nav.label)}
              endIcon={<ArrowDropDownIcon />}
              sx={{
                color: "#0B4C74",
                fontWeight: 600,
                textTransform: "none",
                gap: { lg: 2, xl: 1, xxl: 4 },
                fontSize: {
                  xs: "0.85rem",
                  sm: "0.95rem",
                  md: "1.05rem",
                  lg: "1.05rem",
                  xl: "1.25rem",
                  xxl: "1.35rem",
                },
                padding: '15px',
                "&:hover": { bgcolor: "transparent", color: "#2E8BC0" },
                fontFamily: "Poppins, Montserrat, sans-serif",
                letterSpacing: '0.3px',
              }}
            >
              {nav.label}
            </Button>

            <Popper
              open={openMenu === nav.label}
              anchorEl={anchorEl}
              placement="bottom-start"
              transition
              disablePortal={false}
              style={{ zIndex: 1200 }}
              onMouseEnter={() => setIsHoveringPopper(true)}
              onMouseLeave={() => setIsHoveringPopper(false)}
            >
              {({ TransitionProps }) => (
                <Grow {...TransitionProps} style={{ transformOrigin: 'top left' }}>
                  <Paper
                    sx={{
                      maxHeight: "70vh",
                      overflowY: "auto",
                      borderRadius: 2,
                      mt: 1,
                      minWidth: "420px",
                      maxWidth: "1400px",
                      width: "auto",
                      bgcolor: "background.paper",
                      p: 2,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                      fontFamily: "Poppins, Montserrat, sans-serif",
                    }}
                  >
                    <ClickAwayListener onClickAway={handleMenuClose}>
                      <MenuList autoFocusItem={openMenu === nav.label}>
                        <Box
                          sx={{
                            display: "grid",
                            gap: 2,
                            mt: 1,
                            gridTemplateColumns: {
                              xs: "repeat(1, 1fr)",
                              sm: "repeat(2, 1fr)",
                              md: "repeat(3, 1fr)",
                              lg: `repeat(${Math.min(nav.children.length, 4)}, 1fr)`,
                              xl: `repeat(${Math.min(nav.children.length, 4)}, 1fr)`,
                              xxl: `repeat(${Math.min(nav.children.length, 4)}, 1fr)`,
                            },
                          }}
                        >
                          {nav.children.map((group, gi) => (
                            <Box key={gi} sx={{ minWidth: 180 }}>
                              {group.category && (
                                <Typography
                                  sx={{
                                    fontWeight: 700,
                                    fontSize: "11px",
                                    mb: 1.5,
                                    color: "#0B4C74",
                                    textTransform: "uppercase",
                                    fontFamily: "Poppins, Montserrat, sans-serif",
                                    letterSpacing: '0.5px',
                                  }}
                                >
                                  {group.category}
                                </Typography>
                              )}
                              {(group.items || [group]).map((child, i) => (
                                <MenuItem
                                  key={child.label}
                                  component={child.path?.startsWith("http") ? "a" : RouterLink}
                                  href={child.path?.startsWith("http") ? child.path : undefined}
                                  to={!child.path?.startsWith("http") ? child.path : undefined}
                                  target={child.path?.startsWith("http") ? "_blank" : undefined}
                                  rel={child.path?.startsWith("http") ? "noopener noreferrer" : undefined}
                                  onClick={handleMenuClose}
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    borderRadius: 1,
                                    px: 1,
                                    py: 0.5,
                                    fontSize: '13px',
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                      bgcolor: "#e6f0ff",
                                      color: "#0066ff",
                                      transform: "translateX(3px)",
                                    },
                                    fontFamily: "Poppins, Montserrat, sans-serif",
                                    fontWeight: 400,
                                  }}
                                >
                                  <span style={{ color: "#888", fontSize: '10px' }}>»</span> 
                                  <span>{child.label}</span>
                                </MenuItem>
                              ))}
                            </Box>
                          ))}
                        </Box>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Box>
        ) : (
          <Button
            key={nav.label}
            component={RouterLink}
            to={nav.path}
            sx={{
              color: "#0B4C74",
              fontWeight: 600,
              textTransform: "none",
              fontSize: {
                xs: "0.85rem",
                sm: "0.95rem",
                md: "1.05rem",
                lg: "1.05rem",
                xl: "1.25rem",
                xxl: "1.35rem",
              },
              px: 2,
              "&:hover": { color: "#2E8BC0", bgcolor: "transparent" },
              fontFamily: "Poppins, Montserrat, sans-serif",
              letterSpacing: '0.3px',
            }}
          >
            {nav.label}
          </Button>
        )
      )}
    </Box>
  );

  // --- Mobile drawer ---
  const renderDrawerLinks = () => (
    <Box
      sx={{
        width: 280,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Poppins, Montserrat, sans-serif",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid #eee",
        }}
      >
        <IconButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 0, flex: 1 }}>
        {NAV_LINKS.map((nav) =>
          nav.children ? (
            <Box key={nav.label}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => toggleMenu(nav.label)}>
                  <ListItemText
                    primary={<strong style={{ fontFamily: "Poppins, Montserrat, sans-serif" }}>{nav.label}</strong>}
                    primaryTypographyProps={{
                      fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                      fontFamily: "Poppins, Montserrat, sans-serif",
                      fontWeight: 600,
                    }}
                  />
                  <ArrowDropDownIcon />
                </ListItemButton>
              </ListItem>

              <Collapse in={expandedMenu === nav.label} timeout="auto" unmountOnExit>
                {nav.children.map((group) => (
                  <Box key={group.category || group.label}>
                    {group.category ? (
                      <>
                        <ListItem disablePadding>
                          <ListItemButton onClick={() => toggleCategory(group.category)} sx={{ pl: 3 }}>
                            <ListItemText
                              primary={
                                <span style={{ 
                                  fontFamily: "Poppins, Montserrat, sans-serif",
                                  fontSize: '13px',
                                  fontWeight: 600,
                                  color: '#0B4C74',
                                  textTransform: 'uppercase'
                                }}>
                                  {group.category}
                                </span>
                              }
                            />
                          </ListItemButton>
                        </ListItem>

                        <Collapse in={expandedCategory === group.category}>
                          {(group.items || []).map((child) => (
                            <ListItem key={child.label} disablePadding>
                              <ListItemButton
                                component={RouterLink}
                                to={child.path || "#"}
                                onClick={() => setDrawerOpen(false)}
                                sx={{ pl: 6, display: "flex", gap: 1 }}
                              >
                                <ListItemText
                                  primary={
                                    <span style={{ 
                                      fontFamily: "Poppins, Montserrat, sans-serif", 
                                      fontSize: '13px',
                                      fontWeight: 400
                                    }}>
                                      <span style={{ color: "#888" }}>»</span> {child.label}
                                    </span>
                                  }
                                />
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </Collapse>
                      </>
                    ) : (
                      (group.items || [group]).map((child) => (
                        <ListItem key={child.label} disablePadding>
                          <ListItemButton
                            component={RouterLink}
                            to={child.path || "#"}
                            onClick={() => setDrawerOpen(false)}
                            sx={{ pl: 3, display: "flex", gap: 1 }}
                          >
                            <ListItemText
                              primary={
                                <span style={{ 
                                  fontFamily: "Poppins, Montserrat, sans-serif", 
                                  fontSize: '13px',
                                  fontWeight: 400
                                }}>
                                  <span style={{ color: "#888" }}>»</span> {child.label}
                                </span>
                              }
                            />
                          </ListItemButton>
                        </ListItem>
                      ))
                    )}
                  </Box>
                ))}
              </Collapse>
            </Box>
          ) : (
            <ListItem key={nav.label} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={nav.path || "#"}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText
                  primary={nav.label}
                  primaryTypographyProps={{
                    fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                    fontFamily: "Poppins, Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>

      <Box sx={{
        p: 2,
        borderTop: "1px solid #eee",
        textAlign: "center",
        fontFamily: "Poppins, Montserrat, sans-serif",
      }}>
        <Button
          fullWidth
          component={RouterLink}
          to="/resources/contact-us/"
          variant="primaryFilled"
          onClick={handleDrawerNavigation}
          sx={{ fontFamily: "Poppins, Montserrat, sans-serif", mb: 1 }}
        >
          Contact Us
        </Button>

        <Button
          fullWidth
          component={RouterLink}
          to="/resources/careers/"
          variant="secondaryFilled"
          onClick={handleDrawerNavigation}
          sx={{ fontFamily: "Poppins, Montserrat, sans-serif", mb: 2 }}
        >
          Careers
        </Button>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <MuiLink
            href="https://www.facebook.com/profile.php?id=61581619530716"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <FacebookIcon fontSize="small" />
          </MuiLink>
          <MuiLink
            href="https://www.instagram.com/onasglobalservices?igsh=aXVmdjVjdWVqcXE4"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <InstagramIcon fontSize="small" />
          </MuiLink>
          <MuiLink
            href="https://www.linkedin.com/company/onas-consulting-services"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <LinkedInIcon fontSize="small" />
          </MuiLink>
          <MuiLink
            href="https://www.youtube.com/@ONASGlobalServicess"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <YouTubeIcon fontSize="small" />
          </MuiLink>
          <MuiLink
            href="https://x.com/ONAS261679"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <XIcon fontSize="small" />
          </MuiLink>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "#046bd2",
          zIndex: (theme) => theme.zIndex.appBar + 1,
        }}
      >
        <TopBar />
      </Box>

      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          top: { xs: 32, sm: 38, md: 60, lg: 58, xl: 72, xxl: 80 },
          zIndex: (theme) => theme.zIndex.appBar,
          bgcolor: "background.paper",
          borderBottom: "1px solid #eee",
          fontFamily: "Poppins, Montserrat, sans-serif",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            minHeight: { xs: 96, sm: 96, md: 72, lg: 80, xl: 90, xxl: 100 },
            height: { xs: 96, sm: 96, md: 72, lg: 80, xl: 90, xxl: 100 },
            px: { xs: 1, sm: 2, md: 2, lg: 3, xl: 4 },
            letterSpacing: { xs: 0, sm: 0, md: 0.5, lg: 3.3, xl: 3.5 },
            mt: { xl: 1 },
            fontFamily: "Poppins, Montserrat, sans-serif",
          }}
        >
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              height: { xs: 60, sm: 70, md: 80, lg: 90, xl: 100, xxl: 110 },
              minWidth: { xs: 200, sm: 220, md: 240, lg: 260, xl: 280, xxl: 300 },
              ml: { xs: 3, sm: 4, md: 5, lg: 6, xl: 8, xxl: 10 },
              mt: { lg: 2, xl: 2, xxl: 3 },
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="ONAS Logo"
              sx={{
                height: { xs: "60px", sm: "70px", md: "80px", lg: "90px", xl: "100px", xxl: "110px" },
                width: { xs: "200px", sm: "220px", md: "240px", lg: "260px", xl: "280px", xxl: "300px" },
                maxWidth: "none",
                objectFit: "contain",
                pt: { xs: 2, md: 0, lg: 0, xl: 0, xxl: 0 }
              }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
              justifyContent: "flex-end",
              flex: 1,
              pr: { md: 2, lg: 4, xl: 6, xxl: 8 }
            }}
          >
            {renderNavLinks()}
          </Box>

          <IconButton
            onClick={() => setDrawerOpen(!drawerOpen)}
            sx={{
              display: { md: "none" },
              mr: 2
            }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
              sx: {
                zIndex: (theme) => theme.zIndex.modal + 2,
                fontFamily: "Poppins, Montserrat, sans-serif",
              },
            }}
          >
            {renderDrawerLinks()}
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
}