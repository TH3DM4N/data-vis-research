import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "January", value: 400 },
  { name: "February", value: 300 },
  { name: "March", value: 500 },
  { name: "April", value: 200 },
  { name: "May", value: 600 },
  { name: "June", value: 400 },
  { name: "July", value: 700 },
];

const Rechart = () => {
  return (
    <LineChart width={600} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default Rechart;
