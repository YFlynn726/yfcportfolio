import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="slide-in-bottom">
        <div className="slide-in-left">
          <section className="home_left">
            <h2>Hi! I'm Yajaira [Ja-hi-ra]</h2>
            <p>I am a web developer.</p>
            <p>Full Stack [Node, JavaScript]</p>
          </section>
        </div>
        <div className="slide-in-right">
          <section className="home_right">
            <h1>Yajaira Flynn-Corbin</h1>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
