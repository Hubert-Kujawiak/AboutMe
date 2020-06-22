import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import "../sass/all.scss";
import Header from "./Header";

const App = () => <Header />;

ReactDOM.render(<App />, document.getElementById("app"));
