import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from '@material-ui/core';
import Login from "../components/home/Login";
import NavBar from "../components/home/NavBar";
import OverView from "../components/home/OverView";
import RegisterUser from "../components/home/RegisterUser";
import DashBoard from "../components/user/DashBoard";
import Home from "../components/home/Home";
import MediaCard from "../components/MediaCard";
import PreguntasIMG from "../../src/assets/img/Preguntas.png"


const AppRouter = () => {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path = "/login">
                    <Login/>
                </Route>
                <Route exact path = "/signup">
                    <RegisterUser/>
                </Route>
                <Route exact path = "/user/dashboard">
                    <DashBoard/>
                </Route>
                <Route exact path = "/">
                    <Home/>
                    {/* <OverView/>
                    <Grid container justifyContent =  "center">

                        <Grid item>
                            <MediaCard titulo = "Preguntas" imagen = {PreguntasIMG}/>
                        </Grid>

                        <Grid item>
                            <MediaCard titulo = "Grupos" imagen = {GruposIMG}/>
                        </Grid>                        
                    </Grid> */}
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;