import React from "react";

// components
import ResponsiveDropNav from "./partials/ResponsiveDropNav";

const ResponsiveNav = () => {
  return (
    <div className="header__responsiveNav">
      <i className="fas fa-bars" />
      <ResponsiveDropNav />
    </div>
  );
};

export default ResponsiveNav;
