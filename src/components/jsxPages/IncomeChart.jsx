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
  Filler
} from "chart.js";

Chart.register(
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
);

const IncomeChart = () => {
  const [incomes, setIncomes] = useState([]);
  const token = localStorage.getItem("token");
  const fetchIncome = async () => {
    const res = await fetch(`${backendUrl}expenses/check`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    // console.log(data);
    const filterIncome = (data.expense || []).filter(
      (inc) => inc.type === "Income"
    );
    setIncomes(filterIncome);
  };
  useEffect(() => {
    fetchIncome();
  }, []);

  const labels = incomes.map((inc) =>
    new Date(inc.date).toLocaleDateString("en-GB").replace(/\//g, "-")
  );

  const amounts = incomes.map((inc) => +inc.amount);

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: amounts,
        backgroundColor: "lightGreen",
        borderColor: "green",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Income Over Time" },
    },
  };

  return (
    <div style={{ width: "500px", margin: "40px auto" }}>
      <h2>Income</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default IncomeChart;
