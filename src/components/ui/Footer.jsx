import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const Footer = () => {
  const AStyled = styled('a')`
    color: ${(prop) => prop.theme.palette.primary.main};
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${(prop) => prop.theme.palette.secondary.main};
    }
  `;

  return (
    <Box
      bottom={0}
      component='footer'
      py={2}
      position='fixed'
      width='100%'
      sx={{ display: 'flex', justifyContent: 'center' }}
      bgcolor='background.paper'
    >
      <Typography align='center' variant='body2' fontWeight={300}>
        ¿Quieres saludarme?
      </Typography>
      <Typography align='center' variant='body2' fontWeight={300} sx={{ marginLeft: 1 }}>
        <AStyled href='mailto:fede@nazgul.com.ar'>fede@nazgul.com.ar</AStyled>
      </Typography>
    </Box>
  );
};

export default Footer;
