import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Redirect} from 'react-router-dom';

class Gradebook extends Component {
  constructor(props) {
    super(props)
    this.state = {user:null};
  }

  render() {
    console.log('I AM THE GRADEBOOK');
    //styles
    const styles = StyleSheet.create({

    });

    return (
      <div> hello! I'm a gradebook!</div>
    )
  }
}

export default Gradebook;
