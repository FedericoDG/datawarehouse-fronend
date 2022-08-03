import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import { authLogin } from '../../app/authSlice';
import { isEmail } from '../../utils/validations';

import LogoCompleto from '../../assets/logo-completo.png';

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
      <Box
        component='img'
        mb={3}
        src={LogoCompleto}
        sx={{ transition: 'transform .5s', ':hover': { transform: 'scale(1.05)' } }}
        width='75%'
      />
      <form style={{ width: '80%' }} onSubmit={handleSubmit(onLogin)}>
        <Stack p={1} spacing={1}>
          <Typography align='center' color='initial' fontWeight='light' variant='h6'>
            Que gusto tenerte aquí
          </Typography>
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
          <Button active={!loading} sx={{ paddingY: '12px' }} type='submit' variant='contained'>
            Ingresar
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default LoginForm;
