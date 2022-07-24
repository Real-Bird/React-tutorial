import React from "react";
import { Link } from "react-router-dom";

const Styled = () => {
  return (
    <div>
      <h1>Hello Style</h1>
      <Link
        to="/sass-component"
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
        SassComponent
      </Link>
      <Link
        to="/css-module"
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
        CSS Module
      </Link>
      <Link
        to="/styled-component"
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
        Styled Component
      </Link>
    </div>
  );
};

export default Styled;
