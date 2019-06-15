import React from "react";
import { Link } from "react-router-dom";

// image
import slika from "../../../sass/images/15.jpg";
import slika2 from "../../../sass/images/16.jpg";
import slika3 from "../../../sass/images/11.jpg";

const Card = () => {
  return (
    <div className="home__course__card">
      <img className="home__course__card__img" alt="ProEnglish" src={slika} />
      <div className="home__course__card__teacher">
        <img alt="ProEnglish" src={slika2} />
        <p>Branka Divcic</p>
      </div>

      <div className="home__course__card__text">
        <h4 className="home__course__card__h4">A2</h4>
        <p>
          Piscis addo elementa sofaw squilla undique divitiae proverbium
          obscurari intellegunt utrisque vincunt bonane copulationesque...
        </p>
        <Link to="/">Detalji</Link>
      </div>
    </div>
  );
};

export default Card;
