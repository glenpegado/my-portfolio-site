import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
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
import hitchhub from '../hitchhub.png';
import moovie from '../moovie.png';
import pokemon from '../pokemon.png';
import myblog from '../myblog.png';
import recipe from '../recipe.png';
import cars from '../cars.png';
import coming from '../coming.png'

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
            <Card border="dark">
              <Card.Img
                variant="top"
                src={moovie}
                alt={moovie}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>HKang Movies</Card.Title>
                <Card.Text>
                  As a movie fan, I created this react app fetching data from the movieDB API.
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
            <Card border="dark">
              <Card.Img
                variant="top"
                src={cars}
                alt={cars}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>Cars</Card.Title>
                <Card.Text>
                  As a car super fan, I created this app to demostrate example of car selling/renting site.
                </Card.Text>
              </Card.Body>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://hkcars.netlify.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live demo
                  </a>
                </Button>
              </CardActions>
            </Card>
            <Card border="dark">
              <Card.Img
                variant="top"
                src={recipe}
                alt={recipe}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>Recipe Library</Card.Title>
                {<Card.Text>
                  This is where you can search for recipe to make delicious meals.
                </Card.Text>}
              </Card.Body>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://recipelibrary.netlify.com/"
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
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <CardDeck>
            <Card border="dark">
              <Card.Img
                variant="top"
                src={seroom}
                alt={seroom}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>
                  Seroom
                </Card.Title>
                <Card.Text>
                  This is an illustration of a modern website I have
                  created for worldwide room rental. 
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
            <Card border="dark">
              <Card.Img
                variant="top"
                src={balanceSheet}
                alt={balanceSheet}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>
                  Balance $heet
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
            <Card border="dark">
              <Card.Img
                variant="top"
                src={exerciseTracker}
                alt={exerciseTracker}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>
                  Exercise Tracker
                </Card.Title>
                <Card.Text>
                  I created this exercise tracker to
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
            <Card border="dark">
              <Card.Img
                variant="top"
                src={coming}
                alt={coming}
                style={{ height: "220px", opacity: "0.7"  }}
              />
              <Card.Body>
                <Card.Title>
                  Coming soon
                </Card.Title>
                <Card.Text>
                  The site is currently under contrucstion. Will be available soon.
                </Card.Text>
              </Card.Body>
              <CardActions border>
                <Button colored>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live demo
                  </a>
                </Button>
              </CardActions>
            </Card>
            <Card border="dark">
              <Card.Img
                variant="top"
                src={myblog}
                alt={myblog}
                style={{ height: "220px"}}
              />
              <Card.Body>
                <Card.Title>
                  My blog
                </Card.Title>
                <Card.Text>
                  This is the first website I built on GatsbyJS.
                </Card.Text>
              </Card.Body>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://mygatsbyblog.netlify.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live demo
                  </a>
                </Button>
              </CardActions>
            </Card>
            <Card border="dark">
              <Card.Img
                variant="top"
                src={coming}
                alt={coming}
                style={{ height: "220px", opacity: "0.7"  }}
              />
              <Card.Body>
                <Card.Title>
                  Coming soon
                </Card.Title>
                <Card.Text>
                  The site is currently under contrucstion. Will be available soon.
                </Card.Text>
              </Card.Body>
              <CardActions border>
                <Button colored>
                  <a
                    href="/"
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
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <CardDeck>
            <Card border="dark">
              <Card.Img
                variant="top"
                src={makang}
                alt={makang}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>
                  Makang
                </Card.Title>
                <Card.Text>
                  Highlighting design and use of visuals, this is the
                  first website I ever created. 
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
            <Card border="dark">
              <Card.Img
                variant="top"
                src={roomah}
                alt={roomah}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>
                  Roomah
                </Card.Title>
                <Card.Text>
                  Roomah is my exeplar website for selling, built predominantly using CSS Grids
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
            <Card border="dark">
              <Card.Img
                variant="top"
                src={hitchhub}
                alt={hitchhub}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>
                  Hitchhub
                </Card.Title>
                <Card.Text>
                  This is an app that allows travellers to connect with each other from all over the world.
                </Card.Text>
              </Card.Body>
              <CardActions border>
                <Button colored>
                  <a
                    href="http://hitchhub.s3-website-us-east-1.amazonaws.com"
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
      <div>
        <Tabs style={{paddingBottom: '25px'}} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab style={{fontWeight:'700'}}>React</Tab>
          <Tab style={{fontWeight:'700'}}>Angular</Tab>
          <Tab style={{fontWeight:'700'}}>Gatsby</Tab>
          <Tab style={{fontWeight:'700'}}>HTML/CSS</Tab>
        </Tabs>
       
        <Grid className="project-grid2">
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Projects;
