import React from 'react';
import {Link } from 'react-router-dom';
import background from '../images/production.jpg'
import css from '../css/landing.css'

const Landing = () => {
    return(
        <div className="container">
            <div><img className="topimage" src={background}/></div>
            <h3 style={{textAlign:'center'}}>About us</h3>
            <p className="container">loCulpa incididunt nostrud excepteur duis ex voluptate magna.Id sit laborum eiusmod ut enim anim fugiat dolore deserunt. Commodo dolore voluptate aliqua sint id laborum cillum laborum quis elit. Adipisicing aute enim est laboris in laborum qui est qui minim voluptate ea ex cillum. Irure et magna velit adipisicing enim tempor. Aliquip minim duis ullamco ipsum nulla velit duis proident exercitation esse commodo.</p>
        </div>
    )
} 
export default Landing