import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import "../sass/all.scss";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";
import MyProject from "./MyProject";
import ContactSection from "./ContactSection";

const App = () => (
  <>
    <Header />
    <AboutMe />
    <Technologies />
    <MyProject />
    <ContactSection />
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
