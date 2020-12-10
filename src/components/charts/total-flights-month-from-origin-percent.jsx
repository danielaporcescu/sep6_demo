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
      originEWR.push((dataObj.ewr));
      originJFK.push((dataObj.jfk));
      originLGA.push((dataObj.lga));
    }
  }

  useEffect(() => {
    setChartData({
      labels: months,
      datasets: [
        {
          label: "ERW",
          data: originEWR,
          borderWidth: 2,
          borderColor: "#D16666",
          backgroundColor: "#D166664D",
        },
        {
          label: "JFK",
          data: originJFK,
          borderWidth: 2,
          borderColor: "#B6C649",
          backgroundColor: "#B6C6494D",
        },
        {
          label: "LGA",
          borderWidth: 2,
          data: originLGA,
          borderColor: "#BC8034",
          backgroundColor: "#BC80344D",
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
                scaleLabel: {
                  display: true,
                  labelString: "Percentage (%)",
                },
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
                scaleLabel: {
                  display: true,
                  labelString: "Month",
                },
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
