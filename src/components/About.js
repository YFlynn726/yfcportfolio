import React, { Component } from "react";
import "./about.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about_me">
        <div className="size">
          <section className="about_left">
            <h2 className="abouttitle">About Me</h2>
            <p className="slide-in-right">From Raleigh North Carolina</p>
            <p>I studied at Thinkful. </p>
          </section>
        </div>

        <div className="size">
          <section className="about_right">
            <p className="slide-in-left">
              My passion for coding started when I attended a ChickTech event
              with my daughter. I was blown away by all the amazing things
              technology can do. Throughout my experience with Thinkful and
              Springboard, I soon discovered my effective problem-solving
              skills.
            </p>

            <p>
              I chose to become a software engineer because I want to help and
              impact a lot of people all at once. My hope and dream is to create
              something that can help millions of people. I am always looking to
              learn the next best language or understand new concepts. The thing
              I love most about what I do as a software engineer is finding
              solutions to problems and collaborating with others. In my
              previous projects, collaborating with others helped me to be
              successful. Working on a project that looks amazing and functions
              smoothly at the same time is my ultimate goal.
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
