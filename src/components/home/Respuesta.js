import { Container, Grid, Card, Avatar, Typography, IconButton, CardActions } from '@material-ui/core';
import { CardContent, CardHeader } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import PersonIcon from '@material-ui/icons/Person';
import { blue, grey, red } from '@material-ui/core/colors';

import { useForm, Controller } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { useContext, useEffect, useState } from 'react';

import { Context } from '../../context/Context';
import axios from 'axios';

import Theme from '../../styles/Theme';

const endpoint = 'https://whispering-bastion-51346.herokuapp.com/api/response/';
const endpointReaction = 'https://whispering-bastion-51346.herokuapp.com/api/reaction';

const Respuesta = (props) => {
    const [responseLiked,setResponseLiked] = useState(true);
    const [likesResponseCounter,setLikesResponseCounter] = useState(0);
    const [unlikesResponseCounter,setUnlikesResponseCounter] = useState(0);
    const [response,setRespose] = useState({});

    const [responseLikeByUser,setResponseLikeByUser] = useState(false);
    const [responseUnlikeByUser,setResponseUnlikeByUser] = useState(false);

    const [user,setUser] = useContext(Context);
    
    const {handleSubmit, control} = useForm();
    const history = useHistory();

    useEffect(() => {
        // console.log(props.response);

        setRespose(props.response);
        getReactions(props.response.id);
        getLikesByResponse(props.response.id);
        getUnlikesByResponse(props.response.id);
    },[]);

    useEffect(() => {
        getLikesByResponse(props.response.id);
    },[responseLikeByUser]);

    useEffect(() => {
        getUnlikesByResponse(props.response.id);
    },[responseUnlikeByUser]);

    const getReactions = async (id) => {
        // console.log(`Peticion: https://whispering-bastion-51346.herokuapp.com/api/reactionsByResponse/${id}`);
        // Nota: Obtener las reaciones por respuesta y usuario**********************
        const response = await axios.get(`https://whispering-bastion-51346.herokuapp.com/api/reactionsByUserAndResponse/${user.id}/${id}`);
        const responseData = response.data;
        if(responseData.code === 200){
            setResponseLikeByUser(responseData.data.liked);
            setResponseUnlikeByUser(responseData.data.unliked);
        }
    }

    const getLikesByResponse = async (id) => {
        // console.log(`Peticion: https://whispering-bastion-51346.herokuapp.com/api/likesByResponse/${id}`);
        const response = await axios.get(`https://whispering-bastion-51346.herokuapp.com/api/likesByResponse/${id}`);
        const responseData = response.data;
        if(responseData.code === 200){
            setLikesResponseCounter(responseData.data);        
        }else{
            if(responseData.code === 204){
                setLikesResponseCounter(responseData.data);
            }
        }
    }

    const getUnlikesByResponse = async (id) => {
        // console.log(`Peticion: https://whispering-bastion-51346.herokuapp.com/api/unlikesByResponse/${id}`);
        const response = await axios.get(`https://whispering-bastion-51346.herokuapp.com/api/unlikesByResponse/${id}`);
        const responseData = response.data;
        if(responseData.code === 200){
            setUnlikesResponseCounter(responseData.data);                    
        }else{
            if(responseData.code === 204){
                setUnlikesResponseCounter(responseData.data);
            }
        }
    }

   

    const like = async () => {
        if(response !== null && user !== null){
            if(!responseLikeByUser){
                const reaction = {
                    liked:true,
                    unliked:false,
                    user_id: user.id,
                    response_id: props.response.id
                }
                const response = await axios.post(endpointReaction,reaction);
                const responseData = response.data;
                if(responseData.code === 200){
                    setResponseLikeByUser(true);
                    setResponseUnlikeByUser(false);
                }
            }else{
                const reaction = {
                    liked:false,
                    unliked:responseUnlikeByUser,
                    user_id: user.id,
                    response_id: props.response.id
                }
                const response = await axios.post(endpointReaction,reaction);
                const responseData = response.data;
                if(responseData.code === 200){
                    setResponseLikeByUser(false);
                    // setResponseUnlikeByUser(responseUnlikeByUser);
                }
            }
        }
        
    }

    const unlike = async() => {
        if(response !== null && user !== null){
            if(!responseUnlikeByUser){
                const reaction = {
                    liked:false,
                    unliked:true,
                    user_id: user.id,
                    response_id: props.response.id
                }
                const response = await axios.post(endpointReaction,reaction);
                const responseData = response.data;
                if(responseData.code === 200){
                    setResponseUnlikeByUser(true);
                    setResponseLikeByUser(false);
                }
            }else{
                const reaction = {
                    liked:false,
                    unliked:responseLikeByUser,
                    user_id: user.id,
                    response_id: props.response.id
                }
                const response = await axios.post(endpointReaction,reaction);
                const responseData = response.data;
                if(responseData.code === 200){
                    setResponseUnlikeByUser(false);
                    // setResponseLikeByUser(responseLikeByUser);
                }
            }
        }
        // setResponseUnlikeByUser(!responseUnlikeByUser);
        
    }

    const classes = useStyles();
    return (
        
        <Grid item xs={12}> 
        <Card>
                <CardHeader
                    className = {classes.cardHeader}
                    avatar = {
                        <Avatar >
                            <PersonIcon/>
                        </Avatar>
                        
                    }
                    titleTypographyProps = {
                    {
                        variant: "h6"
                    }
                    }
                    title = {`Autor: ${response.name} ${response.lastName}`}
                />
                <CardContent>
                    <Typography variant="body1" color="initial"><b>{response.description}</b></Typography>                                                                
                </CardContent>
                <CardActions>                                            
                        <Typography>
                            {likesResponseCounter}
                        </Typography>

                        <IconButton onClick={like}>
                            {responseLikeByUser ?                                 
                                <ThumbUpIcon style={{ color: blue[500] }}/>
                            :
                                <ThumbUpOutlinedIcon/>
                            }
                            
                        </IconButton>
                        
                        <Typography>
                            {unlikesResponseCounter}
                        </Typography>

                        <IconButton onClick={unlike}>
                            {responseUnlikeByUser ?                                 
                                <ThumbDownAltIcon style={{ color: red[500] }}/>
                            :
                                <ThumbDownOutlinedIcon/>
                            }
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