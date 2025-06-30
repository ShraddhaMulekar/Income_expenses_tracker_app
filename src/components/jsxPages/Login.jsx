import React, { useState } from "react";
import backendUrl from "../../../config/backendUrl.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${backendUrl}user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    console.log(data);
    alert(data.msg);

    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/");
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          name="email"
          value={form.email}
          onChange={handleInput}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          name="password"
          value={form.password}
          onChange={handleInput}
        />
      </div>
      <button onSubmit={handleSubmit}>Log in!</button>
    </form>
    <p>not registered! <button onClick={()=>navigate("/signin")}>Sign in!</button></p>
    </div>
  );
};

export default Login;
