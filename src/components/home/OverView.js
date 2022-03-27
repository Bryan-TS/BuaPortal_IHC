import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    overviewContainer: {
        marginTop: "20px"
    }
}));

const OverView = () => {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth = "sm" className = {classes.overviewContainer}>
                <Typography variant = "h2" align = "center" color = "textPrimary" gutterBottom>
                ¡Bienvenido!
                </Typography>
                <Typography variant = "h5" align = "center" color = "textSecondary">
                Bienvenido a Buaportal, la plataforma de apoyo educativo. Somos una comunidad colaborativa que busca promover el conocimiento mediante la resolución de dudas. 
                </Typography>
            </Container>           
        </>
    );
};

export default OverView;