import React from "react";

//images
import slika from "../../../sass/images/35.jpg";
import slika2 from "../../../sass/images/36.jpg";
import slika3 from "../../../sass/images/37.jpg";
import slika4 from "../../../sass/images/38.png";

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
        <Card2 slika={slika2} />
        <Card2 slika={slika3} />
        <Card2 slika={slika4} />
      </div>
    </div>
  );
};

export default HomeTeacher;
