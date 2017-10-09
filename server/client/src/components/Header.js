import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Header extends Component {
    render(){
        return(
            <nav>
                <div className="nav-wrapper color-blue">
                    <ul className="right">
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>Our Clients</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Header;