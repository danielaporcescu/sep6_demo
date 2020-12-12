import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/navbar/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/navbar/pages/Services";
import Products from "./components/navbar/pages/Products";
import Weather from "./components/navbar/pages/WeatherPage";
import SignUp from "./components/navbar/pages/SignUp";
import Marketing from "./components/navbar/pages/Marketing";
import Consulting from "./components/navbar/pages/Consulting";

function App() {
  return (
    <>
      <p>test</p>
      <Router basename="/">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/weather-page" component={Weather} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/marketing" component={Marketing} />
          <Route path="/consulting" component={Consulting} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
