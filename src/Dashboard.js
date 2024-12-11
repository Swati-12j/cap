import React from "react";
import { FaChalkboardTeacher, FaUserGraduate, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
     
      <aside className="sidebar">
        <h2>AMS</h2>
        <ul>
          <li>
            <FaUsers /> Dashboard
          </li>
          <li onClick={() => navigate("/manage-classes")}>
            <FaUserGraduate /> Manage Attendance
          </li>
          <li>
            <FaChalkboardTeacher /> Manage Teachers
          </li>
          <li>
            <FaCalendarAlt /> Manage Section 
          </li>
        </ul>
      </aside>

     
      <main className="dashboard-main">
        <header>
          <h1>Administrator Dashboard</h1>
          <div className="welcome">Welcome Admin</div>
        </header>

        <section className="dashboard-content">
          <div className="dashboard-card" onClick={() => navigate("/student-list")}>
            <FaUsers className="card-icon" />
            <h3>Students</h3>
            <p>16</p>
          </div>

          <div className="dashboard-card" onClick={() => navigate("/sections-list")}>
            <FaChalkboardTeacher className="card-icon" />
            <h3>Classes</h3>
            <p>3</p>
          </div>

          <div className="dashboard-card">
            <FaCalendarAlt className="card-icon" />
            <h3>Total Attendance</h3>
            <p>53</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
