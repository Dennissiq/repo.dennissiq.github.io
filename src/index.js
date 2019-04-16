import React from 'react';
import ReactDOM from 'react-dom';
import { LocalizeProvider } from "react-localize-redux";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import App from './App';
import Project from './components/Pages/Project'

ReactDOM.render(
    <LocalizeProvider>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}></Route>
                <Route path="/project/:name" exact component={Project}></Route>
                <App/>  
            </Switch>
        </BrowserRouter>
    </LocalizeProvider>
, document.getElementById('root'));

