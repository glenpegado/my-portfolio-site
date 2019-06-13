import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Experience from './Experience';
import Skills from './Skills';


class Resume extends Component {
    render() {
        return (
            <div style={{margin: '10px 50px'}}>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'left' }}>
                            <h2 style={{paddingTop:'25px'}}>Paul Hanna</h2>
                            <h4 style={{ color: 'grey' }}>Programmer</h4>
                            <hr style={{ borderTop: '3px solid blue', width: '100%' }} />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <hr style={{ borderTop: '3px solid blue', width: '100%' }} />
                            <h5>Email</h5>
                            <p>someone@example.com</p>
                            <h5>Web</h5>
                            <p>mywebsite.com</p>
                            <hr style={{ borderTop: '3px solid blue', width: '100%' }} />
                        </div>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2 style={{marginBottom: '48px'}}>Experience</h2>
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
                        <hr style={{ borderTop: '3px solid white' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={100}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={25}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
