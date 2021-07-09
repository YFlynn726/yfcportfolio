import React, { Component } from "react";
import "./home.css";
import img from "./IMG_3213small.jpg";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home_container">
        <div className="slide-in-left">
          <section className="home_left">
            <h1 className="name">Yajaira Flynn-Corbin</h1>
            <div className="image">
              <img src={img} alt="pictureofme" />
            </div>
          </section>
        </div>

        <div className="slide-in-right">
          <section className="home_right">
            <h2>Hi! I'm Yajaira [Ja-hi-ra]</h2>
            <p>I am a Software Engineer.</p>
            <p>
              [JavaScript ES6, React, jQuery, HTML5, CSS3, Node.js, Github,
              Linux, Git, SQL, RESTful API]
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
