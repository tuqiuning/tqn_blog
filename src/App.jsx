import React from "react";
import { Route, Link, HashRouter, Routes } from "react-router-dom";
// import { Routes, Route, Link, BrowserRouter } from "react-router";
import Login from "./pages/login/index";
import My from "./pages/My/My.jsx";
import Index from "./pages/Index/index.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from './pages/Home/components/Skill';
import Project from './pages/Home/components/Project';
import "./App.css";
import { connect } from "react-redux";

function App(props) {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" Component={Login}></Route>
        <Route path="/" element={<Index />}>
          <Route path="home" element={<Home />}>
            <Route path="skill" element={<Skill />}></Route>
            <Route path="project" element={<Project />}></Route>
          </Route>
          <Route path="about" element={<About />}></Route>
          
        </Route>
        <Route path="/my" element={< My/>}></Route>
      </Routes>
    </HashRouter>
  );
}

const mapStateToProps = (state) => ({
  counter:state.counter.counter
})

export default connect(mapStateToProps)(App)
