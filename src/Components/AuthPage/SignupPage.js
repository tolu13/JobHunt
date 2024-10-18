import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { handleSignup } from "../../auth/SignupAuth";
import "./SignupPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user_type, setUser_type] = useState("job_seeker");
  const navigate = useNavigate();

  const handleUserTypeChange = (e) => {
    setUser_type(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await handleSignup(name, email, password, user_type);
    console.log(result);
    if (result.success) {
      // redirect to login page
      navigate('/auth');
      } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="signup-section">
      <div className="signup-img">
        <img className="signup-pics" src="job-hunt.jpg" alt="signup pics" />
      </div>
      <form onSubmit={handleSubmit} className="handleSub">
        <input
          className="Optioname"
          type="text"
          placeholder="Input your name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          className="optionemail"
          placeholder="input a valid email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="Optionpass"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select
          value={user_type}
          className="drpdwn"
          onChange={handleUserTypeChange}
          required
        >
          <option value="" className="selectuser">
            Select User Type
          </option>
          <option value="job_seeker" className="jobseeker">
            job_seeker
          </option>
          <option value="company" className="company">
            company
          </option>
        </select>
        <ToastContainer />
        <button type="submit" className="sbit">
          Signup
        </button>
      </form>
    </div>
  );
};
