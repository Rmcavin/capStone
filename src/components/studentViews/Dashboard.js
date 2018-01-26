import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';

//components
import Studenttable from './Studenttable'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.selectClass = this.selectClass.bind(this);
    this.state = {classes: null};
  }

  getData() {
    if (this.props.user && !this.state.classes) {
      axios({
        method: 'get',
        url: `/students/${this.props.user.id}/classes`
      })
      .then( (res) => {
        this.setState({classes: res.data})
      })
    }
  }

  componentDidUpdate() {
    //console.log('updated dashboard state',this.state);
  }

  createOptions() {
    let classes = this.state.classes;
    let options = classes.map( (el) => {
      return <option value={el.id}> {el.classname} </option>
    })
    return options;
  }

  selectClass(event) {
    this.setState({currentClass: event.target.value});
  }

  render() {
    //get the classes if they don't exist yet
    //console.log('props?', this.props.user);
    if (this.props.user && this.state.classes === null) {
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
        <h3 className={css(styles.title)}>Dashboard</h3>
        <div className = {css(styles.toolBar)}>
          <form>
            <select onChange = {this.selectClass} className = {css(styles.select)}>
              <option value='null'> select a class </option>
              {options}
            </select>
          </form>
        </div>
        <Studenttable user={this.props.user} currentClass={this.state.currentClass}/>
      </section>

    )
}
}

export default Dashboard;
