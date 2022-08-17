import './App.css';
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "./Pages/MainPage/Main";
import Quiz from "./Pages/Quiz/Quiz";

function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/Main"/>
                </Route>
                <Route exact path="/Main" component={Main}/>

            </Switch>
        </>
    );
}

export default App;
