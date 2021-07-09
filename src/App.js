import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactInfo from "./components/ContactInfo";
import Home from "./components/Home";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/AboutMe" component={About} />
            <Route path="/MyProjects" component={Projects} />
            <Route path="/ContactMe" component={ContactInfo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
