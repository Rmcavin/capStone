import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import ReactTable from 'react-table'
import axios from 'axios';


class Assignmenttable extends Component {
  constructor(props, context) {
    super(props, context)
    this.renderEditable = this.renderEditable.bind(this)
    this.state = {data: null, columns: null, classMap: null};
  }

  componentDidUpdate() {
    console.log('assignmenttable state', this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newAssignment && this.props.newAssignment !== nextProps.newAssignment)  {
      let datum = {name: nextProps.newAssignment.assignmentname, type: nextProps.newAssignment.type}
      this.setState({ data: [...this.state.data, datum] })

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
             assignmentname: cellInfo.original.name,
             type: cellInfo.original.type,
             assignment_id: cellInfo.original.id,
             classname: cellInfo.column.id,
             class_id: this.state.classMap[cellInfo.column.id],
             value: cellInfo.original[cellInfo.column.id]
          }
          console.log(cellInfo);
          this.sendData(cellUpdate)
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }

  getData() {
    console.log('getting the assignments!');
    axios({
      method: 'get',
      url: `/teachers/${this.props.user.id}/assignments`
    })
    .then( (res) => {
      console.log('the assignments from db', res);
       res.data.columns.forEach( (el) => {
         if (el.Header !== 'Type') {
           el.Cell = this.renderEditable
         }
       })
       this.setState({data: res.data.assignmentList, columns: res.data.columns, classMap: res.data.classMap})
     })
  }

  sendData(updates) {
    axios({
      method: 'patch',
      url: '/assignments',
      data: updates
    })
    .then ( (res) => {
      console.log(res);
    })
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

    //if there is no data
    if (!data) {
      //get the data
      this.getData()

      return <div className={css(styles.loaderContainer)}><i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
              <span className="sr-only">Loading...</span></div>
    }

    // let toggleStudent = null;
    //
    // if (this.props.addStudent) {
    //   toggleStudent = <AddStudent currentClass = {this.props.currentClass} newStudent = {this.newStudent} addStudentToggle = {this.props.addStudentToggle}/>
    // }

      //data return
      if (this.state.data) {
        return (
          <div>
          <ReactTable
            data={this.state.data}
            columns={this.state.columns}
            showPagination={false}
            showPaginationBottom={false}
            noDataText="No Assignment Data to Display."
            className = "-striped -highlight"
          />
          </div>
        )
      }

      //first return
      return null;
  }
}


export default Assignmenttable;
