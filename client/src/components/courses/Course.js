import React, { useState } from "react";

// components
import CourseCard from "./CourseCard";

// images
import konverzacija from "../../sass/images/11.jpg";
import pravnici from "../../sass/images/12.jpg";
import ispiti from "../../sass/images/13.jpg";

const Course = () => {
  const [cards, setCards] = useState({
    card1: {
      img: konverzacija,
      h4: "O nama",
      p:
        "ProEnglish predstavlja moderan pristup učenju usmeren na prevazilaženje blokade u govoru i usvajanje primenjivog znanja. Naši programi su osmišljeni tako da idu u korak sa savremenim metodama i tehnikama usvajanja jezika... ",
    },
    card2: {
      img: pravnici,
      h4: "Nacin rada",
      p:
        "Mi se ne bavimo likovima iz udžbenika, čitanjem tekstova i popunjavanjem vežbanja. Kod nas se uči aktivno i kroz stalnu konverzaciju na engleskom. Učimo vas da govorite onako kako bi se izrazio izvorni govornik...",
    },
    card3: {
      img: ispiti,
      h4: "Udzbenici",
      p:
        "Priprema za medjunarodne ispite: SAT, TOEFL, IELTS, Bocconi, GMAT, ACT",
    },
  });

  return (
    <div className="course">
      <h2 className="h2">
        O nama
        <span className="line" />
      </h2>
      <div className="course__content container-flex-row">
        <CourseCard info={cards.card1} />
        <CourseCard info={cards.card2} />
        <CourseCard info={cards.card3} />
      </div>
    </div>
  );
};

export default Course;
