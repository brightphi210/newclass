
// REACT ROUING (Using React Router Dom) - 
// this is a tool that helps us navigate or route in our react application

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/login/Login";
import ProtectedRoute from "./ProtectedRoute";
import AllSecuredRoutes from "./Routes/AllSecuredRoutes";
import Context from "./auth/Context";

const App = () =>{
  return(
    <div classNa="">
      <Context >
        <BrowserRouter>
          <Routes>

            {/* ============ FREE ROUTE ============ */}
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<Login />}/>

            {/* =============== PROTECTED ROUTE ============ */}
            <Route path="*" element={<ProtectedRoute element={
              <div>
                <AllSecuredRoutes />
              </div>
            } />}/>


          </Routes>
        </BrowserRouter>
      </Context>
    </div>
  )
}

export default App;


