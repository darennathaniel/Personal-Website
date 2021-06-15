import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import { Switch, Route, Link } from "react-router-dom";

import Home from "../home";
import About from "../about";
import Project from "../project";

export default function Navigation(props) {
  return (
    <>
      <Navbar bg="dark" expand="lg" fixed="top">
        <Navbar.Brand as={Link} to="/Personal-Website">
          DNJ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Personal-Website">
              <Button variant="outline-secondary">Home</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <Button variant="outline-secondary">About</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/project">
              <Button variant="outline-secondary">Project</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/Personal-Website" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/project" component={Project}></Route>
      </Switch>
    </>
  );
}
