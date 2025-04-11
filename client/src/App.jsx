import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './pages/Home';
import Footer from "./components/Footer";
import {Toaster} from 'react-hot-toast';
import { useAppContext } from './context/AppContext';
import Login from './components/Login';
import AllProduct from './pages/AllProduct';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin } = useAppContext();

  return (
    <div>
      {isSellerPath ? null : <Navbar />}

      {showUserLogin ? <Login /> : null}

      <ToastContainer position="bottom-right" autoClose={3000} />
      {/* <Toaster /> */}

      <div
        className={`${
          isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32 mt-20"
        }`}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<AllProduct />} />
          <Route exact path="/products/:category" element={<ProductCategory />} />
          <Route exact path="/products/:category/:id" element={<ProductDetails />} />
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  );
}

export default App
