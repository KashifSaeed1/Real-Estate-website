import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import AuthModal from "../modal/AuthModal";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/logo.png" alt="Logo" />
          </div>

          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="button flex">
            <h4>
              <span>2</span> My List
            </h4>

            {currentUser ? (
              <div className="user-profile flex">
                <span className="username">
                  👤 {currentUser.fullName}
                </span>
                <button className="btn1 logout-btn" onClick={logout}>
                  <i className="fa fa-sign-out"></i> Logout
                </button>
              </div>
            ) : (
              <button className="btn1" onClick={() => setModalOpen(true)}>
                <i className="fa fa-sign-in"></i> Sign In
              </button>
            )}
          </div>
          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Header;
