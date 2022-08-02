import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box bottom={0} component='footer' m={2} position='fixed' width='100%'>
      <Typography align='center' color='text.secondary' variant='body1'>
        fede@nazgul.com.ar
      </Typography>
    </Box>
  );
};
export default Footer;
