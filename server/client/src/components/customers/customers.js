import React from 'react';
import {Link } from 'react-router-dom';
import css from './../css/customers.css'
import image from './../images/partner.jpg'
import nike from './../images/nike.jpg';
import vans from './../images/vans.jpg';
import addidas from './../images/addidas.png';

const Customer = () =>{
    let nikes = {
        
        
    }

    return (
        <div>
            <div>
                <img src={image} className="image" />
            </div>

            <div className="boxy">
            <img src={vans} className="logos"/>
                <img src={nike} className="logos" style={nikes}/>
                <img src={addidas} className="logos"/>
            </div>
               

        </div>
    )
}
export default Customer