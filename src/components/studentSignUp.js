import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';

class StudentSignUp extends Component {

  render() {
    //styles
    const styles = StyleSheet.create({
      div : {
        textAlign: 'center',
        margin: 5
      }
    });
    return (
      <div className = {css(styles.div)}>Please log in using username and password provided by your teacher.</div>
    )}
}

export default StudentSignUp;
