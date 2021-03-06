import { AppBar, Toolbar, Button, Grid, Typography, IconButton, ListItem, List, Drawer, ListItemText, ListItemIcon, Divider, TextField, search, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Person } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase/InputBase'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

import { useState, useContext  } from "react";
import { Context } from '../../context/Context';

import { useHistory } from "react-router-dom";

import BUAPIconN from '../../assets/img/BUAPIconNegativo.png'
import BUAPIcon from '../../assets/img/BUAPIconBlack.png'
import HomeIcon from '@material-ui/icons/Home';
import { SearchContext } from '../../context/SearchContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

const NavBarUser = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [searchButtonClicked,setSearchButtonClicked] = useContext(SearchContext);
  const [searchTerm,setSearchTerm] = useState('');

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }

  const classes = useStyles();
  const history = useHistory();

  const [user,setUser] = useContext(Context);

  const logOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    history.push("/login");
  }

  const search = () => {
    setSearchButtonClicked(!searchButtonClicked);
    history.push(`/user/search/${searchTerm}`);
  }

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
              <ListItem className = {classes.listItem}>
                  <Link color = "inherit" className = {classes.linkAppBarMobile} underline = "none">
                    <ListItemIcon className = {classes.listItemIcon}>
                      <img src={BUAPIcon} alt="Logo" width = "25px" height = "auto"/>
                    </ListItemIcon>                  
                    <ListItemText>
                      BuaPortal
                    </ListItemText>
                  </Link>          
                </ListItem>
                <li>
                  <Typography
                    className={classes.dividerFullWidth}
                    color="secondary"
                    display="block"
                    variant="caption"
                    style = {{marginLeft:20}}
                  >
                  Navegaci??n
                  </Typography>
                </li>
              <ListItem className = {classes.listItem}>
                <Link color = "inherit" className = {classes.linkAppBarMobile} underline = "none">
                  <ListItemIcon className = {classes.listItemIcon}>
                    <PersonIcon/>
                  </ListItemIcon>                  
                  <ListItemText>
                    {`Bienvenido ${user.name}`}
                  </ListItemText>
                </Link>          
              </ListItem>
              <ListItem button onClick = {toggleDrawer} className = {classes.listItem}>
                <Link to = "/user/dashboard" color = "inherit" className = {classes.linkAppBarMobile} underline = "none">
                  <ListItemIcon className = {classes.listItemIcon}>
                    <HomeIcon/>
                  </ListItemIcon>                  
                  <ListItemText>
                    Inicio
                  </ListItemText>
                </Link>          
              </ListItem>

              <ListItem button onClick = {toggleDrawer} className = {classes.listItem}>
                <Link to = "/user/preguntas" color = "inherit" className = {classes.linkAppBarMobile} underline = "none">
                    <ListItemIcon className = {classes.listItemIcon}>
                      <QuestionAnswerIcon/>
                    </ListItemIcon>                  
                    <ListItemText>
                      Mis preguntas
                    </ListItemText>
                  </Link>
              </ListItem>

              <ListItem button onClick = {toggleDrawer} className = {classes.listItem}>
                <Link onClick={logOut} color = "inherit" className = {classes.linkAppBarMobile} underline = "none">
                    <ListItemIcon className = {classes.listItemIcon}>
                      <ExitToAppOutlinedIcon/>
                    </ListItemIcon>                  
                    <ListItemText>
                      Cerrar sesi??n
                    </ListItemText>
                  </Link>
              </ListItem>
              <Divider component="li" />              
            </List>
          </Drawer>
          
              <Typography variant="h6" color="initial" className = {classes.title}>
                Buscar
              </Typography>
          
            {/* <TextField id="filled-basic" variant="filled" style={{backgroundColor: "white",width: 400}} /> */}
            <TextField id="outlined-basic" variant="outlined" onChange={event => setSearchTerm(event.target.value)} style={{backgroundColor:"white", width: 700}}/>
            <IconButton onClick={search}>
              <SearchIcon/>
            </IconButton>
     
          <Grid container justifyContent="flex-end" className={classes.credentialsBox}>
              <Typography variant="h6" color="initial" className = {classes.title}>
                Bienvenido {user.name}
              </Typography>
              <Link to = "/user/dashboard" className = {classes.link}>
                <Button variant="text" color="inherit" className = {classes.navigationBtn}>
                  Inicio
                </Button>
              </Link>
              <Link onClick={logOut} className = {classes.link}>
                <Button variant="text" color="inherit" className = {classes.navigationBtn}>
                  Cerrar sesi??n
                </Button>
              </Link>
          </Grid>

          {/* <Box display="flex" justifyContent="flex-end" className = {classes.credentialsBox}>
            <Typography variant="h6" color="initial" className = {classes.title}>
              Bienvenido {user.name}
            </Typography>
            <Link onClick={logOut} className = {classes.link}>
              <Button variant="text" color="inherit" className = {classes.navigationBtn}>
                Cerrar sesi??n
              </Button>
            </Link>
          </Box> */}
        </Toolbar>
      </AppBar>     
    </>
  );
};

const useStyles = makeStyles(theme => ({
  menuIcon:{
    marginRight: 5,
    display: "none",
    [theme.breakpoints.down('md')]:{
      display: "inline"
    }
  },
  title:{
    color: "white",
    display: "inline",
    marginRight: 5,
    [theme.breakpoints.down('xs')]:{
      display: "none"
    }
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
    [theme.breakpoints.down('md')]:{
      display: "none"
    }
  },
  credentialsBox: {
    [theme.breakpoints.down('xs')]:{
      display: "none"
    }
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
export default NavBarUser;
