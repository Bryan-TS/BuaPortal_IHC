import { Container, Grid, Card, Avatar, Typography, TextField, Button, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
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

const endpoint = 'https://whispering-bastion-51346.herokuapp.com/api/question'

const PreguntasEdit = () => {

    const [questionCreated,setQuestionCreated] = useState(false);
    const [editable,setEditable] = useState("disabled");
    const [question,setQuestion] = useState(null);
    //const [questionInit,setQuestionInit] = useState(null);
    const [category,setCategory] = useState("");
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

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
        const responseData = response.data;
        if(responseData.code === 200){
            setQuestionCreated(true);  
            setEditable("disabled"); 
            setTimeout(() => {
                setQuestionCreated(false);      
            },3000);            
        }
    };

    const deleteQuestion = async () => {
        const response = await axios.delete(`${endpoint}/${id}`);
        const responseData = response.data;
        if(responseData.code === 200){
            setQuestionCreated(true);               
            setTimeout(() => {
                setQuestionCreated(false);      
                history.push('/user/preguntas');
            },3000);            
        }
    };

    const {id} = useParams();

    const cancelEdit = () =>{
        setTitle()
        setDescription()
    }

    useEffect(()=>{
        const questionById = async() => {            
            const response = await axios.get(`${endpoint}/${id}`);
            const responseData = response.data;

            if(responseData.code === 200){
                setQuestion(responseData.data);  
                // setQuestionInit(responseData.data);
                setCategory(responseData.data.category)
                setTitle(responseData.data.title)
                setDescription(responseData.data.description)
                console.log(response.data); 
            }                                                         
        }
        questionById();
    },[]);

    const classes = useStyles();
    return (
        <>
            {user !== null && question !== null ? 
                <Container className = {classes.container}>
                    <Grid container>
                        <IconButton style={{backgroundColor: "#003B5C"}}>
                            <ArrowBackIcon style={{color: "white"}} onClick={history.goBack}/>
                        </IconButton>
                    </Grid>
                    <Grid container justifyContent = "center">
                        {/* <Grid item lg = {5} md = {6}> */}
                        <Grid item >
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
                                                            style={{color:'black',opacity:1}}
                                                            inputProps={{ className: classes.input }}
                                                            InputLabelProps={{
                                                                style: { color: 'black' },
                                                              }}
                                                            claseName = {classes.input}
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
                                                            inputProps={{ className: classes.input }}
                                                            InputLabelProps={{
                                                                style: { color: 'black' },
                                                              }}
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
                                                            inputProps={{ className: classes.input }}
                                                            InputLabelProps={{
                                                                style: { color: 'black' },
                                                              }}
                                                            rows={8}
                                                        />
                                                    )
                                                }
                                            />                             
                                        </Grid>
                                        <Grid item xs = {12}  container justifyContent="flex-end">
                                            <Typography style={{marginRight:5}}>
                                                {Math.floor(Math.random() * 51)}
                                            </Typography>
                                            <VisibilityIcon/>
                                        </Grid>                                        
                                        {editable === "" ? 
                                            <>
                                                <Grid item xs = {6} md = {2} justifyContent="center" className = {classes.gridmb}>
                                                        <Button 
                                                                variant="contained" 
                                                                fullWidth
                                                                style={{backgroundColor: "#72727E"}}
                                                                onClick = {cancelEdit}
                                                                >
                                                            Cancelar
                                                        </Button> 
                                                </Grid>
                                                <Grid item xs = {6} md = {2} justifyContent="center" className = {classes.gridmb}>
                                                    <Button 
                                                        type = "submit"
                                                        variant="contained" 
                                                        fullWidth
                                                        color="secondary">
                                                    Guardar
                                                    </Button>                                
                                                </Grid>

                                            </>
                                            : <></>}                          
                                        
                                        
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
    },input: {
        color: "black"
    },floatingLabelFocusStyle: {
        color: "black"
    }
}));

export default PreguntasEdit;