import React, { Component } from "react";
import "./projects.css";
import paceimg from "./images/paceimg.png";
import shugameimg from "./images/shugameimg.png";
import salsaimg from "./images/salsaimg.png";
import exploreimg from "./images/exploreimg.png";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="MyProjects">
        <h2 className="title">My Projects</h2>

        <div className="slide-in-left">
          <section className="project_right">
            <h3 className="titles">Pace! App</h3>
            <img src={paceimg} alt="Logo" className="screenshots" />
            <p>
              Pace! Can help you visually see how you perform at each of your
              runs. Track your pace and see how you compare from your previous
              runs. Determine what were the differences based on your notes you
              made on that run experience. Grow your knowledge of your run
              experience. Let's get those pace records tracked!
            </p>

            <p>Technologies Used: React, CSS, JS, Jest</p>

            <ul>
              <li className="contact">
                <a
                  href="https://github.com/YFlynn726/paceclient"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="links"
                >
                  Github Link
                </a>
              </li>

              <li className="contact">
                <a
                  href="https://paceclient.now.sh/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="links"
                >
                  Live Link
                </a>
              </li>
            </ul>
            <br />

            <h3 className="titles">Shu-game App</h3>
            <img src={shugameimg} alt="Logo" className="screenshots" />

            <p>
              Shu-game can help users track their usage of their running shoes
              and hold their list of wish list items for those shoes they wish
              to purchase when it's time. Simply register by entering your name
              and a your shoes.
            </p>

            <p>Technologies Used: React, CSS, JS, Jest</p>

            <ul>
              <li className="contact">
                <a
                  href="https://github.com/YFlynn726/shugame-app"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="links"
                >
                  Github Link
                </a>
              </li>

              <li className="contact">
                <a
                  href="https://shugame-app.now.sh/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="links"
                >
                  Live Link
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="slide-in-right">
          <section className="project_left">
            <h3 className="titles">Salsa Quiz App</h3>
            <img src={salsaimg} alt="Logo" className="screenshots" />

            <p>
              Measures and teaches prospective salsa students about salsa
              dancing. Many people are interested in the arts of dancing but
              often hold back because of the false information or hesitation
              because they don't know the joy that comes from dancing. This app
              introduces new prospective students about the very basics of salsa
              dancing.
            </p>

            <p>Technologies used to create the app: HTML, CSS, jquery.</p>

            <ul>
              <li className="contact">
                <a
                  href="https://github.com/YFlynn726/quizapp2"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="links"
                >
                  Github Link
                </a>
              </li>

              <li className="contact">
                <a
                  href="https://yflynn726.github.io/quizapp2/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="links"
                >
                  Live Link
                </a>
              </li>
            </ul>
            <br />

            <h3 class="titles">ExploreIt! App</h3>
            <img src={exploreimg} alt="Logo" className="screenshots" />

            <p>
              Help users access current weather data to their travel destination
              by entering city name or zipcode using the Open Weather Map API
              while also using Yelp Fusion API to provide recommendations for
              restaturants and other exploration opportunities all in one app.
            </p>

            <p>
              Technologies used to create the app: HTML, CSS, JavaScript,
              jquery.
            </p>

            <ul>
              <li className="contact">
                <a
                  href="https://github.com/YFlynn726/ExploreIt-App"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="links"
                >
                  Github Link
                </a>
              </li>

              <li className="contact">
                <a
                  href="https://yflynn726.github.io/ExploreIt-App/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="links"
                >
                  Live Link
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default Projects;
