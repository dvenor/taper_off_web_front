import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class TaperForm extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {
        doseValue: '',
        stepValue: '',
        holdWeeksValue: ''
      };

      this.baseState = this.state; 
    }
  
    getValidationState() {
      const length = this.state.doseValue.length;
      const steplength = this.state.stepValue.length;
      const holdlength = this.state.holdWeeksValue.length;

      if (length >= 1 && steplength >= 1 && holdlength >=1) {
        return 'success';
      } 

      return null;
    }
  
    handleSubmit(e){
      e.preventDefault();

      let submission = {};
      submission['doseValue'] = this.state.doseValue;
      submission['stepValue'] = this.state.stepValue;
      submission['holdWeeksValue'] = this.state.holdWeeksValue;
      this.props.callbackToGetFormData(submission);
    }

    handleChange(e) {
      let change = {};
      change[e.target.name] = e.target.value;
      this.setState(change);
    }

    resetForm = () => {
      this.setState(this.baseState)
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}>
            <ControlLabel>Baseline dose (mg)</ControlLabel>
            <FormControl
              name="doseValue"
              type="number"
              value={this.state.doseValue}
              step={0.01}
              placeholder="Enter starting dose"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <br/>
            <ControlLabel>Percent decrease per week (%)</ControlLabel>
            <FormControl
              name="stepValue"
              type="number"
              value={this.state.stepValue}
              step={0.01}
              placeholder="Enter percent decrease"
              onChange={this.handleChange}
            />
            <br/>
            <ControlLabel>Number of weeks to hold</ControlLabel>
            <FormControl
              name="holdWeeksValue"
              type="number"
              value={this.state.holdWeeksValue}
              step={1}
              placeholder="Enter hold weeks"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
          <Button bsStyle="success" type="submit" disabled={!this.getValidationState()} >Build Schedule</Button>&nbsp;
          <Button bsStyle="info"  onClick={this.resetForm} type="button" >Clear</Button>
        </form>
      );
    }
  }
  
  export default TaperForm;