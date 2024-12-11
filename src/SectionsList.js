import React from "react";
import "./SectionsList.css";

const SectionsList = () => {
 
  const sections = [
    { id: 1, name: "K21AK", class:"Mth405" },
    { id: 2, name: "K21DH", class:"Mth403" },
    { id: 3, name: "K21DR", class:"Mth406" },
  ];

  return (
    <div className="sections-list-container">
      <h2>Sections</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Section Name</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((section, index) => (
            <tr key={section.id}>
              <td>{index + 1}</td>
              <td>{section.name}</td>
              <td>{section.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SectionsList;
