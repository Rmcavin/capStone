import React, { Component } from 'react';
import './App.css';
import 'react-table/react-table.css'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

//components
import Nav from './components/Nav'
import Landing from './components/Landing'
import Gradebook from './components/teacherViews/Gradebook';

class App extends Component {
  constructor(props) {
    super()
    this.state = {user:null, isUser:false, userType:null, teacherAccess: false, studentAccess: false}
    this.logIn = this.logIn.bind(this)
  }

  logIn(user, update,userType) {
    this.setState({user:user, isUser:update, userType:userType})
    if (userType === 'teacher') {
        this.setState({teacherAccess: true})
      }
    else if (userType === 'student') {
        this.setState({studentAccess: true});
      }
    }

    componentDidUpdate() {
      console.log(this.state);
    }

  render() {

    let teacherAccess = this.state.teacherAccess;
    let studentAccess = this.state.studentAccess;

    return (
        <BrowserRouter>
          <div className="App">
            < Nav />
            <Route exact path="/" render={() => <Landing logIn = {this.logIn}/>}/>
            {/*}<Route path ="/gradebook" component= {Gradebook} /> */}
            <Route path='/gradebook' render={(teacherAccess) => (
              teacherAccess ? (
                  <Gradebook user={this.state.user}/>
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
