import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import Spinner from "../elements/spinner";

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
          data: originEWR,
          borderWidth: 2,
          borderColor: "#EE8434",
          backgroundColor: "#EE84344D",
        },
        {
          label: "JFK",
          data: originJFK,
          borderWidth: 2,
          borderColor: "#C95D63",
          backgroundColor: "#C95D634D",
        },
        {
          label: "LGA",
          data: originLGA,
          borderWidth: 2,
          borderColor: "#496DDB",
          backgroundColor: "#496DDB4D",
        },
      ],
    });
  }, [isLoaded]);

  return (
    <div className={classes.BarChart}>
      {!isLoaded ? (
        <Spinner />
      ) : (
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
                    labelString: "Destination",
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

export default TopTenDestinationsPerOrigin;
