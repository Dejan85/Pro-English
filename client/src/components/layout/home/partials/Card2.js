import React from "react";
import PropTypes from "prop-types";

const Card2 = ({ slika }) => {
  return (
    <div className="card2">
      <div className="card2__front">
        <img className="card2__img" src={slika} alt="pro-english" />
        <h2 className="card2__h3">Branka Divcic</h2>
        <span className="card2__span">profesor Engleskog jezika</span>
        <div className="card2__links">
          <div className="card2__links--face">
            <i className="fab fa-facebook-f" />
          </div>
          <div className="card2__links--twiter">
            <i className="fab fa-facebook-f" />
          </div>
          <div className="card2__links--gmail">
            <i className="fab fa-facebook-f" />
          </div>
        </div>
      </div>
      <div className="card2__back">
        <img className="card2__img" src="" alt="pro-english" />
        <h2 className="card2__h3">Branka Divcic</h2>
        <span className="card2__span">profesor Engleskog jezika</span>
        <p className="card2__p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

Card2.propTypes = {
  slika: PropTypes.string,
};

export default Card2;
