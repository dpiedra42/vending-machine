import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <NavLink activeclassname='active' to='/'>Home</NavLink>
                <NavLink activeclassname='active' to='/chips'>Chips</NavLink>
                <NavLink activeclassname='active' to='/soda'>Soda</NavLink>
                <NavLink activeclassname='active' to='/sardines'>Sardines</NavLink>
            </div>
        )
    }
}

export default Navbar;