import React from 'react';
import { Typography,CssBaseline, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    footerContainer: {
        backgroundColor: "black",
        marginTop: "30px",
        color: "white",
        paddingTop: "10px",
        paddingBottom: "10px"         
    }
}));

const Footer = () => {
    const year = new Date().getFullYear();
    const classes = useStyles();
    return (   
        <>
            <CssBaseline/>                          
            <Box className = {classes.footerContainer}>
                <Typography variant="h6" align = "center" color="initial">
                    Copyright © {year}
                </Typography>   
            </Box>
            {/* <footer className = {classes.footerContainer}>
                <Typography variant="h6" align = "center" color="initial">
                    Copyright © {year}
                </Typography>
            </footer> */}
        </>
    );
};

export default Footer;