import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/navbar/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/navbar/pages/Planes";
import Weather from "./components/navbar/pages/WeatherPage";
import SignUp from "./components/navbar/pages/SignUp";

import { defaults } from "react-chartjs-2";
defaults.global.defaultFontFamily = "basefont-regular";
defaults.global.defaultFontColor = '#fefeff';

function App() {
  return (
    <>
      <p style={{color: "#fff"}}>test</p>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/weather-page" exact component={Weather} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
