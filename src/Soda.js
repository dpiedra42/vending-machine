import './Soda.css';
import { NavLink } from 'react-router-dom';
import sodaImg from './Soda.png';
import React, {Component} from 'react';

class Soda extends Component {
    render(){
        return (
            <div className='Soda'>
                <img src={sodaImg} alt='coca cola can' />
                <div>
                    <h1>SODAAAA IS MY FAVORITEEEEE!</h1>
                    <p>But now I only drink water...</p>
                    <p>I miss Soda...</p>
                </div>
                <img src={sodaImg} alt='coca cola can' />
                <NavLink activeClassName="active" to="/">
                    I Want A Snack With My Soda
                </NavLink>
            </div>
        )
    }
}

export default Soda;