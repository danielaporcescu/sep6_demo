import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import classes from "./BarChart.module.css";

function TotalFlightsPerMonth({ data, isLoaded }) {
  const [chartData, setChartData] = useState({});

  let flights = [];
  let months = [];

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
          backgroundColor: "rgba(75,192,192,1)",
          borderWidth: 2,
          data: flights,
        },
      ],
    });
  }, [isLoaded]);

  return (
    <div className={classes.BarChart}>
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
                  labelString: 'Number of flights'
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
                  labelString: 'Month'
                },
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default TotalFlightsPerMonth;
