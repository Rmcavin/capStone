import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Addassignment extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }


  render() {

    //styles
    const styles = StyleSheet.create({
      section : {
        margin: 'auto',
        marginTop: 50,
        width: '80%',
        padding: 10,
        minHeight: 500,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'none',
        justifyContent: 'flex-start',
        alignContent: 'center',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
      },
      dropDown : {
        width: '50%'
      },
      toolBar : {
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'none',
        justifyContent: 'flex-end',
        alignContent: 'center',
        backgroundColor: 'lightsteelblue',
        padding: 10
      },
      toolButton : {
        border: 'none',
        backgroundColor: 'transparent',
        fontSize: 18,
        marginLeft: 5,
        marginRight: 5
      },
      select : {
        outline: '1px solid steelblue'
      },
      title : {
        fontFamily: 'Roboto',
        color: 'steelblue'
      }
    });

    return (
      <section className={css(styles.section)}>
      hello
    </section>
    )
}
}

export default Addassignment;
