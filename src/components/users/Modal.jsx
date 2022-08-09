import {
  Backdrop,
  Box,
  Button,
  Checkbox,
  Fade,
  FormControlLabel,
  Grid,
  MenuItem,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

import { isEmail, isPassword } from '../../utils/validations';
import Spinner from '../ui/Spinner';
import useModalUsers from '../../hooks/useModalUsers';

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

const roles = ['USER', 'ADMIN'];

const ModalUsers = ({ activeData, open, handleClose, handleEditUser, handleAddUser, check, setcheck }) => {
  const { isLoadingCities, handleSubmit, errors, register, onSubmit } = useModalUsers({
    activeData,
    handleEditUser,
    handleAddUser,
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
              {activeData.id ? 'Editar Usuario' : 'Agregar Usuario'}
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
                <PersonIcon style={{ fontWeight: 500, color: 'white', fontSize: '4rem' }} />
              </Box>
              <TextField
                autoFocus
                fullWidth
                inputProps={{ tabIndex: '1' }}
                label='Apellido'
                variant='filled'
                size='small'
                {...register('lastname', {
                  required: 'El Nombre es obligatorio'
                })}
                error={!!errors.lastname}
                helperText={errors.lastname?.message}
              />
              <TextField
                autoFocus
                fullWidth
                inputProps={{ tabIndex: '2' }}
                label='Nombre'
                variant='filled'
                size='small'
                {...register('name', {
                  required: 'El Nombre es obligatorio'
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Stack>
            <Stack p={1} spacing={1} direction='row' flex alignItems='center'>
              <TextField
                fullWidth
                inputProps={{ tabIndex: '3' }}
                label='Email'
                variant='standard'
                sx={{ maxWidth: 326 }}
                {...register('email', {
                  required: 'El email es obligatorio',
                  validate: isEmail
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                defaultValue={activeData.role}
                fullWidth
                inputProps={{ tabIndex: '4' }}
                label='Rol'
                select
                variant='standard'
                sx={{ maxWidth: 326 }}
                {...register('role', {
                  required: 'El rol es obligatorio'
                })}
                error={!!errors.role}
                helperText={errors.role?.message}
              >
                {roles.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              {check && (
                <>
                  <TextField
                    fullWidth
                    inputProps={{ tabIndex: '5' }}
                    label='Contraseña'
                    variant='standard'
                    {...register('password', {
                      required: 'La contraseña es obligatoria',
                      validate: isPassword
                    })}
                    id='password'
                    type='password'
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                </>
              )}
              {activeData.id && (
                <FormControlLabel
                  control={<Checkbox inputProps={{ tabIndex: '4' }} />}
                  label='¿Actualizar Contraseña?'
                  sx={{ minWidth: 218, minHeight: 48 }}
                  onChange={(e) => setcheck(e.target.checked)}
                />
              )}
            </Stack>
            <Grid container spacing={2} justifyContent='flex-end' mt={2}>
              <Grid item>
                <Button color='error' sx={{ minWidth: 250, padding: 1 }} type='reset' variant='text' onClick={handleClose} tabIndex={7}>
                  Cancelar
                </Button>
              </Grid>
              <Grid item>
                <Button color='primary' sx={{ minWidth: 250, padding: 1 }} type='submit' variant='contained' tabIndex={8}>
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

export default ModalUsers;
