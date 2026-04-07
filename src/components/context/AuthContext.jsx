import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const signup = (userData) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const existingUser = users.find((u) => u.email === userData.email);
    if (existingUser) {
      alert("Email already registered!");
      return false;
    }

    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    const loggedInUser = { ...userData };
    delete loggedInUser.password; 
    delete loggedInUser.confirmPassword;

    localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
    setCurrentUser(loggedInUser);
    return true;
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      alert("Invalid email or password!");
      return false;
    }


    const loggedInUser = { ...foundUser };
    delete loggedInUser.password;
    delete loggedInUser.confirmPassword;

    localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
    setCurrentUser(loggedInUser);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};