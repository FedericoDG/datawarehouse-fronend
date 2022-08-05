import { Box, Typography } from '@mui/material';

import notLikeThis from '../../assets/notLikeThis.png';

const Error = ({ height }) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: height }}>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <img src={notLikeThis} alt='not like this' />
      <Typography variant='h6' color='initial' textAlign='center'>
        ¡Se rompió todo!
      </Typography>
      <Typography variant='body' color='initial' textAlign='center'>
        Si fuera tu revisaría que esté corriendo el backend y la base de datos... ¡Que Dios te ayude!
      </Typography>
    </Box>
  </Box>
);

export default Error;
