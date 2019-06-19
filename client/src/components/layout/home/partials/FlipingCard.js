import React from "react";
import { Link } from "react-router-dom";

import slika from "../../../../sass/images/15.jpg";
import slika2 from "../../../../sass/images/16.jpg";
import slika3 from "../../../../sass/images/11.jpg";

const FlipingCard = () => {
  return (
    <div className="home__course__card">
      <div className="home__course__card__front">
        <img
          className="home__course__card__img"
          alt="ProEnglish"
          src={slika3}
        />
        <div className="home__course__card__teacher">
          <img alt="ProEnglish" src={slika2} />
          <p>Branka Divčić</p>
        </div>

        <div className="home__course__card__text">
          <h4 className="home__course__card__h4">Branka Divčić</h4>
          <p>
            Piscis addo elementa sofaw squilla undique divitiae proverbium
            obscurari intellegunt utrisque vincunt bonane copulationesque...
          </p>
        </div>
      </div>
      <div className="home__course__card__back" />
    </div>
  );
};

export default FlipingCard;
