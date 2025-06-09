import React from "react";
import "../css/IncomeForm.css";
import { AiFillCalculator } from "react-icons/ai";
import { IoCameraSharp } from "react-icons/io5";
import { MdCategory, MdOutlinePayments } from "react-icons/md";
import { RiCalendar2Fill } from "react-icons/ri";

const IncomeForm = () => {
  return (
    <div>
      <h2>Add Income</h2>
      <form className="form_container">
        <div className="form_opt">
          <label for="incomeAmt">Income</label>
          <div className="form_input_logo">
            <input className="form_input" id="incomeAmt" type="number" />
            <AiFillCalculator className="form_img" />
          </div>
        </div>
        <div className="form_opt">
          <label for="category">Category</label>
          <div className="form_input_logo">
            <input className="form_input" id="category" type="text" />
            <MdCategory className="form_img" />
          </div>
        </div>
        <div className="form_opt">
          <label for="payment_method">Payment Method</label>
          <div className="form_input_logo">
            <input className="form_input" id="payment_method" type="text" />
            <MdOutlinePayments className="form_img" />
          </div>
        </div>
        <div className="form_opt">
          <label for="notes">Notes</label>
          <div className="form_input_logo">
            <input className="form_input" id="notes" type="number" />
            <IoCameraSharp className="form_img" />
          </div>
        </div>
        <div className="form_opt">
          <input className="form_input" type="date" />
        </div>
        <div className="form_opt">
          <input className="form_input" type="time" />
        </div>
        <div className="form_opt">
          <label for="reminder">Recurring? Set Reminder</label>
          <div className="form_input_logo">
            <textarea
              className="form_input_reminder"
              id="reminder"
              type="text"
            />
            <RiCalendar2Fill className="form_img" />
          </div>
        </div>
        <button type="submit">SAVE</button>
      </form>
    </div>
  );
};

export default IncomeForm;
