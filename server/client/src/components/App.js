import React,{ Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './Header'

const App = () => {
    return (
        <BrowserRouter>
        <div>
            <Header />
        </div>
        </BrowserRouter>
    )
};

export default App;