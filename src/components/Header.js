import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const loggedInUser = () => {
  return false;
};

export const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo-image"
      src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7"
    />
  </a>
);

//composing components
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />

      <div className="Nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/Contact">
            <li>Contact</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/Cart">
            <li>Cart</li>
          </Link>

          <Link to="/InstaMart">
            <li>InstaMart</li>
          </Link>
        </ul>
      </div>
      <div>{isOnline ? "🟢" : "🔴"}</div>
      {isLoggedIn ? (
        <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className="logIn-btn" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
