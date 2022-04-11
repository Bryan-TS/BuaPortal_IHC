import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../components/home/Login";
import NavBar from "../components/home/NavBar";
import RegisterUser from "../components/home/RegisterUser";
import DashBoard from "../components/user/DashBoard";
import Home from "../components/home/Home";
import PreguntasForm from "../components/home/PreguntasForm";

import { useEffect, useState} from "react";
import NavBarUser from "../components/home/NavBarUser";

import { Context } from "./../context/Context";
import Preguntas from "../components/home/Preguntas";

// const UserContext = createContext();

const AppRouter = () => {

    const [user,setUser] = useState(null);

    useEffect(() => {
        console.log("Se refresco la aplicación.");
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
            <Router>
                {user !== null ? <NavBarUser/> : <NavBar/>}              
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
                        <PreguntasForm/>
                    </Route>
                    <Route exact path = "/user/preguntas">
                        <Preguntas/>
                    </Route>
                    <Route exact path = "/">
                        <Home/>                    
                    </Route>
                </Switch>
            </Router>
        </Context.Provider>        
    );
};

export default AppRouter;