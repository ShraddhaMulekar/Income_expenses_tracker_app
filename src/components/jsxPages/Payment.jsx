import React, { useEffect, useState } from "react";
import backendUrl from "../../../config/backendUrl";

const Payment = () => {
  const [paymentData, setPaymentData] = useState([]);

  const fetchPayment = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${backendUrl}expenses/check`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setPaymentData(data.expense);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPayment();
  }, []);

  const uniquePayment = [...new Set(paymentData.map((pay) => pay.payment))];
//   console.log(uniquePayment);
  return (
    <div>
      <h2>Payment Methods</h2>
      <br />
      <div style={{width:"15%", margin:"auto"}}>
      {uniquePayment.map((pay, i) => (
        <li key={i}>{pay}</li>
      ))}
      </div>
    </div>
  );
};

export default Payment;
