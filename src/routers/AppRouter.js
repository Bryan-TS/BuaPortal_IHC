import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "../components/home/Login";
import NavBar from "../components/home/NavBar";
import RegisterUser from "../components/home/RegisterUser";
import DashBoard from "../components/user/DashBoard";
import Home from "../components/home/Home";
import PreguntaCreate from "../components/home/PreguntaCreate";
import PreguntaEdit from "../components/home/PreguntaEdit";

import { useEffect, useState} from "react";
import NavBarUser from "../components/home/NavBarUser";

import { Context } from "./../context/Context";
import Preguntas from "../components/home/Preguntas";
import SearchResults from "../components/user/SearchResults";
import { SearchContext } from "../context/SearchContext";



const AppRouter = () => {

    const [user,setUser] = useState(null);
    const [searchButtonClicked,setSearchButtonClicked] = useState(false);

    useEffect(() => {
        // console.log("Se refresco la aplicación.");
        const userInLocalStorage = localStorage.getItem("user");
        const user = JSON.parse(userInLocalStorage);

        if(user === null){
            console.log("Not logged user yet");
        }else{
            setUser(user);            
        }
    },[]);

    return (
        <Context.Provider value={[user,setUser]}>
            <SearchContext.Provider value = {[searchButtonClicked,setSearchButtonClicked]}>
                <Router>
                    {user !== null ? <NavBarUser/> : <NavBar/>}              
                    {user !== null ? <Redirect to="/user/dashboard"/>: <Redirect to="/"/>}              
                    <Switch>
                        <Route exact path = "/login">
                            <Login user = {user}/>
                        </Route>
                        <Route exact path = "/signup">
                            <RegisterUser/>
                        </Route>
                        <Route exact path = "/user/dashboard">
                            <DashBoard/>
                        </Route>
                        <Route exact path = "/user/pregunta">
                            <PreguntaCreate/>
                        </Route>
                        <Route exact path = "/user/preguntas">
                            <Preguntas/>
                        </Route>
                        <Route exact path = "/user/pregunta/:id">
                            <PreguntaEdit/>
                        </Route>
                        <Route exact path = "/user/search/:searchTerm">
                            <SearchResults/>
                        </Route>
                        <Route exact path = "/">
                            <Home/>                    
                        </Route>
                    </Switch>
                </Router>
            </SearchContext.Provider>
        </Context.Provider>        
    );
};

export default AppRouter;