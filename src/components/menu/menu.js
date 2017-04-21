import React, { Component } from 'react';
import logo from './../../logo.svg';
import './../../App.css';

class Menu extends Component {
  render() {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>Welcome to React</div>
        </div>
    );
  }
}

export default Menu;
