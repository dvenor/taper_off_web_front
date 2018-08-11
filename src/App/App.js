import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import TaperTable from './components/TaperTable/TaperTable';
import TaperForm from './components/TaperForm/TaperForm';
import MainMessage from './components/MainMessage/MainMessage';
import { BounceLoader } from 'react-spinners';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
      loading: false
    }
  }

  componentDidMount() {
    document.title = 'Taper Off';
    
  }

  processFormData = (dataFromChild) => {
    this.setState({loading: true});
    this.setState({schedule: []});
    
    setTimeout(() => {
      this.setState({schedule: this.createSchedule(dataFromChild.doseValue, dataFromChild.stepValue, 2)});
      this.setState({loading: false});
    }, 1000);
    
  }

  createSchedule(initialDose, pctDecrease, holdWeeks) {
    let schedule = [];
    const endDose = 0.1;

    if(initialDose === 0 || pctDecrease === 0 || pctDecrease >= 100){
      return schedule;
    }

    let currentWeek = 1;
    let currentYear = 1;
    let microcycle = 1;
    let microcycleDose = initialDose;
    let currentDose = initialDose;
    let resetWeek = holdWeeks + 4;
        
    let doseLine = {
      yearNumber: currentYear,
      weekNumber: 0,
      dosage: parseFloat(currentDose).toFixed(2)
    }
        
    while(currentDose > endDose){
        
        if(microcycle >=1 && microcycle <= 4){
            microcycleDose = currentDose * ((100 - (pctDecrease * microcycle))/100);   
        }

        doseLine = {
          yearNumber: currentYear,
          weekNumber: currentWeek,
          dosage: microcycleDose.toFixed(2)
        }
        schedule.push(doseLine);
        
        if(microcycle == resetWeek){
            currentDose = microcycleDose;
            microcycle = 1;
        }
        else {
            microcycle += 1;
        }
      
        if(currentWeek == 52) {
            currentWeek = 1;
            currentYear +=1;
            continue;
        }
        
        currentWeek += 1;    
    }
        
    return schedule;

  }

  render() {

    const panelStyle = {
      backgroundColor: 'lightgrey',
      textAlign: 'left'
    }

    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Taper Off - Microtaper Calculator</h1>
        </header>
        <Grid className="container-fluid">
          <Row>
            &nbsp;
          </Row>
          <Row>
            <Col xs={12} md={3}>
              <Panel style={panelStyle}>
                <Panel.Body>
                  <TaperForm callbackToGetFormData={this.processFormData}></TaperForm>
                </Panel.Body>
              </Panel>
            </Col>
            <Col xs={12} md={9}>
              <Panel>
                <Panel.Body>
                  <MainMessage></MainMessage>
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className='sweet-loading'>
                <BounceLoader color={'#123abc'} loading={this.state.loading} />
              </div>
              <TaperTable name={this.state.name} schedule={this.state.schedule}></TaperTable>
            </Col>
          </Row>
        </Grid>
      </div>
      
    );
  }
}

export default App;
