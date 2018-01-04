import React, { Component } from 'react';
import './App.css';
//components
import Nav from './components/Nav'
import SignIn from './components/Signin'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <SignIn />
      </div>
    );
  }
}

export default App;
