import React, { Component } from "react";
import "./projects.css";
import musicapp from "./images/music-app.png";
import beats from "./images/beats.png";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="MyProjects">
        <h2 className="title">My Projects</h2>

        <div className="slide-in-left">
          <section className="project_right">
            <h3 className="titles">My Music App</h3>
            <img src={musicapp} alt="Logo" className="screenshots" />
            <p>
              This music application plays chill vibes allowing any user to play
              as background music while working or at a dinner event. The
              application includes some animation and a clean modern look.
            </p>

            <p>Technologies Used: React, CSS, JS, HTML</p>

            <ul>
              <li className="contact">
                <a
                  href="https://github.com/YFlynn726/my-music-player"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="links"
                >
                  Github Link
                </a>
              </li>

              <li className="contact">
                <a
                  href="https://my-music-player-q0yp5eu1h-ryryn2003.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="links"
                >
                  Live Link
                </a>
              </li>
            </ul>
            <br />
          </section>
        </div>

        <div className="slide-in-right">
          <section className="project_left">
            <h3 className="titles">Beats App</h3>
            <img src={beats} alt="Logo" className="screenshots" />

            <p>
              The beats app is a fun app allowing users to play with music. The
              user is able to manipulate the tempo and sounds of their choice. A
              visual is provided for the user as the player is looping. Give it
              a try and click the live link below. Let's check out your DJ
              skills. This app was a fun project to work on.
            </p>

            <p>Technologies used to create the app: HTML, CSS, JavaScript.</p>

            <ul>
              <li className="contact">
                <a
                  href="https://github.com/YFlynn726/BeatApp"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="links"
                >
                  Github Link
                </a>
              </li>

              <li className="contact">
                <a
                  href="https://yflynn726.github.io/BeatApp/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="links"
                >
                  Live Link
                </a>
              </li>
            </ul>
            <br />
          </section>
        </div>
      </div>
    );
  }
}

export default Projects;
