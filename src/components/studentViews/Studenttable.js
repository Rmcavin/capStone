import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Redirect} from 'react-router-dom';
import ReactTable from 'react-table'
import axios from 'axios';

class Studenttable extends Component {
  constructor(props, context) {
    super(props, context)

    this.getData = this.getData.bind(this);
    //this.renderEditable = this.renderEditable.bind(this);
    this.state = {data:null, columns: null, key: null};
  }

  componentDidUpdate() {
    console.log('datatable state', this.state);
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.currentClass) {
      this.getData(nextprops.currentClass)
    }
  }

  // renderEditable(cellInfo) {
  //   return (
  //     <div
  //       style={{ backgroundColor: "#fafafa" }}
  //       contentEditable
  //       suppressContentEditableWarning
  //       onBlur={e => {
  //         const data = [...this.state.data];
  //         data[cellInfo.index][cellInfo.column.id] = parseInt(e.target.innerHTML);
  //         let cellUpdate = {
  //           student_id: cellInfo.original.studentId,
  //           assignment_id: this.state.key[cellInfo.column.id],
  //           score: cellInfo.original[cellInfo.column.id]
  //         }
  //         console.log('the cell update', cellUpdate);
  //         this.sendData(cellUpdate)
  //         this.setState({ data });
  //       }}
  //       dangerouslySetInnerHTML={{
  //         __html: this.state.data[cellInfo.index][cellInfo.column.id]
  //       }}
  //     />
  //   );
  // }

  getData(currentClassID) {
    axios({
      method: 'get',
      url: `/students/${this.props.user.id}/classes/${currentClassID}/assignments`
    })
    .then( (res) => {
      console.log('data from db', res);
      // res.data.columns.forEach( (el) => {
      //   if (el.Header !== 'name') {
      //     el.Cell = this.renderEditable
      //   }
      // })
      this.setState({columns: res.data.columns, data: res.data.grades, key: res.data.key})
    })
  }

  // sendData(updates) {
  //   axios({
  //     method: 'patch',
  //     url: '/grades',
  //     data: updates
  //   })
  //   .then ( (res) => {
  //     console.log(res);
  //   })
  // }

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
      console.log('making axios call for data');
      this.getData(currentClassID)

      return <div className={css(styles.loaderContainer)}><i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
              <span className="sr-only">Loading...</span></div>
    }

      //data return
      if (this.state.data) {
        return (
          <div>
          <ReactTable
            data={this.state.data}
            columns={this.state.columns}
            showPagination={false}
            showPaginationBottom={false}
          />
          </div>
        )
      }

      //first return
      return null;
  }
}

export default Studenttable;
