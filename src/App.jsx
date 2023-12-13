import React from "react";
import { Route, Link, HashRouter, Routes,Navigate  } from "react-router-dom";
// import { Routes, Route, Link, BrowserRouter } from "react-router";
import Login from "./pages/login/index";
import My from "./pages/My/My.jsx";
import Index from "./pages/Index/index.jsx";
import Home from "./pages/Home";
import HomeNew from "./pages/HomeNew";
import About from "./pages/About";
import Web from './pages/Web';
import "./App.css";
import { connect } from "react-redux";

function App(props) {
  return (
    <HashRouter>
      <Routes>
        {/* <Route path="/login" Component={Login}></Route> */}
        <Route exact path="/" element={<Index />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="homeNew" element={<HomeNew />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="web" element={<Web />}></Route>
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
