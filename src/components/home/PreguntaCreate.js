import { Container, Grid, Card, Avatar, Typography, TextField, Button, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Box } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { useForm, Controller } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import { Context } from '../../context/Context';

import { makeStyles } from '@material-ui/core/styles';
import { useState, useContext } from 'react';
import axios from 'axios';

import Loading from '../../assets/img/loading.gif'

import Theme from '../../styles/Theme';

const endpoint = 'https://whispering-bastion-51346.herokuapp.com/api/question'

const PreguntasCreate = () => {

    const [questionCreated,setQuestionCreated] = useState(false);
    
    const {handleSubmit, control} = useForm();
    const [user,setUser] = useContext(Context);

    const [createFail,setCreateFail] = useState(false);
    const [loading,setLoading] = useState(false);
    const history = useHistory();

    const store = async (data) => {
        setLoading(true);
        data = {...data,userId: user.id}
        const response = await axios.post(endpoint,data);
        const responseData = response.data;
        setLoading(false);

        if(responseData.code === 200){
            setQuestionCreated(true);  
        
            setTimeout(() => {
                setQuestionCreated(false);      
                history.push("/user/preguntas");
            },1000);
        }else{
            if(responseData.code === 400){
                setCreateFail(true);
                setTimeout(() => {
                    setCreateFail(false);      
                },3000);
            }
        }
    };

    const classes = useStyles();
    return (
        <Container className = {classes.container}>
            <Grid container>
                <IconButton style={{backgroundColor: "#003B5C"}}>
                    <ArrowBackIcon style={{color: "white"}} onClick={history.goBack}/>
                </IconButton>
            </Grid>
            <Grid container justifyContent = "center">
                {/* <Grid item lg = {5} md = {6}> */}
                <Grid item>
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
                                                    rows={8}
                                                />
                                            )
                                        }
                                    />                             
                                </Grid>
                                {
                                  !loading ?
                                    <>
                                        <Grid item xs = {6} className = {classes.gridmb}>
                                            <Button 
                                                type = "submit"
                                                variant="contained" 
                                                fullWidth
                                                style={{backgroundColor: "#72727E",color:"white"}}
                                                >
                                                Cancelar
                                            </Button>                                                              
                                        </Grid>
        
                                        <Grid item xs = {6} className = {classes.gridmb}>
                                            <Button 
                                                    type = "submit"
                                                    variant="contained" 
                                                    fullWidth
                                                    color="secondary">
                                                Crear
                                            </Button>                                                               
                                        </Grid>
                                    </>
                                  :
                                    <Grid item xs = {12} className = {classes.gridmb}>
                                      <img src={Loading} alt="loading..." width="40" height="40" /> 
                                    </Grid>
                                }
                                <Grid item xs = {12} className = {classes.gridmb}>
                                    <Box >
                                        {questionCreated ?  <Alert variant="filled" severity="success">Pregunta creada con exito.</Alert> : null}                                           
                                        {createFail ?  <Alert variant="filled" severity="error">Error no se pudo crear la pregunta</Alert> : null}                                           
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

export default PreguntasCreate;