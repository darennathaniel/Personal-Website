import "./App.css";
import { TweenLite } from "gsap";

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
        <div className="navbar">
          <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
            <a class="navbar-brand" href="#head">
              Navbar
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="head" id="head">
          <div className="headText">
            <h1 className="name">Daren Nathaniel Janto</h1>
            <p>Computer Science Student</p>
            <p>Nanyang Technological University</p>
          </div>
          <div className="headAnimation">
            <img
              width="450px"
              src="https://www.ainotes.org/svg/question.svg"
            ></img>
          </div>
        </div>
        <div className="about">
          <h1>About Myself</h1>
        </div>
      </div>
    </>
  );
}

export default App;
