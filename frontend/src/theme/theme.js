import { createTheme } from '@mui/material/styles';
import components from './components';
import typography from './typography';

// const theme = createTheme(); // DEFAULT THEME

// CUSTOM THEME
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00001E',
    },
    text: {
      primary: 'rgb(30, 32, 34)',
      secondary: 'rgb(103, 119, 136)',
    },
    alternate: {
      main: 'rgb(247, 250, 255)',
      dark: 'rgb(113, 164, 239)',
    },
  },
  typography: typography,
  components: components,
});

export default theme;
