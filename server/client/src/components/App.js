import React,{ Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './Header'
import About from './about/about'
import Customer from './customers/customers'
import Contact from './contact'


const App = () => {
    return (
        <BrowserRouter>
        <div className="container">
            <Header />
            <Route exact path ="/" component={About} />
            <Route exact path = "/customers" component={Customer} />
            <Contact />

        </div>
        </BrowserRouter>
    )
};

export default App;