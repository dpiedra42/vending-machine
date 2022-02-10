import React, {Component} from 'react';
import './Sardines.css';
import Message from './Message';
import { NavLink } from 'react-router-dom';

const sardineLink = "https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif";

class Sardines extends Component {
    render(){
        return (
            <div className='Sardines' style={{ backgroundImage:
                `url(${sardineLink})`
            }}>
                <Message>
                    <h1>Sardines! Yuck!</h1>
                    <NavLink to="/">Take Me Back!</NavLink>
                </Message>
            </div>
        )
    }
}

export default Sardines;