import React from "react";
import PropTypes from "prop-types";

const Box = ({ i, h3, p, customClass }) => {
  return (
    <div className="landing__box-child">
      <div className={`landing__icon-container ${customClass} `}>
        <div className="landing__icon--border">{i}</div>
      </div>
      <h3 className="landing__h3">{h3}</h3>
      <p className="landing__box-p">{p}</p>
    </div>
  );
};

Box.propTypes = {
  i: PropTypes.object,
  h3: PropTypes.string,
  p: PropTypes.string,
  customClass: PropTypes.string,
};

export default Box;
