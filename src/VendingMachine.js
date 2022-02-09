import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './VendingMachine.css';
import vendingMachineImg from './VendingMachine.png'

class VendingMachine extends Component {
    render(){
        return (
            <div className="VendingMachine" style={{ backgroundImage: `url(${vendingMachineImg})`}}>
                <h1>Hello! I am a Vending Machine! Choose a snack.</h1>
                <NavLink to="/soda">
                    Soda
                </NavLink>
                <NavLink to="/chips">
                    Chips
                </NavLink>
                <NavLink to="/sardines">
                    Sardines
                </NavLink>
            </div>
        )
    }
}

export default VendingMachine;