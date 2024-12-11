import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
    const username = e.target.elements.username.value.trim();
    const password = e.target.elements.password.value.trim();

    
    const passwordConditions = {
      minLength: 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[@#$%^&*]/.test(password),
    };

    if (
      username === "12106956" &&
      password === "Vikas@123" &&
      Object.values(passwordConditions).every(Boolean)
    ) {
     
      toast.success("Login Successful!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000); 
    } else {
      
      toast.error("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <ToastContainer /> 
      <div className="login-image">
        <img src="/images/image.png" alt="Login Illustration" />
      </div>

      <div className="login-form">
        <h1>Student Management System</h1>
        <br />
        <img src="/images/calender.png" className="img" alt="Calendar" />
        <h2>Login Panel</h2>

        <form onSubmit={handleLogin}>
          <select className="dropdown">
            <option>Administrator</option>
            <option>Teacher</option>
            <option>Student</option>
          </select>

          <input
            type="text"
            name="username"
            placeholder="Enter your u_id"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
