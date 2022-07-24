import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Average from "./Average";
import Counter from "./Counter";
import Navigation from "./Navigation";
import Info from "./Info";
import BasicRoute from "../router/BasicRoute";
import Styled from "./Styled";
import SassComponent from "./Styled/SassComponent";
import CSSModule from "./Styled/CSSModule";
import StyledComponent from "./Styled/StyledComponent";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<BasicRoute />} />
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="/info" element={<Info />} />
          <Route exact path="/average" element={<Average />} />
          <Route exact path="/styled" element={<Styled />} />
          <Route exact path="/sass-component" element={<SassComponent />} />
          <Route exact path="/css-module" element={<CSSModule />} />
          <Route exact path="/styled-component" element={<StyledComponent />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
