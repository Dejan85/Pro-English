import React from "react";
import { Link } from "react-router-dom";

const DropMenu = () => {
  return (
    <ul className="dashboard__dropMenu">
      <li className="dashboard__dropMenuItem">
        <Link to="/" className="dashboard__dropMenuLink">
          Add Blog
        </Link>
        <Link to="/" className="dashboard__dropMenuLink">
          Edit Blog
        </Link>
        <Link to="/" className="dashboard__dropMenuLink">
          Delete Blog
        </Link>
      </li>
    </ul>
  );
};

export default DropMenu;
