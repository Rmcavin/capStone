import React, { Component } from 'react';
import './App.css';
//components
import Nav from './components/Nav'
import Landing from './components/Landing'

class App extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div className="App">
        < Nav />
        < Landing />
      </div>
    );
  }
}

export default App;
