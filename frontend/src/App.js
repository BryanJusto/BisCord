import React, { Component, useState } from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom';
import {Navbar, NavItem, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Routes from './Routes';
import Chat from './Chat';



function App(props){
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    function handleLogout(){
      //await auth.signOut();
      userHasAuthenticated(false);
      props.history.push("/login");
    }
    return (
      <div className="App Header">

        <Navbar fluid collapseOnSelect>

          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>

            <Nav className="ml-auto">
            {isAuthenticated
              ? <NavItem onClick={handleLogout}>Logout</NavItem>
              :<>
              <LinkContainer to="/Signin">
                  <NavItem href="./Signin"> Signup </NavItem>
              </LinkContainer>
              <LinkContainer to="/Login">
                  <NavItem href="./Login"> Login </NavItem>
              </LinkContainer>
              </>
            }
            </Nav>

          </Navbar.Collapse>

        </Navbar>
        <Routes appProps={{isAuthenticated, userHasAuthenticated}}/>
          <Chat />
      </div>
    );
}

export default withRouter(App);
