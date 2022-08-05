import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box bottom={0} component='footer' m={2} position='fixed' width='100%'>
      <Typography align='center' variant='body2' fontWeight={300}>
        <a
          href='mailto:fede@nazgul.com.ar'
          style={{
            textDecoration: 'none',
            color: 'unset',
            backgroundColor: 'white',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '99px'
          }}
        >
          Desarrollado por fede@nazgul.com.ar
        </a>
      </Typography>
    </Box>
  );
};
export default Footer;
