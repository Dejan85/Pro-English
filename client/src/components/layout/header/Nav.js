import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import DropNav from "./partials/DropNav";
const Nav = () => {
  const [oNama] = useState(["Ko smo mi", "Nacin rada", "Udzbenici"]);
  const [kursevi] = useState(["Konverzacijski kurs", "a2", "b1", "b2", "c1"]);
  const [ispiti] = useState(["Toefl", "Ielts", "Gmat", "Gre", "Sat"]);

  return (
    <nav className="header__nav">
      <ul className="header__list">
        <li className="header__item ">
          <Link className="header__link active" to="/">
            Home
          </Link>
        </li>
        <li className="header__item flex__class">
          <Link className="header__link" to="/xad">
            O nama
          </Link>
          <DropNav item={oNama} />
        </li>
        <li className="header__item flex__class">
          <Link className="header__link" to="/xad">
            Kursevi
          </Link>
          <DropNav item={kursevi} />
        </li>
        <li className="header__item flex__class">
          <Link className="header__link" to="/">
            Pripreme za ispite
          </Link>
          <DropNav item={ispiti} />
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
          <Link className="header__link" to="/">
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
