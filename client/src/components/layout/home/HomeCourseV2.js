import React from "react";
import { Link } from "react-router-dom";

//images
import slika from "../../../images/50.jpg";
import slika2 from "../../../images/51.jpg";

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
              Osluškujući potrebe svojih učenika, osmislili smo jedinstvene
              kurseve konverzacije na kojima nema praznog hoda, bespotrebnog
              prepisivanja i popunjavanja vežbanja. Sve što naučite kod nas je
              svrsishodno i primenjivo. Sistematičan rad i zabavne i realne
              aktivnosti koje zahtevaju vašu potpuno uključenost u svaki čas
              dovode do merljivog napretka i tečnije izražavanja. Zakažite
              besplatan probni čas.
            </p>
            <Link className="homeCourseV2__link" to="/">
              Test
            </Link>
          </div>
        </div>

        <div className="homeCourseV2__left mob-responsive-img">
          <img
            className="homeCourseV2__img responsive__hidden"
            alt="pro-english"
            src={slika2}
          />
        </div>
        <div className="homeCourseV2__right">
          <div className="homeCourseV2__content2">
            <h3 className="homeCourseV2__h3">
              Priprema za medjunarodne ispite
            </h3>
            <p className="homeCourseV2__p">
              Personalizovane pripreme za medjunarodne ispite iz engleskog
              (TOEFL, SAT, IELTS, GMAT, GRE, Bocconi test) koje se bave svakim
              polaznikom i njegovim slabostima u upotrebi engleskog pojedinačno.
              Osmišljene tako da se bave unapredjivanjem veština koje testovi
              proveravaju. Profesori su potkovani iskustvom i upoznati su sa
              kriterijumima koji se primenjuju pri ocenjivanju, pa će vam
              njihova procena osigurati da izbegnete da polažete dva puta isti
              test.
            </p>
            <Link className="homeCourseV2__link" to="/">
              Test
            </Link>
          </div>
        </div>
        <div className="homeCourseV2__left desktop-responsive-img">
          <img
            className="homeCourseV2__img responsive__hidden"
            alt="pro-english"
            src={slika2}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCourseV2;
