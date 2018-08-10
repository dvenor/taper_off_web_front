import React, { Component } from 'react';

class MainMessage extends Component {
    render() {

        const messageStyle = {
            textAlign: 'left'
          }

        return(
            <div>
           <div className="App-intro" style={messageStyle}>
              Over 10 million americans regularly take anti-depresant medication.  It is an effective treatment option
              and has helped many people lead productive, happy lives. 
              <br/><br/>
              However, physicians don't normally spend the time to explain the process to ween off these medications.
              This application is a tool to assist in finding the proper taper schedule.
              <br/><br/>
              ALWAYS CONSULT YOUR DOCTOR BEFORE MAKING ANY CHANGES TO YOUR MEDICATION!   
            </div>
    
      </div>
    );

    }
}

export default MainMessage;