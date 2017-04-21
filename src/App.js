import React, { Component } from 'react';
import Menu from './components/menu/menu'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu></Menu>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
