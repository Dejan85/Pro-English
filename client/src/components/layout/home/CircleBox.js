import React from "react";
import { Link } from "react-router-dom";

const CircleBox = () => {
  return (
    <div className="home__course__circleBox">
      <div className="home__course__circleBox__top">
        <div className="home__course__circleBox__border" />
        <div className="home__course__circleBox__heading">A1</div>
      </div>
      <div className="home__course__circleBox__bottom">
        {/* <h5 className="home__course__circleBox__bottom__h5">Pocetni Kurs</h5> */}
        <p className="home__course__circleBox__p">
          This crash course in layers reveals or shows you in photoshop and
          create wonders in graphics industry...
        </p>
        <Link className="home__course__circleBox__link">Detaljnije</Link>
      </div>
    </div>
  );
};

export default CircleBox;
