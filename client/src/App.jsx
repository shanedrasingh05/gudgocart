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
import Cart from './pages/Cart';
import AddAddress from './pages/AddAddress';
import MyOrders from './pages/MyOrders';
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
          <Route  path="/" element={<Home />} />
          <Route  path="/products" element={<AllProduct />} />
          <Route  path="/products/:category" element={<ProductCategory />} />
          <Route  path="/products/:category/:id" element={<ProductDetails />} />
          <Route  path="/cart" element={<Cart />} />
          <Route  path="/add-address" element={<AddAddress />} />
          <Route  path="/my-orders" element={<MyOrders />} />
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  );
}

export default App
