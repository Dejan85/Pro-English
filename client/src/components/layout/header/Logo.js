import React from "react";
import { Link } from "react-router-dom";

//images
import logo from "../../../images/logo_2.jpg";

const Logo = () => {
  return (
    <div className="header__logo">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
