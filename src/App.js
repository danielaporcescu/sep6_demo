// import axios from "axios";
// import List from "./List";
// import withListLoading from "./ListLoading";
import React from "react";
import "./App.css";
import BarChart from "../src/components/charts/BarChart";
import MultipleBarChart from "../src/components/charts/MultipleBarsChart";

// import { getFlightsPerMonth } from "../src/http-services/flights-services";

function App() {
  return (
    <p>
      <h1>test</h1>
      <BarChart />
      <MultipleBarChart/>
    </p>
  );
}

export default App;
