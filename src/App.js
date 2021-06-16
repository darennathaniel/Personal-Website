import React, { useState } from "react";
import Navigation from "./components/navbar";
import Footer from "./components/footer";
import Scripts from "./scripts";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function App() {
  return (
    <>
      <Scripts></Scripts>
      <BrowserRouter>
        <Navigation></Navigation>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

// const ColorButton = withStyles((theme) => ({
//   root: {
//     fontWeight: 800,
//     fontFamily: "Quicksand,sans-serif",
//   },
// }))(Button);

// function App() {
//   return (
//     <>
//       <div className="personal-website">
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, shrink-to-fit=no"
//         ></meta>
//         <link
//           rel="stylesheet"
//           href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
//         ></link>
//         <link
//           href="https://fonts.googleapis.com/css?family=Archivo+Black|Judson:400,700"
//           rel="stylesheet"
//         ></link>
//         <link
//           href="https://fonts.googleapis.com/css?family=Quicksand:300,500"
//           rel="stylesheet"
//         ></link>
//         <link
//           rel="stylesheet"
//           href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"
//         ></link>
//         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
//         <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
//         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
//         <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
//         <Router>
//           {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//           <nav className="nav" class="bg-dark fixed-top autohide">
//             <div className="nav-content">
//               <img src={logo} className="nav-logo" alt="Logo." />
//               <Link className="links" to="/">
//                 <ColorButton variant="outlined" color="primary">
//                   Home
//                 </ColorButton>
//               </Link>
//               <Link className="links" to="/about">
//                 <ColorButton variant="outlined" color="primary">
//                   About
//                 </ColorButton>
//               </Link>
//               <Link className="links" to="/project">
//                 <ColorButton variant="outlined" color="primary">
//                   Project
//                 </ColorButton>
//               </Link>
//             </div>
//           </nav>
//           <Switch>
//             <Route path="/about">
//               <About />
//               <Education></Education>
//             </Route>
//             <Route path="/project">
//               <Project />
//             </Route>
//             <Route path="/">
//               <Home />
//             </Route>
//           </Switch>
//         </Router>
//         <Footer></Footer>
//       </div>
//     </>
//   );
// }

// function Home() {
//   return (
//     <div className="head" id="head">
//       <div className="headText">
//         <p>Hi! Welcome to my website.</p>
//         <img
//           className="line"
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Line_segment.svg/375px-Line_segment.svg.png"
//         ></img>
//         <p className="BibleVerse">
//           "I thank my God upon every rememberance of You." Philippians 1:3
//         </p>
//       </div>
//       <div className="headAnimation">
//         <img
//           className="headPhoto"
//           width="450px"
//           src="https://www.ainotes.org/svg/question.svg"
//         ></img>
//       </div>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div className="about" id="about">
//       <div className="aboutImage">
//         <img
//           className="IDphoto"
//           src="https://media-exp1.licdn.com/dms/image/C5603AQGShhMlaO38bQ/profile-displayphoto-shrink_800_800/0/1612451344342?e=1626912000&v=beta&t=1Rhrb155E5gnZCJWketEOa6nVeD59gIWfqBPLLbofr8"
//         ></img>
//       </div>
//       <div className="aboutText">
//         <h1>About Myself</h1>
//         <img
//           className="line2"
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Line_segment.svg/375px-Line_segment.svg.png"
//         ></img>
//         <p className="aboutBio">
//           Hi! My name is Daren Nathaniel Janto. Nice meeting you! I am currently
//           studying in Nanyang Technological University with a major in Computer
//           Science.
//         </p>
//         <br></br>
//         <p className="aboutBio">
//           I have a passion of creating something that can benefit the public. My
//           main goal in life is to bring happiness and joy to everyone around me
//           as that is where my happiness is born!
//         </p>
//       </div>
//     </div>
//   );
// }

// function Education() {
//   return (
//     <div className="education" data-aos="fade-up" data-aos-duration="500">
//       <div className="educationBody">
//         <div className="educationTitle">
//           <h1>Education</h1>
//           <img
//             className="line2"
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Line_segment.svg/375px-Line_segment.svg.png"
//           ></img>
//         </div>
//         <div className="educationHS container-fluid justify-content-center">
//           <div>
//             <img
//               src="https://rec-data.kalibrr.com/www.kalibrr.com/logos/JZ7Z8L7ZEDQHJ6HX59NSETJNBMA786BSHTDUJK86-5d8862f3.png"
//               className="penaburphoto"
//               style={{
//                 marginBottom: "-50px",
//               }}
//             ></img>
//           </div>
//           <div className="educationText">
//             <span className="schoolTitle">SMAK 6 BPK Penabur Jakarta</span>
//             <span className="schoolTitle">July 2017 - May 2020</span>
//             <img
//               src="https://dmassociates.files.wordpress.com/2014/12/thin-black-line.png?w=640"
//               style={{
//                 marginTop: "-90px",
//                 marginBottom: "-90px",
//                 marginLeft: "-20px",
//                 width: "200px",
//                 borderRadius: "100%",
//               }}
//               className="img-responsive"
//             ></img>
//             <ul className="ntupenabur" style={{ marginLeft: "-40px" }}>
//               <li>Ranked 16th in 2020 Cohort</li>
//             </ul>
//           </div>
//         </div>
//         <div className="educationUni container-fluid justify-content-center">
//           <div>
//             <img
//               src="https://i.pinimg.com/originals/5f/23/6b/5f236bc3bec1c44481bc661684bec650.png"
//               className="ntuphoto"
//             ></img>
//           </div>
//           <div className="educationText">
//             <span className="schoolTitle">
//               Nanyang Technological University
//             </span>
//             <span className="schoolTitle">July 2020 - Present</span>
//             <img
//               src="https://dmassociates.files.wordpress.com/2014/12/thin-black-line.png?w=640"
//               style={{
//                 marginTop: "-90px",
//                 marginBottom: "-90px",
//                 marginLeft: "-20px",
//                 width: "200px",
//                 borderRadius: "100%",
//               }}
//               className="img-responsive"
//             ></img>
//             <ul className="ntupenabur" style={{ marginLeft: "-40px" }}>
//               <li>Expected Honours (Distinction)</li>
//               <li>CGPA : 4.39/5.00</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="educationAnimate">
//         <img
//           src="https://www.ainotes.org/svg/extract.svg"
//           className="educationAnimation"
//         ></img>
//       </div>
//     </div>
//   );
// }

// function Project() {
//   return (
//     <div className="project">
//       <h1>To be continued..</h1>
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <div className="footer" class="fixed-bottom">
//       <ul className="footerIcon" class="icon-effect icon-effect-1a">
//         <li>
//           <a target="_blank" href="https://www.instagram.com/darenathaniel/">
//             <i class="fa fa-instagram"></i>
//           </a>
//         </li>
//         <li>
//           <a
//             target="_blank"
//             href="https://www.linkedin.com/in/daren-nathaniel-janto-30b7881b6/"
//           >
//             <i class="fa fa-linkedin"></i>
//           </a>
//         </li>
//         <li>
//           <a target="_blank" href="https://github.com/darennathaniel">
//             <i class="fa fa-github"></i>
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }
