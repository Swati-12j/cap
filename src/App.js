import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import ManageClasses from "./ManageClasses";
import StudentList from "./StudentList";
import SectionsList from "./SectionsList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-classes" element={<ManageClasses />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/sections-list" element={<SectionsList />} />
      </Routes>
    </Router>
  );
};

export default App;
