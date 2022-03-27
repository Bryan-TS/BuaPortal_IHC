import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../components/home/Login";
import NavBar from "../components/home/NavBar";
import OverView from "../components/home/OverView";
import RegisterUser from "../components/home/RegisterUser";
import Section from "../components/home/Section";
import DashBoard from "../components/user/DashBoard";

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
                    <OverView/>
                    <Section/>
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;