import React, { Component } from "react";
import "./contact.css";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

class ContactInfo extends Component {
  state = {};
  render() {
    return (
      <div>
        <section className="contactinfo">
          <div className="contact_left">
            <h2>My Contact Information</h2>
            <p>Feel free to reach out.</p>
          </div>

          <div className="contact_right">
            <ul class="contactinfo">
              <li className="contactme">
                <a
                  href="https://github.com/YFlynn726"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GithubOutlined />{" "}
                </a>
              </li>
              <li className="contactme">
                <a
                  href="https://www.linkedin.com/in/yajaira-flynn-corbin-7ba52117/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <LinkedinOutlined />{" "}
                </a>
              </li>
              <li className="contactme">
                <a
                  href="mailto:yary.ba26@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MailOutlined />{" "}
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactInfo;
