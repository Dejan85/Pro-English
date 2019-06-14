import React from "react";

// component
import Nav from "./Nav";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header ">
      <div className="header__container">
        <Logo />
        <Nav />
      </div>
    </div>
  );
};

export default Header;
