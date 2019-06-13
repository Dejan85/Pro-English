import React, { useState } from "react";

//components
import CourseCard from "./CourseCard";

// images
import konverzacija from "../../sass/images/11.jpg";
import pravnici from "../../sass/images/12.jpg";
import ispiti from "../../sass/images/13.jpg";

const Course = () => {
  const [cards, setCards] = useState({
    card1: {
      img: konverzacija,
      h4: "Kursevi aktivne konverzacije",
      p: "Namenjenu onima koji zele da pervazidju blokadu u govoru",
    },
    card2: {
      img: pravnici,
      h4: "Engleski za pravnike",
      p:
        "Engleski za pravnike, kurs zasnovan na srpskom pravnom sisetmu i primenjiv",
    },
    card3: {
      img: ispiti,
      h4: "Medjunarodni ispiti",
      p:
        "Priprema za medjunarodne ispite: SAT, TOEFL, IELTS, Bocconi, GMAT, ACT",
    },
  });

  return (
    <div className="course">
      <h2 className="h2">Kursevi</h2>
      <div className="course__content container-flex-row">
        <CourseCard info={cards.card1} />
        <CourseCard info={cards.card2} />
        <CourseCard info={cards.card3} />
      </div>
    </div>
  );
};

export default Course;
