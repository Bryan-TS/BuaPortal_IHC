import { Grid, Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import Material from './Material'

const useStyles = makeStyles(theme => ({
    sectionContainer:{
        paddingTop: "20px",
        justifyContent: "center"
    }
}));

const Section = () => {
    const classes = useStyles();
    const elements = [1,2,3,4,5,6,7,8,9,10];
    return (                  
        <Container>
            <Grid container spacing = {4}  className = {classes.sectionContainer}>
                {elements.map((value, index) => {
                    let image = "https://picsum.photos/300/200";
                    return(
                        <Grid item key = {index} >
                            <Material image = {image}/>
                        </Grid>
                    )            
                })}                   
            </Grid>
        </Container>                    
    );
};

export default Section;