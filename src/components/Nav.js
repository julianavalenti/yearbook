import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <div>HOME</div>
      </Link>
      <Link to="/about">
        <div>ABOUT</div>
      </Link>
      <Link to="/dashboard">
        <div>STUDENTS</div>
      </Link>
    </div>
  );
};

export default Nav;
