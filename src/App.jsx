
// REACT ROUING (Using React Router Dom) - 
// this is a tool that helps us navigate or route in our react application

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/dashboard/Dashboard";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () =>{

  return(
    <div classNa="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}


export default App;


