import React from "react";
import { Link } from "react-router-dom";
// import "./HomeBar.css";

const Navbar = () => {
  return (
    <div>
      {/* navbar start */}
      <div className="nav">
        <div className="nav_menu">
          <div className="logo">
            <h2 className="nav_logo">NFT</h2>
          </div>

          <div className="nav_list">
            <Link to="/add">
              <h4 className="text_1">Admin</h4>
            </Link>
            <h4 className="text_2">MarketPlace</h4>
            <Link to="/">
              <h4 className="text_3">Home</h4>
            </Link>
            {/* <h4 className="text_3">Auth</h4> */}
          </div>

          <button className="nav_btn"> Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
