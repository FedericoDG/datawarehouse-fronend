import { createTheme } from '@mui/material/styles';
import { indigo, grey, deepOrange, red } from '@mui/material/colors';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      light: indigo[400],
      main: indigo[500],
      dark: indigo[600],
      contrastText: '#fff'
    },
    secondary: {
      light: deepOrange[700],
      main: deepOrange[800],
      dark: deepOrange[900],
      contrastText: '#000'
    },
    grey: {
      main: grey[700]
    },
    error: {
      main: red[900]
    },
    background: {
      default: grey[900],
      paper: grey[500]
    }
  },
  typography: {
    allVariants: {
      color: 'white'
    }
  }
});

export default darkTheme;
