import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#43A1D5',
    },
    secondary: {
      main: '#00722A',
    },
    error: {
      main: '#D2232A',
    },
    warning: {
      main: '#FBB829',
    },
    background: {
      default: '#121212',
      paper: '#1C1C1C',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A0A0A0',
    },
  },
});
