import React, { useEffect, useState, useMemo } from "react";
import { Bar } from "react-chartjs-2";

import Loader from "../elements/loader";

function TotalFlightsPerMonth({ data, isLoaded }) {
  const [chartData, setChartData] = useState({});

  let flights = useMemo(() => [], []);
  let months = useMemo(() => [], []);

  if (isLoaded) {
    for (const dataObj of data) {
      flights.push(parseInt(dataObj.numberOfFlights));
      months.push(parseInt(dataObj.month));
    }
  }

  useEffect(() => {
    setChartData({
      labels: months,
      datasets: [
        {
          label: "month",
          backgroundColor: "#4bc0c04d",
          borderColor: "#4bc0c0",
          borderWidth: 2,
          data: flights,
        },
      ],
    });
  }, [isLoaded, months, flights]);

  return (
    <div>
      {!isLoaded ? (
        <Loader />
      ) : (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Total flights per month", display: true },
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Number of flights",
                  },
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Month",
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      )}
    </div>
  );
}

export default TotalFlightsPerMonth;
