import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <>
      <div className="personal-website">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Archivo+Black|Judson:400,700"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand:300,500"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"
        ></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <nav
            className="nav"
            id="navbar"
            class="navbar navbar-expand-lg bg-dark fixed-top"
          >
            <div className="nav-content">
              <img src={logo} className="nav-logo" alt="Logo." />
              <Link className="links" to="/">
                <Button variant="outlined" color="primary">
                  Home
                </Button>
              </Link>
              <Link className="links" to="/about">
                <Button variant="outlined" color="primary">
                  About
                </Button>
              </Link>
              <Link className="links" to="/project">
                <Button variant="outlined" color="primary">
                  Project
                </Button>
              </Link>
            </div>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </div>
    </>
  );
}

function Home() {
  return (
    <div className="head" id="head">
      <div className="headText">
        <p>Hi! Welcome to my website.</p>
        <img
          className="line"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Line_segment.svg/375px-Line_segment.svg.png"
        ></img>
        <p>"I thank my God upon every rememberance of You."</p>
        <p>-Philippians 1:3</p>
      </div>
      <div className="headAnimation">
        <img width="450px" src="https://www.ainotes.org/svg/question.svg"></img>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about" id="about">
      <div className="aboutImage">
        <img
          className="IDphoto"
          src="https://media-exp1.licdn.com/dms/image/C5603AQGShhMlaO38bQ/profile-displayphoto-shrink_800_800/0/1612451344342?e=1620864000&v=beta&t=TNtnKbnceUJgZk9D56hOs7eWQHzc8u2RVcyASOXXq5I"
        ></img>
      </div>
      <div className="aboutText">
        <h1>About Myself</h1>
        <img
          className="line"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Line_segment.svg/375px-Line_segment.svg.png"
        ></img>
        <p className="aboutBio">
          Hi! My name is Daren Nathaniel Janto. Nice meeting you! I am currently
          studying in Nanyang Technological University with a major in Computer
          Science.
        </p>
        <br></br>
        <p className="aboutBio">
          I have a passion of creating something that can benefit the public. My
          main goal in life is to bring happiness and joy to everyone around me
          as that is where my happiness is born!
        </p>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className="project">
      <h1>To be continued..</h1>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer" class="fixed-bottom">
      <ul class="icon-effect icon-effect-1a">
        <li>
          <a target="_blank" href="https://www.instagram.com/darenathaniel/">
            <i class="fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/daren-nathaniel-janto-30b7881b6/"
          >
            <i class="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/darennathaniel">
            <i class="fa fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
