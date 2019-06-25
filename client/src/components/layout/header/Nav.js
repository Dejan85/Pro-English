import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import DropNav from "./partials/DropNav";

const Nav = () => {
  // const [oNama] = useState({
  //   links: ["Ko smo mi", "Nacin rada"],
  //   address: ["whoweare", "howwework"],
  // });
  // const [kursevi] = useState({
  //   links: ["Konverzacijski kurs", "a2", "b1", "b2", "c1"],
  //   address: ["conversation", "a2", "b1", "b2", "c1"],
  // });
  const [ispiti] = useState({
    links: ["Toefl", "Ielts", "Gmat", "Gre", "Sat"],
    address: ["Toefl", "Ielts", "Gmat", "Gre", "Sat"],
  });

  return (
    <nav className="header__nav">
      <ul className="header__list">
        <li className="header__item ">
          <Link className="header__link active" to="/">
            Home
          </Link>
        </li>
        <li className="header__item flex__class">
          <Link className="header__link" to="/about">
            O nama
          </Link>
          {/* <DropNav info={oNama} /> */}
        </li>
        <li className="header__item flex__class">
          <Link className="header__link" to="/course">
            Kursevi
          </Link>
          {/* <DropNav info={kursevi} /> */}
        </li>
        <li className="header__item flex__class">
          <Link className="header__link" to="/exams">
            Pripreme za ispite
          </Link>
          <DropNav info={ispiti} />
        </li>
        <li className="header__item">
          <Link className="header__link" to="/">
            Utvrdite nivo znanja
          </Link>
        </li>
        <li className="header__item">
          <Link className="header__link" to="/">
            Dogadjaji
          </Link>
        </li>
        <li className="header__item">
          <Link className="header__link" to="/blog">
            Blog
          </Link>
        </li>
        <li className="header__item">
          <Link className="header__link" to="/">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
