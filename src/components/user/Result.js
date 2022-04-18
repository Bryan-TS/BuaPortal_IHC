import { Avatar, Button, Card, CardContent, CardHeader, Container, Grid, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import GroupIcon from '@material-ui/icons/Group';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core';
import { amber, blue, green, grey } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
    container:{
        marginTop: "10px"
    },
    avatarAssignmentIcon:{
        backgroundColor: blue[500]   
    },
    avatarMailIcon:{
        backgroundColor: amber[500]   
    },
    avatarBallotIcon:{
        backgroundColor: green[500]           
    },
    circleProgress:{
        backgroundColor: grey[50],
        color: "black"        
    },
    cardHeader:{
        backgroundColor: grey[900],
        color: "white"
    }
}));

const Result = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={4}>    
            <Card>
                <CardHeader
                    className = {classes.cardHeader}
                    avatar = {
                        <Avatar >
                            <InfoIcon/>
                        </Avatar>
                        
                    }
                    titleTypographyProps = {
                    {
                        variant: "h6"
                    }
                    }
                    title = "Tema 1"
                    
                />
                <CardContent>
                    <Typography variant="body1" color="initial"><b>Descripción 1</b></Typography>                                            
                </CardContent>
            </Card>
        </Grid>      
    );
};

export default Result;