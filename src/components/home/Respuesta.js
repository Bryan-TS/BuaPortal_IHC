import { Container, Grid, Card, Avatar, Typography, IconButton, CardActions } from '@material-ui/core';
import { CardContent, CardHeader } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import { grey } from '@material-ui/core/colors';

import { useForm, Controller } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Theme from '../../styles/Theme';

const endpoint = 'https://myapplication123321.000webhostapp.com/api/question'

const Respuesta = (props) => {
    const [responseLiked,setResponseLiked] = useState(true);
    const [likesResponseCounter,setLikesResponseCounter] = useState(0);
    const [unlikesResponseCounter,setUnlikesResponseCounter] = useState(0);
    
    const {handleSubmit, control} = useForm();
    const history = useHistory();

    const store = async (data) => {
        const response = await axios.post(endpoint,data);
        if(response.status === 200){
         
        
            setTimeout(() => {
                
                history.push("/user/preguntas");
            },3000);

            
        }
    };

    useEffect(() => {
    },[]);

    const like = () => {
        if(responseLiked){
            setLikesResponseCounter(likesResponseCounter + 1);
        }else{
            setUnlikesResponseCounter(unlikesResponseCounter + 1);
        }
        console.log(props.id);
    }

    const classes = useStyles();
    return (
        <Grid item xs={12}> 
            <Card>
                <CardHeader
                    className = {classes.cardHeader}
                    avatar = {
                        <Avatar >
                            <InfoIcon/>
                        </Avatar>
                        
                    }
                    titleTypographyProps = {
                    {
                        variant: "h6"
                    }
                    }
                    title = "Respuesta 1"
                    
                />
                <CardContent>
                    <Typography variant="body1" color="initial"><b>Respuesta</b></Typography>                                            
                    
                </CardContent>
                <CardActions>                                            
                        <Typography>
                            {likesResponseCounter}
                        </Typography>

                        <IconButton onClick={like}>
                            <ThumbUpIcon/>
                        </IconButton>
                        
                        <Typography>
                            {unlikesResponseCounter}
                        </Typography>

                        <IconButton>
                            <ThumbDownAltIcon/>
                        </IconButton>                                                
                </CardActions>       
            </Card>
        </Grid>
    );
};

const useStyles = makeStyles(() => ({
    container: {
        marginTop: 50
    },
    card:{
        padding: 30
    },
    avatar:{
        backgroundColor: Theme.palette.primary.main,
        width: 80,
        height: 80
    },
    icon: {
        fontSize: 60
    },
    form:{
        marginTop: 40,
        marginBottom: 10
    },
    gridmb:{
        marginBottom: 20
    },
    link:{
        marginTop: 8,
        fonrtSize: "1.1rem",
        fontFamily: "Roboto",
        lineHeight: 1.5,
        color: Theme.palette.primary.main,
        textDecoration: "none"
    },
    cardHeader:{
        backgroundColor: grey[900],
        color: "white"
    }
}));

export default Respuesta;