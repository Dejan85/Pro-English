import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="/">
            O name
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Kursevi
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Modeli Nastave
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Predstojeci Dogadjaji
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Blog
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Profesori
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Kontakt
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
