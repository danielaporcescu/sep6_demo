import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import classes from "./BarChart.module.css";

function TotalFlightsPerMonthFromOrigins({ data, isLoaded }) {
  const [chartData, setChartData] = useState({});

  let months = [];
  let originEWR = [];
  let originJFK = [];
  let originLGA = [];

  if (isLoaded) {
    for (const dataObj of data) {
      months.push(parseInt(dataObj.month));
      originEWR.push(parseInt(dataObj.ewr));
      originJFK.push(parseInt(dataObj.jfk));
      originLGA.push(parseInt(dataObj.lga));
    }
  }
  useEffect(() => {
    setChartData({
      labels: months,
      datasets: [
        {
          label: "ERW",
          backgroundColor: "rgba(239,131,84,1)",
          borderWidth: 2,
          data: originEWR,
          barPercentage: 0.5,
          barThickness: 6,

        },
        {
          label: "JFK",
          backgroundColor: "rgba(176,45,12,1)",
          borderWidth: 2,
          data: originJFK,
          barPercentage: 0.5,
          barThickness: 6,
        },
        {
          label: "LGA",
          backgroundColor: "rgba(75,192,192,1)",
          borderWidth: 2,
          data: originLGA,
          barPercentage: 0.5,
          barThickness: 6,
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
          title: {
            text:
              "Total number of flights per month from the three origins in one plot. FREQUENCY",
            display: true,
          },
          scales: {
            yAxes: [
              {
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

export default TotalFlightsPerMonthFromOrigins;
