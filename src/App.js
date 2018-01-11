import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

//components
import Nav from './components/Nav'
import Landing from './components/Landing'
import Gradebook from './components/teacherViews/Gradebook';

class App extends Component {
  constructor(props) {
    super()
    this.state = {isUser:false, userType:null}
    this.logIn = this.logIn.bind(this)
  }

  logIn(update,userType) {
    this.setState({isUser:update, userType:userType})
  }


  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    let verify = this.state.isUser;

    return (
        <BrowserRouter>
          <div className="App">
            < Nav />
            <Route exact path="/" render={() => <Landing logIn = {this.logIn}/>}/>
            {/*}<Route path ="/gradebook" component= {Gradebook} /> */}
            <Route path='/gradebook' render={(verify) => (
              verify ? (
                  <Gradebook />
              ) : (
                <Redirect to='/' />
              )
            )} />


          </div>
        </BrowserRouter>
    );
  }
}

export default App;
