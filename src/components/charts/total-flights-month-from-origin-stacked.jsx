import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import Loader from "../elements/loader";

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
          data: originEWR,
          borderWidth: 2,
          borderColor: "#ADFCF9",
          backgroundColor: "#ADFCF980",
        },
        {
          label: "JFK",
          data: originJFK,
          borderWidth: 2,
          borderColor: "#89A894",
          backgroundColor: "#89A89480",
        },
        {
          label: "LGA",
          data: originLGA,
          borderWidth: 2,
          borderColor: "#341C1C",
          backgroundColor: "#341C1C80",
        },
      ],
    });
  }, [isLoaded]);

  return (
    <div>
      {!isLoaded ? (
        <Loader />
      ) : (
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
                    labelString: "Number of flights",
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
      )}
    </div>
  );
}

export default TotalFlightsPetMonthFromOriginStacked;
