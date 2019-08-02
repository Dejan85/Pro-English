import React, { useState } from "react";

import background from "../../../../images/60.jpg";
import background1 from "../../../../images/61.jpg";
import background2 from "../../../../images/63.jpg";
import background3 from "../../../../images/64.jpg";

const Promotions2 = ({ promotionsHandler }) => {
  const [bckg] = useState(() => {
    return {
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
    };
  });
  const [bckg1] = useState(() => {
    return {
      backgroundImage: `url(${background1})`,
      backgroundRepeat: "no-repeat",
    };
  });
  const [bckg2] = useState(() => {
    return {
      backgroundImage: `url(${background2})`,
      backgroundRepeat: "no-repeat",
    };
  });
  const [bckg3] = useState(() => {
    return {
      backgroundImage: `url(${background3})`,
      backgroundRepeat: "no-repeat",
    };
  });

  return (
    <div className="home__promotions2" style={bckg3}>
      <i
        className="far fa-times-circle home__promotions2--close"
        onClick={promotionsHandler}
      />
      <h4 className="home__promotions2--h4">
        Letnja <span>Akcija</span>
      </h4>
      <h1 className="home__promotions2--h1">
        "Letnji kurs aktivne konverzacije"
      </h1>
      <h2 className="home__promotions2--h2">
        Letnji kurs aktivne konverzacije namenjen je onima koji engleski
        razumeju, ali sami ne uspevaju da progovore zato što:{" "}
      </h2>
      <div className="home__promotions2--cont">
        <ul className="home__promotions2--list1">
          <li className="home__promotions2--item">se plaše</li>
          <li className="home__promotions2--item">osećaju blokadu</li>
          <li className="home__promotions2--item">
            nisu sigurni u svoje znanje
          </li>
          <li className="home__promotions2--item">
            previše razmišljaju dok govore
          </li>
          <li className="home__promotions2--item">
            ne uspevaju da razmišljaju na engleskom.
          </li>
        </ul>
        <p className="home__promotions2--p">
          Trajanje kursa: 7 nedelja = 21 čas. <br /> Časovi se održavaju 3 puta
          nedeljno Trajanje časa: 75 min. + 15 min. konsultacije i dodatna
          pitanja Promo lagana letnja cena: 14 700 din. umesto 18 900 din. Sav
          materijal je uključen u cenu: udžbenik, radna sveska, audio i video
          materijal Na kraju kursa dobijate sertifikat.
        </p>
      </div>
    </div>
  );
};

export default Promotions2;
