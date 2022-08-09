import { Box, CircularProgress, Typography } from '@mui/material';

const Spinner = ({ height }) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: height }}>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <CircularProgress color='primary' />
      <Typography variant='body' textAlign='center'>
        Cargando...
      </Typography>
    </Box>
  </Box>
);

export default Spinner;
