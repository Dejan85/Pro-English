import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DropNav = ({ item }) => {
  return (
    <div className="dropMenu">
      <ul className="dropMenu__list">
        {item.map((item, index) => {
          return (
            <li key={index} className="dropMenu__item">
              <Link className="dropMenu__link">{item}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

DropNav.propTypes = {
  DropNav: PropTypes.array,
};

export default DropNav;
