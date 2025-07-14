import React, { useEffect, useState } from "react";
import backendUrl from "../../../config/backendUrl";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [editData, setEditData] = useState(null);
  const token = localStorage.getItem("token");

  const fetchTransaction = async () => {
    try {
      const res = await fetch(`${backendUrl}expenses/check`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      // console.log(data.expense);
      setTransactions(data.expense);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  //Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this transaction?"))
      return;

    try {
      const res = await fetch(`${backendUrl}expenses/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      alert(data.msg);
      fetchTransaction();
    } catch (error) {
      console.log(error);
    }
  };

  //Edit
  const handleEditForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${backendUrl}expenses/update/${editData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editData),
      });
      const data = await res.json();
      alert(data.msg);
      setEditData(null);
      fetchTransaction();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditInput = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>All Transactions</h2>
      <table
        border="2"
        cellPadding="8"
        style={{
          margin: "auto",
          borderCollapse: "collapse",
          width: "95%",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Type</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        {transactions.map((transaction) => (
          <tbody key={transaction._id}>
            <tr>
              <td>
                {new Date(transaction.date)
                  .toLocaleDateString("en-GB")
                  .replace(/\//g, "-")}
              </td>
              <td>{transaction.title}</td>
              <td>{transaction.type}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <button onClick={() => setEditData(transaction)}>Edit</button>
              </td>
              <td>
                <button
                  style={{
                    background: "#de0505",
                    color: "white",
                    margin: "8px 0",
                  }}
                  onClick={() => handleDelete(transaction._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <br />
      <br />
      <br />
      {/* form for edit */}
      {editData && (
        <div
          style={{
            // marginTop: "20px",
            padding: "10px",
            border: "1px solid #ccc",
            margin: "auto",
            width: "30%",
            textAlign: "center",
          }}
        >
          <h3>Edit Transaction</h3>
          <br />
          <form
            style={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
            }}
            onSubmit={handleEditForm}
          >
            <div>
              <label>
                Date:
                <input
                  type="date"
                  name="date"
                  value={editData.date.slice(0, 10)}
                  onChange={handleEditInput}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Type:
                <select
                  name="type"
                  value={editData.type}
                  onChange={handleEditInput}
                  required
                >
                  <option value="Income">Income</option>
                  <option value="Expenses">Expenses</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={editData.title}
                  onChange={handleEditInput}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Category:
                <input
                  type="text"
                  name="category"
                  value={editData.category}
                  onChange={handleEditInput}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Amount:
                <input
                  type="number"
                  name="amount"
                  value={editData.amount}
                  onChange={handleEditInput}
                  required
                />
              </label>
            </div>
            <div style={{ marginTop: "10px" }}>
              <button type="submit">Save Changes</button>
              <button
                type="button"
                onClick={() => setEditData(null)}
                style={{ marginLeft: "10px" }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Transaction;
