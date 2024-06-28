import { createContext, useState, useEffect } from "react";
import { API_URL } from "../config.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthContextWrapper = ({ children }) => {
  const [currUser, setCurrUser] = useState(null);
  const [loadActive, setLoadActive] = useState(true);
  const [userLogged, setUserLogged] = useState(false);

  const nav = useNavigate();

  function storeToken(token) {
    //I added it here so we can use it from both the sign up and the login
    localStorage.setItem("authToken", token);
  }

  async function authUser() {
    const tokenFromLocSt = localStorage.getItem("authToken");
    if (!tokenFromLocSt) {
      setCurrUser(null);
      setLoadActive(false);
      setUserLogged(false);
      return;
    }

    try {
      const { data } = await axios.get(`${API_URL}/auth/verify`, {
        headers: { Authorization: `Bearer ${tokenFromLocSt}` },
      });
      console.log("response from verify: is working!", data);
      setCurrUser(data.user);
      setTimeout(() => {
        setLoadActive(false);
        setUserLogged(true);
      }, 2000);
    } catch (error) {
      console.error("Error verifying token:", error);
      setCurrUser(null);
      setLoadActive(false);
      setUserLogged(false);
    }
  }

  useEffect(() => {
    authUser();
  }, []);

  // added for navbar logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setCurrUser(null);
    nav("/");
    console.log("User logged out successfully");
  };

  return (
    <AuthContext.Provider
      value={{
        currUser,
        loadActive,
        userLogged,
        storeToken,
        authUser,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextWrapper };
