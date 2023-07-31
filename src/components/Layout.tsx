import { Theme as MuiTheme, CssBaseline } from '@mui/material';
import { createTheme, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import ButtonGroup from './ButtonGroup';
import Header from './Header';
import Footer from './Footer';
import Theme from './Theme';

const ShereApp = ({ children }: any) => {
  const theme = createTheme(Theme)
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>{children}</main>
      <ButtonGroup />
      <Footer />
    </MuiThemeProvider>
  )
}

export default ShereApp;