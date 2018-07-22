import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import TaperTable from './components/TaperTable/TaperTable';
import TaperForm from './components/TaperForm/TaperForm';
import MainMessage from './components/MainMessage/MainMessage';

class App extends Component {
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
          <h1 className="App-title">SSRI Discontinuation</h1>
        </header>
        <Grid>
          <Row>
            &nbsp;
          </Row>
          <Row>
            <Col xs={3}>
              <Panel style={panelStyle}>
                <Panel.Body>
                  <TaperForm></TaperForm>
                </Panel.Body>
              </Panel>
            </Col>
            <Col xs={9}>
              <Panel>
                <Panel.Body>
                  <MainMessage></MainMessage>
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <TaperTable></TaperTable>
            </Col>
          </Row>
        </Grid>
      </div>
      
    );
  }
}

export default App;
