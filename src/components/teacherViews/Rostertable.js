import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import ReactTable from 'react-table'
import axios from 'axios';

//components
import AddStudent from './AddStudent'

class Rostertable extends Component {
  constructor(props, context) {
    super(props, context)
    this.getData = this.getData.bind(this);
    this.sendData = this.sendData.bind(this);
    this.renderEditable = this.renderEditable.bind(this);
    this.newStudent = this.newStudent.bind(this);
    this.state = {data: null, columns: null, toggleStudent: null};
  }

  componentDidUpdate() {
    //console.log('rostertable state', this.state);
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.currentClass) {
      this.getData(nextprops.currentClass)
    }
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          let cellUpdate = {
             student_id: cellInfo.original.student_id,
             grade: cellInfo.original.grade,
             name: cellInfo.original.name,
             password: cellInfo.original.password,
             username: cellInfo.original.username
           }
          this.sendData(cellUpdate)
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }

  getData(currentClassID) {
    axios({
      method: 'get',
      url: `/teachers/${this.props.user.id}/classes/${currentClassID}/students`
    })
    .then( (res) => {
      res.data.columns.forEach( (el) => {
          el.Cell = this.renderEditable
      })
      this.setState({data: res.data.rosterData, columns: res.data.columns})
    })
  }

  sendData(updates) {
    axios({
      method: 'patch',
      url: '/students',
      data: updates
    })
    .then ( (res) => {
    })
  }

  newStudent(student) {
    let newStudent = {name: `${student.data.firstname} ${student.data.lastname}`, grade: student.data.grade, username: student.data.username, password: "", student_id: student.data.id};
    this.setState({ data: [...this.state.data, newStudent] }) //merge new student into state without mutating
  }

  render() {

    //styles
    const styles = StyleSheet.create({
      loaderContainer : {
        display: 'flex',
        flexWrap: 'none',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 100,
        color: 'steelblue'
      }
    });

    //data chart set up
    const data = this.state.data;
    const currentClassID = this.props.currentClass;

    //if there is no data
    if (currentClassID && !data) {
      //get the data
      this.getData(currentClassID)

      return <div className={css(styles.loaderContainer)}><i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
              <span className="sr-only">Loading...</span></div>
    }

    let toggleStudent = null;

    if (this.props.addStudent) {
      toggleStudent = <AddStudent currentClass = {this.props.currentClass} newStudent = {this.newStudent} addStudentToggle = {this.props.addStudentToggle}/>
    }

      //data return
      if (this.state.data) {
        return (
          <div>
          {toggleStudent}
          <ReactTable
            data={this.state.data}
            columns={this.state.columns}
            showPagination={false}
            showPaginationBottom={false}
            noDataText="No Roster Data to Display."
            className = "-striped -highlight"
          />
          </div>
        )
      }

      //first return
      return null;
  }
}

export default Rostertable;
