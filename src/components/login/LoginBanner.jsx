import React from 'react';
import Box from '@mui/material/Box';

import Banner from '../../assets/bg-login.jpg';

const LoginBanner = () => (
  <Box
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
