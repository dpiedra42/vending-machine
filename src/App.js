import './App.css';
import React, {Component} from 'react';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Sardines from './Sardines';
import Soda from './Soda';
import Navbar from './Navbar';
import {Routes, Route} from 'react-router-dom';

//npm install react-router-dom and wrap app in index with router tag

class App extends Component {
  render(){
    return (
      <div className='App'>
        <Navbar />
        <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/sardines" element={<Sardines />} />
        <Route path="/soda" element={<Soda />} />
        </Routes>
      </div>
    )
  }
}

export default App;
