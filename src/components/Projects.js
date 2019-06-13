import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  // CardTitle,
  CardText,
  CardActions,
  Button
} from "react-mdl";
import mypic from "../mypic.jpg";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  
  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} >
            <img src={mypic} alt={mypic} style={{ height: "200px" }} />
            <CardText>Technologies: React, Redux</CardText>
            <CardActions border>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} >
            <img src={mypic} alt={mypic} style={{ height: "200px" }} />
            <CardText>Technologies: React, Redux</CardText>
            <CardActions border>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} >
            <img src={mypic} alt={mypic} style={{ height: "200px" }} />
            <CardText>Technologies: React, Redux</CardText>
            <CardActions border>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
          {/* Project 3 */}
          <Card shadow={5}>
            <img src={mypic} alt={mypic} style={{ height: "200px" }} />
            <CardText>Technologies: React, Redux</CardText>
            <CardActions border>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} >
            <img src={mypic} alt={mypic} style={{ height: "200px" }} />
            <CardText>Technologies: React, Redux</CardText>
            <CardActions border>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div><h1>This is Gatsby</h1></div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div><h1>This is HTML/CSS</h1></div>
      )
    }
  }


  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>Gatsby</Tab>
          <Tab>HTML/CSS</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Projects;
