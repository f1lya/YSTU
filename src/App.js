import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Portfolio from "./components/Portfolio/Portfolio";
import Events from "./components/Events/Events";
import Vacancies from "./components/Vacancies/Vacancies";
import Login from "./components/Login/Login";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <div className="header">
                    <Header store={props.store} history={history}/>
                </div>
                <div className="content">
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/'>
                        <Profile/>
                    </Route>
                    <Route exact path='/portfolio' component={Portfolio}/>
                    <Route exact path='/events' component={Events}/>
                    <Route exact path='/vacancies' component={Vacancies}/>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

