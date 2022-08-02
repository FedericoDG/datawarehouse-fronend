import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import LogoCompleto from '../../assets/logo-completo.png';

const LoginForm = () => {
  return (
    <>
      <Box
        component='img'
        mb={3}
        src={LogoCompleto}
        sx={{ transition: 'transform .5s', ':hover': { transform: 'scale(1.05)' } }}
        width='75%'
      />
      <form style={{ width: '80%' }}>
        <Stack p={1} spacing={1}>
          <Typography align='center' color='initial' fontWeight='light' variant='h6'>
            Que gusto tenerte aquí
          </Typography>
          <TextField label='Email' name='mail' />
          <TextField label='Contraseña' name='password' type='password' />
          <Button sx={{ paddingY: '12px' }} type='submit' variant='contained'>
            Ingresar
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default LoginForm;
