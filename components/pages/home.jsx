import React from "react";
import "../../assets/styles/home.css";

const Home = (props) => {
  return (
    <div className="home">
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
              props.onStart && props.onStart();
            }}
          >
            Home
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              props.onAbout && props.onAbout();
            }}
          >
            About
          </a>

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

      <div className="footer">
        <button className="button" onClick={props.onStart}>
          Let's Play
        </button>

        <h6>Shabnam, Copy & Right, All rights Are reserved</h6>
      </div>
    </div>
  );
};

export default Home;
