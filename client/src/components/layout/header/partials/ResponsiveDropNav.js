import React from "react";
import { Link } from "react-router-dom";

const ResponsiveDropNav = () => {
  return (
    <div className="responsiveDropNav">
      <ul className="responsiveDropNav__list">
        <li className="responsiveDropNav__item">
          <Link className="responsiveDropNav__link" to="/">
            Home
          </Link>
        </li>
        <li className="responsiveDropNav__item">
          <Link className="responsiveDropNav__link" to="/onama">
            O nama
          </Link>
        </li>
        <li className="responsiveDropNav__item">
          <Link className="responsiveDropNav__link" to="/kursevi">
            Kursevi
          </Link>
        </li>
        <li className="responsiveDropNav__item">
          <Link className="responsiveDropNav__link" to="/ispiti">
            Pripreme za ispite
          </Link>
        </li>
        <li className="responsiveDropNav__item">
          <Link className="responsiveDropNav__link" to="/dogadjaji">
            Dogadjaji
          </Link>
        </li>
        <li className="responsiveDropNav__item">
          <Link className="responsiveDropNav__link" to="/blog">
            Blog
          </Link>
        </li>
        <li className="responsiveDropNav__item">
          <Link className="responsiveDropNav__link" to="/kontakt">
            Kontakt
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ResponsiveDropNav;
