import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Header extends Component {
    render(){
        return(
            <nav>
                <div className="nav-wrapper color-blue">
                    <ul className="right">
                        <li><a href="/">About Us</a></li>
                        <li><a href="/wedo">What We Do</a></li>
                        <li><a href="/clients">Our Clients</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Header;