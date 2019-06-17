import React from "react";
import { Link } from "react-router-dom";

//images
import slika from "../../../sass/images/28.webp";
import slika2 from "../../../sass/images/29.webp";

const HomeCourseV2 = () => {
  return (
    <div className="homeCourseV2">
      <div className="homeCourseV2__container">
        <div className="homeCourseV2__left">
          <img className="homeCourseV2__img" alt="pro-english" src={slika} />
        </div>
        <div className="homeCourseV2__right">
          <div className="homeCourseV2__content">
            <h3 className="homeCourseV2__h3">Kurs aktivne konverzacije</h3>
            <p className="homeCourseV2__p">
              Onec pede justo, fringilla, aliquet nec, vulputatee egerdiet
              erdiett arcu. In justo, rhoncus ut, imperdiet a, venenatis
              vitaerdiet erde justo. llam dictum felis eu pede mollis pretium
              diet a, venenatis vita sto. Nullam dictum felis eu pede mollis
              pretiumdiet a, venenatis ie ust. ullam dictum felis eu pedemol
              iumpretium ieta...
            </p>
            <Link className="homeCourseV2__link">Test</Link>
          </div>
        </div>

        <div className="homeCourseV2__right">
          <div className="homeCourseV2__content2">
            <h3 className="homeCourseV2__h3">
              Priprema za medjunarodne ispite
            </h3>
            <p className="homeCourseV2__p">
              onec pede justo, fringilla, aliquet nec, vulputatee egerdiet
              erdiett arcu. In justo, rhoncus ut, imperdiet a, venenatis
              vitaerdiet erde justo. llam dictum felis eu pede mollis pretium
              diet a, venenatis vita sto. Nullam dictum felis eu pede mollis
              pretiumdiet a, venenatis ie ust. ullam dictum felis eu pedemol
              iumpretium ieta...
            </p>
            <Link className="homeCourseV2__link">Test</Link>
          </div>
        </div>
        <div className="homeCourseV2__left">
          <img className="homeCourseV2__img" alt="pro-english" src={slika2} />
        </div>
      </div>
    </div>
  );
};

export default HomeCourseV2;
