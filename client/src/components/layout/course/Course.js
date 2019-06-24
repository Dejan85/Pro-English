import React from "react";

const Course = () => {
  return (
    <div className="course">
      <div className="course__mask" />
      <div className="course__header">
        <h1 className="course__h1">Utvrdite nivo znanja</h1>
        <div className="course__content">
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

          <p>
            Ispod ćete pronaći kratak opis svih nivoa po CEFR skali, kao kratak
            pregled šta se očekuje od svakog.
          </p>
        </div>
      </div>
      {/* <div className="course__header">
        <div className="course__diagram">
          <p className="course__diagram--p">A1 – Početnik</p>
          <h2 className="course__h2">At this level you can understand</h2>
          <ul className="course__list">
            <li className="course__item">
              Very basic personal, family and job-related language
            </li>
            <li className="course__item">
              Enough to meet the needs with slow, clear speech
            </li>
            <li>Short, simple texts on familiar matter</li>
          </ul>
        </div>
        <div className="course__nav">nav</div>
      </div> */}
    </div>
  );
};

export default Course;
