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
              <h1>Front-end React Developer</h1>
              <hr/>
              <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>
                <div className="social-links">
                  {/* LinkedIn */}
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                  {/* Github */}
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>
                </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default LandingPage;
