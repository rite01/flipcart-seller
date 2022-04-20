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
   
        data: [1000, 5000, 3500, 10000, 6506, 7005, 5000],
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
         
        </div>
      </div>
    </div>
  );
};
