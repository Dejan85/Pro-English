import React from "react";

//components
import Card from "./Card";
import CircleBox from "./CircleBox";

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
        {/* <Card />
        <Card />
        <Card /> */}
        <CircleBox info={circle().circle1} />
        <CircleBox info={circle().circle2} />
        <CircleBox info={circle().circle3} />
      </div>
    </div>
  );
};

export default HomeCourse;
