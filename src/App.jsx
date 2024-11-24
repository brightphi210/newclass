
// REACT ROUING (Using React Router Dom) - 
// this is a tool that helps us navigate or route in our react application

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
import HomePage from "./pages/home/HomePage";

const App = () =>{

  return(

    <div classNa="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}


export default App;


