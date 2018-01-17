import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Redirect} from 'react-router-dom';
import axios from 'axios';


class TeacherLogIn extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {teacherUserName: null, teacherPassWord: null, user: null, error: ''}
  }

  componentDidUpdate() {
    //console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault()
    let username = this.state.teacherUserName;
    let password = this.state.teacherPassWord;
    //log in
    axios({
      method: 'post',
      url: '/teachers/login',
      data: {username: username, password: password}
    })
    .then( (res) => {
      if (res.data !== 'invalid login credentials' && res.data !== 'User not found.' ) {
        this.setState({user:res.data, error: ''})
        this.props.logIn(res.data, true,'teacher')
      } else {
        this.setState({error: res.data, teacherUserName: null, teacherPassWord: null})
      }
    })
    .catch( (err) => {
      console.error(err)
    })
  }

  handleChange(event) {
    this.setState({ [event.target.name]:event.target.value});
  }

  render() {
    if (this.state.user) {
      return <Redirect to='/gradebook'/>
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
      div : {
        textAlign: 'center',
        margin: 5
      },
      error: {
        color: 'red',
        textAlign: 'center'
      }
    });

    return (
      <form className={css(styles.form)} onSubmit = {this.handleSubmit}>
        <label className={css(styles.label)}>Teacher Username: </label>
        <input type='text' name='teacherUserName' onChange={this.handleChange} className={css(styles.input)} />
        <label className={css(styles.label)}>Teacher Password: </label>
        <input type='password' name='teacherPassWord' onChange={this.handleChange} className={css(styles.input)} />
        <input type='submit' className={css(styles.submit)} />
        <div className={css(styles.error)}>{this.state.error}</div>
      </form>
    )
  }
}

export default TeacherLogIn;
