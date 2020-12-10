import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import classes from "./BarChart.module.css";

function TotalFlightsPetMonthFromOriginStacked({ data, isLoaded }) {
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
          backgroundColor: "#ADFCF9",
          borderWidth: 2,
          data: originEWR,
        },
        {
          label: "JFK",
          backgroundColor: "#89A894",
          borderWidth: 2,
          data: originJFK,
        },
        {
          label: "LGA",
          backgroundColor: "#341C1C",
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
              "Total number of flights per month from the three origins in one plot. FREQUENCY STACKED",
            display: true,
          },
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
                  labelString: 'Month'
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

export default TotalFlightsPetMonthFromOriginStacked;
