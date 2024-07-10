import React, { useState } from "react";
import "./LoginPopop.css";
import { assets } from "../../assets/assets";
const LoginPopop = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login-popop">
      <form className="login-popop-container">
        <div className="login-popop-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popop-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="passward" placeholder="Passward" required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popop-condition">
          <input type="checkbox" required />
          <p>By Continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new Account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>{" "}
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopop;
