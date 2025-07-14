import React, { useEffect, useState } from "react";
import backendUrl from "../../../config/backendUrl";
import { Line } from "react-chartjs-2";

import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
);

const ExpensesChart = () => {
  const [expenses, setExpenses] = useState([]);
  const token = localStorage.getItem("token");

  const fetchExpeses = async () => {
    try {
      const res = await fetch(`${backendUrl}expenses/check`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
    //   console.log(data);
      const filterExp = (data.expense || []).filter(
        (exp) => exp.type === "Expenses"
      );
      setExpenses(filterExp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpeses();
  }, []);

  const labels = expenses.map((exp) =>
    new Date(exp.date).toLocaleDateString("en-GB").replace(/\//g, "-")
  );

  const amounts = expenses.map((exp) => +exp.amount);

  const data = {
    labels,
    datasets: [
      {
        label: "Expenses",
        data: amounts,
        borderColor: "#f44336",
        backgroundColor: "rgba(244,67,54,0.3)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Expenses Over Time" },
    },
  };

  return (
    <div style={{ width: "500px", margin: "40px auto" }}>
      <h2>Expenses</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ExpensesChart;
