import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class TeacherSignUp extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {teacherUserName: null, teacherPassWord: null, teacherFirstName: null, teacherLastName:null, teacherTitle:'none', user: null, error: ''}
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault()
    let username = this.state.teacherUserName;
    let password = this.state.teacherPassWord;
    let firstname = this.state.teacherFirstName;
    let lastname = this.state.teacherLastName;
    let title = this.state.teacherTitle;

    axios({
      method: 'post',
      url: 'http://localhost:8000/teachers/register',
      data: {username: username, password:password, firstname:firstname, lastname:lastname, title:title}
    })
    .then( (res) => {
      console.log(res);
      if (res.data != 'incorrect input information' && res.data != 'invalid registration') {
        this.setState({user:res.data, error: ''})
      } else {
        this.setState({error: 'Invalid registration', teacherUserName: null, teacherPassWord: null, teacherFirstName: null, teacherLastName: null, teacherTitle: 'none'})
      }
    })
    .catch( (err) => {
      this.setState({error: 'Invalid registration', teacherUserName: null, teacherPassWord: null, teacherFirstName: null, teacherLastName: null, teacherTitle: 'none'})
    })
  }

  handleChange(event) {
    this.setState({ [event.target.name]:event.target.value});
  }

  render() {
    if (this.state.user) {
      return <Redirect from='/' to={{
        pathname:'gradebook',
        state: {user:this.state.user}
      }} />
    }
    //styles
    const styles = StyleSheet.create({
      label : {
        margin: 5,
        width: '100%'
      },
      select : {
        margin: 5,
        width: '50%'
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
        <input type='text' name='teacherUserName'  onChange={this.handleChange} className={css(styles.input)} />
        <label className={css(styles.label)}>Teacher Password: </label>
        <input type='password' name='teacherPassWord'  onChange={this.handleChange} className={css(styles.input)} />
        <label className={css(styles.label)}>Teacher Title: </label>
        <select name='teacherTitle' value={this.state.teacherTitle} onChange={this.handleChange} className={css(styles.select)}>
          <option value="none"></option>
          <option value="Ms.">Ms.</option>
          <option value="Mrs.">Mrs.</option>
          <option value="Miss">Miss</option>
          <option value="Mr.">Mr.</option>
          <option value="Dr.">Dr.</option>
        </select>
        <label className={css(styles.label)}>Teacher First Name: </label>
        <input type='text' name='teacherFirstName'  onChange={this.handleChange} className={css(styles.input)} />
        <label className={css(styles.label)}>Teacher Last Name: </label>
        <input type='text' name='teacherLastName'  onChange={this.handleChange} className={css(styles.input)} />
        <input type='submit' className={css(styles.submit)} />
        <div className={css(styles.error)}>{this.state.error}</div>
      </form>
    )
  }
}

export default TeacherSignUp;
