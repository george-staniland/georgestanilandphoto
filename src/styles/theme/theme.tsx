import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

declare module '@mui/material/styles' {
  // eslint-disable-next-line no-unused-vars
  interface TypographyVariants {
    pageHelperTitle: React.CSSProperties;
    monoSmall: React.CSSProperties;
    spaceGrotesk: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  // eslint-disable-next-line no-unused-vars
  interface TypographyVariantsOptions {
    pageHelperTitle?: React.CSSProperties;
    monoSmall?: React.CSSProperties;
    spaceGrotesk?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  // eslint-disable-next-line no-unused-vars
  interface TypographyPropsVariantOverrides {
    pageHelperTitle: true;
    monoSmall: true;
    spaceGrotesk: true;
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
});

export default theme;
