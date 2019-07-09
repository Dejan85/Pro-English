import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';

// hooks
// import useHanldeCourseContent from '../../hooks/course/useHandleCourseContent';
import useStringSplit from '../../hooks/course/useStringSplit';
const Course = props => {
  const { data } = props;
  // stavio sam ovo ovde da bi resetovao scroll PRE NEGO STO SE COMPONENT MOUNT. Ovo je umesto componentWillMount
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });

  // const { hanldeCourseContent, i } = useHanldeCourseContent();
  const [course, setCourse] = useState(undefined);
  const [counter, setCounter] = useState(0);
  const [paragraph, setParagraph] = useState();
  const [diagram, setDiagram] = useState(16.67);
  const initCourse = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
  const { stringSplit, firstWord, secondWord } = useStringSplit();

  useEffect(
    () => {
      if (data.course) {
        setCourse(data.course);

        // ova funkcija se poziva tako sto menjamo stalno diagram i samim tim se use effect poziva i tako pozivamo contentHandler()
        contentHandler();
      }
    },
    [data, course, diagram]
  );

  const counterHandlerDecrese = () => {
    if (counter === 0) {
      setCounter(() => {
        return 5;
      });
      setDiagram(() => {
        return 100;
      });
    } else {
      setCounter(() => {
        return counter - 1;
      });
      setDiagram(() => {
        return diagram - 16.67;
      });
    }
  };

  const counterHandlerIncrese = () => {
    if (counter === 5) {
      setCounter(() => {
        return 0;
      });
      setDiagram(() => {
        return 16.67;
      });
    } else {
      setCounter(() => {
        return counter + 1;
      });
      setDiagram(() => {
        return diagram + 16.67;
      });
    }
  };

  function contentHandler () {
    if (course) {
      setParagraph(() => {
        return course.map(item => {
          if (item[initCourse[counter]]) {
            return item[initCourse[counter]].map((item, index) => {
              if (index === 0) {
                stringSplit(item[0]);
              }
              return (
                <p className='course__text__p' key={index}>
                  {item[0]}
                </p>
              );
            });
          }
        });
      });
    }
  }

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
            <div className='course__nav'>
              <i
                className='fas fa-chevron-left'
                onClick={counterHandlerDecrese}
              />
              <i
                className='fas fa-chevron-right'
                onClick={counterHandlerIncrese}
              />
            </div>

            {/* <p className='course__text__p'>
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
            </p> */}

            {paragraph}
          </div>
        </div>
        <div className='course__diagram__container'>
          <div className='course__diagram' style={{ height: diagram + '%' }}>
            <p className='course__diagram__p'>
              {firstWord}
            </p>
            <span>
              {secondWord}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Course.propType = {
  state: PropTypes.string
};

function mapStateToProps (state) {
  return { data: state.data };
}

export default connect(mapStateToProps, null)(Course);
