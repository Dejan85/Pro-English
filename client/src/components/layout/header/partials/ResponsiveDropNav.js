import React from "react";
import { Link } from "react-router-dom";

const ResponsiveDropNav = ({ handler }) => {
  return (
    <div className="responsiveDropNav">
      <ul className="responsiveDropNav__list">
        <li className="responsiveDropNav__item">
          <Link className="responsiveDropNav__link" to="/" onClick={handler}>
            Home
          </Link>
        </li>
        <li className="responsiveDropNav__item">
          <Link
            className="responsiveDropNav__link"
            to="/onama"
            onClick={handler}>
            O nama
          </Link>
        </li>
        <li className="responsiveDropNav__item">
          <Link
            className="responsiveDropNav__link"
            to="/kursevi"
            onClick={handler}>
            Kursevi
          </Link>
        </li>
        <li className="responsiveDropNav__item">
          <Link
            className="responsiveDropNav__link"
            to="/ispiti"
            onClick={handler}>
            Pripreme za ispite
          </Link>
        </li>
        <li className="responsiveDropNav__item">
          <Link
            className="responsiveDropNav__link"
            to="/dogadjaji"
            onClick={handler}>
            Dogadjaji
          </Link>
        </li>
        <li className="responsiveDropNav__item">
          <Link
            className="responsiveDropNav__link"
            to="/blog"
            onClick={handler}>
            Blog
          </Link>
        </li>
        <li className="responsiveDropNav__item">
          <Link
            className="responsiveDropNav__link"
            to="/kontakt"
            onClick={handler}>
            Kontakt
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ResponsiveDropNav;
