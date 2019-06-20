import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DropNav = ({ info }) => {
  return (
    <div className="dropMenu">
      <ul className="dropMenu__list">
        {info.links.map((item, index) => {
          return (
            <li key={index} className="dropMenu__item">
              <Link
                to={info.address && info.address[index]}
                className="dropMenu__link">
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

DropNav.propTypes = {
  item: PropTypes.array,
  address: PropTypes.array,
};

export default DropNav;
