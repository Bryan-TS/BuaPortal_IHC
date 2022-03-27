import { Container, Grid, Card, Avatar, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import { useForm, Controller } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';


import Theme from '../../styles/Theme';

const RegisterUser = () => {
    const {handleSubmit, control} = useForm();

    const onSubmit = data => {
        console.log(data);
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
                            Usuario
                        </Typography>
                        <form className = {classes.form} onSubmit = {handleSubmit(onSubmit)}>
                            <Grid container spacing = {2}>
                                <Grid item xs = {6} className = {classes.gridmb}>
                                    <Controller
                                        name = "name"
                                        control = {control}
                                        defaultValue = ""
                                        rules = {{required: 'Name is required'}}
                                        render = {
                                            ({field:{onChange, value}}) => (
                                                <TextField
                                                    label = "Name"
                                                    variant = "outlined"
                                                    fullWidth                                                    
                                                    value = {value}
                                                    onChange = {onChange}
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
                                        rules = {{required: 'Last name is required'}}
                                        render = {
                                            ({field:{onChange, value}}) => (
                                                <TextField
                                                    label = "Last Name"
                                                    variant = "outlined"
                                                    fullWidth                                                    
                                                    value = {value}
                                                    onChange = {onChange}
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
                                        rules = {{required: 'Email is required'}}
                                        render = {
                                            ({field:{onChange, value}}) => (
                                                <TextField
                                                    label = "Email"
                                                    variant = "outlined"
                                                    type = "email"
                                                    fullWidth                                                    
                                                    value = {value}
                                                    onChange = {onChange}
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
                                        rules = {{required: 'Password is required'}}
                                        render = {
                                            ({field:{onChange,value}}) => (
                                                <TextField                                                    
                                                    label = "Password"
                                                    variant = "outlined"
                                                    type = "password"
                                                    fullWidth
                                                    value = {value}
                                                    onChange = {onChange}
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
                                        color="primary">
                                      Sign up
                                    </Button>                                
                                </Grid>                            
                            </Grid>

                            <Link
                                to = "/login"
                                variant = "body1"
                                className = {classes.link}
                                >
                                Do you have an account? Sign in.
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