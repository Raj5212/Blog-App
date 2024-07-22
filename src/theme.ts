// /src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#004d40', // Teal
    },
    secondary: {
      main: '#d32f2f', // Red
    },
    background: {
      default: '#f5f5f5', // Light Grey for the background
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
