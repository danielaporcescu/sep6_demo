// import axios from "axios";
// import List from "./List";
// import withListLoading from "./ListLoading";
import React from "react";
import "./App.css";
import TotalFlightsPerMonth from "../src/components/charts/total-flights-month";
import TotalFlightsPerMonthFromOrigins from "./components/charts/total-flights-month-from-origin";
import TotalFlightsPetMonthFromOriginPercentage from "./components/charts/total-flights-month-from-origin-percent";
import TopTenDestinationsPerOrigin from "./components/charts/top-10-destinations-per-origin";
import TotalFlightsPetMonthFromOriginStacked from "./components/charts/total-flights-month-from-origin-stacked";
// import BasicTable from "./components/tables/top-10-destinations";




// import { getFlightsPerMonth } from "../src/http-services/flights-services";

function App() {
  return (
    <>
      <p>test</p>
      {/* <BasicTable/> */}
      <TotalFlightsPerMonth />
      <TotalFlightsPerMonthFromOrigins />
      <TotalFlightsPetMonthFromOriginStacked/>
      <TotalFlightsPetMonthFromOriginPercentage/>
      <TopTenDestinationsPerOrigin/>
    </>
  );
}

export default App;
