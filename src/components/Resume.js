import React, { Component } from "react";
// import { Grid, Cell } from "react-mdl";
import Experience from "./Experience";
import { Container, Row, Col } from "react-bootstrap";

class Resume extends Component {
  render() {
    return (
      <div style={{ margin: "10px 0" }}>
        <Container>
          <Row>
          <Col sm={4}>
            <div style={{ textAlign: "left" }}>
              <h2 style={{ paddingTop: "25px" }}>Haur Kang</h2>
              <h4>Front-end wed developer | <br/> Web analyst</h4>
              <hr
                style={{
                  borderTop: "3px solid blue",
                  width: "100%"
                }}
              />
              <p>
                I am a highly motivated self-taught web developer
                <strong> (React and Angular)</strong> and web analyst, with
                several years of public sector experience.
              </p>
              <p>
                My background has helped me develop a systematic and
                analytical approach to problem solving. When working
                autonomously I keep current by researching and networking
                with peers - often discussing ideas and issues on
                stackoverflow and github.
              </p>
              <p>
                Using my broad experience I have created a range of
                beautifully responsive websites with the user experience a
                priority. You can view these examples under the project
                section. 
              </p>
              <hr
                style={{
                  borderTop: "3px solid blue",
                  width: "100%"
                }}
              />
              <h5>Email address</h5>
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
          </Col>
          <Col className="resume-right-col" sm={8}>
            <h2>Skills</h2>
            <h5>
              React | Redux | React Hooks | Jest | Enzyme | Gatsby | GraphQL
              | 
            </h5>
            <h5>
              Contentful | Angular | Javascript | Typescript | HTML | SASS | CSS | 
            </h5>
            <h5>
              Google Analytics | Tableau | Sqlite | Hotjar |
              Firebase and many more.
            </h5>
            <hr
              style={{ borderTop: "2px solid white", marginTop: "30px" }}
            />
            <h2 style={{ marginTop: "35px" }}>Experience</h2>
            <Experience
              startYear={2017}
              endYear={"current"}
              jobName="Government Digital Service (GDS)"
              jobDescription="Front-end web developer | Web analyst"
              jobDetail="Engaging with the UX/design side as well as back end developers.
Using RESTful APIs to build a client side application.
Implementing event tracking for AB/multivariable test. 
Working closely with other front end developers to ensure front end designs are comply with Web Content Accessibility Guidelines (WCAG).
Reporting on key metrics, analysing and interpreting trends and providing actionable insights based on available web analytics data.
Produce accurate, engaging and actionable analysis of online and offline data sources to derive priority user needs and user behaviour.
"
            />
            <Experience
              startYear={2015}
              endYear={2017}
              jobName="Home Office"
              jobDescription="Web analyst"
              jobDetail="Provide support to the user research, digital and management teams using agile methodology.
Reporting on key metrics, analysing and interpreting trends and providing actionable insights based on available web analytics data.
Analysing the effect of different online and offline channels on each other and developing and implementing innovative strategies for improvement and growth.
Providing consultancy on campaign tagging and additional on-site tracking.
Spotting potential to implement innovative new methodologies and improve analytical procedure.
"
            />
            <Experience
              startYear={2009}
              endYear={2015}
              jobName="Department for Work and Pensions (DWP)"
              jobDescription="Web analyst | Project lead"
              jobDetail="Managed and implemented projects such as Digital, Benefit Cap and Migrants Access to Benefits across East London District.
Collected and analysed performance and management data for the office including undertaking research, collation and analysis of data, monitoring data quality, and identify issues for resolution.
Maintained and developed regular periodic reports and ad-hoc reports. In addition, I also interpreted and translated data for staff and Managers.
Collated and analysed statistical and qualitative information as requested by the Performance Manager.
"
            />
            <Experience
              startYear={2004}
              endYear={2009}
              jobName="Next retail"
              jobDescription="Office Manager"
              jobDetail="Ensured that all of the stores administration procedures were followed in accordance with the Company Policies and Internal Audit requirements.Collated and checked all financial transactions relating to the store’s cash/banking procedures and controls. Devised spread sheets to capture and monitor store sales. Calculated the store’s profit and loss targets. Recruited Sales Consultants for stores, which involved planning and conducting of the end-of-season sale recruitment drive."
            />
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Resume;
