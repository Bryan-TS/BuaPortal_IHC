import { Container, Grid, Card, Avatar, Typography } from '@material-ui/core';
import { CardContent, CardHeader } from '@material-ui/core';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { grey } from '@material-ui/core/colors';

import { useForm, Controller } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import Theme from '../../styles/Theme';
import Respuesta from './Respuesta';
import RespuestaCreate from './RespuestaCreate';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const endpoint = 'https://whispering-bastion-51346.herokuapp.com/api/responsesByQuestion'

const PreguntasForm = () => {
    const[responses,setResponses] = useState([]);
    const {handleSubmit, control} = useForm();
    const [loading,setLoading] = useState(false);
    const history = useHistory();

    const store = async (data) => {
        const response = await axios.post(endpoint,data);
        if(response.status === 200){        
            setTimeout(() => {
                
                history.push("/user/preguntas");
            },3000);

            
        }
    };

    // const addQuestionsArray = (response) => {
    //     // setResponses([...responses,response]);
    //     // console.log(`Hola soy el componte. El numero de elementos en el arreglo es:${responses.length}`);
    // }

    const refreshResponses = () => {
        setLoading(true);
        const getResponsesByQuestion = async() => {            
            const response = await axios.get(`${endpoint}/${id}`);
            const responseData = response.data;
            setLoading(false);
            setResponses(responseData.data);                                               
        }        
        getResponsesByQuestion();
    }


    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        const getResponsesByQuestion = async() => {            
            const response = await axios.get(`${endpoint}/${id}`);
            const responseData = response.data;
            setLoading(false);
            setResponses(responseData.data);                                               
        }
        
        getResponsesByQuestion();        
    },[]);

    // useEffect(() => {
    //     setLoading(true);
    //     const getResponsesByQuestion = async() => {            
    //         const response = await axios.get(`${endpoint}/${id}`);
    //         const responseData = response.data;
    //         setLoading(false);
    //         setResponses(responseData.data);                                               
    //     }
        
    //     getResponsesByQuestion();        
    // },[countRequest]);



    const classes = useStyles();
    return (
        <Container className = {classes.container}>
            <Grid container justifyContent = "center">
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
                            title = "Respuestas"
                        />
                        <CardContent display = "inline-flex">  
                            <Grid container  spacing = {2}>                        
                                    {
                                        responses.length > 0 ? 
                                            responses.map(response => (
                                                <Respuesta response = {response}/>
                                            ))                                        
                                        :
                                        <Grid container justifyContent = "center">
                                            <Typography variant = "h5">
                                                No hay resultados
                                            </Typography>
                                        </Grid>
                                    }
                                    <RespuestaCreate refreshResponses = {refreshResponses}/>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
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

export default PreguntasForm;