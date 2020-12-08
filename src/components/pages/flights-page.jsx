import React, { useEffect, useState } from "react";
import axios from "axios";

import { FLIGHTS_CHART_DATA } from "../../helpers/url";

import TotalFlightsPerMonth from "../charts/total-flights-month";
import TotalFlightsPerMonthFromOrigins from "../charts/total-flights-month-from-origin";
import TotalFlightsPetMonthFromOriginStacked from "../charts/total-flights-month-from-origin-stacked";
import TotalFlightsPetMonthFromOriginPercentage from "../charts/total-flights-month-from-origin-percent";
import TopTenDestinationsPerOrigin from "../charts/top-10-destinations-per-origin";

function FlightsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState({});

  const getFlights = () => {
    axios
      .get(FLIGHTS_CHART_DATA)
      .then((res) => {
        setResult(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoaded(true);
      });
  };

  useEffect(() => {
    getFlights();
  }, [isLoaded]);

  return (
    <div>
      <TotalFlightsPerMonth 
      data={result.flightsPerMonth} 
      isLoaded={isLoaded} 
      />
      <TotalFlightsPerMonthFromOrigins
        data={result.flightsPerMonthFromOrigins}
        isLoaded={isLoaded}
      />
      <TotalFlightsPetMonthFromOriginStacked
        data={result.flightsPerMonthFromOrigins}
        isLoaded={isLoaded}
      />
      <TotalFlightsPetMonthFromOriginPercentage
        data={result.flightsPerMonthFromOriginPercentage}
        isLoaded={isLoaded}
      />
      <TopTenDestinationsPerOrigin
        data={result.topTenDestinationsByFlightsFromOrigins}
        isLoaded={isLoaded}
      />
    </div>
  );
}


export default FlightsPage;
