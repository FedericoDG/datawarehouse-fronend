import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';

import LoginBanner from '../components/login/LoginBanner';
import LoginForm from '../components/login/LoginForm';
import { authLogin } from '../app/authSlice';

const Login = () => {
  const { auth } = useSelector((state) => state);

  const { loading } = auth;

  const dispatch = useDispatch();

  const admin = {
    email: 'admin@gmail.com',
    password: 'Password1234!'
  };

  const user = {
    email: 'user@gmail.com',
    password: 'Password1234!'
  };
  return (
    <Grid container>
      <Grid
        item
        lg={3}
        md={4}
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'center',
          width: '100%'
        }}
        xs={12}
      >
        <LoginForm />
        <button onClick={() => dispatch(authLogin(admin))} disabled={loading}>
          Login Admin
        </button>
        <button onClick={() => dispatch(authLogin(user))} disabled={loading}>
          Login User
        </button>
      </Grid>
      <Grid item display={{ xs: 'none', md: 'block' }} lg={9} md={8}>
        <LoginBanner />
      </Grid>
    </Grid>
  );
};

export default Login;
/* 
  const { auth } = useSelector((state) => state);

  const { loading } = auth;

  const dispatch = useDispatch();

  const admin = {
    email: 'admin@gmail.com',
    password: 'Password1234!'
  };

  const user = {
    email: 'user@gmail.com',
    password: 'Password1234!'
  };



       <button onClick={() => dispatch(authLogin(admin))} disabled={loading}>
        Login Admin
      </button>
      <button onClick={() => dispatch(authLogin(user))} disabled={loading}>
        Login User
      </button>
*/
