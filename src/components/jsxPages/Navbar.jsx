import React, { useState } from "react";
import "../css/Navbar.css";
import { TfiMenuAlt } from "react-icons/tfi";
import {
  MdBarChart,
  MdCategory,
  MdOutlineAccountBalance,
  MdOutlinePayments,
  MdPieChart,
} from "react-icons/md";
import { FaArrowTrendUp, FaBullhorn } from "react-icons/fa6";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="navbar_container">
      <div className="navbar_img_container" onClick={() => navigate("/")}>
        <img style={{ width: "50px" }} src="https://play-lh.googleusercontent.com/k6EFFD6ezn_HBRkW9v6hZSRIr5tuDNYGwI0DXzSh-kv6YrDWPW8ylEky4tOLy6Gry8NB=w240-h480-rw" alt="logo" />
      </div>
      <div className="navbar_content">
        <div className="navbar_opt" onClick={() => navigate("/summary")}>
          <BiSolidBarChartAlt2 />
          <p>Summary</p>
        </div>
        <div className="navbar_opt" onClick={() => navigate("/category")}>
          <MdCategory />
          <p>Category</p>
        </div>
        <div
          className="navbar_opt"
          onClick={() => navigate("/all-transaction")}
        >
          <TfiMenuAlt />
          <p>All Transactions</p>
        </div>
        <div className="navbar_opt" onClick={() => navigate("/payment-method")}>
          <MdOutlinePayments />
          <p>Payment Method</p>
        </div>
        <div className="navbar_opt" onClick={() => navigate("/category-chart")}>
          <MdPieChart />
          <p>Category Chart</p>
        </div>
        <div className="navbar_opt" onClick={() => navigate("/total-budget")}>
          <FaBullhorn />
          <p>Budget</p>
        </div>
        <div className="navbar_opt" onClick={() => navigate("/trend")}>
          <FaArrowTrendUp />
          <p>Trend</p>
        </div>
        <div className="navbar_opt" onClick={()=>navigate("/reminders")}>
          <IoIosNotifications />
          <p>Reminders</p>
        </div>
        <div
          onClick={() => setShowDropDown(!showDropDown)}
          className="navbar_opt"
        >
          <MdOutlineAccountBalance />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              alignContent: "center",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{marginBottom:"5px"}}>Account</p>
            <div style={{marginTop:"10px"}}>
              {showDropDown && (
              <div>
                <p onClick={() => navigate("signin")}>Sign in!</p>
                <p onClick={() => navigate("login")}>Log in!</p>
                <p onClick={() => navigate("logout")}>Log Out!</p>
              </div>
            )}
            </div>
          </div>
        </div>
        <div
          className="navbar_opt"
          onClick={() => navigate("/payment-method-chart")}
        >
          <MdBarChart />
          <p>Payment method chart</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
