import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav style={{ marginBottom: 20 }}>
    <Link
      to="/"
      style={{
        marginRight: 10,
        textDecoration: "none",
        color: "black",
        background: "wheat",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      Basic
    </Link>
    <Link
      to="/counter"
      style={{
        marginRight: 10,
        textDecoration: "none",
        color: "black",
        background: "wheat",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      Counter
    </Link>

    <Link
      to="/info"
      style={{
        marginRight: 10,
        textDecoration: "none",
        color: "black",
        background: "wheat",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      Info
    </Link>
    <Link
      to="/average"
      style={{
        marginRight: 10,
        textDecoration: "none",
        color: "black",
        background: "wheat",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      Average
    </Link>
    <Link
      to="/styled"
      style={{
        marginRight: 10,
        textDecoration: "none",
        color: "black",
        background: "wheat",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      Styled
    </Link>
    <Link
      to="/to-do"
      style={{
        marginRight: 10,
        textDecoration: "none",
        color: "black",
        background: "wheat",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      To-do
    </Link>
    <Link
      to="/immer"
      style={{
        marginRight: 10,
        textDecoration: "none",
        color: "black",
        background: "wheat",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      Immer
    </Link>
  </nav>
);

export default Navigation;
