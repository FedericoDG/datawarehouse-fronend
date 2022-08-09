/* eslint-disable indent */
import { Grid, Paper, Stack } from '@mui/material';
import { useConfirm } from 'material-ui-confirm';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PublicIcon from '@mui/icons-material/Public';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PlaceIcon from '@mui/icons-material/Place';
import { deepPurple, pink, teal, grey } from '@mui/material/colors';

import { notification } from '../../utils/notification';

export const Icon = ({ type }) => {
  const styleR = { fontWeight: 500, fontSize: '4rem', color: deepPurple[300] };
  const styleCo = { fontWeight: 500, fontSize: '4rem', color: pink[300] };
  const styleCi = { fontWeight: 500, fontSize: '4rem', color: teal[300] };
  if (type === 'region') return <PublicIcon style={styleR} />;
  if (type === 'country') return <EmojiFlagsIcon style={styleCo} />;
  if (type === 'city') return <PlaceIcon style={styleCi} />;
};

const MuiCard = ({ title, subtitle, type, data, handleOpen, handleDelete }) => {
  const confirm = useConfirm();

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
        backgroundColor: grey[200]
      }}
      component='div'
      elevation={1}
    >
      <Stack direction='row' justifyContent='space-between'>
        <div>
          <Typography variant='button' color='text.secondary' gutterBottom>
            {title}
          </Typography>
          {subtitle && <Typography variant='body2'>{`(${subtitle})`}</Typography>}
        </div>
        <Icon type={type} />
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
