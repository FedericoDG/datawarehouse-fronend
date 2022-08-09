import { createTheme } from '@mui/material/styles';
import { blue, deepOrange, grey, red } from '@mui/material/colors';

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      light: blue[600],
      main: blue[700],
      dark: blue[800],
      contrastText: '#fff'
    },
    secondary: {
      light: deepOrange[600],
      main: deepOrange[700],
      dark: deepOrange[800],
      contrastText: '#000'
    },
    grey: {
      main: grey[700]
    },
    error: {
      main: red[500]
    }
  }
});

export default lightTheme;
