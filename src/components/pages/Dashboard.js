import React from "react";
import { Link } from "react-router-dom";

function Dashboard({ studentData }) {
  let students = studentData.map((d, i) => {
    return (
      <Link key={i} to={`/students/${d.symbol}`}>
        <li>{d.name}</li>
        <img src={d.photo} alt="Student Photo" />
        <li>{d.location}</li>
      </Link>
    );
  });

  return <ul>{students}</ul>;
}

export default Dashboard;
