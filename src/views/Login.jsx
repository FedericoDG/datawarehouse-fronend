import Grid from '@mui/material/Grid';

import LoginBanner from '../components/login/LoginBanner';
import LoginForm from '../components/login/LoginForm';

const Login = () => (
  <Grid container>
    <Grid
      item
      lg={4}
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
    </Grid>
    <Grid item display={{ xs: 'none', md: 'block' }} lg={8} xs={12}>
      <LoginBanner />
    </Grid>
  </Grid>
);

export default Login;
