// import axios from "axios";
// import List from "./List";
// import withListLoading from "./ListLoading";
import React from "react";
import "./App.css";
import TotalFlightsPerMonth from "../src/components/charts/total-flights-month";
import TotalFlightsPerMonthFromOrigins from "./components/charts/total-flights-month-from-origin";
import TotalFlightsPetMonthFromOriginPercentage from "./components/charts/total-flights-month-from-origin-percent";
import TopTenDestinationsPerOrigin from "./components/charts/top-10-destinations-per-origin";




// import { getFlightsPerMonth } from "../src/http-services/flights-services";

function App() {
  return (
    <>
      <p>test</p>
      <TopTenDestinationsPerOrigin/>
      <TotalFlightsPetMonthFromOriginPercentage/>
      <TotalFlightsPerMonth />
      <TotalFlightsPerMonthFromOrigins />
    </>
  );
}

export default App;
