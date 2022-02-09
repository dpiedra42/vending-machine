import React, {Component} from 'react';
import './VendingMachine.css';
import vendingMachineImg from './VendingMachine.png'

class VendingMachine extends Component {
    render(){
        return (
            <div className="VendingMachine" style={{ backgroundImage: `url(${vendingMachineImg})`}}>
                <h1>Hello! I am a Vending Machine! Choose a snack.</h1>
            </div>
        )
    }
}

export default VendingMachine;