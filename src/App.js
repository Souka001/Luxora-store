import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import NavBar from "./components/HomePage/NavBar";
import Banner from "./components/HomePage/Banner"; 
import Footer from "./components/HomePage/footer";  
import Newsletter from "./components/HomePage/Newsletter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={
          <>
            <NavBar />
            <Banner />
            <Newsletter/>
            <Footer />
            
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
