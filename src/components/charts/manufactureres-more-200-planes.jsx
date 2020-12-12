import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import Loader from "../elements/loader";

function ManufacturesMore200Planes({ data, isLoaded }) {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    let manufacturers = [];
    let planes = [];

    if (isLoaded) {
      for (const dataObj of data) {
        manufacturers.push(dataObj.manufacturer);
        planes.push(parseInt(dataObj.count));
      }
    }
    setChartData({
      labels: manufacturers,
      datasets: [
        {
          label: "manufacturer",
          backgroundColor: "#4bc0c04d",
          borderColor: "#4bc0c0",
          borderWidth: 2,
          data: planes,
        },
      ],
    });
  }, [isLoaded, data]);

  return (
    <div>
      {!isLoaded ? (
        <Loader />
      ) : (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "The manufacturers that have more than 200 planes", display: true },
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Number of planes",
                  },
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
                  scaleLabel: {
                    display: true,
                    labelString: "Manufacturer",
                  },
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

export default ManufacturesMore200Planes;
