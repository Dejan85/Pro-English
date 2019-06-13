import React from "react";
import PropType from "prop-types";

const CourseCard = ({ info }) => {
  return (
    <div className="course__card ">
      <div className="course__card__front">
        <div className="course__card__img">
          <img className="course__card--img" src={info.img} alt="slika" />
        </div>

        <h4 className="course__h4">{info.h4}</h4>
        <p className="course__p">{info.p}</p>
      </div>
      <div className="course__card__back">BACK</div>
    </div>
  );
};

CourseCard.propType = {
  info: PropType.object,
};

export default CourseCard;
