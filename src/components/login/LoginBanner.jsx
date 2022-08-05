import React from 'react';
import Box from '@mui/material/Box';

import './LoginBanner.css';
import Banner from '../../assets/bg-login.webp';

const LoginBanner = () => (
  <Box
    className='image'
    component='img'
    src={Banner}
    sx={{
      display: 'block',
      height: '100vh',
      objectFit: 'cover',
      width: '100%'
    }}
  />
);

export default LoginBanner;
