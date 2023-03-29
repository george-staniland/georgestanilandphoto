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
      fontSize: '12px',
      color: 'black',
    },
    monoSmall: {
      fontFamily: '"Space Mono", monospace',
      fontSize: '14px',
      color: 'black',
    },
    spaceGrotesk: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: '18px',
      fontWeight: '400',
    },
    spaceGroteskSmall: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: '12px',
      fontWeight: '400',
    },
    body1: {
      fontFamily:
        '"Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif',
      fontSize: '26px',
      [breakpoints.up('md')]: {
        fontSize: '16px',
        lineHeight: '22.4px',
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
