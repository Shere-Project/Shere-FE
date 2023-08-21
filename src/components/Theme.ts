import { ThemeOptions } from "@mui/material";

export const Size = {
  SiteWidth: '80rem',
  HeaderHeight: '8.68rem',
  FooterHeight: '23.25rem',
  px6: '0.375em',
  px8: '0.500em',
  px10: '0.625em',
  px12: '0.750em',
  px14: '0.875em',
  px15: '0.938em',
  px16: '1.000em',
  px18: '1.125em',
  px20: '1.250em',
  px22: '1.375em',
  px24: '1.500em',
  px25: '1.563em',
  px26: '1.625em',
  px28: '1.750em',
  px30: '1.875em',
  px32: '2.000em',
  px34: '2.125em',
  px36: '2.250em',
  px40: '2.500em',
  px42: '2.625em',
  px44: '2.750em',
  px48: '3.000em',
  px50: '3.125em',
  px60: '3.750em',
  px70: '4.375em',
  px100: '6.250em',
  px130: '8.125em'
} as const;

export const CommonStyles = {
  ...Size,
  absolutelyWhite: '#ffffff',
  absolutelyBlack: '#000000',
  white: '#ffffff',
  black: '#000000',
  Primary: '#47F1A0',
  PrimaryLight: '#d1ffd0',
  PrimaryWhite: '#f3fCf2',
  backGroundGray: '#F6F6F6',
  textDefaultBlack: '#171717',
  textHeadlineBlack: '#161616',
  textTitleBlack: '#191919',
  textGray01: '#767676'
}

const Theme: ThemeOptions = {
  style: CommonStyles,
  palette: {
    primary: {
      main: CommonStyles.Primary,
      light: CommonStyles.PrimaryLight
    }
  },
  typography: {
    fontFamily: "'Pretendard', 'Spoqa Han Sans Neo', 'Noto Sans KR', 'NanumBarunGothic', 'Noto Sans', 'Roboto', 'Helvetica Neue', 'sans-serif'"
  },
  spacing: ((factor: number) => `${0.25 * factor}rem`),
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontSize: Size.px20,
          fontFamily: "'Pretendard', 'Spoqa Han Sans Neo', 'Noto Sans KR', 'NanumBarunGothic', 'Noto Sans', 'Roboto', 'Helvetica Neue', 'sans-serif'"      
        },
        a: {
          color: 'inherit',
          textDecoration: 'none'
        }
      }
    },
    MuiTypography: {
      defaultProps: {
        color: CommonStyles.textDefaultBlack,
        fontSize: Size.px20,
      },
      styleOverrides: {

      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        disableFocusRipple: true,
        disableTouchRipple: true
      },
      styleOverrides: {
        root: {
          minWidth: 'initial',
          textTransform: 'none'
        },
        containedPrimary: {
          backgroundColor: CommonStyles.Primary,
          color: CommonStyles.absolutelyWhite
        },
        outlined: {}
      },
      variants: [
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            border: 'none',
            backgroundColor: CommonStyles.absolutelyWhite
          }
        },
      ]
    }
  }
}

export default Theme