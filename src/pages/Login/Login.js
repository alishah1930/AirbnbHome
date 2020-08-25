import React, { useState } from "react";

import logosmall from "../../assets/logosmall.png";

import "./Login.css";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      return alert("Enter Email Address");
    }

    history.push("/dashboard");
  }

  return (
    
    <div className="login">
 <img src={logosmall} alt="" id="logo" />
      <div className="containerLogin">
     

        <div className="contentLogin">
          <p>Book Unique places to stay</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email"> Name*</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label htmlFor="email">Email *</label>
            <input
              type="text"
              id="email"
              placeholder="Enter e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <button type="submit" className="btn">
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
