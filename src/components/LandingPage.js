import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import mypic from '../mypic.jpg';

class LandingPage extends Component {
  render() {
    return (
      <div style={{width:'100%', margin:'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={mypic} alt={mypic} className="avatar-img"/>
            <div className="banner-text"> 
              <h1>Front-end React developer</h1>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default LandingPage;
