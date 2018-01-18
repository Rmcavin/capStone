import React, { Component } from 'react';
import './App.css';
import 'react-table/react-table.css'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

//components
import Nav from './components/Nav'
import Landing from './components/Landing'
import Gradebook from './components/teacherViews/Gradebook';
import Roster from './components/teacherViews/Roster'
import Assignments from './components/teacherViews/Assignments'
import Dashboard from './components/studentViews/Dashboard'

class App extends Component {
  constructor(props) {
    super()
    this.state = {user:null, isUser:false, userType:null, teacherAccess: false, studentAccess: false}
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  logIn(user,update,userType) {
    this.setState({user:user, isUser:update, userType:userType})
    if (userType === 'teacher') {
        this.setState({teacherAccess: true})
      }
    else if (userType === 'student') {
        this.setState({studentAccess: true});
      }
    }

    logOut() {
      this.setState({user:null, isUser:null, userType:null, teacherAccess: false, studentAccess: false})
    }

    componentDidUpdate() {
      //console.log(this.state);
    }

  render() {

    let teacherAccess = this.state.teacherAccess;
    let studentAccess = this.state.studentAccess;

    return (
        <BrowserRouter>
          <div className="App">
            < Nav isUser = {this.state.isUser} userType = {this.state.userType} logOut = {this.logOut}/>
            <Route exact path="/" render={() => <Landing logIn = {this.logIn}/>}/>
            {/*conditional routing to gradebook*/}
            <Route path='/gradebook' render={(teacherAccess) => (
              teacherAccess ? (
                  <Gradebook user={this.state.user}/>
              ) : (
                <Redirect to='/' />
              )
            )} />
            {/*conditional routing to class management*/}
            <Route path='/roster' render={(teacherAccess) => (
              teacherAccess ? (
                  <Roster user={this.state.user}/>
              ) : (
                <Redirect to='/' />
              )
            )} />
            {/*conditional routing to assignment management*/}
            <Route path='/assignments' render={(teacherAccess) => (
              teacherAccess ? (
                  <Assignments user={this.state.user}/>
              ) : (
                <Redirect to='/' />
              )
            )} />

            <Route path='/dashboard' render={(studentAccess) => (
              studentAccess ? (
                  <Dashboard user={this.state.user}/>
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
