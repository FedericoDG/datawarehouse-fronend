import { Box } from '@mui/material';
import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

const Footer = ({ fullwidth }) => {
  const AStyled = styled('a')`
    color: ${(prop) => prop.theme.palette.primary.main};
    padding: 0 0.5rem;
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
      width={fullwidth && '100%'}
      sx={{ display: 'flex', justifyContent: 'center' }}
      bgcolor='background.paper'
    >
      <AStyled href='mailto:fede@nazgul.com.ar'>
        <MailIcon sx={{ fontSize: '2rem' }} />
      </AStyled>
      <AStyled href='https://www.linkedin.com/in/fededg/' target='_blank'>
        <LinkedInIcon sx={{ fontSize: '2rem' }} />
      </AStyled>
      <AStyled href='https://github.com/Federicodg' target='_blank'>
        <GitHubIcon sx={{ fontSize: '2rem' }} />
      </AStyled>
    </Box>
  );
};

export default Footer;
