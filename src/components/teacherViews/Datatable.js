import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Redirect} from 'react-router-dom';
import ReactTable from 'react-table'

class Datatable extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {};
  }

  render() {
    const data = [
      {
        name: 'rachel',
        assignment1: 99,
        assignment2: 100
      },
      {
        name: 'ben',
        assignment1: 98,
        assignment2: 99
      }
    ]

    const columns = [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Assignment1',
        accessor: 'assignment1'
      },
      {
        Header: 'Assignment2',
        accessor: 'assignment2'
      }
    ]
    //styles
    const styles = StyleSheet.create({

    });

    return (
      <div>
      <ReactTable
        data={data}
        columns={columns}
      />
      </div>
    )
  }
}

export default Datatable;
