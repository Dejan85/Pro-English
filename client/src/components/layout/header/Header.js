import React from "react";

// component
import Nav from "./Nav";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header ">
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
