import React from "react";
import { useAppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { Link, NavLink, Outlet } from "react-router-dom";

const SellerLayout = () => {
    const {isSeller, setIsSeller} = useAppContext();


 

  



  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: assets.add_icon },
    { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon },
    { name: "Order", path: "/seller/orders", icon: assets.order_icon },
  ];



  const logout = async ()=>{
    setIsSeller(false);
  }



  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 w-full bg-white">
        {/* <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3  w-full bg-white"> */}

        {/* *********************************************Logo***************************************************  */}

        <Link to="/" className="cursor-pointer w-34 md:w-38 ">
          <svg
            className="h-9"
            viewBox="0 0 300 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="48"
              fontFamily="Arial"
            >
              <tspan fill="#4FBF8B">G</tspan>
              <tspan fill="#000000">&#9825;dGoCart</tspan>
            </text>
          </svg>
        </Link>

        {/* <Link to="/">
          <img
            src={assets.logo}
            alt="logo"
            className="cursor-pointer w-34 md:w-38"
          />
        </Link> */}

        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button
            onClick={logout}
            className="border rounded-full text-sm px-4 py-1"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex">
        <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
          {sidebarLinks.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              end={item.path == "/seller"}
              className={({ isActive }) => `flex items-center py-3 px-4 gap-3 
                            ${
                              isActive
                                ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary"
                                : "hover:bg-gray-100/90 border-white"
                            }`}
            >
              <img src={item.icon} alt="" className="w-7 h-7" />

              <p className="md:block hidden text-center">{item.name}</p>
            </NavLink>
          ))}
        </div>

        <Outlet />
      </div>
    </>
  );
};


export default SellerLayout;