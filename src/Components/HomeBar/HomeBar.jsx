import React from "react";
import "./HomeBar.css";

const HomeBar = () => {
  return (
    <div>
      {/* navbar start */}
      <div className="elips"></div>
      <div className="nav">
        <div className="nav_menu">
          <h2 className="nav_logo">NFT</h2>

          <div className="nav_list">
            <h4 className="text_1">Admin</h4>
            <h4 className="text_2">MarketPlace</h4>
            <h4 className="text_3">Auth</h4>
          </div>

          <button className="nav_btn"> Log in</button>
        </div>
      </div>
      {/* navbar buttu */}

      {/* content */}
      <div className="content"></div>
      {/* content end */}
    </div>
  );
};

export default HomeBar;
