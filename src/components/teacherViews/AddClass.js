import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';

class AddClass extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {classname: null, subject: null};
  }

  handleChange(event) {
    this.setState({[event.target.name]:event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault()
    let body = {teacher_id: this.props.user.id, classname: this.state.classname, subject: this.state.subject}

    // axios({
    //   method: 'post',
    //   url: '/assignments/new',
    //   data: body
    // })
    // .then( (res) => {
    //   console.log(res);
    //   if (res.data.assignmentname) {
    //     this.props.newAssignment(res.data)
    //     this.setState({error: null})
    //     this.setState({message: 'Success'})
    //   }
    //   else {
    //     this.setState({error: 'Invalid Entry'})
    //   }
    // })
  }



  render() {
    console.log('addclass props', this.props);

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
      <label className={css(styles.label)}>Class Name:</label>
      <input type="text" name="classname" onChange={this.handleChange} className={css(styles.input)}/>
      <label className={css(styles.label)}>Subject:</label>
      <select name="subject" onChange={this.handleChange} className={css(styles.input)}>
        <option value='science'>Science</option>
        <option value='mathematics'>Mathematics</option>
        <option value='languageArts'>Language Arts</option>
        <option value='socialStudies'>Social Studies</option>
        <option value='Music'>Music</option>
        <option value='Art'>Art</option>
        <option value='PE'>Physical Education</option>
      </select>
      <div>
        <input type="submit" className={css(styles.submit)}/>
        <button className={css(styles.close)} onClick={this.props.toggle}>Cancel</button>
      </div>
      </form>
    )
}
}

export default AddClass;
