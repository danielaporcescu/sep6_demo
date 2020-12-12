import React, { useEffect, useRef } from "react";
import { Chart } from "react-chartjs-2";

function OriginDailyMeanTemperature({ data, isLoaded }) {
  const canvas = useRef(null);
  useEffect(() => {
    let chartDataJfk = [];
    let chartDataEwr = [];
    let chartDataLga = [];

    if (isLoaded) {
      for (let dataObj of data.jfkValues) {
        chartDataJfk.push({
          x: new Date(dataObj.date),
          y: dataObj.value,
        });
      }
      for (let dataObj of data.ewrValues) {
        chartDataEwr.push({
          x: new Date(dataObj.date),
          y: dataObj.value,
        });
      }
      for (let dataObj of data.lgaValues) {
        chartDataLga.push({
          x: new Date(dataObj.date),
          y: dataObj.value,
        });
      }
    }
    const cfg = {
      type: "scatter",
      data: {
        datasets: [
          {
            label: "JFK",
            data: chartDataJfk,
            borderWidth: 1,
            borderColor: "#5998C5",
            backgroundColor: "#5998C580",
          },
          {
            label: "EWR",
            data: chartDataEwr,
            borderWidth: 1,
            borderColor: "#FFDD4A",
            backgroundColor: "#FFDD4A80",
          },
          {
            label: "LGA",
            data: chartDataLga,
            borderWidth: 1,
            borderColor: "#E03616",
            backgroundColor: "#E0361680",
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Date",
              },
              type: "time",
              ticks: {
                min: 1356994800000, // miliseconds equivalent to 1 Jan 2013
                max: 1388444400000, // miliseconds equivalent to 31 Dec 2013
                displayFormats: {
                  quarter: "MMM D",
                },
              },
              position: "bottom",
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Temperature",
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
    const chart = new Chart(canvas.current.getContext("2d"), cfg);
    return () => chart.destroy();
  }, [isLoaded, data]);

  return (
    <div className="chartjs-wrapper">
      <canvas ref={canvas} className="chartjs"></canvas>
    </div>
  );
}

export default OriginDailyMeanTemperature;
