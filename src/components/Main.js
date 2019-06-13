import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from "./LandingPage";
import Projects from './Projects';
import Resume from "./Resume";


const Main = () => {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
      </Switch>
    );
};

export default Main;