import React from 'react';
import './App.css';
import Main from './components/Main';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Haur Kang" scroll>
          <Navigation>
            <Link exact to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            {/* <Link to="/aboutme">About Me</Link>
            <Link to="/contact">Contact</Link> */}
          </Navigation>
        </Header>
        <Drawer title="Haur Kang">
          <Navigation>
            <Link exact to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            {/* <Link to="/aboutme">About Me</Link>
            <Link to="/contact">Contact</Link> */}
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
