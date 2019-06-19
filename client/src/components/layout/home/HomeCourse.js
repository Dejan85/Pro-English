import React from "react";
// import { Link } from "react-router-dom";

//components
import CircleBox from "./partials/CircleBox";

// hooks
import useBox from "../../hooks/useBox";

const HomeCourse = () => {
  const { circle } = useBox();
  return (
    <div className="home__course">
      <div className="home__course__mask" />
      <h3 className="home__course__h3">Popularni Kursevi</h3>
      <div className="home__course__line" />
      <div className="home__course__line2" />
      <span className="home__course__span">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <div className="home__course__content">
        <CircleBox info={circle().circle1} />
        <CircleBox info={circle().circle2} />
        <CircleBox info={circle().circle3} />
      </div>
      {/* <Link className="home__course__link">svi kursevi</Link> */}
    </div>
  );
};

export default HomeCourse;
