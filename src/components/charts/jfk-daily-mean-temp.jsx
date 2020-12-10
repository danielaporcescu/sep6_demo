import React, { useEffect, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";

function Example({ data, isLoaded }) {
  //   const [chartData, setChartData] = useState({});

  let datainChart = [];

  if (isLoaded) {
    for (let dataObj of data) {
      datainChart.push({x: new Date(dataObj.date), y: dataObj.value})
    }
  }

  const canvas = useRef(null);
  useEffect(() => {
    const cfg = {
      type: "scatter",
      data: {
        datasets: [
          {
            label: "Scatter Dataset",
            data: datainChart,
            backgroundColor: "rgb(255, 99, 132)",
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              type: "time",
              ticks: {
                min: 1356994800000, // miliseconds equivalent to 1 Jan 2013
                max: 1388444400000, // miliseconds equivalent to 31 Dec 2013
                displayFormats: {
                  quarter: "MMM YYYY",
                },
              },
              position: "bottom",
            },
          ],
          yAxes: [
            {
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
  });

  return (
    <div className="chartjs-wrapper">
      <canvas ref={canvas} className="chartjs"></canvas>
    </div>
  );
}

export default Example;
