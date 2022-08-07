/* eslint-disable indent */
import { Grid, Paper, Stack } from '@mui/material';
import { useConfirm } from 'material-ui-confirm';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { notification } from '../../utils/notification';

import cityImg from '../../assets/city.svg';
import countryImg from '../../assets/country.svg';
import regionImg from '../../assets/region.svg';

const MuiCard = ({ title, subtitle, type, data, handleOpen, handleDelete }) => {
  const confirm = useConfirm();

  const image = type === 'region' ? regionImg : type === 'country' ? countryImg : cityImg;

  const titleConfirm =
    type === 'region'
      ? '¿Quieres eliminar esta región?'
      : type === 'country'
      ? '¿Quieres eliminar este país?'
      : '¿Quieres eliminar esta ciudad?';

  const contentComfirm = type === 'region' ? `Region: ${data.name}` : type === 'country' ? `País: ${data.name}` : `Ciudad: ${data.name}`;

  const successText =
    type === 'region' ? 'Región eliminada con éxito' : type === 'country' ? 'País eliminado con éxito' : 'Ciudad eliminada con éxito';

  const onDelete = () => {
    confirm({
      title: titleConfirm,
      content: `${contentComfirm}. Al eliminar una Región/País/Ciudad, se eliminarán todos los datos relacionados con ella.`,
      confirmationText: 'Eliminar',
      cancellationText: 'Cancelar',
      confirmationButtonProps: { variant: 'contained', color: 'error', autoFocus: true }
    })
      .then(() => {
        handleDelete(data.id);
        notification('success', successText);
      })
      .catch(() => {});
  };

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
        <Button color='error' size='small' onClick={onDelete}>
          Borrar
        </Button>
      </Grid>
    </Paper>
  );
};

export default MuiCard;
