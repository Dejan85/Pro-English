import React from "react";

// images
import slika from "../../../sass/images/38.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about__background">
        <div className="about__mask" />
      </div>
      <div className="about__content">
        <div className="about__container">
          <h1 className="about__h1">Naša misija </h1>
          <div className="about__paragraph">
            <div className="about__paragraph--p">
              <p>
                ProEnglish predstavlja pokret i preokret u učenju engleskog
                jezika i ostvarenje je našeg sna da se sa engleskog skloni veo
                mističnosti i ružna reputacija koju su stvorile godine pogrešnog
                pristupa nastavi jezika u formalnom obrazovnom sistemu. Mi nismo
                obična škola niti imamo obične učionice: naši stolovi su posebno
                dizajnirani kako biste ostvarili lakšu komunikaciju, mi učenike
                vodimo na mesta gde mogu da vežbaju engleski u realnom
                kontekstu, sa učenicima pevamo karaoke na engleskom i
                učestvujemo na projektima važnim za zajednicu.
              </p>
              <p>
                Naša misija je da engleski učinimo delom vašeg života, a ne
                obavezom koju imate 2, 3 puta nedeljno u odredjenim terminima.
                Mi vas učimo engleski koji nećete zaboraviti jer ga učite kroz
                iskustva koja su za vas bitna. I koja su za nas bitna jer za nas
                ovo nije posao koji radimo od 9 do 5 da bismo zaradili. Engleski
                je naš svestan izbor i ljubav koja teži da sve promeni na bolje.
              </p>
              <p>
                ProEnglish je centar u kome se engleskim bavimo sveobuhvatno i
                drugačije: razlažemo ono što znate poput loše izgradjene kule i
                onda zajedno sastavljamo sve zajedno na pravi način,
                otklanjajući fosilizovane greške za koje znate da ih pravite ali
                ne znate zašto niti kako da ih se rešite. Gradimo zajedno
                stabilnu kuću znanja, sa čvrstim temeljom, vratima, prozorima.
                Sa zidovima koji se neće osipati pod naletom vetrova zaborava.
                Dodajemo lepe prideve, nove imenice i glagole, priloge da sve
                bude lepše. A koliko ćemo visoko zidati zavisi od vaših
                neimarskih stremljenja: što više spratova, to smo bliže zvezdama
                i mesecu.
              </p>
            </div>
            <img src={slika} alt="proenglish" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
