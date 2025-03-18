import React from "react";
import { useAuth } from "../../../context/AuthContext"; 

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h1>Welcome, {user?.name}</h1>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;
