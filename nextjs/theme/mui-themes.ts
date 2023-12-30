import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const darkTheme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'dark',
    // background: {
    //   default: 'black',
    // }
  },
  // palette: {
  //   primary: {
  //     main: '#3f51b5',
  //   },
  //   secondary: {
  //     main: '#f50057',
  //   },
  // },
}))

export const lightTheme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'light',
  },
  // palette: {
  //   primary: {
  //     main: '#3f51b5',
  //   },
  //   secondary: {
  //     main: '#f50057',
  //   },
  // },
}))
