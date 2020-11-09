import React, { Component } from "react";
import './App.css'
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import Blog from "./Components/Blog/Blog";
import BlogPage from "./Components/BlogPage/BlogPage";
import Home from "./Home"
import Help from './Components/Help/Help'
import Shop from './Components/Shop/Shop'

const App = () => {

    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
                <Route path="/" exact component={Home}/>
                <Route path="/blog" exact component={Blog}/>
                <Route path="/blog/:path" exact component={BlogPage}/> 
                <Route path="/help" exact component={Help}/>
                <Route path="/shop" exact component={Shop}/>
            </Switch>
        </AnimatePresence>
    )
}

export default App