import React, { useEffect, useState } from "react";
import backendUrl from "../../../config/backendUrl";
import { Pie } from "react-chartjs-2";

import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const CategoryPieChart = () => {
  const [categoriesChart, setCategoriesChart] = useState([]);

  const fetchCategoriesChart = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${backendUrl}expenses/check`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.expense) {
      setCategoriesChart(data.expense);
    } else {
      setCategoriesChart([]);
    }
  };

  useEffect(() => {
    fetchCategoriesChart();
  }, []);

  //totals
  const totalIncome = categoriesChart
    .filter((inc) => inc.type === "Income")
    .reduce((a, b) => a + +b.amount, 0);

  const totalExpenses = categoriesChart
    .filter((exp) => exp.type === "Expenses")
    .reduce((a, b) => a + +b.amount, 0);

  const balance = totalIncome - totalExpenses;

  console.log(totalIncome, totalExpenses, balance);

  const pieChart = {
    label: ["Income", "Expenses", "Balance"],
    datasets: [
      {
        label: "Summary",
        data: [totalIncome, totalExpenses, balance],
        backgroundColor: ["#4CAF50", "#F44336", "#0560ab"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
        <h2>Category Chart</h2>
        <Pie data={pieChart} />
    </div>
);
};

export default CategoryPieChart;
