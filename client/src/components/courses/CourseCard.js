import React from "react";

const CourseCard = () => {
  return (
    <div className="course__card">
      <div className="course__card__front">
        <div className="course__card__img">
          <img className="course__card--img" src="" alt="slika" />
        </div>

        <h4 className="course__card__h4">Kursevi aktivne konverzije</h4>
        <p className="course__card__p">
          Ovo je mala React Js aplikacija. U pitanju je vec poznata igra Pig
          Game. Dva igraca bacaju kockice i pokusavaju prvi da dostignu odredjen
          broj pojena koji su prethodno rucno odredili. Igra je pisana u
          React-u. Kao Context menager je koriscen Contect api. Vise u ovoj
          aplikaciji mozete videti na njenoj stranici.
        </p>
      </div>
      <div className="course__card__back">BACK</div>
    </div>
  );
};

export default CourseCard;
