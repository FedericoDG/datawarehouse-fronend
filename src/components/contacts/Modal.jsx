import { Backdrop, Box, Button, Fade, Grid, MenuItem, Modal, Paper, Slider, Stack, TextField, Typography } from '@mui/material';

import { isEmail } from '../../utils/validations';

import Spinner from '../ui/Spinner';
import preferences from '../../constants/preferencesArray';
import useModalContacts from '../../hooks/useMoidalContacts';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  minWidth: 1300,
  minHeight: 460,
  borderRadius: 1
};

const marks = [
  {
    value: 0,
    label: '0'
  },
  {
    value: 50,
    label: '50'
  },
  {
    value: 100,
    label: '100'
  }
];

const ModalContacts = ({ activeData, open, handleClose, handleEditContact, handleAddContact }) => {
  const {
    lastname,
    setLastname,
    name,
    setName,
    cities,
    isLoadingCities,
    companies,
    isLoadingCompanies,
    handleSubmit,
    errors,
    register,
    onSubmit
  } = useModalContacts({ activeData, handleEditContact, handleAddContact, handleClose });

  if (isLoadingCompanies || isLoadingCities) {
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
            <Spinner height={460} />
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
              {activeData.id ? 'Editar Contacto' : 'Agregar Contacto'}
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
                <Typography align='center' color='primary.contrastText' fontWeight='bold' variant='h3' textTransform='upercase'>
                  {lastname}
                  {name}
                </Typography>
              </Box>
              <TextField
                autoFocus
                fullWidth
                inputProps={{ tabIndex: '1' }}
                label='Apellido'
                size='small'
                variant='filled'
                {...register('lastname', {
                  required: 'El apellido es obligatorio',
                  onChange: (e) => {
                    setLastname(e.target.value.at(0));
                  }
                })}
                error={!!errors.lastname}
                helperText={errors.lastname?.message}
              />
              <TextField
                fullWidth
                inputProps={{ tabIndex: '2' }}
                label='Nombre'
                size='small'
                variant='filled'
                onChange={(e) => setName(e.target.value.at(0))}
                {...register('name', {
                  required: 'El nombre es obligatorio',
                  onChange: (e) => {
                    setName(e.target.value.at(0));
                  }
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                fullWidth
                inputProps={{ tabIndex: '3' }}
                label='Email'
                variant='standard'
                {...register('email', {
                  required: 'El email es obligatorio',
                  validate: isEmail
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Stack>
            <Stack p={1} spacing={1} direction='row'>
              <TextField
                defaultValue={activeData.id_city}
                fullWidth
                inputProps={{ tabIndex: '4' }}
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
              <TextField
                defaultValue={activeData.id_company}
                fullWidth
                inputProps={{ tabIndex: '5' }}
                label='Compañía'
                select
                variant='standard'
                {...register('id_company', {
                  required: 'La compañia es obligatoria'
                })}
                error={!!errors.id_company}
                helperText={errors.id_company?.message}
              >
                {companies.map((option) => (
                  <MenuItem key={option.id_company} value={option.id_company}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                inputProps={{ tabIndex: '6' }}
                label='Cargo'
                variant='standard'
                {...register('position', {
                  required: 'El cargo es obligatorio'
                })}
                error={!!errors.position}
                helperText={errors.position?.message}
              />
              <TextField
                fullWidth
                inputProps={{ tabIndex: '7' }}
                label='Dirección'
                variant='standard'
                {...register('address', {
                  required: 'La dirección es obligatoria'
                })}
                error={!!errors.address}
                helperText={errors.address?.message}
              />
              <Box sx={{ minWidth: 238 }}>
                <Typography gutterBottom textAlign='center'>
                  Interés
                </Typography>
                <Slider
                  color='secondary'
                  defaultValue={activeData.interest}
                  max={100}
                  marks={marks}
                  min={0}
                  step={10}
                  tabIndex={8}
                  valueLabelDisplay='on'
                  {...register('interest')}
                />
              </Box>
            </Stack>
            <Stack p={1} spacing={1} direction='row'>
              <TextField
                fullWidth
                inputProps={{ tabIndex: '9' }}
                label='Teléfono'
                variant='standard'
                {...register('phone')}
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
              <TextField
                fullWidth
                inputProps={{ tabIndex: '11' }}
                label='LinkedIn'
                variant='standard'
                {...register('linkedin')}
                error={!!errors.linkedin}
                helperText={errors.linkedin?.message}
              />
              <TextField
                {...register('facebook')}
                fullWidth
                inputProps={{ tabIndex: '13' }}
                label='Facebook'
                variant='standard'
                error={!!errors.facebook}
                helperText={errors.facebook?.message}
              />
              <TextField
                fullWidth
                inputProps={{ tabIndex: '15' }}
                label='Twitter'
                variant='standard'
                {...register('twitter')}
                error={!!errors.twitter}
                helperText={errors.twitter?.message}
              />
              <TextField
                fullWidth
                inputProps={{ tabIndex: '17' }}
                label='Instagram'
                variant='standard'
                {...register('instagram')}
                error={!!errors.instagram}
                helperText={errors.instagram?.message}
              />
            </Stack>
            <Stack p={1} spacing={1} direction='row'>
              <TextField
                defaultValue={activeData.preference_phone}
                fullWidth
                inputProps={{ tabIndex: '10' }}
                label='Preferencia Teléfono'
                select
                variant='standard'
                {...register('preference_phone')}
                error={!!errors.preference_phone}
                helperText={errors.preference_phone?.message}
              >
                {preferences.map((option) => (
                  <MenuItem key={option.id_preference} value={option.id_preference}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                defaultValue={activeData.preference_linkedin}
                fullWidth
                inputProps={{ tabIndex: '12' }}
                label='Preferencia LinkedIn'
                select
                variant='standard'
                {...register('preference_linkedin')}
                error={!!errors.preference_linkedin}
                helperText={errors.preference_linkedin?.message}
              >
                {preferences.map((option) => (
                  <MenuItem key={option.id_preference} value={option.id_preference}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                defaultValue={activeData.preference_facebook}
                fullWidth
                inputProps={{ tabIndex: '14' }}
                label='Preferencia Facebook'
                select
                variant='standard'
                {...register('preference_facebook')}
                error={!!errors.preference_facebook}
                helperText={errors.preference_facebook?.message}
              >
                {preferences.map((option) => (
                  <MenuItem key={option.id_preference} value={option.id_preference}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                defaultValue={activeData.preference_twitter}
                fullWidth
                inputProps={{ tabIndex: '16' }}
                label='Preferencia Twitter'
                select
                variant='standard'
                {...register('preference_twitter')}
                error={!!errors.preference_twitter}
                helperText={errors.preference_twitter?.message}
              >
                {preferences.map((option) => (
                  <MenuItem key={option.id_preference} value={option.id_preference}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                defaultValue={activeData.preference_instagram}
                fullWidth
                inputProps={{ tabIndex: '18' }}
                label='Preferencia Instagram'
                select
                variant='standard'
                {...register('preference_instagram')}
                error={!!errors.preference_instagram}
                helperText={errors.preference_instagram?.message}
              >
                {preferences.map((option) => (
                  <MenuItem key={option.id_preference} value={option.id_preference}>
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

export default ModalContacts;
