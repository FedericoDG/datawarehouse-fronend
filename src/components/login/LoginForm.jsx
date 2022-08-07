import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import { authLogin } from '../../app/authSlice';
import { isEmail } from '../../utils/validations';

import LogoCompleto from '../../assets/logo-completo.png';
import Footer from '../ui/Footer';

const LoginForm = () => {
  const { auth } = useSelector((state) => state);

  const { loading } = auth;

  const dispatch = useDispatch();

  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm();

  const onLogin = (data) => {
    dispatch(authLogin(data));
  };

  return (
    <>
      <Grid container style={{ width: '90%' }}>
        <Grid item xs={12}>
          <Box
            component='img'
            mb={3}
            src={LogoCompleto}
            sx={{ transition: 'transform .5s', ':hover': { transform: 'scale(1.05)' } }}
            width='100%'
          />
        </Grid>
        <Grid item xs={12}>
          <Typography align='center' color='initial' fontWeight='light' variant='h6'>
            Que gusto tenerte aquí
          </Typography>
        </Grid>
        <Grid item xs={12} component='form' onSubmit={handleSubmit(onLogin)}>
          <Stack p={1} spacing={1}>
            <TextField
              autoFocus
              label='Email'
              {...register('email', {
                required: 'Por favor ingrese su email',
                validate: isEmail
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label='Contraseña'
              type='password'
              {...register('password', {
                required: 'Por favor ingrese su contraseña',
                minLength: { value: 8, message: 'Mínimo 8 caracteres' }
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button disabled={loading} sx={{ paddingY: '12px' }} type='submit' variant='contained'>
              Ingresar
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default LoginForm;
