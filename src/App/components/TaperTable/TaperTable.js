import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './TaperTable.css';

class TaperTable extends Component {

     handleClick() {
        alert('You have clicked on me');
      }

  render() {
    return (
      <div className="TaperTable">
    
          <Panel onClick={this.handleClick}>
              <Panel.Body>This is where the table will go.</Panel.Body>
          </Panel>   
    
      </div>
    );
  }
}

export default TaperTable;
