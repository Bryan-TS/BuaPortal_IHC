import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Box, IconButton } from '@material-ui/core';

import Theme from '../../styles/Theme';
import { grey, red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  cardActions:{
    display: "flex",
    justifyContent: "center",
    backgroundColor: Theme.palette.secondary.main
  },
  cardActionsBox:{
    display: "flex",
    justifyContent: "center"
  },
  alert:{
    marginBottom: "5px"
  }
});

export default function Material(props) {

  const classes = useStyles();

  const [favorite,setFavorite] = useState(false);

  const [watchLater,setwatchLater] = useState(false);
  
  const [favoriteClicked, setFavoriteClicked]  = useState(false);  

  const [watchLaterClicked, setwatchLaterClicked]  = useState(false);  
  
  const handleFavoriteClick = () => {
    setFavorite(!favorite);
    
    setFavoriteClicked(true);    
    
    setTimeout(() => {
      setFavoriteClicked(false);      
    },8000);
  }


  const handleWatchLaterClick = () => {
    setwatchLater(!watchLater);

    setwatchLaterClicked(true);    
    
    setTimeout(() => {
      setwatchLaterClicked(false);      
    },8000);
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Course"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.titulo}
          </Typography>
          <Typography variant="body1" component="p">
            This course is the best way to become in a excelente element to work team.  
          </Typography>
          <Typography variant = "body1" align = "center">
            <b>¡Click to see more!</b>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className = {classes.cardActions}> 
        <Box display = "flex" flexDirection = "column">
          <Box className = {classes.cardActionsBox}>
            <IconButton className = {classes.favorite} onClick = {handleFavoriteClick}>
              {favorite ? <FavoriteIcon style={{ color: red[500] }}/> : <FavoriteBorderIcon style={{ color: "FFF" }}/> }          
            </IconButton>    
            
            <IconButton className = {classes.watchLater} onClick = {handleWatchLaterClick}>
              {watchLater ? <WatchLaterIcon style={{ color: grey[900] }}/> : <AccessTimeIcon style={{ color: "FFF" }}/> }          
            </IconButton>    
          </Box>
          <Box >
            {favoriteClicked ?  <Alert className={classes.alert} variant="filled" severity="success">This material was added sucess!</Alert> : null}
            {
              watchLaterClicked ? <Alert className={classes.alert} variant="filled" severity="success">This material was added to watch more later sucess!</Alert> : null
            }       
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
}
