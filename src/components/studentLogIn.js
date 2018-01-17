import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class StudentLogIn extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {studentUserName: null, studentPassWord: null, user: null, error: ''};
  }

  handleSubmit(event) {
    event.preventDefault()
    let username = this.state.studentUserName;
    let password = this.state.studentPassWord;
    //log in
    axios({
      method: 'post',
      url: '/students/login',
      data: {username: username, password: password}
    })
    .then( (res) => {
      if (res.data !== 'invalid login credentials' && res.data !== 'User not found.' ) {
        this.setState({user:res.data, error: ''})
        this.props.logIn(res.data, true,'student')
      } else {
        this.setState({error: res.data, studentUserName: null, studentPassWord: null})
      }
    })
    .catch( (err) => {
      console.error(err)
    })
  }

  handleChange(event) {
    this.setState( { [event.target.name]:event.target.value});
  }

  componentDidUpdate() {
    //console.log(this.state);
  }

  render() {

    if (this.state.user) {
      return <Redirect from='/' to='dashboard' />
    }

    //styles
    const styles = StyleSheet.create({
      label : {
        margin: 5,
        width: '100%'
      },
      input : {
        margin: 5,
        width: '100%'
      },
      submit : {
        backgroundColor: '#2b506e',
        padding: 5,
        color: 'white',
        margin: 5
      },
      form : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%'
      },
      error: {
        color: 'red',
        textAlign: 'center'
      }
    });

    return (
      <form className={css(styles.form)} onSubmit = {this.handleSubmit}>
        <label className={css(styles.label)}>Student Username: </label>
        <input type='text' name='studentUserName'  onChange={this.handleChange} className={css(styles.input)} />
        <label className={css(styles.label)}>Student Password: </label>
        <input type='password' name='studentPassWord' onChange={this.handleChange} className={css(styles.input)} />
        <input type='submit' className={css(styles.submit)} />
        <div className={css(styles.error)}>{this.state.error}</div>
      </form>
    )

  }
}

export default StudentLogIn;
