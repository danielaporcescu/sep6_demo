import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import classes from "./BarChart.module.css";

function TotalFlightsPetMonthFromOriginPercentage({ data, isLoaded }) {
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
          backgroundColor: "rgba(85,53,85,1)",
          borderWidth: 2,
          data: originEWR,
        },
        {
          label: "JFK",
          backgroundColor: "rgba(150,197,176,1)",
          borderWidth: 2,
          data: originJFK,
        },
        {
          label: "LGA",
          backgroundColor: "rgba(173,241,210,1)",
          borderWidth: 2,
          data: originLGA,
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
              "Total number of flights per month from the three origins in one plot. STACKED PERCENTAGE",
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
                stacked: true,
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                stacked: true,
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

export default TotalFlightsPetMonthFromOriginPercentage;
