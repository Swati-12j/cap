import React from "react";
import "./StudentList.css";

const StudentList = () => {
  
  const students = [
    { id: 1, name: "Jon Mbeeka", admissionNo: "K21AK", class: "MTH344" },
    { id: 2, name: "Aida Moraa", admissionNo: "K21DH", class: "INT123" },
    { id: 3, name: "Miguel Kioko", admissionNo: "K21AK", class: "INT243" },
    { id: 4, name: "Sergio Ombati", admissionNo: "K21FG", class: "JKP212" },
    { id: 5, name: "Lyn Maiko", admissionNo: "K21FZ", class: "CSE142" },
    { id: 6, name: "Victor Ochieng", admissionNo: "K21AY", class: "CSE321" },
    { id: 7, name: "Alice Wanjiru", admissionNo: "K21UB", class: "MTH243" },
    { id: 8, name: "James Njoroge", admissionNo: "K21AF", class: "ECE891" },
    { id: 9, name: "Grace Otieno", admissionNo: "K21TG", class: "MEC123" },
    { id: 10, name: "Paul Kibet", admissionNo: "K21AK", class: "PEA231" },
    { id: 11, name: "Student 11", admissionNo: "K21GS", class: "PEV233" },
    { id: 12, name: "Student 12", admissionNo: "K21BP", class: "PES121" },
    { id: 13, name: "Student 13", admissionNo: "K21EN", class: "INT221" },
    { id: 14, name: "Student 14", admissionNo: "K21EY", class: "ECE323" },
    { id: 15, name: "Student 15", admissionNo: "K21FK", class: "CSE332" },
    { id: 16, name: "Student 16", admissionNo: "K21AH", class: "INT220" },
  ];

  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Section</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.admissionNo}</td>
              <td>{student.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
