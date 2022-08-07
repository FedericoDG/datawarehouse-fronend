import { Backdrop, Box, Button, Fade, Grid, MenuItem, Modal, Paper, Stack, TextField, Typography } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';

import useModalCountries from '../../hooks/useModalCountries';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  minWidth: 1300,
  minHeight: 233,
  borderRadius: 1
};

const ModalCountries = ({ activeData, open, handleClose, handleEditCountry, handleAddCountry, regions }) => {
  const { handleSubmit, errors, register, onSubmit } = useModalCountries({
    activeData,
    handleEditCountry,
    handleAddCountry,
    handleClose
  });

  return (
    <Modal
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
      aria-describedby='transition-modal-description'
      aria-labelledby='transition-modal-title'
      open={open}
      onClose={handleClose}
    >
      <Fade in={open}>
        <Box sx={style} component={Paper}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography align='center' variant='h5' textTransform='uppercase' fontWeight={500}>
              {activeData.id ? 'Editar País' : 'Agregar País'}
            </Typography>
            <Stack p={1} spacing={1} direction='row' flex alignItems='center'>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{
                  backgroundColor: 'primary.dark',
                  borderWidth: 4,
                  borderStyle: 'solid',
                  borderColor: 'primary.light',
                  borderRadius: '50%',
                  minHeight: 100,
                  minWidth: 100,
                  textTransform: 'uppercase',
                  zIndex: 99
                }}
              >
                <ApartmentIcon style={{ fontWeight: 500, color: 'white', fontSize: '4rem' }} />
              </Box>
              <TextField
                fullWidth
                inputProps={{ tabIndex: '3' }}
                label='Nombre'
                variant='filled'
                size='small'
                {...register('name', {
                  required: 'El Nombre es obligatorio'
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                defaultValue={activeData.id_region}
                fullWidth
                inputProps={{ tabIndex: '4' }}
                label='Región'
                select
                variant='standard'
                {...register('id_region', {
                  required: 'La región obligatorio'
                })}
                error={!!errors.id_region}
                helperText={errors.id_region?.message}
              >
                {regions.map((option) => (
                  <MenuItem key={option.id_region} value={option.id_region}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
            <Grid container spacing={2} justifyContent='flex-end' mt={2}>
              <Grid item>
                <Button color='error' sx={{ minWidth: 250, padding: 1 }} type='reset' variant='text' onClick={handleClose} tabIndex={20}>
                  Cancelar
                </Button>
              </Grid>
              <Grid item>
                <Button color='primary' sx={{ minWidth: 250, padding: 1 }} type='submit' variant='contained' tabIndex={19}>
                  Guardar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalCountries;
