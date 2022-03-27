import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import MediaCard from "../MediaCard";
import PreguntasIMG from "../../assets/img/Preguntas.png"
import GruposIMG from "../../assets/img/Grupos.png"
import OverView from './OverView';

const useStyles = makeStyles(theme => ({
    sectionContainer:{
        display: "flex",
        paddingTop: "40px",
        justifyContent: "center"
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <OverView/>     
            <Container>
                <Grid container spacing = {4}  className = {classes.sectionContainer}>
                    <Grid item md={12}>
                        <MediaCard titulo = "Preguntas" imagen = {PreguntasIMG} descripcion = "Sientete libre de preguntar a la comunidad todas tus dudas. O si eres un experto en algun tema, demuestra tus conocimientos y apoya a algun compañero."/>
                    </Grid>
                    <Grid item md={12}>
                        <MediaCard titulo = "Grupos" imagen = {GruposIMG} descripcion = "Encuentra a personas con tus mismos intereses. Realiza tus propios grupos o integrate a alguno y haz lo que mas te gusta."/>
                    </Grid>
                        
                </Grid>
            </Container>            
        </>
    );
};

export default Home;