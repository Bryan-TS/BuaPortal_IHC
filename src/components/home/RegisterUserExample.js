import { Container, Grid, Card, Avatar, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import { useForm, Controller } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';


import Theme from '../../styles/Theme';

const RegisterUser = () => {
    const {handleSubmit, control} = useForm();

    const onSubmit = data => {
        // console.log(data);
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
                        <form className = {classes.form} onSubmit = {handleSubmit(onSubmit)}>
                            <Grid container spacing = {2}>
                                <Grid item xs = {6} className = {classes.gridmb}>
                                <Controller
                                    name="firstName"
                                    control={control}
                                    defaultValue=""
                                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                        label="First Name"
                                        variant="filled"
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                    />
                                    )}
                                    rules={{ required: 'First name required' }}
                                />                          
                                </Grid>

                            
                                <Grid item xs = {12} className = {classes.gridmb}>
                                    <Button 
                                        type = "submit"
                                        variant="contained" 
                                        fullWidth
                                        color="primary">
                                      Registrar
                                    </Button>                                
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