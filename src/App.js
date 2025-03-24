import React from "react";
import { HashRouter , Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import NavBar from "./components/HomePage/NavBar";
import Banner from "./components/HomePage/Banner"; 
import Footer from "./components/HomePage/footer";  
import Newsletter from "./components/HomePage/Newsletter";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/#/signup" element={<SignUp />} />
        <Route path="/#/signin" element={<SignIn />} />
        <Route path="/#" element={
          <>
            <NavBar />
            <Banner />
            <Newsletter/>
            <Footer />
            
          </>
        } />
      </Routes>
    </HashRouter>
  );
}

export default App;
