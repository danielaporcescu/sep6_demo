import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { FLIGHTS_PER_MONTH_URL } from "../../helpers/url";
import classes from "./BarChart.module.css";

function BarChart() {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let flights = [];
    let months = [];
    axios
      .get(FLIGHTS_PER_MONTH_URL)
      .then((res) => {
        for (const dataObj of res.data) {
          flights.push(parseInt(dataObj.numberOfFlights));
          months.push(parseInt(dataObj.month));
        }
        setChartData({
          labels: months,
          datasets: [
            {
              label: "month",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: flights,
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

export default BarChart;
