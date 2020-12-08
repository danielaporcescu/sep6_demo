import React, { useEffect, useState } from "react";
import axios from "axios";

import { VALUES_MAIN_ORIGINS } from "../../helpers/url";

import TempAtributesOrigins from "../charts/temperature-atributes-origins"

// import TotalFlightsPerMonth from "../charts/total-flights-month";
// import TotalFlightsPerMonthFromOrigins from "../charts/total-flights-month-from-origin";
// import TotalFlightsPetMonthFromOriginStacked from "../charts/total-flights-month-from-origin-stacked";
// import TotalFlightsPetMonthFromOriginPercentage from "../charts/total-flights-month-from-origin-percent";
// import TopTenDestinationsPerOrigin from "../charts/top-10-destinations-per-origin";
// import Top10DestinationsTable from "../tables/top-10-destination-table";

function WeatherPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState({});

  const getFlights = () => {
    axios
      .get(VALUES_MAIN_ORIGINS)
      .then((res) => {
        setResult(res.data);
        setIsLoaded(true);
        console.log(res.data)
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
        <TempAtributesOrigins
        data={result} 
        isLoaded={isLoaded} 
        />
      {/* <Top10DestinationsTable
      data={result.topTenDestinationsByFlights} 
      isLoaded={isLoaded} 
      />
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
      /> */}
    </div>
  );
}


export default WeatherPage;
