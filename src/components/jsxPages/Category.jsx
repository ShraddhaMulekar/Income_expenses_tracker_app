import React, { useEffect, useState } from "react";
import backendUrl from "../../../config/backendUrl";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategory = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${backendUrl}expenses/check`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      //   console.log(data.expense);
      setCategories(data.expense);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  const uniqueCategory = [...new Set(categories.map((c) => c.category))];

  return (
    <div>
      <h2>Category</h2>
      <table
        border="2"
        cellPadding="8"
        style={{
          margin: "auto",
          borderCollapse: "collapse",
          width: "30%",
          textAlign: "center",
        }}
      >
        {uniqueCategory.map((cat, i) => (
          <tr key={i}>
            <td>{cat}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Category;
