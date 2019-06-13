import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Experience from './Experience';
import Skills from './Skills';


class Resume extends Component {
    render() {
        return (
          <div style={{ margin: "10px 60px" }}>
            <Grid>
              <Cell col={4}>
                <div style={{ textAlign: "left" }}>
                  <h2 style={{ paddingTop: "25px" }}>Haur Kang</h2>
                  <h4>Front-end wed developer/ analyst</h4>
                  <hr
                    style={{
                      borderTop: "3px solid blue",
                      width: "100%"
                    }}
                  />
                  <p>
                    I am a highly motivated self-taught web developer
                    <strong> (React and Angular)</strong> and web
                    analyst, with several years of public sector
                    experience.
                  </p>
                  <p>
                    My background has helped me develop a systematic and
                    analytical approach to problem solving. When working
                    autonomously I keep current by researching and
                    networking with peers - often discussing ideas and
                    issues on stackoverflow and github.
                  </p>
                  <p>
                    Using my broad experience I have created a range of
                    beautifully responsive websites with the user
                    experience a priority. You can view these examples
                    under the project section. These will give you a
                    good idea of the skills I can bring into play to
                    design, develop and deliver platforms to ensure your
                    return-on-investment.
                  </p>
                  <hr
                    style={{
                      borderTop: "3px solid blue",
                      width: "100%"
                    }}
                  />
                  <h5>Email</h5>
                  <p style={{ fontSize: "20px", fontWeight: "700" }}>
                    haur.kang@gmail.com
                  </p>
                  <hr
                    style={{
                      borderTop: "3px solid blue",
                      width: "100%"
                    }}
                  />
                </div>
              </Cell>
              <Cell className="resume-right-col" col={8}>
                <h2>Skills</h2>
                <h5>
                  React | Redux | React Hooks | Jest | Enzyme | Gatsby |
                  GraphQL | Contentful
                </h5>
                <h5>
                  Angular | Javascript | Typescript | HTML | SASS | CSS
                  | NodeJS | Bootstrap
                </h5>
                <h5>
                  Python | Google Analytics | Tableau | Sqlite | Hotjar
                  | Firebase | MongoDB...
                </h5>
                <h2 style={{ marginTop: "60px" }}>Experience</h2>
                <Experience
                  startYear={2009}
                  endYear={2012}
                  jobName="First Job"
                  jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
                <Experience
                  startYear={2012}
                  endYear={2016}
                  jobName="Second Job"
                  jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
                <hr style={{ borderTop: "3px solid white" }} />
              </Cell>
            </Grid>
          </div>
        );
    }
}

export default Resume;
