import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../components/home/Login";
import NavBar from "../components/home/NavBar";
import RegisterUser from "../components/home/RegisterUser";
import DashBoard from "../components/user/DashBoard";
import Home from "../components/home/Home";

import UserContext from "../context/UserContext";

import { useState, createContext } from "react";
import NavBarUser from "../components/home/NavBarUser";

import { Context } from "./../context/Context";

// const UserContext = createContext();

const AppRouter = () => {

    const [user,setUser] = useState(null);

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
                    <Route exact path = "/">
                        <Home/>                    
                    </Route>
                </Switch>
            </Router>
        </Context.Provider>        
    );
};

export default AppRouter;