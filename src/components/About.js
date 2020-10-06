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
              with my daughter about 4 years ago. I was blown away by all the
              amazing things technology can do. Throughout my experience with
              Thinkful, I soon discovered my effective problem-solving skills. I
              enjoyed the challenge of having to overcome an obstacle. I also
              enjoyed working with others when a challenge is too big to
              overcome alone. I found it's very important to be resourceful in
              this field.{" "}
            </p>

            <p>
              I love coding because it allows me to be creative and seeing the
              outcome of the code I wrote brings me great satisfaction. I am a
              frequent flyer on YouTube, where I like to watch videos on new
              coding methods and even current ones since I am still learning. I
              surround myself with other "techies" to listen to others
              perspective and knowledge about the tech community.
            </p>

            <p className="slide-in-left">
              When I am not coding, I am busy being a mother of 3 beautiful
              children and wife. My family and I are active and are firm
              believers in exploring new things. We enjoy kayaking, hiking,
              mountain biking, snowboarding, the list can go on and on. My
              hunger and inner nerdiness truly enjoys learning new things. This
              is why the tech field excites me so much because it's constantly
              changing keeping my appetite for learning full.
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
