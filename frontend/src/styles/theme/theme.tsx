import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

declare module '@mui/material/styles' {
  // eslint-disable-next-line no-unused-vars
  interface TypographyVariants {
    pageHelperTitle: React.CSSProperties;
    monoSmall: React.CSSProperties;
    monoSmaller: React.CSSProperties;
    spaceGrotesk: React.CSSProperties;
    spaceGroteskSmall: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  // eslint-disable-next-line no-unused-vars
  interface TypographyVariantsOptions {
    pageHelperTitle?: React.CSSProperties;
    monoSmall?: React.CSSProperties;
    monoSmaller?: React.CSSProperties;
    spaceGrotesk?: React.CSSProperties;
    spaceGroteskSmall?: React.CSSProperties;
  }

  interface BreakpointOverrides {
    xxl: true;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  // eslint-disable-next-line no-unused-vars
  interface TypographyPropsVariantOverrides {
    pageHelperTitle: true;
    monoSmall: true;
    monoSmaller: true;
    spaceGrotesk: true;
    spaceGroteskSmall: true;
  }
}

declare module '@mui/material/styles/createPalette' {
  // eslint-disable-next-line no-unused-vars
  interface CommonColors {
    lightGray: string;
    lighterGray: string;
    gray: string;
    blueBlack: string;
    yellowyGold: string;
  }
}

const breakpoints = createBreakpoints({});

const paletteTheme = createTheme({
  palette: {},
});

const theme = createTheme({
  ...paletteTheme,
  typography: {
    monoSmaller: {
      fontFamily: '"Space Mono", monospace',
      fontSize: '13px',
      color: 'black',
    },
    monoSmall: {
      fontFamily: '"Space Mono", monospace',
      fontSize: '15px',
      color: 'black',
      [breakpoints.up('md')]: {
        fontSize: '14px',
      },
    },
    spaceGrotesk: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: '15px',
      fontWeight: '400',
      [breakpoints.up('md')]: {
        fontSize: '18px',
      },
    },
    spaceGroteskSmall: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: '13px',
      fontWeight: '400',
    },
    body1: {
      fontFamily:
        '"Helvetica", "Roboto", "Arial", sans-serif',
      fontSize: '15px',
      [breakpoints.up('md')]: {
        fontSize: '15px',
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1900,
    },
  },
});

export default theme;
