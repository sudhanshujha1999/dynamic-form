import { createTheme } from '@mui/material';
import { colors } from './colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.white,
    },
    secondary: {
      main: colors.blue1,
    },
    success: {
      main: colors.blue2,
    },
    warning: {
      main: colors.yellow,
    },
    error: {
      main: colors.orange,
    },
    text: {
      primary: colors.white,
      secondary: colors.blue1,
    },
    background: {
      default: colors.black1,
      paper: colors.black2,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ['Lato'].join(','),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 'bold',
      fontSize: '2.25rem',
      color: colors.white,
    },
    h2: {
      fontWeight: 'bold',
      fontSize: '1.75rem',
      color: colors.white,
    },
    h3: {
      fontWeight: 'bold',
      fontSize: '1rem',
      color: colors.white,
    },
    h4: {
      fontWeight: 'bold',
      fontSize: '0.75rem',
      color: colors.white,
    },
    h5: {
      fontWeight: 400,
      fontSize: '14px',
      color: colors.white,
    },
    h6: {
      fontWeight: 'bold',
      fontSize: '14px',
      color: colors.white,
    },
    body1: {
      fontWeight: 400,
      fontSize: '12px',
      color: colors.white,
    },
    body2: {
      fontWeight: 500,
      fontSize: '12px',
      color: colors.white,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '1rem',
      color: colors.light,
    },
    subtitle2: {
      fontWeight: 'bold',
      fontSize: '0.75rem',
      color: colors.light,
    },
    overline: {
      fontWeight: 'bold',
      fontSize: '12px',
      color: colors.white,
    },
    button: {
      fontWeight: 'bold',
      fontSize: '14px',
      color: colors.white,
    },
  },
  shape: {
    borderRadius: 2,
  },
  transitions: {
    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
  spacing: 2,
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'unset',
        },
        elevation2: {
          boxShadow: '0px 3px 15px rgba(139,21,178,0.3)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          color: colors.white,
          background: colors.black1,
          paddingRight: '0.1rem',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          background: colors.black1,
          fontSize: '14px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: 'inherit',
          '&$selected': {
            backgroundColor: colors.white,
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        primary: {
          backgroundImage:
            'linear-gradient(to right, #895cf2 0%, #ffabf4 50%, #895cf2 100%)',
          color: colors.white,
          transition: 'all 0.5s ease-out',
          backgroundSize: '300% 300%',
          '&:hover': {
            backgroundPosition: 'right center',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          letterSpacing: '1.2px',
          '&.Mui-disabled': {
            backgroundImage: 'none',
          },
        },
        outlinedPrimary: {
          border: `1px solid #1d4a8f`,
          color: colors.white,
          transition: 'all 0.2s ease-out',
          backgroundSize: '300% 300%',
          borderRadius: '0.5rem',
          padding: '0.75rem 1rem',
          fontSize: '14px',
          fontWeight: 'bold',
          lineHeight: '14px',
          '&:hover': {
            backgroundPosition: 'right center',
            border: `1px solid ${colors.blue1}`,
          },
        },
        containedPrimary: {
          backgroundColor: colors.blue1,
          color: colors.white,
          transition: 'all 0.2s ease-out',
          backgroundSize: '300% 300%',
          borderRadius: '0.5rem',
          padding: '0.75rem 1rem',
          fontSize: '14px',
          fontWeight: 'bold',
          lineHeight: '14px',
          '&:hover': {
            backgroundPosition: 'right center',
            backgroundColor: '#1d4a8f',
          },
        },
        containedSecondary: {
          backgroundColor: colors.black2,
          color: colors.white,
          transition: 'all 0.2s ease-out',
          backgroundSize: '300% 300%',
          borderRadius: '0.5rem',
          padding: '1rem 1.5rem',
          fontSize: '14px',
          fontWeight: 'bold',
          lineHeight: '14px',
          '&:hover': {
            backgroundPosition: 'right center',
            backgroundColor: '#363738',
            color: colors.orange,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colors.white,
          marginLeft: '0.25rem',
          marginRight: '0.25rem',
        },
        sizeMedium: {
          color: colors.white,
          padding: '0.5rem',
        },
        sizeLarge: {
          backgroundColor: colors.black2,
          color: colors.white,
          padding: '0.75rem',
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: '0.5rem',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#565C69',
          width: '30px',
          height: '30px',
          '&$checked': {
            color: colors.blue2,
          },
        },
      },
    },
  },
});

export default theme;
