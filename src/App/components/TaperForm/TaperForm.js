import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class TaperForm extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        doseValue: '',
        stepValue: ''
      };
    }
  
    getValidationState() {
      const length = this.state.doseValue.length;
      if (length > 1) 
        return 'success';

      return null;
    }
  
    handleChange(e) {
      let change = {};
      change[e.target.name] = e.target.value;
      this.setState(change);
    }
  
    render() {
      return (
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Baseline dose (mg)</ControlLabel>
            <FormControl
              name="doseValue"
              type="number"
              value={this.state.doseValue}
              placeholder="Enter the starting dose in mg"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <br/>
            <ControlLabel>Percent decrease per step (%)</ControlLabel>
            <FormControl
              name="stepValue"
              type="number"
              value={this.state.stepValue}
              placeholder="Enter the step down value in Percentage (%)"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
          <Button bsStyle="success" type="submit">Build Schedule</Button>&nbsp;
          <Button bsStyle="info" type="submit">Clear</Button>
        </form>
      );
    }
  }
  
  export default TaperForm;