import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/navbar/pages/Home";
import Planes from "./components/navbar/pages/Planes";
import Weather from "./components/navbar/pages/WeatherPage";

import { defaults } from "react-chartjs-2";
defaults.global.defaultFontFamily = "basefont-regular";
defaults.global.defaultFontColor = '#fefeff';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/planes" exact component={Planes} />
          <Route path="/weather-page" exact component={Weather} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
