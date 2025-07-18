import React, { useState } from "react";
import backendUrl from "../../../config/backendUrl";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [form, setForm] = useState({ userName: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${backendUrl}user/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    // console.log(data);
    alert(data.msg);
    navigate("/login");
  };

  return (
    <div className="form_container" style={{backgroundColor:"#d8f2f8",height:"100vh"}}>
      <h2>Sign in!</h2>
      <form className="form_opt" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            id="userName"
            placeholder="write your name.."
            name="userName"
            value={form.userName}
            onChange={handleInput}
            className="form_input"
            style={{marginLeft:"10px"}}
          />
        </div> <br />
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="write your email.."
            name="email"
            value={form.email}
            onChange={handleInput}
            className="form_input"
            style={{marginLeft:"10px"}}
          />
        </div> <br />
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="write your password.."
            name="password"
            value={form.password}
            onChange={handleInput}
            className="form_input"
            style={{marginLeft:"10px"}}
          />
        </div><br />
        <button onSubmit={handleSubmit}>Sign in!</button>
      </form>
      <p>
        already registered! 
        <button onClick={() => navigate("/login")}>Log in!</button>
      </p>
    </div>
  );
};

export default SignIn;
