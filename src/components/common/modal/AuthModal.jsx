import React, { useState } from "react";
import "../modal/AuthModal.css";


const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); 

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>{isLogin ? "Sign In" : "Create Account"}</h2>
        <p>Welcome to our Real Estate Platform</p>

        <div className="auth-tabs">
          <button 
            className={isLogin ? "active" : ""} 
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={!isLogin ? "active" : ""} 
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form>
          {!isLogin && (
            <>
              <input type="text" placeholder="Full Name" required />
              <input type="tel" placeholder="Phone Number" required />
            </>
          )}

          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />

          {!isLogin && (
            <input type="password" placeholder="Confirm Password" required />
          )}

          {isLogin && (
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
          )}

          <button type="submit" className="btn-primary">
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p className="switch-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;