import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Redirect} from 'react-router-dom';
import ReactTable from 'react-table'
import axios from 'axios';

class Datatable extends Component {
  constructor(props, context) {
    super(props, context)

    this.renderEditable = this.renderEditable.bind(this);
    this.state = {currentClass: null, data:null, columns: null};
  }

  //ajax calls here
  componentDidMount() {
    if (this.state.currentClass !== this.props.currentClass) {
      this.setState({user: this.props.user, currentClass:this.props.currentClass})
    }
  }

  componentDidUpdate() {
    console.log(this.state);
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
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
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
      console.log('making axios call for data');
      axios({
        method: 'get',
        url: `/teachers/${this.props.user.id}/classes/${currentClassID}/assignments`
      })
      .then( (res) => {
        console.log('data table api result',res);
        res.data.columns.forEach( (el) => {
          el.Cell = this.renderEditable
        })
        this.setState({columns: res.data.columns, data: res.data.grades})
      })
      //display loader until data returns
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

export default Datatable;
