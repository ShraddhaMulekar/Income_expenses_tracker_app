import React, { useEffect, useState } from "react";
import backendUrl from "../../../config/backendUrl";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  plugins,
  PointElement,
  Tooltip,
} from "chart.js";

Chart.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const BudgetBalChart = () => {
  const [bugets, setBudgets] = useState([]);
  const token = localStorage.getItem("token");

  const fetchBudget = async () => {
    const res = await fetch(`${backendUrl}expenses/check`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    const totalExp = (data.expense || [])
      .filter((exp) => exp.type === "Expenses")
      .reduce((a, b) => a + +b.amount, 0);
    const totalInc = (data.expense || [])
      .filter((inc) => inc.type === "Income")
      .reduce((a, b) => a + +b.amount, 0);
    const saving = totalInc - totalExp;
    const savingObj = {
      amount: saving,
      date: new Date().toISOString(),
    };
    setBudgets([savingObj]);
  };

  useEffect(() => {
    fetchBudget();
  }, []);

  const labels = bugets.map((bud) =>
    new Date(bud.date).toLocaleDateString("en-GB").replace(/\//g, "-")
  );

  // console.log(bugets)
  const amounts = bugets.map((bud) => bud.amount);
  // console.log(uniqueAmount)

  const data = {
    labels,
    datasets: [
      {
        label: "Saving",
        data: amounts,
        borderColor: "blue",
        backgroundColor: "lightBlue",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Saving Over Time",
      },
    },
  };

  return (
    <div style={{ width: "500px", margin: "40px auto" }}>
      <h2>Budget</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default BudgetBalChart;
