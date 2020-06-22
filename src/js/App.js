import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import "../sass/all.scss";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";
import MyProject from "./MyProject";

const App = () => (
  <>
    <Header />
    <AboutMe />
    <Technologies />
    <MyProject />
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
