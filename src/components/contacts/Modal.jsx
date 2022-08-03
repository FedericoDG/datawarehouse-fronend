import { Backdrop, Box, Button, Fade, MenuItem, Modal, Paper, Slider, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useGetCitiesQuery } from '../../app/citiesApi';
import { useGetCompaniesQuery } from '../../app/companiesApi';
import { useGetCountriesQuery } from '../../app/countriesApi';
import { useGetRegionsQuery } from '../../app/regionsApi';
import { isEmail } from '../../utils/validations';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  minWidth: 1366,
  borderRadius: 1
};

const preferences = [
  { id_preference: 1, name: 'sin preferencia' },
  { id_preference: 2, name: 'canal favorito' },
  { id_preference: 3, name: 'no molestar' }
];

const ModalContacts = ({ activeData, open, handleClose, handleEditContact }) => {
  let { data: companies, isLoading: isLoadingCompanies } = useGetCompaniesQuery();
  let { data: regions, isLoading: isLoadingRegions } = useGetRegionsQuery();
  let { data: countries, isLoading: isLoadingCountries } = useGetCountriesQuery();
  let { data: cities, isLoading: isLoadingCities } = useGetCitiesQuery();

  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({ defaultValues: { ...activeData } });

  if (isLoadingCompanies || isLoadingRegions || isLoadingCountries || isLoadingCities) {
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
            Loading...
          </Box>
        </Fade>
      </Modal>
    );
  }

  companies = companies.companies;
  regions = regions.regions;
  countries = countries.countries;
  cities = cities.cities;

  console.log({ activeData });
  console.log({ companies });
  console.log({ regions });
  console.log({ countries });
  console.log({ cities });

  const onSubmit = (data) => {
    handleEditContact(data);
    handleClose();
  };

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
            <Typography align='center' color='initial' fontWeight='light' variant='h6'>
              Que gusto tenerte aquí
            </Typography>
            <Stack p={1} spacing={1} direction='row'>
              <TextField
                fullWidth
                label='Apellido'
                inputProps={{ tabIndex: '1' }}
                autoFocus
                {...register('lastname', {
                  required: 'El apellido es obligatorio'
                })}
                error={!!errors.lastname}
                helperText={errors.lastname?.message}
              />
              <TextField
                fullWidth
                label='Nombre'
                inputProps={{ tabIndex: '2' }}
                {...register('name', {
                  required: 'El nombre es obligatorio'
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                fullWidth
                label='Email'
                inputProps={{ tabIndex: '3' }}
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
                fullWidth
                label='Ciudad'
                select
                inputProps={{ tabIndex: '4' }}
                defaultValue={activeData.id_city}
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
                fullWidth
                label='Compañía'
                select
                inputProps={{ tabIndex: '4' }}
                defaultValue={activeData.id_company}
                {...register('id_city', {
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
                label='Cargo'
                inputProps={{ tabIndex: '6' }}
                {...register('position', {
                  required: 'El cargo es obligatorio'
                })}
                error={!!errors.position}
                helperText={errors.position?.message}
              />
              <TextField
                fullWidth
                label='Dirección'
                inputProps={{ tabIndex: '7' }}
                {...register('address', {
                  required: 'La dirección es obligatoria'
                })}
                error={!!errors.address}
                helperText={errors.address?.message}
              />
              <Box sx={{ minWidth: 250 }}>
                <Typography gutterBottom textAlign='center'>
                  Interés
                </Typography>
                <Slider
                  color='secondary'
                  defaultValue={activeData.interest}
                  valueLabelDisplay='auto'
                  step={25}
                  marks
                  min={0}
                  max={100}
                  tabIndex={8}
                  {...register('interest')}
                />
              </Box>
            </Stack>
            <Stack p={1} spacing={1} direction='row'>
              <TextField
                fullWidth
                label='Teléfono'
                inputProps={{ tabIndex: '9' }}
                {...register('phone')}
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
              <TextField
                fullWidth
                label='LinkedIn'
                inputProps={{ tabIndex: '11' }}
                {...register('linkedin')}
                error={!!errors.linkedin}
                helperText={errors.linkedin?.message}
              />
              <TextField
                fullWidth
                label='Facebook'
                inputProps={{ tabIndex: '13' }}
                {...register('facebook')}
                error={!!errors.facebook}
                helperText={errors.facebook?.message}
              />
              <TextField
                fullWidth
                label='Twitter'
                inputProps={{ tabIndex: '15' }}
                {...register('twitter')}
                error={!!errors.twitter}
                helperText={errors.twitter?.message}
              />
              <TextField
                fullWidth
                label='Instagram'
                inputProps={{ tabIndex: '17' }}
                {...register('instagram')}
                error={!!errors.instagram}
                helperText={errors.instagram?.message}
              />
            </Stack>
            <Stack p={1} spacing={1} direction='row'>
              <TextField
                fullWidth
                label='Preferencia Teléfono'
                select
                inputProps={{ tabIndex: '10' }}
                defaultValue={activeData.preference_phone || ''}
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
                fullWidth
                label='Preferencia LinkedIn'
                select
                inputProps={{ tabIndex: '12' }}
                defaultValue={activeData.preference_linkedin || ''}
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
                fullWidth
                label='Preferencia Facebook'
                select
                inputProps={{ tabIndex: '14' }}
                defaultValue={activeData.preference_facebook || ''}
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
                fullWidth
                label='Preferencia Twitter'
                select
                inputProps={{ tabIndex: '16' }}
                defaultValue={activeData.preference_twitter || ''}
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
                fullWidth
                label='Preferencia Instagram'
                select
                inputProps={{ tabIndex: '16' }}
                defaultValue={activeData.preference_instagram || ''}
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
            <Stack direction='row' p={1} spacing={1}>
              <Button color='primary' sx={{ paddingY: '12px' }} type='submit' variant='contained' tabIndex={19}>
                Guardar
              </Button>
              <Button color='error' sx={{ paddingY: '12px' }} type='reset' variant='contained' onClick={handleClose} tabIndex={20}>
                Cancelar
              </Button>
            </Stack>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalContacts;
