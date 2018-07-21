import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';
import './TaperTable.css';

class TaperTable extends Component {

     handleClick() {
        alert('You have clicked on me');
      }

  render() {
    return (
      <div className="TaperTable">
        <header className="TaperTable-header">     
        </header>
        <p className="TaperTable-body">
          This is the table body
          <Button bsStyle="primary">Primary</Button>
          <Button bsStyle="success">Success</Button>
          <Panel onClick={this.handleClick}>
              <Panel.Body>Basic panel example</Panel.Body>
          </Panel>   
        </p>
      </div>
    );
  }
}

export default TaperTable;
