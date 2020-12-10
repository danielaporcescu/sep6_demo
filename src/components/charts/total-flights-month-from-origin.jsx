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
          backgroundColor: "#083D7740",
          borderWidth: 2,
          data: originEWR,
          borderColor: "#083D77",
          // barPercentage: 0.5,
          // barThickness: 6,
        },
        {
          label: "JFK",
          backgroundColor: "#b02d0c4d",
          borderWidth: 2,
          data: originJFK,
          borderColor: "#b02d0c",

          // barPercentage: 0.5,
          // barThickness: 6,
        },
        {
          label: "LGA",
          backgroundColor: "#4bc0c04d",
          borderWidth: 2,
          data: originLGA,
          borderColor: "#4bc0c0",
          // barPercentage: 0.5,
          // barThickness: 6,
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
    </div>
  );
}

export default TotalFlightsPerMonthFromOrigins;
