import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav style={{ marginBottom: 20 }}>
    <Link
      to="/"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      Basic
    </Link>
    <Link
      to="/counter"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      Counter
    </Link>

    <Link
      to="/info"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      Info
    </Link>
    <Link
      to="/average"
      style={{ marginRight: 10, textDecoration: "none", color: "black" }}
    >
      Average
    </Link>
  </nav>
);

export default Navigation;
