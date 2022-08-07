import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper, Stack } from '@mui/material';

import region from '../../assets/region.svg';
import country from '../../assets/country.svg';
import city from '../../assets/city.svg';

const MuiCard = ({ title, subtitle, type, handleOpen }) => {
  const image = type === 'region' ? region : type === 'country' ? country : city;
  return (
    <Paper
      sx={{
        width: 270,
        height: 100,
        padding: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 1,
        background: `url(${image})`
      }}
      component='div'
      elevation={2}
    >
      <Stack>
        <Typography variant='button' color='text.secondary' gutterBottom>
          {title}
        </Typography>
        {subtitle && <Typography variant='body2'>{`(${subtitle})`}</Typography>}
      </Stack>
      <Grid container justifyContent='flex-end'>
        <Button size='small' onClick={handleOpen}>
          Editar
        </Button>
        <Button color='error' size='small'>
          Borrar
        </Button>
      </Grid>
    </Paper>
  );
};

export default MuiCard;
