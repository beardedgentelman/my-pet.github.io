import { createTheme } from '@mui/material'

import SegoeUI from './fonts/SegoeUI.ttf'
import SegoeUIBold from './fonts/SegoeUI-Bold.ttf'
import SegoeUILight from './fonts/SegoeUI-Light.ttf'

export const theme = createTheme({
  typography: {
    fontFamily: 'SegoeUI',
    mainPageHeading: {
      fontSize: '88px',
      color: '#f2f2f2'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'SegoeUI';
          font-style: normal;
          font-weight: 400;
          src: local('SegoeUI'), local('SegoeUI'), url(${SegoeUI}) format('ttf');
        }
        @font-face {
          font-family: 'SegoeUI';
          font-style: normal;
          font-weight: bold;
          src: local('SegoeUI-Bold'), local('SegoeUI-Bold'), url(${SegoeUIBold}) format('ttf');
        }
        @font-face {
          font-family: 'SegoeUI';
          font-style: normal;
          font-weight: 300;
          src: local('SegoeUI-Light'), local('SegoeUI-Light'), url(${SegoeUILight}) format('ttf');
        }
      `
    }
  }
})
