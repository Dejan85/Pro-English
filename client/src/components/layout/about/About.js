import React from "react";

// images
import slika from "../../../sass/images/38.jpg";
import slika2 from "../../../sass/images/28.webp";

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
            <img src={slika2} alt="proenglish" />
            <p />
          </div>
        </div>
      </div>
      <div className="about__background__2">
        <div className="about__mask" />
      </div>

      <div className="about__content">
        <div className="about__container">
          <h2 className="about__h2">Način rada </h2>
          <div className="about__paragraph">
            <img src={slika} alt="proenglish" />
            <div className="about__paragraph--p2">
              <p>
                ProEnglish predstavlja moderan pristup učenju usmeren na
                prevazilaženje blokade u govoru i usvajanje primenjivog znanja.
                Naši programi su osmišljeni tako da idu u korak sa savremenim
                metodama i tehnikama usvajanja jezika. Verujemo da je prošlo
                vreme kad je učenje jezika bilo učenje gramatičkih pravila
                napamet ili usvajanja novih reči prepisivanjem ili ponavljanjem.
                Jezik je živ i moćan, i pravi razliku izmedju životinja i
                čoveka. U rukama kompetentnog govornika jezik postaje alat za
                pregovaranje i osvajanje novih intelektualnih prostora. Zato mi
                jezik shvatamo ozbiljno.
              </p>
              <p>
                Mi se ne bavimo likovima iz udžbenika, čitanjem tekstova i
                popunjavanjem vežbanja. Kod nas se uči aktivno i kroz stalnu
                konverzaciju na engleskom. Učimo vas da govorite onako kako bi
                se izrazio izvorni govornik, prirodno i bez previše razmišljanja
                o gramatičkoj strukturi. Mi se bavimo vama i učimo vas engleski
                koji je potreban za vašu uspešnu konverzaciju, od gramatike do
                vokabulara, tako da sve možete da primenite odmah. Kod nas nema
                praznog hoda i tapkanja u mestu.
              </p>
              <p>
                Naša ciljna grupa su oni koji žele da rade fokusirano, ostvare
                merljiv napredak i spremni su da se oslobe uverenja da nikada
                neće govoriti engleski tečno i tačno.
              </p>

              <p>
                Ko smo mi da pričamo o tome? Mi smo tim profesora sa preko 10
                godina iskustva u nastavi. Naši polaznici su na studijama na
                fakultetima od Bokonija do Oksforda, mnogi sada žive u
                inostranstvu, a uspešnih poslovnih ljudi nas biraju zbog
                jedinstvnog pristupa i sposopnosti da prenesemo znanje
              </p>

              <p>
                Svi naši kursevi su konverzacijskog tipa, vrlo aktivni i
                usmereni na usvajanje primenjivog znanja i veština za uspešno
                polaganje medjunarodnih ispita. Budući da smo upoznati sa
                psihologijom učenja, andragogijom, metodikom i metodologijom
                nastave stranih jezika, svakome prilazimo na drugačiji i
                jedinstven način. Uveli smo i konsultacije za koje smo i sami
                nekada želeli da postoje kad smo učili predmete koji su nam
                predstavljali izazov, a one su odlična prilika da postavite
                dodatna pitanja i razrešite dileme i nejasnoće bilo kad u toku
                kursa, pre i posle časa, i da dobijete smernice za rad. Uz šolju
                kafe ili čaja, kako nalaže običaj, u mestu koje je naš drugi dom
                i u kome provodimo najviše vremena kako bismo zajedno uspeli.
                <span> Cheers!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
