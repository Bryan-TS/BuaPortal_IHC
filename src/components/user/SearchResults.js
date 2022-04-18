import { Avatar, Button, Card, CardActionArea, CardContent, CardHeader, Container, Grid, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import GroupIcon from '@material-ui/icons/Group';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core';
import { amber, blue, green, grey } from '@material-ui/core/colors';
import Result from './Result';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';
import axios from 'axios';

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

const endpoint = 'http://localhost/BuaPortal/BackEnd/BuaPortal_API/public/api/questionsBySearching';

const SearchResults = () => {

    const [searchButtonClicked,setSearchButtonClicked] = useContext(SearchContext);
    const [results, setResults] = useState([]);
    const {searchTerm} = useParams();

    

    useEffect(() => {
        const getResults = async() => {            
            const response = await axios.get(`${endpoint}/${searchTerm}`);
            setResults(response.data);                                                
        }
        getResults();
        console.log(`Peticion: ${endpoint}/${encodeURIComponent(searchTerm)}`);
        console.log(results);


        // setSearchButtonClicked(false);
    },[searchButtonClicked]);

    const classes = useStyles();
    return (
        <Container className = {classes.container}>
            <Grid container  spacing = {2}>
            <Grid item xs={6}>
                <Link to = "/user/pregunta" style = {{textDecoration: "none"}}>
                    <Button 
                        type = "submit"
                        variant="contained" 
                        fullWidth
                        color="primary">
                        Crear Pregunta
                    </Button> 
                </Link>
            </Grid>

            <Grid item xs={6}>
                <Link to = "/user/preguntas" style = {{textDecoration: "none"}}>
                    <Button 
                        type = "submit"
                        variant="contained" 
                        fullWidth
                        color="primary">
                        Ver mis preguntas
                    </Button> 
                </Link>
            </Grid>

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
                            title = "Resultados"
                        />
                        <CardContent display = "inline-flex">  
                            <Grid container  spacing = {2}>
                                {
                                results.length > 0 ? (results.map(result => (
                                        <Grid item xs={12} key = {result.id}>    
                                            <CardActionArea>
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
                                                    title = {result.title}
                                                    
                                                />
                                                <CardContent>
                                                    <Typography variant="body1" color="initial"><b>Descripción 1</b></Typography>                                                                                            
                                                </CardContent>                                        
                                            </CardActionArea>
                                        </Grid>   
                                    ))) : (
                                        <Grid container justifyContent = "center">
                                            <Typography variant = "h5">
                                                No hay resultados
                                            </Typography>
                                        </Grid>
                                    )
                                }

                                {/* <Result/>                                                                                                                           */}
                            </Grid>
                        </CardContent>
                    </Card>

                    
                </Grid>

                
            </Grid>        
        </Container>       
    );
};

export default SearchResults;