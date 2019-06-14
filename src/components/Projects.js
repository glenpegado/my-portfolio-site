import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  // Card,
  // CardTitle,
  // CardText,
  CardActions,
  Button
} from "react-mdl";
import { Card, CardDeck } from "react-bootstrap";
import mypic from "../mypic.jpg";
import balanceSheet from '../balanceSheet.png';
import exerciseTracker from '../exerciseTracker.png';
import seroom from '../seroom.png';
import makang from '../makang.png';
import roomah from '../roomah.png';
import monidash from '../monidash.png';
import moovie from '../moovie.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  
  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src={mypic}
                alt={mypic}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.
                </Card.Text>
              </Card.Body>
              <CardActions border>
                <Button colored><a
                  href="https://moovies.netlify.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live demo
                  </a></Button>
              </CardActions>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={moovie}
                alt={moovie}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>HK Movies</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.
                </Card.Text>
              </Card.Body>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://moovies.netlify.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live demo
                  </a>
                </Button>
              </CardActions>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={mypic}
                alt={mypic}
                style={{ height: "250px" }}
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                {/* <Card.Text>
                  This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.
                </Card.Text> */}
              </Card.Body>
              <CardActions border>
                <Button colored>Live Demo</Button>
              </CardActions>
            </Card>
          </CardDeck>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src={seroom}
                alt={seroom}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>
                  <strong>Seroom</strong>
                </Card.Title>
                <Card.Text>
                  This is an illustration of a modern website I have
                  created for worldwide room rental. (MEAN stack)
                </Card.Text>
              </Card.Body>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://seroom.herokuapp.com/rentals"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live demo
                  </a>
                </Button>
              </CardActions>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={balanceSheet}
                alt={balanceSheet}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>
                  <strong>Balance $heet</strong>
                </Card.Title>
                <Card.Text>
                  This balance sheet project is a creative way of
                  monitoring financial transactions. (Full stack)
                </Card.Text>
              </Card.Body>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://balancesheet-88f60.firebaseapp.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live demo
                  </a>
                </Button>
              </CardActions>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={exerciseTracker}
                alt={exerciseTracker}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>
                  <strong>Exercise Tracker</strong>
                </Card.Title>
                <Card.Text>
                  I created this exercise tracker that could be used to
                  monitor and record my fitness activities. (Full stack)
                </Card.Text>
              </Card.Body>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://xt-exercise-tracker.firebaseapp.com/login"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live demo
                  </a>
                </Button>
              </CardActions>
            </Card>
          </CardDeck>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <CardDeck>
            <Card >
              <Card.Img
                variant="top"
                src={seroom}
                alt={seroom}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.
                </Card.Text>
              </Card.Body>
              <CardActions border>
                <Button colored>Live Demo</Button>
              </CardActions>
            </Card>
            </CardDeck>
            </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src={makang}
                alt={makang}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>
                  <strong>Makang</strong>
                </Card.Title>
                <Card.Text>
                  Highlighting design and use of visuals, this is the
                  first website I created. As a Malaysian, we love our
                  authentic Malaysian dishes. Are you tempted? Dive into
                  the website now to see more!
                </Card.Text>
              </Card.Body>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://makang.netlify.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live demo
                  </a>
                </Button>
              </CardActions>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={roomah}
                alt={roomah}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>
                  <strong>Roomah</strong>
                </Card.Title>
                <Card.Text>
                  Roomah is my exeplar website for selling, renting, or
                  managing properties, built predominantly using CSS Grids
                  and SASS.
                </Card.Text>
              </Card.Body>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://roomah.netlify.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live demo
                  </a>
                </Button>
              </CardActions>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={monidash}
                alt={monidash}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>
                  <strong>Monidash</strong>
                </Card.Title>
                <Card.Text>
                  Opps.... this is actually a React app. Monidash allows
                  user to pick their favourite coins.
                </Card.Text>
              </Card.Body>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://monidash.netlify.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live demo
                  </a>
                </Button>
              </CardActions>
            </Card>
          </CardDeck>
        </div>
      );
    }
  }


  render() {
    return (
      <div >
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
