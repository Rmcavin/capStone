import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class AddStudent extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.addStudent = this.addStudent.bind(this);
    this.state = {firstname: null, lastname: null, grade: null, username:null, password: null, error: null, message: null};
  }

  componentDidUpdate() {
    //console.log('updated addstudent state',this.state);
  }

  handleChange(event) {
    this.setState({[event.target.name]:event.target.value});
  }

  addStudent(event) {
    event.preventDefault()
    axios({
      method: 'post',
      url: '/students/new',
      data: {firstname: this.state.firstname, lastname: this.state.lastname, grade: this.state.grade, username:this.state.username, password: this.state.password, class_id: this.props.currentClass}
    })
    .then( (res) => {
      if (res.data.username) {
        this.props.newStudent(res)
        this.setState({error: null})
        this.setState({message: 'Success'})
      }
      else {
        this.setState({error: 'Invalid Entry'})
      }
    })
  }

  render() {

    //styles
    const styles = StyleSheet.create({
      form : {
        padding: 20,
        margin: 'auto'
      },
      label : {
        display: 'block'
      },
      input : {
        display: 'inline'
      },
      submit : {
        backgroundColor: '#2b506e',
        padding: 5,
        color: 'white',
        margin: 5,
        display: 'inline'
      },
      close : {
        backgroundColor: '#2b506e',
        padding: 5,
        color: 'white',
        margin: 5,
        display: 'inline'
      }
    });

    return (
      <form className = {css(styles.form)} onSubmit = {this.addStudent}>
        <label className = {css(styles.label)}>Student First Name: </label>
        <input type="text" name="firstname" onChange={this.handleChange} className = {css(styles.input)} required></input>
        <label className = {css(styles.label)}>Student Last Name: </label>
        <input type="text" name="lastname" onChange={this.handleChange} className = {css(styles.input)} required></input>
        <label className = {css(styles.label)}>Student Grade Level: </label>
        <input type="text" name="grade" onChange={this.handleChange} className = {css(styles.input)} required></input>
        <label className = {css(styles.label)}>Student Username: </label>
        <input type="text" name="username" onChange={this.handleChange} className = {css(styles.input)} required></input>
        <label className = {css(styles.label)}>Student Password: </label>
        <input type="text" name="password" onChange={this.handleChange} className = {css(styles.input)} required></input>
        <div>
          <input type="submit" className = {css(styles.submit)}></input>
          <button className = {css(styles.close)} onClick={this.props.addStudentToggle}>Cancel</button>
          {this.state.error} {this.state.message}
        </div>
      </form>
    )
  }
}

export default AddStudent;
