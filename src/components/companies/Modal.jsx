import { Backdrop, Box, Button, Fade, Grid, MenuItem, Modal, Paper, Stack, TextField, Typography } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';

import { isEmail } from '../../utils/validations';
import Spinner from '../ui/Spinner';
import useModalCompanies from '../../hooks/useModalCompanies';

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

const ModalCompanies = ({ activeData, open, handleClose, handleEditCompany, handleAddCompany }) => {
  const { cities, isLoadingCities, handleSubmit, errors, register, onSubmit } = useModalCompanies({
    activeData,
    handleEditCompany,
    handleAddCompany,
    handleClose
  });

  if (isLoadingCities) {
    return (
      <Modal
        aria-describedby='transition-modal-description'
        aria-labelledby='transition-modal-title'
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
        closeAfterTransition
        onClose={handleClose}
        open={open}
      >
        <Fade in={open}>
          <Box sx={style} component={Paper}>
            <Spinner height={284} />
          </Box>
        </Fade>
      </Modal>
    );
  }

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
              {activeData.id ? 'Editar Companía' : 'Agregar Compañía'}
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
                autoFocus
                fullWidth
                inputProps={{ tabIndex: '1' }}
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
                defaultValue={activeData.id_city}
                fullWidth
                inputProps={{ tabIndex: '2' }}
                label='Ciudad'
                select
                variant='standard'
                {...register('id_city', {
                  required: 'La ciudad es obligatoria'
                })}
                error={!!errors.id_city}
                helperText={errors.id_city?.message}
              >
                {cities.map((option) => (
                  <MenuItem key={option.id_city} value={option.id_city}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
            <Stack p={1} spacing={1} direction='row' flex alignItems='center'>
              <TextField
                fullWidth
                inputProps={{ tabIndex: '3' }}
                label='Dirección'
                variant='standard'
                {...register('address', {
                  required: 'La dirección es obligatoria'
                })}
                error={!!errors.address}
                helperText={errors.address?.message}
              />
              <TextField
                fullWidth
                inputProps={{ tabIndex: '4' }}
                label='Email'
                variant='standard'
                {...register('email', {
                  required: 'El email es obligatorio',
                  validate: isEmail
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                fullWidth
                inputProps={{ tabIndex: '5' }}
                label='Teléfono'
                variant='standard'
                {...register('phone', {
                  required: 'El teléfono es obligatorio'
                })}
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            </Stack>
            <Grid container spacing={2} justifyContent='flex-end' mt={2}>
              <Grid item>
                <Button color='error' sx={{ minWidth: 250, padding: 1 }} type='reset' variant='text' onClick={handleClose} tabIndex={6}>
                  Cancelar
                </Button>
              </Grid>
              <Grid item>
                <Button color='primary' sx={{ minWidth: 250, padding: 1 }} type='submit' variant='contained' tabIndex={7}>
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

export default ModalCompanies;
