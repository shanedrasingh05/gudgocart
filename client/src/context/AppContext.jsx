import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);


  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

// import { createContext } from "react";
// import { useNavigate} from "react-router-dom";

// export const AppContext = createContext();

// export const AppContextProvider = ({ children }) => {

//     const navigate = useNavigate();
//     const [user, setUser] = useState(null);
//     const [isSeller, setIsSeller] = useState(false);

//     const value = {navigate, user, setUser, isSeller, setIsSeller  }  // provide state and methods to the rest of the app};

//     return (
//         <AppContext.Provider value={value}>
//             {children}
//         </AppContext.Provider>
//     );
// };

// export const useAppContext = () => {
//     return React.useContext(AppContext);
// }
