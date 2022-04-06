import { AppBar, Toolbar, Button, Box, Typography, IconButton, ListItem, List, Drawer, ListItemText, ListItemIcon, Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Person } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import BUAPIconN from '../../assets/img/BUAPIconNegativo.png'
import HomeIcon from '@material-ui/icons/Home';

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }

  const classes = useStyles();
  return (
    <>      
      <AppBar position="relative">
        <Toolbar >  
          <IconButton style = {{color: "white"}} onClick = {toggleDrawer}>
            <MenuIcon className = {classes.menuIcon}/>
          </IconButton>   
          <Typography variant="h6" color="initial" className = {classes.title}>
            BuaPortal
          </Typography>
          <img src={BUAPIconN} alt="Logo" width = "25px" height = "auto"/>

          <Drawer
            open = {openDrawer}
            onClose = {toggleDrawer}
          >
            <List className = {classes.list}>
              
                <li>
                  <Typography
                    className={classes.dividerFullWidth}
                    color="textSecondary"
                    display="block"
                    variant="caption"
                  >
                  Navigation
                  </Typography>
                </li>
              <ListItem button onClick = {toggleDrawer} className = {classes.listItem}>
                <Link to = "/" color = "inherit" className = {classes.linkAppBarMobile} underline = "none">
                  <ListItemIcon className = {classes.listItemIcon}>
                    <HomeIcon/>
                  </ListItemIcon>                  
                  <ListItemText>
                    Home
                  </ListItemText>
                </Link>
              </ListItem>
              <Divider component="li" />
              <li>
                <Typography
                  className={classes.dividerFullWidth}
                  color="textSecondary"
                  display="block"
                  variant="caption"
                >
                  User
                </Typography>
              </li>
              <ListItem button onClick = {toggleDrawer} className = {classes.listItem}>
                <Link to = "/login" color = "inherit" className = {classes.linkAppBarMobile} underline = "none">
                  <ListItemIcon className = {classes.listItemIcon}>
                    <Person/>
                  </ListItemIcon>
                  <ListItemText>
                    Login
                  </ListItemText>
                </Link>
              </ListItem>
            </List>
          </Drawer>

          <Box className = {classes.navigationBox}>          
            <Link to = "/" className = {classes.link}>
              <Button variant="text" color="inherit" className = {classes.navigationBtn}>
                Inicio
              </Button>
            </Link>
            <Button variant="text" color="inherit" className = {classes.navigationBtn}>
              Acerca de nosotros
            </Button>            
          </Box>        
          <Box className = {classes.credentialsBox}>
            <Link to = "/login" className = {classes.link}>
              <Button variant="text" color="inherit" className = {classes.navigationBtn}>
                Ingresar
              </Button>
            </Link>
            <Link to = "/signup" className = {classes.link}>
              <Button variant="text" color="inherit" className = {classes.navigationBtn}>
                Registrarse
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>     
    </>
  );
};

const useStyles = makeStyles(theme => ({
  menuIcon:{
    marginRight: 5,
    display: "none",
    [theme.breakpoints.down('xs')]:{
      display: "inline"
    }
  },
  title:{
    color: "white",
    display: "inline",
    marginRight: 5
  },
  navigationBox: {
    flexGrow: 1,
    marginTop: 5,
    marginLeft: 5
  },
  navigationBtn:{
    color : "white",
    marginLeft: 5,
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      
    },
    [theme.breakpoints.down('xs')]:{
      display: "none"
    }
  },
  credentialsBox: {
    marginTop: 5
  },
  link: {
    color: "inherit",
    textDecoration: "none"
  },
  list:{
    width: 200
  },
  linkAppBarMobile:{
    display: "inline-flex",
    alignItems: "center",
    width: "100%",
    padding: "8px 16px",
    color: "inherit",
    textDecoration: "none" 
  },
  listItemIcon:{
    minWidth: 25,
    marginRight: 5
  },
  listItem:{
    padding: 0
  }
}));
export default NavBar;
