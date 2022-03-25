import React, { useState } from "react";
import Main from "../../components/Main";
import Sidenav from "../../components/Sidenav/Sidenav";
import "./dash.css";
import { Line } from "react-chartjs-2";


export const Dash = () => {
  const [data] = useState({
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(194, 116, 161, 0.5)",
        borderColor: "rgb(194, 116, 161)",
        data: [65, 59, 90, 81, 56, 55, 40],
      },
    ],
  });
  return (
    <div>
      <Main />
      <Sidenav />
      <div className="dash">
        <h6 className="title"> Dashboard</h6>
        <div className="chartbox">
          <div className="chart">
            <h3 className="mt-5">Line chart Sells</h3>
            <Line data={data} options={{ responsive: true }} />
          </div>
          <div className="chart">
            <h3 className="mt-5">Line chart Sells</h3>
            <Line data={data} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
};
