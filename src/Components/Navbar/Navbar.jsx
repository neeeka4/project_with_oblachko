import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { authContext } from "../../Context/AuthContextProvider";

const Navbar = () => {
  const {
    handleLogout,
    user: { email },
  } = React.useContext(authContext);
  return (
    <div>
      {/* navbar start */}
      <div className="nav">
        <div className="nav_menu">
          <div className="logo">
            <h2 className="nav_logo">NFT</h2>
          </div>

          <div className="nav_list">
            <Link to="/">
              <h4 className="text_1">Home</h4>
            </Link>

            <Link to="/add">
              <h4 className="text_3">Admin</h4>
            </Link>
            <Link to="/products">
              <h4 className="text_2">MarketPlace</h4>
            </Link>

            {/* <h4 className="text_3">Auth</h4> */}
          </div>
          {email ? (
            <button onClick={handleLogout} className="nav_btn">
              LOGOUT
            </button>
          ) : (
            <Link to="/auth">
              <button className="nav_btn">LOGIN</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
