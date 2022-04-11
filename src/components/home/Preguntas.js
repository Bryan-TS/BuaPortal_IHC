import { Avatar, Button, Card, CardActionArea, CardContent, CardHeader, Container, Grid, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core';
import { amber, blue, green, grey } from '@material-ui/core/colors';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
    container:{
        marginTop: "10px"
    },
    avatarAssignmentIcon:{
        backgroundColor: blue[500]   
    },
    avatarMailIcon:{
        backgroundColor: amber[500]   
    },
    avatarBallotIcon:{
        backgroundColor: green[500]           
    },
    circleProgress:{
        backgroundColor: grey[50],
        color: "black"        
    },
    cardHeader:{
        backgroundColor: grey[900],
        color: "white"
    }
}));

const endpoint  = "http://localhost/BuaPortal/BackEnd/BuaPortal_API/public/api/question";

const Preguntas = () => {
    const classes = useStyles();
    const history = useHistory();

    const [questionsByUser, setQuestionsByUser] = useState([]);

    useEffect(() => {
        const getQuestionByUser = async() => {
            const response = await axios.get(endpoint);
            setQuestionsByUser(response.data);                        
        }
        getQuestionByUser();
    },[]);

    const showQuestionById = (id) => {
        history.push(`/user/pregunta/${id}`);
    }
    


    return (
        <Container className = {classes.container}>
            <Grid container  spacing = {2}>
            <Grid item xs={6}>
                <Link to = "/user/pregunta" style = {{textDecoration: "none"}}>
                    <Button 
                        type = "submit"
                        variant="contained" 
                        fullWidth
                        color="primary">
                        Crear Pregunta
                    </Button> 
                </Link>
            </Grid>

            <Grid item xs={12} sm={12}>
                    <Card>
                        <CardHeader
                            className = {classes.cardHeader}
                            avatar = {
                                <Avatar className = {classes.avatarBallotIcon}>
                                    <QuestionAnswerIcon/>
                                </Avatar>
                            }
                            titleTypographyProps = {
                               {
                                   variant: "h6"
                               }
                            }
                            title = "Preguntas"
                        />
                        <CardContent display = "inline-flex">  
                            <Grid container  spacing = {2}>                                
                                {questionsByUser.map(question => (
                                    <Grid item xs={12} key = {question.id}>    
                                        <CardActionArea onClick={(e) => showQuestionById(question.id,e)}>
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
                                                title = {question.title}
                                                
                                            />
                                            <CardContent>
                                                <Typography variant="body1" color="initial"><b>Descripción 1</b></Typography>                                                                                            
                                            </CardContent>                                        
                                        </CardActionArea>
                                    </Grid>   
                                ))}                                                             
                            </Grid>
                        </CardContent>
                    </Card>

                    
                </Grid>

                
            </Grid>
        </Container>       
    );
};

export default Preguntas;