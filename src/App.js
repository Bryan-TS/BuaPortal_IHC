import { Box, CssBaseline } from '@material-ui/core';
import Footer from './components/home/Footer';
import AppRouter from './routers/AppRouter';
import { makeStyles } from '@material-ui/core/styles';

import {ThemeProvider} from '@material-ui/core';
import Theme from './styles/Theme';

const useStyles = makeStyles(() => ({
  rootBox: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  },
  bodyBox: {
    flexGrow: 1
  }
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme = {Theme}>
        <CssBaseline/>  
        <Box className = {classes.rootBox}>           
          <Box className = {classes.bodyBox}>
              <AppRouter/>                       
          </Box>         
          <Footer/>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
