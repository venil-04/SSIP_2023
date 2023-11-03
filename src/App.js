import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Adminhome from "./pages/Adminhome";

// https://ssip2023-backends.onrender.com/ for apis

function App() {
 
  return (
    <BrowserRouter>
      <Routes>

      <Route index path="/" element={<Home/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="/Adminhome" element={<Adminhome/>}/>
      <Route path="/SignUp"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
