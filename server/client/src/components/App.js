import React,{ Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'


const App = () => {
    return (
        <BrowserRouter>
        <div>
            {/* <Header /> */}
            Hi There!
        </div>
        </BrowserRouter>
    )
};

export default App;