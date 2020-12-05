import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { FLIGHTS_PER_MONTH_FROM_ORIGINS_URL } from "../../helpers/url";
import classes from "./BarChart.module.css";

function MultipleBarChart() {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let months = [];
    let originEWR = [];
    let originJFK = [];
    let originLGA = [];

    axios
      .get(FLIGHTS_PER_MONTH_FROM_ORIGINS_URL)
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
              label: "Blue",
              backgroundColor: "rgba(239,131,84,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: originJFK,
            },
            {
              label: "Green",
              backgroundColor: "rgba(176,45,12,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: originEWR,
            },
            {
              label: "Blue",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
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
          title: { text: "Flights per month", display: true },
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

export default MultipleBarChart;
