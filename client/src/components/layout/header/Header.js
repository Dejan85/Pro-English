import React from "react";

// component
import Nav from "./Nav";
import Logo from "./Logo";
import ReasponsiveNav from "./ResponsivNav";

const Header = () => {
  return (
    <div className="header ">
      <div className="header__container">
        <Logo />
        <Nav />
        <ReasponsiveNav />
      </div>
    </div>
  );
};

export default Header;
