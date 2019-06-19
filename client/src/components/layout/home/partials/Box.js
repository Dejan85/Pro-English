import React from "react";
import PropTypes from "prop-types";

const Box = ({ info }) => {
  const { i, p, span, color } = info;

  return (
    <div className="home__box">
      <div className={`home__icon ${color}`}>{i}</div>
      <p className="home__box__p">{p}</p>
      <span className="home__box__span">{span}</span>
    </div>
  );
};

Box.propTypes = {
  info: PropTypes.object,
};

export default Box;
