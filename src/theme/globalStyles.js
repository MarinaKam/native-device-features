export const themeColor = 'secondary'; // primary, secondary, info, success, error, warning

export const globalStyles = {
  colors: {
    primary: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      light: '#42a5f5',
      main: '#1976d2',
      dark: '#1565c0',
    },
    secondary: {
      50: '#f3e5f5',
      100: '#e1bee7',
      200: '#ce93d8',
      light: '#ba68c8',
      main: '#9c27b0',
      dark: '#7b1fa2',
    },
    info: {
      50: '#e1f5fe',
      100: '#b3e5fc',
      200: '#81d4fa',
      light: '#03a9f4',
      main: '#0288d1',
      dark: '#01579b',
    },
    success: {
      50: '#e8f5e9',
      100: '#c8e6c9',
      200: '#a5d6a7',
      light: '#4caf50',
      main: '#2e7d32',
      dark: '#1b5e20',
    },
    error: {
      50: '#ffebee',
      100: '#ffcdd2',
      200: '#ef9a9a',
      light: '#ef5350',
      main: '#d32f2f',
      dark: '#c62828',
    },
    warning: {
      50: '#fff3e0',
      100: '#ffe0b2',
      200: '#ffcc80',
      light: '#ff9800',
      main: '#ed6c02',
      dark: '#e65100',
    },
    common: {
      white: '#fff',
      black: '#000',
    },
    grey: {
      50: '#eceff1',
      100: '#cfd8dc',
      200: '#b0bec5',
      300: '#90a4ae',
      400: '#78909c',
      500: '#607d8b',
      600: '#546e7a',
      700: '#455a64',
      800: '#37474f',
      900: '#263238',
    },
  },
};

export const textStyles = {
  color: {
    color: globalStyles.colors.grey['900'],
  },
  default: {
    fontSize: 16,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  h1: {
    fontSize: 30,
    fontWeight: 500,
  },
  h2: {
    fontSize: 29,
    fontWeight: 500,
  },
  h3: {
    fontSize: 23,
    fontWeight: 500,
  },
  h4: {
    fontSize: 18,
    fontWeight: 500,
  },
  h5: {
    fontSize: 16,
    fontWeight: 500,
  },
  h6: {
    fontSize: 16,
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: 14,
    fontWeight: 500,
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: 400,
  },
  body2: {
    fontSize: 12,
    fontWeight: 400,
  },
  caption: {
    fontSize: 12,
  },
};
