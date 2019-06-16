import React from "react";
import { Link } from "react-router-dom";

const CircleBox = ({ info }) => {
  const { heading, p, color } = info;
  return (
    <div className="home__course__circleBox">
      <div className="home__course__circleBox__top">
        <div
          className="home__course__circleBox__border"
          style={{ border: `0.8rem solid ${color}` }}
        />
        <div className="home__course__circleBox__heading">{heading}</div>
      </div>
      <div className="home__course__circleBox__bottom">
        {/* <h5 className="home__course__circleBox__bottom__h5">Pocetni Kurs</h5> */}
        <p className="home__course__circleBox__p">{p}</p>
        <Link
          to="/"
          className="home__course__circleBox__link"
          style={{ background: `${color}` }}>
          Detaljnije
        </Link>
      </div>
    </div>
  );
};

export default CircleBox;
