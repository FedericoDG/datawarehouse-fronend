import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';

import lightTheme from './themes/light-theme';

import AppRoutes from './routes/AppRoutes';
import store from './app/store';
import Footer from './components/ui/Footer';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  </Provider>
);

export default App;
