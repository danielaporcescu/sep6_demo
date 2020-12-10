import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import classes from "./BarChart.module.css";

function TopTenDestinationsPerOrigin({ data, isLoaded }) {
  const [chartData, setChartData] = useState({});

  let airportNames = [];
  let originEWR = [];
  let originJFK = [];
  let originLGA = [];

  if (isLoaded) {
    for (let dataObj of data) {
      airportNames.push(dataObj.airportName);
      originEWR.push(parseInt(dataObj.ewr));
      originJFK.push(parseInt(dataObj.jfk));
      originLGA.push(parseInt(dataObj.lga));
    }
  }

  useEffect(() => {
    setChartData({
      labels: airportNames,
      datasets: [
        {
          label: "ERW",
          backgroundColor: "rgba(0,59,54,1)",
          borderWidth: 2,
          data: originEWR,
        },
        {
          label: "JFK",
          backgroundColor: "rgba(233,138,21,1)",
          borderWidth: 2,
          data: originJFK,
        },
        {
          label: "LGA",
          backgroundColor: "rgba(89,17,77,1)",
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
            text: "TOP 10 destinations, Flights nr per origin",
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
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'Destination'
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

export default TopTenDestinationsPerOrigin;
