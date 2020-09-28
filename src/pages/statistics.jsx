import React, { Component } from "react";
import { Divider } from "semantic-ui-react";
import {
  LineChartComponent,
  ScatterChartComponent,
  HistogramComponent,
} from "../components/chartComponents";
class Statistics extends Component {
  state = {
    lineChartData: [
      { name: "Time 1", humidity: 400, temperature: 2400, light: 2400 },
      { name: "Time 2", humidity: 800, temperature: 200, light: 2000 },
      { name: "Time 3", humidity: 600, temperature: 2010, light: 200 },
      { name: "Time 4", humidity: 800, temperature: 200, light: 2000 },
      { name: "Time 5", humidity: 800, temperature: 200, light: 2000 },
      { name: "Time 6", humidity: 800, temperature: 200, light: 2000 },
      { name: "Time 7", humidity: 800, temperature: 200, light: 2000 },
    ],
    scatterChartData: [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ],
    histogramData: [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ],
  };
  constructor(props) {
    super(props);
    document.getElementById("body").className = "whiteTheme";
  }
  render() {
    return (
      <div>
        <Divider />
        <LineChartComponent data={this.state.lineChartData} />
        <Divider />
        <ScatterChartComponent data={this.state.scatterChartData} />
        <Divider />
        <HistogramComponent data={this.state.histogramData} />
        <Divider />
      </div>
    );
  }
}

export default Statistics;
