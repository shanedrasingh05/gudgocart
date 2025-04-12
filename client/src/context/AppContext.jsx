import React, { createContext, useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState(""); // changed to string for clarity

  // Fetch all products
  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };

  // Add product to cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
    toast.success("Added to Cart");
  };

  // Update cart item quantity
  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Updated Cart");
  };

  // Remove product from cart
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }
    setCartItems(cartData);
    toast.error("Removed from Cart");
  };

  // Get cart item count
  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };

  // Get cart total amount
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const product = products.find((product) => product._id === itemId);
      if (product && cartItems[itemId] > 0) {
        totalAmount += product.offerPrice * cartItems[itemId];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    setProducts,
    currency,
    addToCart,
    cartItems,
    setCartItems,
    updateCartItem,
    removeFromCart,
    searchQuery,
    setSearchQuery,
    getCartAmount,
    getCartCount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

// my code
// import React, { createContext, useEffect, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { dummyProducts } from "../assets/assets";
// import { toast } from "react-toastify";

// export const AppContext = createContext();

// export const AppContextProvider = ({ children }) => {
//   const currency = import.meta.env.VITE_CURRENCY;
//   const navigate = useNavigate();

//   const [user, setUser] = useState(null);
//   const [isSeller, setIsSeller] = useState(false);
//   const [showUserLogin, setShowUserLogin] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [cartItems, setCartItems] = useState({});
//   const [searchQuery, setSearchQuery] = useState({});

//   // Fetch all products
//   const fetchProducts = async () => {
//     setProducts(dummyProducts);
//   };

//   // Add product to cart
//   const addToCart = (itemId) => {
//     let cartData = structuredClone(cartItems);

//     if (cartData[itemId]) {
//       cartData[itemId] += 1;
//     } else {
//       cartData[itemId] = 1;
//     }

//     setCartItems(cartData);
//     toast.success("Added to Cart");
//   };

//   // Update cart item quantity
//   const updateCartItem = (itemId, quantity) => {
//     let cartData = structuredClone(cartItems);
//     cartData[itemId] = quantity;
//     setCartItems(cartData);
//     toast.success("Updated Cart");
//   };

//   // Remove product from cart
//   const removeFromProduct = (itemId) => {
//     let cartData = structuredClone(cartItems);
//     if (cartData[itemId]) {
//       cartData[itemId] -= 1;
//       if (cartData[itemId] === 0) {
//         delete cartData[itemId];
//       }
//     }
//     setCartItems(cartData);
//     toast.error("Removed from Cart");
//   };

// // get cart Item count

//   const getCartCount = () =>{
//     let totalCount=0;
//     for(const item in cartItems){
//       totalCount += cartItems[item]
//     }
//     return totalCount;
//   }

//   // Get cart total amount
//   const getCartAmount = ()=>{
//     let totalAmount = 0;
//     for (const items in cartItems) {
//       const product = products.find((product) => product._id === items);
//       if(cartItems[items] > 0){
//         totalAmount += itemInfo.offerPrice * cartItems[items]
//       }
//     }
//     return Math.floor(totalAmount * 100) /100;
//   }

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const value = {
//     navigate,
//     user,
//     setUser,
//     isSeller,
//     setIsSeller,
//     showUserLogin,
//     setShowUserLogin,
//     products,
//     setProducts,
//     currency,
//     addToCart,
//     cartItems,
//     setCartItems,
//     updateCartItem,
//     removeFromProduct,
//     searchQuery,
//     setSearchQuery,
//     getCartAmount,
//     getCartCount,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// export const useAppContext = () => useContext(AppContext);
