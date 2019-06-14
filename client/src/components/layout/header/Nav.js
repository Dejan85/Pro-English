import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        <li className="header__item">
          <Link className="header__link" to="/">
            Home
          </Link>
        </li>
        <li className="header__item">
          <Link className="header__link" to="/">
            Kursevi
          </Link>
        </li>
        <li className="header__item">
          <Link className="header__link" to="/">
            Modeli Nastave
          </Link>
        </li>
        <li className="header__item">
          <Link className="header__link" to="/">
            Predstojeci Dogadjaji
          </Link>
        </li>
        <li className="header__item">
          <Link className="header__link" to="/">
            Blog
          </Link>
        </li>
        <li className="header__item">
          <Link className="header__link" to="/">
            Profesori
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
