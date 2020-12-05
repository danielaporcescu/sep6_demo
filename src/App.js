// import axios from "axios";
// import List from "./List";
// import withListLoading from "./ListLoading";
import React from "react";
import "./App.css";
import BarChart from "../src/components/charts/total-flights-month";
import MultipleBarChart from "./components/charts/total-flights-minth-from-origin";
import PercentageBarChart from "./components/charts/total-flights-month-percent";
import TopTenDestinationsChart from "./components/charts/top-10-destinations-per-origin";




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
