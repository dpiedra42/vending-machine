import React, {Component} from 'react';
import './Sardines.css';
import { NavLink } from 'react-router-dom';

class Sardines extends Component {
    render(){
        return (
            <div className='Sardines' style={{ backgroundImage:
                "url(https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif)"
            }}>
                <h1>Sardines! Yuck!</h1>
                <NavLink to="/">Take Me Back!</NavLink>
            </div>
        )
    }
}

export default Sardines;