import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

//components
import Datatable from './Datatable'

class Gradebook extends Component {
  constructor(props) {
    super(props)
    this.state = {user:null, classes: null, currentClass: null};
    this.selectClass = this.selectClass.bind(this)
  }

  componentWillReceiveProps(nextprops) {
    if (this.state.user !== nextprops.user) {
      this.setState({user:nextprops.user})
    }
  }

  getData() {
    console.log('getdata');
    if (this.state.user && !this.state.classes) {
      axios({
        method: 'get',
        url: `/teachers/${this.state.user.id}/classes`
      })
      .then( (res) => {
        console.log('api data',res.data)
        this.setState({classes: res.data})
      })
    }
  }

  componentDidUpdate() {
    console.log('updated gradebook state',this.state);
  }

  createOptions() {
    let classes = this.state.classes;
    let options = classes.map( (el) => {
      return <option value={el.id}> {el.classname} </option>
    })
    return options;
  }

  selectClass(event) {
    console.log(event);
    console.log('the event value', event.target.value);
    this.setState({currentClass: event.target.value});
  }

  render() {
    if (this.state.user && this.state.classes === null) {
      this.getData()
    }
    let options = this.state.classes ? (this.createOptions()) : (null);

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
        justifyContent: 'space-between',
        alignContent: 'center',
        backgroundColor: 'lightsteelblue',
        padding: 10
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
            <select onChange = {this.selectClass} className = {css(styles.select)}>
              <option value='null'> select a class </option>
              {options}
            </select>
          </form>
          <div>
            <button className = {css(styles.toolButton)} ><i className="fa fa-user-plus" aria-hidden="true"></i></button>
            <button className = {css(styles.toolButton)} ><i className="fa fa-users" aria-hidden="true"></i></button>
            <button className = {css(styles.toolButton)} ><i className="fa fa-file-text-o" aria-hidden="true"></i></button>
            <button className = {css(styles.toolButton)} ><i className="fa fa-files-o" aria-hidden="true"></i></button>
          </div>
        </div>
        <Datatable user={this.state.user} currentClass={this.state.currentClass}/>
      </section>
    )
  }
}

export default Gradebook;
