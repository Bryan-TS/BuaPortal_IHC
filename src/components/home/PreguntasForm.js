import { Container, Grid, Card, Avatar, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { Box, IconButton } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { useForm, Controller } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Theme from '../../styles/Theme';

const endpoint = 'http://localhost/BuaPortal/BackEnd/BuaPortal_API/public/api/question'

const PreguntasForm = () => {
    const [name,setName] = useState('Hola');
    const [lastName,setLastName] = useState('');
    const [description,setDescription] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [questionCreated,setQuestionCreated] = useState(false);
    
    const {handleSubmit, control} = useForm();

    const store = async (data) => {
        const response = await axios.post(endpoint,data);
        if(response.status == 200){
            setQuestionCreated(true);  
        
            setTimeout(() => {
                setQuestionCreated(false);      
            },3000);
        }
    };

    const classes = useStyles();
    return (
        <Container className = {classes.container}>
            <Grid container justifyContent = "center">
                <Grid item lg = {5} md = {6}>
                    <Card align = "center" className = {classes.card}>
                        <Avatar className = {classes.avatar}>
                            <QuestionAnswerIcon className = {classes.icon}/>
                        </Avatar>
                        <Typography variant="h5" color="primary">
                            Crear Pregunta
                        </Typography>
                        <form className = {classes.form} onSubmit = {handleSubmit(store)}>
                            <Grid container spacing = {2}>
                                <Grid item xs = {12} className = {classes.gridmb}>
                                    <Controller
                                        name = "category"
                                        control = {control}
                                        defaultValue = ""                                        
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
                                                />
                                            )
                                        }                                        
                                    />                             
                                </Grid>

                                <Grid item xs = {12} className = {classes.gridmb}>
                                    <Controller
                                        name = "title"
                                        control = {control}
                                        defaultValue = ""                                        
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
                                                />
                                            )
                                        }                                        
                                    />                             
                                </Grid>
                        
                                <Grid item xs = {12} className = {classes.gridmb}>
                                    <Controller
                                        name = "description"
                                        control = {control}
                                        defaultValue = ""
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
                                                />
                                            )
                                        }
                                    />                             
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

                                <Grid item xs = {6} className = {classes.gridmb}>
                                    <Button 
                                        type = "submit"
                                        variant="contained" 
                                        fullWidth
                                        color="secondary">
                                      Registrar
                                    </Button>                                
                                </Grid> 
                                <Grid item xs = {12} className = {classes.gridmb}>
                                    <Box >
                                        {questionCreated ?  <Alert variant="filled" severity="success">El usuario fue creado con exito.</Alert> : null}                                           
                                        
                                    </Box>
                                </Grid>                 
                            </Grid>                    
                        </form>
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
    }
}));

export default PreguntasForm;