import React from 'react';
import { useParams } from 'react-router-dom';

const Student = ({ studentData }) => {
  const { symbol } = useParams();
  const student = studentData.find((d) => d.symbol === symbol);

  return (
    <div>
      <h3>Name: {student.name}</h3>
      <h3>Location: {student.location}</h3>
      <a href={student.url}>LinkedIn</a>
      <img src={student.photo} alt="Student Photo" />
    </div>
  );
};

export default Student;
