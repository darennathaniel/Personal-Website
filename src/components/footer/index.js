import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Footer(props) {
  return (
    <Navbar className="justify-content-center" fixed="bottom">
      <Nav>
        <Nav.Link
          target="_blank"
          href="https://www.instagram.com/darenathaniel/"
        >
          <i class="fab fa-instagram"></i>
        </Nav.Link>
        <Nav.Link
          target="_blank"
          href="https://www.linkedin.com/in/daren-nathaniel-janto-30b7881b6/"
        >
          <i class="fab fa-linkedin-in"></i>
        </Nav.Link>
        <Nav.Link target="_blank" href="https://github.com/darennathaniel">
          <i class="fab fa-github"></i>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
