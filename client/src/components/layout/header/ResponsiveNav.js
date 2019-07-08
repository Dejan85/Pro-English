import React, { useState } from "react";

// components
import ResponsiveDropNav from "./partials/ResponsiveDropNav";

const ResponsiveNav = () => {
  const [nav, setNav] = useState(false);
  const dropNavHandler = () => {
    setNav(!nav);
  };

  return (
    <div className="header__responsiveNav">
      <i className="fas fa-bars" onClick={dropNavHandler} />
      {nav && <ResponsiveDropNav />}
    </div>
  );
};

export default ResponsiveNav;
