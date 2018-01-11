import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Redirect} from 'react-router-dom';

//components
import Datatable from './Datatable'

class Gradebook extends Component {
  constructor(props) {
    super(props)
    this.state = {user:null};
  }

  render() {
    //styles
    const styles = StyleSheet.create({
      section : {
        margin: 'auto',
        marginTop: 50,
        width: '80%',
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'none',
        justifyContent: 'center',
        alignContent: 'center',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
      },
      dropDown : {
        width: '50%'
      },
      toolBar : {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'none',
        justifyContent: 'space-between',
        alignContent: 'center'
      },
      toolButton : {
        border: 'none',
        backgroundColor: 'transparent',
        fontSize: 18,
      },
      select : {
        outline: '1px solid steelblue'
      }
    });

    return (
      <section className = {css(styles.section)}>
        <div className = {css(styles.toolBar)}>
          <form>
            <select className = {css(styles.select)}>
              <option>First Class</option>
            </select>
          </form>
          <button className = {css(styles.toolButton)} ><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
        </div>

        <Datatable />

      </section>
    )
  }
}

export default Gradebook;
