import React, { Component } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartComponent = () => {
  const data = [
    { name: "Time 1", humidity: 400, temperature: 2400, light: 2400 },
    { name: "Time 2", humidity: 800, temperature: 200, light: 2000 },
    { name: "Time 3", humidity: 600, temperature: 2010, light: 200 },
    { name: "Time 4", humidity: 800, temperature: 200, light: 2000 },
    { name: "Time 5", humidity: 800, temperature: 200, light: 2000 },
    { name: "Time 6", humidity: 800, temperature: 200, light: 2000 },
    { name: "Time 7", humidity: 800, temperature: 200, light: 2000 },
    { name: "Time 8", humidity: 800, temperature: 200, light: 2000 },
    { name: "Time 9", humidity: 800, temperature: 200, light: 2000 },
    { name: "Time 10", humidity: 800, temperature: 200, light: 2000 },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "3rem 0 1rem 0",
      }}
    >
      <ResponsiveContainer width="90%" height={250}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="humidity" stroke="#8884d8" />
          <Line type="monotone" dataKey="temperature" stroke="red" />
          <Line type="monotone" dataKey="light" stroke="green" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
