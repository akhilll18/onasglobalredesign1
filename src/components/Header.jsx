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
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { Popper, Paper, ClickAwayListener, Grow, MenuList, MenuItem } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link as RouterLink } from "react-router-dom";
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

  // --- TopBar — shorter, buttons aligned to AppBar right edge ---
  const TopBar = () => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'nowrap',
        gap: { xs: 1.5, sm: 2, md: 2 },
        px: { xs: 2, sm: 3, md: 2, lg: 16, xl: 4 },
        py: { xs: 0.4, sm: 0.5, md: 0 },
        height: { xs: 32, sm: 34, md: 36, lg: 36, xl: 38, xxl: 40 },
        fontFamily: "Poppins, Montserrat, sans-serif",
        bgcolor: '#282825',
        color: 'white',
        fontSize: { xs: '0.65rem', sm: '0.72rem', md: '0.75rem', lg: '0.8rem', xl: '0.85rem' },
        fontWeight: 400,
        letterSpacing: '0.2px',
      }}
    >
      {/* Left: email + phones */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: 2.5,
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <MuiLink
          href="mailto:sales@onasglobal.com"
          underline="none"
          color="inherit"
          sx={{
            fontSize: '11px',
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontFamily: "Poppins, Montserrat, sans-serif",
          }}
        >
          <MailOutlineIcon sx={{ fontSize: 13 }} /> sales@onasglobal.com
        </MuiLink>
        <Box sx={{
          fontSize: '11px',
          display: "flex",
          alignItems: "center",
          gap: 1.5,
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
            <PhoneIcon sx={{ fontSize: 13 }} /> 91-928 150 6440 &amp; 441
          </MuiLink>
          <MuiLink
            href="tel:+16073262406"
            underline="none"
            color="inherit"
            sx={{
              fontSize: '11px',
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontFamily: "Poppins, Montserrat, sans-serif",
            }}
          >
            <PhoneIcon sx={{ fontSize: 13 }} /> +1 607-326-2406
          </MuiLink>
        </Box>
      </Box>

      {/* Mobile phone display */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          gap: 0.5,
          fontSize: '11px',
          fontFamily: "Poppins, Montserrat, sans-serif",
        }}
      >
        <PhoneIcon sx={{ fontSize: 13 }} />
        <MuiLink href="tel:+919281506440" underline="none" color="inherit">
          +91-9281506440 
        </MuiLink>
      </Box>

      {/* Right: socials + buttons (aligned to AppBar nav right edge) */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: 1,
          ml: 'auto',
          pr: { md: 1, lg: 2, xl: 3, xxl: 4 },
          fontFamily: "Poppins, Montserrat, sans-serif",
        }}
      >
        <MuiLink href="https://www.facebook.com/profile.php?id=61581619530716" target="_blank" rel="noopener" color="inherit">
          <FacebookIcon sx={{ fontSize: 13 }} />
        </MuiLink>
        <MuiLink href="https://www.instagram.com/onasglobalservices?igsh=aXVmdjV3dWVqcXE4" target="_blank" rel="noopener" color="inherit">
          <InstagramIcon sx={{ fontSize: 13 }} />
        </MuiLink>
        <MuiLink href="https://www.linkedin.com/company/onas-consulting-services" target="_blank" rel="noopener" color="inherit">
          <LinkedInIcon sx={{ fontSize: 13 }} />
        </MuiLink>
        <MuiLink href="https://www.youtube.com/@ONASGlobalServicess" target="_blank" rel="noopener" color="inherit">
          <YouTubeIcon sx={{ fontSize: 13 }} />
        </MuiLink>
        <MuiLink href="https://x.com/ONAS261679" target="_blank" rel="noopener" color="inherit">
          <XIcon sx={{ fontSize: 13 }} />
        </MuiLink>

        <Button
          size="small"
          component={RouterLink}
          to="/resources/contact-us/"
          variant="primaryFilled"
          sx={{
            fontFamily: "Poppins, Montserrat, sans-serif",
            fontWeight: 500,
            fontSize: '0.6rem',
            lineHeight: 1,
            padding: '6px 10px',
            minWidth: 'auto',
            textTransform: 'none',
            borderRadius: '10px',
            ml: 0.5,
            
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
            fontSize: '0.6rem',
            lineHeight: 1,
            padding: '6px 10px',
            minWidth: 'auto',
            textTransform: 'none',
            borderRadius: '8px',
            ml: 0.5,
           
          }}
        >
          Careers
        </Button>
      </Box>
    </Box>
  );

  const renderNavLinks = () => {
    const wideMenus = ["Industries", "Solutions"];
    const isWideMenu = (label) => wideMenus.includes(label);

    return (
      <Box sx={{ display: "flex", alignItems: "center", flexWrap: "nowrap", fontFamily: "Poppins, Montserrat, sans-serif" }}>
        {NAV_LINKS.map((nav) =>
          nav.children ? (
            <Box key={nav.label} sx={{ position: "relative", display: "inline-block", fontFamily: "Poppins, Montserrat, sans-serif" }}>
              <Button
                onMouseEnter={(e) => handleMenuOpen(e, nav.label)}
                endIcon={<ArrowDropDownIcon sx={{ fontSize: 18 }} />}
                sx={{
                  color: "#0B4C74",
                  fontWeight: 600,
                  textTransform: "none",
                  whiteSpace: "nowrap",
                  mt: { lg: 0.5, xl: 0.5, xxl: 0.5 },
                  gap: { lg: 0.5, xl: 0.5, xxl: 1 },
                  fontSize: {
                    xs: "0.8rem", sm: "0.85rem", md: "0.85rem",
                    lg: "0.9rem", xl: "0.95rem", xxl: "1.05rem",
                  },
                  padding: '6px 10px',
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
                style={{
                  zIndex: 1200,
                  width: isWideMenu(nav.label) ? "75%" : "auto",
                  left: isWideMenu(nav.label) ? "0 !important" : "auto",
                }}
                onMouseEnter={() => setIsHoveringPopper(true)}
                onMouseLeave={() => setIsHoveringPopper(false)}
              >
                {({ TransitionProps }) => (
                  <Grow {...TransitionProps} style={{ transformOrigin: 'top left' }}>
                    <Paper
                      sx={{
                        maxHeight: "90vh",
                        borderRadius: 2,
                        minWidth: isWideMenu(nav.label) ? "100%" : "420px",
                        maxWidth: isWideMenu(nav.label) ? "100%" : "1400px",
                        width: isWideMenu(nav.label) ? "100%" : "auto",
                        bgcolor: "background.paper",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                        fontFamily: "Poppins, Montserrat, sans-serif",
                        p: 2,
                        pt: isWideMenu(nav.label) ? 2.5 : 2,
                        pb: isWideMenu(nav.label) ? 2.5 : 2,
                      }}
                    >
                      <ClickAwayListener onClickAway={handleMenuClose}>
                        <MenuList autoFocusItem={openMenu === nav.label} sx={{ p: 0 }}>
                          <Box
                            sx={{
                              maxWidth: isWideMenu(nav.label) ? "950px" : "none",
                              mx: isWideMenu(nav.label) ? "auto" : 0,
                            }}
                          >
                            <Box
                              sx={{
                                display: "grid",
                                gap: isWideMenu(nav.label) ? "20px 40px" : 2,
                                gridTemplateColumns: isWideMenu(nav.label)
                                  ? {
                                      xs: "repeat(1, 1fr)",
                                      sm: "repeat(2, 1fr)",
                                      md: "repeat(3, minmax(0, 1fr))",
                                      lg: "repeat(3, minmax(0, 1fr))",
                                      xl: "repeat(3, minmax(0, 1fr))",
                                      xxl: "repeat(3, minmax(0, 1fr))",
                                    }
                                  : {
                                      xs: "repeat(1, 1fr)",
                                      sm: "repeat(2, 1fr)",
                                      md: "repeat(3, 1fr)",
                                      lg: `repeat(${Math.min(nav.children.length, 4)}, 1fr)`,
                                      xl: `repeat(${Math.min(nav.children.length, 4)}, 1fr)`,
                                      xxl: `repeat(${Math.min(nav.children.length, 4)}, 1fr)`,
                                    },
                                justifyContent: "flex-start",
                              }}
                            >
                              {nav.children.map((group, gi) => (
                                <Box key={`${group.category || group.label}-${gi}`} sx={{ minWidth: 0 }}>
                                  {group.category && (
                                    <Typography
                                      sx={{
                                        fontWeight: 700,
                                        fontSize: '11px',
                                        mb: isWideMenu(nav.label) ? 1 : 1.5,
                                        color: "#0B4C74",
                                        textTransform: "uppercase",
                                        fontFamily: "Poppins, Montserrat, sans-serif",
                                        letterSpacing: '0.5px',
                                      }}
                                    >
                                      {group.category}
                                    </Typography>
                                  )}

                                  {(group.items || [group]).map((child) => {
                                    if (child.subgroups && child.subgroups.length > 0) {
                                      return (
                                        <Box key={child.label} sx={{ mt: 0.5 }}>
                                          <MenuItem
                                            component={RouterLink}
                                            to={child.path || '#'}
                                            onClick={handleMenuClose}
                                            sx={{
                                              display: "flex",
                                              alignItems: "flex-start",
                                              gap: 1,
                                              borderRadius: 1,
                                              px: 1,
                                              py: 0.5,
                                              fontSize: '13px',
                                              fontWeight: 600,
                                              color: '#0B4C74',
                                              whiteSpace: "normal",
                                              "&:hover": { bgcolor: "transparent", color: "#0066ff" },
                                              fontFamily: "Poppins, Montserrat, sans-serif",
                                            }}
                                          >
                                            <span style={{ color: "#888", fontSize: '10px', marginTop: '4px' }}>»</span>
                                            <span>{child.label}</span>
                                          </MenuItem>

                                          <Box
                                            sx={{
                                              display: "grid",
                                              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                                              gap: "12px 24px",
                                              pl: 2,
                                              pr: 1,
                                              pt: 0.5,
                                              pb: 1,
                                            }}
                                          >
                                            {child.subgroups.map((sg, sgi) => (
                                              <Box key={`${sg.title}-${sgi}`} sx={{ minWidth: 0 }}>
                                                <Typography
                                                  sx={{
                                                    fontWeight: 700,
                                                    fontSize: '10px',
                                                    letterSpacing: '0.5px',
                                                    textTransform: 'uppercase',
                                                    color: '#0B4C74',
                                                    borderBottom: '1px solid #dfe8df',
                                                    pb: 0.5,
                                                    mb: 0.5,
                                                    fontFamily: 'Poppins, Montserrat, sans-serif',
                                                  }}
                                                >
                                                  {sg.title}
                                                </Typography>

                                                {sg.items.map((item) => (
                                                  <MenuItem
                                                    key={item.label}
                                                    component={RouterLink}
                                                    to={item.path}
                                                    onClick={handleMenuClose}
                                                    sx={{
                                                      fontSize: '12px',
                                                      color: '#0B4C74',
                                                      fontFamily: 'Poppins, Montserrat, sans-serif',
                                                      fontWeight: 400,
                                                      py: 0.25,
                                                      px: 0.5,
                                                      borderRadius: 0.5,
                                                      transition: 'all 0.15s ease',
                                                      display: 'block',
                                                      minHeight: 'auto',
                                                      '&:hover': { color: '#0066ff', bgcolor: 'transparent' },
                                                    }}
                                                  >
                                                    {item.label}
                                                  </MenuItem>
                                                ))}
                                              </Box>
                                            ))}
                                          </Box>
                                        </Box>
                                      );
                                    }

                                    return (
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
                                          alignItems: "flex-start",
                                          gap: 1,
                                          borderRadius: 1,
                                          px: 1,
                                          py: isWideMenu(nav.label) ? 0.3 : 0.5,
                                          fontSize: isWideMenu(nav.label) ? '12px' : '13px',
                                          transition: "all 0.2s ease",
                                          whiteSpace: "normal",
                                          "&:hover": { bgcolor: "transparent", color: "#0066ff" },
                                          fontFamily: "Poppins, Montserrat, sans-serif",
                                          fontWeight: 400,
                                        }}
                                      >
                                        <span style={{ color: "#888", fontSize: '10px', marginTop: '4px' }}>»</span>
                                        <span>{child.label}</span>
                                      </MenuItem>
                                    );
                                  })}
                                </Box>
                              ))}
                            </Box>
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
                whiteSpace: "nowrap",
                fontSize: {
                  xs: "0.8rem", sm: "0.85rem", md: "0.85rem",
                  lg: "0.9rem", xl: "0.95rem", xxl: "1.05rem",
                },
                px: 1.2,
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
  };

  const renderDrawerLinks = () => (
    <Box sx={{ width: 280, height: "100%", display: "flex", flexDirection: "column", fontFamily: "Poppins, Montserrat, sans-serif" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", p: 2, borderBottom: "1px solid #eee" }}>
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
                {nav.children.map((group, gi) => (
                  <Box key={group.category ? `${group.category}-${gi}` : group.label}>
                    {group.category ? (
                      <>
                        <ListItem disablePadding>
                          <ListItemButton onClick={() => toggleCategory(`${group.category}-${gi}`)} sx={{ pl: 3 }}>
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

                        <Collapse in={expandedCategory === `${group.category}-${gi}`}>
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
              <ListItemButton component={RouterLink} to={nav.path || "#"} onClick={() => setDrawerOpen(false)}>
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

      <Box sx={{ p: 2, borderTop: "1px solid #eee", textAlign: "center", fontFamily: "Poppins, Montserrat, sans-serif" }}>
        <Button
          fullWidth
          component={RouterLink}
          to="/resources/contact-us/"
          variant="primaryFilled"
          onClick={handleDrawerNavigation}
          sx={{ fontFamily: "Poppins, Montserrat, sans-serif", mb: 1, borderRadius: '2px' }}
        >
          Contact Us
        </Button>

        <Button
          fullWidth
          component={RouterLink}
          to="/resources/careers/"
          variant="secondaryFilled"
          onClick={handleDrawerNavigation}
          sx={{ fontFamily: "Poppins, Montserrat, sans-serif", mb: 2, borderRadius: '2px' }}
        >
          Careers
        </Button>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <MuiLink href="https://www.facebook.com/profile.php?id=61581619530716" target="_blank" rel="noopener" color="inherit">
            <FacebookIcon fontSize="small" />
          </MuiLink>
          <MuiLink href="https://www.instagram.com/onasglobalservices?igsh=aXVmdjV3dWVqcXE4" target="_blank" rel="noopener" color="inherit">
            <InstagramIcon fontSize="small" />
          </MuiLink>
          <MuiLink href="https://www.linkedin.com/company/onas-consulting-services" target="_blank" rel="noopener" color="inherit">
            <LinkedInIcon fontSize="small" />
          </MuiLink>
          <MuiLink href="https://www.youtube.com/@ONASGlobalServicess" target="_blank" rel="noopener" color="inherit">
            <YouTubeIcon fontSize="small" />
          </MuiLink>
          <MuiLink href="https://x.com/ONAS261679" target="_blank" rel="noopener" color="inherit">
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
          top: { xs: 32, sm: 34, md: 36, lg: 36, xl: 38, xxl: 40 },
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
            minHeight: { xs: 56, sm: 56, md: 56, lg: 64, xl: 70, xxl: 76 },
            height: { xs: 56, sm: 56, md: 56, lg: 64, xl: 70, xxl: 76 },
            px: { xs: 1, sm: 2, md: 2, lg: 3, xl: 4 },
            letterSpacing: { xs: 0, sm: 0, md: 0.5, lg: 3.3, xl: 3.5 },
            mt: { xl: 0.5 },
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
              height: { xs: 44, sm: 46, md: 52, lg: 58, xl: 62, xxl: 66 },
              minWidth: { xs: 150, sm: 160, md: 180, lg: 200, xl: 220, xxl: 240 },
              ml: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6, xxl: 8 },
              mt: { lg: 0.5, xl: 0.5, xxl: 1 },
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="ONAS Logo"
              sx={{
                height: { xs: "44px", sm: "46px", md: "52px", lg: "58px", xl: "62px", xxl: "66px" },
                width: { xs: "150px", sm: "160px", md: "180px", lg: "200px", xl: "220px", xxl: "240px" },
                maxWidth: "none",
                objectFit: "contain",
                pt: { xs: 0.5, md: 0, lg: 0, xl: 0, xxl: 0 }
              }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
              justifyContent: "flex-end",
              flex: 1,
              pr: { md: 1, lg: 2, xl: 3, xxl: 4 }
            }}
          >
            {renderNavLinks()}
          </Box>

          <IconButton
            onClick={() => setDrawerOpen(!drawerOpen)}
            sx={{ display: { md: "none" }, mr: 2 }}
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