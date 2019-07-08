import React, { useState } from 'react';

import useTest from '../../hooks/useTest';

const Course = () => {
  // stavio sam ovo ovde da bi resetovao scroll PRE NEGO STO SE COMPONENT MOUNT. Ovo je umesto componentWillMount
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });

  const { test } = useTest();

  test().then(res => {
    console.log(res[1].a2[2]);
  });

  return (
    <div className='course'>
      {reset}

      <div className='course__mask' />
      <div className='course__header'>
        <h1 className='course__h1'>Utvrdite nivo znanja</h1>
        <div className='course__content'>
          <p>
            Želite li brz, online test koji bi vas nakon niza gramatičkih
            pitanja svrstao u određenu grupu znanja? Po našem mišljenju, jezik
            je previše kompleksan da bi se testirao u roku od 10 minuta. Zato mi
            nudimo besplatnu usmenu i pismenu proveru znanja. Smatramo da su obe
            stavke neophodne radi tačne procene vašeg nivoa znanja.
          </p>

          <p>
            Često nam je znanje koja pokazujemo na papiru drugačije od onog koje
            zaista možemo da iskoristimo. Samim time se može desiti da vam test
            koji procenjuje samo vaše pasivno znanje, bez upotrebe govora,
            odredi nivo znanja koji aktivno ne možete da sustignete, ili koji
            ste, u suprotnom slučaju, prevazišli i bude vam dosadan. Nakon toga
            sledi frustracija i otpor prema učenju, koji mi želimo da uklonimo i
            da učenje pretvorimo u vid aktivnosti kojoj se radujete da se
            posvetite.
          </p>

          <p>
            Zbog toga tražimo da, ako ste već uložili vreme čitajući ovo,
            odvojite još 30 minuta vašeg vremena tokom kojih ćete zaista otkriti
            gde ste na skali poznavanja engleskog i šta da učinite da poboljšate
            svoje znanje. Tokom ovog vremena ćete proveriti vaše pasivno znanje
            tokom pismenog testa, a potom i aktivno – što je pravo merilo. Na
            usmenom delu ćemo vas posavetovati kako da dalje učite, a vi nas
            možete pitati tom prilikom bilo šta drugo što vas interesuje. It’s a
            win-winsituation!
          </p>

          <span className='course__content__span'>
            Ispod ćete pronaći kratak opis svih nivoa po CEFR skali, kao kratak
            pregled šta se očekuje od svakog.
          </span>
        </div>
      </div>
      <div className='course__content2'>
        <div className='course__mask' />
        <div className='course__lvl'>
          <div className='course__text'>
            <p className='course__text__p'>
              Obično postoje dve vrste početnika, pravi i lažni. Pravi početnik
              nikada ranije nije učio engleski, dok je lažni početnik učio
              nekada davno i zaboravio, ili je, što se često dešava, pokupio par
              izraza iz serija i filmova koje gleda koje bi mu pomogle u
              svakodnevnoj konverzaciji.
            </p>

            <p className='course__text__p'>
              Početnici mogu izraziti šta žele u ograničenom broju situacija (na
              ulici, u prodavnici, restoranu), mogu pričati u kratkim rečenicama
              o osnovnim stvarima koje su im poznate (meni u restoranu, cene,
              datumi, upoznavanje i slično). U zavisnosti od toga koliko im je
              jezik sličan jeziku koje uče, toliko će moći da shvate i budu
              shvaćeni. Na primer, obično su potvrdne i odrične rečenice lakše
              da se nauče od upitnih jer je tu potrebna rečenična struktura koja
              nije slična onoj u srpskom jeziku.
            </p>

            <p className='course__text__p'>
              Početnici još uvek ne mogu da prošire temu razgovora i pitaju
              spontana pitanja. Takođe teško razumeju govor na drugom jeziku
              osim ako ta osoba ne govori polako. Uglavnom pasivno slušaju i
              koriste govor tela da nadomeste reč koja im nedostaje.
            </p>
            <div className='course__nav'>
              <i className='fas fa-chevron-left' onClick={test} />
              <i className='fas fa-chevron-right' onClick={test} />
            </div>
          </div>
        </div>
        <div className='course__diagram__container'>
          <div className='course__diagram'>
            <p className='course__diagram__p'>A1</p>
            <span>Pocetnik</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
