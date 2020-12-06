
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { FLIGHTS_CHART_DATA } from "../../helpers/url";
import classes from "./BarChart.module.css";

function TotalFlightsPerMonth() {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let flights = [];
    let months = [];
    axios
      .get(FLIGHTS_CHART_DATA)
      .then((res) => {
        for (const dataObj of res.data.flightsPerMonth) {
          flights.push(parseInt(dataObj.numberOfFlights));
          months.push(parseInt(dataObj.month));
        }
        setChartData({
          labels: months,
          datasets: [
            {
              label: "month",
              backgroundColor: "rgba(75,192,192,1)",
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
            title: { text: "Total flights per month", display: true },
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

export default TotalFlightsPerMonth;
