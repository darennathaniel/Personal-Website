import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";

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
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <nav
            className="nav"
            id="navbar"
            class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
          >
            <div className="nav-content">
              <img src={logo} className="nav-logo" alt="Logo." />
              <ul className="nav-items" class="navbar-nav mr-auto">
                <li class="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/project">Project</Link>
                </li>
              </ul>
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
      <div className="aboutTitle">
        <h1>About Myself</h1>
      </div>
      <div>
        <p>
          Pelajar Indonesia NTU (PINTU) is an association for Indonesian
          students in Nanyang Technological University (NTU) Singapore. It was
          officially founded on 17 August 2002 and has now become one of the
          most established Indonesian students’ organization in Singapore. We
          contribute to the livelihood of students in NTU, both Indonesians and
          non-Indonesians, by organising various activities and initiatives, as
          well as taking part in many school-organized activities.
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

export default App;
