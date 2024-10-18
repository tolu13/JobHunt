import React, { useState } from "react";
import { handleLogin } from "../../auth/LoginAuth";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await handleLogin(email, password);
    if (result.success) {
      // Redirect to dashboard
      console.log(result);
      localStorage.setItem('token', result.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${result.token}`;
      toast.success("Successfully login");
      if (result.user_type === 'company') {
        navigate("/company-dashboard");
      } else if (result.user_type === 'job_seeker') {
        navigate("/");
      }
    } else {
      setError("Login failed please try again");
    }
  };
  return (
    <div className="contain">
      <div className="top-text">
        <div className="avatar-img"></div>
        <h4 className="welcome">Welcome to JobHunt</h4>
        <p className="action">Login to get Started </p>
      </div>
      <div className="container-box">
        <form className="holder" onSubmit={handleSubmit}>
          <input
            className="Login-email"
            type="text"
            placeholder="enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="Login-pass"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="log" type="submit">
            Login
          </button>
          <h6 className="acc my-4">
            {" "}
            Don't have an account ?
            <br />
            <Link to="/signup" className="sign">
              Signup
            </Link>
          </h6>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
