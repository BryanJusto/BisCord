import React, { Component } from 'react';
import './App.css';
import Chat from './Chat';
import Signin from './Signin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signin />
      </div>
    )
  }
}

export default App
