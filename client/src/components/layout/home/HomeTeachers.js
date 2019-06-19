import React from "react";

//images
import slika from "../../../sass/images/35.jpg";

//component
// import Card from "./partials/Card";
import Card2 from "./partials/Card2";
// import FlipingCard from "./partials/FlipingCard";

const HomeTeacher = () => {
  return (
    <div className="homeTeachers">
      <h3 className="homeTeachers__h3">Profesori</h3>
      <div className="homeTeachers__line" />
      <div className="homeTeachers__content">
        <Card2 slika={slika} />
        <Card2 slika={slika} />
        <Card2 slika={slika} />
      </div>
    </div>
  );
};

export default HomeTeacher;
