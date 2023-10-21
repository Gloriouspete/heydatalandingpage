'use client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import './fonts/font.css';
import Home from './layout/home/Home';
import Login from './build/login/login';
import Signup from './build/signup/signup';
import Hosthall from './layout/hosthall/hosthall'
import Joinhall from './layout/joinhall/joinhall';

const App =() => {
  return (
    <>
      <Router>
        <Routes >
          <Route path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          
        </Routes>
      </Router>

    </>
  );
}

export default App;
