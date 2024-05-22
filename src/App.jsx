import React from "react";
import { Route, Link, HashRouter, Routes, Navigate } from "react-router-dom";
import AuthRoute from "./router/AuthRoute.jsx";
import "./App.css";
import router from '@/router/index';
export default (props) => {
  const routeFun = (router) => {
    return router.map((item, index) => {
      return (
        <Route
          key={index}
          path={item.path}
          exact={item.axact}
          index={item.index}
          element={
            <AuthRoute auth={item.auth}>
              {item.element}
            </AuthRoute>
          }>
          {item.children && routeFun(item.children)}
        </Route>

      )
    })
  }
  return (
    <HashRouter>
      <Routes>
        {
          routeFun(router)
        }
        {/* <Route path="/login" Component={Login}></Route> */}
        {/* <Route exact path="/" element={<Index />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="homeNew" element={<HomeNew />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="web" element={
            <AuthRoute auth={true}>
              <Web />
            </AuthRoute>
          }></Route>
        </Route>
        <Route path="/my" element={< My/>}></Route>
        <Route path="*" element={< NotFound/>}></Route> */}
      </Routes>
    </HashRouter>
  );
}