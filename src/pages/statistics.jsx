import React, { Component } from "react";
import ChartComponent from "../components/chartComponent";
class Statistics extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>TEST STATISTICS</div>
        <ChartComponent />
        <ChartComponent />
        <ChartComponent />
      </div>
    );
  }
}

export default Statistics;
