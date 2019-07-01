import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import mypic from '../mypic.jpg';

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={mypic} alt={mypic} className="avatar-img" />
            <div className="banner-text">
              <h1>Front-end React Developer</h1>
              <hr />
              <h5>
                React | Redux | Jest | Enzyme | Gatsby | GraphQL |
                Contentful | Angular | Typescript ...
              </h5>
              <div className="social-links">
                {/* Github */}
                <a
                  href="https://github.com/kenzosion"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/haurkang/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
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
