import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message';
import './VendingMachine.css';
import vendingMachineImg from './VendingMachine.png'

class VendingMachine extends Component {
    render(){
        return (
            <div className="VendingMachine" style={{ backgroundImage: `url(${vendingMachineImg})`}}>
                <Message>
                    <h1>Hello! I am a Vending Machine! Choose a snack.</h1>
                </Message>
                <Message>
                    <NavLink to="/soda">
                        Soda 
                    </NavLink>
                    <NavLink to="/chips">
                        Chips
                    </NavLink>
                    <NavLink to="/sardines">
                        Sardines
                    </NavLink>
                </Message>
            </div>
        )
    }
}

export default VendingMachine;