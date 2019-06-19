import React from "react";
import PropTypes from "prop-types";

const Card2 = ({ slika }) => {
  return (
    <div className="card2">
      <div className="card2__front">
        <img className="card2__img" src={slika} alt="pro-english" />
        <h3 className="card2__h3">Branka Divcic</h3>
        <span className="card2__span">profesor Engleskog jezika</span>
        <p className="card2__p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </p>
      </div>
      <div className="card2__back">
        <img className="card2__img2" src={slika} alt="pro-english" />
        <h3 className="card2__h32">Branka Divcic</h3>
        {/* <span className="card2__span2">profesor Engleskog jezika</span> */}
        <p className="card2__p2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
        </p>
      </div>
    </div>
  );
};

Card2.propTypes = {
  slika: PropTypes.string,
};

export default Card2;
