import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logoimg from "../assets/Vector.png";
import { Link } from 'react-scroll';
import { useScroll } from './useScroll';

const pages = ['Home', 'Resources', 'Testimonials', 'FAQ', 'Newsletter'];

const Navbar = () => {
  const { scrollDirection, hasScrolled } = useScroll();
  const [scrolling, setScrolling] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box className={`navbar ${hasScrolled && scrollDirection === "down" ? "hide" : "show"}`}>
      <AppBar position="absolute" sx={{ zIndex: 2, boxShadow: scrolling ? '0px 0px 10px black' : 'none', background: scrolling ? 'linear-gradient(to right, #245369, #36794b, #2b7c78)' : 'transparent' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
              <h1>
                Syed Awais
              </h1>
            </Box>

            {/* Mobile Menu Icon */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <Link to={page} smooth={true} duration={2000} key={page}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: { md: '.3rem', xs: '.2rem' },
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Syed Awais
            </Typography>

            {/* Desktop Menu Items Centered */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: '50px' }}>
              {pages.map((page) => (
                <Link key={page} to={page} smooth={true} duration={1000}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    className='navlink'
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>

            {/* Call to Action */}
            <Box sx={{ flexGrow: 0 }}>
              <Link to='Newsletter' smooth={true} duration={1000}>
              <Box component="button" sx={{ padding: { sm: '10px 20px', md: '10px 20px', xs: '5px 10px' }, transition: 'all ease-in-out 0.4s', backgroundColor: 'white', color: 'black', borderRadius: '10px', cursor: 'pointer', border: '1px solid black', ":hover": { backgroundColor: 'transparent', color: 'white', border: '1px solid white' } }}>
                Say Hi
              </Box>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;
