import React from "react";
import { Link } from "react-router-dom";

// img
import question3 from "../../../sass/images/question3.jpg";
import question2 from "../../../sass/images/question2.jpg";
import question22 from "../../../sass/images/question22.jpg";

const HomeAbout = () => {
  return (
    <div className="home__about">
      <div className="home__about__text">
        <h2 className="home__about__h2">Ko smo mi?</h2>
        <p className="home__about__p-2">
          ProEnglish predstavlja pokret i preokret u učenju engleskog jezika i
          ostvarenje je našeg sna da se sa engleskog skloni veo mističnosti i
          ružna reputacija koju su stvorile godine pogrešnog pristupa nastavi
          jezika u formalnom obrazovnom sistemu. Mi nismo obična škola niti
          imamo obične učionice: naši stolovi su posebno dizajnirani kako biste
          ostvarili lakšu komunikaciju, mi učenike vodimo na mesta gde mogu da
          vežbaju engleski u realnom kontekstu, sa učenicima pevamo karaoke na
          engleskom i učestvujemo na projektima važnim za zajednicu.{" "}
        </p>

        <p className="home__about__p-3">
          Naša misija je da engleski učinimo delom vašeg života, a ne obavezom
          koju imate 2, 3 puta nedeljno u odredjenim terminima. Mi vas učimo
          engleski koji nećete zaboraviti jer ga učite kroz iskustva koja su za
          vas bitna. I koja su za nas bitna jer za nas ovo nije posao koji
          radimo od 9 do 5 da bismo zaradili. Engleski je naš svestan izbor i
          ljubav koja teži da sve promeni na bolje.
        </p>

        <Link className="home__about__link" to="/about">
          Procitaj vise
        </Link>
      </div>
      <div className="home__about__img">
        <img src={question2} alt="ProEnglish" />
      </div>
    </div>
  );
};

export default HomeAbout;
