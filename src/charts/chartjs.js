import React from "react";
import { Line } from "react-chartjs-2";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First Dataset",
      data: [400, 300, 500, 200, 600, 400, 700],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 2,
    },
  ],
};

const ReactChart = () => {
  return <Line data={data} />;
};

export default ReactChart;
