import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/">O name</Link>
        </li>
        <li className="nav__item">
          <Link to="/">Kursevi</Link>
        </li>
        <li className="nav__item">
          <Link to="/">Modeli Nastave</Link>
        </li>
        <li className="nav__item">
          <Link to="/">Predstojeci Dogadjaji</Link>
        </li>
        <li className="nav__item">
          <Link to="/">Blog</Link>
        </li>
        <li className="nav__item">
          <Link to="/">Profesori</Link>
        </li>
        <li className="nav__item">
          <Link to="/">Kontakt</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
