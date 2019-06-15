import React from "react";

//components
import Card from "./Card";

const HomeCourse = () => {
  return (
    <div className="home__course">
      <h3 className="home__course__h3">Popularni Kursevi</h3>
      <span className="home__course__span">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <div className="home__course__content">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default HomeCourse;
