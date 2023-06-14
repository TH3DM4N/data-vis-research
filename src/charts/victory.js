import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryTooltip,
} from "victory";

const data = [
  { x: 1, y: 400 },
  { x: 2, y: 300 },
  { x: 3, y: 500 },
  { x: 4, y: 200 },
  { x: 5, y: 600 },
  { x: 6, y: 400 },
  { x: 7, y: 700 },
];

const Victory = () => {
  return (
    <VictoryChart width={600} height={400}>
      <VictoryAxis
        tickValues={[1, 2, 3, 4, 5, 6, 7]}
        tickFormat={[
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ]}
      />
      <VictoryAxis dependentAxis />
      <VictoryLine
        data={data}
        x="x"
        y="y"
        labelComponent={<VictoryTooltip />}
      />
    </VictoryChart>
  );
};

export default Victory;
