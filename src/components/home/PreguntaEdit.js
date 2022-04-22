import { Container, Grid, Card, Avatar, Typography, TextField, Button, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import { Box } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Respuestas from './Respuestas';

import { useForm, Controller } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Theme from '../../styles/Theme';
import { Context } from '../../context/Context';

const endpoint = 'https://myapplication123321.000webhostapp.com/api/question'

const PreguntasEdit = () => {

    const [questionCreated,setQuestionCreated] = useState(false);
    const [editable,setEditable] = useState("disabled");
    const [question,setQuestion] = useState(null);
    const [user,setUser] = useContext(Context);
    
    const {handleSubmit, control} = useForm();
    const history = useHistory();

    const editableToogle = () => {
        if(editable === "disabled")
            setEditable("");
        else
            setEditable("disabled");
    }

    const update = async (data) => {
        const response = await axios.put(`${endpoint}/${id}`,data);
        if(response.status === 200){
            setQuestionCreated(true);  
            setEditable("disabled"); 
            setTimeout(() => {
                setQuestionCreated(false);      
            },3000);            
        }
    };

    const deleteQuestion = async () => {
        const response = await axios.delete(`${endpoint}/${id}`);
        if(response.status === 200){
            setQuestionCreated(true);               
            setTimeout(() => {
                setQuestionCreated(false);      
                history.push('/user/preguntas');
            },3000);            
        }
    };

    const {id} = useParams();

    useEffect(()=>{
        const questionById = async() => {            
            const response = await axios.get(`${endpoint}/${id}`);
            setQuestion(response.data);  
            console.log(response.data);                                              
        }
        questionById();
        // console.log(`Peticion: ${endpoint}/${id}}`);
        // console.log(question);
        console.log(user);
    },[]);

    const classes = useStyles();
    return (
        <>
            {user !== null && question !== null ? 
                <Container className = {classes.container}>
                    <Grid container justifyContent = "center">
                        <Grid item lg = {5} md = {6}>
                            <Card align = "center" className = {classes.card}>
                                <Avatar className = {classes.avatar}>
                                    <QuestionAnswerIcon className = {classes.icon}/>
                                </Avatar>
                                <Typography variant="h5" color="primary">
                                    Pregunta
                                </Typography>
                                <form className = {classes.form} onSubmit = {handleSubmit(update)}>
                                    <Grid container spacing = {2}>
                                        {user.id === question.user_id ? 
                                            <Grid item xs = {12} container justifyContent="flex-end">                                    
                                                    <IconButton color = "secondary" onClick={editableToogle}>
                                                        <BorderColorIcon />
                                                    </IconButton>
                                                    <IconButton color = "red">
                                                        <DeleteIcon />
                                                    </IconButton>                                                                      
                                            </Grid>:
                                            <></>
                                        }
                                        <Grid item xs = {12} className = {classes.gridmb}>
                                            <Controller
                                                name = "category"
                                                control = {control}
                                                defaultValue = {question.category}                                        
                                                rules = {{required: 'Categoria es requerido'}}
                                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                                        <TextField
                                                            label = "Categoria"
                                                            variant = "outlined"
                                                            fullWidth                                                    
                                                            value = {value}
                                                            onChange={onChange}
                                                            error={!!error}
                                                            helperText={error ? error.message : null}
                                                            disabled = {editable}
                                                        />
                                                    )
                                                }                                        
                                            />                             
                                        </Grid>
                
                                        <Grid item xs = {12} className = {classes.gridmb}>
                                            <Controller
                                                name = "title"
                                                control = {control}
                                                defaultValue = {question.title}                                        
                                                rules = {{required: 'Titulo es requerido'}}
                                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                                        <TextField
                                                            label = "Titulo"
                                                            variant = "outlined"
                                                            fullWidth                                                    
                                                            value = {value}
                                                            onChange={onChange}
                                                            error={!!error}
                                                            helperText={error ? error.message : null}
                                                            disabled = {editable}
                                                        />
                                                    )
                                                }                                        
                                            />                             
                                        </Grid>
                                
                                        <Grid item xs = {12}>
                                            <Controller
                                                name = "description"
                                                control = {control}
                                                defaultValue = {question.description}
                                                rules = {{required: 'Descripción es requerido'}}
                                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                                        <TextField
                                                            label = "Descripción"
                                                            variant = "outlined"
                                                            fullWidth                                                    
                                                            value = {value}
                                                            onChange = {onChange}
                                                            multiline
                                                            error={!!error}
                                                            helperText={error ? error.message : null}
                                                            disabled = {editable}
                                                        />
                                                    )
                                                }
                                            />                             
                                        </Grid>
                                        <Grid item xs = {12} container justifyContent="flex-end">
                                            <Typography style={{marginRight:5}}>
                                                500
                                            </Typography>
                                            <VisibilityIcon/>
                                        </Grid>
                                        <Grid item xs = {6} className = {classes.gridmb}>
                                            <Link to = "/user/dashboard" style = {{textDecoration: "none"}}>
                                                <Button 
                                                        type = "submit"
                                                        variant="contained" 
                                                        fullWidth
                                                        style={{backgroundColor: "#72727E"}}
                                                        >
                                                    Atras
                                                    </Button> 
                                            </Link>                                                                   
                                        </Grid>
                                        {editable === "" ? 
                                            <Grid item xs = {6} className = {classes.gridmb}>
                                                <Button 
                                                    type = "submit"
                                                    variant="contained" 
                                                    fullWidth
                                                    color="secondary">
                                                Guardar
                                                </Button>                                
                                            </Grid>: <></>}                          
                                        
                                        
                                        <Grid item xs = {12} className = {classes.gridmb}>
                                            <Box >
                                                {questionCreated ?  <Alert variant="filled" severity="success">La pregunta fue modificada con exito.</Alert> : null}                                                                                           
                                            </Box>
                                        </Grid>                 
                                    </Grid>                    
                                </form>
                            </Card>
                        </Grid>
                    </Grid>
                    <Respuestas/>
                </Container>
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
    }
}));

export default PreguntasEdit;