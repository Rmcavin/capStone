import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';

//components
import Rostertable from './Rostertable'
class Roster extends Component {
  constructor(props) {
    super(props)
    this.selectClass = this.selectClass.bind(this)
    this.addStudentToggle = this.addStudentToggle.bind(this)
    this.state = {classes: null, currentClass: null, user: null, addStudent: false};
  }

  componentDidUpdate() {
    console.log('updated assignments state',this.state);
  }

  componentWillReceiveProps(nextprops) {
    // console.log('classes nextprops', nextprops);
    // if (this.state.user !== nextprops.user) {
    //   this.setState({user:nextprops.user})
    // }
  }

  getData() {
    console.log('get data in classes');
    if (this.props.user && !this.state.classes) {
      axios({
        method: 'get',
        url: `/teachers/${this.props.user.id}/classes`
      })
      .then( (res) => {
        this.setState({classes: res.data})
      })
    }
  }

  createOptions() {
    console.log('create options in classes');
    let classes = this.state.classes;
    let options = classes.map( (el) => {
      return <option value={el.id}> {el.classname} </option>
    })
    return options;
  }

  //select and update the current class
  selectClass(event) {
    console.log(event);
    console.log('the event value', event.target.value);
    this.setState({currentClass: event.target.value});
  }

  addStudentToggle() {
    let toggle = !this.state.addStudent;
    this.setState({addStudent:toggle})
  }

  render() {
    if (this.props.user && this.state.classes === null) {
      this.getData()
    }

    let options = this.state.classes ? (this.createOptions()) : (null);

    console.log('classes state at render',this.state, 'classes props at render', this.props);

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
      <h3 className={css(styles.title)}>Roster</h3>
      <div className = {css(styles.toolBar)}>
        <form>
          <select onChange = {this.selectClass} className = {css(styles.select)}>
            <option value='null'> select a class </option>
            {options}
          </select>
        </form>
        <div>
          <button className={css(styles.toolButton)} onClick = {this.addStudentToggle}>
            <i className= "fa fa-user-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <Rostertable user={this.props.user} addStudent = {this.state.addStudent} currentClass={this.state.currentClass} addStudentToggle={this.addStudentToggle}/>
      </section>
    )
  }
}

export default Roster;
