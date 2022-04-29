import { Container, Grid, Card, Avatar, Typography, IconButton, CardActions, TextField, Button } from '@material-ui/core';
import { CardContent, CardHeader } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import { grey } from '@material-ui/core/colors';

import { useForm, Controller } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import { Context } from '../../context/Context';

import Theme from '../../styles/Theme';
import { useParams } from 'react-router-dom';

const endpoint = 'https://whispering-bastion-51346.herokuapp.com/api/response'

const RespuestaCreate = (props) => {
    const [responseLiked,setResponseLiked] = useState(true);
    const [likesResponseCounter,setLikesResponseCounter] = useState(0);
    const [unlikesResponseCounter,setUnlikesResponseCounter] = useState(0);
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [errorTitle,setErrorTtitle] = useState(false);
    const [errorDescription,setErrorDescription] = useState(false);

    const {addQuestionsArray} = props
    
    const [user,setUser] = useContext(Context);

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

    const clearForm = () =>{
        setTitle('');
        setDescription('');
        setErrorTtitle(false);
        setErrorDescription(false);
    }

    useEffect(() => {
    },[]);

    const {id} = useParams();

    const createReponse =  (e) => {
        e.preventDefault();
        // if(title === ""){
        //     setErrorTtitle(true);            
        // }else{
        //     setErrorTtitle(false);
        // }
        
        if(description === ""){
            setErrorDescription(true);            
        }else{
            setErrorDescription(false);
        }

        const postReponse = async() => {
            if(description !== ""){
                
                const response = {
                    description: description,
                    userId:user.id,
                    questionId: id
                }
                const responseAPI = await axios.post(endpoint,response);
                const responseData = responseAPI.data;
                // console.log(responseData.data.response_id);
                if(responseData.data.response_id !== null){
                    // console.log(responseData.data.response_id);
                    // const responseAPI2 = await axios.get(`https://whispering-bastion-51346.herokuapp.com/api/response/${responseData.data.response_id}`);
                    // const responseData2 = responseAPI2.data;
                    // if(responseData2.data.response_id !== null){
                    //     addQuestionsArray(responseData2.data)
                    // }
                    // addQuestionsArray(responseData2.data)
                    addQuestionsArray();
                }            
            }
        }

        postReponse();
    }

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
        <>
            {user !== null ? 
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
                         title = "Respuesta "
                         
                     />
                     <CardContent>
                         {/* formulario */}
                         <form className = {classes.form} onSubmit={createReponse}>
                            {/* <Grid item xs = {12} className = {classes.gridmb}>
                                <TextField
                                    label = "Titulo"
                                    variant = "outlined"
                                    fullWidth  
                                    value = {title}       
                                    onChange = {(e) => setTitle(e.target.value)}  
                                    error = {errorTitle}
                                    helperText = {errorTitle ? "Titulo es requerido" :""}                                                                                                                    
                                />
                            </Grid> */}

                            <Grid item xs = {12} className = {classes.gridmb}>
                                <TextField
                                    label = "Descripción"
                                    variant = "outlined"
                                    fullWidth
                                    multiline
                                    rows={3}
                                    value = {description}       
                                    onChange = {(e) => setDescription(e.target.value)}
                                    error = {errorDescription}
                                    helperText = {errorDescription ? "Descripción es requerida" :""}                                                                                                                                
                                />
                            </Grid>
                         </form>                                                                  
                     </CardContent>
                     <CardActions className={classes.cardActionsJustifyEnd}>                                            
                        <Grid item xs = {6} md = {2} className = {classes.gridmb}>
                            <Button 
                                type = "submit"
                                variant="contained" 
                                fullWidth
                                onClick = {clearForm}
                                color="secondary">
                                
                                Cancelar
                            </Button>                                                  
                        </Grid>
                        <Grid item xs = {6} md = {2} className = {classes.gridmb}>
                            <Button 
                                type = "submit"
                                variant="contained" 
                                fullWidth
                                color="secondary"
                                onClick={createReponse}
                                >                                
                                Responder
                            </Button>                                                  
                        </Grid>
                     </CardActions>       
                 </Card>
             </Grid>
            :
                <></>                                                
            }
        </>
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
    },
    cardActionsJustifyEnd:{
        justifyContent: "flex-end"
    }
}));

export default RespuestaCreate;