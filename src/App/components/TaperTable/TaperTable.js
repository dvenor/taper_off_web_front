import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './TaperTable.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator'

class TaperTable extends Component {


  constructor(props){
    super(props);
    this.state = {
      schedule: [],
      columns: [
        {
          dataField: 'yearNumber',
          text: 'Year',
          headerAlign: 'left'
        },
        {
          dataField: 'weekNumber',
          text: 'Week',
          headerAlign: 'left'
        }, 
        {
          dataField: 'dosage',
          text: 'Dosage',
          headerAlign: 'left'
        }
      ]
    } 
  }  

  componentDidMount () {
    this.setState({schedule: this.props.schedule});
  }

  componentDidUpdate(prevProps) {

    if (this.props.schedule !== prevProps.schedule) {
      this.setState({schedule: this.props.schedule});  
    }

  }

  render() {

    return (
      <div className="TaperTable">
        <Panel onClick={this.handleClick}>
          <Panel.Body>
            
            <BootstrapTable  
              striped 
              hover 
              keyField='id'
              noDataIndication="Schedule is empty"
               
              data={ this.state.schedule } 
              columns={ this.state.columns } 
              pagination={paginationFactory({
                sizePerPage: 52,
                sizePerPageList:[ {
                  text: '5', value: 5
                }, 
                {
                  text: '10', value: 10
                },
                {
                  text: '52', value: 52
                },
                {
                  text: '100', value: 100
                }, 
                 ]})}
              />
          </Panel.Body>
        </Panel>   
      </div>
    );
  }
}

export default TaperTable;
