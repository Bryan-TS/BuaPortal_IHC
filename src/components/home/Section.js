import { Grid, Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import Material from './Material'

const useStyles = makeStyles(theme => ({
    sectionContainer:{
        display: "flex",
        paddingTop: "40px",
        justifyContent: "center"
    }
}));

const Section = (props) => {
    const classes = useStyles();
    const elements = [1,2,3,4,5,6,7,8,9,10];
    let image = "https://picsum.photos/300/200";
    return (                  
        <Container>
            <Grid container spacing = {4}  className = {classes.sectionContainer}>
                <Material image = {image} titulo = {props.titulo}/>

                {/* {elements.map((value, index) => {
                    let image = "https://picsum.photos/300/200";
                    return(
                        <Grid item key = {index} >
                            <Material image = {image} titulo = {props.titulo}/>
                        </Grid>
                    )            
                })}                    */}
            </Grid>
        </Container>                    
    );
};

export default Section;