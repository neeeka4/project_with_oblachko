import React from "react";
import "./HomeBar.css";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic4.jpg";
import pic3 from "./images/pic3.jpg";
import btn from "./images/Button.png";
import { Link } from "react-router-dom";

const HomeBar = () => {
  return (
    <div>
      {/* navbar start */}
      <div className="elips"></div>

      {/* navbar buttu */}

      {/* content */}
      <div className="content">
        <img src={pic2} className="img1" alt="" />
        <img src={pic1} className="img2" alt="" />
        <img src={pic3} className="img3" alt="" />
      </div>
      <p className="cont_text1">Create Your Own NFT Dream Gallery</p>
      <img src={btn} className="btn_nft" alt="" />
      <p className="cont_text2">
        The Larges NFT Marketplace. Automatic and truly unique digital creation.
        Signed and issued by the creator, made possible by blockchain technologi
      </p>

      {/* content end */}
    </div>
  );
};

export default HomeBar;
