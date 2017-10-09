import React,{ Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './Header'
import Landing from './Landing'

const App = () => {
    return (
        <BrowserRouter>
        <div>
            <Header />
            <Landing />
        </div>
        </BrowserRouter>
    )
};

export default App;