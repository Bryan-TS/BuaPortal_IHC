import { Container, Grid, Card, Avatar, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import  { Redirect } from 'react-router-dom'

import { useForm, Controller } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';


import Theme from '../../styles/Theme';
import { useState } from 'react';

const endpoint = 'http://localhost/BuaPortal/BackEnd/BuaPortal_API/public/api/user/login'

const Login = () => {
    const [autenticado,setAutenticado] = useState(false);
    const {handleSubmit, control} = useForm();



    const onSubmit = async data => {
        const response = await axios.post(endpoint,data);
        console.log(response);
        if (response.status == 200){
            setAutenticado(true);
        }
    };

    const classes = useStyles();
    if(autenticado){
        return <Redirect to='/user/dashboard'/>;
    }else
    return (
        
        <Container className = {classes.container}>
            <Grid container justifyContent = "center">
                <Grid item lg = {5} md = {6}>
                    <Card align = "center" className = {classes.card}>
                        <Avatar className = {classes.avatar}>
                            <PersonIcon className = {classes.icon}/>
                        </Avatar>
                        <Typography variant="h5" color="primary">
                            Usuario
                        </Typography>
                        <form className = {classes.form} onSubmit = {handleSubmit(onSubmit)}>
                            <Grid container spacing = {2}>
                                <Grid item xs = {12} className = {classes.gridmb}>
                                    <Controller
                                        name = "email"
                                        control = {control}
                                        defaultValue = ""
                                        rules = {{required: 'Email es requerido'}}
                                        render = {
                                            ({field:{onChange, value},  fieldState: { error }}) => (
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
                                        rules = {{required: 'Contaseña es requerida'}}
                                        render = {
                                            ({field:{onChange,value},  fieldState: { error }}) => (
                                                <TextField                                                    
                                                    label = "Password"
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
                                    {/* <Link to = "/user/dashboard"> */}
                                        <Button 
                                            type = "submit"
                                            variant="contained" 
                                            fullWidth
                                            color="primary">
                                        Sign in
                                        </Button>  
                                    {/* </Link>                               */}
                                </Grid>                            
                            </Grid>

                            <Link
                                // to = "/signup"
                                variant = "body1"
                                className = {classes.link}
                                >
                                Don't you have a account?. Sign up
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
export default Login;