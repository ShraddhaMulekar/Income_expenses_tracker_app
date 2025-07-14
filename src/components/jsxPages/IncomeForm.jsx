import React, { useState } from "react";
import "../css/IncomeForm.css";
import { AiFillCalculator } from "react-icons/ai";
import { IoCameraSharp } from "react-icons/io5";
import {
  MdCategory,
  MdOutlinePayments,
  MdOutlineSubtitles,
} from "react-icons/md";
import { RiCalendar2Fill } from "react-icons/ri";
import backendUrl from "../../../config/backendUrl";

const IncomeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    amount: "",
    notes: "",
    date: "",
    type: "Expenses",
    payment: "",
    recurring: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const res = await fetch(`${backendUrl}expenses/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();

    alert(data.msg);
    setFormData({
      title: "",
      category: "",
      amount: "",
      notes: "",
      date: "",
      type: "",
      payment: "",
      recurring: "",
    });
  };

  return (
    <div className="form_main_container">
      <h2>Add Income / Expenses Form </h2>
      <form className="form_container" onSubmit={handleSubmit}>
        <div className="form_opt">
          <span>
            <label htmlFor="type">Type: </label>
          </span>
          <div className="form_input_logo">
            <select
              className="form_input"
              name="type"
              value={formData.type}
              onChange={handleInput}
            >
              <option value="">select type</option>
              <option value="Income">Income</option>
              <option value="Expenses">Expenses</option>
            </select>
          </div>
        </div>

        <div className="form_opt">
          <label htmlFor="title">Title: </label>
          <div className="form_input_logo">
            <input
              className="form_input"
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInput}
              required
            />
            <MdOutlineSubtitles className="form_img" />
          </div>
        </div>

        <div className="form_opt">
          <label htmlFor="incomeAmt">Amount: </label>
          <div className="form_input_logo">
            <input
              className="form_input"
              id="incomeAmt"
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInput}
              required
            />
            <AiFillCalculator className="form_img" />
          </div>
        </div>

        <div className="form_opt">
          <label htmlFor="category">Category: </label>
          <div className="form_input_logo">
            <input
              className="form_input"
              id="category"
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInput}
              required
            />
            <MdCategory className="form_img" />
          </div>
        </div>

        <div className="form_opt">
          <label htmlFor="payment_method">Payment Method: </label>
          <div className="form_input_logo">
            <select
              className="form_input"
              name="payment"
              value={formData.payment}
              onChange={handleInput}
              required
            >
              <option value="">select for payment method</option>
              <option value="Bank">Bank</option>
              <option value="Cash">Cash</option>
            </select>
            </div>
        </div>

        <div className="form_opt">
          <label htmlFor="notes">Notes: </label>
          <div className="form_input_logo">
            <input
              className="form_input"
              id="notes"
              type="text"
              name="notes"
              value={formData.notes}
              onChange={handleInput}
            />
            <IoCameraSharp className="form_img" />
          </div>
        </div>

        <div className="form_opt">
          <input
            id="date"
            className="form_input"
            type="date"
            name="date"
            onChange={handleInput}
            value={formData.date}
            required
          />
        </div>

        <div className="form_opt">
          <label htmlFor="reminder">Recurring? Set Reminder</label>
          <div className="form_input_logo">
            <textarea
              className="form_input_reminder"
              id="reminder"
              type="text"
              name="recurring"
              value={formData.recurring}
              onChange={handleInput}
            />
            <RiCalendar2Fill className="form_img" />
          </div>
        </div>

        <button onClick={handleSubmit} type="submit">
          SAVE
        </button>
      </form>
    </div>
  );
};

export default IncomeForm;
