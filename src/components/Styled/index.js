import React from "react";
import { Link } from "react-router-dom";

const Styled = () => {
  return (
    <div>
      <h1>Hello Style</h1>
      <Link
        to="/sass-component"
        style={{ marginRight: 10, textDecoration: "none", color: "black" }}
      >
        SassComponent
      </Link>
    </div>
  );
};

export default Styled;
