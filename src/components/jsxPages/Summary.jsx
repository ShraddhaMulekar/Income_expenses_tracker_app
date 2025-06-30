import React, { useEffect, useState } from "react";
import backendUrl from "../../../config/backendUrl";

const Summary = () => {
  const [summaryData, setSummaryData] = useState([]);

  const fetchSummary = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${backendUrl}expenses/check`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      //   console.log(data.expense);
      if (data.expense) {
        setSummaryData(data.expense);
      } else {
        setSummaryData([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  const totalIncome = summaryData
    .filter((inc) => inc.type === "Income")
    .reduce((a, b) => a + Number(b.amount), 0);

  const totalExpenses = summaryData
    .filter((summary) => summary.type === "Expenses")
    .reduce((a, b) => a + Number(b.amount), 0);

  const balance = totalIncome - totalExpenses;
  //   console.log(totalIncome, totalExpenses, balance);
  return (
    <div>
      <h2>Summary</h2>
      <table
        border="2"
        cellPadding="8"
        style={{
          margin: "auto",
          borderCollapse: "collapse",
          width: "50%",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th>Total Income</th>
            <th>Total Expenses</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalIncome}</td>
            <td>{totalExpenses}</td>
            <td>{balance}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
