import React, { Component } from "react";
import "./projects.css";
//import Screenshot from "./Screenshot.png";
//import ExploreItScreenShot from "../ExploreItScreenShot.png";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="MyProjects">
        <h2>My Projects</h2>

        {/* <img
          src={Screenshot}
          alt="Screen shot of landing page of salsa dancers"
        /> */}
        <h3 class="caption">Salsa Quiz App</h3>

        <p>
          This is to measure and teach prospective salsa students about salsa
          dancing. Many people are interested in many different arts of dancing
          but often hold back because of the false information they have heard
          or hesitate because they don't know or understand what it takes. This
          app introduces new prospective students about the very basics of salsa
          dancing.
        </p>

        <p>Technologies used to create the app: HTML, CSS, jquery.</p>

        <ul>
          <li className="contact">
            {" "}
            GitHub Link{" "}
            <a
              href="https://github.com/YFlynn726/quizapp2"
              rel="noopener noreferrer"
              target="_blank"
            >
              Repo{" "}
            </a>
          </li>

          <li className="contact">
            Live Link{" "}
            <a
              href="https://yflynn726.github.io/quizapp2/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Live Salsa App Link{" "}
            </a>
          </li>
        </ul>

        <br />
        <br />

        {/* <img
          src={ExploreItScreenShot}
          alt="Screen shot of landing page for ExploreIt! app."
        /> */}
        <h3 class="caption">ExploreIt! App</h3>

        <p>
          Help users access current weather data to their travel destination by
          entering city name or zipcode using the Open Weather Map API while
          also using Yelp Fusion API to provide recommendations for restaturants
          and other exploration opportunities all in one app.
        </p>

        <p>
          Technologies used to create the app: HTML, CSS, JavaScript, jquery.
        </p>

        <ul>
          <li className="contact">
            {" "}
            GitHub Link
            <a
              href="https://github.com/YFlynn726/ExploreIt-App"
              rel="noopener noreferrer"
              target="_blank"
              className="repo"
            >
              Github Repo Link
            </a>
          </li>

          <li className="contact">
            Live Link
            <a
              href="https://yflynn726.github.io/ExploreIt-App/"
              rel="noopener noreferrer"
              target="_blank"
              className="live"
            >
              Live Link
            </a>
          </li>
        </ul>

        <br />
        <br />

        <h3>Shu-game App</h3>
        <p>
          Shu-game can help users track their usage of their running shoes and
          hold their list of wish list items for those shoes they wish to
          purchase when it's time. Simply register by entering your name and a
          your shoes.
        </p>

        <p>Technologies Used: React, CSS, JS, Jest</p>

        <ul>
          <li className="contact">
            {" "}
            GitHub Link
            <a
              href="https://github.com/YFlynn726/shugame-app"
              rel="noopener noreferrer"
              target="_blank"
              className="repo"
            >
              Github Repo Link
            </a>
          </li>

          <li className="contact">
            Live Link
            <a
              href="https://shugame-app.now.sh/"
              rel="noopener noreferrer"
              target="_blank"
              className="live"
            >
              Live Link
            </a>
          </li>
        </ul>

        <br />
        <br />

        <h3>Pace! App</h3>
        <p>
          Pace! Can help you visually see how you perform at each of your runs.
          Track your pace and see how you compare from your previous runs.
          Determine what were the differences based on your notes you made on
          that run experience. Grow your knowledge of your run experience. Let's
          get those pace records tracked!
        </p>

        <p>Technologies Used: React, CSS, JS, Jest</p>

        <ul>
          <li className="contact">
            {" "}
            GitHub Link
            <a
              href="https://github.com/YFlynn726/paceclient"
              rel="noopener noreferrer"
              target="_blank"
              className="repo"
            >
              Github Repo Link
            </a>
          </li>

          <li className="contact">
            Live Link
            <a
              href="https://paceclient.now.sh/"
              rel="noopener noreferrer"
              target="_blank"
              className="live"
            >
              Live Link
            </a>
          </li>
        </ul>

        <br />
        <br />
      </div>
    );
  }
}

export default Projects;
