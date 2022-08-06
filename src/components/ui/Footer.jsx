import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  const AStyled = styled('a')`
    color: ${(prop) => prop.theme.palette.primary.main};
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${(prop) => prop.theme.palette.secondary.main};
    }
  `;

  return (
    <Box bottom={0} component='footer' my={2} position='fixed' width='100%'>
      <Typography align='center' variant='body2' fontWeight={300}>
        <AStyled href='mailto:fede@nazgul.com.ar'>fede@nazgul.com.ar</AStyled>
      </Typography>
    </Box>
  );
};
export default Footer;
