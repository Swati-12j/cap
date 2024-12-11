import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ManageClasses.css";

const ManageClasses = () => {
 
  const [attendance, setAttendance] = useState([
    { id: 1, firstName: "Jon", lastName: "Mbeeka", otherName: "none", admissionNo: "AMS110", class: "Nine", classArm: "N1", session: "2021/2022", term: "First", status: "Present", date: "2022-06-06" },
    { id: 2, firstName: "Aida", lastName: "Moraa", otherName: "none", admissionNo: "AMS133", class: "Nine", classArm: "N1", session: "2021/2022", term: "First", status: "Absent", date: "2022-06-06" },
    { id: 3, firstName: "Miguel", lastName: "Kioko", otherName: "none", admissionNo: "AMS135", class: "Nine", classArm: "N1", session: "2021/2022", term: "First", status: "Present", date: "2022-06-06" },
    { id: 4, firstName: "Sergio", lastName: "Ombati", otherName: "none", admissionNo: "AMS144", class: "Nine", classArm: "N1", session: "2021/2022", term: "First", status: "Present", date: "2022-06-06" },
    { id: 5, firstName: "Lyn", lastName: "Maiko", otherName: "none", admissionNo: "AMS148", class: "Nine", classArm: "N1", session: "2021/2022", term: "First", status: "Present", date: "2022-06-06" },
    { id: 6, firstName: "Victor", lastName: "Ochieng", otherName: "none", admissionNo: "AMS150", class: "Nine", classArm: "N1", session: "2021/2022", term: "First", status: "Absent", date: "2022-06-06" },
    { id: 7, firstName: "Alice", lastName: "Wanjiru", otherName: "none", admissionNo: "AMS155", class: "Nine", classArm: "N1", session: "2021/2022", term: "First", status: "Present", date: "2022-06-06" },
    { id: 8, firstName: "James", lastName: "Njoroge", otherName: "none", admissionNo: "AMS160", class: "Nine", classArm: "N1", session: "2021/2022", term: "First", status: "Absent", date: "2022-06-06" },
    { id: 9, firstName: "Grace", lastName: "Otieno", otherName: "none", admissionNo: "AMS165", class: "Nine", classArm: "N1", session: "2021/2022", term: "First", status: "Present", date: "2022-06-06" },
    { id: 10, firstName: "Paul", lastName: "Kibet", otherName: "none", admissionNo: "AMS170", class: "Nine", classArm: "N1", session: "2021/2022", term: "First", status: "Absent", date: "2022-06-06" },
  ]);

  const [showHeadcount, setShowHeadcount] = useState(false);
  const [headcount, setHeadcount] = useState("");

  const toggleStatus = (id) => {
    setAttendance((prevAttendance) =>
      prevAttendance.map((student) =>
        student.id === id
          ? { ...student, status: student.status === "Present" ? "Absent" : "Present" }
          : student
      )
    );
  };

  const handleHeadcountSubmit = () => {
    if (headcount === "") {
      toast.error("Please enter a valid headcount.");
      return;
    }

    const presentCount = attendance.filter((student) => student.status === "Present").length;

    if (parseInt(headcount) === presentCount) {
      toast.success(`Headcount submitted: ${headcount}. `);
    } else {
      toast.error(
        `Wrong HeadCount: ${headcount}. It does not match the number of present students (${presentCount}).`
      );
    }

    setShowHeadcount(false);
    setHeadcount("");
  };

  return (
    <div className="manage-classes-container">
      <ToastContainer />
      <h2>Class Attendance</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Other Name</th>
            <th>Admission No</th>
            <th>Class</th>
            <th>Class Arm</th>
            <th>Session</th>
            <th>Term</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.otherName}</td>
              <td>{student.admissionNo}</td>
              <td>{student.class}</td>
              <td>{student.classArm}</td>
              <td>{student.session}</td>
              <td>{student.term}</td>
              <td style={{ color: student.status === "Present" ? "green" : "red" }}>
                {student.status}
              </td>
              <td>{student.date}</td>
              <td>
                <button
                  className={`toggle-btn ${
                    student.status === "Present" ? "present" : "absent"
                  }`}
                  onClick={() => toggleStatus(student.id)}
                >
                  {student.status === "Present" ? "Mark Absent" : "Mark Present"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="headcount-container">
        <button
          className="show-headcount-btn"
          onClick={() => setShowHeadcount(true)}
        >
          Add Headcount
        </button>
        {showHeadcount && (
          <div className="headcount-input">
            <input
              type="number"
              placeholder="Enter headcount"
              value={headcount}
              onChange={(e) => setHeadcount(e.target.value)}
            />
            <button
              className="submit-headcount-btn"
              onClick={handleHeadcountSubmit}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageClasses;
