import React from 'react';
import css from './css/landing.css'
import * as everything from './css/landing.css'
import background from './images/computer.jpg'

const Landing = () => {
    let redText = {
        color: "red",
       
    }
  

    return (
        <div>
            <div style={{backgroundImage: "url(" +background+")"}}>
                <div class="container">
                <div class="intro-text">
                <div class="intro-lead-in">Welcome To Our Studio!</div>
                <div class="intro-heading">It's Nice To Meet You</div>
                <a href="#services" class="page-scroll btn btn-primary">Tell Me More</a></div>
            </div>
    </div>
        </div>
    )
}
export default Landing
