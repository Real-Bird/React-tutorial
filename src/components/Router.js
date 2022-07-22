import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Average from "./Average";
import Counter from "./Counter";
import Navigation from "./Navigation";
import Info from "./Info";
import BasicRoute from "../router/BasicRoute";

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
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;