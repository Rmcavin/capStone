import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';

class Addassignment extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {assignmentname: null, assignmenttype: 'exercise'};
  }

  handleChange(event) {
    this.setState({[event.target.name]:event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault()
    let body = {teacher_id: this.props.user[0].id, assignmentname: this.state.assignmentname, assignmenttype: this.state.assignmenttype}
    console.log('the data', body);
    axios({
      method: 'post',
      url: '/assignments/new',
      data: body
    })
    .then( (res) => {
      console.log(res);
      if (res.data.assignmentname) {
        this.props.newAssignment(res.data)
        this.setState({error: null})
        this.setState({message: 'Success'})
      }
      else {
        this.setState({error: 'Invalid Entry'})
      }
    })
  }



  render() {
    console.log('addAssignment props', this.props);

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
      <form onSubmit={this.handleSubmit}>
      <label className={css(styles.label)}>Assignment Name:</label>
      <input type="text" name="assignmentname" onChange={this.handleChange} className={css(styles.input)}/>
      <label className={css(styles.label)}>Assignment Type:</label>
      <select name="assignmenttype" onChange={this.handleChange} className={css(styles.input)}>
        <option value='exercise'>Exercise</option>
        <option value='assessment'>Assessment</option>
        <option value='rubric'>Rubric</option>
      </select>
      <div>
        <input type="submit" className={css(styles.submit)}/>
        <button className={css(styles.close)} onClick={this.props.toggle}>Cancel</button>
      </div>
      </form>
    )
}
}

export default Addassignment;
