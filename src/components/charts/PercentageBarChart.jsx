import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { FLIGHTS_PER_MONTH_FROM_ORIGINS_PERCENTAGE_URL } from "../../helpers/url";
import classes from "./BarChart.module.css";

function PercentageBarChart() {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let months = [];
    let originEWR = [];
    let originJFK = [];
    let originLGA = [];

    axios
      .get(FLIGHTS_PER_MONTH_FROM_ORIGINS_PERCENTAGE_URL)
      .then((res) => {
        for (const dataObj of res.data) {
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
              backgroundColor: "rgba(85,53,85,1)",
              borderWidth: 2,
              data: originJFK,
            },
            {
              label: "JFK",
              backgroundColor: "rgba(150,197,176,1)",
              borderWidth: 2,
              data: originEWR,
            },
            {
              label: "LGA",
              backgroundColor: "rgba(173,241,210,1)",
              borderWidth: 2,
              data: originLGA,
            }
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
          title: { text: "Flights per month from destination PERCENTAGE", display: true },
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10,
                  beginAtZero: true,
                },
                stacked:true,
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                stacked:true,
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

export default PercentageBarChart;

