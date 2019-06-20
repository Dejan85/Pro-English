import React from "react";

// images
import slika from "../../../sass/images/1.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about__background">
        <img src={slika} alt="proenglish" />
      </div>
    </div>
  );
};

export default About;
