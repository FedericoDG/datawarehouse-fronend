import { ConfirmProvider } from 'material-ui-confirm';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import AppRoutes from './routes/AppRoutes';
import lightTheme from './themes/light-theme';
import store from './app/store';

import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <ConfirmProvider>
        <AppRoutes />
      </ConfirmProvider>
      <ToastContainer autoClose={2500} />
    </ThemeProvider>
  </Provider>
);

export default App;
