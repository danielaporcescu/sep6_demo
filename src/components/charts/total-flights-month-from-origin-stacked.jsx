import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { FLIGHTS_CHART_DATA } from "../../helpers/url";
import classes from "./BarChart.module.css";

function TotalFlightsPetMonthFromOriginStacked() {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let months = [];
    let originEWR = [];
    let originJFK = [];
    let originLGA = [];

    axios
      .get(FLIGHTS_CHART_DATA)
      .then((res) => {
        for (const dataObj of res.data.flightsPerMonthFromOrigins) {
          months.push(parseInt(dataObj.month));
          originEWR.push(parseInt(dataObj.ewr));
          originJFK.push(parseInt(dataObj.jfk));
          originLGA.push(parseInt(dataObj.lga));
        }
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
            text: "Total number of flights per month from the three origins in one plot. FREQUENCY STACKED",
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

export default TotalFlightsPetMonthFromOriginStacked;
