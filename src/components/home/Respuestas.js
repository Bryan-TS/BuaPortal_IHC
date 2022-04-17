import { Container, Grid, Card, Avatar } from '@material-ui/core';
import { CardContent, CardHeader } from '@material-ui/core';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { grey } from '@material-ui/core/colors';

import { useForm, Controller } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import Theme from '../../styles/Theme';
import Respuesta from './Respuesta';

const endpoint = 'http://localhost/BuaPortal/BackEnd/BuaPortal_API/public/api/question'

const PreguntasForm = () => {
    
    const {handleSubmit, control} = useForm();
    const history = useHistory();

    const store = async (data) => {
        const response = await axios.post(endpoint,data);
        if(response.status === 200){
         
        
            setTimeout(() => {
                
                history.push("/user/preguntas");
            },3000);

            
        }
    };



    const classes = useStyles();
    return (
        <Container className = {classes.container}>
            <Grid container justifyContent = "center">
                <Grid item xs={12} sm={12}>
                    <Card>
                        <CardHeader
                            className = {classes.cardHeader}
                            avatar = {
                                <Avatar className = {classes.avatarBallotIcon}>
                                    <QuestionAnswerIcon/>
                                </Avatar>
                            }
                            titleTypographyProps = {
                               {
                                   variant: "h6"
                               }
                            }
                            title = "Respuestas"
                        />
                        <CardContent display = "inline-flex">  
                            <Grid container  spacing = {2}>                        
                                    <Respuesta id = {1}/> 
                                    <Respuesta id = {2}/>
                            </Grid>
                        </CardContent>
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
    },
    cardHeader:{
        backgroundColor: grey[900],
        color: "white"
    }
}));

export default PreguntasForm;