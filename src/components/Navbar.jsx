import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logowhite from "../assets/myestro-w.png";
import hamburger from "../assets/hamburger-icon.png";
import close from "../assets/close-icon.png";
import usericon from "../assets/user-profile-icon.png";
import { AuthContext } from "../context/auth.context";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { handleLogout, currUser } = useContext(AuthContext);
  //above taken from 'fridge'

  function handleNavbarCollapse() {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }

  //handlelogout

  return (
    <nav className="navbar">
      <div className="closed-nav">
        <Link to="profile">
          <img src={usericon} alt="user-icon" className="user-icon" />
        </Link>
        <Link to="/">
          <img src={logowhite} alt="logo" className="nav-logo" />
        </Link>

        {showMenu ? (
          <span onClick={() => handleNavbarCollapse()}>
            <img src={close} alt="close" className="close-icon" />
          </span>
        ) : (
          <span onClick={() => handleNavbarCollapse()}>
            <img src={hamburger} alt="hamburger" className="hamburger-icon" />
          </span>
        )}
      </div>
      {showMenu && (
        <div className="opened-nav">
          <div className="nav-row">
            <Link to="/teacher">
              <button className="nav-link">Find a teacher</button>
            </Link>
            <Link to="/schedule">
              <button className="nav-link">My schedule</button>
            </Link>
          </div>
          <div className="nav-row">
            <Link to="/studios">
              <button className="nav-link">Find a studio</button>
            </Link>
            <Link to="/profile">
              <button className="nav-link">My profile</button>
            </Link>
          </div>
          <div className="nav-row-3">
            {currUser ? (
              <button onClick={handleLogout} className="nav-link">
                Logout
              </button>
            ) : (
              <>
                <Link to="/login">
                  <button className="nav-link">Login</button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
