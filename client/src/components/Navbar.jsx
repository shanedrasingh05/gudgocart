import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { user, setUser, setShowUserLogin, navigate } = useAppContext();


  const logout = async ()=>{
    setUser(null);
    navigate('/')
  }


  return (
    // <nav className="flex items-center justify-between px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to="/">
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
      </NavLink>

      {/* <NavLink to='/'>
        <img
          className="h-9"
          src={assets.logo}
          alt="logo"
        />
      </NavLink> */}

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="products">All Product</NavLink>
        <NavLink to="contacts">Contact</NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search" className="w-4 h-4" />
        </div>

        <div className="relative cursor-pointer">
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-6 opacity-80"
          />

          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>

        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img src={assets.profile_icon} className="w-10" alt="" />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200
            py-2.5 w-30 rounded-md text-sm z-40">

              <li className="p">My Orders</li>
              <li>Logout</li>
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden"
      >
        <img src={assets.menu_icon} alt="menu" />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)}>
            All Product
          </NavLink>
          {user && (
            <NavLink to="/products" onClick={() => setOpen(false)}>
              My Orders
            </NavLink>
          )}
          <NavLink to="/" onClick={() => setOpen(false)}>
            Contact
          </NavLink>

          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;


// onClick={() => setOpen(!open)}

// *******************************************Original Code

// import React from 'react'

// function Navbar() {
//     const [open, setOpen] = React.useState(false);
//   return (
//     <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
//       <a href="#">
//         <img
//           className="h-9"
//           src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
//           alt="dummyLogoColored"
//         />
//       </a>

//       {/* Desktop Menu */}
//       <div className="hidden sm:flex items-center gap-8">
//         <a href="#">Home</a>
//         <a href="#">About</a>
//         <a href="#">Contact</a>

//         <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
//           <input
//             className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
//             type="text"
//             placeholder="Search products"
//           />
//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 16 16"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M10.836 10.615 15 14.695"
//               stroke="#7A7B7D"
//               stroke-width="1.2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//             <path
//               clip-rule="evenodd"
//               d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
//               stroke="#7A7B7D"
//               stroke-width="1.2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//           </svg>
//         </div>

//         <div className="relative cursor-pointer">
//           <svg
//             width="18"
//             height="18"
//             viewBox="0 0 14 14"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
//               stroke="#615fff"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//           </svg>
//           <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
//             3
//           </button>
//         </div>

//         <button className="cursor-pointer px-8 py-2 bg-primary hover:bg-indigo-600 transition text-white rounded-full">
//           Login
//         </button>
//       </div>

//       <button
//         onClick={() => (open ? setOpen(false) : setOpen(true))}
//         aria-label="Menu"
//         className="sm:hidden"
//       >
//         {/* Menu Icon SVG */}
//         <svg
//           width="21"
//           height="15"
//           viewBox="0 0 21 15"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <rect width="21" height="1.5" rx=".75" fill="#426287" />
//           <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
//           <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
//         </svg>
//       </button>

//       {/* Mobile Menu */}
//       <div
//         className={`${
//           open ? "flex" : "hidden"
//         } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
//       >
//         <a href="#" className="block">
//           Home
//         </a>
//         <a href="#" className="block">
//           About
//         </a>
//         <a href="#" className="block">
//           Contact
//         </a>
//         <button className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-indigo-600 transition text-white rounded-full text-sm">
//           Login
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar
