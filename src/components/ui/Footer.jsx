import { Box, Typography } from '@mui/material';

const style = {
  backgroundColor: 'white',
  border: '1px solid #ccc',
  borderRadius: '99px',
  color: 'unset',
  padding: '4px 8px',
  textDecoration: 'none'
};

const Footer = () => {
  return (
    <Box bottom={0} component='footer' my={2} position='fixed' width='100%'>
      <Typography align='center' variant='body2' fontWeight={300}>
        <a href='mailto:fede@nazgul.com.ar' style={style}>
          fede@nazgul.com.ar
        </a>
      </Typography>
    </Box>
  );
};
export default Footer;
