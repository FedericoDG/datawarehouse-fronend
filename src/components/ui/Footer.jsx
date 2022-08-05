import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box bottom={0} component='footer' m={2} position='fixed' width='100%'>
      <Typography align='center' color='primary' variant='body1'>
        <a href='mailto:fede@nazgul.com.ar' style={{ textDecoration: 'none' }}>
          fede@nazgul.com.ar
        </a>
      </Typography>
    </Box>
  );
};
export default Footer;
