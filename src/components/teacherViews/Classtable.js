import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import ReactTable from 'react-table'
import axios from 'axios';


class Classtable extends Component {
  constructor(props, context) {
    super(props, context)
    this.renderEditable = this.renderEditable.bind(this)
    this.state = {data: null, columns: null};
  }

  componentDidUpdate() {
    console.log('classtable state', this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newClass && this.props.newClass !== nextProps.newClass) {
      let datum = nextProps.newClass;
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
             classname: cellInfo.original.classname,
             subject: cellInfo.original.subject,
             class_id: cellInfo.original.id
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
     axios({
       method: 'get',
       url: `/teachers/${this.props.user.id}/classes`
     })
     .then( (res) => {
       console.log('class table response', res);
       let columns = [{Header:'Class Name', accessor: 'classname'}, {Header: 'Subject', accessor: 'subject'}]
       columns.forEach( (el) => {
           el.Cell = this.renderEditable
         })
       this.setState({data: res.data, columns: columns})
      })
  }

  sendData(updates) {
    axios({
      method: 'patch',
      url: '/classes',
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

      //data return
      if (this.state.data) {
        return (
          <div>
          <ReactTable
            data={this.state.data}
            columns={this.state.columns}
            showPagination={false}
            showPaginationBottom={false}
            noDataText="No Class Data to Display."
            className = "-striped -highlight"
          />
          </div>
        )
      }

      //first return
      return null;
  }
}


export default Classtable;
