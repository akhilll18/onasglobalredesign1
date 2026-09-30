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

  // --- TopBar — SHORTER + smaller buttons ---
  const TopBar = () => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: { xs: 1.5, sm: 3, md: 1 },
        px: { xs: 2, sm: 4, md: 0, lg: 4, xl: 10, xxl: 14 },
        py: { xs: 0.6, sm: 0.7, md: 0, lg: 0.7, xl: 0.8, xxl: 1 },
        height: { lg: 44, xl: 44, xxl: 50 },
        fontFamily: "Poppins, Montserrat, sans-serif",
        bgcolor: '#282825',
        color: 'white',
        fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.8rem', lg: '0.85rem', xl: '0.9rem' },
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
            fontSize: '12px',
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontFamily: "Poppins, Montserrat, sans-serif",
          }}
        >
          <MailOutlineIcon sx={{ fontSize: 14 }} /> sales@onasglobal.com
        </MuiLink>
        <Box sx={{
          fontSize: '12px',
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
            <PhoneIcon sx={{ fontSize: 14 }} /> 91-928 150 6440 & 44 1
          </MuiLink>&nbsp; &amp;&nbsp;
          <MuiLink
            href="tel:+16073262406"
            underline="none"
            color="inherit"
            sx={{
              fontSize: '12px',
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              fontFamily: "Poppins, Montserrat, sans-serif",
            }}
          >
            <PhoneIcon sx={{ fontSize: 14 }} /> +1 607-326-2406
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
        <PhoneIcon sx={{ fontSize: 14 }} />
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
          gap: 1.2,
          fontFamily: "Poppins, Montserrat, sans-serif",
        }}
      >
        <MuiLink href="https://www.facebook.com/profile.php?id=61581619530716" target="_blank" rel="noopener" color="inherit">
          <FacebookIcon sx={{ fontSize: 14 }} />
        </MuiLink>
        <MuiLink href="https://www.instagram.com/onasglobalservices?igsh=aXVmdjVjdWVqcXE4" target="_blank" rel="noopener" color="inherit">
          <InstagramIcon sx={{ fontSize: 14 }} />
        </MuiLink>
        <MuiLink href="https://www.linkedin.com/company/onas-consulting-services" target="_blank" rel="noopener" color="inherit">
          <LinkedInIcon sx={{ fontSize: 14 }} />
        </MuiLink>
        <MuiLink href="https://www.youtube.com/@ONASGlobalServicess" target="_blank" rel="noopener" color="inherit">
          <YouTubeIcon sx={{ fontSize: 14 }} />
        </MuiLink>
        <MuiLink href="https://x.com/ONAS261679" target="_blank" rel="noopener" color="inherit">
          <XIcon sx={{ fontSize: 14 }} />
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
            padding: '4px 10px',
            minWidth: 'auto',
            textTransform: 'none',
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
            padding: '4px 10px',
            minWidth: 'auto',
            textTransform: 'none',
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
                                    // ── Item with subgroups (e.g. Corporate Training) ──
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
                                                      color: '#123f3b',
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

                                    // ── Default plain menu item ──
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
          sx={{ fontFamily: "Poppins, Montserrat, sans-serif", mb: 1, }}
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
          <MuiLink href="https://www.facebook.com/profile.php?id=61581619530716" target="_blank" rel="noopener" color="inherit">
            <FacebookIcon fontSize="small" />
          </MuiLink>
          <MuiLink href="https://www.instagram.com/onasglobalservices?igsh=aXVmdjVjdWVqcXE4" target="_blank" rel="noopener" color="inherit">
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
          top: { xs: 26, sm: 30, md: 38, lg: 40, xl: 44, xxl: 50 },
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
            minHeight: { xs: 56, sm: 56, md: 56, lg: 60, xl: 64, xxl: 70 },
            height: { xs: 56, sm: 56, md: 56, lg: 60, xl: 64, xxl: 70 },
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
              height: { xs: 38, sm: 40, md: 45, lg: 48, xl: 52, xxl: 56 },
              minWidth: { xs: 130, sm: 140, md: 150, lg: 170, xl: 190, xxl: 210 },
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
                height: { xs: "38px", sm: "40px", md: "45px", lg: "48px", xl: "52px", xxl: "56px" },
                width: { xs: "130px", sm: "140px", md: "150px", lg: "170px", xl: "190px", xxl: "210px" },
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