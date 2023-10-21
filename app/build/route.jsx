import React from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Home from '../layout/home/Home';
const Routes = () =>{

    return(
        <>
        <Router>
            <Route path='/' exact Component={Home} />
        </Router>
        </>
    )
}
export default Routes;