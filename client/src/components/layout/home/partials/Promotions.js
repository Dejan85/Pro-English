import React, { useState } from "react";

import background from "../../../../images/60.jpg";
import background1 from "../../../../images/61.jpg";
import background2 from "../../../../images/63.jpg";

const Promotions = ({ promotionsHandler }) => {
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

  return (
    <div className="home__promotions" style={bckg2}>
      <i
        className="far fa-times-circle home__promotions--close"
        onClick={promotionsHandler}
      />
      <h4 className="home__promotions--h4">Letnja Akcija</h4>
      <h1 className="home__promotions--h1">Letnji kurs aktivne konverzacije</h1>
      <h2 className="home__promotions--h2">
        Letnji kurs aktivne konverzacije namenjen je onima koji engleski
        razumeju, ali sami ne uspevaju da progovore zato što:{" "}
      </h2>
      <ul className="home__promotions--list1">
        <li className="home__promotions--item">se plaše</li>
        <li className="home__promotions--item">osećaju blokadu</li>
        <li className="home__promotions--item">nisu sigurni u svoje znanje</li>
        <li className="home__promotions--item">
          previše razmišljaju dok govore
        </li>
        <li className="home__promotions--item">
          ne uspevaju da razmišljaju na engleskom.
        </li>

        {/* <li className="home__promotions--item">
          ne uspevaju da razmišljaju na engleskom.
        </li>
        <li className="home__promotions--item">
          previše razmišljaju dok govore
        </li>
        <li className="home__promotions--item">nisu sigurni u svoje znanje</li>
        <li className="home__promotions--item">osećaju blokadu</li>
        <li className="home__promotions--item">se plaše</li> */}
      </ul>
      <p className="home__promotions--p">
        Trajanje kursa: 7 nedelja = 21 čas Časovi se održavaju 3 puta nedeljno
        Trajanje časa: 75 min. + 15 min. konsultacije i dodatna pitanja Promo
        lagana letnja cena: 14 700 din. umesto 18 900 din. Sav materijal je
        uključen u cenu: udžbenik, radna sveska, audio i video materijal Na
        kraju kursa dobijate sertifikat.
      </p>
      {/* <p className="home__promotions--p">
         Kurs aktivne konverzacije je osmišljen tako da se kroz niz jezičkih
        vežbi svakog časa razgradjuje ono što ste prethodno pogrešno ili
        nedovoljno naučili. Gramatika i vokabular se uče u kontekstu, na zabavan
        i opuštajući način, tako da u toku ovog kursa nećete grozničavo hvatati
        beleške, čitati tekstove o izmišljenim likovima iz udžbenika i
        popunjavati u nedogled praznine u gramatičkim vežbama da biste utvrdili
        ono što već pasivno znate. Cilj kursa je da aktivirate svoje pasivno
        znanje engleskog, a to se postiže na samo jedan način - aktivnom
        konverzacijom o temama koje su bitne za vas, a ne za pisce udžbenika.
        Znanje se kod nas se ne deli na kašičicu, u strogo propisanim dozama,
        već se deli nesebično, sa puno ljubavi prema profesorskom poslu, na
        razumljiv način i sa željom da zavolite engleski.
      </p>
      <h3 className="home__promotions--h3">Za koga ovaj kurs jeste:</h3>
      <ul className="home__promotions--list">
        <li className="home__promotions--item">
          za one koji žele da nauče da pravilno koriste vremena
        </li>
        <li className="home__promotions--item">
          za one koji žele da prevazidju blokadu u govoru
        </li>
        <li className="home__promotions--item">
          za one koji žele da savladaju englesku rečeniču strukturu
        </li>
        <li className="home__promotions--item">
          za one koji žele da isprave fosilizovane greške
        </li>
        <li className="home__promotions--item">
          za one koji žele da obogate svoj vokabular
        </li>
        <li className="home__promotions--item">
          za one koji žele da se izražavaju prirodnije
        </li>
      </ul>
      <h3 className="home__promotions--h3">Za koga ovaj kurs nije: </h3>
      <ul className="home__promotions--list">
        <li className="home__promotions--item">
          za one koji su navikli na tradicionalni školski sistem učenja jezika
        </li>
        <li className="home__promotions--item">
          za one koji nisu spremni da se okruže engleskim i nakon časova
        </li>
        <li className="home__promotions--item">
          za one koji nisu spremni da greše i isprave svoje greške
        </li>
      </ul> */}
    </div>
  );
};

export default Promotions;
