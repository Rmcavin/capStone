import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
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
    //console.log('datatable state', this.state);
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.currentClass) {
      this.getData(nextprops.currentClass)
    }
  }



  getData(currentClassID) {
    axios({
      method: 'get',
      url: `/students/${this.props.user.id}/classes/${currentClassID}/assignments`
    })
    .then( (res) => {
    //  console.log('data from db', res);
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
            noDataText="No Grades to Display."
            className = "-striped -highlight"
          />
          </div>
        )
      }

      //first return
      return null;
  }
}

export default Studenttable;
