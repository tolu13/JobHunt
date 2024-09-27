import React from "react";
import { HomePage } from "./Components/Homepage/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import  { Route, Routes } from "react-router-dom";
import { LoginPage } from "./Components/AuthPage/LoginPage";
import { SignupPage } from "./Components/AuthPage/SignupPage";
import { NavBar } from "./Components/NavBar/NavBar";
import DashBoard  from "./Components/SideBar/DashBoard";


function App() {
  return (
    <div >
        <NavBar />

      <Routes>
      <Route path='/' element={<HomePage />}/> 
      <Route path='/auth' element={<LoginPage />}/>
      <Route path='/signup' element={<SignupPage />}/>
      <Route path='/company-dashboard' element={<DashBoard />}/>
      </Routes>
    </div>
  );
}

export default App;
