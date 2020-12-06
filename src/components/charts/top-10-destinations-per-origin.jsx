import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { FLIGHTS_CHART_DATA } from "../../helpers/url";
import classes from "./BarChart.module.css";

function TopTenDestinationsPerOrigin() {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let airportNames = [];
    let originEWR = [];
    let originJFK = [];
    let originLGA = [];

    axios
      .get(FLIGHTS_CHART_DATA)
      .then((res) => {
        for (const dataObj of res.data.topTenDestinationsByFlightsFromOrigins) {
          airportNames.push(dataObj.airportName);
          originEWR.push(parseInt(dataObj.ewr));
          originJFK.push(parseInt(dataObj.jfk));
          originLGA.push(parseInt(dataObj.lga));
        }
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);
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

export default TopTenDestinationsPerOrigin;
