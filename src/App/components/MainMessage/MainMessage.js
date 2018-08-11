import React, { Component } from 'react';
import './MainMessage.css'

class MainMessage extends Component {
    render() {

        const messageStyle = {
            textAlign: 'left'
          }

        return(
            <div>
            <div className="App-intro" style={messageStyle}>
                This page builds the <i>Slide Method of Microtapering</i> by Brassmonkey
                found on <a href=" https://www.survivingantidepressants.org/">https://www.survivingantidepressants.org</a>.
                It decreases values by a set percentage every week for 4 weeks 
                followed by a two week hold. The tapered amount gets smaller and smaller over time, kind of like compound 
                interest in reverse.  
                <br/><br/>
                <h4>Directions:</h4>  
                
                1. Enter your starting dose in mg
                <br/>
                2. Enter the percentage to decrease per week 
                <br/>
                3. Click build schedule    
            </div>
    
      </div>
    );

    }
}

export default MainMessage;