import React, { Component } from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from "./components/main";
import {Link} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div style={{height:'100%'}}>
    <Layout>
        <Header className="header-color" title={<Link style={{fontWeight:'700',textDecoration:'none',fontFamily:'Ubuntu, sans-serif',fontSize:'1.8em',textTransform: 'capitalize',color:'white'}} to="/"> Amruta Patil</Link>} scroll>
            <Navigation className="csstyle">
                <Link style={{fontWeight:'800',textTransform: 'uppercase',fontSize:'1.1em',fontFamily:'Ubuntu, sans-serif',color:'white'}} to="/projects">Projects</Link>
  <Link style={{fontWeight:'800',textTransform: 'uppercase',fontSize:'1.1em',fontFamily:'Ubuntu, sans-serif',color:'white'}} to="/resume">Resume</Link>
                <Link style={{fontWeight:'800',textTransform: 'uppercase',fontSize:'1.1em',fontFamily:'Ubuntu, sans-serif',color:'white'}} to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer  title="Title">
            <Navigation>
              <Link to="/projects">Projects</Link>

              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
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
}

export default App;
