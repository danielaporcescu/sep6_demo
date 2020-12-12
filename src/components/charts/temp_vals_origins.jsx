import React, { useEffect, useRef, useMemo } from "react";
import { Chart } from "react-chartjs-2";

function OriginsTemperatureAllValues({ data, isLoaded }) {
  let chartDataJfk = useMemo(() => [], []);
  let chartDataEwr = useMemo(() => [], []);
  let chartDataLga = useMemo(() => [], []);

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

  const canvas = useRef(null);
  useEffect(() => {
    const cfg = {
      type: "scatter",
      data: {
        datasets: [
          {
            label: "JFK",
            data: chartDataJfk,
            borderWidth: 1,
            borderColor: "#AA7DCE",
          },
          {
            label: "EWR",
            data: chartDataEwr,
            borderWidth: 1,
            borderColor: "#4D8B31",
          },
          {
            label: "LGA",
            data: chartDataLga,
            borderWidth: 1,
            borderColor: "#FFC800",
          },
        ],
      },
      options: {
        events: [],
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
  }, [isLoaded, chartDataJfk, chartDataLga, chartDataEwr]);

  return (
    <div className="chartjs-wrapper">
      <canvas ref={canvas} className="chartjs"></canvas>
    </div>
  );
}

export default OriginsTemperatureAllValues;
