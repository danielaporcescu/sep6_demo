// import axios from "axios";
// import List from "./List";
// import withListLoading from "./ListLoading";
import React from "react";
import "./App.css";
import BarChart from "../src/components/charts/BarChart";
import MultipleBarChart from "../src/components/charts/MultipleBarsChart";
import PercentageBarChart from "../src/components/charts/PercentageBarChart";
import TopTenDestinationsChart from "../src/components/charts/top-10-destinations-per-origin-chart";




// import { getFlightsPerMonth } from "../src/http-services/flights-services";

function App() {
  return (
    <>
      <p>test</p>
      <TopTenDestinationsChart/>
      <PercentageBarChart/>
      <BarChart />
      <MultipleBarChart />
    </>
  );
}

export default App;
