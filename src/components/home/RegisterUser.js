import { Container, Grid, Card, Avatar, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Box } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { useForm, Controller } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import axios from 'axios';

import Theme from '../../styles/Theme';

const endpoint = 'http://localhost/BuaPortal/BackEnd/BuaPortal_API/public/api/user'

const RegisterUser = () => {
    const [userCreated,setUserCreated] = useState(false);
    // const store = async (e) => {
    //     e.preventDefault();
    //     await axios.post(endpoint,{
    //         name: name,
    //         lastName: lastName,
    //         description: description,
    //         email: email,
    //         password: password,
    //     })
    // }

    // const store = async (e, data) => {
    //     e.preventDefault();
    //     await axios.post(endpoint,data)
    // }
    
    const {handleSubmit, control} = useForm();
    const history = useHistory();
    const store = async (data) => {
        

        const response = await axios.post(endpoint,data);
        if(response.status === 200){
            setUserCreated(true);  
        
            setTimeout(() => {
                setUserCreated(false);
                history.push("/login");      
            },3000);
            // name.value =  name;
            // lastName.value = lastName;
            // description.value = description;
            // email.value = email;
            // password.value = password;
        }
        // console.log(response);
      };

    const classes = useStyles();
    return (
        <Container className = {classes.container}>
            <Grid container justifyContent = "center">
                <Grid item lg = {5} md = {6}>
                    <Card align = "center" className = {classes.card}>
                        <Avatar className = {classes.avatar}>
                            <PersonAddIcon className = {classes.icon}/>
                        </Avatar>
                        <Typography variant="h5" color="primary">
                            Registro Usuario
                        </Typography>
                        <form className = {classes.form} onSubmit = {handleSubmit(store)}>
                            <Grid container spacing = {2}>
                                <Grid item xs = {6} className = {classes.gridmb}>
                                    <Controller
                                        name = "name"
                                        control = {control}
                                        defaultValue = ""                                        
                                        rules = {{required: 'Nombre es requerido'}}
                                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                                                <TextField
                                                    label = "Nombre"
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

                                <Grid item xs = {6} className = {classes.gridmb}>
                                    <Controller
                                        name = "lastName"
                                        control = {control}
                                        defaultValue = ""
                                        rules = {{required: 'Apellido es requerido'}}
                                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                                                <TextField
                                                    label = "Apellido"
                                                    variant = "outlined"
                                                    fullWidth                                                    
                                                    value = {value}
                                                    onChange = {onChange}
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
                                        rules = {{required: 'Desccripción es requerido'}}
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

                                <Grid item xs = {12} className = {classes.gridmb}>
                                    <Controller
                                        name = "email"
                                        control = {control}
                                        defaultValue = ""
                                        rules = {{required: 'Email es requerido'}}
                                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                                                <TextField
                                                    label = "Email"
                                                    variant = "outlined"
                                                    type = "email"
                                                    fullWidth                                                    
                                                    value = {value}
                                                    onChange = {onChange}
                                                    error={!!error}
                                                    helperText={error ? error.message : null}
                                                />
                                            )
                                        }
                                    />                             
                                </Grid>

                                <Grid item xs = {12} className = {classes.gridmb}> 
                                    <Controller
                                        name = "password"
                                        control = {control}
                                        defaultValue = ""
                                        rules = {{required: 'Contraseña es requerida'}}
                                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                                                <TextField                                                    
                                                    label = "Contraseña"
                                                    variant = "outlined"
                                                    type = "password"
                                                    fullWidth
                                                    value = {value}
                                                    onChange = {onChange}
                                                    error={!!error}
                                                    helperText={error ? error.message : null}
                                                />
                                            )
                                        }
                                    />                                                                       
                                </Grid>
                                <Grid item xs = {12} className = {classes.gridmb}>
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
                                        {userCreated ?  <Alert variant="filled" severity="success">El usuario fue creado con exito.</Alert> : null}                                           
                                        
                                    </Box>
                                </Grid>                 
                            </Grid>

                            <Link
                                to = "/login"
                                variant = "body1"
                                className = {classes.link}                                
                            >
                                ¿Ya tienes una cuenta? Ingresa.
                            </Link>
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

export default RegisterUser;