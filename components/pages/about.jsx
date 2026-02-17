import React from "react";
import "../../assets/styles/about.css";

const About = (props) => {
  return (
    <div className="about">
      <nav className="navbar">
        <div className="navbar-left">
          <img
            src="https://thumbs.dreamstime.com/b/gaming-remote-controller-mascot-esport-logo-cartoon-character-vector-illustration-transparent-background-363672645.jpg"
            alt="logo"
            className="logo"
          />
          <h1 className="name">HackArena</h1>
        </div>

        <div className="navbar-right">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              props.onHome && props.onHome();
            }}
          >
            Home
          </a>

          <a href="#">About</a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              props.onStart && props.onStart();
            }}
          >
            Quiz
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              props.onRestart && props.onRestart();
            }}
          >
            Scorecard
          </a>

          <img
            src="https://image.lexica.art/full_webp/cee72d5b-b0c7-4501-ad0d-60cebd31a32a"
            alt="profile"
            className="profile"
          />
        </div>
      </nav>

      <div className="about">
        <h2>About HackArena</h2>
        <p>
          HackArena is an interactive quiz platform designed to make learning fun,
          fast, and engaging. It challenges players with smart questions while
          tracking scores in real time. Whether you’re practicing knowledge,
          testing skills, or just playing for fun, HackArena turns every quiz into
          an exciting arena of ideas and competition.
        </p>
      </div>

      <div className="footer"></div>
        <h6>Shabnam, Copy & Right, All rights Are reserved</h6>
      </div>

  );
};

export default About;
