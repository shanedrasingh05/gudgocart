import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './pages/Home';
import Footer from "./components/Footer";
import {Toaster} from 'react-hot-toast';

const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div>
      {isSellerPath ? null : <Navbar />}
      <Toaster />



      <div
        className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32 mt-20"}`}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
      
    </div>
  );
}

export default App
