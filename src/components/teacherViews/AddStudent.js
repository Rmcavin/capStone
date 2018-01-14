import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class AddStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {student:null};
  }

  componentDidUpdate() {
    console.log('updated gradebook state',this.state);
  }

  render() {

    //styles
    const styles = StyleSheet.create({

    });

    return (
      <div>hello</div>
    )
}
}

export default AddStudent;
