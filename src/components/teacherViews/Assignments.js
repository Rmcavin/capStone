import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';

//components
import Assignmenttable from './Assignmenttable'
import Addassignment from './Addassignment'

class Assignments extends Component {
  constructor(props) {
    super(props)
    this.toggleAddAssignment = this.toggleAddAssignment.bind(this)
    this.newAssignment = this.newAssignment.bind(this)
    this.state = {addAssignment: false, newAssignment: null};
  }

  componentDidUpdate() {
    //console.log('updated assignments state',this.state);
  }

  toggleAddAssignment() {
    this.setState({addAssignment: !this.state.addAssignment})
  }

  newAssignment(assignment) {
    this.setState({newAssignment:assignment})
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

    let toggleAdd = null;
    if (this.state.addAssignment) {
      toggleAdd = <Addassignment toggle={this.toggleAddAssignment} user={this.props.user} newAssignment = {this.newAssignment}/>
    }



    return (
      <section className={css(styles.section)}>
      <h3 className={css(styles.title)}>Assignments</h3>
      <div className = {css(styles.toolBar)}>
        <div>
          <button className={css(styles.toolButton)}>
            <i className= "fa fa-plus-square" aria-hidden="true" onClick = {this.toggleAddAssignment}></i>
          </button>
        </div>
      </div>
        {/*render add assignment if true*/}
        {toggleAdd}
      <Assignmenttable user={this.props.user} newAssignment={this.state.newAssignment}/>
    </section>
    )}
}

export default Assignments;
