import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { authLogout } from '../../app/authSlice';

import { useTheme } from '@mui/material/styles';

const pages = [
  { name: 'Contactos', slug: '/dashboard/contactos' },
  { name: 'Compañías', slug: '/dashboard/companias' },
  { name: 'Regiones/Países', slug: '/dashboard/regiones' },
  { name: 'Usuarios', slug: '/dashboard/usuarios' }
];

const styles = {
  active: {
    textDecoration: 'underline',
    color: 'unset'
  },
  inactive: { color: 'unset', display: 'flex', textDecoration: 'none' }
};

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const auth = useSelector((state) => state.auth);

  const { user } = auth;

  const dispatch = useDispatch();

  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const stringAvatar = (name) => {
    return {
      sx: {
        color: theme.palette.primary.main,
        bgcolor: theme.palette.primary.contrastText
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    };
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <MapsHomeWorkIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Link to='/dashboard/contactos' style={{ textDecoration: 'none', color: 'unset' }}>
            <Typography
              variant='h5'
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              DATAWAREHOUSE
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.slug} onClick={handleCloseNavMenu}>
                  <NavLink to={page.slug} style={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
                    <Typography textAlign='center'>{page.name}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, alignItems: 'center', display: { xs: 'flex', md: 'none' } }}>
            <MapsHomeWorkIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Link to='/dashboard' style={{ textDecoration: 'none', color: 'unset' }}>
              <Typography
                variant='h5'
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none'
                }}
              >
                DATAWAREHOUSE
              </Typography>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <MenuItem key={page.slug} onClick={handleCloseNavMenu}>
                <NavLink to={page.slug} style={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
                  <Button key={page.slug} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    {page.name}
                  </Button>
                </NavLink>
              </MenuItem>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Abrir menú'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar {...stringAvatar(`${user.name} ${user.lastname}`)} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign='center'>Perfil</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(authLogout())}>
                <Typography textAlign='center'>Salir</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
