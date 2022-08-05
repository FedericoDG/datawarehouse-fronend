import { Box, Typography } from '@mui/material';

import lul from '../assets/lul.png';
import Layout from '../components/ui/Layout';

const Error404 = ({ height = 657 }) => (
  <Layout>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: height }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <img src={lul} alt='not like this' />
        <Typography variant='h6' color='initial' textAlign='center'>
          ¡Parece que te haz perdido!
        </Typography>
        <Typography variant='body' color='initial' textAlign='center'>
          Intententa usar el menú de arriba. No es muy complicado, ¡tu puedes!
        </Typography>
      </Box>
    </Box>
  </Layout>
);

export default Error404;
